export const TABLES = { gite: 'kv_store_497309b8', wellness: 'kv_store_2b20b999' };
export const GITE_NAMES = { soum:'Le Soum', tech:'Le Tech', suyen:'Le Suyen', estaing:"L’Estaing" };
export function dateKey(value) {
  if (typeof value !== 'string') return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) { const date=new Date(value+'T00:00:00Z');return !Number.isNaN(date.getTime())&&date.toISOString().slice(0,10)===value?value:null; }
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)) { if(!dateKey(value.slice(0,10)))return null;const date=new Date(value);return Number.isNaN(date.getTime())?null:new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Paris'}).format(date); }
  return null;
}
export function keyIsValid(kind, key) {
  return typeof key==='string'&&key.length<=220&&(kind==='gite'?/^booking:(soum|tech|suyen|estaing):[A-Za-z0-9_.:-]+$/:/^booking:[A-Za-z0-9_.:-]+$/).test(key);
}
export function active(record) { return !['cancelled','rejected'].includes(record.status); }
export function applyAction(record, action, now = new Date().toISOString(), kind = 'gite') {
  const next=structuredClone(record);
  if(action==='archive') { if(record.archivedAt)throw Error('Cette réservation est déjà dans la corbeille.');next.previousStatus=record.status||(kind==='wellness'?'accepted':'pending');next.status='cancelled';next.archivedAt=now; }
  else if(action==='restore') { if(!record.archivedAt)throw Error('Cette réservation n’est pas dans la corbeille.');next.status=['pending','accepted','cancelled','rejected'].includes(record.previousStatus)?record.previousStatus:'pending';delete next.archivedAt;delete next.previousStatus; }
  else { if(record.archivedAt)throw Error('Restaurez cette réservation avant de la modifier.');const statuses={confirm:'accepted',pending:'pending',cancel:'cancelled',reject:'rejected'};if(!Object.hasOwn(statuses,action))throw Error('Action inconnue.');next.status=statuses[action]; }
  next.updatedAt=now;next.history=[...(Array.isArray(record.history)?record.history:[]).slice(-29),{action,at:now,previousStatus:record.status||null,status:next.status}];
  return next;
}
export function presentReservation(kind, key, record, revision) {
  const gite=kind==='gite'?key.split(':')[1]:null;
  return {id:key,kind,source:'site',resource:kind==='gite'?GITE_NAMES[gite]||gite:'Bain nordique + sauna',gite,
    name:typeof (record.customerName??record.clientName)==='string'?(record.customerName??record.clientName):'',
    email:typeof (record.customerEmail??record.clientEmail)==='string'?(record.customerEmail??record.clientEmail):'',
    phone:typeof record.customerPhone==='string'?record.customerPhone:'',startDate:dateKey(kind==='gite'?record.startDate:record.date),endDate:kind==='gite'?dateKey(record.endDate):null,
    hour:kind==='wellness'&&Number.isInteger(record.hour)?record.hour:null,price:kind==='gite'&&Number.isFinite(record.price)?record.price:null,
    status:record.status||'legacy',archivedAt:record.archivedAt||null,createdAt:record.createdAt||null,updatedAt:record.updatedAt||null,revision};
}
