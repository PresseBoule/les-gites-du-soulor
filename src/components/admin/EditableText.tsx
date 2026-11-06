import { useEffect, useState, CSSProperties, ElementType } from 'react';
import { useLocation } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { getAtPath } from '../../lib/contentModel.mjs';
import { EditorDialog } from './EditorDialog';
export function EditableText({ path, value, as: Tag = 'p', className = '', style, multiline = false }: { path: string; value: string; as?: ElementType; className?: string; style?: CSSProperties; multiline?: boolean; placeholder?: string }) {
  const { content, isAdminMode, updateContent, registerField } = useAdmin();
  const { pathname } = useLocation();
  const [editing, setEditing] = useState(false), [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  const stored = getAtPath(content, path);
  const displayed = typeof stored === 'string' ? stored : typeof value === 'string' ? value : '';
  useEffect(() => { if (isAdminMode) registerField({ path, value: displayed, label: displayed.slice(0, 85) || path, kind: 'text', page: pathname }); }, [path, displayed, pathname, isAdminMode, registerField]);
  const open = (event) => {
    // Keep links and navigation usable; their labels remain editable in the catalogue.
    if (!isAdminMode || document.body.classList.contains('cms-preview') || event.currentTarget.closest('a,button')) return;
    event.preventDefault(); event.stopPropagation(); setDraft(displayed); setEditing(true); setError('');
  };
  const save = async () => { try { await updateContent(path, draft); setEditing(false); } catch (error) { setError(error.message); } };
  return <><Tag className={`${className}${isAdminMode ? ' cms-editable' : ''}`} style={{ whiteSpace: 'pre-wrap', ...style }}
    {...(isAdminMode ? { 'data-cms-path': path, tabIndex: 0, title: 'Modifier ce texte', onClickCapture: open, onKeyDown: event => { if (event.key === 'Enter') open(event); } } : {})}>{displayed}</Tag>
    {editing && <EditorDialog title="Modifier le texte" close={() => setEditing(false)}><form onSubmit={event => { event.preventDefault(); void save(); }}>
      <label className="cms-label">Texte<textarea aria-label="Texte" value={draft} onChange={event => setDraft(event.target.value)} rows={multiline || draft.length > 100 ? 6 : 3} maxLength={30000} autoFocus /></label>
      {error && <p role="alert">{error}</p>}<div className="cms-actions"><button type="button" onClick={() => setEditing(false)}>Annuler</button><button type="submit">Appliquer à l’aperçu</button></div>
    </form></EditorDialog>}
  </>;
}
