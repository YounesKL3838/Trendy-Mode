# Maison Noor

- `index.html` : المتجر (متصل بـ Supabase) / la boutique
- `admin.html` : لوحة التحكم / le tableau de bord
- `css/`, `js/`, `images/`
- `supabase/001_init.sql` : نفّذه في Supabase SQL Editor / à exécuter dans l’éditeur SQL
- `js/config.js` : ضع هنا Project URL والمفتاح العام (anon) فقط، ولا تضع service_role أبدًا.

الربط: Supabase > Project Settings > API، انسخ Project URL و anon public key إلى `js/config.js`.
الشحن: جدول `store_settings`، المفتاح `shipping_fees`، مثال: {"default":600,"16":800}.
أي تعديل لاحق على القاعدة: ملف جديد `supabase/002_...sql`.
