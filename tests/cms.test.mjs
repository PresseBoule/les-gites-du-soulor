import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';
import { transform } from 'esbuild';
import { harness } from './cms-harness.mjs';
import { setAtPath, mergeContent, validateContent } from '../src/lib/contentModel.mjs';
import { calculateServerPrice, pricingFromContent, SEASON_PERIODS } from '../src/lib/pricing.mjs';
const password = 'Personal-fixture-password-42!';
async function login(h) { const result = await h.request('/admin/login', { method: 'POST', body: { password } }); assert.equal(result.status, 200); assert.ok(result.data.token); return result.data.token; }
test('legacy content is associated with keys regardless of database result order; no credentials are public', async () => {
  const h = harness(); const result = await h.request('/content');
  assert.deepEqual(result.data.content.hero, h.original.hero); assert.deepEqual(result.data.content.contact, h.original.contact);
  assert.equal(result.data.content.gites[0].nom, 'Le Suyen'); assert.equal(JSON.stringify(result).includes(password), false);
});
test('first publication, reload and next publication persist texts, photos and prices together', async () => {
  const h = harness(), token = await login(h);
  const content = structuredClone(h.original); content.hero.titre = 'Mon nouveau titre'; content.gites[0].gallery.push('https://media.example.test/new.jpg');
  const first = await h.request('/admin/content',{method:'PUT', token, body:{content,revision:null}}); assert.equal(first.status,200);
  const loaded = await h.request('/content'); assert.deepEqual(loaded.data.content, content); assert.equal(loaded.data.revision, first.data.revision);
  content.hero.titre='Deuxième titre';
  assert.equal((await h.request('/admin/content',{method:'PUT', token, body:{content,revision:first.data.revision}})).status,200);
  assert.equal(h.state.rows.get('cms:published').previous[0].content.hero.titre,'Mon nouveau titre');
  assert.equal(JSON.stringify(loaded.data).includes('previous'), false);
});
test('unauthenticated writes, forged session and legacy password-in-body cannot publish', async () => {
  const h = harness();
  for (const token of [undefined, 'forged']) assert.equal((await h.request('/admin/content', {method:'PUT',token,body:{password,content:h.original,revision:null}})).status,401);
  assert.equal(h.state.rows.has('cms:published'),false);
});
test('wrong, unset and old public default passwords cannot authenticate; repeated failures are limited',async()=>{
  const h=harness();
  for(let i=0;i<5;i++)assert.equal((await h.request('/admin/login',{method:'POST',body:{password:'wrong'}})).status,401);
  assert.equal((await h.request('/admin/login',{method:'POST',body:{password}})).status,429);
  assert.equal((await harness({configured:false}).request('/admin/login',{method:'POST',body:{password:'admin123'}})).status,503);
  const old=harness();old.state.rows.set('admin_password','admin123');assert.equal((await old.request('/admin/login',{method:'POST',body:{password:'admin123'}})).status,503);
});
test('password is hashed, sessions expire and password change invalidates other sessions',async()=>{
  const h=harness(), token=await login(h), other=await login(h);
  assert.equal(h.state.rows.get('admin_password').algorithm,'pbkdf2-sha256');
  const result=await h.request('/admin/change-password',{method:'POST',token,body:{oldPassword:password,newPassword:'Another-fixture-password-43!'}});assert.equal(result.status,200);
  assert.equal((await h.request('/admin/content',{method:'PUT',token:other,body:{content:h.original,revision:null}})).status,401);
  assert.equal((await h.request('/admin/content',{method:'PUT',token:result.data.token,body:{content:h.original,revision:null}})).status,200);
  for(const [key,value] of h.state.rows)if(key.startsWith('cms:session:'))value.expiresAt=0;
  assert.equal((await h.request('/admin/content',{method:'PUT',token:result.data.token,body:{content:h.original,revision:null}})).status,401);
});
test('stale or concurrent initial publications cannot overwrite a newer publication',async()=>{
  const h=harness(),token=await login(h);
  const body={content:h.original,revision:null};
  const results=await Promise.all([h.request('/admin/content',{method:'PUT',token,body}),h.request('/admin/content',{method:'PUT',token,body})]);
  assert.deepEqual(results.map(result=>result.status).sort(),[200,409]);
  assert.equal((await h.request('/admin/content',{method:'PUT',token,body})).status,409);
});
test('invalid prices, overlapping seasons, prototype pollution and unknown keys cannot be published',async()=>{
  const h=harness(), token=await login(h);
  for(const content of [{...h.original,admin_password:'stolen'}, {...h.original,seasonPeriods:[['2027-01-01','2027-02-01','basse'],['2027-01-15','2027-03-01','haute']]},setAtPath(h.original,'tarifs.0.prices.0.price','-3€'),{...h.original,fields:{photo:{kind:'image',value:'javascript:alert(1)'}}}])assert.equal((await h.request('/admin/content',{method:'PUT',token,body:{content,revision:null}})).status,400);
  assert.throws(()=>setAtPath({},'__proto__.polluted',true));assert.equal({}.polluted,undefined);
});
test('all saved nightly rates feed the same cross-season quote used by calendar and agent',()=>{
  const h=harness();let content=setAtPath(h.original,'tarifs.1.prices.0.price','130€');content=setAtPath(content,'tarifs.2.prices.0.price','910€');
  const config=pricingFromContent(content);assert.equal(calculateServerPrice('2027-02-05','2027-02-07',config).total,280);
  assert.equal(calculateServerPrice('2027-02-05','2027-02-07',null),null);
  assert.equal(calculateServerPrice('2027-09-01','2027-09-02',config),null);
});
test('uploads reject SVG and disguised files; only verified image bytes are stored',async()=>{
  const h=harness(),token=await login(h);
  for(const [bytes,type,status] of [['<svg onload="alert(1)"/>','image/svg+xml',400],['not-a-jpeg','image/jpeg',400],[new Uint8Array([255,216,255,224,0,16]),'image/jpeg',200]]){
    const form=new FormData();form.append('file',new File([bytes],'photo.jpg',{type}));assert.equal((await h.request('/admin/media',{method:'POST',token,form})).status,status);
  }
  assert.equal(h.state.uploads.length,1);
});
test('publication failures do not report success or modify the last published content',async()=>{
  const h=harness(),token=await login(h);h.state.failure=true;
  assert.equal((await h.request('/admin/content',{method:'PUT',token,body:{content:h.original,revision:null}})).status,500);assert.equal(h.state.rows.has('cms:published'),false);
});

test('real site defaults validate and malformed legacy sections cannot replace the four gîtes or tariffs',async()=>{
  const raw=fs.readFileSync(new URL('../src/types/content.ts',import.meta.url),'utf8').replace(/^import .*?;\r?\n/gm,'').replace('export const defaultContent','const defaultContent');
  const {code}=await transform(raw+'\nglobalThis.defaults=defaultContent;',{loader:'ts',format:'iife'});
  const ctx=vm.createContext({defaultGites:JSON.parse(fs.readFileSync(new URL('../src/content/gites.json',import.meta.url),'utf8')),SEASON_PERIODS});vm.runInContext(code,ctx);
  const defaults=structuredClone(ctx.defaults);assert.doesNotThrow(()=>validateContent(defaults));
  const merged=mergeContent(defaults,{gites:[{saison:'Basse',prixNuit:85}],tarifs:[{nom:'Le Suyen'}],hero:{telephone:'legacy'},contact:{titre:'legacy'},texts:{animauxDescription:''}});
  assert.equal(merged.gites.length,4);assert.equal(merged.tarifs[0].prices[0].price,'150€');assert.equal(merged.contact.telephone,defaults.contact.telephone);assert.equal(merged.hero.titre,defaults.hero.titre);assert.equal(merged.texts.animauxDescription,'');
  assert.equal(mergeContent(defaults,{gites:[{nom:'Le Suyen modifié'}]}).gites.length,4);
  const catalog=JSON.parse(fs.readFileSync(new URL('../src/content/catalog.json',import.meta.url),'utf8'));
  assert.equal(catalog.some(field=>['Features','HeroHome','Pricing','Location','WellnessSection'].includes(field.page)),false);
});

test('a configured private password can replace the legacy default and subsequent rotation overrides the bootstrap secret',async()=>{
  const h=harness({configured:false,env:{SITE_ADMIN_PASSWORD:password}});h.state.rows.set('admin_password','admin123');
  const token=await login(h);assert.equal(h.state.rows.get('admin_password').algorithm,'pbkdf2-sha256');
  const changed=await h.request('/admin/change-password',{method:'POST',token,body:{oldPassword:password,newPassword:'Rotated-fixture-password-44!'}});assert.equal(changed.status,200);
  assert.equal((await h.request('/admin/login',{method:'POST',body:{password}})).status,401);
  assert.equal((await h.request('/admin/login',{method:'POST',body:{password:'Rotated-fixture-password-44!'}})).status,200);
});
