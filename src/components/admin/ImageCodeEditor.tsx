import { useState, useEffect } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { isImageUrl } from '../../lib/contentModel.mjs';
import { EditorDialog } from './EditorDialog';
export function ImageCodeEditor({ isOpen, onClose, onSave, initialUrls, title, isSingle = false }: { isOpen: boolean; onClose: () => void; onSave: (urls: string[]) => void | Promise<void>; initialUrls: string[]; title: string; variableName?: string; isSingle?: boolean }) {
  const { uploadImage } = useAdmin();
  const [urls, setUrls] = useState(initialUrls), [busy, setBusy] = useState(false), [error, setError] = useState('');
  const initial = JSON.stringify(initialUrls);
  useEffect(() => { if (isOpen) { setUrls(JSON.parse(initial)); setError(''); } }, [isOpen, initial]);
  if (!isOpen) return null;
  const upload = async (files: FileList | null) => {
    if (!files?.length) return; setBusy(true); setError('');
    try {
      const next: string[] = [];
      for (const file of Array.from(files).slice(0, isSingle ? 1 : 30)) {
        if (file.size > 6000000 || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) throw new Error('Utilisez des photos JPG, PNG ou WebP de moins de 6 Mo.');
        next.push(await uploadImage(file));
      }
      setUrls(previous => isSingle ? next : [...previous, ...next]);
    } catch (error) { setError(error.message); } finally { setBusy(false); }
  };
  const save = async () => {
    const next = urls.map(url => url.trim()).filter(Boolean);
    if (!next.length || next.some(url => !isImageUrl(url))) { setError('Ajoutez une photo ou une adresse HTTPS valide.'); return; }
    try { await onSave(isSingle ? next.slice(0, 1) : next); onClose(); } catch (error) { setError(error.message); }
  };
  return <EditorDialog title={title} close={() => { if (!busy) onClose(); }}>
    <label className="cms-label">Ajouter depuis mon ordinateur<input type="file" accept="image/jpeg,image/png,image/webp" multiple={!isSingle} disabled={busy} onChange={event => void upload(event.target.files)} /></label>
    <p>JPG, PNG ou WebP · 6 Mo maximum par photo.</p>
    {urls.map((url, index) => <div className="cms-image-row" key={index}>
      {isImageUrl(url) && <img src={url} alt={`Aperçu ${index + 1}`} />}
      <label className="cms-label">Adresse de la photo {index + 1}<input value={url} onChange={event => setUrls(previous => previous.map((item, i) => i === index ? event.target.value : item))} /></label>
      {!isSingle && <><button disabled={index === 0} onClick={() => setUrls(previous => { const next = [...previous]; [next[index-1], next[index]] = [next[index], next[index-1]]; return next; })}>Monter</button><button onClick={() => setUrls(previous => previous.filter((_, i) => i !== index))}>Retirer</button></>}
    </div>)}
    {!isSingle && <button onClick={() => setUrls(previous => [...previous, ''])}>Ajouter une adresse</button>}
    {error && <p role="alert">{error}</p>}{busy && <p role="status">Envoi des photos…</p>}
    <div className="cms-actions"><button disabled={busy} onClick={onClose}>Annuler</button><button disabled={busy} onClick={() => void save()}>Appliquer à l’aperçu</button></div>
  </EditorDialog>;
}
