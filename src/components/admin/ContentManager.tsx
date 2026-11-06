import { useMemo, useState } from 'react';
import { useAdmin, ContentField } from '../../contexts/AdminContext';
import { getAtPath } from '../../lib/contentModel.mjs';
import { EditorDialog } from './EditorDialog';
import { ImageCodeEditor } from './ImageCodeEditor';
import catalog from '../../content/catalog.json';
import editablePaths from '../../content/editable-paths.json';
import { SeasonEditor } from './SeasonEditor';
const labels = { hero: 'Accueil', gites: 'Gîtes', tarifs: 'Tarifs', contact: 'Coordonnées', social: 'Réseaux sociaux', wellness: 'Bien-être', texts: 'Textes du site', infoCards: 'Informations', pages: 'Pages', images: 'Photos' };
const pageNames = { '/': 'Accueil', '/tarifs': 'Tarifs', '/gites': 'Nos gîtes', '/bien-etre': 'Bien-être', '/contact': 'Contact', HomePage: 'Accueil', TarifsPage: 'Tarifs', ContactPage: 'Contact', BienEtrePage: 'Bien-être', GitesPage: 'Nos gîtes', GiteArrensMarsousPage: 'Présentation — Arrens-Marsous', GiteValAzunPage: 'Présentation — Val d’Azun', GiteBainNordiquePage: 'Présentation — Bain nordique', GiteProximiteLourdesPage: 'Présentation — Lourdes', Footer: 'Pied de page', LegalModal: 'Mentions et confidentialité', CookieBanner: 'Bannière cookies', Navigation: 'Menu', MentionsLegalesPage: 'Mentions légales' };
const skip = new Set(['icon', 'icone', 'color', 'couleur', 'accentColor', 'id', 'slug', 'kind']);
const isEditable = (path: string) => editablePaths.some(pattern => {
  const segments = pattern.split('.'), actual = path.split('.');
  return segments.length === actual.length && segments.every((segment, index) => segment === '*' || segment === actual[index]);
});
function contentFields(value: any, path = '', section = '', root = value): ContentField[] {
  if (typeof value === 'string') {
    const kind = /(?:image|imageMain|imageSecondaire|gallery\.\d+|imageHero)$/.test(path) ? 'image' : 'text';
    const gite = /^gites\.(\d+)\.(?:image|gallery\.(\d+))$/.exec(path);
    const label = kind === 'image' ? gite ? `${root.gites?.[Number(gite[1])]?.nom || 'Gîte'} — ${gite[2] === undefined ? 'Photo principale' : `Galerie, photo ${Number(gite[2]) + 1}`}` : `${labels[section] || 'Site'} — ${path.endsWith('imageSecondaire') ? 'Photo secondaire' : 'Photo'}` : `${labels[section] || section} — ${value.slice(0, 70) || 'Texte vide'}`;
    return [{ path, value, label, kind, page: 'Réglages communs' }];
  }
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, item]) => skip.has(key) || ['fields', 'navigation', 'seasonPeriods'].includes(key) ? [] : contentFields(item, path ? `${path}.${key}` : key, section || key, root));
}
export function ContentManager({ close }: { close: () => void }) {
  const { content, fields, updateContent, registerField, changePassword } = useAdmin();
  const [search, setSearch] = useState(''), [filter, setFilter] = useState(''), [security, setSecurity] = useState(false);
  const [seasons, setSeasons] = useState(false);
  const [kind, setKind] = useState('');
  const [selected, setSelected] = useState<ContentField | null>(null), [draft, setDraft] = useState(''), [error, setError] = useState('');
  const [oldPassword, setOldPassword] = useState(''), [newPassword, setNewPassword] = useState(''), [confirmation, setConfirmation] = useState('');
  const allFields = useMemo(() => {
    const combined = new Map<string, ContentField>();
    for (const field of [...(catalog as ContentField[]), ...contentFields(content).filter(field => isEditable(field.path)), ...fields]) combined.set(field.path, { ...field, label: field.kind === 'image' && /^(?:\/|https?:)/.test(field.label) ? `Photo — ${pageNames[field.page] || 'Site'}` : field.label, page: pageNames[field.page] || field.page, value: getAtPath(content, field.path) ?? field.value });
    return [...combined.values()];
  }, [content, fields]);
  const matching = allFields.filter(field => (!filter || field.page === filter) && (!kind || field.kind === kind) && `${field.label} ${field.value}`.toLocaleLowerCase('fr').includes(search.toLocaleLowerCase('fr')));
  const select = (field: ContentField) => { registerField(field); setSelected(field); setDraft(field.value); setError(''); };
  const apply = async (value: string) => { if (!selected) return; try { await updateContent(selected.path, value); setSelected(null); } catch (error) { setError(error.message); } };
  return <EditorDialog title="Gérer le contenu du site" close={close}>
    <div className="cms-tabs"><button onClick={() => { setSecurity(false); setSeasons(false); }}>Textes et photos</button><button onClick={() => { setSecurity(false); setSeasons(true); }}>Périodes tarifaires</button><button onClick={() => { setSecurity(true); setSeasons(false); }}>Mot de passe</button></div>
    {security ? <form onSubmit={async event => { event.preventDefault(); setError(''); if (newPassword !== confirmation) { setError('Les mots de passe ne correspondent pas.'); return; } try { await changePassword(oldPassword, newPassword); setOldPassword(''); setNewPassword(''); setConfirmation(''); setError('Mot de passe modifié. Les autres sessions sont déconnectées.'); } catch (error) { setError(error.message); } }}>
      <label className="cms-label">Mot de passe actuel<input type="password" autoComplete="current-password" required value={oldPassword} onChange={event => setOldPassword(event.target.value)} /></label>
      <label className="cms-label">Nouveau mot de passe (12 caractères minimum)<input type="password" autoComplete="new-password" minLength={12} required value={newPassword} onChange={event => setNewPassword(event.target.value)} /></label>
      <label className="cms-label">Confirmer le nouveau mot de passe<input type="password" autoComplete="new-password" required value={confirmation} onChange={event => setConfirmation(event.target.value)} /></label><button type="submit">Changer le mot de passe</button>
    </form> : seasons ? <SeasonEditor /> : <>
      <p>Recherchez un texte ou une photo. Les éléments des galeries et des fenêtres s’ajoutent à cette liste lorsque vous les ouvrez sur le site.</p>
      <p>Les montants se modifient dans les tarifs. Le prix de la semaine suit automatiquement sept nuits au tarif dégressif.</p>
      <label className="cms-label">Rechercher<input type="search" value={search} onChange={event => setSearch(event.target.value)} /></label>
      <label className="cms-label">Type de contenu<select value={kind} onChange={event => setKind(event.target.value)}><option value="">Textes et photos</option><option value="text">Textes</option><option value="image">Photos</option></select></label>
      <label className="cms-label">Page ou rubrique<select value={filter} onChange={event => setFilter(event.target.value)}><option value="">Tout le site</option>{[...new Set(allFields.map(field => field.page))].sort().map(page => <option key={page}>{page}</option>)}</select></label>
      <p>{matching.length} éléments</p>
      {matching.slice(0, 100).map(field => <div className="cms-field-row" key={field.path}>
        <small>{field.page} · {field.kind === 'image' ? 'Photo' : 'Texte'}</small><p>{field.label}</p>{field.kind === 'image' && <img src={field.value} alt={field.label} style={{ maxHeight: 90, maxWidth: 160 }} />}<button onClick={() => select(field)}>Modifier</button>
      </div>)}{matching.length > 100 && <p>Affinez la recherche pour afficher les autres éléments.</p>}
    </>}
    {error && <p role="alert">{error}</p>}
    {selected && selected.kind === 'text' && <EditorDialog title="Modifier le texte" close={() => setSelected(null)}><label className="cms-label">Texte<textarea value={draft} rows={5} onChange={event => setDraft(event.target.value)} /></label><button onClick={() => void apply(draft)}>Appliquer à l’aperçu</button></EditorDialog>}
    {selected && selected.kind === 'image' && <ImageCodeEditor key={selected.path} isOpen onClose={() => setSelected(null)} onSave={urls => apply(urls[0])} initialUrls={[selected.value]} title="Modifier la photo" isSingle />}
  </EditorDialog>;
}
