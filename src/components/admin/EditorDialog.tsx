import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
export function EditorDialog({ title, children, close }: { title: string; children: ReactNode; close: () => void }) {
  return <Dialog open onOpenChange={open => { if (!open) close(); }}><DialogContent className="cms-dialog"><DialogTitle>{title}</DialogTitle><DialogDescription>Les changements restent en aperçu jusqu’au clic sur Publier.</DialogDescription>{children}</DialogContent></Dialog>;
}
