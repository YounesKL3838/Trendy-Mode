-- =====================================================================
-- 007: live new-order alerts in the dashboard (Supabase Realtime).
-- Run once. The dashboard also polls every 25 s, so alerts still work without this.
-- =====================================================================
do $$ begin
  if not exists (select 1 from pg_publication_tables
                 where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'orders') then
    alter publication supabase_realtime add table public.orders;
  end if;
end $$;
