-- =====================================================================
-- 002: Looks / إطلالات (a photo of an outfit + the products worn in it)
-- Run once in Supabase SQL Editor, after 001_init.sql. Safe to re-run.
-- =====================================================================
create table if not exists public.outfits (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  image_path text,                                   -- path inside bucket product-images (outfits/...)
  status public.product_status not null default 'draft',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create table if not exists public.outfit_translations (
  outfit_id uuid not null references public.outfits(id) on delete cascade,
  lang text not null check (lang in ('ar','fr')),
  title text not null,
  description text,
  primary key (outfit_id, lang)
);
create table if not exists public.outfit_items (
  outfit_id uuid not null references public.outfits(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  sort_order int not null default 0,
  primary key (outfit_id, product_id)
);
create index if not exists outfit_items_product_idx on public.outfit_items(product_id);

alter table public.outfits             enable row level security;
alter table public.outfit_translations enable row level security;
alter table public.outfit_items        enable row level security;

drop policy if exists outfits_public on public.outfits;
drop policy if exists outfits_admin on public.outfits;
drop policy if exists outfit_tr_public on public.outfit_translations;
drop policy if exists outfit_tr_admin on public.outfit_translations;
drop policy if exists outfit_items_public on public.outfit_items;
drop policy if exists outfit_items_admin on public.outfit_items;

create policy outfits_public on public.outfits for select using (status = 'published' or public.is_admin());
create policy outfits_admin  on public.outfits for all using (public.is_admin()) with check (public.is_admin());
create policy outfit_tr_public on public.outfit_translations for select using (
  exists (select 1 from public.outfits o where o.id = outfit_id and (o.status = 'published' or public.is_admin())));
create policy outfit_tr_admin on public.outfit_translations for all using (public.is_admin()) with check (public.is_admin());
create policy outfit_items_public on public.outfit_items for select using (
  exists (select 1 from public.outfits o where o.id = outfit_id and (o.status = 'published' or public.is_admin())));
create policy outfit_items_admin on public.outfit_items for all using (public.is_admin()) with check (public.is_admin());

-- Orphan-image helper now also protects look images.
create or replace function public.admin_list_orphan_images() returns table(path text)
language plpgsql stable security definer set search_path = public, storage as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query
    select o.name from storage.objects o
    where o.bucket_id = 'product-images'
      and not exists (select 1 from public.product_images i where i.path = o.name)
      and not exists (select 1 from public.categories c where c.image_path = o.name)
      and not exists (select 1 from public.banners b where b.image_path = o.name)
      and not exists (select 1 from public.outfits f where f.image_path = o.name);
end $$;
