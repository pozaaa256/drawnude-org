(function(){
  var el=document.getElementById('as-countdown');
  if(!el)return;
  var until='bis zum Ende der Aktion';
  var taken='von 100 Boni heute beansprucht';
  var offer='\uD83C\uDF81 100% bis 500 \u20AC + 200 Freispiele';
  var cta='Jetzt aktivieren';
  var tz=1;
  var styleId='cd-style';
  if(!document.getElementById(styleId)){
    var s=document.createElement('style');s.id=styleId;
    s.textContent='.cd-box{background:linear-gradient(135deg,var(--bg2,#1a0a3a),#120730);border:1px solid var(--accent1,#FFB800);border-radius:12px;padding:1rem 1.25rem;margin-top:1rem;position:relative;overflow:hidden}.cd-box::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--accent1,#FFB800),transparent);animation:cdshim 2.5s infinite}@keyframes cdshim{0%{left:-100%}100%{left:100%}}.cd-time{font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;font-weight:900;font-size:1.4rem;color:var(--accent1,#FFB800);letter-spacing:.05em}.cd-sub{color:var(--text2,#c8b6e8);font-size:.85rem;margin-bottom:.75rem}.cd-bar{height:8px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden;margin:.6rem 0}.cd-bar>span{display:block;height:100%;background:linear-gradient(90deg,var(--accent2,#7B2CBF),var(--accent1,#FFB800));transition:width .6s}.cd-count{color:var(--text2,#c8b6e8);font-size:.8rem;margin-bottom:.75rem}.cd-offer{color:var(--text,#f5f0ff);font-weight:600;margin:.5rem 0 .75rem;hyphens:auto;-webkit-hyphens:auto;word-break:break-word}.cd-cta{display:inline-block;background:linear-gradient(135deg,var(--accent1,#FFB800),#ffa500);color:#0d0521;padding:.6rem 1.1rem;border-radius:6px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;text-decoration:none;font-size:.9rem}';
    document.head.appendChild(s);
  }
  el.className='cd-box';
  el.innerHTML='<div class="cd-time" id="cdt">00:00:00</div><div class="cd-sub">'+until+'</div><div class="cd-bar"><span id="cdb" style="width:0%"></span></div><div class="cd-count" id="cdn">0 '+taken+'</div><div class="cd-offer">'+offer+'</div><a href="/play/" class="cd-cta" rel="nofollow sponsored noopener">'+cta+' \u2192</a>';
  var count=68+Math.floor(Math.random()*12);
  function draw(){document.getElementById('cdb').style.width=count+'%';document.getElementById('cdn').textContent=count+' '+taken}
  draw();
  setInterval(function(){if(count<95&&Math.random()<0.35){count++;draw()}},7000+Math.random()*5000);
  function tick(){
    var now=new Date();
    var utc=now.getTime()+now.getTimezoneOffset()*60000;
    var tznow=new Date(utc+tz*3600000);
    var end=new Date(tznow.getFullYear(),tznow.getMonth(),tznow.getDate()+1,0,0,0);
    var diff=Math.max(0,end-tznow);
    var h=Math.floor(diff/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
    document.getElementById('cdt').textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }
  tick();setInterval(tick,1000);
})();
