
const T={ar:{
title:"لوحة التحكم",setup:"ربط Supabase",url:"رابط المشروع (Project URL)",key:"المفتاح العام (anon key)",save:"حفظ",
email:"البريد الإلكتروني",pass:"كلمة المرور",login:"دخول",logout:"خروج",noadmin:"هذا الحساب ليس مسؤولًا.",
dash:"الرئيسية",prods:"المنتجات",orders:"الطلبات",cats:"التصنيفات",
sales:"إجمالي المبيعات",ordersN:"الطلبات",prodsN:"المنتجات",custN:"العملاء",low:"مخزون منخفض",recent:"أحدث الطلبات",top:"الأكثر مبيعًا",
day:"يومي",week:"أسبوعي",month:"شهري",year:"سنوي",none:"لا توجد بيانات بعد.",
add:"إضافة",edit:"تعديل",del:"حذف",cancel:"إلغاء",close:"إغلاق",search:"بحث…",all:"الكل",
nameAr:"الاسم بالعربية",nameFr:"الاسم بالفرنسية",shAr:"وصف مختصر (عربي)",shFr:"وصف مختصر (فرنسي)",dsAr:"الوصف (عربي)",dsFr:"الوصف (فرنسي)",
price:"السعر",sale:"سعر التخفيض",sku:"رمز SKU",cat:"التصنيف",status:"الحالة",isNew:"جديد",feat:"مميز",best:"الأكثر مبيعًا",
variants:"المقاسات والألوان والمخزون",size:"المقاس",color:"اللون",stock:"الكمية",addVar:"إضافة متغير",
images:"الصور",pick:"اختيار صور",primary:"رئيسية",up:"أعلى",down:"أسفل",uploading:"جارٍ الرفع…",failed:"فشل الرفع، احفظ مرة أخرى للمحاولة",ready:"جاهزة للرفع",
saved:"تم الحفظ",deleted:"تم الحذف",confirmDel:"هل أنت متأكد من الحذف؟ لا يمكن التراجع.",req:"أكمل الحقول المطلوبة (الاسمان، السعر، SKU).",dup:"قيمة مكررة (SKU أو متغير).",
draft:"مسودة",published:"منشور",archived:"مؤرشف",
new:"جديد",confirmed:"مؤكد",processing:"قيد التجهيز",shipped:"تم الشحن",delivered:"تم التسليم",cancelled:"ملغى",
tracking:"رقم التتبع",customer:"العميل",phone:"الهاتف",addr:"العنوان",items:"المنتجات",history:"السجل",total:"الإجمالي",update:"تحديث",
slug:"المعرّف (slug)",order:"الترتيب",active:"مفعّل",image:"الصورة",cur:"د.ج",lang:"Français",noList:"لا توجد عناصر."},
fr:{
title:"Tableau de bord",setup:"Connexion à Supabase",url:"URL du projet",key:"Clé publique (anon key)",save:"Enregistrer",
email:"E-mail",pass:"Mot de passe",login:"Connexion",logout:"Déconnexion",noadmin:"Ce compte n’est pas administrateur.",
dash:"Accueil",prods:"Produits",orders:"Commandes",cats:"Catégories",
sales:"Ventes totales",ordersN:"Commandes",prodsN:"Produits",custN:"Clients",low:"Stock faible",recent:"Dernières commandes",top:"Meilleures ventes",
day:"Jour",week:"Semaine",month:"Mois",year:"Année",none:"Aucune donnée pour l’instant.",
add:"Ajouter",edit:"Modifier",del:"Supprimer",cancel:"Annuler",close:"Fermer",search:"Rechercher…",all:"Tous",
nameAr:"Nom en arabe",nameFr:"Nom en français",shAr:"Description courte (arabe)",shFr:"Description courte (français)",dsAr:"Description (arabe)",dsFr:"Description (français)",
price:"Prix",sale:"Prix promo",sku:"Référence SKU",cat:"Catégorie",status:"Statut",isNew:"Nouveau",feat:"Mis en avant",best:"Meilleure vente",
variants:"Tailles, couleurs et stock",size:"Taille",color:"Couleur",stock:"Quantité",addVar:"Ajouter une variante",
images:"Images",pick:"Choisir des images",primary:"Principale",up:"Monter",down:"Descendre",uploading:"Envoi en cours…",failed:"Échec de l’envoi, enregistrez à nouveau pour réessayer",ready:"Prête à envoyer",
saved:"Enregistré",deleted:"Supprimé",confirmDel:"Confirmer la suppression ? Action irréversible.",req:"Complétez les champs requis (deux noms, prix, SKU).",dup:"Valeur en double (SKU ou variante).",
draft:"Brouillon",published:"Publié",archived:"Archivé",
new:"Nouvelle",confirmed:"Confirmée",processing:"En préparation",shipped:"Expédiée",delivered:"Livrée",cancelled:"Annulée",
tracking:"N° de suivi",customer:"Client",phone:"Téléphone",addr:"Adresse",items:"Articles",history:"Historique",total:"Total",update:"Mettre à jour",
slug:"Identifiant (slug)",order:"Ordre",active:"Actif",image:"Image",cur:"DA",lang:"العربية",noList:"Aucun élément."}};

Object.assign(T.ar,{looks:"الإطلالات",ttlAr:"العنوان بالعربية",ttlFr:"العنوان بالفرنسية",addProd:"أضف منتجًا إلى الإطلالة",lookNeedImg:"أضف صورة للإطلالة.",lookNeedProds:"أضف منتجًا واحدًا على الأقل.",lookImg:"صورة الإطلالة (رجل يرتدي القطع)",lookProds:"المنتجات في الإطلالة"});
Object.assign(T.fr,{looks:"Looks",ttlAr:"Titre en arabe",ttlFr:"Titre en français",addProd:"Ajouter un produit au look",lookNeedImg:"Ajoutez l’image du look.",lookNeedProds:"Ajoutez au moins un produit.",lookImg:"Image du look (homme portant les pièces)",lookProds:"Produits du look"});
Object.assign(T.ar,{catalog:"المنتجات والتصنيفات",subcat:"التصنيف الفرعي",addColor:"لون",addSize:"إضافة مقاس",addCat:"تصنيف",uncat:"بدون تصنيف",parent:"التصنيف الأب (اختياري)",lookImgs:"صور الإطلالة (يمكن رفع عدة صور)"});
Object.assign(T.fr,{catalog:"Produits et catégories",subcat:"Sous-catégorie",addColor:"couleur",addSize:"Ajouter une taille",addCat:"Catégorie",uncat:"Sans catégorie",parent:"Catégorie parente (facultatif)",lookImgs:"Photos du look (plusieurs possibles)"});
Object.assign(T.ar,{landings:"صفحات الهبوط",landing:"صفحة هبوط",lpType:"النوع",lpProduct:"منتج",lpLook:"إطلالة",lpTarget:"المنتج أو الإطلالة",lpSlug:"الرابط (إنجليزي وأرقام و -)",lpHead:"العنوان الرئيسي",lpSub:"عنوان فرعي",lpBen:"المزايا (كل ميزة في سطر)",lpCta:"نص زر الطلب",lpForm:"إظهار نموذج الطلب",lpLink:"رابط الصفحة",lpCopy:"نسخ الرابط",lpCopied:"تم نسخ الرابط",lpOpen:"فتح",lpSlugBad:"الرابط غير صالح: 3 إلى 60 حرفًا إنجليزيًا صغيرًا أو أرقامًا أو -"});
Object.assign(T.fr,{landings:"Pages de vente",landing:"Page de vente",lpType:"Type",lpProduct:"Produit",lpLook:"Look",lpTarget:"Produit ou look",lpSlug:"Lien (a-z, chiffres et -)",lpHead:"Titre principal",lpSub:"Sous-titre",lpBen:"Avantages (un par ligne)",lpCta:"Texte du bouton",lpForm:"Afficher le formulaire de commande",lpLink:"Lien de la page",lpCopy:"Copier le lien",lpCopied:"Lien copié",lpOpen:"Ouvrir",lpSlugBad:"Lien invalide : 3 à 60 caractères a-z, chiffres ou -"});
Object.assign(T.ar,{site:"الموقع",sNote:"قسم المالك: يظهر بالضغط على عنوان اللوحة 5 مرات متتالية. التعديل مسموح للمسؤولين فقط.",sBrand:"الهوية",sName:"اسم المتجر",sLogo:"الشعار (لوغو)",sHero:"صورة الواجهة الرئيسية",sAboutImg:"صورة قسم «من نحن»",sTexts:"النصوص والعناوين",sBlank:"اترك الحقل فارغًا لاستخدام النص الافتراضي.",sH1:"العنوان الرئيسي",sSub:"الوصف تحت العنوان",sShop:"زر التسوق",sExplore:"زر المجموعة الجديدة",sBanT:"عنوان البانر",sBanP:"نص البانر",sBanB:"زر البانر",sAbT:"عنوان «من نحن»",sAbP:"نص «من نحن»",sFAbout:"نص التذييل",sCopy:"حقوق الطبع والنشر",sContact:"التواصل ومواقع التواصل الاجتماعي",sPhone:"رقم الهاتف",sWa:"رقم واتساب",sDev:"المطوّر",sDevName:"اسم المطوّر",sDevUrl:"رابط المطوّر (اختياري)",sUrlBad:"الروابط يجب أن تبدأ بـ https://"});
Object.assign(T.fr,{site:"Site",sNote:"Espace propriétaire : s’affiche en touchant 5 fois le titre du tableau de bord. Réservé aux administrateurs.",sBrand:"Identité",sName:"Nom de la boutique",sLogo:"Logo",sHero:"Image de la page d’accueil",sAboutImg:"Image de la section À propos",sTexts:"Textes et titres",sBlank:"Laissez vide pour garder le texte par défaut.",sH1:"Titre principal",sSub:"Texte sous le titre",sShop:"Bouton d’achat",sExplore:"Bouton nouvelle collection",sBanT:"Titre de la bannière",sBanP:"Texte de la bannière",sBanB:"Bouton de la bannière",sAbT:"Titre À propos",sAbP:"Texte À propos",sFAbout:"Texte du pied de page",sCopy:"Droits d’auteur",sContact:"Contact et réseaux sociaux",sPhone:"Téléphone",sWa:"Numéro WhatsApp",sDev:"Développeur",sDevName:"Nom du développeur",sDevUrl:"Lien du développeur (facultatif)",sUrlBad:"Les liens doivent commencer par https://"});
Object.assign(T.ar,{imgHint:"تُقصّ الصور تلقائيًا من الوسط إلى مقاس إنستغرام العمودي 4:5 (حتى 1440×1800) بجودة عالية وحجم أصغر."});
Object.assign(T.fr,{imgHint:"Les images sont recadrées automatiquement au centre au format portrait Instagram 4:5 (jusqu’à 1440×1800), en haute qualité et poids réduit."});
Object.assign(T.ar,{sHTitle:"عنوان الشريط العلوي (اتركه فارغًا لاسم المتجر)"});
Object.assign(T.fr,{sHTitle:"Titre de la barre supérieure (vide = nom de la boutique)"});
var WA="الشلف|الأغواط|أم البواقي|باتنة|بجاية|بسكرة|بشار|البليدة|البويرة|تمنراست|تبسة|تلمسان|تيارت|تيزي وزو|الجزائر|الجلفة|جيجل|سطيف|سعيدة|سكيكدة|سيدي بلعباس|عنابة|قالمة|قسنطينة|المدية|مستغانم|المسيلة|معسكر|ورقلة|وهران|البيض|إليزي|برج بوعريريج|بومرداس|الطارف|تندوف|تيسمسيلت|الوادي|خنشلة|سوق أهراس|تيبازة|ميلة|عين الدفلى|النعامة|عين تموشنت|غرداية|غليزان|تيميمون|برج باجي مختار|أولاد جلال|بني عباس|عين صالح|عين قزام|تقرت|جانت|المغير|المنيعة".split("|");WA.unshift("أدرار");
var WF="Adrar|Chlef|Laghouat|Oum El Bouaghi|Batna|Béjaïa|Biskra|Béchar|Blida|Bouira|Tamanrasset|Tébessa|Tlemcen|Tiaret|Tizi Ouzou|Alger|Djelfa|Jijel|Sétif|Saïda|Skikda|Sidi Bel Abbès|Annaba|Guelma|Constantine|Médéa|Mostaganem|M’Sila|Mascara|Ouargla|Oran|El Bayadh|Illizi|Bordj Bou Arréridj|Boumerdès|El Tarf|Tindouf|Tissemsilt|El Oued|Khenchela|Souk Ahras|Tipaza|Mila|Aïn Defla|Naâma|Aïn Témouchent|Ghardaïa|Relizane|Timimoun|Bordj Badji Mokhtar|Ouled Djellal|Béni Abbès|In Salah|In Guezzam|Touggourt|Djanet|El M’Ghair|El Menia".split("|");
Object.assign(T.ar,{discounts:"أكواد الخصم",banners:"البنرات",delivery:"التوصيل",dcCode:"الكود",dcKind:"النوع",dcPercent:"نسبة مئوية %",dcFixed:"مبلغ ثابت",dcValue:"القيمة",dcMin:"الحد الأدنى للطلب",dcMax:"أقصى عدد استخدامات (فارغ = بلا حد)",dcUsed:"مرات الاستخدام",dcFrom:"يبدأ",dcTo:"ينتهي",dcActive:"مفعّل",dcBad:"تحقق من الكود (3-30 حرفًا إنجليزيًا أو أرقامًا) والقيمة (النسبة حتى 100).",bnImg:"صورة البنر (يفضّل عريضة)",bnLink:"رابط عند الضغط (اختياري)",bnNeedImg:"أضف صورة للبنر.",dlDefault:"الأسعار الافتراضية (تُطبَّق على كل الولايات إن لم تضف ولايات)",dHome:"توصيل إلى المنزل",dOffice:"توصيل إلى المكتب",dlWilayas:"ولايات بأسعار خاصة",dlNote:"عند إضافة ولايات هنا تُقبل الطلبات من هذه الولايات فقط. اترك سعر نوع فارغًا لإلغاء ذلك النوع في تلك الولاية.",dlAdd:"أضف ولاية",dlAll:"أضف كل الولايات"});
Object.assign(T.fr,{discounts:"Codes promo",banners:"Bannières",delivery:"Livraison",dcCode:"Code",dcKind:"Type",dcPercent:"Pourcentage %",dcFixed:"Montant fixe",dcValue:"Valeur",dcMin:"Commande minimum",dcMax:"Utilisations max (vide = illimité)",dcUsed:"Utilisations",dcFrom:"Début",dcTo:"Fin",dcActive:"Actif",dcBad:"Vérifiez le code (3-30 lettres A-Z ou chiffres) et la valeur (pourcentage max 100).",bnImg:"Image de la bannière (de préférence large)",bnLink:"Lien au clic (facultatif)",bnNeedImg:"Ajoutez une image à la bannière.",dlDefault:"Tarifs par défaut (appliqués à toutes les wilayas si vous n’en ajoutez aucune)",dHome:"Livraison à domicile",dOffice:"Livraison au bureau",dlWilayas:"Wilayas avec tarifs spécifiques",dlNote:"Dès que vous ajoutez des wilayas ici, seules ces wilayas sont desservies. Laissez un tarif vide pour désactiver ce mode dans la wilaya.",dlAdd:"Ajouter une wilaya",dlAll:"Ajouter toutes les wilayas"});
Object.assign(T.ar,{sizeType:"نوع المقاسات",stNone:"— (يرث من التصنيف الأب)",st_shoes:"حذاء (37 - 44)",st_pants:"سروال (32 - 44)",st_tops:"تيشرت / معطف (XS - XXXXL)",stReq:"اختر نوع المقاسات لهذا التصنيف (حذاء أو سروال أو تيشرت/معطف).",sizeType_shoes:"مقاسات الحذاء: من 37 إلى 44",sizeType_pants:"مقاسات السروال: من 32 إلى 44",sizeType_tops:"مقاسات التيشرت والمعطف: XS إلى XXXXL",sizeNoType:"لا يوجد نوع مقاسات لهذا التصنيف، عُرضت مقاسات التيشرت. حدّد النوع من تعديل التصنيف."});
Object.assign(T.fr,{sizeType:"Type de tailles",stNone:"— (hérite de la catégorie parente)",st_shoes:"Chaussures (37 - 44)",st_pants:"Pantalon (32 - 44)",st_tops:"T-shirt / manteau (XS - XXXXL)",stReq:"Choisissez le type de tailles de cette catégorie (chaussures, pantalon ou t-shirt/manteau).",sizeType_shoes:"Pointures : de 37 à 44",sizeType_pants:"Tailles de pantalon : de 32 à 44",sizeType_tops:"Tailles t-shirt et manteau : XS à XXXXL",sizeNoType:"Aucun type de tailles pour cette catégorie, les tailles t-shirt sont affichées. Définissez le type en modifiant la catégorie."});
Object.assign(T.ar,{newOrder:"طلب جديد",pieces:"قطعة",oSub:"المجموع الفرعي",oDisc:"الخصم"});
Object.assign(T.fr,{newOrder:"Nouvelle commande",pieces:"pièces",oSub:"Sous-total",oDisc:"Remise"});
Object.assign(T.ar,{trHint:"اكتب اسم المنتج ووصفه بلغة واحدة فقط، وتُترجم اللغة الأخرى تلقائيًا عند الحفظ (ويمكنك تعديل الترجمة).",trBtn:"ترجمة تلقائية",trWait:"جارٍ الترجمة…",trDone:"تمت الترجمة التلقائية",trFail:"تعذّرت الترجمة التلقائية، اكتب الترجمة يدويًا أو أعد المحاولة لاحقًا."});
Object.assign(T.fr,{trHint:"Saisissez le nom et la description dans une seule langue : l’autre est traduite automatiquement à l’enregistrement (vous pouvez la corriger).",trBtn:"Traduire automatiquement",trWait:"Traduction en cours…",trDone:"Traduction automatique effectuée",trFail:"La traduction automatique a échoué, saisissez la traduction manuellement ou réessayez plus tard."});
Object.assign(T.ar,{trAll:"ترجمة المنتجات للعربية",trAllAsk:"سيُترجم إلى العربية كل اسم أو وصف منتج لا يحتوي نصًا عربيًا (مثل النص الفرنسي المكتوب في خانة العربية). هل تريد المتابعة؟",trAllDone:"اكتملت الترجمة",trAllNone:"كل المنتجات مترجمة للعربية بالفعل",trAllStop:"توقفت الترجمة (الحد اليومي أو انقطاع الاتصال)، أعد المحاولة لاحقًا"});
Object.assign(T.fr,{trAll:"Traduire les produits en arabe",trAllAsk:"Tout nom ou description de produit sans texte arabe (par exemple du français saisi dans le champ arabe) sera traduit en arabe. Continuer ?",trAllDone:"Traduction terminée",trAllNone:"Tous les produits sont déjà traduits en arabe",trAllStop:"Traduction interrompue (limite quotidienne ou connexion), réessayez plus tard"});
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lang=(()=>{try{return localStorage.getItem('alang')||'ar'}catch(e){return 'ar'}})();
const t=k=>T[lang][k]||k;
const money=v=>Number(v||0).toLocaleString(lang==='ar'?'ar-DZ':'fr-FR')+' '+t('cur');
const date=d=>new Date(d).toLocaleDateString(lang==='ar'?'ar-DZ':'fr-FR');
const STAT=['new','confirmed','processing','shipped','delivered','cancelled'];
let sb=null,tab='dash',cats=[],EDIT=null;

function toast(m,err){const e=document.createElement('div');e.className='toast'+(err?' err':'');e.textContent=m;document.body.append(e);setTimeout(()=>e.remove(),2600)}
function fail(e){console.error(e);toast(e&&e.code==='23505'?t('dup'):(e&&e.message)||String(e),true)}
function setLang(l){lang=l;try{localStorage.setItem('alang',l)}catch(e){}document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.title=t('title');sb&&sb.auth&&boot()}
const cfg=()=>{try{const c=JSON.parse(localStorage.getItem('sbcfg')||'null');if(c)return c}catch(e){}return SUPABASE_URL?{url:SUPABASE_URL,key:SUPABASE_ANON_KEY}:null};
const pub=p=>p?sb.storage.from('product-images').getPublicUrl(p).data.publicUrl:'';
const nm=(arr,l)=>((arr||[]).find(x=>x.lang===l)||{}).name||'';
const langBtn=()=>`<button class="btn sm" onclick="setLang('${lang==='ar'?'fr':'ar'}')">${t('lang')}</button>`;

/* ---------- boot / auth ---------- */
async function boot(){
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.lang=lang;document.title=t('title');
  const c=cfg();
  if(!c){$('#app').innerHTML=`<div class="login"><div class="row"><h2 class="sp">${t('setup')}</h2>${langBtn()}</div>
   <label>${t('url')}</label><input id="cu" dir="ltr" placeholder="https://xxxx.supabase.co"><label>${t('key')}</label><input id="ck" dir="ltr">
   <p><button class="btn pri" onclick="saveCfg()">${t('save')}</button></p></div>`;return}
  if(!sb)sb=supabase.createClient(c.url,c.key);
  const {data:{session}}=await sb.auth.getSession();
  if(!session)return loginView();
  if(!(await isAdmin(session.user.id))){await sb.auth.signOut();return loginView(t('noadmin'))}
  shell();go(tab);startOrderWatch();setTimeout(function(){try{if(sessionStorage.getItem('trdone')!=='1')trAll(true)}catch(e){}},2500)
}
function saveCfg(){const url=$('#cu').value.trim(),key=$('#ck').value.trim();if(!url||!key)return;localStorage.setItem('sbcfg',JSON.stringify({url,key}));boot()}
async function isAdmin(id){const {data}=await sb.from('user_roles').select('role').eq('user_id',id).eq('role','admin');return !!(data&&data.length)}
function loginView(msg){$('#app').innerHTML=`<div class="login"><div class="row"><h2 class="sp">${t('title')}</h2>${langBtn()}</div>
 <form onsubmit="doLogin(event)"><label>${t('email')}</label><input id="le" type="email" dir="ltr" required autocomplete="username">
 <label>${t('pass')}</label><input id="lp" type="password" dir="ltr" required autocomplete="current-password">
 <p style="color:var(--red)">${esc(msg||'')}</p><button class="btn pri">${t('login')}</button></form></div>`}
async function doLogin(e){e.preventDefault();const {error}=await sb.auth.signInWithPassword({email:$('#le').value.trim(),password:$('#lp').value});if(error)return loginView(error.message);boot()}
async function logout(){stopOrderWatch();try{sessionStorage.removeItem('owner')}catch(e){}await sb.auth.signOut();boot()}
function shell0(){$('#app').innerHTML=`<div class="top"><div class="row"><b class="sp" id="ttl" onclick="ownerTap()" style="user-select:none;cursor:default">${t('title')}</b>${langBtn()}<button class="btn sm" onclick="logout()">${t('logout')}</button></div>
 <div class="tabs">${tabsList().map(k=>`<button data-t="${k}" class="${k===tab?'on':''}" onclick="go('${k}')">${t(k)}</button>`).join('')}</div></div><main id="main"></main>`}
async function go(k){tab=k;document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===k));$('#main').innerHTML='…';
  try{await({dash:vDash,catalog:vCatalog,orders:vOrders,looks:vLooks,landings:vLandings,discounts:vDiscounts,banners:vBanners,delivery:vDelivery,site:vSite}[k])()}catch(e){fail(e)}}
function modal(h){$('#modal').innerHTML=`<div class="overlay" onclick="if(event.target===this)closeM()"><div class="sheet">${h}</div></div>`}
function closeM(){$('#modal').innerHTML='';EDIT=null}

/* ---------- order helpers (images, live watch, badge) ---------- */
let ORD_T=null,ORD_CH=null,KNOWN=null,NEWCNT=0;const FRESH=new Set();
async function orderImgMap(orders){
  const ids=[...new Set(orders.flatMap(o=>(o.order_items||[]).map(i=>i.product_id).filter(Boolean)))];
  if(!ids.length)return {};
  const {data}=await sb.from('product_images').select('product_id,path,is_primary,sort_order').in('product_id',ids);
  const m={};(data||[]).sort((a,b)=>(b.is_primary-a.is_primary)||(a.sort_order-b.sort_order)).forEach(r=>{if(!m[r.product_id])m[r.product_id]=r.path});return m}
const othumbs=(o,map)=>{const ids=[...new Set((o.order_items||[]).map(i=>i.product_id).filter(Boolean))],shown=ids.slice(0,3);
  return `<div class="othumbs">${shown.map(p=>map[p]?`<img src="${esc(pub(map[p]))}" alt="" loading="lazy">`:'<div class="ph"></div>').join('')}${ids.length>3?`<span class="more">+${ids.length-3}</span>`:''}${ids.length?'':'<div class="ph"></div>'}</div>`};
const ocClass=o=>'card oc'+(o.status==='new'?' is-new':'')+(FRESH.has(o.id)?' fresh':'');
function setOrderBadge(n){const b=document.querySelector('.tabs button[data-t="orders"]');if(!b)return;b.innerHTML=t('orders')+(n>0?`<span class="nbadge">${n}</span>`:'')}
function shell(){shell0();setOrderBadge(NEWCNT)}
async function checkOrders(){
  try{
    const [a,b]=await Promise.all([sb.from('orders').select('id,order_number').order('created_at',{ascending:false}).limit(20),sb.from('orders').select('id',{count:'exact',head:true}).eq('status','new')]);
    if(a.error)return;
    NEWCNT=b.count||0;setOrderBadge(NEWCNT);
    const ids=a.data.map(o=>o.id);
    if(KNOWN===null){KNOWN=new Set(ids);return}
    const fresh=a.data.filter(o=>!KNOWN.has(o.id));ids.forEach(i=>KNOWN.add(i));
    if(fresh.length){
      fresh.forEach(o=>{FRESH.add(o.id);setTimeout(()=>FRESH.delete(o.id),15000)});
      toast(`${t('newOrder')} ${fresh[0].order_number}${fresh.length>1?' +'+(fresh.length-1):''}`);
      if($('#modal').innerHTML===''&&(tab==='dash'||tab==='orders'))go(tab)}
  }catch(e){console.error(e)}}
function startOrderWatch(){
  stopOrderWatch();KNOWN=null;checkOrders();
  ORD_T=setInterval(checkOrders,25000);
  try{ORD_CH=sb.channel('orders-watch').on('postgres_changes',{event:'*',schema:'public',table:'orders'},()=>checkOrders()).subscribe()}catch(e){}}
function stopOrderWatch(){clearInterval(ORD_T);if(ORD_CH){try{sb.removeChannel(ORD_CH)}catch(e){}ORD_CH=null}}

/* ---------- dashboard ---------- */
async function lowThreshold(){const {data}=await sb.from('store_settings').select('value').eq('key','low_stock_threshold').maybeSingle();const n=data?Number(data.value):NaN;return Number.isFinite(n)&&n>=0?n:5}
async function vDash(){
  const {data:s,error}=await sb.rpc('admin_dashboard_stats');if(error)throw error;
  const th=await lowThreshold();
  const [lo,ro]=await Promise.all([
    sb.from('product_variants').select('id,size,color,stock,products!inner(id,sku,status,product_translations(lang,name),product_images(path,is_primary,sort_order))').eq('products.status','published').lte('stock',th).order('stock').limit(20),
    sb.from('orders').select('id,order_number,customer_name,total,status,created_at,order_items(product_id,quantity)').order('created_at',{ascending:false}).limit(8)]);
  if(lo.error)throw lo.error;if(ro.error)throw ro.error;
  const map=await orderImgMap(ro.data);
  const none=`<p class="muted">${t('none')}</p>`;
  const low=(lo.data||[]).map(v=>{const p=v.products,im=(p.product_images||[]).slice().sort((a,b)=>(b.is_primary-a.is_primary)||(a.sort_order-b.sort_order))[0];
    return `<div class="lsr">${im?`<img class="lsi" src="${esc(pub(im.path))}" alt="" loading="lazy">`:'<div class="lsi"></div>'}<div class="sp"><b>${esc(nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku)}</b> <span class="szb">${esc(v.size)}</span><div class="muted">${esc(cl(v.color))}</div></div><b class="${v.stock<=0?'oos':''}">${v.stock}</b></div>`}).join('');
  const rec=ro.data.map(o=>`<div class="${ocClass(o)}" onclick="openOrder('${o.id}')" style="margin-bottom:8px">${othumbs(o,map)}<div class="row"><b class="sp">${esc(o.order_number)}</b><span class="pill ${o.status}">${t(o.status)}</span></div><div class="muted">${esc(o.customer_name)} · ${date(o.created_at)}</div><b>${money(o.total)}</b></div>`).join('');
  $('#main').innerHTML=`<div class="grid">
   <div class="card stat"><b>${money(s.total_sales)}</b><span>${t('sales')}</span></div>
   <div class="card stat"><b>${s.orders_count}</b><span>${t('ordersN')}</span></div>
   <div class="card stat"><b>${s.products_count}</b><span>${t('prodsN')}</span></div>
   <div class="card stat"><b>${s.customers_count}</b><span>${t('custN')}</span></div></div>
  <div class="grid" style="margin-top:12px">
   <div class="card"><b>${t('low')}</b>${low||none}</div>
   <div class="card"><b>${t('recent')}</b><div style="margin-top:8px">${rec||none}</div></div>
   <div class="card"><b>${t('top')}</b>${(s.top_products||[]).map(x=>`<p class="muted">${esc(lang==='ar'?x.name_ar:x.name_fr)} — <b>${x.sold}</b></p>`).join('')||none}</div></div>`}

/* ---------- automatic translation (fr <-> ar) for product names and descriptions ---------- */
function splitText(s,max){
  const parts=s.match(/[^.!?؟\n]+[.!?؟\n]*/g)||[s],res=[];let cur='';
  for(const p of parts){if((cur+p).length>max){if(cur.trim())res.push(cur.trim());cur=p;while(cur.length>max){res.push(cur.slice(0,max));cur=cur.slice(max)}}else cur+=p}
  if(cur.trim())res.push(cur.trim());return res}
function decodeEnt(s){const d=document.createElement('textarea');d.innerHTML=s;return d.value}
async function mmTranslate(text,from,to){
  const out=[];
  for(const c of splitText(text,450)){
    const u='https://api.mymemory.translated.net/get?q='+encodeURIComponent(c)+'&langpair='+from+'|'+to+(typeof TRANSLATE_EMAIL!=='undefined'&&TRANSLATE_EMAIL?'&de='+encodeURIComponent(TRANSLATE_EMAIL):'');
    const r=await fetch(u);if(!r.ok)throw new Error(t('trFail'));
    const j=await r.json(),tx=j&&j.responseData&&j.responseData.translatedText;
    if(!tx||Number(j.responseStatus)!==200||/MYMEMORY WARNING/i.test(tx))throw new Error(t('trFail'));
    out.push(decodeEnt(tx))}
  return out.join(' ')}
/* fills the empty language from the filled one; returns true if something was translated */
const isAr=s=>/[\u0600-\u06FF]/.test(s||'');
async function autoTranslate(){
  let did=false;
  for(const [a,f] of [['p_na','p_nf'],['p_sa','p_sf'],['p_da','p_df']]){
    const ea=$('#'+a),ef=$('#'+f);let va=ea.value.trim(),vf=ef.value.trim();
    if(va&&!isAr(va)){if(!vf){vf=va;ef.value=va}va=''}          // French typed in the Arabic box: translate it
    if(!va&&vf){ea.value=await mmTranslate(vf,'fr','ar');did=true}
    else if(va&&!vf){ef.value=await mmTranslate(va,'ar','fr');did=true}}
  return did}
/* one click: translates every product whose Arabic name/description is missing or not Arabic */
async function trAll(silent){
  if(!silent&&!confirm(t('trAllAsk')))return;
  const {data,error}=await sb.from('products').select('id,product_translations(lang,name,short_description,description)');if(error)return fail(error);
  const F=['name','short_description','description'],todo=[];
  data.forEach(p=>{const ar=p.product_translations.find(x=>x.lang==='ar')||{},fr=p.product_translations.find(x=>x.lang==='fr')||{};
    const src=f=>(fr[f]||'').trim()||((ar[f]&&!isAr(ar[f]))?ar[f].trim():'');
    const fields=F.filter(f=>{const c=(ar[f]||'').trim();return(!c||!isAr(c))&&src(f)});
    if(fields.length)todo.push({p,ar,fr,fields,src})});
  if(!todo.length){try{sessionStorage.setItem('trdone','1')}catch(e){}return silent?undefined:toast(t('trAllNone'))}
  let done=0,stopped=false;
  for(const it of todo){
    toast(`${t('trWait')} ${done+1}/${todo.length}`);
    try{
      const arRow={product_id:it.p.id,lang:'ar',name:it.ar.name||'',short_description:it.ar.short_description||null,description:it.ar.description||null};
      for(const f of it.fields)arRow[f]=await mmTranslate(it.src(f),'fr','ar');
      if(!arRow.name)continue;
      let r=await sb.from('product_translations').upsert(arRow,{onConflict:'product_id,lang'});if(r.error)throw r.error;
      if(!(it.fr.name||'').trim()){const frName=it.src('name');
        if(frName){r=await sb.from('product_translations').upsert({product_id:it.p.id,lang:'fr',name:frName,short_description:it.src('short_description')||null,description:it.src('description')||null},{onConflict:'product_id,lang'});if(r.error)throw r.error}}
      done++;await new Promise(r=>setTimeout(r,250))
    }catch(e){console.error(e);stopped=true;break}}
  toast(stopped?`${t('trAllStop')} (${done}/${todo.length})`:`${t('trAllDone')} (${done})`,stopped);
  if(!stopped)try{sessionStorage.setItem('trdone','1')}catch(e){}
  if(tab==='catalog')vCatalog()}
async function trBtn(){
  const b=$('#p_tr');b.disabled=true;toast(t('trWait'));
  try{await autoTranslate();toast(t('trDone'))}catch(e){fail(e)}
  b.disabled=false}

/* ---------- catalog: categories with their products ---------- */
let CQ='',CS='';
async function loadCats(){const {data}=await sb.from('categories').select('*,category_translations(lang,name)').order('sort_order');cats=data||[]}
const cname=c=>esc(nm(c.category_translations,lang)||nm(c.category_translations,'ar')||c.slug);
async function vCatalog(){
  await loadCats();
  const {data,error}=await sb.from('products').select('id,sku,price,sale_price,status,category_id,subcategory_id,product_translations(lang,name),product_images(path,is_primary,sort_order),product_variants(stock)').order('created_at',{ascending:false});
  if(error)throw error;
  const q=CQ.toLowerCase();
  const rows=data.filter(p=>(!CS||p.status===CS)&&(!q||(p.sku+nm(p.product_translations,'ar')+nm(p.product_translations,'fr')).toLowerCase().includes(q)));
  const card=p=>{const im=(p.product_images||[]).find(i=>i.is_primary)||(p.product_images||[])[0];const st=p.product_variants.reduce((a,v)=>a+v.stock,0);
    return `<div class="card"><div class="pc">${im?`<img src="${esc(pub(im.path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku)}</h4>
    <div class="muted">${esc(p.sku)} · ${money(p.sale_price||p.price)}</div><div class="muted">${t('stock')}: ${st}</div><span class="pill ${p.status}">${t(p.status)}</span></div></div>
    <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openProduct('${p.id}')">${t('edit')}</button><button class="btn sm" onclick="openLanding(null,'product','${p.id}')">${t('landing')}</button><button class="btn sm red" onclick="delProduct('${p.id}')">${t('del')}</button></div></div>`};
  const grid=a=>a.length?`<div class="grid">${a.map(card).join('')}</div>`:`<p class="muted">${t('noList')}</p>`;
  const kids=id=>cats.filter(k=>k.parent_id===id);
  const sub=k=>{const ps=rows.filter(p=>p.subcategory_id===k.id);return `<div class="sub"><div class="row"><b class="sp">${cname(k)} <span class="muted">(${ps.length})</span></b>
    <button class="btn sm" onclick="openProduct(null,'${k.id}')">+ ${t('prods')}</button><button class="btn sm" onclick="openCat('${k.id}')">${t('edit')}</button><button class="btn sm red" onclick="delCat('${k.id}')">${t('del')}</button></div>${grid(ps)}</div>`};
  const sec=c=>{const ks=kids(c.id);const mine=rows.filter(p=>p.category_id===c.id);const direct=mine.filter(p=>!ks.some(k=>k.id===p.subcategory_id));
    return `<details class="cg" open><summary><b class="sp">${cname(c)} <span class="muted">(${mine.length})</span></b>
    <button class="btn sm" onclick="event.preventDefault();openProduct(null,'${c.id}')">+ ${t('prods')}</button><button class="btn sm" onclick="event.preventDefault();openCat('${c.id}')">${t('edit')}</button><button class="btn sm red" onclick="event.preventDefault();delCat('${c.id}')">${t('del')}</button></summary>
    ${grid(direct)}${ks.map(sub).join('')}<p><button class="btn sm" onclick="openCat(null,'${c.id}')">+ ${t('subcat')}</button></p></details>`};
  const un=rows.filter(p=>!p.category_id);
  $('#main').innerHTML=`<div class="row"><input style="flex:1;min-width:140px" placeholder="${t('search')}" value="${esc(CQ)}" oninput="CQ=this.value;clearTimeout(window._d);window._d=setTimeout(vCatalog,300)">
   <select style="width:auto" onchange="CS=this.value;vCatalog()"><option value="">${t('all')}</option>${['draft','published','archived'].map(s=>`<option value="${s}" ${s===CS?'selected':''}>${t(s)}</option>`).join('')}</select>
   <button class="btn" onclick="trAll()">${t('trAll')}</button><button class="btn" onclick="openCat()">+ ${t('addCat')}</button><button class="btn pri" onclick="openProduct()">+ ${t('add')} ${t('prods')}</button></div>
   ${cats.filter(c=>!c.parent_id).map(sec).join('')}
   ${un.length?`<details class="cg" open><summary><b class="sp">${t('uncat')} <span class="muted">(${un.length})</span></b></summary>${grid(un)}</details>`:''}
   ${!cats.length&&!un.length?`<p class="muted">${t('noList')}</p>`:''}`}

async function openProduct(id,catId){
  await loadCats();
  EDIT={id:id||null,imgs:[],delImgs:[],origVars:[]};let p={status:'draft'},tr=[],vars=[];
  if(id){const {data,error}=await sb.from('products').select('*,product_translations(*),product_images(*),product_variants(*)').eq('id',id).single();if(error)return fail(error);
    p=data;tr=data.product_translations;vars=data.product_variants;EDIT.origVars=vars.map(v=>v.id);
    EDIT.imgs=[...data.product_images].sort((a,b)=>a.sort_order-b.sort_order).map(i=>({id:i.id,path:i.path,primary:i.is_primary}))}
  else if(catId){const c=cats.find(x=>x.id===catId);if(c){if(c.parent_id){p.category_id=c.parent_id;p.subcategory_id=c.id}else p.category_id=c.id}}
  const g=l=>tr.find(x=>x.lang===l)||{};
  const bySize={};vars.forEach(v=>{(bySize[v.size]=bySize[v.size]||[]).push(v)});
  const sizes=Object.keys(bySize);
  const _cc=cats.find(x=>x.id===p.subcategory_id),_pc=cats.find(x=>x.id===p.category_id);SIZETYPE=(_cc&&_cc.size_type)||(_pc&&_pc.size_type)||'tops';
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <p class="muted">${t('trHint')} <button class="btn sm" type="button" id="p_tr" onclick="trBtn()">${t('trBtn')}</button></p>
  <div class="two"><div><label>${t('nameAr')}</label><input id="p_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')}</label><input id="p_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('shAr')}</label><textarea id="p_sa">${esc(g('ar').short_description)}</textarea></div><div><label>${t('shFr')}</label><textarea id="p_sf">${esc(g('fr').short_description)}</textarea></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="p_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="p_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('price')} *</label><input id="p_pr" type="number" min="0" step="1" inputmode="decimal" value="${p.price??''}"></div><div><label>${t('sale')}</label><input id="p_sp" type="number" min="0" step="1" inputmode="decimal" value="${p.sale_price??''}"></div></div>
  <div class="two"><div><label>${t('sku')} *</label><input id="p_sku" dir="ltr" value="${esc(p.sku)}"></div><div><label>${t('status')}</label><select id="p_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===p.status?'selected':''}>${t(s)}</option>`).join('')}</select></div></div>
  <div class="two"><div><label>${t('cat')}</label><select id="p_ct" onchange="fillSub();applyType()"><option value="">—</option>${cats.filter(c=>!c.parent_id).map(c=>`<option value="${c.id}" ${c.id===p.category_id?'selected':''}>${cname(c)}</option>`).join('')}</select></div><div><label>${t('subcat')}</label><select id="p_sc" onchange="applyType()"></select></div></div>
  <div class="chk"><label><input type="checkbox" id="p_new" ${p.is_new?'checked':''}>${t('isNew')}</label><label><input type="checkbox" id="p_ft" ${p.is_featured?'checked':''}>${t('feat')}</label><label><input type="checkbox" id="p_bs" ${p.is_bestseller?'checked':''}>${t('best')}</label></div>
  <label>${t('variants')}</label><p class="muted" id="p_tyHint"></p><div id="vars">${(sizes.length?sizes:['']).map(s=>vgroup(s,bySize[s]||[{stock:0}])).join('')}</div><button class="btn sm" type="button" onclick="addSize()">+ ${t('addSize')}</button>
  <label>${t('images')}</label><p class="muted">${t('imgHint')}</p><div id="imgs"></div><input type="file" id="p_files" accept="image/*" multiple hidden onchange="addFiles(this.files)"><button class="btn sm" type="button" onclick="$('#p_files').click()">+ ${t('pick')}</button>
  <p style="margin-top:20px"><button class="btn pri" id="p_save" onclick="saveProduct()">${t('save')}</button></p>`);
  fillSub(p.subcategory_id);typeHint();renderImgs()}
function fillSub(sel){const pid=$('#p_ct').value;$('#p_sc').innerHTML=`<option value="">—</option>`+cats.filter(c=>pid&&c.parent_id===pid).map(c=>`<option value="${c.id}" ${c.id===sel?'selected':''}>${cname(c)}</option>`).join('')}
/* one size, several colors: size is typed once, each color has its own stock */
/* sizes and colors are chosen from lists, never typed */
const COLORS=[["black","أسود","Noir","#1C1C1C"],["white","أبيض","Blanc","#FFFFFF"],["gray","رمادي","Gris","#9A9A9A"],["charcoal","فحمي","Anthracite","#3B3B3B"],["navy","كحلي","Bleu marine","#1F2A44"],["blue","أزرق","Bleu","#2F6FDE"],["sky","سماوي","Bleu ciel","#8EC5F0"],["green","أخضر","Vert","#2E8B57"],["olive","زيتوني","Olive","#6B6B3A"],["khaki","كاكي","Kaki","#A89F6B"],["beige","بيج","Beige","#D9C7A7"],["brown","بني","Marron","#6B4A32"],["camel","جملي","Camel","#B5834A"],["red","أحمر","Rouge","#C62828"],["burgundy","عنابي","Bordeaux","#6D1F2F"],["orange","برتقالي","Orange","#F08A24"],["yellow","أصفر","Jaune","#F2C94C"],["pink","وردي","Rose","#EFA3B8"],["purple","بنفسجي","Violet","#7B4FB3"]];
const cinfo=k=>COLORS.find(c=>c[0]===k);
const cl=k=>{const c=cinfo(k);return c?(lang==='ar'?c[1]:c[2]):k};
const range=(a,b)=>Array.from({length:b-a+1},(_,i)=>String(a+i));
const SIZE_SETS={shoes:range(37,44),pants:range(32,44),tops:['XS','S','M','L','XL','XXL','XXXL','XXXXL']};
let SIZETYPE='tops';
const sizeOpts=sel=>{const l=SIZE_SETS[SIZETYPE].slice();if(sel&&!l.includes(sel))l.push(sel);return `<option value="">${t('size')}</option>`+l.map(s=>`<option value="${esc(s)}" ${s===sel?'selected':''}>${esc(s)}</option>`).join('')};
const colorOpts=sel=>`<option value="">${t('color')}</option>`+COLORS.map(c=>`<option value="${c[0]}" ${c[0]===sel?'selected':''}>${lang==='ar'?c[1]:c[2]}</option>`).join('')+(sel&&!cinfo(sel)?`<option value="${esc(sel)}" selected>${esc(sel)}</option>`:'');
function colorDot(sel){const c=cinfo(sel.value);sel.previousElementSibling.style.background=c?c[3]:'transparent'}
const vcrow=v=>`<div class="vr" data-id="${v.id||''}"><span class="dot" style="background:${cinfo(v.color)?cinfo(v.color)[3]:'transparent'}"></span><select class="vc" onchange="colorDot(this)">${colorOpts(v.color)}</select><input class="vt" type="number" min="0" inputmode="numeric" placeholder="${t('stock')}" value="${v.stock??0}"><button class="btn sm red" type="button" onclick="this.parentNode.remove()">×</button></div>`;
const vgroup=(size,rows)=>`<div class="vg"><div class="row"><select class="vs" style="flex:1">${sizeOpts(size)}</select><button class="btn sm red" type="button" onclick="this.closest('.vg').remove()">× ${t('size')}</button></div><div class="vcs">${rows.map(vcrow).join('')}</div><button class="btn sm" type="button" onclick="addColor(this)">+ ${t('addColor')}</button></div>`;
function typeFor(){const sc=$('#p_sc')?$('#p_sc').value:'',ct=$('#p_ct')?$('#p_ct').value:'';const c=cats.find(x=>x.id===sc),p=cats.find(x=>x.id===ct);return (c&&c.size_type)||(p&&p.size_type)||null}
function typeHint(){const ty=typeFor();const h=$('#p_tyHint');if(h)h.textContent=ty?t('sizeType_'+ty):t('sizeNoType')}
function applyType(){SIZETYPE=typeFor()||'tops';typeHint();document.querySelectorAll('#vars .vs').forEach(s=>{const v=s.value;s.innerHTML=sizeOpts(v);s.value=v})}
function addColor(b){b.previousElementSibling.insertAdjacentHTML('beforeend',vcrow({stock:0}))}
function addSize(){$('#vars').insertAdjacentHTML('beforeend',vgroup('',[{stock:0}]))}
/* images (shared by products and looks) */
function addFiles(fl){[...fl].forEach(f=>EDIT.imgs.push({file:f,url:URL.createObjectURL(f),primary:false,state:'ready'}));if(!EDIT.imgs.some(i=>i.primary))EDIT.imgs[0].primary=true;renderImgs()}
function renderImgs(){const box=$('#imgs');if(!box)return;box.innerHTML=EDIT.imgs.map((m,i)=>`<div class="im ${m.state==='fail'?'fail':''}"><img class="thumb" src="${esc(m.url||pub(m.path))}" alt="">
 <div class="sp">${m.primary?'★ '+t('primary'):''}${m.state==='up'?' '+t('uploading'):m.state==='fail'?' '+t('failed'):m.state==='ready'?' '+t('ready'):''}</div>
 <button type="button" title="${t('primary')}" onclick="setPrimary(${i})">★</button><button type="button" title="${t('up')}" onclick="moveImg(${i},-1)">↑</button><button type="button" title="${t('down')}" onclick="moveImg(${i},1)">↓</button><button type="button" title="${t('del')}" onclick="rmImg(${i})">×</button></div>`).join('')}
function setPrimary(i){EDIT.imgs.forEach((m,j)=>m.primary=i===j);renderImgs()}
function moveImg(i,d){const j=i+d;if(j<0||j>=EDIT.imgs.length)return;[EDIT.imgs[i],EDIT.imgs[j]]=[EDIT.imgs[j],EDIT.imgs[i]];renderImgs()}
function rmImg(i){const [m]=EDIT.imgs.splice(i,1);if(m.id)EDIT.delImgs.push(m);if(m.primary&&EDIT.imgs[0])EDIT.imgs[0].primary=true;renderImgs()}
async function shrink(f,ratio){
  const bm=await createImageBitmap(f);let sx=0,sy=0,sw=bm.width,sh=bm.height;
  if(ratio){if(sw/sh>ratio){sw=Math.round(sh*ratio);sx=Math.round((bm.width-sw)/2)}else{sh=Math.round(sw/ratio);sy=Math.round((bm.height-sh)/2)}}
  const k=ratio?Math.min(1,1440/sw):Math.min(1,2000/Math.max(sw,sh));   // never upscale
  const c=document.createElement('canvas');c.width=Math.round(sw*k);c.height=Math.round(sh*k);
  const g=c.getContext('2d');g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
  g.drawImage(bm,sx,sy,sw,sh,0,0,c.width,c.height);
  return new Promise((r,x)=>c.toBlob(b=>b?r(b):x(new Error('image')),'image/webp',.92))}
const num=v=>v===''||v==null?null:Number(v);
/* uploads new files, saves order/primary, deletes removed ones. Returns the number of failed uploads. */
async function syncImages(table,fk,id,folder){
  for(const m of EDIT.delImgs){await sb.from(table).delete().eq('id',m.id);await cleanFile(m.path)}EDIT.delImgs=[];
  await sb.from(table).update({is_primary:false}).eq(fk,id);
  const pi=Math.max(0,EDIT.imgs.findIndex(m=>m.primary));let failed=0;
  for(let i=0;i<EDIT.imgs.length;i++){const m=EDIT.imgs[i];
    if(m.id){await sb.from(table).update({sort_order:i,is_primary:i===pi}).eq('id',m.id);continue}
    m.state='up';renderImgs();let path;
    try{const blob=await shrink(m.file,4/5);path=`${folder}/${id}/${crypto.randomUUID()}.webp`;
      const e=(await sb.storage.from('product-images').upload(path,blob,{contentType:'image/webp'})).error;if(e)throw e;
      const q=await sb.from(table).insert({[fk]:id,path,sort_order:i,is_primary:i===pi}).select('id').single();
      if(q.error){await sb.storage.from('product-images').remove([path]);throw q.error}
      m.id=q.data.id;m.path=path;m.file=null;m.url=null;m.state=null}
    catch(e){console.error(e);m.state='fail';failed++}
    renderImgs()}
  return failed}
async function saveProduct(){
  const v=id=>$('#'+id).value.trim();
  if(!(v('p_na')||v('p_nf'))||!v('p_sku')||v('p_pr')==='')return toast(t('req'),true);
  const rows=[],seen=new Set();let dupv=false;
  document.querySelectorAll('#vars .vg').forEach(g=>{const size=g.querySelector('.vs').value.trim();
    g.querySelectorAll('.vr').forEach(r=>{const color=r.querySelector('.vc').value.trim();if(!size||!color)return;
      const k=size.toLowerCase()+'|'+color.toLowerCase();if(seen.has(k))dupv=true;seen.add(k);
      rows.push({id:r.dataset.id,size,color,stock:Math.max(0,parseInt(r.querySelector('.vt').value)||0)})})});
  if(dupv)return toast(t('dup'),true);
  const btn=$('#p_save');btn.disabled=true;
  try{
    if(await autoTranslate())toast(t('trDone'));
    const row={sku:v('p_sku'),slug:v('p_sku').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||crypto.randomUUID(),category_id:$('#p_ct').value||null,subcategory_id:$('#p_sc').value||null,price:num(v('p_pr')),sale_price:num(v('p_sp')),status:$('#p_st').value,is_new:$('#p_new').checked,is_featured:$('#p_ft').checked,is_bestseller:$('#p_bs').checked};
    let pid=EDIT.id;
    if(pid){const {error}=await sb.from('products').update(row).eq('id',pid);if(error)throw error}
    else{const {data,error}=await sb.from('products').insert(row).select('id').single();if(error)throw error;pid=EDIT.id=data.id}
    const trs=[['ar','p_na','p_sa','p_da'],['fr','p_nf','p_sf','p_df']].map(([l,n,s,d])=>({product_id:pid,lang:l,name:v(n),short_description:v(s)||null,description:v(d)||null}));
    let r=await sb.from('product_translations').upsert(trs,{onConflict:'product_id,lang'});if(r.error)throw r.error;
    const keep=rows.filter(x=>x.id).map(x=>x.id),gone=EDIT.origVars.filter(i=>!keep.includes(i));
    if(gone.length){r=await sb.from('product_variants').delete().in('id',gone);if(r.error)throw r.error}
    for(const x of rows.filter(x=>x.id)){r=await sb.from('product_variants').update({size:x.size,color:x.color,stock:x.stock}).eq('id',x.id);if(r.error)throw r.error}
    const ins=rows.filter(x=>!x.id).map(x=>({product_id:pid,size:x.size,color:x.color,stock:x.stock}));
    if(ins.length){r=await sb.from('product_variants').insert(ins);if(r.error)throw r.error}
    EDIT.origVars=(await sb.from('product_variants').select('id').eq('product_id',pid)).data.map(x=>x.id);
    const failed=await syncImages('product_images','product_id',pid,'products');
    if(failed){toast(t('failed'),true);btn.disabled=false;return}
    toast(t('saved'));closeM();go(tab)
  }catch(e){fail(e);btn.disabled=false}}
async function cleanFile(path){
  for(const tb of ['product_images','outfit_images']){const {count}=await sb.from(tb).select('id',{count:'exact',head:true}).eq('path',path);if(count)return}
  for(const [tb,col] of [['categories','image_path'],['outfits','image_path'],['banners','image_path']]){const {count}=await sb.from(tb).select('id',{count:'exact',head:true}).eq(col,path);if(count)return}
  await sb.storage.from('product-images').remove([path])}
async function delProduct(id){if(!confirm(t('confirmDel')))return;
  const {data:im}=await sb.from('product_images').select('path').eq('product_id',id);
  const {error}=await sb.from('products').delete().eq('id',id);if(error)return fail(error);
  for(const i of im||[])await cleanFile(i.path);toast(t('deleted'));go(tab)}

/* ---------- orders ---------- */
let OQ='',OS='';
async function vOrders(){
  let q=sb.from('orders').select('*,order_items(*)').order('created_at',{ascending:false}).limit(100);
  if(OS)q=q.eq('status',OS);const qs=OQ.replace(/[%,()]/g,'');if(qs)q=q.or(`order_number.ilike.%${qs}%,customer_name.ilike.%${qs}%`);
  const {data,error}=await q;if(error)throw error;
  const map=await orderImgMap(data);
  $('#main').innerHTML=`<div class="row"><input style="flex:1;min-width:140px" placeholder="${t('search')}" value="${esc(OQ)}" oninput="OQ=this.value;clearTimeout(window._d);window._d=setTimeout(vOrders,300)">
  <select style="width:auto" onchange="OS=this.value;vOrders()"><option value="">${t('all')}</option>${STAT.map(s=>`<option value="${s}" ${s===OS?'selected':''}>${t(s)}</option>`).join('')}</select></div>
  <div class="grid" style="margin-top:12px">${data.map(o=>{const n=(o.order_items||[]).reduce((a,i)=>a+i.quantity,0);
   return `<div class="${ocClass(o)}" onclick="openOrder('${o.id}')">${othumbs(o,map)}<div class="row"><b class="sp">${esc(o.order_number)}</b><span class="pill ${o.status}">${t(o.status)}</span></div>
   <div class="muted">${esc(o.customer_name)} · ${date(o.created_at)}</div><div class="row"><b class="sp">${money(o.total)}</b><span class="muted">${n} ${t('pieces')}</span></div></div>`}).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openOrder(id){
  const {data:o,error}=await sb.from('orders').select('*,order_items(*),order_status_history(*)').eq('id',id).single();if(error)return fail(error);
  const map=await orderImgMap([o]);
  const h=[...o.order_status_history].sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
  modal(`<div class="row"><h3 class="sp">${esc(o.order_number)}</h3><span class="pill ${o.status}">${t(o.status)}</span><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <p class="muted">${date(o.created_at)}${o.note?` · ${esc(o.note)}`:''}</p>
  <div class="card" style="margin-bottom:10px"><b>${t('customer')}</b><br>${esc(o.customer_name)}<br><a href="tel:${esc(o.customer_phone)}" dir="ltr">${esc(o.customer_phone)}</a><br>
   ${esc(wname(Number(o.wilaya)))}${o.city?' - '+esc(o.city):''} — ${esc(o.address_line)}<br><span class="pill">${o.delivery_type==='office'?t('dOffice'):t('dHome')}</span></div>
  <b>${t('items')}</b>${o.order_items.map(i=>`<div class="lsr">${map[i.product_id]?`<img class="lsi" src="${esc(pub(map[i.product_id]))}" alt="">`:'<div class="lsi"></div>'}<div class="sp"><b>${esc(lang==='ar'?i.name_ar:i.name_fr)}</b><div class="muted">${esc(i.size)} / ${esc(cl(i.color))} × ${i.quantity}</div></div><b>${money(i.unit_price*i.quantity)}</b></div>`).join('')}
  <div class="tot2"><span>${t('oSub')}</span><span>${money(o.subtotal)}</span></div>
  ${Number(o.discount_total)>0?`<div class="tot2"><span>${t('oDisc')}${o.discount_code?' ('+esc(o.discount_code)+')':''}</span><span>− ${money(o.discount_total)}</span></div>`:''}
  <div class="tot2"><span>${t('delivery')}</span><span>${money(o.shipping_fee)}</span></div>
  <div class="tot2"><b>${t('total')}</b><b>${money(o.total)}</b></div>
  <label>${t('status')}</label><select id="o_st">${STAT.map(s=>`<option value="${s}" ${s===o.status?'selected':''}>${t(s)}</option>`).join('')}</select>
  <label>${t('tracking')}</label><input id="o_tr" dir="ltr" value="${esc(o.tracking_number)}">
  <p><button class="btn pri" onclick="saveOrder('${o.id}')">${t('update')}</button></p>
  <b>${t('history')}</b>${h.map(x=>`<p class="muted">${date(x.created_at)} — ${t(x.status)}</p>`).join('')}`)}
async function saveOrder(id){const {error}=await sb.rpc('admin_set_order_status',{p_order:id,p_status:$('#o_st').value,p_tracking:$('#o_tr').value.trim()||null});if(error)return fail(error);toast(t('saved'));closeM();vOrders()}

/* ---------- categories ---------- */
async function openCat(id,parentId){await loadCats();const c=cats.find(x=>x.id===id)||{sort_order:0,is_active:true,category_translations:[],parent_id:parentId||null};
  const {data:tr}=id?await sb.from('category_translations').select('*').eq('category_id',id):{data:[]};const g=l=>(tr||[]).find(x=>x.lang===l)||{};
  EDIT={id:id||null,path:c.image_path||null};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('addCat')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('nameAr')} *</label><input id="c_na" value="${esc(g('ar').name)}"></div><div><label>${t('nameFr')} *</label><input id="c_nf" value="${esc(g('fr').name)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="c_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="c_df">${esc(g('fr').description)}</textarea></div></div>
  <label>${t('parent')}</label><select id="c_pa"><option value="">—</option>${cats.filter(x=>!x.parent_id&&x.id!==id).map(x=>`<option value="${x.id}" ${x.id===c.parent_id?'selected':''}>${cname(x)}</option>`).join('')}</select>
  <label>${t('sizeType')}</label><select id="c_st"><option value="">${t('stNone')}</option>${['shoes','pants','tops'].map(s=>`<option value="${s}" ${s===c.size_type?'selected':''}>${t('st_'+s)}</option>`).join('')}</select>
  <div class="two"><div><label>${t('slug')} *</label><input id="c_sl" dir="ltr" value="${esc(c.slug)}"></div><div><label>${t('order')}</label><input id="c_so" type="number" value="${c.sort_order}"></div></div>
  <div class="chk"><label><input type="checkbox" id="c_ac" ${c.is_active?'checked':''}>${t('active')}</label></div>
  <p style="margin-top:20px"><button class="btn pri" id="c_save" onclick="saveCat()">${t('save')}</button></p>`)}
async function saveCat(){const v=i=>$('#'+i).value.trim();if(!v('c_na')||!v('c_nf')||!v('c_sl'))return toast(t('req'),true);
  if(!EDIT.id&&!$('#c_pa').value&&!$('#c_st').value)return toast(t('stReq'),true);
  const btn=$('#c_save');btn.disabled=true;let up=null;
  try{let path=EDIT.path;const f=null;
    if(f){const blob=await shrink(f);up=`categories/${crypto.randomUUID()}.webp`;const e=(await sb.storage.from('product-images').upload(up,blob,{contentType:'image/webp'})).error;if(e)throw e;path=up}
    const row={slug:v('c_sl').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),sort_order:parseInt(v('c_so'))||0,is_active:$('#c_ac').checked,image_path:path,parent_id:$('#c_pa').value||null,size_type:$('#c_st').value||null};
    let id=EDIT.id;
    if(id){const {error}=await sb.from('categories').update(row).eq('id',id);if(error)throw error}
    else{const {data,error}=await sb.from('categories').insert(row).select('id').single();if(error)throw error;id=data.id}
    const r=await sb.from('category_translations').upsert([{category_id:id,lang:'ar',name:v('c_na'),description:v('c_da')||null},{category_id:id,lang:'fr',name:v('c_nf'),description:v('c_df')||null}],{onConflict:'category_id,lang'});if(r.error)throw r.error;
    toast(t('saved'));closeM();go(tab)}
  catch(e){if(up)await sb.storage.from('product-images').remove([up]);fail(e);btn.disabled=false}}
async function delCat(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('categories').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));go(tab)}

/* ---------- looks (outfits shown as a product with several photos) ---------- */
const lt=(arr,l)=>((arr||[]).find(x=>x.lang===l)||{}).title||'';
const pn=p=>nm(p.product_translations,lang)||nm(p.product_translations,'ar')||p.sku;
async function vLooks(){
  const {data,error}=await sb.from('outfits').select('*,outfit_translations(lang,title),outfit_items(product_id)').order('sort_order');if(error)throw error;
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openLook()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(o=>`<div class="card"><div class="pc">${o.image_path?`<img src="${esc(pub(o.image_path))}" alt="" loading="lazy">`:'<div class="thumb"></div>'}<div class="sp"><h4>${esc(lt(o.outfit_translations,lang)||lt(o.outfit_translations,'ar')||o.slug)}</h4><div class="muted">${o.outfit_items.length} ${t('prods')}</div><span class="pill ${o.status}">${t(o.status)}</span></div></div>
  <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openLook('${o.id}')">${t('edit')}</button><button class="btn sm" onclick="openLanding(null,'outfit','${o.id}')">${t('landing')}</button><button class="btn sm red" onclick="delLook('${o.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openLook(id){
  const {data:ps,error:pe}=await sb.from('products').select('id,sku,product_translations(lang,name)').order('created_at',{ascending:false});if(pe)return fail(pe);
  EDIT={id:id||null,slug:null,items:[],ps:ps,imgs:[],delImgs:[]};let o={status:'draft',sort_order:0},tr=[];
  if(id){const {data,error}=await sb.from('outfits').select('*,outfit_translations(*),outfit_items(*),outfit_images(*)').eq('id',id).single();if(error)return fail(error);
    o=data;tr=data.outfit_translations;EDIT.slug=data.slug;EDIT.items=[...data.outfit_items].sort((a,b)=>a.sort_order-b.sort_order).map(i=>i.product_id);
    EDIT.imgs=[...data.outfit_images].sort((a,b)=>a.sort_order-b.sort_order).map(i=>({id:i.id,path:i.path,primary:i.is_primary}))}
  const g=l=>tr.find(x=>x.lang===l)||{};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('ttlAr')} *</label><input id="l_ta" value="${esc(g('ar').title)}"></div><div><label>${t('ttlFr')} *</label><input id="l_tf" value="${esc(g('fr').title)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="l_da">${esc(g('ar').description)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="l_df">${esc(g('fr').description)}</textarea></div></div>
  <div class="two"><div><label>${t('status')}</label><select id="l_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===o.status?'selected':''}>${t(s)}</option>`).join('')}</select></div><div><label>${t('order')}</label><input id="l_so" type="number" value="${o.sort_order}"></div></div>
  <label>${t('lookImgs')} *</label><p class="muted">${t('imgHint')}</p><div id="imgs"></div><input type="file" id="p_files" accept="image/*" multiple hidden onchange="addFiles(this.files)"><button class="btn sm" type="button" onclick="$('#p_files').click()">+ ${t('pick')}</button>
  <label>${t('lookProds')} *</label><div id="l_items"></div><select id="l_add" onchange="lookAdd(this.value)"></select>
  <p style="margin-top:20px"><button class="btn pri" id="l_save" onclick="saveLook()">${t('save')}</button></p>`);
  renderLookItems();renderImgs()}
function renderLookItems(){
  const by=Object.fromEntries(EDIT.ps.map(p=>[p.id,p]));
  $('#l_items').innerHTML=EDIT.items.map((pid,i)=>`<div class="im"><div class="sp">${esc(by[pid]?pn(by[pid]):pid)}</div><button type="button" onclick="lookMove(${i},-1)">↑</button><button type="button" onclick="lookMove(${i},1)">↓</button><button type="button" onclick="lookRm(${i})">×</button></div>`).join('');
  $('#l_add').innerHTML=`<option value="">+ ${t('addProd')}</option>`+EDIT.ps.filter(p=>!EDIT.items.includes(p.id)).map(p=>`<option value="${p.id}">${esc(pn(p))} (${esc(p.sku)})</option>`).join('')}
function lookAdd(v){if(v){EDIT.items.push(v);renderLookItems()}}
function lookRm(i){EDIT.items.splice(i,1);renderLookItems()}
function lookMove(i,d){const j=i+d;if(j<0||j>=EDIT.items.length)return;[EDIT.items[i],EDIT.items[j]]=[EDIT.items[j],EDIT.items[i]];renderLookItems()}
async function saveLook(){
  const v=i=>$('#'+i).value.trim();
  if(!v('l_ta')||!v('l_tf'))return toast(t('req'),true);
  if(!EDIT.imgs.length)return toast(t('lookNeedImg'),true);
  if(!EDIT.items.length)return toast(t('lookNeedProds'),true);
  const btn=$('#l_save');btn.disabled=true;
  try{
    const row={slug:EDIT.slug||('look-'+crypto.randomUUID().slice(0,8)),status:$('#l_st').value,sort_order:parseInt(v('l_so'))||0};
    let id=EDIT.id;
    if(id){const {error}=await sb.from('outfits').update(row).eq('id',id);if(error)throw error}
    else{const {data,error}=await sb.from('outfits').insert(row).select('id').single();if(error)throw error;id=EDIT.id=data.id;EDIT.slug=row.slug}
    let r=await sb.from('outfit_translations').upsert([{outfit_id:id,lang:'ar',title:v('l_ta'),description:v('l_da')||null},{outfit_id:id,lang:'fr',title:v('l_tf'),description:v('l_df')||null}],{onConflict:'outfit_id,lang'});if(r.error)throw r.error;
    r=await sb.from('outfit_items').delete().eq('outfit_id',id);if(r.error)throw r.error;
    r=await sb.from('outfit_items').insert(EDIT.items.map((pid,i)=>({outfit_id:id,product_id:pid,sort_order:i})));if(r.error)throw r.error;
    const failed=await syncImages('outfit_images','outfit_id',id,'outfits');
    const main=(EDIT.imgs.find(m=>m.primary&&m.path)||EDIT.imgs.find(m=>m.path)||{}).path||null;
    await sb.from('outfits').update({image_path:main}).eq('id',id);
    if(failed){toast(t('failed'),true);btn.disabled=false;return}
    toast(t('saved'));closeM();vLooks()
  }catch(e){fail(e);btn.disabled=false}}
async function delLook(id){if(!confirm(t('confirmDel')))return;
  const {data:im}=await sb.from('outfit_images').select('path').eq('outfit_id',id);
  const {data:o}=await sb.from('outfits').select('image_path').eq('id',id).single();
  const {error}=await sb.from('outfits').delete().eq('id',id);if(error)return fail(error);
  for(const i of im||[])await cleanFile(i.path);if(o&&o.image_path)await cleanFile(o.image_path);
  toast(t('deleted'));vLooks()}

/* ---------- landing pages ---------- */
const lpUrl=slug=>new URL('landing.html?s='+encodeURIComponent(slug),location.href).href;
const slugify=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
async function vLandings(){
  const {data,error}=await sb.from('landing_pages').select('*,products(sku,product_translations(lang,name)),outfits(slug,outfit_translations(lang,title))').order('created_at',{ascending:false});if(error)throw error;
  const title=l=>{const c=(l.content||{})[lang]||(l.content||{}).ar||{};return c.headline||(l.products?nm(l.products.product_translations,lang)||nm(l.products.product_translations,'ar')||l.products.sku:l.outfits?lt(l.outfits.outfit_translations,lang)||lt(l.outfits.outfit_translations,'ar')||l.outfits.slug:l.slug)};
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openLanding()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(l=>`<div class="card"><h4 style="margin:0">${esc(title(l))}</h4>
   <div class="muted">${l.target_type==='product'?t('lpProduct'):t('lpLook')} · <span dir="ltr">${esc(l.slug)}</span></div><span class="pill ${l.status}">${t(l.status)}</span>
   <div class="row" style="margin-top:10px"><a class="btn sm" href="${esc(lpUrl(l.slug))}" target="_blank" rel="noopener">${t('lpOpen')}</a><button class="btn sm" onclick="copyLp('${esc(l.slug)}')">${t('lpCopy')}</button><button class="btn sm" onclick="openLanding('${l.id}')">${t('edit')}</button><button class="btn sm red" onclick="delLanding('${l.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
function copyLp(slug){const u=lpUrl(slug);(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>toast(t('lpCopied'))).catch(()=>prompt(t('lpLink'),u))}
async function openLanding(id,type,targetId){
  const [pr,ol]=await Promise.all([sb.from('products').select('id,sku,product_translations(lang,name)').order('created_at',{ascending:false}),sb.from('outfits').select('id,slug,outfit_translations(lang,title)').order('sort_order')]);
  if(pr.error)return fail(pr.error);const looks=ol.error?[]:ol.data;
  let lp={status:'draft',target_type:type||'product',content:{form:true}};
  if(id){const {data,error}=await sb.from('landing_pages').select('*').eq('id',id).single();if(error)return fail(error);lp=data}
  else if(targetId){const col=type==='outfit'?'outfit_id':'product_id';const {data}=await sb.from('landing_pages').select('*').eq(col,targetId).maybeSingle();
    if(data){lp=data;id=data.id}else{lp[col]=targetId}}
  EDIT={id:id||null,prods:pr.data,looks,lp};
  const c=lp.content||{},g=l=>c[l]||{};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')} · ${t('landing')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('lpType')}</label><select id="lp_ty" onchange="fillLpTarget()"><option value="product" ${lp.target_type==='product'?'selected':''}>${t('lpProduct')}</option><option value="outfit" ${lp.target_type==='outfit'?'selected':''}>${t('lpLook')}</option></select></div>
  <div><label>${t('lpTarget')} *</label><select id="lp_tg" onchange="lpAutoSlug()"></select></div></div>
  <div class="two"><div><label>${t('lpSlug')} *</label><input id="lp_sl" dir="ltr" value="${esc(lp.slug)}"></div><div><label>${t('status')}</label><select id="lp_st">${['draft','published','archived'].map(s=>`<option value="${s}" ${s===lp.status?'selected':''}>${t(s)}</option>`).join('')}</select></div></div>
  <div class="two"><div><label>${t('lpHead')} (ar)</label><input id="lp_ha" value="${esc(g('ar').headline)}"></div><div><label>${t('lpHead')} (fr)</label><input id="lp_hf" value="${esc(g('fr').headline)}"></div></div>
  <div class="two"><div><label>${t('lpSub')} (ar)</label><textarea id="lp_sa">${esc(g('ar').sub)}</textarea></div><div><label>${t('lpSub')} (fr)</label><textarea id="lp_sf">${esc(g('fr').sub)}</textarea></div></div>
  <div class="two"><div><label>${t('lpBen')} (ar)</label><textarea id="lp_ba">${esc((g('ar').benefits||[]).join('\n'))}</textarea></div><div><label>${t('lpBen')} (fr)</label><textarea id="lp_bf">${esc((g('fr').benefits||[]).join('\n'))}</textarea></div></div>
  <div class="two"><div><label>${t('lpCta')} (ar)</label><input id="lp_ca" value="${esc(g('ar').cta)}"></div><div><label>${t('lpCta')} (fr)</label><input id="lp_cf" value="${esc(g('fr').cta)}"></div></div>
  <div class="chk"><label><input type="checkbox" id="lp_fm" ${c.form!==false?'checked':''}>${t('lpForm')}</label></div>
  ${lp.slug?`<p class="muted" dir="ltr">${esc(lpUrl(lp.slug))}</p>`:''}
  <p style="margin-top:20px"><button class="btn pri" id="lp_save" onclick="saveLanding()">${t('save')}</button></p>`);
  fillLpTarget(lp.target_type==='outfit'?lp.outfit_id:lp.product_id)}
function fillLpTarget(sel){
  const ty=$('#lp_ty').value;
  $('#lp_tg').innerHTML=`<option value="">—</option>`+(ty==='product'?EDIT.prods.map(p=>`<option value="${p.id}" ${p.id===sel?'selected':''}>${esc(pn(p))} (${esc(p.sku)})</option>`):EDIT.looks.map(o=>`<option value="${o.id}" ${o.id===sel?'selected':''}>${esc(lt(o.outfit_translations,lang)||lt(o.outfit_translations,'ar')||o.slug)}</option>`)).join('');
  if(!sel)$('#lp_tg').value=''}
function lpAutoSlug(){const f=$('#lp_sl');if(f.value.trim())return;const ty=$('#lp_ty').value,id=$('#lp_tg').value;
  const x=ty==='product'?EDIT.prods.find(p=>p.id===id):EDIT.looks.find(o=>o.id===id);if(x)f.value=slugify(ty==='product'?x.sku:x.slug)}
async function saveLanding(){
  const v=i=>$('#'+i).value.trim();
  const type=v('lp_ty'),target=v('lp_tg'),slug=v('lp_sl').toLowerCase();
  if(!target)return toast(t('req'),true);
  if(!/^[a-z0-9-]{3,60}$/.test(slug))return toast(t('lpSlugBad'),true);
  const ben=id=>v(id).split('\n').map(x=>x.trim()).filter(Boolean);
  const content={ar:{headline:v('lp_ha'),sub:v('lp_sa'),cta:v('lp_ca'),benefits:ben('lp_ba')},fr:{headline:v('lp_hf'),sub:v('lp_sf'),cta:v('lp_cf'),benefits:ben('lp_bf')},form:$('#lp_fm').checked};
  const row={slug,target_type:type,product_id:type==='product'?target:null,outfit_id:type==='outfit'?target:null,status:$('#lp_st').value,content};
  const btn=$('#lp_save');btn.disabled=true;
  try{
    const r=EDIT.id?await sb.from('landing_pages').update(row).eq('id',EDIT.id):await sb.from('landing_pages').insert(row);
    if(r.error)throw r.error;
    toast(t('saved'));closeM();go(tab)
  }catch(e){fail(e);btn.disabled=false}}
async function delLanding(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('landing_pages').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));vLandings()}

/* ---------- site content (owner only, unlocked by tapping the title 5 times) ---------- */
let _ot=[];
function tabsList(){let o=false;try{o=sessionStorage.getItem('owner')==='1'}catch(e){}return ['dash','catalog','orders','looks','landings','discounts','banners','delivery'].concat(o?['site']:[])}
function ownerTap(){const n=Date.now();_ot=_ot.filter(x=>n-x<4000);_ot.push(n);if(_ot.length>=5){_ot=[];try{sessionStorage.setItem('owner','1')}catch(e){}shell();go('site')}}
const SITE_FIELDS=[['hTitle','sHTitle'],['h1','sH1'],['sub','sSub'],['shop','sShop'],['explore','sExplore'],['banT','sBanT'],['banP','sBanP'],['banB','sBanB'],['abT','sAbT'],['abP','sAbP'],['fAbout','sFAbout'],['copy','sCopy']];
const SITE_IMG=[['logo','sLogo'],['hero','sHero'],['about_img','sAboutImg']];
async function vSite(){
  const {data,error}=await sb.from('store_settings').select('value').eq('key','site').maybeSingle();if(error)throw error;
  const S=data?data.value:{};
  EDIT={site:{logo:S.logo||null,hero:S.hero||null,about_img:S.about_img||null},orig:{logo:S.logo||null,hero:S.hero||null,about_img:S.about_img||null},files:{}};
  const tx=(l,k)=>((S.t||{})[l]||{})[k]||'',c=S.contact||{},d=S.dev||{};
  const long=k=>['sub','banP','abP'].includes(k);
  $('#main').innerHTML=`<p class="muted">${t('sNote')}</p>
  <div class="card"><b>${t('sBrand')}</b><label>${t('sName')}</label><input id="s_name" value="${esc(S.name)}" placeholder="Maison Noor">
   ${SITE_IMG.map(([k,lb])=>`<label>${t(lb)}</label><div class="row"><img class="thumb" id="si_${k}" style="width:90px;height:90px;object-fit:contain;${S[k]?'':'display:none'}" src="${S[k]?esc(pub(S[k])):''}" alt=""><input type="file" accept="image/*" style="flex:1" onchange="sitePrev(this,'${k}')"><button class="btn sm red" type="button" onclick="siteClear('${k}')">×</button></div>`).join('')}</div>
  <div class="card" style="margin-top:12px"><b>${t('sTexts')}</b><p class="muted">${t('sBlank')}</p>
   ${SITE_FIELDS.map(([k,lb])=>`<div class="two"><div><label>${t(lb)} (ar)</label>${long(k)?`<textarea id="s_${k}_ar">${esc(tx('ar',k))}</textarea>`:`<input id="s_${k}_ar" value="${esc(tx('ar',k))}">`}</div><div><label>${t(lb)} (fr)</label>${long(k)?`<textarea id="s_${k}_fr">${esc(tx('fr',k))}</textarea>`:`<input id="s_${k}_fr" value="${esc(tx('fr',k))}">`}</div></div>`).join('')}</div>
  <div class="card" style="margin-top:12px"><b>${t('sContact')}</b>
   <div class="two"><div><label>${t('sPhone')}</label><input id="s_ph" dir="ltr" placeholder="0555 00 00 00" value="${esc(c.phone)}"></div><div><label>${t('sWa')}</label><input id="s_wa" dir="ltr" placeholder="0555 00 00 00" value="${esc(c.whatsapp)}"></div></div>
   <div class="two"><div><label>Facebook (URL)</label><input id="s_fb" dir="ltr" placeholder="https://" value="${esc(c.facebook)}"></div><div><label>Instagram (URL)</label><input id="s_ig" dir="ltr" placeholder="https://" value="${esc(c.instagram)}"></div></div>
   <div class="two"><div><label>TikTok (URL)</label><input id="s_tt" dir="ltr" placeholder="https://" value="${esc(c.tiktok)}"></div><div><label>YouTube (URL)</label><input id="s_yt" dir="ltr" placeholder="https://" value="${esc(c.youtube)}"></div></div></div>
  <div class="card" style="margin-top:12px"><b>${t('sDev')}</b><div class="two"><div><label>${t('sDevName')}</label><input id="s_dn" value="${esc(d.name)}"></div><div><label>${t('sDevUrl')}</label><input id="s_du" dir="ltr" placeholder="https://" value="${esc(d.url)}"></div></div></div>
  <p style="margin-top:16px"><button class="btn pri" id="s_save" onclick="saveSite()">${t('save')}</button></p>`}
function sitePrev(inp,k){const f=inp.files[0];if(!f)return;EDIT.files[k]=f;const i=$('#si_'+k);i.src=URL.createObjectURL(f);i.style.display=''}
function siteClear(k){EDIT.site[k]=null;delete EDIT.files[k];const i=$('#si_'+k);i.removeAttribute('src');i.style.display='none'}
async function saveSite(){
  const v=i=>$('#'+i).value.trim(),okUrl=u=>!u||/^https?:\/\//i.test(u);
  const value={name:v('s_name'),logo:EDIT.site.logo,hero:EDIT.site.hero,about_img:EDIT.site.about_img,t:{ar:{},fr:{}},
    contact:{phone:v('s_ph'),whatsapp:v('s_wa'),facebook:v('s_fb'),instagram:v('s_ig'),tiktok:v('s_tt'),youtube:v('s_yt')},dev:{name:v('s_dn'),url:v('s_du')}};
  if(![value.contact.facebook,value.contact.instagram,value.contact.tiktok,value.contact.youtube,value.dev.url].every(okUrl))return toast(t('sUrlBad'),true);
  SITE_FIELDS.forEach(([k])=>['ar','fr'].forEach(l=>{const x=v(`s_${k}_${l}`);if(x)value.t[l][k]=x}));
  const btn=$('#s_save');btn.disabled=true;const up=[];
  try{
    for(const [k] of SITE_IMG){const f=EDIT.files[k];if(!f)continue;const blob=await shrink(f);const path=`site/${crypto.randomUUID()}.webp`;
      const e=(await sb.storage.from('product-images').upload(path,blob,{contentType:'image/webp'})).error;if(e)throw e;up.push(path);value[k]=path}
    const r=await sb.from('store_settings').upsert({key:'site',value},{onConflict:'key'});if(r.error)throw r.error;
    const gone=SITE_IMG.map(([k])=>EDIT.orig[k]).filter((p,i)=>p&&p!==value[SITE_IMG[i][0]]);
    if(gone.length)await sb.storage.from('product-images').remove(gone);
    toast(t('saved'));vSite()
  }catch(e){if(up.length)await sb.storage.from('product-images').remove(up);fail(e);btn.disabled=false}}

/* ---------- discount codes ---------- */
const toLocalInput=iso=>{if(!iso)return'';const d=new Date(iso),p=n=>String(n).padStart(2,'0');return`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`};
async function vDiscounts(){
  const {data,error}=await sb.from('discount_codes').select('*').order('code');if(error)throw error;
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openDiscount()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(d=>`<div class="card"><div class="row"><b class="sp" dir="ltr">${esc(d.code)}</b><span class="pill ${d.is_active?'published':'archived'}">${d.is_active?t('dcActive'):'—'}</span></div>
   <div>${d.kind==='percent'?Number(d.value)+'%':money(d.value)}</div><div class="muted">${t('dcUsed')}: ${d.used_count}${d.max_uses!=null?' / '+d.max_uses:''}</div>
   ${Number(d.min_order)>0?`<div class="muted">${t('dcMin')}: ${money(d.min_order)}</div>`:''}${d.starts_at||d.ends_at?`<div class="muted">${d.starts_at?date(d.starts_at):'…'} — ${d.ends_at?date(d.ends_at):'…'}</div>`:''}
   <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openDiscount('${d.id}')">${t('edit')}</button><button class="btn sm red" onclick="delDiscount('${d.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openDiscount(id){
  let d={kind:'percent',min_order:0,is_active:true};
  if(id){const {data,error}=await sb.from('discount_codes').select('*').eq('id',id).single();if(error)return fail(error);d=data}
  EDIT={id:id||null};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <div class="two"><div><label>${t('dcCode')} *</label><input id="d_code" dir="ltr" value="${esc(d.code)}" placeholder="WELCOME10"></div><div><label>${t('dcKind')}</label><select id="d_kind"><option value="percent" ${d.kind==='percent'?'selected':''}>${t('dcPercent')}</option><option value="fixed" ${d.kind==='fixed'?'selected':''}>${t('dcFixed')}</option></select></div></div>
  <div class="two"><div><label>${t('dcValue')} *</label><input id="d_val" type="number" min="0" step="1" inputmode="decimal" value="${d.value??''}"></div><div><label>${t('dcMin')}</label><input id="d_min" type="number" min="0" step="1" inputmode="decimal" value="${d.min_order??0}"></div></div>
  <label>${t('dcMax')}</label><input id="d_max" type="number" min="1" step="1" inputmode="numeric" value="${d.max_uses??''}">
  <div class="two"><div><label>${t('dcFrom')}</label><input id="d_from" type="datetime-local" value="${toLocalInput(d.starts_at)}"></div><div><label>${t('dcTo')}</label><input id="d_to" type="datetime-local" value="${toLocalInput(d.ends_at)}"></div></div>
  <div class="chk"><label><input type="checkbox" id="d_on" ${d.is_active?'checked':''}>${t('dcActive')}</label></div>
  <p style="margin-top:20px"><button class="btn pri" id="d_save" onclick="saveDiscount()">${t('save')}</button></p>`)}
async function saveDiscount(){
  const v=i=>$('#'+i).value.trim(),code=v('d_code').toUpperCase(),kind=v('d_kind'),val=num(v('d_val'));
  if(!/^[A-Z0-9_-]{3,30}$/.test(code)||val==null||val<=0||(kind==='percent'&&val>100))return toast(t('dcBad'),true);
  const row={code,kind,value:val,min_order:num(v('d_min'))||0,max_uses:num(v('d_max')),starts_at:v('d_from')?new Date(v('d_from')).toISOString():null,ends_at:v('d_to')?new Date(v('d_to')).toISOString():null,is_active:$('#d_on').checked};
  const btn=$('#d_save');btn.disabled=true;
  try{const r=EDIT.id?await sb.from('discount_codes').update(row).eq('id',EDIT.id):await sb.from('discount_codes').insert(row);if(r.error)throw r.error;toast(t('saved'));closeM();vDiscounts()}
  catch(e){fail(e);btn.disabled=false}}
async function delDiscount(id){if(!confirm(t('confirmDel')))return;const {error}=await sb.from('discount_codes').delete().eq('id',id);if(error)return fail(error);toast(t('deleted'));vDiscounts()}

/* ---------- banners ---------- */
async function vBanners(){
  const {data,error}=await sb.from('banners').select('*').order('sort_order');if(error)throw error;
  $('#main').innerHTML=`<div class="row"><span class="sp"></span><button class="btn pri" onclick="openBanner()">+ ${t('add')}</button></div><div class="grid" style="margin-top:12px">${data.map(b=>`<div class="card">${b.image_path?`<img src="${esc(pub(b.image_path))}" alt="" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:12px;background:var(--beige)">`:''}
   <h4 style="margin:8px 0 0">${esc((lang==='ar'?b.title_ar:b.title_fr)||b.title_ar||b.title_fr||'—')}</h4><div class="muted">#${b.sort_order}</div><span class="pill ${b.is_active?'published':'archived'}">${b.is_active?t('dcActive'):'—'}</span>
   <div class="row" style="margin-top:10px"><button class="btn sm" onclick="openBanner('${b.id}')">${t('edit')}</button><button class="btn sm red" onclick="delBanner('${b.id}')">${t('del')}</button></div></div>`).join('')||`<p class="muted">${t('noList')}</p>`}</div>`}
async function openBanner(id){
  let b={sort_order:0,is_active:true};
  if(id){const {data,error}=await sb.from('banners').select('*').eq('id',id).single();if(error)return fail(error);b=data}
  EDIT={id:id||null,path:b.image_path||null};
  modal(`<div class="row"><h3 class="sp">${id?t('edit'):t('add')}</h3><button class="btn sm" onclick="closeM()">${t('close')}</button></div>
  <label>${t('bnImg')} *</label><img id="b_prev" style="width:100%;max-height:180px;object-fit:cover;border-radius:12px;margin-bottom:6px;${b.image_path?'':'display:none'}" src="${b.image_path?esc(pub(b.image_path)):''}" alt=""><input type="file" id="b_f" accept="image/*" onchange="bannerPrev(this)">
  <div class="two"><div><label>${t('ttlAr')}</label><input id="b_ta" value="${esc(b.title_ar)}"></div><div><label>${t('ttlFr')}</label><input id="b_tf" value="${esc(b.title_fr)}"></div></div>
  <div class="two"><div><label>${t('dsAr')}</label><textarea id="b_xa">${esc(b.text_ar)}</textarea></div><div><label>${t('dsFr')}</label><textarea id="b_xf">${esc(b.text_fr)}</textarea></div></div>
  <label>${t('bnLink')}</label><input id="b_link" dir="ltr" placeholder="https://… ${'#best'}" value="${esc(b.link)}">
  <div class="two"><div><label>${t('order')}</label><input id="b_so" type="number" value="${b.sort_order}"></div><div class="chk" style="align-items:end"><label><input type="checkbox" id="b_on" ${b.is_active?'checked':''}>${t('dcActive')}</label></div></div>
  <p style="margin-top:20px"><button class="btn pri" id="b_save" onclick="saveBanner()">${t('save')}</button></p>`)}
function bannerPrev(i){const f=i.files[0];if(!f)return;const p=$('#b_prev');p.src=URL.createObjectURL(f);p.style.display=''}
async function saveBanner(){
  const v=i=>$('#'+i).value.trim(),f=$('#b_f').files[0],link=v('b_link');
  if(!EDIT.path&&!f)return toast(t('bnNeedImg'),true);
  if(link&&!/^(https?:\/\/|#|\/)/i.test(link))return toast(t('sUrlBad'),true);
  const btn=$('#b_save');btn.disabled=true;let up=null;
  try{
    let path=EDIT.path;
    if(f){const blob=await shrink(f);up=`banners/${crypto.randomUUID()}.webp`;const e=(await sb.storage.from('product-images').upload(up,blob,{contentType:'image/webp'})).error;if(e)throw e;path=up}
    const row={image_path:path,title_ar:v('b_ta')||null,title_fr:v('b_tf')||null,text_ar:v('b_xa')||null,text_fr:v('b_xf')||null,link:link||null,sort_order:parseInt(v('b_so'))||0,is_active:$('#b_on').checked};
    const r=EDIT.id?await sb.from('banners').update(row).eq('id',EDIT.id):await sb.from('banners').insert(row);if(r.error)throw r.error;
    if(up&&EDIT.path)await cleanFile(EDIT.path);
    toast(t('saved'));closeM();vBanners()
  }catch(e){if(up)await sb.storage.from('product-images').remove([up]);fail(e);btn.disabled=false}}
async function delBanner(id){if(!confirm(t('confirmDel')))return;
  const {data}=await sb.from('banners').select('image_path').eq('id',id).single();
  const {error}=await sb.from('banners').delete().eq('id',id);if(error)return fail(error);
  if(data&&data.image_path)await cleanFile(data.image_path);toast(t('deleted'));vBanners()}

/* ---------- delivery: wilayas, home / office prices ---------- */
const wname=n=>(lang==='ar'?WA:WF)[n-1]||n;
async function vDelivery(){
  const {data,error}=await sb.from('store_settings').select('value').eq('key','shipping').maybeSingle();if(error)throw error;
  const c=data?data.value:{default:{home:600,office:400},wilayas:{}},d=c.default||{};
  EDIT={def:{home:d.home??'',office:d.office??''},ws:JSON.parse(JSON.stringify(c.wilayas||{}))};
  drawDelivery()}
function collectDelivery(){
  if(!$('#dl_h'))return;
  EDIT.def={home:$('#dl_h').value.trim(),office:$('#dl_o').value.trim()};
  document.querySelectorAll('.dr').forEach(r=>{EDIT.ws[r.dataset.w]={home:r.querySelector('.dh').value.trim(),office:r.querySelector('.do').value.trim()}})}
function drawDelivery(){
  const keys=Object.keys(EDIT.ws).map(Number).sort((a,b)=>a-b);
  const free=[];for(let i=1;i<=58;i++)if(!EDIT.ws[i])free.push(i);
  $('#main').innerHTML=`<div class="card"><b>${t('dlDefault')}</b><div class="two"><div><label>${t('dHome')}</label><input id="dl_h" type="number" min="0" inputmode="numeric" value="${EDIT.def.home}"></div><div><label>${t('dOffice')}</label><input id="dl_o" type="number" min="0" inputmode="numeric" value="${EDIT.def.office}"></div></div></div>
  <div class="card" style="margin-top:12px"><b>${t('dlWilayas')}</b><p class="muted">${t('dlNote')}</p>
   ${keys.length?`<div class="dr muted"><span></span><span>${t('dHome')}</span><span>${t('dOffice')}</span><span></span></div>`:''}
   ${keys.map(n=>`<div class="dr" data-w="${n}"><b>${n} - ${esc(wname(n))}</b><input class="dh" type="number" min="0" inputmode="numeric" value="${EDIT.ws[n].home??''}"><input class="do" type="number" min="0" inputmode="numeric" value="${EDIT.ws[n].office??''}"><button class="btn sm red" type="button" onclick="dlRemove(${n})">×</button></div>`).join('')}
   <div class="row" style="margin-top:10px"><select id="dl_add" style="flex:1" onchange="dlAdd(this.value)"><option value="">+ ${t('dlAdd')}</option>${free.map(n=>`<option value="${n}">${n} - ${esc(wname(n))}</option>`).join('')}</select><button class="btn sm" type="button" onclick="dlAll()">${t('dlAll')}</button></div></div>
  <p style="margin-top:16px"><button class="btn pri" id="dl_save" onclick="saveDelivery()">${t('save')}</button></p>`}
function dlAdd(n){if(!n)return;collectDelivery();EDIT.ws[n]={home:EDIT.def.home,office:EDIT.def.office};drawDelivery()}
function dlAll(){collectDelivery();for(let i=1;i<=58;i++)if(!EDIT.ws[i])EDIT.ws[i]={home:EDIT.def.home,office:EDIT.def.office};drawDelivery()}
function dlRemove(n){collectDelivery();delete EDIT.ws[n];drawDelivery()}
async function saveDelivery(){
  collectDelivery();
  const ws={};Object.keys(EDIT.ws).forEach(k=>{const h=num(EDIT.ws[k].home),o=num(EDIT.ws[k].office);if(h!=null||o!=null)ws[k]={home:h,office:o}});
  const value={default:{home:num(EDIT.def.home),office:num(EDIT.def.office)},wilayas:ws};
  const btn=$('#dl_save');btn.disabled=true;
  const r=await sb.from('store_settings').upsert({key:'shipping',value},{onConflict:'key'});
  btn.disabled=false;if(r.error)return fail(r.error);toast(t('saved'));drawDelivery()}


boot();
