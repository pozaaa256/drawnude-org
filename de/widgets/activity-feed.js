(function(){
  if(parseInt(sessionStorage.getItem('as_feed_count')||'0',10)>=15)return;
  var cur='\u20AC';
  var jp=1500,jpMax=6000,lo=50,hi=600;
  var ago='Min. her', won='gewann';
  var names=['Markus','Lisa','Tim','Sophie','Hans','Anna','Jonas','Clara','Felix','Nina','Paul','Lea','Stefan','Julia','Max','Laura'];
  var cities=['Berlin','M\u00FCnchen','Hamburg','K\u00F6ln','Frankfurt','Stuttgart','Leipzig','D\u00FCsseldorf','Bremen','Dresden','Hannover','N\u00FCrnberg'];
  var games=['Gates of Olympus','Sweet Bonanza','Book of Dead','Big Bass Bonanza','Starburst','Razor Shark','Wanted Dead or a Wild','Le Bandit','Fruit Party','Crazy Time','Live Roulette','Aviator','Sugar Rush','Money Train 4'];
  function rand(a,b){return Math.floor(a+Math.random()*(b-a+1))}
  function item(i){
    var jackpot=(i%8===3);
    var name=names[rand(0,names.length-1)];
    var city=cities[rand(0,cities.length-1)];
    var game=games[rand(0,games.length-1)];
    var amt=jackpot?rand(jp,jpMax):rand(lo,hi);
    var minsAgo=rand(1,29);
    return{jackpot:jackpot,name:name,city:city,game:game,amt:amt,ago:minsAgo};
  }
  var styleId='af-style';
  if(!document.getElementById(styleId)){
    var s=document.createElement('style');s.id=styleId;
    s.textContent='#as-feed-wrap{position:fixed;bottom:1rem;left:1rem;z-index:9000;max-width:320px;pointer-events:none;transition:bottom .25s}#as-feed-wrap.sbar-up{bottom:calc(70px + 1rem)}.af-toast{background:linear-gradient(135deg,#1a0a3a,#120730);border:1px solid var(--accent1,#FFB800);border-radius:10px;padding:.7rem .85rem;margin-top:.5rem;color:var(--text,#f5f0ff);font-size:.82rem;pointer-events:auto;box-shadow:0 6px 22px rgba(0,0,0,.4);transform:translateX(-120%);transition:transform .35s ease;display:block;text-decoration:none;position:relative;overflow:hidden}.af-toast.in{transform:translateX(0)}.af-toast.jackpot{border-color:#ffd700;background:linear-gradient(135deg,#2a0f55,#3a1f00)}.af-name{color:var(--accent1,#FFB800);font-weight:700}.af-amt{color:#fff;font-weight:700}.af-meta{color:var(--text2,#c8b6e8);font-size:.72rem;margin-top:.2rem;display:block}.af-prog{position:absolute;bottom:0;left:0;height:2px;background:var(--accent1,#FFB800);width:100%;transform-origin:left;animation:afshrink 5.5s linear forwards}@keyframes afshrink{to{transform:scaleX(0)}}@media(max-width:480px){#as-feed-wrap{max-width:260px;left:.5rem;bottom:.5rem}}';
    document.head.appendChild(s);
  }
  var wrap=document.createElement('div');wrap.id='as-feed-wrap';document.body.appendChild(wrap);
  var sbar=document.getElementById('sbar');
  if(sbar&&typeof MutationObserver!=='undefined'){
    new MutationObserver(function(){wrap.classList.toggle('sbar-up',sbar.classList.contains('show'))}).observe(sbar,{attributes:true,attributeFilter:['class']});
  }
  function show(){
    var shown=parseInt(sessionStorage.getItem('as_feed_count')||'0',10);
    if(shown>=15)return;
    sessionStorage.setItem('as_feed_count',shown+1);
    var it=item(shown);
    var a=document.createElement('a');
    a.href='/play/';a.rel='nofollow sponsored noopener';
    a.className='af-toast'+(it.jackpot?' jackpot':'');
    a.innerHTML=(it.jackpot?'\uD83C\uDFC6 ':'\uD83C\uDF89 ')+'<span class="af-name">'+it.name+'</span> ('+it.city+') '+won+' <span class="af-amt">'+it.amt.toLocaleString('de-DE')+' '+cur+'</span><span class="af-meta">'+it.game+' \u00B7 '+it.ago+' '+ago+'</span><span class="af-prog"></span>';
    wrap.appendChild(a);
    requestAnimationFrame(function(){a.classList.add('in')});
    setTimeout(function(){a.style.transform='translateX(-120%)';setTimeout(function(){a.remove()},400)},5500);
  }
  setTimeout(function once(){show();setTimeout(once,5000+Math.random()*6000)},2000);
})();
