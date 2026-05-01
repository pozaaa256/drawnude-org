(function(){
  var el=document.getElementById('as-calc');
  if(!el)return;
  var cur='\u20AC';
  var min=20,cap=500,pct=100,wg=35;
  var L={title:'Bonus-Rechner',dep:'Einzahlung',bon:'Bonus',tot:'Gesamt',wag:'Umsatz',cta:'Bonus holen'};
  var styleId='calc-style';
  if(!document.getElementById(styleId)){
    var s=document.createElement('style');s.id=styleId;
    s.textContent='.calc-box{background:var(--card,#1a0a3a);border:1px solid var(--border,#3a1c6e);border-radius:12px;padding:1.25rem;margin:1.25rem 0}.calc-title{font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;font-weight:800;color:var(--accent1,#FFB800);text-transform:uppercase;letter-spacing:.05em;font-size:.9rem;margin-bottom:.75rem}.calc-slider-row{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}.calc-slider-row input[type=range]{flex:1;min-width:0;accent-color:#FFB800}.calc-val{font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;font-weight:900;color:var(--accent1,#FFB800);min-width:80px;text-align:right;font-size:1rem}.calc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem}@media(max-width:600px){.calc-grid{grid-template-columns:repeat(2,1fr)}}.calc-card{background:#0d0521;border:1px solid var(--border,#3a1c6e);border-radius:8px;padding:.75rem;text-align:center;overflow-wrap:break-word;word-break:break-all}.calc-card .k{color:var(--text2,#c8b6e8);font-size:.72rem;text-transform:uppercase;margin-bottom:.3rem}.calc-card .v{font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;font-weight:900;color:var(--text,#f5f0ff);font-size:1rem}.calc-cta{display:inline-block;margin-top:1rem;background:linear-gradient(135deg,var(--accent1,#FFB800),#ffa500);color:#0d0521;padding:.7rem 1.2rem;border-radius:6px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;text-decoration:none;font-size:.9rem}';
    document.head.appendChild(s);
  }
  function fmt(v){return v.toLocaleString('de-DE')+' '+cur}
  el.className='calc-box';
  var max=cap*5;
  el.innerHTML='<div class="calc-title">'+L.title+'</div>'+
    '<div class="calc-slider-row"><input type="range" id="cslider" min="'+min+'" max="'+max+'" step="10" value="'+(min*5)+'"><div class="calc-val" id="cval">'+fmt(min*5)+'</div></div>'+
    '<div class="calc-grid">'+
      '<div class="calc-card"><div class="k">'+L.dep+'</div><div class="v" id="cd">-</div></div>'+
      '<div class="calc-card"><div class="k">'+L.bon+'</div><div class="v" id="cb">-</div></div>'+
      '<div class="calc-card"><div class="k">'+L.tot+'</div><div class="v" id="ct">-</div></div>'+
      '<div class="calc-card"><div class="k">'+L.wag+'</div><div class="v" id="cw">-</div></div>'+
    '</div>'+
    '<div style="text-align:center"><a href="/play/" class="calc-cta" rel="nofollow sponsored noopener">'+L.cta+' \u2192</a></div>';
  var sl=document.getElementById('cslider');
  function upd(){
    var d=+sl.value;
    var b=Math.min(Math.round(d*pct/100),cap);
    var t=d+b;
    var w=b*wg;
    document.getElementById('cval').textContent=fmt(d);
    document.getElementById('cd').textContent=fmt(d);
    document.getElementById('cb').textContent=fmt(b);
    document.getElementById('ct').textContent=fmt(t);
    document.getElementById('cw').textContent=fmt(w);
  }
  sl.addEventListener('input',upd);upd();
})();
