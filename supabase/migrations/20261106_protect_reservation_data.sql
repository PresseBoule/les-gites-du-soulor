-- Apply only after the new wellness frontend is live, before enabling the admin panel.
begin;
-- All public access is through the filtered Edge Functions. Customer data and
-- mutation privileges remain available only to the backend service role.
alter table public.kv_store_497309b8 enable row level security;
alter table public.kv_store_2b20b999 enable row level security;
revoke all on table public.kv_store_497309b8, public.kv_store_2b20b999 from anon, authenticated;
grant all on table public.kv_store_497309b8, public.kv_store_2b20b999 to service_role;
commit;
