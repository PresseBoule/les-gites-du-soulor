import { Hono } from 'npm:hono@4.12.7';
import { cors } from 'npm:hono@4.12.7/cors';
import { createClient } from 'jsr:@supabase/supabase-js@2.49.8';
import * as kv from './kv_store.tsx';
import { CONTENT_KEYS, validateContent } from '../../../lib/contentModel.mjs';
import { digest, passwordHash, passwordMatches, validateNewPassword, detectImage } from './security.mjs';

const app = new Hono();
const prefix = '/make-server-66cb1054';
const table = 'kv_store_66cb1054', documentKey = 'cms:published', bucket = 'soulor-site-media';
const db = () => createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
app.use('*', cors({ origin: '*', allowHeaders: ['Content-Type', 'Authorization', 'X-CMS-Session'], allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'] }));
app.use('*', async (c, next) => { c.header('Cache-Control', 'no-store'); await next(); });
app.onError((error, c) => { console.error('CMS request failed:', error.name); return c.json({ success: false, message: 'Le service de contenu est indisponible. Vos modifications ne sont pas publiées.' }, 500); });
app.get(`${prefix}/health`, c => c.json({ status: 'ok', cmsVersion: 2 }));

async function readDocument() { return await kv.get(documentKey); }
async function readLegacyContent() {
  // mget must preserve the requested order, not the order returned by Postgres.
  const values = await kv.mget(CONTENT_KEYS);
  return Object.fromEntries(CONTENT_KEYS.map((key, index) => [key, values[index] ?? null]));
}
async function readPassword() {
  const stored = await kv.get('admin_password');
  if (stored && stored !== 'admin123') return stored;
  const configured = Deno.env.get('SITE_ADMIN_PASSWORD');
  return configured && configured.length >= 12 && configured !== 'admin123' ? configured : null;
}
async function issueSession(version?: string) {
  const token = crypto.randomUUID() + crypto.randomUUID();
  const authVersion = version || (await kv.get('cms:auth-version')) || 'initial';
  await kv.set(`cms:session:${await digest(token)}`, { expiresAt: Date.now() + 2 * 60 * 60 * 1000, authVersion });
  return token;
}
async function authorized(c) {
  const token = c.req.header('X-CMS-Session');
  if (!token || token.length > 100) return false;
  const session = await kv.get(`cms:session:${await digest(token)}`);
  return !!session && session.expiresAt > Date.now() && session.authVersion === ((await kv.get('cms:auth-version')) || 'initial');
}
const denied = c => c.json({ success: false, message: 'Votre connexion a expiré. Reconnectez-vous pour publier.' }, 401);
async function jsonBody(c, limit = 1200000) {
  const reader = c.req.raw.body?.getReader();
  if (!reader) throw new Error('Corps manquant');
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > limit) { await reader.cancel(); throw new Error('Contenu trop volumineux'); } chunks.push(value); }
  const bytes = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
app.get(`${prefix}/content`, async c => {
  const document = await readDocument();
  return c.json({ success: true, content: document?.content || await readLegacyContent(), revision: document?.revision ?? null });
});
app.post(`${prefix}/admin/login`, async c => {
  // Persistent per-source cooldown; failed credentials are never logged.
  const ip = (c.req.header('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const key = `cms:login:${await digest(ip)}`;
  const attempt = await kv.get(key);
  if (attempt?.blockedUntil > Date.now()) return c.json({ success: false, message: 'Trop de tentatives. Réessayez dans quinze minutes.' }, 429);
  let body; try { body = await jsonBody(c, 2000); } catch { return c.json({ success: false, message: 'Demande invalide.' }, 400); }
  const authVersion = (await kv.get('cms:auth-version')) || 'initial';
  const stored = await readPassword();
  if (!stored || stored === 'admin123') return c.json({ success: false, message: 'Un mot de passe administrateur personnel doit être configuré dans Supabase.' }, 503);
  if (!await passwordMatches(body.password, stored)) {
    const failures = attempt?.since > Date.now() - 900000 ? (attempt.failures || 0) + 1 : 1;
    await kv.set(key, { failures, since: failures === 1 ? Date.now() : attempt.since, blockedUntil: failures >= 5 ? Date.now() + 900000 : 0 });
    return c.json({ success: false, message: 'Mot de passe incorrect.' }, 401);
  }
  if (typeof stored === 'string') {
    const existing = await kv.get('admin_password'), value = await passwordHash(stored);
    if (existing !== undefined && existing !== 'admin123' && !await passwordMatches(body.password, existing)) return denied(c);
    // Compare-and-swap prevents a concurrent password change from being undone by migration.
    const query = existing === undefined
      ? db().from(table).insert({ key: 'admin_password', value })
      : db().from(table).update({ value }).eq('key', 'admin_password').eq('value', JSON.stringify(existing));
    const { error } = await query;
    if (error && error.code !== '23505') throw error;
    if (!await passwordMatches(body.password, await readPassword())) return denied(c);
  }
  await kv.del(key);
  return c.json({ success: true, token: await issueSession(authVersion) });
});
app.post(`${prefix}/admin/logout`, async c => {
  const token = c.req.header('X-CMS-Session');
  if (token && token.length <= 100) await kv.del(`cms:session:${await digest(token)}`);
  return c.json({ success: true });
});
app.post(`${prefix}/admin/change-password`, async c => {
  if (!await authorized(c)) return denied(c);
  let body; try { body = await jsonBody(c, 2000); validateNewPassword(body.newPassword); } catch (error) { return c.json({ success: false, message: error.message }, 400); }
  if (!await passwordMatches(body.oldPassword, await readPassword())) return c.json({ success: false, message: 'Ancien mot de passe incorrect.' }, 401);
  await kv.mset(['admin_password', 'cms:auth-version'], [await passwordHash(body.newPassword), crypto.randomUUID()]);
  return c.json({ success: true, token: await issueSession() });
});
app.put(`${prefix}/admin/content`, async c => {
  if (!await authorized(c)) return denied(c);
  let body; try { body = await jsonBody(c); validateContent(body.content); } catch (error) { return c.json({ success: false, message: error.message }, 400); }
  const current = await readDocument();
  if ((current?.revision ?? null) !== body.revision) return c.json({ success: false, message: 'Le site a été modifié ailleurs. Copiez vos changements puis rechargez le contenu avant de publier.' }, 409);
  const revision = crypto.randomUUID();
  const previous = current ? [{ content: current.content, revision: current.revision, savedAt: current.savedAt }, ...(current.previous || []).slice(0, 2)] : [{ content: await readLegacyContent(), revision: null, savedAt: new Date().toISOString() }];
  const document = { content: body.content, revision, savedAt: new Date().toISOString(), previous };
  const client = db();
  if (current) {
    const { data, error } = await client.from(table).update({ value: document }).eq('key', documentKey).eq('value->>revision', current.revision).select('key');
    if (error) throw error;
    if (!data?.length) return c.json({ success: false, message: 'Une autre publication vient de terminer. Rechargez le contenu avant de publier.' }, 409);
  } else {
    const { error } = await client.from(table).insert({ key: documentKey, value: document });
    if (error?.code === '23505') return c.json({ success: false, message: 'Une autre publication vient de terminer. Rechargez le contenu avant de publier.' }, 409);
    if (error) throw error;
  }
  return c.json({ success: true, revision });
});
app.post(`${prefix}/admin/media`, async c => {
  if (!await authorized(c)) return denied(c);
  // Enforce a streaming limit before multipart parsing.
  const reader = c.req.raw.body?.getReader(); if (!reader) return c.json({ success: false, message: 'Photo manquante.' }, 400);
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 6500000) { await reader.cancel(); return c.json({ success: false, message: 'La photo doit peser moins de 6 Mo.' }, 413); } chunks.push(value); }
  const form = await new Response(new Blob(chunks), { headers: { 'Content-Type': c.req.header('content-type')! } }).formData();
  const file = form.get('file');
  if (!(file instanceof File) || file.size > 6000000) return c.json({ success: false, message: 'Choisissez une photo JPG, PNG ou WebP de moins de 6 Mo.' }, 400);
  const bytes = new Uint8Array(await file.arrayBuffer()), format = detectImage(bytes);
  if (!format) return c.json({ success: false, message: 'Format non pris en charge. Utilisez JPG, PNG ou WebP.' }, 400);
  const client = db();
  const { data: existing } = await client.storage.getBucket(bucket);
  if (!existing) { const { error } = await client.storage.createBucket(bucket, { public: true, fileSizeLimit: 6000000, allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'] }); if (error && !/exist/i.test(error.message)) throw error; }
  const path = `${new Date().toISOString().slice(0,10)}/${crypto.randomUUID()}.${format.ext}`;
  const { error } = await client.storage.from(bucket).upload(path, bytes, { contentType: format.mime, upsert: false });
  if (error) throw error;
  return c.json({ success: true, url: client.storage.from(bucket).getPublicUrl(path).data.publicUrl });
});
Deno.serve(app.fetch);
