-- =====================================================================
-- 003: several photos per look (outfit). Run once, after 002_outfits.sql.
-- =====================================================================
create table if not exists public.outfit_images (
  id uuid primary key default gen_random_uuid(),
  outfit_id uuid not null references public.outfits(id) on delete cascade,
  path text not null,
  sort_order int not null default 0,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists outfit_images_outfit_idx on public.outfit_images(outfit_id, sort_order);
create index if not exists outfit_images_path_idx on public.outfit_images(path);
create unique index if not exists one_primary_image_per_outfit on public.outfit_images(outfit_id) where is_primary;

alter table public.outfit_images enable row level security;
drop policy if exists outfit_img_public on public.outfit_images;
drop policy if exists outfit_img_admin on public.outfit_images;
create policy outfit_img_public on public.outfit_images for select using (
  exists (select 1 from public.outfits o where o.id = outfit_id and (o.status = 'published' or public.is_admin())));
create policy outfit_img_admin on public.outfit_images for all using (public.is_admin()) with check (public.is_admin());

-- Keep the single image already saved on existing looks.
insert into public.outfit_images (outfit_id, path, sort_order, is_primary)
select o.id, o.image_path, 0, true from public.outfits o
where o.image_path is not null
  and not exists (select 1 from public.outfit_images i where i.outfit_id = o.id);

create or replace function public.admin_list_orphan_images() returns table(path text)
language plpgsql stable security definer set search_path = public, storage as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query
    select o.name from storage.objects o
    where o.bucket_id = 'product-images'
      and not exists (select 1 from public.product_images i where i.path = o.name)
      and not exists (select 1 from public.outfit_images i where i.path = o.name)
      and not exists (select 1 from public.categories c where c.image_path = o.name)
      and not exists (select 1 from public.banners b where b.image_path = o.name)
      and not exists (select 1 from public.outfits f where f.image_path = o.name);
end $$;
