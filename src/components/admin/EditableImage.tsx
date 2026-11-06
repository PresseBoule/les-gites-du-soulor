import { ImgHTMLAttributes, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { getAtPath } from '../../lib/contentModel.mjs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ImageCodeEditor } from './ImageCodeEditor';
export function EditableImage({ path, src, value, alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement> & { path: string; value?: string }) {
  const { content, isAdminMode, updateContent, registerField } = useAdmin();
  const { pathname } = useLocation(); const [editing, setEditing] = useState(false);
  const stored = getAtPath(content, path), displayed = typeof stored === 'string' ? stored : src || value || '';
  useEffect(() => { if (isAdminMode) registerField({ path, value: displayed, label: alt || 'Photo', kind: 'image', page: pathname }); }, [path, displayed, alt, pathname, isAdminMode, registerField]);
  const open = event => { if (isAdminMode && !document.body.classList.contains('cms-preview')) { event.preventDefault(); event.stopPropagation(); setEditing(true); } };
  return <><ImageWithFallback {...props} src={displayed} alt={alt} {...(isAdminMode ? { 'data-cms-path': path, tabIndex: 0, title: 'Modifier cette photo', onClickCapture: open, onKeyDown: event => { if (event.key === 'Enter') open(event); }, className: `${props.className || ''} cms-editable` } : {})} />
    {editing && <ImageCodeEditor isOpen onClose={() => setEditing(false)} onSave={urls => updateContent(path, urls[0])} initialUrls={[displayed]} title={`Modifier la photo : ${alt}`} isSingle />}</>;
}
