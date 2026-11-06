import assert from 'node:assert/strict';
import test from 'node:test';
import {reservationHarness} from './reservation-harness.mjs';
import {applyAction,active,dateKey} from '../src/lib/reservationModel.mjs';
import {harness as cmsHarness} from './cms-harness.mjs';
const stay={startDate:'2027-02-06',endDate:'2027-02-10',status:'pending',customerName:'Client fictif',customerEmail:'client@example.test'};
test('the actual CMS login session grants reservation access, and logout revokes it',async()=>{
  const h=await reservationHarness();try{
    await h.seed('gite','booking:soum:fixture',stay);
    const cms=cmsHarness({reservationClient:h.client});
    assert.equal((await cms.request('/admin/reservations')).status,401);
    const {data:{token}}=await cms.request('/admin/login',{method:'POST',body:{password:'Personal-fixture-password-42!'}});
    const listed=await cms.request('/admin/reservations',{token});assert.equal(listed.status,200);
    const row=listed.data.reservations[0];
    assert.equal((await cms.request('/admin/reservations/gite/'+encodeURIComponent(row.id),{token,method:'POST',body:{action:'archive',revision:row.revision}})).status,200);
    await cms.request('/admin/logout',{token,method:'POST'});
    assert.equal((await cms.request('/admin/reservations',{token})).status,401);
  }finally{await h.pg.close();}
});
test('private listing and mutations require a session; arbitrary database keys cannot be changed',async()=>{
  const h=await reservationHarness();try{
    await h.seed('gite','booking:soum:fixture',stay);
    assert.equal((await h.request('',{auth:false})).status,401);
    assert.equal((await h.request('/gite/booking%3Asoum%3Afixture',{auth:false,method:'POST',body:{action:'cancel'}})).status,401);
    assert.equal((await h.request('/gite/admin_password',{method:'POST',body:{action:'archive'}})).status,404);
    const list=await h.request();assert.equal(list.data.reservations[0].name,'Client fictif');assert.ok(list.data.reservations[0].revision);
  }finally{await h.pg.close();}
});
test('SQL protects overlapping stays, permits adjacent checkout, and isolates gîtes',async()=>{
  const h=await reservationHarness();try{
    const write=(key,value,expected=null)=>h.client.rpc('soulor_write_reservation',{p_kind:'gite',p_key:key,p_expected:expected,p_booking:value});
    assert.equal((await write('booking:soum:one',stay)).data.success,true);
    assert.equal((await write('booking:soum:two',stay)).data.code,'conflict');
    assert.equal((await write('booking:tech:one',stay)).data.success,true);
    assert.equal((await write('booking:soum:adjacent',{...stay,startDate:'2027-02-10',endDate:'2027-02-12'})).data.success,true);
    assert.equal((await write('booking:soum:one',stay)).data.code,'exists');
    assert.equal((await write('booking:soum:one',{...stay,status:'cancelled'},{...stay,status:'accepted'})).data.code,'stale');
  }finally{await h.pg.close();}
});
test('archive releases dates; restoring into a later booking is refused without overwriting it',async()=>{
  const h=await reservationHarness();try{
    await h.seed('gite','booking:soum:one',stay);
    const row=(await h.request()).data.reservations[0];
    const archived=await h.request('/gite/'+encodeURIComponent(row.id),{method:'POST',body:{action:'archive',revision:row.revision}});
    assert.equal(archived.status,200);assert.equal(archived.data.reservation.status,'cancelled');
    const created=await h.client.rpc('soulor_write_reservation',{p_kind:'gite',p_key:'booking:soum:two',p_expected:null,p_booking:stay});assert.equal(created.data.success,true);
    const restored=await h.request('/gite/'+encodeURIComponent(row.id),{method:'POST',body:{action:'restore',revision:archived.data.reservation.revision}});assert.equal(restored.status,409);
    assert.equal((await h.request('/gite/'+encodeURIComponent(row.id),{method:'POST',body:{action:'cancel',revision:row.revision}})).status,409);
    assert.equal((await h.pg.query("select count(*)::int as total from kv_store_497309b8")).rows[0].total,2);
  }finally{await h.pg.close();}
});
test('Airbnb conflicts and outages block confirmations; read failures never return an empty successful list',async()=>{
  const h=await reservationHarness();try{
    await h.seed('gite','booking:soum:one',stay);const row=(await h.request()).data.reservations[0];
    h.state.blocks=[{startDate:'2027-02-08',endDate:'2027-02-09'}];
    assert.equal((await h.request('/gite/'+encodeURIComponent(row.id),{method:'POST',body:{action:'confirm',revision:row.revision}})).status,409);
    h.state.externalFailure=true;
    assert.equal((await h.request('/gite/'+encodeURIComponent(row.id),{method:'POST',body:{action:'confirm',revision:row.revision}})).status,503);
    assert.equal((await h.request()).data.warnings.length,4);
    h.state.failure=true;assert.equal((await h.request()).status,503);
  }finally{await h.pg.close();}
});
test('multi-slot wellness SQL rolls back every slot when one conflicts and protects restored slots',async()=>{
  const h=await reservationHarness();try{
    const slot={id:'existing',date:'2027-02-06',hour:12,clientName:'Test',clientEmail:'test@example.test'};
    await h.seed('wellness','booking:existing',slot);
    const result=await h.client.rpc('soulor_create_wellness_group',{p_bookings:[{...slot,id:'new11',hour:11},{...slot,id:'new12',hour:12}]});assert.equal(result.data.code,'conflict');
    assert.equal((await h.pg.query('select count(*)::int as total from kv_store_2b20b999')).rows[0].total,1);
    const row=(await h.request()).data.reservations[0];
    const archive=await h.request('/wellness/'+encodeURIComponent(row.id),{method:'POST',body:{action:'archive',revision:row.revision}});assert.equal(archive.status,200);
    assert.equal((await h.client.rpc('soulor_create_wellness_group',{p_bookings:[{...slot,id:'replacement'}]})).data.success,true);
    assert.equal((await h.request('/wellness/'+encodeURIComponent(row.id),{method:'POST',body:{action:'restore',revision:archive.data.reservation.revision}})).status,409);
  }finally{await h.pg.close();}
});
test('anonymous database roles cannot invoke transaction functions; malformed dates are rejected',async()=>{
  const h=await reservationHarness();try{
    for(const role of ['anon','authenticated']){await h.pg.exec(`set role ${role}`);await assert.rejects(h.pg.query("select soulor_create_wellness_group('[]'::jsonb)"),/permission denied/);await assert.rejects(h.pg.query('select * from kv_store_2b20b999'),/permission denied/);await assert.rejects(h.pg.query('select * from kv_store_497309b8'),/permission denied/);await h.pg.exec('reset role');}
    const result=await h.client.rpc('soulor_write_reservation',{p_kind:'wellness',p_key:'booking:bad',p_expected:null,p_booking:{date:'2027-02-06'}});assert.equal(result.data.code,'invalid');
    assert.equal(dateKey('2027-02-30'),null);assert.equal(dateKey('2027-01-03T23:00:00Z'),'2027-01-04');
    assert.equal(dateKey('2027-02-30T00:00:00Z'),null);assert.throws(()=>applyAction(stay,'toString'),/inconnue/);
    assert.equal(active(applyAction(stay,'cancel')),false);
    assert.equal(applyAction({},'archive',undefined,'wellness').previousStatus,'accepted');
  }finally{await h.pg.close();}
});
