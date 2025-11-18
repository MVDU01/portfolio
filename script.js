// === Formulaire de contact avec animation ===
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' }
  });

  if (response.ok) {
    form.reset();
    successMessage.classList.add('show');
    setTimeout(() => successMessage.classList.remove('show'), 4000);
  } else {
    alert('Erreur lors de l’envoi, veuillez réessayer.');
  }
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// === Animation de la timeline au scroll (cascade) ===
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('visible'), index * 300);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => observer.observe(item));

// === Gestion du changement de langue complet ===
const translations = {
  fr: {
    hero_title: "Bonjour, je suis Malo-Valentin",
    hero_subtitle: "Étudiant en Bachelor Informatique",
    hero_text: "Passionné par la cybersécurité, le développement web et l’innovation numérique.",
    cv_download: "📄 Télécharger mon CV",
    about_title: "À propos",
    about_text: "Je suis un étudiant en informatique curieux et motivé, avec une affinité particulière pour la cybersécurité et la création d’expériences web modernes.",
    projects_title: "Mes Projets",
    project1_title: "Simulation d'un réseau d'ordinateur",
    project1_text: "Simulation complète d’un réseau informatique avec Cisco Packet Tracer.",
    project2_title: "Site web pour un événement Tech",
    project2_text: "Création d'un site web moderne pour un événement technologique fictif.",
    skills_title: "Compétences",
    skill_cyber: "Cybersécurité",
    timeline_title: "Mon Parcours",
    timeline1_date: "2025 - Présent",
    timeline1_title: "Bachelor Informatique - ESGI",
    timeline1_text: "Découverte de différentes spécialisations.",
    timeline2_title: "Baccalauréat Technologique",
    timeline2_text: "Bac STI2D Spécialité SIN",
    socials_title: "Retrouvez-moi",
    linkedin_btn: "Mon LinkedIn",
    contact_title: "Contact",
    name_placeholder: "Votre nom",
    email_placeholder: "Votre email",
    message_placeholder: "Votre message",
    contact_button: "Envoyer",
    contact_success: "✅ Message envoyé avec succès !",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_timeline: "Parcours",
    nav_contact: "Contact",
    },
  en: {
    hero_title: "Hello, I'm Malo-Valentin",
    hero_subtitle: "Computer Science Bachelor's Student",
    hero_text: "Passionate about cybersecurity, web development, and digital innovation.",
    cv_download: "📄 Download my CV",
    about_title: "About",
    about_text: "I am a curious and motivated computer science student, with a particular interest in cybersecurity and creating modern web experiences.",
    projects_title: "Projects",
    project1_title: "Computer Network Simulation",
    project1_text: "Complete simulation of a computer network using Cisco Packet Tracer.",
    project2_title: "Tech Event Website",
    project2_text: "Creation of a modern website for a fictional tech event.",
    skills_title: "Skills",
    skill_cyber: "Cybersecurity",
    timeline_title: "Journey",
    timeline1_date: "2025 - Present",
    timeline1_title: "Computer Science Bachelor's - ESGI",
    timeline1_text: "Exploring different specializations.",
    timeline2_title: "Technological Baccalaureate",
    timeline2_text: "STI2D Bac, SIN specialization",
    socials_title: "Find me",
    linkedin_btn: "My LinkedIn",
    contact_title: "Contact",
    name_placeholder: "Name",
    email_placeholder: "Email",
    message_placeholder: "Your message",
    contact_button: "Send",
    contact_success: "✅ Your message has been sent successfully!",
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_timeline: "Journey",
    nav_contact: "Contact",
  }
};

let currentLang = "fr";

// Éléments du bouton
const langBtn = document.getElementById("lang-toggle");
const langFlag = document.getElementById("lang-flag");
const langText = document.getElementById("lang-text");

// Fonction qui met à jour le contenu du site
function setLanguage(lang) {
  for (const [id, text] of Object.entries(translations[lang])) {
    const el = document.getElementById(id);
    if (!el) continue;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else if (el.tagName === "BUTTON") {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  }
}

// Fonction qui met à jour le bouton pour montrer la langue cible
function updateLangButton(lang) {
  if (lang === "fr") {
    langFlag.src = "gb-flag.png";
    langFlag.alt = "EN";
    langText.textContent = "EN";
  } else {
    langFlag.src = "fr-flag.png";
    langFlag.alt = "FR";
    langText.textContent = "FR";
  }
}

// Gestion du clic
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  setLanguage(currentLang);
  updateLangButton(currentLang);
});

// Initialisation au chargement
setLanguage(currentLang);
updateLangButton(currentLang);
