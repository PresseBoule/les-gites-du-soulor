import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
const ContentManager = lazy(() => import('./ContentManager').then(module => ({ default: module.ContentManager })));
import './admin.css';
export function AdminToolbar() {
  const { isAdminMode, logout, saveChanges, discardChanges, hasUnsavedChanges, saving, loadError, reloadContent } = useAdmin();
  const [message, setMessage] = useState(''), [error, setError] = useState(''), [panel, setPanel] = useState(false), [preview, setPreview] = useState(false);
  const toolbar = useRef<HTMLDivElement>(null);
  useEffect(() => { if (hasUnsavedChanges) { setMessage(''); setError(''); } }, [hasUnsavedChanges]);
  useEffect(() => {
    if (!isAdminMode || !toolbar.current) return;
    document.body.classList.add('cms-active');
    const resize = new ResizeObserver(() => document.documentElement.style.setProperty('--cms-toolbar-height', `${toolbar.current?.offsetHeight || 0}px`));
    resize.observe(toolbar.current);
    return () => { resize.disconnect(); document.body.classList.remove('cms-active', 'cms-preview'); };
  }, [isAdminMode]);
  if (!isAdminMode) return null;
  const save = async () => { setMessage(''); setError(''); try { await saveChanges(); setMessage('Publication enregistrée. Les nouvelles visites voient vos changements.'); } catch (error) { setError(error.message); } };
  return <><div ref={toolbar} className="cms-toolbar" role="region" aria-label="Administration du site">
    <strong>{preview ? 'Aperçu du site' : 'Édition du site'}</strong><span>{hasUnsavedChanges ? 'Changements non publiés' : 'À jour'}</span>
    <div className="cms-actions"><button onClick={() => setPanel(true)}>Textes, photos et réglages</button><button onClick={() => { setPreview(!preview); document.body.classList.toggle('cms-preview', !preview); }}>{preview ? 'Revenir à l’édition' : 'Aperçu'}</button>
      <button onClick={discardChanges} disabled={saving || !hasUnsavedChanges}>Annuler les changements</button><button onClick={() => void save()} disabled={saving || !hasUnsavedChanges || !!loadError}>{saving ? 'Publication…' : 'Publier'}</button><button disabled={saving} onClick={() => { logout(); document.body.classList.remove('cms-preview'); }}>Quitter</button></div>
    {loadError && <p role="alert">Le contenu n’a pas pu être chargé. Publication bloquée pour protéger vos données. <button onClick={() => void reloadContent()}>Réessayer</button></p>}
    {error && <p role="alert">{error}</p>}{message && <p role="status">{message}</p>}
  </div><div className="cms-toolbar-space" />{panel && <Suspense fallback={<p role="status">Ouverture des contenus…</p>}><ContentManager close={() => setPanel(false)} /></Suspense>}</>;
}
