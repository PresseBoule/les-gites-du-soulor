import { useAdmin } from '../../contexts/AdminContext';
export function SeasonEditor() {
  const { content, updateContent } = useAdmin();
  const periods = content.seasonPeriods || [];
  const change = (index: number, position: number, value: string) => updateContent('seasonPeriods', periods.map((period, i) => i === index ? period.map((item, j) => j === position ? value : item) : period));
  return <div><p>Début inclus, fin exclue : la dernière date correspond au départ. Chaque nuit suit sa propre saison. Les chevauchements et dates invalides bloquent la publication ; une période absente reste « tarif à confirmer ».</p>
    {periods.map(([start, end, season], index) => <div className="cms-image-row" key={index}>
      <label className="cms-label">Début<input type="date" value={start} onChange={event => void change(index, 0, event.target.value)} /></label>
      <label className="cms-label">Fin<input type="date" value={end} onChange={event => void change(index, 1, event.target.value)} /></label>
      <label className="cms-label">Saison<select value={season} onChange={event => void change(index, 2, event.target.value)}><option value="basse">Basse</option><option value="moyenne">Moyenne</option><option value="haute">Haute</option></select></label>
      <button onClick={() => void updateContent('seasonPeriods', periods.filter((_, i) => i !== index))}>Retirer cette période</button>
    </div>)}<button onClick={() => void updateContent('seasonPeriods', [...periods, ['', '', 'basse']])}>Ajouter une période</button>
  </div>;
}
