-- =====================================================================
-- Maison Noor | Supabase schema (Phase 2)
-- Run in: Supabase Dashboard > SQL Editor (as a single script).
-- Never put the service_role key in front-end code. Use only the anon key.
-- =====================================================================

-- ---------- 1. Types ------------------------------------------------
do $$ begin
  create type public.app_role as enum ('admin', 'customer');
exception when duplicate_object then null; end $$;
do $$ begin
  create type public.product_status as enum ('draft', 'published', 'archived');
exception when duplicate_object then null; end $$;
do $$ begin
  create type public.order_status as enum ('new', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled');
exception when duplicate_object then null; end $$;

-- ---------- 2. Helpers ----------------------------------------------
create or replace function public.set_updated_at() returns trigger
language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

-- ---------- 3. Profiles and roles -----------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  preferred_lang text not null default 'ar' check (preferred_lang in ('ar','fr')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  primary key (user_id, role)
);

-- Server-side admin check used by every policy and admin function.
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = auth.uid() and role = 'admin');
$$;

-- Auto-create profile + customer role on sign-up.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name) values (new.id, new.raw_user_meta_data->>'full_name');
  insert into public.user_roles (user_id, role) values (new.id, 'customer');
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 4. Catalogue --------------------------------------------
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.categories(id) on delete set null,
  slug text not null unique,
  image_path text,
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.category_translations (
  category_id uuid not null references public.categories(id) on delete cascade,
  lang text not null check (lang in ('ar','fr')),
  name text not null,
  description text,
  primary key (category_id, lang)
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  slug text not null unique,
  category_id uuid references public.categories(id) on delete set null,
  subcategory_id uuid references public.categories(id) on delete set null,
  price numeric(12,2) not null check (price >= 0),
  sale_price numeric(12,2) check (sale_price is null or (sale_price >= 0 and sale_price < price)),
  status public.product_status not null default 'draft',
  is_new boolean not null default false,
  is_featured boolean not null default false,
  is_bestseller boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists products_status_idx on public.products(status, created_at desc);
create index if not exists products_category_idx on public.products(category_id);
drop trigger if exists products_updated on public.products;
create trigger products_updated before update on public.products
  for each row execute function public.set_updated_at();

create table if not exists public.product_translations (
  product_id uuid not null references public.products(id) on delete cascade,
  lang text not null check (lang in ('ar','fr')),
  name text not null,
  short_description text,
  description text,
  seo_title text,
  seo_description text,
  primary key (product_id, lang)
);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  path text not null,                       -- path inside bucket product-images
  sort_order int not null default 0,
  is_primary boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists product_images_product_idx on public.product_images(product_id, sort_order);
create index if not exists product_images_path_idx on public.product_images(path);
create unique index if not exists one_primary_image_per_product
  on public.product_images(product_id) where is_primary;

create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  size text not null,
  color text not null,
  sku text unique,
  stock int not null default 0 check (stock >= 0),
  unique (product_id, size, color)
);
create index if not exists product_variants_product_idx on public.product_variants(product_id);

-- ---------- 5. Customers, carts, addresses --------------------------
create table if not exists public.addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  full_name text not null,
  phone text not null,
  wilaya text not null,
  city text,
  address_line text not null,
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.carts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  updated_at timestamptz not null default now()
);
create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references public.carts(id) on delete cascade,
  variant_id uuid not null references public.product_variants(id) on delete cascade,
  quantity int not null check (quantity between 1 and 20),
  unique (cart_id, variant_id)
);

-- ---------- 6. Orders -----------------------------------------------
create sequence if not exists public.order_seq start 1001;
create table if not exists public.discount_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  kind text not null check (kind in ('percent','fixed')),
  value numeric(12,2) not null check (value > 0),
  min_order numeric(12,2) not null default 0,
  max_uses int,
  used_count int not null default 0,
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean not null default true
);
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique default ('MN-' || nextval('public.order_seq')),
  user_id uuid references auth.users(id) on delete set null,   -- null = guest order
  status public.order_status not null default 'new',
  customer_name text not null,
  customer_phone text not null,
  wilaya text not null,
  city text,
  address_line text not null,
  subtotal numeric(12,2) not null,
  shipping_fee numeric(12,2) not null default 0,
  discount_total numeric(12,2) not null default 0,
  total numeric(12,2) not null,
  discount_code text,
  tracking_number text,
  payment_method text not null default 'cod',                  -- cash on delivery
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid','paid','refunded')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists orders_user_idx on public.orders(user_id, created_at desc);
create index if not exists orders_status_idx on public.orders(status, created_at desc);
drop trigger if exists orders_updated on public.orders;
create trigger orders_updated before update on public.orders
  for each row execute function public.set_updated_at();

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  name_ar text not null,
  name_fr text not null,
  size text not null,
  color text not null,
  unit_price numeric(12,2) not null,      -- price snapshot at purchase time
  quantity int not null check (quantity > 0)
);
create index if not exists order_items_order_idx on public.order_items(order_id);

create table if not exists public.order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  status public.order_status not null,
  changed_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ---------- 7. Marketing and settings -------------------------------
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  lang text not null default 'ar' check (lang in ('ar','fr')),
  created_at timestamptz not null default now()
);
create table if not exists public.banners (
  id uuid primary key default gen_random_uuid(),
  image_path text,
  title_ar text, title_fr text,
  text_ar text, text_fr text,
  link text,
  sort_order int not null default 0,
  is_active boolean not null default true
);
-- Public-readable settings only. NEVER store secrets here.
create table if not exists public.store_settings (
  key text primary key,
  value jsonb not null
);
insert into public.store_settings (key, value) values
  ('store',         '{"name":"Maison Noor","email":"","phone":"","currency":"DZD"}'),
  ('shipping_fees', '{"default":600}'),
  ('low_stock_threshold', '5')
on conflict (key) do nothing;

-- ---------- 8. Row Level Security -----------------------------------
alter table public.profiles               enable row level security;
alter table public.user_roles             enable row level security;
alter table public.categories             enable row level security;
alter table public.category_translations  enable row level security;
alter table public.products               enable row level security;
alter table public.product_translations   enable row level security;
alter table public.product_images         enable row level security;
alter table public.product_variants       enable row level security;
alter table public.addresses              enable row level security;
alter table public.carts                  enable row level security;
alter table public.cart_items             enable row level security;
alter table public.discount_codes         enable row level security;
alter table public.orders                 enable row level security;
alter table public.order_items            enable row level security;
alter table public.order_status_history   enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.banners                enable row level security;
alter table public.store_settings         enable row level security;

-- profiles: own row; admins read all. Roles can never be changed from the client.
create policy profiles_select on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy profiles_update on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy roles_select on public.user_roles for select using (user_id = auth.uid() or public.is_admin());
-- (no insert/update/delete policy on user_roles: only SQL editor / service role can grant roles)

-- categories
create policy cat_public on public.categories for select using (is_active or public.is_admin());
create policy cat_admin  on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy cat_tr_public on public.category_translations for select using (
  exists (select 1 from public.categories c where c.id = category_id and (c.is_active or public.is_admin())));
create policy cat_tr_admin on public.category_translations for all using (public.is_admin()) with check (public.is_admin());

-- products: visitors see published only
create policy prod_public on public.products for select using (status = 'published' or public.is_admin());
create policy prod_admin  on public.products for all using (public.is_admin()) with check (public.is_admin());
create policy prod_tr_public on public.product_translations for select using (
  exists (select 1 from public.products p where p.id = product_id and (p.status = 'published' or public.is_admin())));
create policy prod_tr_admin on public.product_translations for all using (public.is_admin()) with check (public.is_admin());
create policy img_public on public.product_images for select using (
  exists (select 1 from public.products p where p.id = product_id and (p.status = 'published' or public.is_admin())));
create policy img_admin on public.product_images for all using (public.is_admin()) with check (public.is_admin());
create policy var_public on public.product_variants for select using (
  exists (select 1 from public.products p where p.id = product_id and (p.status = 'published' or public.is_admin())));
create policy var_admin on public.product_variants for all using (public.is_admin()) with check (public.is_admin());

-- customer data: own rows only
create policy addr_own on public.addresses for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy cart_own on public.carts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy cart_items_own on public.cart_items for all using (
  exists (select 1 from public.carts c where c.id = cart_id and c.user_id = auth.uid()))
  with check (exists (select 1 from public.carts c where c.id = cart_id and c.user_id = auth.uid()));

-- orders: read own; admins read/update all; creation ONLY through create_order()
create policy orders_select on public.orders for select using (user_id = auth.uid() or public.is_admin());
create policy orders_admin_update on public.orders for update using (public.is_admin()) with check (public.is_admin());
create policy items_select on public.order_items for select using (
  exists (select 1 from public.orders o where o.id = order_id and (o.user_id = auth.uid() or public.is_admin())));
create policy hist_select on public.order_status_history for select using (
  exists (select 1 from public.orders o where o.id = order_id and (o.user_id = auth.uid() or public.is_admin())));

-- discount codes: admin only (customers validate through create_order)
create policy disc_admin on public.discount_codes for all using (public.is_admin()) with check (public.is_admin());

-- newsletter: anyone may subscribe, only admins read
create policy news_insert on public.newsletter_subscribers for insert with check (true);
create policy news_admin  on public.newsletter_subscribers for select using (public.is_admin());
create policy news_admin_del on public.newsletter_subscribers for delete using (public.is_admin());

-- banners and settings
create policy banners_public on public.banners for select using (is_active or public.is_admin());
create policy banners_admin  on public.banners for all using (public.is_admin()) with check (public.is_admin());
create policy settings_public on public.store_settings for select using (true);
create policy settings_admin  on public.store_settings for all using (public.is_admin()) with check (public.is_admin());

-- ---------- 9. Storage bucket: product-images -----------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('product-images', 'product-images', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public = true, file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg','image/png','image/webp'];

create policy "product images are public" on storage.objects for select using (bucket_id = 'product-images');
create policy "admins upload product images" on storage.objects for insert
  with check (bucket_id = 'product-images' and public.is_admin());
create policy "admins update product images" on storage.objects for update
  using (bucket_id = 'product-images' and public.is_admin());
create policy "admins delete product images" on storage.objects for delete
  using (bucket_id = 'product-images' and public.is_admin());

-- Files in the bucket that no product or category references (safe to clean up).
-- A file shared by several products is NOT listed while any row still uses it.
create or replace function public.admin_list_orphan_images() returns table(path text)
language plpgsql stable security definer set search_path = public, storage as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  return query
    select o.name from storage.objects o
    where o.bucket_id = 'product-images'
      and not exists (select 1 from public.product_images i where i.path = o.name)
      and not exists (select 1 from public.categories c where c.image_path = o.name)
      and not exists (select 1 from public.banners b where b.image_path = o.name);
end $$;

-- ---------- 10. Order creation (server-side validation) -------------
-- p_items:    [{"variant_id":"<uuid>","qty":2}, ...]
-- p_customer: {"name":"","phone":"","wilaya":"16","city":"","address":"","note":""}
-- Prices, stock, shipping and discounts are all computed here, never trusted from the browser.
create or replace function public.create_order(p_items jsonb, p_customer jsonb, p_code text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  r record; v_subtotal numeric := 0; v_unit numeric; v_ship numeric; v_disc numeric := 0;
  v_order uuid; v_number text; d public.discount_codes%rowtype; v_has_code boolean := false;
  v_wilaya text := nullif(trim(p_customer->>'wilaya'), '');
begin
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then raise exception 'empty_cart'; end if;
  if length(trim(coalesce(p_customer->>'name',''))) < 2
     or length(trim(coalesce(p_customer->>'phone',''))) < 8
     or length(trim(coalesce(p_customer->>'address',''))) < 4
     or v_wilaya is null then raise exception 'invalid_customer'; end if;

  select coalesce((value->>v_wilaya)::numeric, (value->>'default')::numeric, 0)
    into v_ship from public.store_settings where key = 'shipping_fees';

  insert into public.orders (user_id, customer_name, customer_phone, wilaya, city, address_line, note,
                             subtotal, shipping_fee, total)
  values (auth.uid(), trim(p_customer->>'name'), trim(p_customer->>'phone'), v_wilaya,
          p_customer->>'city', trim(p_customer->>'address'), p_customer->>'note', 0, coalesce(v_ship,0), 0)
  returning id, order_number into v_order, v_number;

  for r in
    select x.variant_id, sum(x.qty)::int as qty
    from jsonb_to_recordset(p_items) as x(variant_id uuid, qty int)
    group by x.variant_id
  loop
    if r.qty < 1 or r.qty > 20 then raise exception 'invalid_quantity'; end if;
    declare
      pv public.product_variants%rowtype; pr public.products%rowtype;
    begin
      select * into pv from public.product_variants where id = r.variant_id for update;  -- row lock
      if not found then raise exception 'variant_not_found'; end if;
      select * into pr from public.products where id = pv.product_id;
      if pr.status <> 'published' then raise exception 'product_unavailable'; end if;
      if pv.stock < r.qty then raise exception 'out_of_stock: %', pv.id; end if;

      v_unit := coalesce(pr.sale_price, pr.price);
      v_subtotal := v_subtotal + v_unit * r.qty;
      insert into public.order_items (order_id, variant_id, product_id, name_ar, name_fr, size, color, unit_price, quantity)
      values (v_order, pv.id, pr.id,
        coalesce((select name from public.product_translations where product_id = pr.id and lang = 'ar'), pr.sku),
        coalesce((select name from public.product_translations where product_id = pr.id and lang = 'fr'), pr.sku),
        pv.size, pv.color, v_unit, r.qty);
      update public.product_variants set stock = stock - r.qty where id = pv.id;
    end;
  end loop;

  if p_code is not null and length(trim(p_code)) > 0 then
    select * into d from public.discount_codes
      where upper(code) = upper(trim(p_code)) and is_active
        and (starts_at is null or starts_at <= now()) and (ends_at is null or ends_at >= now())
        and (max_uses is null or used_count < max_uses) for update;
    if not found or v_subtotal < d.min_order then raise exception 'invalid_discount'; end if;
    v_disc := case d.kind when 'percent' then round(v_subtotal * d.value / 100) else least(d.value, v_subtotal) end;
    update public.discount_codes set used_count = used_count + 1 where id = d.id;
    v_has_code := true;
  end if;

  update public.orders set subtotal = v_subtotal, discount_total = v_disc,
         discount_code = case when v_has_code then d.code end,
         total = v_subtotal - v_disc + coalesce(v_ship,0)
   where id = v_order;
  insert into public.order_status_history (order_id, status) values (v_order, 'new');

  return jsonb_build_object('order_id', v_order, 'order_number', v_number,
                            'subtotal', v_subtotal, 'discount', v_disc,
                            'shipping', coalesce(v_ship,0), 'total', v_subtotal - v_disc + coalesce(v_ship,0));
end $$;
revoke all on function public.create_order(jsonb, jsonb, text) from public;
grant execute on function public.create_order(jsonb, jsonb, text) to anon, authenticated;

-- ---------- 11. Admin functions -------------------------------------
create or replace function public.admin_set_order_status(p_order uuid, p_status public.order_status, p_tracking text default null)
returns void language plpgsql security definer set search_path = public as $$
declare old_status public.order_status;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  select status into old_status from public.orders where id = p_order for update;
  if not found then raise exception 'order_not_found'; end if;
  if old_status = 'cancelled' and p_status <> 'cancelled' then raise exception 'order_already_cancelled'; end if;
  if p_status = 'cancelled' and old_status <> 'cancelled' then   -- give stock back
    update public.product_variants v set stock = v.stock + i.quantity
      from public.order_items i where i.order_id = p_order and i.variant_id = v.id;
  end if;
  update public.orders set status = p_status, tracking_number = coalesce(p_tracking, tracking_number) where id = p_order;
  insert into public.order_status_history (order_id, status, changed_by) values (p_order, p_status, auth.uid());
end $$;
revoke all on function public.admin_set_order_status(uuid, public.order_status, text) from public;
grant execute on function public.admin_set_order_status(uuid, public.order_status, text) to authenticated;

-- Real dashboard numbers (cancelled orders excluded from sales).
create or replace function public.admin_dashboard_stats() returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare th int;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  select coalesce((value #>> '{}')::int, 5) into th from public.store_settings where key = 'low_stock_threshold';
  return jsonb_build_object(
    'total_sales',    (select coalesce(sum(total),0) from public.orders where status <> 'cancelled'),
    'orders_count',   (select count(*) from public.orders),
    'products_count', (select count(*) from public.products where status <> 'archived'),
    'customers_count',(select count(*) from public.user_roles where role = 'customer'),
    'low_stock', (select coalesce(jsonb_agg(t), '[]') from (
        select v.id, v.product_id, v.size, v.color, v.stock from public.product_variants v
        join public.products p on p.id = v.product_id
        where p.status = 'published' and v.stock <= coalesce(th,5) order by v.stock limit 20) t),
    'recent_orders', (select coalesce(jsonb_agg(t), '[]') from (
        select id, order_number, customer_name, total, status, created_at
        from public.orders order by created_at desc limit 10) t),
    'top_products', (select coalesce(jsonb_agg(t), '[]') from (
        select i.product_id, max(i.name_ar) as name_ar, max(i.name_fr) as name_fr, sum(i.quantity) as sold
        from public.order_items i join public.orders o on o.id = i.order_id
        where o.status <> 'cancelled' group by i.product_id order by sold desc limit 5) t));
end $$;
revoke all on function public.admin_dashboard_stats() from public;
grant execute on function public.admin_dashboard_stats() to authenticated;

-- p_unit: 'day' | 'week' | 'month' | 'year'
create or replace function public.admin_sales_series(p_unit text default 'day', p_from timestamptz default now() - interval '30 days')
returns table(bucket timestamptz, orders bigint, sales numeric)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  if p_unit not in ('day','week','month','year') then raise exception 'invalid_unit'; end if;
  return query
    select date_trunc(p_unit, o.created_at), count(*), coalesce(sum(o.total),0)
    from public.orders o where o.status <> 'cancelled' and o.created_at >= p_from
    group by 1 order by 1;
end $$;
revoke all on function public.admin_sales_series(text, timestamptz) from public;
grant execute on function public.admin_sales_series(text, timestamptz) to authenticated;
revoke all on function public.admin_list_orphan_images() from public;
grant execute on function public.admin_list_orphan_images() to authenticated;

-- ---------- 12. How to create the FIRST admin (securely) ------------
-- 1) Sign up normally on the site (or Dashboard > Authentication > Add user).
-- 2) In the SQL Editor, run this ONCE with your own email:
--
--    insert into public.user_roles (user_id, role)
--    select id, 'admin' from auth.users where email = 'you@example.com'
--    on conflict do nothing;
--
-- Further admins are added the same way. There is no client-side way to grant roles.
