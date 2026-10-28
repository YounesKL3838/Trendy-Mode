-- =====================================================================
-- 005: delivery by wilaya with home / office prices. Run once, after 004.
-- =====================================================================
alter table public.orders
  add column if not exists delivery_type text not null default 'home' check (delivery_type in ('home','office'));

insert into public.store_settings (key, value)
values ('shipping', '{"default":{"home":600,"office":400},"wilayas":{}}')
on conflict (key) do nothing;

create or replace function public.create_order(p_items jsonb, p_customer jsonb, p_code text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  r record; v_subtotal numeric := 0; v_unit numeric; v_ship numeric; v_disc numeric := 0;
  v_order uuid; v_number text; d public.discount_codes%rowtype; v_has_code boolean := false;
  v_wilaya text := nullif(trim(p_customer->>'wilaya'), '');
  v_cfg jsonb; v_dtype text := coalesce(nullif(trim(p_customer->>'delivery_type'), ''), 'home');
begin
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then raise exception 'empty_cart'; end if;
  if length(trim(coalesce(p_customer->>'name',''))) < 2
     or length(trim(coalesce(p_customer->>'phone',''))) < 8
     or length(trim(coalesce(p_customer->>'address',''))) < 4
     or v_wilaya is null then raise exception 'invalid_customer'; end if;
  if v_dtype not in ('home','office') then raise exception 'invalid_customer'; end if;

  -- Delivery price comes from store_settings key 'shipping' (set in the dashboard):
  --   {"default":{"home":600,"office":400},"wilayas":{"16":{"home":800,"office":500}}}
  -- If "wilayas" has entries, ONLY those wilayas are served; otherwise the default prices apply everywhere.
  select value into v_cfg from public.store_settings where key = 'shipping';
  if v_cfg is not null then
    if jsonb_typeof(v_cfg->'wilayas') = 'object' and v_cfg->'wilayas' <> '{}'::jsonb then
      v_ship := nullif(v_cfg->'wilayas'->v_wilaya->>v_dtype, '')::numeric;
    else
      v_ship := nullif(v_cfg->'default'->>v_dtype, '')::numeric;
    end if;
    if v_ship is null then raise exception 'delivery_unavailable'; end if;
  else
    select coalesce((value->>v_wilaya)::numeric, (value->>'default')::numeric, 0)
      into v_ship from public.store_settings where key = 'shipping_fees';
  end if;

  insert into public.orders (user_id, customer_name, customer_phone, wilaya, city, address_line, note,
                             subtotal, shipping_fee, total, delivery_type)
  values (auth.uid(), trim(p_customer->>'name'), trim(p_customer->>'phone'), v_wilaya,
          p_customer->>'city', trim(p_customer->>'address'), p_customer->>'note', 0, coalesce(v_ship,0), 0, v_dtype)
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
