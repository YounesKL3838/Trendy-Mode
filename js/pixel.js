/* Ad pixels (Meta/Facebook + TikTok). IDs come from the dashboard tab "التسويق". Nothing loads if no ID is set. */
var PX=(function(){
  var cfg=null,ready=false,fbOn=false,ttOn=false,pend=[];
  try{cfg=JSON.parse(localStorage.getItem("mkt"))}catch(e){}
  function okFb(v){return/^\d{5,20}$/.test(v||"")}
  function okTt(v){return/^[A-Za-z0-9]{8,32}$/.test(v||"")}
  function initFb(id){
    try{
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init",id);window.fbq("track","PageView");fbOn=true
    }catch(e){}
  }
  function initTt(id){
    try{
      !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load(id);ttq.page()}(window,document,"ttq");
      ttOn=true
    }catch(e){}
  }
  function params(d){
    var o={currency:"DZD"},ids=d.ids||(d.id?[d.id]:null);
    if(d.value!=null)o.value=Number(d.value)||0;
    if(ids){o.content_ids=ids;o.content_type="product"}
    if(d.name)o.content_name=d.name;
    if(d.n!=null)o.num_items=d.n;
    return o
  }
  function send(ev,d){
    var p=params(d||{});
    try{if(fbOn&&window.fbq)window.fbq("track",ev,p)}catch(e){}
    try{if(ttOn&&window.ttq){
      var tp={currency:"DZD",value:p.value||0,content_name:p.content_name,contents:(p.content_ids||[]).map(function(i){return{content_id:i,content_type:"product"}})};
      window.ttq.track({Purchase:"CompletePayment"}[ev]||ev,tp)}}catch(e){}
  }
  function start(){
    if(!cfg)return;
    if(okFb(cfg.fb)&&!fbOn)initFb(cfg.fb);
    if(okTt(cfg.tt)&&!ttOn)initTt(cfg.tt);
    ready=true;
    while(pend.length){var x=pend.shift();send(x[0],x[1])}
  }
  if(cfg)start();
  return{
    set:function(v){cfg=v||{};try{localStorage.setItem("mkt",JSON.stringify(cfg))}catch(e){}start()},
    track:function(ev,d){if(!ready){if(pend.length<20)pend.push([ev,d]);return}send(ev,d)}
  }
})();
