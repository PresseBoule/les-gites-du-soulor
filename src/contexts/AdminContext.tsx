import { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { SiteContent, defaultContent } from '../types/content';
import { setAtPath, mergeContent, validateContent } from '../lib/contentModel.mjs';
import { contentRequest } from '../lib/contentApi';
export type ContentField = { path: string; label: string; kind: 'text' | 'image'; value: string; page: string };
interface AdminContextType {
  isAdminMode: boolean; isAuthenticated: boolean; content: SiteContent;
  loading: boolean; loadError: string | null; hasUnsavedChanges: boolean; saving: boolean;
  setIsAdminMode: (value: boolean) => void; updateContent: (path: string, value: any) => Promise<void>;
  login: (password: string) => Promise<boolean>; logout: () => void;
  saveChanges: () => Promise<void>; discardChanges: () => void; reloadContent: () => Promise<void>;
  uploadImage: (file: File) => Promise<string>; changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  fields: ContentField[]; registerField: (field: ContentField) => void;
}
const AdminContext = createContext<AdminContextType | undefined>(undefined);
export function AdminProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [published, setPublished] = useState<SiteContent>(defaultContent);
  const [isAdminMode, setIsAdminMode] = useState(false), [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true), [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false), [hasUnsavedChanges, setDirty] = useState(false);
  const [fields, setFields] = useState<ContentField[]>([]);
  const revision = useRef<string | null>(null), generation = useRef(0), loadingRequest = useRef(0), saveInFlight = useRef(false);
  const registerField = useCallback((field: ContentField) => setFields(previous => {
    const current = previous.find(item => item.path === field.path);
    if (current && JSON.stringify(current) === JSON.stringify(field)) return previous;
    return [...previous.filter(item => item.path !== field.path), field];
  }), []);
  const reloadContent = useCallback(async () => {
    const request = ++loadingRequest.current; setLoading(true);
    try {
      const data = await contentRequest('/content');
      if (request !== loadingRequest.current) return;
      const next = mergeContent(defaultContent, data.content);
      setContent(next); setPublished(next); revision.current = data.revision ?? null;
      setLoadError(null); setDirty(false); generation.current++;
    } catch (error) { if (request === loadingRequest.current) setLoadError((error as Error).message); }
    finally { if (request === loadingRequest.current) setLoading(false); }
  }, []);
  useEffect(() => { void reloadContent(); sessionStorage.removeItem('admin_password'); }, [reloadContent]);
  useEffect(() => {
    const guard = (event: BeforeUnloadEvent) => { if (hasUnsavedChanges) { event.preventDefault(); event.returnValue = ''; } };
    window.addEventListener('beforeunload', guard); return () => window.removeEventListener('beforeunload', guard);
  }, [hasUnsavedChanges]);
  const login = async (password: string) => {
    const data = await contentRequest('/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
    if (!data.token) throw new Error('Le service d’administration doit être mis à jour avant de pouvoir enregistrer.');
    setToken(data.token); return true;
  };
  const logout = () => {
    if (saveInFlight.current || (hasUnsavedChanges && !window.confirm('Quitter sans publier vos modifications ?'))) return;
    if (token) void contentRequest('/admin/logout', { method: 'POST' }, token).catch(() => {});
    setToken(null); setIsAdminMode(false); setContent(published); setDirty(false); generation.current++;
  };
  const updateContent = async (path: string, value: any) => {
    if (!token || !isAdminMode) throw new Error('Connectez-vous pour modifier le site.');
    if (/^tarifs\.2\.prices\.\d+\.price$/.test(path)) throw new Error('Le tarif semaine est calculé automatiquement : sept fois le tarif par nuit dès deux nuits. Modifiez ce dernier.');
    setContent(previous => {
      let next = setAtPath(previous, path, value);
      const rate = /^tarifs\.1\.prices\.(\d+)\.price$/.exec(path);
      if (rate && /^\d+(?:[.,]\d{1,2})?\s*€?$/.test(String(value).trim())) {
        const weekly = Math.round(Number(String(value).replace(/[€\s]/g, '').replace(',', '.')) * 700) / 100;
        next = setAtPath(next, `tarifs.2.prices.${rate[1]}.price`, `${weekly}€`);
      }
      if (path.startsWith('fields.') && path.endsWith('.value')) {
        const field = fields.find(field => field.path === path);
        next = setAtPath(next, path.replace(/\.value$/, '.kind'), field?.kind || 'text');
      }
      return next;
    }); generation.current++; setDirty(true);
  };
  const saveChanges = async () => {
    if (!token || loadError) throw new Error(loadError || 'Votre connexion a expiré. Reconnectez-vous.');
    if (saveInFlight.current) return;
    validateContent(content);
    const snapshot = structuredClone(content), version = generation.current;
    saveInFlight.current = true; setSaving(true);
    try {
      const data = await contentRequest('/admin/content', { method: 'PUT', body: JSON.stringify({ content: snapshot, revision: revision.current }) }, token);
      revision.current = data.revision; setPublished(snapshot); if (version === generation.current) setDirty(false);
    } finally { saveInFlight.current = false; setSaving(false); }
  };
  const uploadImage = async (file: File) => {
    if (!token) throw new Error('Reconnectez-vous avant d’ajouter une photo.');
    const form = new FormData(); form.append('file', file);
    return (await contentRequest('/admin/media', { method: 'POST', body: form }, token)).url;
  };
  const changePassword = async (oldPassword: string, newPassword: string) => {
    const data = await contentRequest('/admin/change-password', { method: 'POST', body: JSON.stringify({ oldPassword, newPassword }) }, token || undefined); setToken(data.token);
  };
  const discardChanges = () => { if (!saveInFlight.current && window.confirm('Annuler toutes les modifications non publiées ?')) { setContent(published); setDirty(false); generation.current++; } };
  return <AdminContext.Provider value={{ content, isAdminMode, isAuthenticated: !!token, setIsAdminMode, updateContent, login, logout, saveChanges, discardChanges, hasUnsavedChanges, saving, loading, loadError, reloadContent, uploadImage, changePassword, fields, registerField }}>{children}</AdminContext.Provider>;
}
export function useAdmin() { const context = useContext(AdminContext); if (!context) throw new Error('useAdmin doit être utilisé dans AdminProvider'); return context; }
