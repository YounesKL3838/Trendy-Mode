-- =====================================================================
-- 006: size type per category (shoes / pants / tops). Run once, after 005.
-- shoes: 37-44 | pants: 32-44 | tops (t-shirts, coats): XS S M L XL XXL XXXL XXXXL
-- A sub-category with no type inherits the type of its parent category.
-- =====================================================================
alter table public.categories
  add column if not exists size_type text check (size_type in ('shoes','pants','tops'));
