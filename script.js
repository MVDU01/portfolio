'use strict';
const english = {
  legalNotice:'Legal notice · FR',privacyLink:'Privacy · FR',privacyNotice:'Malo-Valentin Lequy uses your information to process your message and reply. <a href="confidentialite.html" hreflang="fr">Data handling and your rights · French</a>. All three fields are required.',
  skip:'Skip to content',preview:'V2 CONCEPT',previewDesc:'A new look, your current content.',original:'View original ↗',navProjects:'Projects',navSkills:'Skills',navJourney:'Journey',navContact:'Let’s talk <span aria-hidden="true">↗</span>',student:'COMPUTER SCIENCE BACHELOR’S STUDENT · ESGI',tagline:'Systems, networks<br><em>& curiosity.</em>',heroDesc:'Understanding how things work, connecting them and learning to protect them. Welcome to my world of IT.',explore:'Explore my projects <span aria-hidden="true">↗</span>',cv:'My CV <span class="file-type">PDF · FR</span><span aria-hidden="true">↓</span>',focus:'MY AREAS OF EXPLORATION',focusDesc:'Infrastructure <i> / </i> Cybersecurity <i> / </i> Web',virtual:'VIRTUAL ENVIRONMENT',terminal:'learn. test. understand.',artCaption:'An idea. A lab. Hands-on learning.',projectsEyebrow:'01 / FROM THEORY TO PRACTICE',projectsTitle:'What I <em>build.</em>',projectsIntro:'Two projects, two ways to learn:<br>exploring infrastructure and creating for the web.',infraCategory:'SYSTEMS & NETWORKS',infraTitle:'A virtual laboratory<br>to understand the server.',infraDesc:'Installing Windows Server roles and testing with a client, in an environment of two VMware virtual machines. Documented in a tutorial.',documentation:'Documentation',caseStudy:'Explore the project <span aria-hidden="true">↗</span>',tutorial:'Tutorial PDF · FR ↓',illustration:'ILLUSTRATIVE PROJECT PREVIEW',webCategory:'WEB DEVELOPMENT',webTitle:'TechWave.<br>Bringing an event to life.',webDesc:'A website for a fictional technology event: introducing the festival, showcasing the speakers and guiding visitors towards registration.',webTag:'Event website',personalProject:'Fictional project',liveSite:'Visit the website ↗',projectNote:'To complete with your latest content: exact role, challenges, results and source code links.',skillsEyebrow:'02 / MY TOOLBOX',skillsTitle:'Foundations.<br><em>And the drive to go further.</em>',skillsIntro:'The technologies I explore,<br>connected to what I create.',systems:'Systems & virtualisation',systemsProof:'In practice: my virtual laboratory ↗',development:'Development',webProof:'Explore: the TechWave project ↗',security:'Networks & security',securityDesc:'Network fundamentals · Cybersecurity<br>IT support · Windows administration',securityProof:'Foundations: my Cisco courses ↗',learning:'CONTINUOUS LEARNING',cisco:'My Cisco badges',networkBadge:'Network fundamentals',cyberBadge:'Introduction to cybersecurity',journeyEyebrow:'03 / THE JOURNEY SO FAR',journeyTitle:'Curious by nature.<br><em>IT professional in the making.</em>',about:'I am pursuing a Computer Science Bachelor’s degree at ESGI. I enjoy understanding infrastructure, experimenting and turning what I learn into tangible projects.',nextTitle:'What comes next?',nextDesc:'To personalise: your objective, availability and preferred locations.',esgiDate:'2025 — PRESENT',esgiTitle:'Bachelor’s in Computer Science',esgiDesc:'Development, systems and networks, with an introduction to cybersecurity.',bacTitle:'STI2D Baccalaureate',bacSpeciality:'INFORMATION & DIGITAL SYSTEMS',bacDesc:'Information and digital systems.<br><strong>Highest honours.</strong>',contactEyebrow:'04 / LET’S CONNECT',contactTitle:'A question,<br>an idea,<br><em>a conversation.</em>',contactDesc:'Interested in my background or one of my projects?<br>Let’s connect on LinkedIn.',linkedin:'Let’s talk on LinkedIn <span aria-hidden="true">↗</span>',cvContact:'Read my CV · PDF in French ↗',messageTitle:'Leave a note?',demo:'CONTACT',formNote:'Your name, email and message will be sent via FormSubmit so I can reply.',name:'Your name',email:'Your email address',message:'Your message',formSubmit:'Send my message <span aria-hidden="true">↗</span>',footer:'Always learning.',backTop:'Back to top ↑'
};
const originals = new Map();
document.querySelectorAll('[data-i18n]').forEach(el => originals.set(el,el.innerHTML));
const placeholderText = {namePlaceholder:{fr:'Camille Martin',en:'Alex Taylor'},emailPlaceholder:{fr:'camille@exemple.fr',en:'alex@example.com'},messagePlaceholder:{fr:'Parlons de…',en:'Let’s talk about…'}};
const messages = {
  fr:{pending:'Envoi en cours…',success:'Message transmis. Merci pour ton message !',error:'L’envoi n’a pas été confirmé. Tes informations sont conservées ; tu peux réessayer ou me contacter sur LinkedIn.',local:'Pour envoyer un message, ouvre le portfolio en ligne. L’envoi est désactivé dans ce fichier local ; tu peux aussi me contacter sur LinkedIn.'},
  en:{pending:'Sending…',success:'Message submitted. Thank you for getting in touch!',error:'Sending could not be confirmed. Your information has been kept; please try again or contact me on LinkedIn.',local:'To send a message, open the portfolio online. Sending is disabled in this local file; you can also contact me on LinkedIn.'}
};
let formState=null;
function updateFormStatus(){if(!formState)return;status.textContent=messages[currentLanguage][formState];status.hidden=false;status.dataset.state=formState;}

let currentLanguage = 'fr';
const langButton = document.querySelector('#language');
const status = document.querySelector('#form-status');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const dialog = document.querySelector('#project-dialog');
let activeProject = null;

function setLanguage(language){
  currentLanguage=language;
  document.documentElement.lang=language;
  document.title=language==='fr'?'Malo-Valentin Lequy — Portfolio informatique':'Malo-Valentin Lequy — IT Portfolio';
  document.querySelector('meta[name="description"]').content=language==='fr'?'Malo-Valentin Lequy, étudiant en Bachelor Informatique à l’ESGI. Découvrez mes projets en systèmes, réseaux et développement web.':'Malo-Valentin Lequy, Computer Science Bachelor’s student at ESGI. Explore my systems, networking and web projects.';
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=language==='fr'?originals.get(el):(english[el.dataset.i18n]||originals.get(el));});
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el=>el.placeholder=placeholderText[el.dataset.placeholderI18n][language]);
  langButton.innerHTML=(language==='fr'?'EN':'FR')+' <span aria-hidden="true">↗</span>';
  langButton.setAttribute('aria-label',language==='fr'?'Switch to English':'Passer en français');
  nav.setAttribute('aria-label',language==='fr'?'Navigation principale':'Main navigation');
  document.querySelector('.wordmark').setAttribute('aria-label',language==='fr'?'Malo-Valentin Lequy — accueil':'Malo-Valentin Lequy — home');
  document.querySelector('.hero-art').setAttribute('aria-label',language==='fr'?'Illustration d’un laboratoire virtuel avec un hôte VMware, un serveur Windows et un poste client':'Illustration of a virtual laboratory with a VMware host, a Windows server and a client computer');
  document.querySelector('.dialog-close').setAttribute('aria-label',language==='fr'?'Fermer le détail du projet':'Close project details');
  updateMenuLabel();
  if(formState)updateFormStatus();
  if(formState==='pending')document.querySelector('.form-submit').textContent=messages[language].pending;
  if(activeProject)renderProject(activeProject);
}
langButton.addEventListener('click',()=>setLanguage(currentLanguage==='fr'?'en':'fr'));
function updateMenuLabel(){menu.setAttribute('aria-label',currentLanguage==='fr'?(menu.getAttribute('aria-expanded')==='true'?'Fermer le menu':'Ouvrir le menu'):(menu.getAttribute('aria-expanded')==='true'?'Close menu':'Open menu'));}
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');updateMenuLabel();}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);updateMenuLabel();});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header-inner'))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});

const details = {
  infra:{
    fr:{category:'01 / SYSTÈMES & RÉSEAUX',title:'Le laboratoire Windows Server',body:'<p>Un projet pour apprendre en pratiquant : créer un environnement virtuel, installer des rôles sur Windows Server puis tester leur fonctionnement avec un poste client.</p><h3>Ce qui est présenté dans le portfolio actuel</h3><ul><li>Deux machines virtuelles créées avec VMware.</li><li>Un environnement Windows Server et un poste client.</li><li>Un tutoriel d’installation à consulter en PDF.</li></ul><p class="detail-note"><strong>À compléter avec la version à jour</strong><br>Versions utilisées, rôles installés, architecture réseau, tests réalisés, difficultés résolues et captures des résultats. Ces informations ne sont pas encore disponibles dans le contenu utilisé pour cette maquette.</p>',link:'https://mvdu01.github.io/portfolio/Tutoriel_Windows_Server.pdf',button:'Consulter le tutoriel PDF ↗'},
    en:{category:'01 / SYSTEMS & NETWORKS',title:'The Windows Server laboratory',body:'<p>A hands-on learning project: create a virtual environment, install Windows Server roles and test them with a client computer.</p><h3>What the current portfolio presents</h3><ul><li>Two virtual machines created with VMware.</li><li>A Windows Server environment and a client computer.</li><li>An installation tutorial available as a PDF.</li></ul><p class="detail-note"><strong>To complete with updated content</strong><br>Software versions, installed roles, network architecture, tests, challenges solved and screenshots of the results. These details were not available in the content used for this concept.</p>',link:'https://mvdu01.github.io/portfolio/Tutoriel_Windows_Server.pdf',button:'Read the tutorial PDF · French ↗'}
  },
  web:{
    fr:{category:'02 / DÉVELOPPEMENT WEB',title:'TechWave, un événement fictif',body:'<p>Un site vitrine pour un festival consacré à l’innovation numérique. Le projet présente l’événement et propose un parcours vers l’inscription.</p><h3>Ce que l’on peut découvrir sur le site</h3><ul><li>Les informations pratiques : lieu, dates et horaires.</li><li>La présentation des intervenants.</li><li>Des liens vers la page d’inscription et un ajout à Google Agenda.</li><li>Une mise en ligne sur GitHub Pages.</li></ul><p class="detail-note"><strong>À compléter avec la version à jour</strong><br>Ton rôle exact, les technologies réellement utilisées, les choix d’interface, les tests sur mobile et le lien du dépôt. Le visuel présenté dans la maquette est illustratif.</p>',link:'https://mvdu01.github.io/TechWave/',button:'Ouvrir la démonstration ↗'},
    en:{category:'02 / WEB DEVELOPMENT',title:'TechWave, a fictional event',body:'<p>A showcase website for a digital innovation festival. The project introduces the event and guides visitors towards registration.</p><h3>What you can explore on the website</h3><ul><li>Practical information: location, dates and opening hours.</li><li>Speaker introductions.</li><li>Links to a registration page and a Google Calendar shortcut.</li><li>Publication on GitHub Pages.</li></ul><p class="detail-note"><strong>To complete with updated content</strong><br>Your exact role, the technologies used, interface decisions, mobile testing and the repository link. The project visual in this concept is illustrative.</p>',link:'https://mvdu01.github.io/TechWave/',button:'Open the demo ↗'}
  }
};
function renderProject(project){const detail=details[project][currentLanguage];document.querySelector('#dialog-category').textContent=detail.category;document.querySelector('#dialog-title').textContent=detail.title;document.querySelector('#dialog-body').innerHTML=detail.body;const link=document.createElement('a');link.className='button primary';link.href=detail.link;link.target='_blank';link.rel='noopener noreferrer';link.textContent=detail.button;document.querySelector('#dialog-body').append(link);}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{activeProject=button.dataset.project;renderProject(activeProject);dialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{activeProject=null;});
const contactForm=document.querySelector('#contact-form');
contactForm.addEventListener('submit',async event=>{
  event.preventDefault();
  if(contactForm.getAttribute('aria-busy')==='true'||!contactForm.reportValidity())return;
  if(location.protocol==='file:'){formState='local';updateFormStatus();return;}
  const data=new FormData(contactForm);
  if(data.get('_honey')){formState='success';updateFormStatus();return;}
  const submit=contactForm.querySelector('button[type="submit"]');
  contactForm.setAttribute('aria-busy','true');submit.disabled=true;
  formState='pending';updateFormStatus();submit.textContent=messages[currentLanguage].pending;
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),20000);
  try{
    const endpoint=new URL(contactForm.action);
    endpoint.pathname='/ajax'+endpoint.pathname;
    const response=await fetch(endpoint.href,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.fromEntries(data)),signal:controller.signal});
    const result=await response.json();
    if(!response.ok||!(result.success===true||result.success==='true'))throw new Error('Submission not confirmed');
    contactForm.reset();formState='success';
  }catch{formState='error';}
  finally{
    clearTimeout(timer);contactForm.setAttribute('aria-busy','false');submit.disabled=false;
    submit.innerHTML=currentLanguage==='fr'?originals.get(submit):english.formSubmit;
    updateFormStatus();
  }
});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px',threshold:0});document.querySelectorAll('#projets,#competences,#parcours').forEach(section=>observer.observe(section));}
