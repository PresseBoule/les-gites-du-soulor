-- Shared transaction lock: public booking creation and administrator restoration
-- must use this same function. No reservation is deleted by this migration.
begin;
-- All public access is through the filtered Edge Functions. Customer data and
-- mutation privileges remain available only to the backend service role.
alter table public.kv_store_497309b8 enable row level security;
alter table public.kv_store_2b20b999 enable row level security;
revoke all on table public.kv_store_497309b8, public.kv_store_2b20b999 from anon, authenticated;
grant all on table public.kv_store_497309b8, public.kv_store_2b20b999 to service_role;
create or replace function public.soulor_booking_date(p_value text)
returns date language plpgsql stable set search_path = public, pg_temp as $$
begin
  if p_value ~ '^\d{4}-\d{2}-\d{2}$' then return p_value::date; end if;
  if p_value ~ '^\d{4}-\d{2}-\d{2}T.*(Z|[+-]\d{2}:\d{2})$' then
    return (p_value::timestamptz at time zone 'Europe/Paris')::date;
  end if;
  raise exception 'Invalid reservation date';
end; $$;

create or replace function public.soulor_write_reservation(p_kind text, p_key text, p_expected jsonb, p_booking jsonb)
returns jsonb language plpgsql security invoker set search_path = public, pg_temp as $$
declare current_value jsonb; existing boolean; blocked boolean; first_day date; last_day date; prefix text;
begin
  if p_kind is null or p_key is null or p_booking is null or p_kind not in ('gite','wellness') or jsonb_typeof(p_booking) <> 'object' or length(p_key)>220 then
    return jsonb_build_object('success',false,'code','invalid');
  end if;
  if p_kind='gite' and p_key !~ '^booking:(soum|tech|suyen|estaing):[A-Za-z0-9_.:-]+$'
     or p_kind='wellness' and p_key !~ '^booking:[A-Za-z0-9_.:-]+$' then
    return jsonb_build_object('success',false,'code','invalid');
  end if;
  perform pg_advisory_xact_lock(hashtextextended('soulor:reservation:'||p_kind,0));
  if p_kind='gite' then
    select value into current_value from public.kv_store_497309b8 where key=p_key for update;
  else
    select value into current_value from public.kv_store_2b20b999 where key=p_key for update;
  end if;
  existing := found;
  if p_expected is null and existing then return jsonb_build_object('success',false,'code','exists'); end if;
  if p_expected is not null and (not existing or current_value <> p_expected) then
    return jsonb_build_object('success',false,'code','stale');
  end if;
  if coalesce(p_booking->>'status','accepted') not in ('pending','accepted','cancelled','rejected') then
    return jsonb_build_object('success',false,'code','invalid');
  end if;
  if coalesce(p_booking->>'status','accepted') in ('pending','accepted') then
    if p_booking->>'archivedAt' is not null then return jsonb_build_object('success',false,'code','invalid'); end if;
    if p_kind='gite' then
      first_day := public.soulor_booking_date(p_booking->>'startDate');
      last_day := public.soulor_booking_date(p_booking->>'endDate');
      if first_day is null or last_day is null or last_day<=first_day then return jsonb_build_object('success',false,'code','invalid'); end if;
      prefix := 'booking:'||split_part(p_key,':',2)||':%';
      select exists(select 1 from public.kv_store_497309b8 r where r.key like prefix and r.key<>p_key
        and coalesce(r.value->>'status','pending') not in ('cancelled','rejected')
        and public.soulor_booking_date(r.value->>'startDate')<last_day
        and public.soulor_booking_date(r.value->>'endDate')>first_day) into blocked;
    else
      first_day := public.soulor_booking_date(p_booking->>'date');
      if first_day is null or p_booking->>'hour' is null or (p_booking->>'hour')::integer not in (0,1,10,11,12,13,14,15,16,17,18,19,20,21,22,23) then
        return jsonb_build_object('success',false,'code','invalid');
      end if;
      select exists(select 1 from public.kv_store_2b20b999 r where r.key like 'booking:%' and r.key<>p_key
        and coalesce(r.value->>'status','accepted') not in ('cancelled','rejected')
        and r.value->>'date'=p_booking->>'date' and (r.value->>'hour')::integer=(p_booking->>'hour')::integer) into blocked;
    end if;
    if blocked then return jsonb_build_object('success',false,'code','conflict'); end if;
  end if;
  if p_kind='gite' then
    insert into public.kv_store_497309b8(key,value) values(p_key,p_booking) on conflict(key) do update set value=excluded.value;
  else
    insert into public.kv_store_2b20b999(key,value) values(p_key,p_booking) on conflict(key) do update set value=excluded.value;
  end if;
  return jsonb_build_object('success',true);
end; $$;

create or replace function public.soulor_create_wellness_group(p_bookings jsonb)
returns jsonb language plpgsql security invoker set search_path = public, pg_temp as $$
declare booking jsonb; result jsonb;
begin
  if p_bookings is null or jsonb_typeof(p_bookings)<>'array' or jsonb_array_length(p_bookings) not between 1 and 16 then
    return jsonb_build_object('success',false,'code','invalid');
  end if;
  perform pg_advisory_xact_lock(hashtextextended('soulor:reservation:wellness',0));
  for booking in select * from jsonb_array_elements(p_bookings) loop
    result := public.soulor_write_reservation('wellness','booking:'||(booking->>'id'),null,booking);
    if not (result->>'success')::boolean then raise exception using message='Slot unavailable',errcode='P0001'; end if;
  end loop;
  return jsonb_build_object('success',true);
exception when sqlstate 'P0001' then
  -- The exception rolls back ALL inserts in this invocation, including earlier slots.
  return jsonb_build_object('success',false,'code','conflict');
end; $$;
revoke all on function public.soulor_booking_date(text) from public, anon, authenticated;
revoke all on function public.soulor_write_reservation(text,text,jsonb,jsonb) from public, anon, authenticated;
revoke all on function public.soulor_create_wellness_group(jsonb) from public, anon, authenticated;
grant execute on function public.soulor_booking_date(text) to service_role;
grant execute on function public.soulor_write_reservation(text,text,jsonb,jsonb) to service_role;
grant execute on function public.soulor_create_wellness_group(jsonb) to service_role;
commit;
