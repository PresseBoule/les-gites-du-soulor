import { TABLES, GITE_NAMES, keyIsValid, active, dateKey, applyAction, presentReservation } from '../../../lib/reservationModel.mjs';
import { digest } from './security.mjs';
export function mountReservationAdmin(app, { prefix, db, authorized, fetchBlocks }) {
  async function readAll(kind) {
    const records=[];let expected;
    for(let offset=0;offset<50000;offset+=500) {
      const {data,error,count}=await db().from(TABLES[kind]).select('key,value',{count:'exact'}).like('key','booking:%').order('key').range(offset,offset+499);
      if(error||!Array.isArray(data)||count===null||expected!==undefined&&count!==expected)throw Error('Lecture incomplète des réservations. Actualisez la liste.');
      expected=count;records.push(...data);if(records.length===count)return records;
      if(data.length!==500)throw Error('Liste incomplète des réservations.');
    }
    throw Error('La liste dépasse la limite de chargement.');
  }
  const denied=c=>c.json({success:false,message:'Reconnectez-vous pour gérer les réservations.'},401);
  app.get(`${prefix}/admin/reservations`,async c=>{
    if(!await authorized(c))return denied(c);
    try {
    const [gites,wellness]=await Promise.all([readAll('gite'),readAll('wellness')]);
    const reservations=await Promise.all([...gites.map(row=>({kind:'gite',...row})),...wellness.map(row=>({kind:'wellness',...row}))].map(async row=>presentReservation(row.kind,row.key,row.value,await digest(JSON.stringify(row.value)))));
    const warnings=[];
    const external=await Promise.all(Object.keys(GITE_NAMES).map(async gite=>{
      try {const blocks=await fetchBlocks(gite);return await Promise.all(blocks.map(async (block,index)=>({id:`airbnb:${gite}:${await digest(JSON.stringify(block))}:${index}`,kind:'gite',source:'airbnb',resource:GITE_NAMES[gite],gite,name:'Blocage importé d’Airbnb',email:'',phone:'',startDate:dateKey(block.startDate),endDate:dateKey(block.endDate),status:'accepted',archivedAt:null,price:null})));}
      catch {warnings.push(`Calendrier Airbnb de ${GITE_NAMES[gite]} indisponible : ses blocages ne peuvent pas être affichés.`);return [];}
    }));
    return c.json({success:true,reservations:[...reservations,...external.flat()],warnings});
    } catch { return c.json({success:false,message:'Impossible de charger toutes les réservations. Actualisez la liste.'},503); }
  });
  app.post(`${prefix}/admin/reservations/:kind/:id`,async c=>{
    if(!await authorized(c))return denied(c);
    try {
    const kind=c.req.param('kind'),id=c.req.param('id');
    if(!Object.hasOwn(TABLES,kind)||!keyIsValid(kind,id))return c.json({success:false,message:'Réservation inconnue.'},404);
    const raw=await c.req.text();if(raw.length>3000)return c.json({success:false,message:'Demande trop volumineuse.'},413);
    let body;try{body=JSON.parse(raw);}catch{return c.json({success:false,message:'Demande invalide.'},400);}
    const {data,error}=await db().from(TABLES[kind]).select('value').eq('key',id).maybeSingle();if(error)throw error;
    const current=data?.value;if(!current)return c.json({success:false,message:'Réservation introuvable.'},404);
    if(body.revision!==await digest(JSON.stringify(current)))return c.json({success:false,message:'Cette réservation a changé. Actualisez avant de recommencer.'},409);
    let next;try{next=applyAction(current,body.action,undefined,kind);}catch(error){return c.json({success:false,message:error.message},400);}
    // Confirming or restoring must also respect the external Airbnb calendar.
    if(kind==='gite'&&active(next)&&(body.action==='confirm'||!active(current))) {
      try {const blocks=await fetchBlocks(id.split(':')[1]);const start=dateKey(next.startDate),end=dateKey(next.endDate);if(!start||!end||end<=start)throw Error('Dates invalides');
        if(blocks.some(block=>dateKey(block.startDate)<end&&dateKey(block.endDate)>start))return c.json({success:false,message:'Ces dates sont bloquées sur Airbnb. La réservation n’a pas été modifiée.'},409);
      }catch{return c.json({success:false,message:'Impossible de vérifier Airbnb actuellement. Aucune confirmation ou restauration n’a été appliquée.'},503);}
    }
    const result=await db().rpc('soulor_write_reservation',{p_kind:kind,p_key:id,p_expected:current,p_booking:next});
    if(result.error)throw result.error;
    if(!result.data?.success)return c.json({success:false,message:result.data?.code==='conflict'?'Le créneau ou les dates sont maintenant occupés. Aucune modification appliquée.':'Cette réservation a changé. Actualisez la liste.'},409);
    return c.json({success:true,reservation:presentReservation(kind,id,next,await digest(JSON.stringify(next)))});
    } catch { return c.json({success:false,message:'Enregistrement non confirmé. Actualisez la liste avant de réessayer.'},503); }
  });
}
