import { useAdmin } from '../contexts/AdminContext';
export function priceRange(content: any, option: number) {
  const values = (content.tarifs?.[option]?.prices || []).map(item => Number(String(item.price).replace(/[€\s]/g, '').replace(',', '.'))).filter(Number.isFinite);
  return values.length ? { min: Math.min(...values), max: Math.max(...values) } : null;
}
export function PriceRange({ option, suffix = '' }: { option: number; suffix?: string }) {
  const { content } = useAdmin(), range = priceRange(content, option);
  return <span>{range ? `${range.min}€${range.min === range.max ? '' : ` à ${range.max}€`}${suffix}` : 'Tarif à confirmer'}</span>;
}
export function PriceSummary({ wellness = false }: { wellness?: boolean }) {
  const { content } = useAdmin();
  const values = [0,1,2].map(option => priceRange(content, option)?.min);
  return <span>{values.every(value => value !== undefined) ? `Tarifs : nuitée dès ${values[0]}€ • Dès 2 nuits : ${values[1]}€/nuit • Semaine dès ${values[2]}€${wellness ? ' • Bain nordique inclus' : ''}` : 'Tarifs à confirmer'}</span>;
}
