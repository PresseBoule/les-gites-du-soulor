import fs from 'node:fs';
import vm from 'node:vm';
import { transform } from 'esbuild';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import * as model from '../src/lib/contentModel.mjs';
import * as security from '../src/supabase/functions/server/security.mjs';
const raw = fs.readFileSync(new URL('../src/supabase/functions/server/index.tsx', import.meta.url), 'utf8').replace(/^import .*?;\r?\n/gm, '');
const compiled = await transform(raw + '\nglobalThis.api = {app};', { loader: 'ts', format: 'iife' });
const kvSource = fs.readFileSync(new URL('../src/supabase/functions/server/kv_store.tsx', import.meta.url), 'utf8').replace(/^import .*?;\r?\n/gm, '').replaceAll('export const ', 'const ');
const kvCompiled = await transform(kvSource + '\nglobalThis.kv = {get,set,del,mget,mset,mdel,getByPrefix};', { loader: 'ts', format: 'iife' });
const original = {
  hero: { titre: 'Les Gîtes du Soulor', sousTitre: 'Votre refuge', badge: 'Arrens-Marsous' },
  contact: { telephone: '06 45 79 59 39', email: 'spanazol@wanadoo.fr', adresse: '42 route du Soulor' },
  tarifs: [150, 125, 875].map((base, index) => ({ type: ['Nuitée', 'Dès deux nuits', 'Semaine'][index], prices: ['basse','moyenne','haute'].map((season, i) => ({ season, price: `${[[150,165,180],[125,140,150],[875,980,1050]][index][i]}€` })) })),
  gites: [{ nom: 'Le Suyen', image: '/photo.jpg', gallery: ['/photo.jpg'] }],
};
export function harness({ configured = true, env = {} } = {}) {
  const rows = new Map(Object.entries(original).map(([key, value]) => [key, structuredClone(value)]));
  if (configured) rows.set('admin_password', 'Personal-fixture-password-42!');
  const state = { failure: false, uploads: [], rows };
  function query() {
    let mode = 'select', body, filters = [], multiple;
    const builder = {
      select() { return builder; }, eq(key, value) { filters.push(([k,v]) => key === 'key' ? k === value : key === 'value->>revision' ? v.revision === value : key === 'value' ? JSON.stringify(v) === value : false); return builder; },
      in(key, values) { filters.push(([k]) => values.includes(k)); return builder; },
      upsert(data) { mode = 'upsert'; body = data; return builder; },
      insert(data) { mode = 'insert'; body = data; return builder; },
      update(data) { mode = 'update'; body = data; return builder; },
      delete() { mode = 'delete'; return builder; },
      async maybeSingle() { const result = await execute(); return { ...result, data: result.data?.[0] ?? null }; },
      then(resolve, reject) { return execute().then(resolve, reject); },
    };
    async function execute() {
      if (state.failure) return { data: null, error: new Error('Storage unavailable') };
      const matched = [...rows].filter(entry => filters.every(fn => fn(entry))).sort(([a],[b]) => a.localeCompare(b));
      if (mode === 'insert' && rows.has(body.key)) return { data: null, error: { code: '23505' } };
      if (mode === 'upsert' || mode === 'insert') for (const row of Array.isArray(body) ? body : [body]) rows.set(row.key, structuredClone(row.value));
      if (mode === 'update') for (const [key] of matched) rows.set(key, structuredClone(body.value));
      if (mode === 'delete') for (const [key] of matched) rows.delete(key);
      return { data: matched.map(([key, value]) => ({ key, value: structuredClone(value) })), error: null };
    }
    return builder;
  }
  const client = { from: () => query(), storage: { getBucket: async () => ({ data: { id: 'soulor-site-media' } }), from: () => ({ upload: async (path, bytes) => { state.uploads.push({ path, bytes }); return { error: null }; }, getPublicUrl: path => ({ data: { publicUrl: `https://media.example.test/${path}` } }) }) } };
  const context = vm.createContext({ console, ...model, ...security, Hono, cors, createClient: () => client, crypto: globalThis.crypto, Request, Response, File, Blob, FormData, Uint8Array, TextDecoder, TextEncoder, Date, JSON, Object, Array, Map, Set, Error, String, Number, Deno: { env: { get: key => env[key] }, serve() {} } });
  vm.runInContext(kvCompiled.code, context);
  vm.runInContext(compiled.code, context);
  const request = async (path, { method = 'GET', token, body, ip = 'fixture', form } = {}) => {
    const headers = { 'x-forwarded-for': ip, ...(token ? { 'X-CMS-Session': token } : {}), ...(!form ? { 'Content-Type': 'application/json' } : {}) };
    const response = await context.api.app.request(`http://localhost/make-server-66cb1054${path}`, { method, headers, ...(form ? { body: form } : body ? { body: JSON.stringify(body) } : {}) });
    return { status: response.status, data: await response.json() };
  };
  return { request, state, app: context.api.app, original: structuredClone(original) };
}
