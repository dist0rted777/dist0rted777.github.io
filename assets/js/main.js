(function(){
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');
  var yr=d.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  // nav state
  var nav=d.getElementById('nav');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>10)};
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // mobile menu
  var btn=d.querySelector('.menu-btn'),links=d.getElementById('navlinks');
  btn.addEventListener('click',function(){var o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  links.addEventListener('click',function(e){if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  d.addEventListener('keydown',function(e){if(e.key==='Escape'&&links.classList.contains('open')){links.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus()}});

  // typed command
  var t=d.getElementById('typed'),out=d.getElementById('termout');
  if(t){var s=t.dataset.text;
    if(reduce){t.textContent=s}else{out.classList.add('hide');var i=0;
      (function type(){t.textContent=s.slice(0,++i); if(i<s.length) setTimeout(type,55+Math.random()*60); else setTimeout(function(){out.classList.remove('hide')},250)})();}}

  // reveal
  var els=d.querySelectorAll('.reveal');
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
  else{var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(e,k){e.style.transitionDelay=(k%3)*70+'ms';io.observe(e)})}

  // card spotlight
  d.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});

  // active nav link
  var secs=['work','experience','education','skills','creative','contact'].map(function(id){return d.getElementById(id)});
  if('IntersectionObserver' in window){var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.querySelectorAll('a').forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});secs.forEach(function(s){s&&so.observe(s)})}

  // lite YouTube
  d.querySelectorAll('.yt').forEach(function(y){y.querySelector('button').addEventListener('click',function(){
    var f=d.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+y.dataset.id+'?autoplay=1';f.title=y.dataset.title;
    f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';f.allowFullscreen=true;y.innerHTML='';y.appendChild(f);f.focus()})});
})();
