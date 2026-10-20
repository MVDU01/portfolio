'use strict';
(()=>{
 const root=document.documentElement;
 const art=document.querySelector('.hero-art');
 if(!art)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 const effects=[1,2,3,4,5,6,7,11,12,14];
 let paused=false,tiltFrame=0;
 const toggle=document.createElement('button');
 toggle.type='button';toggle.className='motion-toggle';toggle.setAttribute('aria-pressed','false');
 const footer=document.querySelector('.footer');
 function label(){const en=root.lang==='en';toggle.textContent=en?(paused?'Resume animations':'Pause animations'):(paused?'Reprendre les animations':'Mettre les animations en pause');}
 function resetTilt(){cancelAnimationFrame(tiltFrame);art.style.removeProperty('--tilt-x');art.style.removeProperty('--tilt-y');}
 function apply(){root.classList.toggle('motion-off',paused||reduced.matches);if(paused||reduced.matches)resetTilt();label();}
 toggle.addEventListener('click',()=>{paused=!paused;toggle.setAttribute('aria-pressed',String(paused));apply();});
 footer?.append(toggle);
 reduced.addEventListener('change',apply);
 fine.addEventListener('change',resetTilt);
 const languageObserver=new MutationObserver(label);
 languageObserver.observe(root,{attributes:true,attributeFilter:['lang']});
 const nodes=document.querySelectorAll('.section-heading,.project,.skill-block,.certifications,.journey-intro,.timeline article,.contact-copy,.contact-form-panel');
 if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('revealed');revealObserver.unobserve(entry.target);}},{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  for(const node of nodes){node.dataset.reveal='';revealObserver.observe(node);}
  const labObserver=new IntersectionObserver(entries=>{for(const entry of entries)art.classList.toggle('lab-visible',entry.isIntersecting);},{threshold:0});
  labObserver.observe(art);
 }else art.classList.add('lab-visible');
 const svg=art.querySelector('.network-lines');
 if(svg)for(const [index,path] of ['M250 135 L250 250 L105 250 L105 325','M250 250 L395 250 L395 325','M250 360 L250 250 L250 135'].entries()){
  const dot=document.createElementNS('http://www.w3.org/2000/svg','path');
  dot.setAttribute('d',path);dot.setAttribute('pathLength','100');dot.setAttribute('class','packet-dot packet-'+String.fromCharCode(97+index));svg.append(dot);
 }
 art.addEventListener('pointermove',event=>{
  if(!fine.matches||reduced.matches||paused)return;
  const b=art.getBoundingClientRect();const x=(event.clientX-b.left)/b.width-.5;const y=(event.clientY-b.top)/b.height-.5;
  cancelAnimationFrame(tiltFrame);tiltFrame=requestAnimationFrame(()=>{art.style.setProperty('--tilt-x',(-y*5).toFixed(2)+'deg');art.style.setProperty('--tilt-y',(x*6).toFixed(2)+'deg');});
 });
 art.addEventListener('pointerleave',resetTilt);
 function visibility(){root.classList.toggle('page-hidden',document.hidden);if(document.hidden)resetTilt();}
 document.addEventListener('visibilitychange',visibility);
 const dialog=document.querySelector('#project-dialog');
 if(dialog&&typeof dialog.animate==='function'){
  const nativeClose=dialog.close.bind(dialog);let closing=false;
  dialog.close=function(value){
   if(closing)return;
   if(!dialog.open||reduced.matches||paused){nativeClose(value);return;}
   closing=true;
   const animation=dialog.animate([{opacity:1,transform:'translateY(0) scale(1)'},{opacity:0,transform:'translateY(8px) scale(.98)'}],{duration:170,easing:'ease-in',fill:'forwards'});
   animation.finished.catch(()=>{}).finally(()=>{nativeClose(value);animation.cancel();closing=false;});
  };
  dialog.addEventListener('cancel',event=>{event.preventDefault();dialog.close();});
 }
 root.classList.add(...effects.map(id=>'fx-'+id));
 if('IntersectionObserver' in window)root.classList.add('motion-ready');
 visibility();apply();
})();
