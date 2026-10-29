/* Arabic fallback for product text that has no Arabic yet.
   The permanent fix is the dashboard button "ترجمة المنتجات للعربية" (it saves Arabic in the database).
   Until then this shows an automatic translation (cached in the visitor's browser). */
(function(){
  var cache={},queue=[],tried={},busy=false,dead=false,timer=null;
  try{cache=JSON.parse(localStorage.getItem("trc"))||{}}catch(e){}
  function isAr(s){return /[\u0600-\u06FF]/.test(s||"")}
  function chunks(s,max){var parts=s.match(/[^.!?؟\n]+[.!?؟\n]*/g)||[s],res=[],cur="";parts.forEach(function(p){if((cur+p).length>max){if(cur.trim())res.push(cur.trim());cur=p;while(cur.length>max){res.push(cur.slice(0,max));cur=cur.slice(max)}}else cur+=p});if(cur.trim())res.push(cur.trim());return res}
  async function translate(txt){
    var out=[],em=(typeof TRANSLATE_EMAIL!=="undefined"&&TRANSLATE_EMAIL)?"&de="+encodeURIComponent(TRANSLATE_EMAIL):"",parts=chunks(txt,450);
    for(var i=0;i<parts.length;i++){
      var r=await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(parts[i])+"&langpair=fr|ar"+em);
      var j=await r.json(),tx=j&&j.responseData&&j.responseData.translatedText;
      if(!r.ok||Number(j.responseStatus)!==200||!tx||/MYMEMORY WARNING/i.test(tx))throw new Error("tr");
      var d=document.createElement("textarea");d.innerHTML=tx;out.push(d.value)
    }
    return out.join(" ")
  }
  async function run(){
    if(busy)return;busy=true;
    while(queue.length&&!dead){
      var txt=queue.shift();tried[txt]=1;
      try{
        var v=await translate(txt);
        if(Object.keys(cache).length>300)cache={};
        cache[txt]=v;try{localStorage.setItem("trc",JSON.stringify(cache))}catch(e){}
        clearTimeout(timer);timer=setTimeout(function(){if(typeof TR_DONE==="function")TR_DONE()},700)
      }catch(e){dead=true;queue.length=0}
    }
    busy=false
  }
  window.trShow=function(txt,lang){
    if(lang!=="ar"||!txt||dead&&!cache[txt]||isAr(txt)||!/[A-Za-z\u00C0-\u00FF]{3}/.test(txt))return txt;
    if(cache[txt])return cache[txt];
    if(!tried[txt]&&queue.indexOf(txt)<0&&queue.length<80){queue.push(txt);run()}
    return txt
  }
})();
