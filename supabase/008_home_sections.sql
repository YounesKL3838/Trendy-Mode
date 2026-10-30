-- =====================================================================
-- 008: custom home sections (e.g. "Sales" / تخفيضات) with hand-picked products.
-- Run once, after 007. (The pixel needs no database change.)
-- =====================================================================
create table if not exists public.home_sections (
  id uuid primary key default gen_random_uuid(),
  title_ar text,
  title_fr text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.home_section_items (
  section_id uuid not null references public.home_sections(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  sort_order int not null default 0,
  primary key (section_id, product_id)
);
create index if not exists home_section_items_product_idx on public.home_section_items(product_id);

alter table public.home_sections      enable row level security;
alter table public.home_section_items enable row level security;
drop policy if exists hs_public on public.home_sections;
drop policy if exists hs_admin on public.home_sections;
drop policy if exists hsi_public on public.home_section_items;
drop policy if exists hsi_admin on public.home_section_items;
create policy hs_public on public.home_sections for select using (is_active or public.is_admin());
create policy hs_admin  on public.home_sections for all using (public.is_admin()) with check (public.is_admin());
create policy hsi_public on public.home_section_items for select using (
  exists (select 1 from public.home_sections s where s.id = section_id and (s.is_active or public.is_admin())));
create policy hsi_admin on public.home_section_items for all using (public.is_admin()) with check (public.is_admin());
