-- =====================================================================
-- 004: Landing pages for a product or a look. Run once, after 003.
-- Public link: landing.html?s=<slug>
-- =====================================================================
create table if not exists public.landing_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]{3,60}$'),
  target_type text not null check (target_type in ('product','outfit')),
  product_id uuid references public.products(id) on delete cascade,
  outfit_id uuid references public.outfits(id) on delete cascade,
  status public.product_status not null default 'draft',
  content jsonb not null default '{}'::jsonb,   -- {ar:{headline,sub,cta,benefits[]}, fr:{...}, form:true}
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check ((target_type = 'product' and product_id is not null and outfit_id is null)
      or (target_type = 'outfit'  and outfit_id  is not null and product_id is null))
);
create unique index if not exists landing_one_per_product on public.landing_pages(product_id) where product_id is not null;
create unique index if not exists landing_one_per_outfit  on public.landing_pages(outfit_id)  where outfit_id  is not null;
drop trigger if exists landing_updated on public.landing_pages;
create trigger landing_updated before update on public.landing_pages
  for each row execute function public.set_updated_at();

alter table public.landing_pages enable row level security;
drop policy if exists landing_public on public.landing_pages;
drop policy if exists landing_admin on public.landing_pages;
create policy landing_public on public.landing_pages for select using (status = 'published' or public.is_admin());
create policy landing_admin  on public.landing_pages for all using (public.is_admin()) with check (public.is_admin());
