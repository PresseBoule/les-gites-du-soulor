import { ContentManager } from './admin/ContentManager';
/** Compatibility entry point; the footer and toolbar now share a single editor. */
export function AdminDashboard({ onLogout }: { onLogout: () => void }) { return <ContentManager close={onLogout} />; }
