-- Credentials and content writes are served exclusively by the Edge Function.
-- Does not touch reservations or existing content.
begin;
alter table public.kv_store_66cb1054 enable row level security;
revoke all on table public.kv_store_66cb1054 from public, anon, authenticated;
grant all on table public.kv_store_66cb1054 to service_role;
commit;
