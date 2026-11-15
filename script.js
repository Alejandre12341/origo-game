// Origo Games site settings
// Add the official application/contact email before publishing.
// Example: const CONTACT_EMAIL = "hello@your-domain.com";
const CONTACT_EMAIL = "";

const translations = {
  en: {
    navAbout:"About",navGroup:"The Group",navApproach:"Our approach",navProjects:"Projects",navContact:"Contact",navJoin:"Join the group",
    heroEyebrow:"A SELECTIVE GAMING GROUP",heroTitle:"Different origins.<br><em>One direction.</em>",heroText:"Origo brings together people, studios and companies with a shared ambition: to shape what comes next in games.",heroPrimary:"Discover the group",heroSecondary:"Get to know Origo",heroFoot:"A connected ecosystem for game creators.",scroll:"SCROLL TO EXPLORE",
    aboutKicker:"WHO WE ARE",aboutTitle:"A shared platform<br>for <em>independent ambition.</em>",aboutText:"Origo Games is the company behind Origo Game Group — a curated network designed to connect talent, creative teams, studios and businesses across the video game industry.",aboutText2:"We believe the strongest ideas grow when the right people meet. Our role is to create the conditions for meaningful collaboration, shared knowledge and long-term opportunities.",
    principle1Title:"Curated by design",principle1Text:"Membership is selective. Every connection starts with shared values and a clear reason to collaborate.",principle2Title:"Stronger together",principle2Text:"We connect complementary skills, experience and perspectives across the industry.",principle3Title:"Built for what’s next",principle3Text:"We focus on sustainable relationships and opportunities that help members move forward.",
    groupKicker:"THE ECOSYSTEM",groupTitle:"One group.<br><em>Many perspectives.</em>",groupText:"Origo Game Group is the collective: a growing ecosystem of selected contributors from across the games landscape.",ecosystemCore:"THE COLLECTIVE",nodePeople:"PEOPLE",nodePeopleSub:"Talent & specialists",nodeStudios:"STUDIOS",nodeStudiosSub:"Creative teams",nodeCompanies:"COMPANIES",nodeCompaniesSub:"Industry partners",groupNote:"Membership is reviewed individually. The group is not an open directory or automatic affiliation programme.",
    approachKicker:"HOW IT WORKS",approachTitle:"Good connections<br>are <em>intentional.</em>",approachText:"Joining Origo Game Group is a considered process. We take the time to understand each applicant and how they could contribute to the wider ecosystem.",step1Title:"Apply",step1Text:"Tell us who you are, what you do and what you hope to build.",step2Title:"Review",step2Text:"Our team reviews your background, goals and potential fit.",step3Title:"Selection",step3Text:"We decide whether there is a strong mutual fit and a meaningful place in the group.",step4Title:"Connect",step4Text:"If selected, we work out the right way to participate and collaborate.",
    projectsKicker:"SELECTED WORK",projectsTitle:"Ideas in<br><em>motion.</em>",projectsText:"A home for the games, initiatives and collaborations connected to our ecosystem. More will be revealed as the group grows.",comingSoon:"COMING INTO FOCUS",projectPlaceholderTitle:"The next chapter is taking shape.",projectPlaceholderText:"Our projects and member spotlights will appear here.",
    joinKicker:"BECOME PART OF THE GROUP",joinTitle:"Think you belong<br><em>in the picture?</em>",joinText:"We’re interested in hearing from ambitious people, studios and companies who share our outlook. Tell us about yourself.",formName:"Name / Organisation",formEmail:"Email address",formType:"I am a...",typeIndividual:"Individual",typeStudio:"Studio",typeCompany:"Company",formMessage:"A little about you",formSubmit:"Prepare application",formNote:"This demo prepares an email application. The contact address must be configured in script.js before launch.",
    contactKicker:"START A CONVERSATION",contactTitle:"Let’s make<br><em>things happen.</em>",contactText:"For partnerships, business enquiries or general questions, get in touch with the Origo team.",contactCta:"Contact Origo",footerLine:"Connecting the people shaping the future of games.",backTop:"BACK TO TOP ↑",footerRights:"ALL RIGHTS RESERVED",
    placeholderName:"Your name or studio",placeholderEmail:"you@example.com",placeholderMessage:"What do you do, and why Origo?",menuOpen:"Open navigation",menuClose:"Close navigation",emailMissing:"The application form is ready, but the contact email has not been configured yet. Please add CONTACT_EMAIL in script.js.",emailSubject:"Origo Game Group application"
  },
  es: {
    navAbout:"Nosotros",navGroup:"El grupo",navApproach:"Cómo funciona",navProjects:"Proyectos",navContact:"Contacto",navJoin:"Únete al grupo",
    heroEyebrow:"UN GRUPO GAMING SELECTIVO",heroTitle:"Distintos orígenes.<br><em>Una dirección.</em>",heroText:"Origo reúne a personas, estudios y empresas con una ambición compartida: dar forma al futuro de los videojuegos.",heroPrimary:"Descubre el grupo",heroSecondary:"Conoce Origo",heroFoot:"Un ecosistema conectado para quienes crean videojuegos.",scroll:"DESLIZA PARA EXPLORAR",
    aboutKicker:"QUIÉNES SOMOS",aboutTitle:"Una plataforma común<br>para la <em>ambición independiente.</em>",aboutText:"Origo Games es la empresa detrás de Origo Game Group: una red seleccionada creada para conectar talento, equipos creativos, estudios y empresas de la industria del videojuego.",aboutText2:"Creemos que las mejores ideas crecen cuando las personas adecuadas se encuentran. Nuestro papel es crear las condiciones para una colaboración significativa, compartir conocimiento y generar oportunidades a largo plazo.",
    principle1Title:"Selección con criterio",principle1Text:"La pertenencia es selectiva. Cada conexión parte de valores compartidos y de una razón clara para colaborar.",principle2Title:"Más fuertes juntos",principle2Text:"Conectamos habilidades, experiencias y perspectivas complementarias de la industria.",principle3Title:"Preparados para el futuro",principle3Text:"Apostamos por relaciones sostenibles y oportunidades que ayuden a avanzar a los miembros.",
    groupKicker:"EL ECOSISTEMA",groupTitle:"Un grupo.<br><em>Muchas perspectivas.</em>",groupText:"Origo Game Group es el colectivo: un ecosistema en crecimiento formado por colaboradores seleccionados de distintos ámbitos del videojuego.",ecosystemCore:"EL COLECTIVO",nodePeople:"PERSONAS",nodePeopleSub:"Talento y especialistas",nodeStudios:"ESTUDIOS",nodeStudiosSub:"Equipos creativos",nodeCompanies:"EMPRESAS",nodeCompaniesSub:"Socios de la industria",groupNote:"Cada incorporación se evalúa individualmente. El grupo no es un directorio abierto ni un programa de afiliación automática.",
    approachKicker:"CÓMO FUNCIONA",approachTitle:"Las buenas conexiones<br>son <em>intencionadas.</em>",approachText:"Entrar en Origo Game Group es un proceso meditado. Nos tomamos el tiempo necesario para conocer a cada candidato y entender cómo podría contribuir al ecosistema.",step1Title:"Solicitud",step1Text:"Cuéntanos quién eres, a qué te dedicas y qué te gustaría crear.",step2Title:"Revisión",step2Text:"Nuestro equipo revisa tu trayectoria, tus objetivos y tu posible encaje.",step3Title:"Selección",step3Text:"Valoramos si existe una buena afinidad mutua y un lugar significativo en el grupo.",step4Title:"Conexión",step4Text:"Si eres seleccionado, definimos la mejor forma de participar y colaborar.",
    projectsKicker:"TRABAJO SELECCIONADO",projectsTitle:"Ideas en<br><em>movimiento.</em>",projectsText:"Un espacio para los videojuegos, iniciativas y colaboraciones vinculados a nuestro ecosistema. Iremos mostrando más a medida que crezca el grupo.",comingSoon:"TOMANDO FORMA",projectPlaceholderTitle:"El siguiente capítulo está tomando forma.",projectPlaceholderText:"Aquí aparecerán nuestros proyectos y miembros destacados.",
    joinKicker:"FORMA PARTE DEL GRUPO",joinTitle:"¿Crees que encajas<br><em>en este proyecto?</em>",joinText:"Queremos conocer a personas, estudios y empresas con ambición y una visión afín. Cuéntanos quién eres.",formName:"Nombre / Organización",formEmail:"Correo electrónico",formType:"Soy...",typeIndividual:"Profesional",typeStudio:"Estudio",typeCompany:"Empresa",formMessage:"Cuéntanos algo sobre ti",formSubmit:"Preparar solicitud",formNote:"Esta versión prepara una solicitud por correo electrónico. Debes configurar la dirección de contacto en script.js antes de publicar.",
    contactKicker:"EMPECEMOS A HABLAR",contactTitle:"Hagamos que<br><em>pasen cosas.</em>",contactText:"Para colaboraciones, consultas empresariales o preguntas generales, ponte en contacto con el equipo de Origo.",contactCta:"Contactar con Origo",footerLine:"Conectamos a las personas que dan forma al futuro de los videojuegos.",backTop:"VOLVER ARRIBA ↑",footerRights:"TODOS LOS DERECHOS RESERVADOS",
    placeholderName:"Tu nombre o estudio",placeholderEmail:"tu@ejemplo.com",placeholderMessage:"¿A qué te dedicas y por qué Origo?",menuOpen:"Abrir navegación",menuClose:"Cerrar navegación",emailMissing:"El formulario está preparado, pero aún no se ha configurado el correo de contacto. Añade CONTACT_EMAIL en script.js.",emailSubject:"Solicitud para Origo Game Group"
  }
};

let currentLanguage = "en";
const langButton = document.getElementById("languageToggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  const t = translations[language];
  document.querySelector('input[name="name"]').placeholder = t.placeholderName;
  document.querySelector('input[name="email"]').placeholder = t.placeholderEmail;
  document.querySelector('textarea[name="message"]').placeholder = t.placeholderMessage;
  langButton.innerHTML = language === "en" ? '<u>ES</u> <span>/</span> EN' : 'ES <span>/</span> <u>EN</u>';
  menuToggle.setAttribute("aria-label", t.menuOpen);
  document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", closeMenu));
}
function closeMenu(){nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label",translations[currentLanguage].menuOpen)}
langButton.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "es" : "en"));
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen);
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("applicationForm").addEventListener("submit", event => {
  event.preventDefault();
  const t = translations[currentLanguage];
  if (!CONTACT_EMAIL || CONTACT_EMAIL.includes("your-domain")) {
    alert(t.emailMissing);
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(t.emailSubject);
  const body = encodeURIComponent(
    `Name / Organisation: ${data.get("name")}\nEmail: ${data.get("email")}\nType: ${data.get("type")}\n\n${data.get("message") || ""}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
setLanguage("en");
