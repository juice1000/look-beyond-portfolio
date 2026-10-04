import type { Language } from "../lib/i18n";

type Localized<T> = Record<Language, T>;

export interface NewsLink {
  label: Localized<string>;
  href: string;
}

export interface NewsItem {
  slug: string;
  status: "upcoming" | "past";
  // Used only for ordering. Upcoming items are listed first, then newest first.
  sortDate: string;
  dateLabel: Localized<string>;
  location: string;
  tag: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
  body: Localized<string[]>;
  questions?: Localized<string[]>;
  takeaways?: Localized<Array<{ title: string; text: string }>>;
  // Image paths, e.g. "/images/news/ai-supper-club-riyadh/cover.jpg".
  // Both are optional: the pages render cleanly without photos.
  cover?: string;
  gallery?: string[];
  links: NewsLink[];
}

export const newsSeries = {
  name: "AI Supper Club",
  description: {
    en: "A dinner series for people who lead, build and implement AI in organizations. Each dinner gathers a small group of AI leaders and practitioners.",
    de: "Eine Dinner-Reihe für Menschen, die KI in Organisationen führen, bauen und umsetzen. Jedes Dinner bringt eine kleine Gruppe von KI-Verantwortlichen und Praktikern zusammen.",
  } as Localized<string>,
  href: "https://luma.com/ai-supper-club",
};

export const newsItems: NewsItem[] = [
  {
    slug: "ai-supper-club-bangalore",
    status: "upcoming",
    sortDate: "2026-10-08",
    dateLabel: {
      en: "Thursday, 8 October 2026, 8:00 to 10:30 PM IST",
      de: "Donnerstag, 8. Oktober 2026, 20:00 bis 22:30 Uhr IST",
    },
    location: "Bengaluru, India",
    tag: { en: "AI Supper Club", de: "AI Supper Club" },
    title: {
      en: "AI Supper Club Bangalore: Reliability. Economics. Business Impact.",
      de: "AI Supper Club Bangalore: Reliability. Economics. Business Impact.",
    },
    summary: {
      en: "What breaks between AI-agent pilots and production in Indian enterprises? A small dinner for people who deploy, govern and invest in enterprise AI.",
      de: "Was bricht zwischen KI-Agenten-Pilot und Produktion in indischen Unternehmen? Ein kleines Dinner für Menschen, die Enterprise-KI einsetzen, steuern und finanzieren.",
    },
    body: {
      en: [
        "AI agents are easy to demonstrate. Making them reliable, economical and useful enough to become part of real enterprise operations is considerably harder.",
        "The Bangalore dinner brings together a small group of people who are deploying, governing and investing in enterprise AI, to exchange insights on what happens after the pilot.",
        "In Bangalore, that means moving quickly without losing reliability: integrating with complex enterprise systems, evaluating agent performance, managing infrastructure and model costs, driving adoption across large organizations and demonstrating measurable business impact.",
      ],
      de: [
        "KI-Agenten lassen sich leicht vorführen. Sie so zuverlässig, wirtschaftlich und nützlich zu machen, dass sie Teil des echten Unternehmensbetriebs werden, ist deutlich schwieriger.",
        "Das Dinner in Bangalore bringt eine kleine Gruppe von Menschen zusammen, die Enterprise-KI einsetzen, steuern und finanzieren, um sich darüber auszutauschen, was nach dem Pilot passiert.",
        "In Bangalore heißt das: schnell vorankommen, ohne Zuverlässigkeit zu verlieren. Dazu gehören die Anbindung an komplexe Unternehmenssysteme, die Bewertung der Agentenleistung, der Umgang mit Infrastruktur- und Modellkosten, Akzeptanz in großen Organisationen und der Nachweis messbaren Geschäftsnutzens.",
      ],
    },
    questions: {
      en: [
        "What has actually made it into production?",
        "Where do reliability, economics, integration or adoption break?",
        "What evidence of business impact gets the next investment approved?",
      ],
      de: [
        "Was hat es tatsächlich in die Produktion geschafft?",
        "Wo brechen Zuverlässigkeit, Wirtschaftlichkeit, Integration oder Akzeptanz?",
        "Welcher Nachweis von Geschäftsnutzen bringt die nächste Investition durch?",
      ],
    },
    links: [
      {
        label: { en: "Request a seat on Luma", de: "Platz auf Luma anfragen" },
        href: "https://luma.com/zimon2tq",
      },
    ],
  },
  {
    slug: "ai-supper-club-riyadh",
    status: "past",
    sortDate: "2026-09-29",
    dateLabel: {
      en: "Tuesday, 29 September 2026",
      de: "Dienstag, 29. September 2026",
    },
    location: "Riyadh, Saudi Arabia",
    tag: { en: "AI Supper Club", de: "AI Supper Club" },
    title: {
      en: "The first AI Supper Club, in Riyadh",
      de: "Der erste AI Supper Club in Riad",
    },
    summary: {
      en: "Around 50 people applied for eight seats. We talked about what it takes to move AI into production, and why trust matters as much as technology.",
      de: "Rund 50 Personen bewarben sich auf acht Plätze. Wir sprachen darüber, was es braucht, um KI in die Produktion zu bringen, und warum Vertrauen so wichtig ist wie Technik.",
    },
    body: {
      en: [
        "I arrived in Riyadh knowing nobody. I wanted to hear firsthand how AI is actually being used in Saudi Arabia, beyond the headlines and ambitious announcements. So I organized a dinner.",
        "Around 50 people applied for the first AI Supper Club. Eight joined, from government, industry, finance and tech. There were no slides and no pitches. Over a long dinner high above the city, each person spoke about what they see in their own organization, and the conversation ran well past the plates.",
        "Everyone at the table already uses AI every day. What kept coming up was the distance between that daily use and AI that an organization can rely on. That distance is the work we do at Look Beyond, so it was a good table to sit at.",
      ],
      de: [
        "Ich kam in Riad an, ohne jemanden zu kennen. Ich wollte aus erster Hand hören, wie KI in Saudi-Arabien tatsächlich genutzt wird, jenseits von Schlagzeilen und ehrgeizigen Ankündigungen. Also organisierte ich ein Dinner.",
        "Rund 50 Personen bewarben sich für den ersten AI Supper Club. Acht kamen zusammen, aus Verwaltung, Industrie, Finanzwesen und Tech. Es gab keine Folien und keine Pitches. Bei einem langen Dinner hoch über der Stadt erzählte jeder, was er in der eigenen Organisation sieht, und das Gespräch ging weit über das Essen hinaus.",
        "Alle am Tisch nutzen KI bereits täglich. Immer wieder ging es um den Abstand zwischen dieser täglichen Nutzung und KI, auf die sich eine Organisation verlassen kann. Dieser Abstand ist die Arbeit von Look Beyond, es war also der richtige Tisch.",
      ],
    },
    takeaways: {
      en: [
        {
          title: "People stay in the loop",
          text: "For specialist work, AI output still has to be checked. The harder question is accountability: when an AI-assisted decision is wrong, who answers for it?",
        },
        {
          title: "Adopting agents is a bet",
          text: "An agent may not be right every time today. Teams adopt it because they expect it to get better, faster and cheaper. How much imperfection an organization accepts at the start differs a lot, and it decides how a project has to be delivered: in phases, with a clear path to the quality bar.",
        },
        {
          title: "Slow processes are the obvious target",
          text: "Multi-step approvals that take months were the examples people reached for first. With agents, many of those steps could take hours. The value is easy to see. Getting decision-makers to trust the result is the hard part.",
        },
        {
          title: "Trust travels through references",
          text: "Buyers tend to pick the safest, best-known option. One early customer running a new product on a single use case often changes that for everyone who comes after.",
        },
        {
          title: "Adoption is harder than the build",
          text: "Several guests agreed that building the software is rarely the hardest part. Getting everyone to follow the new way of working is. That gap needs people who can translate between technical teams and the business.",
        },
        {
          title: "Agents that watch agents",
          text: "One conversation went deep on monitoring. A supervising layer watches agents in production for signals such as user sentiment across a conversation, or factual errors. It sends weak ones back for improvement, tests the fix in a sandbox and releases it again. It only works with clear criteria for what good looks like, which is the idea behind how we test and monitor agents.",
        },
      ],
      de: [
        {
          title: "Der Mensch bleibt im Prozess",
          text: "Bei Fachaufgaben muss das Ergebnis der KI weiter geprüft werden. Die schwierigere Frage ist die Verantwortung: Wer steht dafür ein, wenn eine KI-gestützte Entscheidung falsch ist?",
        },
        {
          title: "Agenten einzuführen ist eine Wette",
          text: "Ein Agent liegt heute nicht jedes Mal richtig. Teams setzen ihn ein, weil sie erwarten, dass er besser, schneller und günstiger wird. Wie viel Unvollkommenheit eine Organisation zu Beginn akzeptiert, unterscheidet sich stark und bestimmt, wie ein Projekt geliefert werden muss: in Phasen, mit klarem Weg zur Qualitätslatte.",
        },
        {
          title: "Langsame Prozesse sind das naheliegende Ziel",
          text: "Mehrstufige Genehmigungen, die Monate dauern, waren die ersten Beispiele. Mit Agenten könnten viele dieser Schritte Stunden dauern. Der Nutzen ist leicht zu sehen. Entscheider vom Ergebnis zu überzeugen, ist der schwierige Teil.",
        },
        {
          title: "Vertrauen läuft über Referenzen",
          text: "Käufer wählen meist die sicherste, bekannteste Option. Ein früher Kunde, der ein neues Produkt für einen einzigen Anwendungsfall einsetzt, ändert das oft für alle, die danach kommen.",
        },
        {
          title: "Einführung ist schwerer als der Bau",
          text: "Mehrere Gäste waren sich einig, dass der Bau der Software selten der schwierigste Teil ist. Alle für die neue Arbeitsweise zu gewinnen, ist es. Diese Lücke braucht Menschen, die zwischen Technik und Fachbereich übersetzen.",
        },
        {
          title: "Agenten, die Agenten beobachten",
          text: "Ein Gespräch ging tief in das Thema Monitoring. Eine übergeordnete Ebene beobachtet Agenten im Betrieb anhand von Signalen wie der Nutzerstimmung über ein Gespräch hinweg oder faktischen Fehlern. Schwache Agenten schickt sie zur Verbesserung zurück, testet die Korrektur in einer Sandbox und gibt sie wieder frei. Das funktioniert nur mit klaren Kriterien dafür, was gut ist. Genau das ist die Idee dahinter, wie wir Agenten testen und überwachen.",
        },
      ],
    },
    cover: "/images/news/ai-supper-club-riyadh/view.jpg",
    gallery: [
      "/images/news/ai-supper-club-riyadh/table.jpg",
      "/images/news/ai-supper-club-riyadh/dinner.jpg",
      "/images/news/ai-supper-club-riyadh/elevator.jpg",
    ],
    links: [
      {
        label: { en: "Read the post on LinkedIn", de: "Beitrag auf LinkedIn lesen" },
        href: "https://www.linkedin.com/posts/julien-look_it-was-my-very-first-night-in-the-gulf-i-activity-7511837055468081152-xzvh",
      },
    ],
  },
];

export const sortedNews = () =>
  [...newsItems].sort((a, b) => {
    if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
    return a.status === "upcoming"
      ? a.sortDate.localeCompare(b.sortDate)
      : b.sortDate.localeCompare(a.sortDate);
  });

export const findNews = (slug: string | undefined) =>
  newsItems.find((item) => item.slug === slug);

export const newsUi: Localized<{
  eyebrow: string;
  heading: string;
  intro: string;
  seriesLabel: string;
  upcoming: string;
  recap: string;
  readMore: string;
  allNews: string;
  back: string;
  questions: string;
  takeaways: string;
  gallery: string;
  seriesLink: string;
  approval: string;
}> = {
  en: {
    eyebrow: "News",
    heading: "Dinners about AI in production.",
    intro: "What we are doing beyond client work.",
    seriesLabel: "The series",
    upcoming: "Upcoming",
    recap: "Recap",
    readMore: "Read more",
    allNews: "All news",
    back: "Back",
    questions: "Three questions for the evening",
    takeaways: "What stayed with us",
    gallery: "From the evening",
    seriesLink: "AI Supper Club on Luma",
    approval: "Seats are limited and registration is subject to host approval.",
  },
  de: {
    eyebrow: "News",
    heading: "Dinner über KI im Betrieb.",
    intro: "Was wir jenseits der Kundenprojekte tun.",
    seriesLabel: "Die Reihe",
    upcoming: "Demnächst",
    recap: "Rückblick",
    readMore: "Weiterlesen",
    allNews: "Alle News",
    back: "Zurück",
    questions: "Drei Fragen für den Abend",
    takeaways: "Was bei uns hängen blieb",
    gallery: "Vom Abend",
    seriesLink: "AI Supper Club auf Luma",
    approval: "Die Plätze sind begrenzt, die Anmeldung wird vom Gastgeber bestätigt.",
  },
};
