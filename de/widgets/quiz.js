(function(){
  var el=document.getElementById('as-quiz');
  if(!el)return;
  var P={title:'Finden Sie Ihren perfekten Bonus',
    qs:[
      {q:'Was spielen Sie am liebsten?',a:['Slots','Live-Dealer','Beides','Ich bin neu']},
      {q:'Wie hoch ist Ihr Budget?',a:['Klein','Mittel','Gro\u00DF','Ohne Limit']},
      {q:'Was ist Ihnen am wichtigsten?',a:['Bonus','Spielauswahl','Schnelle Auszahlung','Sicherheit']},
      {q:'Wie schnell wollen Sie auszahlen?',a:['Sofort','Bis 24h','Nicht wichtig']}
    ],
    results:[
      {t:'Willkommensbonus',d:'100% bis 500 \u20AC + 200 Freispiele \u2014 ideal f\u00FCr Slot-Spieler mit mittlerem bis gro\u00DFem Budget. Umsatz 35\u00D7.'},
      {t:'Freispiele-Paket',d:'200 Freispiele auf beliebte Slots \u2014 optimal bei kleinem Budget. Risikoarmer Start.'},
      {t:'Bonus ohne Einzahlung',d:'Gratisbonus f\u00FCr neue Spieler \u2014 perfekt f\u00FCr Neulinge oder sehr kleines Budget.'},
      {t:'VIP-Programm',d:'Cashback bis 15%, pers\u00F6nlicher Manager, schnelle Auszahlungen \u2014 f\u00FCr High Roller.'}
    ],cta:'Jetzt holen',retry:'Erneut starten',step:'Frage'};
  var styleId='qz-style';
  if(!document.getElementById(styleId)){
    var s=document.createElement('style');s.id=styleId;
    s.textContent='.qz{background:linear-gradient(135deg,var(--bg2,#1a0a3a),var(--card,#1a0a3a));border:1px solid var(--accent1,#FFB800);border-radius:14px;padding:1.75rem;margin:1rem 0 2rem;hyphens:auto;-webkit-hyphens:auto;word-break:break-word}.qz h3{font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;color:var(--accent1,#FFB800);margin:0 0 .5rem;font-size:1.15rem}.qz-step{color:var(--text2,#c8b6e8);font-size:.82rem;margin-bottom:1rem}.qz-q{font-weight:700;color:var(--text,#f5f0ff);margin-bottom:1rem;font-size:1.05rem}.qz-options{display:grid;grid-template-columns:repeat(2,1fr);gap:.5rem}@media(max-width:480px){.qz-options{grid-template-columns:1fr}}.qz-opt{background:#0d0521;border:1px solid var(--border,#3a1c6e);color:var(--text,#f5f0ff);padding:.75rem 1rem;border-radius:8px;cursor:pointer;text-align:left;font-family:inherit;font-size:.9rem;transition:all .15s}.qz-opt:hover{border-color:var(--accent1,#FFB800);color:var(--accent1,#FFB800)}.qz-pips{display:flex;gap:.35rem;margin-top:1rem;justify-content:center}.qz-pip{width:8px;height:8px;border-radius:50%;background:var(--border,#3a1c6e)}.qz-pip.on{background:var(--accent1,#FFB800)}.qz-result{text-align:center}.qz-result h3{font-size:1.4rem;margin-bottom:.5rem}.qz-result p{color:var(--text2,#c8b6e8);margin:0 0 1rem}.qz-cta{display:inline-block;background:linear-gradient(135deg,var(--accent1,#FFB800),#ffa500);color:#0d0521;padding:.7rem 1.2rem;border-radius:6px;font-weight:700;font-family:-apple-system,BlinkMacSystemFont,system-ui,Roboto,sans-serif;text-decoration:none;font-size:.9rem}.qz-retry{display:block;margin-top:.75rem;background:none;border:0;color:var(--text2,#c8b6e8);text-decoration:underline;cursor:pointer;font-size:.85rem;margin-left:auto;margin-right:auto}';
    document.head.appendChild(s);
  }
  el.className='qz';
  var state={i:0,answers:[]};
  function render(){
    if(state.i>=P.qs.length){
      var idx=pick(state.answers);
      var r=P.results[idx];
      el.innerHTML='<div class="qz-result"><h3>'+r.t+'</h3><p>'+r.d+'</p><a href="/play/" class="qz-cta" rel="nofollow sponsored noopener">'+P.cta+' \u2192</a><button class="qz-retry" id="qzr">'+P.retry+'</button></div>';
      document.getElementById('qzr').addEventListener('click',function(){state={i:0,answers:[]};render()});
      return;
    }
    var q=P.qs[state.i];
    var html='<div class="qz-step">'+P.step+' '+(state.i+1)+' / '+P.qs.length+'</div><div class="qz-q">'+q.q+'</div><div class="qz-options">';
    q.a.forEach(function(a,j){html+='<button class="qz-opt" data-i="'+j+'">'+a+'</button>'});
    html+='</div><div class="qz-pips">';
    for(var p=0;p<P.qs.length;p++)html+='<div class="qz-pip'+(p<=state.i?' on':'')+'"></div>';
    html+='</div>';
    el.innerHTML=html;
    el.querySelectorAll('.qz-opt').forEach(function(b){b.addEventListener('click',function(){state.answers.push(+b.dataset.i);state.i++;render()})});
  }
  function pick(ans){
    var type=ans[0],bud=ans[1],speed=ans[3];
    if(type===3||bud===0)return 2;
    if(bud>=2&&speed===0)return 3;
    if(type===0&&bud<=1)return 1;
    if(type===0&&bud>=1)return 0;
    return 0;
  }
  render();
})();
