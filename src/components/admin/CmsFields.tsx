import { useAdmin } from '../../contexts/AdminContext';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { ImgHTMLAttributes } from 'react';
function fieldKey(id: string, scope: unknown[]) { return `${id}${scope.length ? '-' + scope.map(item => encodeURIComponent(String(item)).replaceAll('.', '%2E')).join('-') : ''}`; }
export function CmsText({ id, scope = [], children }: { id: string; scope?: unknown[]; children: string | number }) {
  const { content } = useAdmin(); const key = fieldKey(id, scope);
  return <EditableText path={`fields.${key}.value`} value={content.fields?.[key]?.value ?? String(children ?? '')} as="span" />;
}
export function CmsImage({ id, scope = [], ...props }: ImgHTMLAttributes<HTMLImageElement> & { id: string; scope?: unknown[] }) {
  return <EditableImage {...props} path={`fields.${fieldKey(id, scope)}.value`} />;
}
