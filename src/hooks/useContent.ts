import { useAdmin } from '../contexts/AdminContext';
/** All consumers share the provider: no independent fetch can overwrite an edit. */
export function useContent() {
  const { content, loading, loadError: error, reloadContent: refreshContent } = useAdmin();
  return { content, loading, error, refreshContent };
}
