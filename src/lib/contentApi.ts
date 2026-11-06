import { projectId, publicAnonKey } from '../utils/supabase/info';
const root = import.meta.env.DEV && import.meta.env.VITE_CMS_API_BASE || `https://${projectId}.supabase.co/functions/v1/make-server-66cb1054`;
export async function contentRequest(path: string, options: RequestInit = {}, token?: string) {
  const response = await fetch(`${root}${path}`, { ...options, cache: 'no-store',
    headers: { Authorization: `Bearer ${publicAnonKey}`, ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), ...(token ? { 'X-CMS-Session': token } : {}), ...options.headers },
    signal: options.signal || AbortSignal.timeout(20000),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) throw new Error(data.message || `Service indisponible (${response.status}). Réessayez sans fermer vos modifications.`);
  return data;
}
