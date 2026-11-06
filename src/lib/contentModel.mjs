import { pricingFromContent } from './pricing.mjs';
export const CONTENT_KEYS = ['tarifs', 'gites', 'contact', 'social', 'hero', 'infoCards', 'wellness', 'navigation', 'texts', 'pages', 'images', 'fields', 'seasonPeriods'];
const forbidden = new Set(['__proto__', 'prototype', 'constructor']);
export function getAtPath(object, path) {
  return path.split('.').reduce((value, key) => forbidden.has(key) ? undefined : value?.[key], object);
}
export function setAtPath(object, path, value) {
  const parts = path.split('.');
  if (parts.some(key => !key || forbidden.has(key))) throw new Error('Champ invalide');
  const result = structuredClone(object);
  let target = result;
  for (let index = 0; index < parts.length - 1; index++) {
    const key = parts[index];
    if (target[key] == null) target[key] = /^\d+$/.test(parts[index + 1]) ? [] : {};
    target = target[key];
  }
  target[parts.at(-1)] = value;
  return result;
}
export function isImageUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  if (/^\/(?!\/)/.test(value)) return !/[\s<>"'\\]/.test(value);
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; } catch { return false; }
}
export function mergeContent(defaults, remote = {}) {
  const output = structuredClone(defaults);
  if (!remote || typeof remote !== 'object' || Array.isArray(remote)) return output;
  for (const key of CONTENT_KEYS) {
    const value = remote[key];
    if (value == null) continue;
    if (Array.isArray(output[key])) {
      if (key === 'gites' && Array.isArray(value) && value.every(item => item && typeof item.nom === 'string')) {
        output.gites = output.gites.map((fallback, index) => ({ ...fallback, ...(value.find(item => item.slug && item.slug === fallback.slug) || value[index] || {}) }));
      } else if (Array.isArray(value) && key !== 'gites' && (key !== 'tarifs' || value.length === 3 && value.every(item => Array.isArray(item?.prices) && item.prices.length === 3))) output[key] = value;
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      if (key === 'hero' && !('sousTitre' in value || 'badge' in value || 'imageMain' in value)) continue;
      if (key === 'contact' && !('telephone' in value || 'email' in value || 'adresse' in value)) continue;
      output[key] = { ...output[key], ...value };
    }
  }
  return output;
}
export function validateContent(content) {
  if (!content || typeof content !== 'object' || Array.isArray(content)) throw new Error('Contenu invalide');
  if (Object.keys(content).some(key => !CONTENT_KEYS.includes(key))) throw new Error('Rubrique inconnue');
  function visit(value, depth = 0, path = '') {
    if (depth > 14) throw new Error('Contenu trop imbriqué');
    if (typeof value === 'string') {
      if (value.length > 30000) throw new Error('Texte trop long');
      if (/(?:^|\.)(?:image|imageMain|imageSecondaire|gallery\.\d+|imageHero)$/.test(path) && !isImageUrl(value)) throw new Error('Adresse de photo invalide');
      if (path.startsWith('social.') && !path.endsWith('Handle') && !/^https:\/\//i.test(value)) throw new Error('Les liens des réseaux sociaux doivent commencer par https://');
    }
    else if (value && typeof value === 'object') {
      for (const [key, item] of Object.entries(value)) { if (forbidden.has(key)) throw new Error('Champ interdit'); visit(item, depth + 1, path ? `${path}.${key}` : key); }
    } else if (value !== null && !['number', 'boolean'].includes(typeof value)) throw new Error('Valeur invalide');
  }
  visit(content);
  if (content.gites && (!Array.isArray(content.gites) || content.gites.some(item => !item || typeof item.nom !== 'string'))) throw new Error('Liste des gîtes invalide');
  if (content.tarifs) {
    if (!Array.isArray(content.tarifs) || content.tarifs.length !== 3) throw new Error('Les trois formules tarifaires sont requises');
    for (const option of content.tarifs) {
      if (!Array.isArray(option.prices) || option.prices.length !== 3) throw new Error('Les trois saisons sont requises');
      for (const price of option.prices) if (!/^\d+(?:[.,]\d{1,2})?\s*€?$/.test(price.price?.trim() || '') || Number(price.price.replace(/[€\s]/g, '').replace(',', '.')) <= 0) throw new Error('Chaque tarif doit être un montant positif en euros');
    }
  }
  for (const field of Object.values(content.fields || {})) {
    if (!field || !['text', 'image'].includes(field.kind) || typeof field.value !== 'string') throw new Error('Champ éditorial invalide');
    if (field.kind === 'image' && !isImageUrl(field.value)) throw new Error('Adresse de photo invalide');
  }
  if (content.tarifs || content.seasonPeriods) pricingFromContent(content);
  return content;
}
