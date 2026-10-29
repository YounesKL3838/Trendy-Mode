/* Maison Noor landing page: landing.html?s=<slug> */
var T={
ar:{cur:"د.ج",lang:"Français",color:"اللون",size:"المقاس",qty:"الكمية",inStock:"متوفر:",pick:"اختر اللون والمقاس",order:"اطلب الآن",orderT:"أكمل طلبك",
fName:"الاسم الكامل",fPhone:"الهاتف",fWil:"الولاية",fAddr:"العنوان",fCode:"كود الخصم (اختياري)",place:"تأكيد الطلب",
sub3:"المجموع الفرعي",ship:"التوصيل (تقديري)",total:"الإجمالي التقديري",finalNote:"السعر النهائي يُحسب عند تأكيد الطلب. الدفع عند الاستلام.",
thanks:"شكرًا لك!",orderNo:"رقم طلبك:",orderTot:"الإجمالي:",willCall:"سنتصل بك لتأكيد الطلب.",
eStock:"إحدى القطع لم تعد متوفرة بالكمية المطلوبة.",eCode:"كود الخصم غير صالح.",eCust:"تحقق من الاسم والهاتف والولاية والعنوان.",dHome:"توصيل إلى المنزل",dOffice:"توصيل إلى المكتب",dNA:"غير متاح",eDeliv:"التوصيل غير متاح لهذه الولاية أو بهذا النوع.",fOffice:"المكتب أو البلدية",eChoose:"اختر اللون والمقاس لكل قطعة.",eGen:"تعذّر إرسال الطلب، حاول مرة أخرى.",
nf:"هذه الصفحة غير متاحة.",noConf:"لم يتم ربط Supabase بعد: عدّل الملف js/config.js.",home:"العودة إلى المتجر",inLook:"القطع في هذه الإطلالة",lookTotal:"المجموع"},
fr:{cur:"DA",lang:"العربية",color:"Couleur",size:"Taille",qty:"Quantité",inStock:"En stock :",pick:"Choisissez la couleur et la taille",order:"Commander",orderT:"Finalisez votre commande",
fName:"Nom complet",fPhone:"Téléphone",fWil:"Wilaya",fAddr:"Adresse",fCode:"Code promo (facultatif)",place:"Valider la commande",
sub3:"Sous-total",ship:"Livraison (estimée)",total:"Total estimé",finalNote:"Le prix final est calculé à la validation. Paiement à la livraison.",
thanks:"Merci !",orderNo:"Votre numéro de commande :",orderTot:"Total :",willCall:"Nous vous appellerons pour confirmer la commande.",
eStock:"Un article n’est plus disponible en quantité suffisante.",eCode:"Code promo invalide.",eCust:"Vérifiez le nom, le téléphone, la wilaya et l’adresse.",dHome:"Livraison à domicile",dOffice:"Livraison au bureau",dNA:"Indisponible",eDeliv:"Livraison indisponible pour cette wilaya ou ce mode.",fOffice:"Bureau ou commune",eChoose:"Choisissez la couleur et la taille de chaque pièce.",eGen:"Impossible d’envoyer la commande, réessayez.",
nf:"Cette page n’est pas disponible.",noConf:"Supabase n’est pas encore connecté : modifiez le fichier js/config.js.",home:"Retour à la boutique",inLook:"Les pièces de ce look",lookTotal:"Total"}
};
var WA="الشلف|الأغواط|أم البواقي|باتنة|بجاية|بسكرة|بشار|البليدة|البويرة|تمنراست|تبسة|تلمسان|تيارت|تيزي وزو|الجزائر|الجلفة|جيجل|سطيف|سعيدة|سكيكدة|سيدي بلعباس|عنابة|قالمة|قسنطينة|المدية|مستغانم|المسيلة|معسكر|ورقلة|وهران|البيض|إليزي|برج بوعريريج|بومرداس|الطارف|تندوف|تيسمسيلت|الوادي|خنشلة|سوق أهراس|تيبازة|ميلة|عين الدفلى|النعامة|عين تموشنت|غرداية|غليزان|تيميمون|برج باجي مختار|أولاد جلال|بني عباس|عين صالح|عين قزام|تقرت|جانت|المغير|المنيعة".split("|");WA.unshift("أدرار");
var WF="Adrar|Chlef|Laghouat|Oum El Bouaghi|Batna|Béjaïa|Biskra|Béchar|Blida|Bouira|Tamanrasset|Tébessa|Tlemcen|Tiaret|Tizi Ouzou|Alger|Djelfa|Jijel|Sétif|Saïda|Skikda|Sidi Bel Abbès|Annaba|Guelma|Constantine|Médéa|Mostaganem|M’Sila|Mascara|Ouargla|Oran|El Bayadh|Illizi|Bordj Bou Arréridj|Boumerdès|El Tarf|Tindouf|Tissemsilt|El Oued|Khenchela|Souk Ahras|Tipaza|Mila|Aïn Defla|Naâma|Aïn Témouchent|Ghardaïa|Relizane|Timimoun|Bordj Badji Mokhtar|Ouled Djellal|Béni Abbès|In Salah|In Guezzam|Touggourt|Djanet|El M’Ghair|El Menia".split("|");
var $=function(s){return document.querySelector(s)};
var COLORS=[["black","أسود","Noir","#1C1C1C"],["white","أبيض","Blanc","#FFFFFF"],["gray","رمادي","Gris","#9A9A9A"],["charcoal","فحمي","Anthracite","#3B3B3B"],["navy","كحلي","Bleu marine","#1F2A44"],["blue","أزرق","Bleu","#2F6FDE"],["sky","سماوي","Bleu ciel","#8EC5F0"],["green","أخضر","Vert","#2E8B57"],["olive","زيتوني","Olive","#6B6B3A"],["khaki","كاكي","Kaki","#A89F6B"],["beige","بيج","Beige","#D9C7A7"],["brown","بني","Marron","#6B4A32"],["camel","جملي","Camel","#B5834A"],["red","أحمر","Rouge","#C62828"],["burgundy","عنابي","Bordeaux","#6D1F2F"],["orange","برتقالي","Orange","#F08A24"],["yellow","أصفر","Jaune","#F2C94C"],["pink","وردي","Rose","#EFA3B8"],["purple","بنفسجي","Violet","#7B4FB3"]];
function cinfo(k){for(var i=0;i<COLORS.length;i++)if(COLORS[i][0]===k)return COLORS[i];return null}
function colorLabel(k){var c=cinfo(k);return c?(lang==="ar"?c[1]:c[2]):k}
function swatch(k){var c=cinfo(k);return c?'<span class="sw" style="background:'+c[3]+'"></span>':""}
var SORD=["XS","S","M","L","XL","XXL","XXXL","XXXXL"];
function sortSizes(a){return a.slice().sort(function(x,y){var ix=SORD.indexOf(x),iy=SORD.indexOf(y);if(ix>=0&&iy>=0)return ix-iy;if(ix>=0)return -1;if(iy>=0)return 1;var nx=parseFloat(x),ny=parseFloat(y);if(!isNaN(nx)&&!isNaN(ny))return nx-ny;return String(x).localeCompare(String(y))})}
var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
function load(k,d){try{var v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}}
var sb=null;
if(typeof supabase!=="undefined"&&typeof SUPABASE_URL!=="undefined"&&SUPABASE_URL&&SUPABASE_ANON_KEY){sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY)}
var SITE=load("site",null)||{},READY=load("site",null)!==null;
function brand(){if(!READY)return;var n=(SITE.t&&SITE.t[lang]&&SITE.t[lang].hTitle)||SITE.name||"Maison Noor",e=document.querySelector(".logo");if(e)e.textContent=n}
var lang=load("lang","ar"),LP=null,LOOK=null,SELS=[],FEES={"default":0},SHIP=null,DT="home",state="loading",GT=null,GP=null;
var slug=new URLSearchParams(location.search).get("s")||"";
function t(k){return T[lang][k]}
function url(p){return sb.storage.from("product-images").getPublicUrl(p).data.publicUrl}
function nm(a,l,f){var x=(a||[]).filter(function(r){return r.lang===l})[0];return x?x[f||"name"]:""}
function pname(p){var n=nm(p.product_translations,lang)||nm(p.product_translations,lang==="ar"?"fr":"ar");return n?trShow(n,lang):p.sku}
function pdesc(p){var x=(p.product_translations||[]).filter(function(r){return r.lang===lang})[0]||(p.product_translations||[])[0]||{};return trShow(x.description||x.short_description||"",lang)}
function cur(p){return p.sale_price!=null?Number(p.sale_price):Number(p.price)}
function fmt(v){return Number(v||0).toLocaleString(lang==="ar"?"ar-DZ":"fr-FR")+" "+t("cur")}
function pimgs(p){return(p.product_images||[]).slice().sort(function(a,b){return(b.is_primary-a.is_primary)||(a.sort_order-b.sort_order)}).map(function(i){return i.path})}
function toast(m){var e=$("#toast");e.textContent=m;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove("on")},2400)}
function fee(w){var f=FEES[w];if(f==null)f=FEES["default"];return Number(f)||0}
function wList(){var ws=SHIP&&SHIP.wilayas?Object.keys(SHIP.wilayas):[];if(ws.length)return ws.map(Number).filter(function(n){return n>=1&&n<=58}).sort(function(a,b){return a-b});var a=[];for(var i=1;i<=58;i++)a.push(i);return a}
function dprice(w,type){
  if(SHIP){var ws=SHIP.wilayas||{},o=Object.keys(ws).length?ws[w]:SHIP["default"],v=o?o[type]:null;return(v===null||v===undefined||v==="")?null:Number(v)}
  return fee(w)
}
var PSEL="id,sku,price,sale_price,product_translations(lang,name,short_description,description),product_images(path,is_primary,sort_order),product_variants(id,size,color,stock)";

async function loadAll(){
  if(!sb){state="noconf";return}
  try{
    var lr=await sb.from("landing_pages").select("*").eq("slug",slug).eq("status","published").maybeSingle();
    if(lr.error||!lr.data){state="nf";return}
    LP=lr.data;
    var fr=await sb.from("store_settings").select("key,value").in("key",["shipping_fees","shipping","site"]);(fr.data||[]).forEach(function(r){if(r.key==="site"){SITE=r.value||{};try{localStorage.setItem("site",JSON.stringify(SITE))}catch(e){}}if(r.key==="shipping_fees")FEES=r.value;if(r.key==="shipping")SHIP=r.value});
    var ps=[];
    if(LP.target_type==="product"){
      var r=await sb.from("products").select(PSEL).eq("id",LP.product_id).maybeSingle();if(r.error||!r.data){state="nf";return}ps=[r.data]
    }else{
      var o=await sb.from("outfits").select("id,image_path,outfit_translations(lang,title,description),outfit_items(product_id,sort_order),outfit_images(path,is_primary,sort_order)").eq("id",LP.outfit_id).eq("status","published").maybeSingle();
      if(o.error||!o.data){state="nf";return}LOOK=o.data;
      var ids=(o.data.outfit_items||[]).slice().sort(function(a,b){return a.sort_order-b.sort_order}).map(function(i){return i.product_id});
      var pr=await sb.from("products").select(PSEL).in("id",ids);if(pr.error)throw pr.error;
      ps=ids.map(function(id){return(pr.data||[]).filter(function(p){return p.id===id})[0]}).filter(Boolean);
      if(!ps.length){state="nf";return}
    }
    SELS=ps.map(function(p){var vs=p.product_variants||[],f=vs.filter(function(v){return v.stock>0})[0]||vs[0]||{};return{p:p,color:f.color||null,size:null,qty:1}});
    state="ok"
  }catch(e){console.error(e);state="nf"}
}
function content(){var c=LP.content||{};return c[lang]||c.ar||{}}
function lookTr(){return(LOOK.outfit_translations||[]).filter(function(r){return r.lang===lang})[0]||(LOOK.outfit_translations||[])[0]||{}}
function galleryHtml(paths){
  return '<div class="gal" id="gal">'+(paths.length?paths.map(function(p){return'<img alt="" src="'+esc(url(p))+'">'}).join(""):'<div class="noimg"></div>')+"</div>"+
   (paths.length>1?'<div class="dots">'+paths.map(function(p,k){return'<i class="'+(k?"":"on")+'" role="button" aria-label="'+(k+1)+'"></i>'}).join("")+"</div>":"")
}
function initGallery(){
  clearInterval(GT);var g=$("#gal");if(!g)return;
  var dots=document.querySelectorAll(".dots i"),n=dots.length;if(n<2)return;
  var rtl=document.documentElement.dir==="rtl",cu=0,pause=false;
  function go(i){cu=(i+n)%n;g.scrollTo({left:(rtl?-1:1)*g.clientWidth*cu,behavior:"smooth"})}
  function hold(){pause=true;clearTimeout(GP);GP=setTimeout(function(){pause=false},7000)}
  g.addEventListener("scroll",function(){cu=Math.round(Math.abs(g.scrollLeft)/g.clientWidth);dots.forEach(function(d,k){d.classList.toggle("on",k===cu)})},{passive:true});
  ["touchstart","mousedown","wheel"].forEach(function(ev){g.addEventListener(ev,hold,{passive:true})});
  dots.forEach(function(d,k){d.onclick=function(){hold();go(k)}});
  if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches)GT=setInterval(function(){if(!pause&&$("#gal")===g)go(cu+1)},3500)
}
function itemsHtml(){
  return SELS.map(function(s,i){
    var p=s.p,vs=p.product_variants||[],colors=[],sizes=[];
    vs.forEach(function(v){if(colors.indexOf(v.color)<0)colors.push(v.color)});
    vs.filter(function(v){return v.color===s.color}).forEach(function(v){if(sizes.indexOf(v.size)<0)sizes.push(v.size)});
    var v=s.size?vs.filter(function(x){return x.color===s.color&&x.size===s.size})[0]:null;
    if(v&&s.qty>v.stock)s.qty=Math.max(1,v.stock);
    return '<div class="lp-item">'+(SELS.length>1?'<div class="lp-it"><b>'+esc(pname(p))+'</b><span class="price">'+fmt(cur(p))+"</span></div>":"")+
     '<div class="lbl">'+t("color")+'</div><div class="chips">'+colors.map(function(c){return'<button class="chip'+(c===s.color?" on":"")+'" type="button" data-i="'+i+'" data-col="'+esc(c)+'">'+swatch(c)+esc(colorLabel(c))+"</button>"}).join("")+"</div>"+
     '<div class="lbl">'+t("size")+'</div><div class="chips">'+sortSizes(sizes).map(function(z){var vv=vs.filter(function(x){return x.color===s.color&&x.size===z})[0];return'<button class="chip'+(z===s.size?" on":"")+'" type="button" data-i="'+i+'" data-siz="'+esc(z)+'"'+(vv.stock<=0?" disabled":"")+">"+esc(z)+"</button>"}).join("")+"</div>"+
     '<div class="note" style="margin-top:6px">'+(v?t("inStock")+" "+v.stock:t("pick"))+"</div>"+
     (LP.target_type==="product"?'<div class="lbl">'+t("qty")+'</div><div class="qty"><button type="button" data-i="'+i+'" data-q="-1" aria-label="-">−</button><b>'+s.qty+'</b><button type="button" data-i="'+i+'" data-q="1" aria-label="+">+</button></div>':"")+"</div>"
  }).join("")
}
function totals(){
  var sub=SELS.reduce(function(a,s){return a+cur(s.p)*s.qty},0),w=$("#o_w")?$("#o_w").value:"",box=$("#o_d");
  if(box){
    if(!w){box.innerHTML=""}else{
      var h=dprice(w,"home"),o=dprice(w,"office");
      if(DT==="home"&&h==null&&o!=null)DT="office";if(DT==="office"&&o==null&&h!=null)DT="home";
      box.innerHTML=[["home",h],["office",o]].map(function(x){return'<button type="button" class="chip'+(DT===x[0]?" on":"")+'" data-dt="'+x[0]+'"'+(x[1]==null?" disabled":"")+">"+(x[0]==="home"?t("dHome"):t("dOffice"))+(x[1]==null?" ("+t("dNA")+")":" · "+fmt(x[1]))+"</button>"}).join("")
    }
  }
  var f=w?dprice(w,DT):null,el=$("#tot");
  if(el)el.innerHTML='<div class="tot"><span>'+t("sub3")+"</span><span>"+fmt(sub)+'</span></div><div class="tot"><span>'+t("ship")+"</span><span>"+(w?(f==null?t("dNA"):fmt(f)):"—")+'</span></div><div class="tot"><b>'+t("total")+"</b><b>"+(f==null?"—":fmt(sub+f))+"</b></div>";
  var al=$("#o_al");if(al)al.textContent=DT==="office"?t("fOffice"):t("fAddr")
}
function render(){
  var h=document.documentElement;h.lang=lang;h.dir=lang==="ar"?"rtl":"ltr";$("#lang").textContent=t("lang");brand();
  var box=$("#lp");$("#cta").hidden=true;
  if(state==="loading"){box.innerHTML="";return}
  if(state!=="ok"){box.innerHTML='<div class="lp-nf"><p>'+t(state==="noconf"?"noConf":"nf")+'</p><a class="btn pri" href="index.html">'+t("home")+"</a></div>";return}
  var c=content(),isP=LP.target_type==="product",p0=SELS[0].p,paths,title,desc,priceHtml;
  if(isP){paths=pimgs(p0);title=c.headline||pname(p0);desc=pdesc(p0);priceHtml=fmt(cur(p0))+(p0.sale_price!=null?"<s>"+fmt(p0.price)+"</s>":"")}
  else{var tr=lookTr();paths=(LOOK.outfit_images||[]).slice().sort(function(a,b){return(b.is_primary-a.is_primary)||(a.sort_order-b.sort_order)}).map(function(i){return i.path});if(!paths.length&&LOOK.image_path)paths=[LOOK.image_path];
    title=c.headline||tr.title;desc=tr.description||"";priceHtml=t("lookTotal")+": "+fmt(SELS.reduce(function(a,s){return a+cur(s.p)},0))}
  var ben=(c.benefits||[]).filter(Boolean),wl=lang==="ar"?WA:WF,ctaT=c.cta||t("order"),form=(LP.content||{}).form!==false;
  document.title=title+" | "+(SITE.name||"Maison Noor");
  box.innerHTML='<section class="lp-hero"><div>'+galleryHtml(paths)+'</div><div><h1>'+esc(title)+"</h1>"+(c.sub?'<p class="sub">'+esc(c.sub)+"</p>":"")+'<div class="lp-price">'+priceHtml+"</div>"+
   (ben.length?'<ul class="lp-ben">'+ben.map(function(b){return"<li>"+esc(b)+"</li>"}).join("")+"</ul>":"")+
   (form?'<div class="lp-order" id="order"><h2>'+t("orderT")+'</h2><div id="items">'+itemsHtml()+'</div><form id="co" novalidate><label class="fld">'+t("fName")+'</label><input id="o_n" autocomplete="name"><label class="fld">'+t("fPhone")+'</label><input id="o_p" type="tel" dir="ltr" autocomplete="tel">'+
    '<label class="fld">'+t("fWil")+'</label><select id="o_w"><option value="">—</option>'+wList().map(function(n){return'<option value="'+n+'">'+n+" - "+wl[n-1]+"</option>"}).join("")+'</select><div id="o_d" class="chips" style="margin-top:8px"></div><label class="fld" id="o_al">'+t("fAddr")+'</label><input id="o_a" autocomplete="street-address"><label class="fld">'+t("fCode")+'</label><input id="o_c" dir="ltr">'+
    '<div id="tot" style="margin-top:14px"></div><p class="note">'+t("finalNote")+'</p><p class="err" id="o_e"></p><button class="btn pri" id="o_b" style="width:100%">'+t("place")+"</button></form></div>":"")+
   "</div></section>"+(!isP?"":(desc?'<p class="lp-desc">'+esc(desc)+"</p>":""));
  if(!isP&&desc)box.insertAdjacentHTML("beforeend",'<p class="lp-desc">'+esc(desc)+"</p>");
  if(form){$("#cta").hidden=false;$("#ctab").textContent=ctaT;totals();$("#o_w").onchange=totals;$("#co").onsubmit=placeOrder}
  initGallery()
}
async function placeOrder(e){
  e.preventDefault();var err=$("#o_e"),b=$("#o_b");err.textContent="";
  var cust={name:$("#o_n").value.trim(),phone:$("#o_p").value.trim(),wilaya:$("#o_w").value,address:$("#o_a").value.trim(),note:"landing:"+slug,delivery_type:DT};
  if(cust.name.length<2||cust.phone.length<8||cust.address.length<4||!cust.wilaya){err.textContent=t("eCust");return}
  if(dprice(cust.wilaya,DT)==null){err.textContent=t("eDeliv");return}
  var items=[];
  for(var i=0;i<SELS.length;i++){var s=SELS[i],v=(s.p.product_variants||[]).filter(function(x){return x.color===s.color&&x.size===s.size})[0];if(!v){err.textContent=t("eChoose");return}items.push({variant_id:v.id,qty:s.qty})}
  b.disabled=true;
  var r=await sb.rpc("create_order",{p_items:items,p_customer:cust,p_code:$("#o_c").value.trim()||null});
  if(r.error){var m=r.error.message||"";err.textContent=m.indexOf("out_of_stock")>=0||m.indexOf("product_unavailable")>=0||m.indexOf("variant_not_found")>=0?t("eStock"):m.indexOf("delivery_unavailable")>=0?t("eDeliv"):m.indexOf("invalid_discount")>=0?t("eCode"):m.indexOf("invalid_customer")>=0?t("eCust"):t("eGen");b.disabled=false;return}
  var o=r.data;$("#cta").hidden=true;
  $("#order").innerHTML='<div class="ok"><h3>'+t("thanks")+"</h3><p>"+t("orderNo")+' <b dir="ltr">'+esc(o.order_number)+"</b></p><p>"+t("orderTot")+" <b>"+fmt(o.total)+'</b></p><p class="note">'+t("willCall")+'</p><a class="btn sec" href="index.html">'+t("home")+"</a></div>";
  $("#order").scrollIntoView({behavior:"smooth",block:"center"})
}
function TR_DONE(){
  if(state!=="ok"||!LP)return;
  var c=content(),h=document.querySelector(".lp h1");
  if(h&&LP.target_type==="product"&&!c.headline)h.textContent=pname(SELS[0].p);
  var d=document.querySelector(".lp-desc");if(d&&LP.target_type==="product")d.textContent=pdesc(SELS[0].p);
  var it=$("#items");if(it)it.innerHTML=itemsHtml()
}
document.addEventListener("click",function(e){
  var el=e.target,ch=el.closest("[data-i]");
  var dtb=el.closest("[data-dt]");if(dtb){DT=dtb.dataset.dt;totals();return}
  if(ch&&ch.closest("#items")){var s=SELS[Number(ch.dataset.i)];
    if(ch.dataset.col!=null){s.color=ch.dataset.col;s.size=null;s.qty=1}
    else if(ch.dataset.siz!=null){s.size=ch.dataset.siz}
    else if(ch.dataset.q!=null){var v=(s.p.product_variants||[]).filter(function(x){return x.color===s.color&&x.size===s.size})[0],mx=v?v.stock:20;s.qty=Math.min(mx,Math.max(1,s.qty+Number(ch.dataset.q)))}
    $("#items").innerHTML=itemsHtml();totals();return}
  if(el.id==="ctab"){var o=$("#order");if(o)o.scrollIntoView({behavior:"smooth"})}
});
$("#lang").onclick=function(){lang=lang==="ar"?"fr":"ar";try{localStorage.setItem("lang",JSON.stringify(lang))}catch(e){}render()};
render();
loadAll().then(function(){READY=true;document.documentElement.classList.remove("pend");render()});
setTimeout(function(){document.documentElement.classList.remove("pend")},3000);
