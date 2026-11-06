import fs from 'node:fs';
import vm from 'node:vm';
import {transform} from 'esbuild';
import {Hono} from 'hono';
import {PGlite} from '@electric-sql/pglite';
import * as model from '../src/lib/reservationModel.mjs';
import {digest} from '../src/supabase/functions/server/security.mjs';
const source=fs.readFileSync(new URL('../src/supabase/functions/server/reservationAdmin.ts',import.meta.url),'utf8').replace(/^import .*?;\r?\n/gm,'').replace('export function','function');
const code=(await transform(source+'\nglobalThis.mount=mountReservationAdmin;', {loader:'ts',format:'iife'})).code;
export async function reservationHarness() {
  const pg=new PGlite();
  await pg.exec(`create role anon;create role authenticated;create role service_role;
    create table kv_store_497309b8(key text primary key,value jsonb not null);
    create table kv_store_2b20b999(key text primary key,value jsonb not null);`);
  await pg.exec(fs.readFileSync(new URL('../supabase/migrations/20261106_reservation_management.sql',import.meta.url),'utf8'));
  await pg.exec(fs.readFileSync(new URL('../supabase/migrations/20261106_protect_reservation_data.sql',import.meta.url),'utf8'));
  const state={failure:false,blocks:[],externalFailure:false};
  const client={from(table){
    if(!Object.values(model.TABLES).includes(table))throw Error('Invalid table');
    let filters=[],params=[],offset=0,limit=50000;
    const builder={select(){return builder;},like(column,value){params.push(value);filters.push(`key like $${params.length}`);return builder;},eq(column,value){params.push(value);filters.push(`key = $${params.length}`);return builder;},order(){return builder;},range(start,end){offset=start;limit=end-start+1;return builder;},async maybeSingle(){const r=await run();return {...r,data:r.data?.[0]||null};},then(resolve,reject){return run().then(resolve,reject);}};
    async function run(){if(state.failure)return {data:null,error:Error('Database offline'),count:null};const result=await pg.query(`select key,value from ${table}${filters.length?' where '+filters.join(' and '):''} order by key`,params);return {data:result.rows.slice(offset,offset+limit),count:result.rows.length,error:null};}
    return builder;
  },async rpc(name,args){
    if(state.failure)return {error:Error('Database offline')};
    try {
      const result=name==='soulor_write_reservation'?await pg.query('select soulor_write_reservation($1,$2,$3::jsonb,$4::jsonb) as result',[args.p_kind,args.p_key,args.p_expected===null?null:JSON.stringify(args.p_expected),JSON.stringify(args.p_booking)]):await pg.query('select soulor_create_wellness_group($1::jsonb) as result',[JSON.stringify(args.p_bookings)]);
      return {data:result.rows[0].result,error:null};
    }catch(error){return {error};}
  }};
  const app=new Hono();app.onError((error,c)=>c.json({success:false,message:'Service indisponible'},503));
  const ctx=vm.createContext({...model,digest,structuredClone,Date,JSON,Object,Array,Map,Set,Error,String,Number,console});vm.runInContext(code,ctx);
  ctx.mount(app,{prefix:'/cms',db:()=>client,authorized:async c=>c.req.header('X-CMS-Session')==='fixture-session',fetchBlocks:async()=>{if(state.externalFailure)throw Error('Airbnb offline');return state.blocks;}});
  const request=async(path='',{method='GET',body,auth=true}={})=>{const r=await app.request('http://localhost/cms/admin/reservations'+path,{method,headers:{'content-type':'application/json',...(auth?{'X-CMS-Session':'fixture-session'}:{})},...(body?{body:JSON.stringify(body)}:{})});return {status:r.status,data:await r.json()};};
  const seed=async(kind,key,value)=>pg.query(`insert into ${model.TABLES[kind]} values($1,$2::jsonb)`,[key,JSON.stringify(value)]);
  return {pg,client,state,request,seed,app};
}
