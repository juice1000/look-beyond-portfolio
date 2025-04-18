type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.darkMode": "Dark Mode",
    "nav.lightMode": "Light Mode",
    "nav.normalVision": "Normal Vision",
    "nav.protanopia": "Protanopia (Red-Blind)",
    "nav.deuteranopia": "Deuteranopia (Green-Blind)",
    "nav.tritanopia": "Tritanopia (Blue-Blind)",

    // Hero Section
    "hero.title": "Build Smart, Lead Change.",
    "hero.subtitle": "We go beyond just building products...",
    "hero.cta": "See how we do it",
    "hero.service.1": "We Ideate",
    "hero.service.2": "We Ship",
    "hero.service.3": "We Scale",
    "hero.service.4": "We Empower",

    // Projects Section
    "projects.title": "Our Projects",
    "projects.subtitle":
      "Explore our portfolio of innovative solutions across web, mobile, and AI technologies.",
    "projects.viewMore": "View More Projects",
    "projects.categories.top": "Top",
    "projects.categories.web": "Web",
    "projects.categories.ai": "AI",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Ready to start your next project? We'd love to hear from you and discuss how we can help bring your vision to life.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out to us through any of these channels",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Address",

    "map.title": "Operating across the globe",
    "map.subtitle":
      "Our international team offers customized support, leveraging local insights for global solutions.",
  },
  de: {
    // Navbar
    "nav.home": "Startseite",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "nav.darkMode": "Dunkelmodus",
    "nav.lightMode": "Hellmodus",
    "nav.normalVision": "Normale Sicht",
    "nav.protanopia": "Protanopie (Rotblind)",
    "nav.deuteranopia": "Deuteranopie (Grünblind)",
    "nav.tritanopia": "Tritanopie (Blaublind)",

    // Hero Section
    "hero.title": "Build Smart, Lead Change.",
    "hero.subtitle":
      "Wir gehen über das bloße Erstellen von Produkten hinaus...",
    "hero.cta": "Erfahren Sie wie",
    "hero.service.1": "Wir Entwickeln",
    "hero.service.2": "Wir Liefern",
    "hero.service.3": "Wir Skalieren",
    "hero.service.4": "Wir Empowern",

    // Projects Section
    "projects.title": "Unsere Projekte",
    "projects.subtitle":
      "Entdecken Sie unser Portfolio innovativer Lösungen in den Bereichen Web, Mobile und KI.",
    "projects.viewMore": "Weitere Projekte",
    "projects.categories.top": "Top",
    "projects.categories.web": "Web",
    "projects.categories.ai": "KI",

    // Contact Section
    "contact.title": "Kontaktieren Sie uns",
    "contact.subtitle":
      "Bereit für Ihr nächstes Projekt? Wir freuen uns darauf, von Ihnen zu hören und zu besprechen, wie wir Ihre Vision verwirklichen können.",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.subtitle": "Erreichen Sie uns über diese Kanäle",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.address": "Adresse",

    "map.title": "Weltweit im Einsatz",
    "map.subtitle":
      "Unser Team bietet maßgeschneiderte Unterstützung, indem es lokale Erkenntnisse für globale Lösungen nutzt.",
  },
};

export type Language = "en" | "de";

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key;
}
