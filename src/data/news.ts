import type { Language } from "../lib/i18n";

type Localized<T> = Record<Language, T>;

export interface NewsLink {
  label: Localized<string>;
  href: string;
}

export interface NewsItem {
  slug: string;
  status: "upcoming" | "past" | "article";
  // Used only for ordering. Upcoming items are listed first, then newest first.
  sortDate: string;
  dateLabel: Localized<string>;
  location?: string;
  tag: Localized<string>;
  title: Localized<string>;
  summary: Localized<string>;
  // A paragraph starting with "## " renders as a section heading.
  body: Localized<string[]>;
  questions?: Localized<string[]>;
  takeaways?: Localized<Array<{ title: string; text: string }>>;
  // Overrides the default takeaways heading, which is worded for event recaps.
  takeawaysHeading?: Localized<string>;
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
      en: "29 September 2026",
      de: "29. September 2026",
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
  {
    slug: "evaluating-rag-agents",
    status: "article",
    sortDate: "2026-08-18",
    dateLabel: { en: "18 August 2026", de: "18. August 2026" },
    tag: { en: "GenAIOps", de: "GenAIOps" },
    title: {
      en: "The RAG agent that passed every demo and failed in week three",
      de: "Der RAG-Agent, der jede Demo bestand und in Woche drei scheiterte",
    },
    summary: {
      en: "A pattern we keep meeting: a RAG agent that looks right in the demo, then drifts in production. How we evaluate retrieval and answers separately, and gate releases on the result.",
      de: "Ein Muster, das uns immer wieder begegnet: Ein RAG-Agent überzeugt in der Demo und driftet dann im Betrieb. Wie wir Retrieval und Antworten getrennt bewerten und Releases daran koppeln.",
    },
    body: {
      en: [
        "We have seen this project many times. A team builds a RAG agent over its SOPs, contracts or support history. The demo goes well. Ten hand-picked questions get good answers and the agent goes live.",
        "Three weeks later the complaints start. A policy was updated and the agent still quotes the old one. A question about one supplier returns the terms of another. Nobody can say whether the last prompt change made things better or worse, because nobody measured before it.",
        "## “The model is fine. So where is it going wrong?”",
        "The cause is rarely the model. It is that the system was judged by impressions instead of by a test set. A RAG agent has at least two parts that fail in different ways: the retriever that finds the passages, and the generator that writes the answer. A single score called accuracy hides which one broke.",
        "## “Did it find the right passage, or just write a good answer?”",
        "So the first thing we do is split the evaluation. For retrieval we measure whether the right passages were found (context recall), whether the passages found were mostly relevant (context precision), and how high the right passage ranked. For generation we measure groundedness, meaning every claim in the answer is supported by the retrieved text, and answer relevance, meaning the answer addresses what was asked. Each dimension gets its own rubric. A judge prompt that scores everything at once produces muddy numbers. Separate metrics give separate diagnoses.",
        "## “Whose questions are we actually testing?”",
        "The second thing is a gold set built from the client's real material. We collect 100 to 300 actual questions from emails, tickets and operator interviews, including the awkward ones: questions the documents cannot answer, questions with outdated sources, and questions that span two documents. Domain experts write or verify the expected answer and the source passage. This set is small enough to review by hand and stays under version control.",
        "## “Can we trust the judge?”",
        "Third, we use an LLM as a judge for scale, but we do not trust it blindly. Judge models have known biases. They tend to favor longer answers and their own outputs, and different judges disagree. We calibrate the judge against a sample that humans have scored, and we send every failure and every borderline case to a person. The judge covers volume. People cover edge cases.",
        "## “Did this change help, or does it only feel better?”",
        "Fourth, the gold set becomes a release gate. Any change to a prompt, chunking rule, embedding model, index or base model runs the full set in CI. If groundedness or context recall drops below the agreed threshold, the change does not ship. This is the step that ends the argument about whether a change helped.",
        "## “What happens when the documents change?”",
        "Fifth, we keep measuring after launch. We sample live traces and score them on the same metrics, segmented by use case, and alert on the trend against a rolling baseline. Source documents change, so we also test for it directly: update a document, then check that the answer changes with it and that the old version is no longer cited. Failures found in production go back into the gold set, so the next release is tested against them.",
        "## “Now we can argue with numbers instead of opinions”",
        "In the engagements where we set this up, the pattern is the same. The first run of the gold set is uncomfortable, because it shows problems the demo hid. Most of them turn out to be retrieval problems: chunks cut in the wrong place, tables flattened into noise, missing metadata filters. Those are fixed without touching the model. Once the numbers are visible, the conversation with the operators changes from opinions to evidence, and autonomy can be widened step by step.",
      ],
      de: [
        "Dieses Projekt haben wir schon oft gesehen. Ein Team baut einen RAG-Agenten über seine SOPs, Verträge oder den Support-Verlauf. Die Demo läuft gut. Zehn handverlesene Fragen werden gut beantwortet, der Agent geht live.",
        "Drei Wochen später beginnen die Beschwerden. Eine Richtlinie wurde aktualisiert, der Agent zitiert weiter die alte. Eine Frage zu einem Lieferanten liefert die Konditionen eines anderen. Niemand kann sagen, ob die letzte Prompt-Änderung etwas verbessert oder verschlechtert hat, weil vorher nichts gemessen wurde.",
        "## „Das Modell ist in Ordnung. Wo geht es also schief?“",
        "Die Ursache ist selten das Modell. Das System wurde nach Eindrücken beurteilt statt anhand eines Testsatzes. Ein RAG-Agent hat mindestens zwei Teile, die auf unterschiedliche Weise versagen: den Retriever, der die Passagen findet, und den Generator, der die Antwort schreibt. Eine einzelne Kennzahl namens Genauigkeit verbirgt, welcher von beiden ausgefallen ist.",
        "## „Hat er die richtige Passage gefunden oder nur gut formuliert?“",
        "Deshalb trennen wir als Erstes die Bewertung. Beim Retrieval messen wir, ob die richtigen Passagen gefunden wurden (Context Recall), ob die gefundenen Passagen überwiegend relevant waren (Context Precision) und wie weit oben die richtige Passage lag. Bei der Generierung messen wir Groundedness, also ob jede Aussage der Antwort durch den abgerufenen Text gedeckt ist, und Answer Relevance, also ob die Antwort die gestellte Frage trifft. Jede Dimension erhält eine eigene Bewertungsvorlage. Ein Judge-Prompt, der alles auf einmal bewertet, liefert unscharfe Werte. Getrennte Kennzahlen liefern getrennte Diagnosen.",
        "## „Wessen Fragen testen wir eigentlich?“",
        "Zweitens bauen wir einen Gold-Satz aus dem echten Material des Kunden. Wir sammeln 100 bis 300 tatsächliche Fragen aus E-Mails, Tickets und Gesprächen mit den Bearbeitern, auch die unbequemen: Fragen, die die Dokumente nicht beantworten, Fragen mit veralteten Quellen und Fragen über zwei Dokumente hinweg. Fachexperten schreiben oder prüfen die erwartete Antwort und die Quellenpassage. Der Satz ist klein genug für eine manuelle Prüfung und liegt unter Versionskontrolle.",
        "## „Können wir dem Judge trauen?“",
        "Drittens setzen wir ein LLM als Judge ein, um zu skalieren, vertrauen ihm aber nicht blind. Judge-Modelle haben bekannte Verzerrungen. Sie bevorzugen tendenziell längere Antworten und ihre eigenen Ausgaben, und verschiedene Judges widersprechen sich. Wir kalibrieren den Judge an einer Stichprobe, die Menschen bewertet haben, und geben jeden Fehler und jeden Grenzfall an eine Person. Der Judge deckt das Volumen ab. Menschen decken die Randfälle ab.",
        "## „Hat die Änderung geholfen oder fühlt sie sich nur besser an?“",
        "Viertens wird der Gold-Satz zum Release-Gate. Jede Änderung an Prompt, Chunking-Regel, Embedding-Modell, Index oder Basismodell lässt den vollständigen Satz in der CI laufen. Fällt Groundedness oder Context Recall unter die vereinbarte Schwelle, wird die Änderung nicht ausgeliefert. Dieser Schritt beendet die Diskussion darüber, ob eine Änderung geholfen hat.",
        "## „Was passiert, wenn sich die Dokumente ändern?“",
        "Fünftens messen wir nach dem Start weiter. Wir ziehen Stichproben aus Live-Traces, bewerten sie mit denselben Kennzahlen, nach Anwendungsfall getrennt, und alarmieren bei Abweichungen vom gleitenden Referenzwert. Quelldokumente ändern sich, also testen wir das direkt: ein Dokument aktualisieren und prüfen, dass sich die Antwort mit ändert und die alte Version nicht mehr zitiert wird. Fehler aus dem Betrieb wandern zurück in den Gold-Satz, damit das nächste Release dagegen getestet wird.",
        "## „Jetzt können wir mit Zahlen statt mit Meinungen streiten“",
        "In den Projekten, in denen wir das aufgesetzt haben, ist das Muster gleich. Der erste Lauf des Gold-Satzes ist unbequem, weil er Probleme zeigt, die die Demo verborgen hat. Die meisten sind Retrieval-Probleme: an falscher Stelle getrennte Chunks, zu Rauschen geglättete Tabellen, fehlende Metadatenfilter. Sie lassen sich beheben, ohne das Modell anzufassen. Sobald die Zahlen sichtbar sind, wechselt das Gespräch mit den Bearbeitern von Meinungen zu Belegen, und die Autonomie lässt sich schrittweise erweitern.",
      ],
    },
    takeawaysHeading: {
      en: "What we put in place",
      de: "Was wir aufsetzen",
    },
    takeaways: {
      en: [
        {
          title: "Evaluate retrieval and answers separately",
          text: "Context recall, context precision and rank for the retriever. Groundedness and answer relevance for the generator. One rubric per dimension.",
        },
        {
          title: "Build the gold set from real questions",
          text: "100 to 300 questions from emails and tickets, including unanswerable, outdated and multi-document cases, verified by domain experts.",
        },
        {
          title: "Calibrate the judge, review the failures",
          text: "Use an LLM judge for volume, check it against human scores, and route every failure and borderline case to a person.",
        },
        {
          title: "Gate every change on the gold set",
          text: "Prompts, chunking, embeddings, indexes and models all run the full set in CI. Below threshold means no release.",
        },
        {
          title: "Keep measuring in production",
          text: "Score sampled live traces, alert on trends, test that document updates change answers, and feed production failures back into the gold set.",
        },
      ],
      de: [
        {
          title: "Retrieval und Antworten getrennt bewerten",
          text: "Context Recall, Context Precision und Rang für den Retriever. Groundedness und Answer Relevance für den Generator. Eine Bewertungsvorlage pro Dimension.",
        },
        {
          title: "Gold-Satz aus echten Fragen bauen",
          text: "100 bis 300 Fragen aus E-Mails und Tickets, darunter unbeantwortbare, veraltete und dokumentübergreifende Fälle, von Fachexperten geprüft.",
        },
        {
          title: "Judge kalibrieren, Fehler prüfen",
          text: "LLM-Judge für das Volumen, Abgleich mit menschlichen Bewertungen, jeder Fehler und Grenzfall geht an eine Person.",
        },
        {
          title: "Jede Änderung am Gold-Satz messen",
          text: "Prompts, Chunking, Embeddings, Indizes und Modelle laufen über den vollständigen Satz in der CI. Unter der Schwelle gibt es kein Release.",
        },
        {
          title: "Im Betrieb weiter messen",
          text: "Stichproben aus Live-Traces bewerten, bei Trends alarmieren, prüfen, dass Dokument-Updates die Antworten ändern, und Fehler aus dem Betrieb in den Gold-Satz zurückführen.",
        },
      ],
    },
    links: [],
  },
  {
    slug: "observability-for-llm-agents",
    status: "article",
    sortDate: "2026-08-04",
    dateLabel: { en: "4 August 2026", de: "4. August 2026" },
    tag: { en: "GenAIOps", de: "GenAIOps" },
    title: { en: "The agent that failed quietly for two days", de: "Der Agent, der zwei Tage lang leise versagte" },
    summary: { en: "Uptime was fine and nobody complained until a customer wrote in. What we trace, score and alert on so quality drops show up on a dashboard first.", de: "Die Verfügbarkeit war in Ordnung, und niemand beschwerte sich, bis ein Kunde schrieb. Was wir mitschneiden, bewerten und melden, damit Qualitätsabfälle zuerst im Dashboard auftauchen." },
    body: {
      en: [
        "Ordinary monitoring checks that a service is up. An AI agent can be up, fast and returning a clean response while giving wrong answers. We keep meeting teams that learned about a quality problem from a customer email, not from a dashboard.",
        "## “The dashboard is green. Why are people complaining?”",
        "Uptime, latency and error rate are the usual signals. They say nothing about whether an answer was correct, whether the right tool was called, or whether the agent quietly gave up and returned a polite non-answer. The failure is silent, so the first alert is a person.",
        "## “What did the agent actually do?”",
        "We start with traces. For each request we record the input, the retrieved context, every tool call with its arguments and result, the model version, the prompt version, the output, token counts and latency. Without this, a bad answer cannot be reproduced. With it, most incidents are diagnosed in minutes instead of days.",
        "## “Which signals tell us quality dropped?”",
        "We choose a few signals that match the workflow and score a sample of live traces. Typical ones are groundedness against the retrieved text, tool-call success, the rate of refusals and fallbacks, corrections made by users, and sentiment across a conversation. Scoring every trace is expensive and rarely needed. A sample, split by use case, shows a trend early enough to act on.",
        "## “When does a person get paged?”",
        "Alerts go on trends against a rolling baseline, not on single bad answers. A drop in groundedness for one document type goes to the owner of that pipeline. A rise in handoffs to humans is a signal as well, because it often means operators are losing trust before the numbers show it. Every confirmed failure becomes a test case, so the same fault does not come back unnoticed.",
        "## “Can the operators see this too?”",
        "We give workflow owners a plain view: volume, handoff rate, flagged answers and the reasons behind them. Operators decide when autonomy widens, so they need the same evidence the engineers have.",
      ],
      de: [
        "Normales Monitoring prüft, ob ein Dienst läuft. Ein KI-Agent kann laufen, schnell sein und saubere Antworten liefern und trotzdem falsch liegen. Wir treffen immer wieder Teams, die ein Qualitätsproblem aus einer Kunden-E-Mail erfahren haben und nicht aus einem Dashboard.",
        "## „Das Dashboard ist grün. Warum beschweren sich die Leute?“",
        "Verfügbarkeit, Latenz und Fehlerrate sind die üblichen Signale. Sie sagen nichts darüber, ob eine Antwort richtig war, ob das richtige Werkzeug aufgerufen wurde oder ob der Agent still aufgegeben und eine höfliche Nicht-Antwort geliefert hat. Der Fehler ist leise, also ist der erste Alarm ein Mensch.",
        "## „Was hat der Agent tatsächlich getan?“",
        "Wir beginnen mit Traces. Pro Anfrage halten wir die Eingabe, den abgerufenen Kontext, jeden Werkzeugaufruf mit Argumenten und Ergebnis, die Modellversion, die Prompt-Version, die Ausgabe, Token-Zahlen und Latenz fest. Ohne das lässt sich eine schlechte Antwort nicht nachstellen. Mit Traces sind die meisten Vorfälle in Minuten statt Tagen geklärt.",
        "## „Welche Signale zeigen, dass die Qualität gefallen ist?“",
        "Wir wählen wenige Signale, die zum Workflow passen, und bewerten eine Stichprobe der Live-Traces. Typisch sind Groundedness gegenüber dem abgerufenen Text, Erfolgsquote der Werkzeugaufrufe, Rate von Ablehnungen und Rückfällen, Korrekturen durch Nutzer und die Stimmung über ein Gespräch hinweg. Jeden Trace zu bewerten ist teuer und selten nötig. Eine Stichprobe, nach Anwendungsfall getrennt, zeigt Trends früh genug.",
        "## „Wann wird ein Mensch alarmiert?“",
        "Alarme richten sich nach Trends gegenüber einem gleitenden Referenzwert, nicht nach einzelnen schlechten Antworten. Ein Abfall der Groundedness bei einem Dokumenttyp geht an den Verantwortlichen dieser Pipeline. Auch mehr Übergaben an Menschen sind ein Signal, denn oft verlieren die Bearbeiter Vertrauen, bevor die Zahlen es zeigen. Jeder bestätigte Fehler wird zum Testfall, damit derselbe Fehler nicht unbemerkt zurückkehrt.",
        "## „Können die Bearbeiter das auch sehen?“",
        "Wir geben den Workflow-Verantwortlichen eine einfache Sicht: Volumen, Übergaberate, markierte Antworten und die Gründe dafür. Die Bearbeiter entscheiden, wann die Autonomie wächst, also brauchen sie dieselben Belege wie die Entwickler.",
      ],
    },
    takeawaysHeading: { en: "What we put in place", de: "Was wir aufsetzen" },
    takeaways: {
      en: [
        { title: "Trace every request", text: "Input, context, tool calls, model and prompt versions, output, tokens and latency, so any answer can be reproduced." },
        { title: "Score a sample of live traffic", text: "Groundedness, tool success, fallback rate, corrections and sentiment, split by use case." },
        { title: "Alert on trends", text: "Rolling baselines, routed to the owner of the affected pipeline." },
        { title: "Turn failures into tests", text: "Each confirmed incident joins the evaluation set." },
        { title: "Show operators the same evidence", text: "Volume, handoffs and flagged answers in a plain view." },
      ],
      de: [
        { title: "Jeden Request mitschneiden", text: "Eingabe, Kontext, Werkzeugaufrufe, Modell- und Prompt-Version, Ausgabe, Tokens und Latenz, damit sich jede Antwort nachstellen lässt." },
        { title: "Stichprobe des Live-Verkehrs bewerten", text: "Groundedness, Werkzeugerfolg, Rückfallrate, Korrekturen und Stimmung, nach Anwendungsfall getrennt." },
        { title: "Auf Trends alarmieren", text: "Gleitende Referenzwerte, geleitet an den Verantwortlichen der betroffenen Pipeline." },
        { title: "Fehler zu Tests machen", text: "Jeder bestätigte Vorfall kommt in den Evaluationssatz." },
        { title: "Bearbeitern dieselben Belege zeigen", text: "Volumen, Übergaben und markierte Antworten in einer einfachen Sicht." },
      ],
    },
    links: [],
  },
  {
    slug: "llm-cost-control",
    status: "article",
    sortDate: "2026-06-09",
    dateLabel: { en: "9 June 2026", de: "9. Juni 2026" },
    tag: { en: "GenAIOps", de: "GenAIOps" },
    title: { en: "The pilot cost almost nothing. The rollout bill did not.", de: "Der Pilot kostete fast nichts. Die Rechnung im Rollout schon." },
    summary: { en: "A pattern at the end of many pilots: usage grows and so does the model bill. How we find where the money goes and bring cost per finished task down without losing quality.", de: "Ein Muster am Ende vieler Piloten: Die Nutzung wächst und die Modellrechnung mit. Wie wir finden, wohin das Geld geht, und die Kosten pro erledigter Aufgabe senken, ohne Qualität zu verlieren." },
    body: {
      en: [
        "A pilot runs for a handful of users on a handful of documents. Cost is invisible. Then the workflow goes to the full team, volumes multiply, and the first monthly bill arrives. We have seen this at the end of many pilots, and the answer is rarely to switch the model off.",
        "## “Where is the money actually going?”",
        "We start by attributing cost. Every model call is tagged with the workflow, the step and the model, so we can see cost per request and per step. The surprises are usually the same: very long contexts, retries, agent loops that call a tool again and again, and a large model doing work a small one could do.",
        "## “Does this task need the big model?”",
        "Classification, extraction and routing are often fine on a smaller, cheaper model. Reasoning over conflicting sources may not be. We route by task and check the result against the evaluation set. If quality holds on the set, the cheaper route stays. If it does not, it goes back. The set makes this a measurement and not a guess.",
        "## “How much of this context is needed?”",
        "Most of the tokens in a RAG agent are retrieved text. We tune how many passages are passed in, rerank so the useful ones come first, cache stable prompt prefixes, and reuse answers to repeated questions where it is safe to do so. Each change is tested for groundedness before it ships.",
        "## “What stops a loop from running all night?”",
        "Agents need budgets. We set a maximum number of steps and tokens per task, limits per user and per workflow, and an alert when cost per task moves outside its normal range. A runaway loop then costs a few cents and a notification instead of an invoice.",
        "## “What does one finished task cost?”",
        "Price per token tells a team little. We track cost per completed task and compare it with what the manual process costs. That number decides whether the workflow expands to the next team, and it keeps the conversation with finance concrete.",
      ],
      de: [
        "Ein Pilot läuft für eine Handvoll Nutzer auf einer Handvoll Dokumente. Kosten sind unsichtbar. Dann geht der Workflow an das ganze Team, die Volumen vervielfachen sich, und die erste Monatsrechnung kommt. Das haben wir am Ende vieler Piloten gesehen, und die Antwort ist selten, das Modell abzuschalten.",
        "## „Wohin geht das Geld eigentlich?“",
        "Wir beginnen mit der Zuordnung der Kosten. Jeder Modellaufruf wird mit Workflow, Schritt und Modell markiert, damit wir Kosten pro Anfrage und pro Schritt sehen. Die Überraschungen sind meist dieselben: sehr lange Kontexte, Wiederholungen, Agentenschleifen, die ein Werkzeug immer wieder aufrufen, und ein großes Modell, das Arbeit macht, die ein kleines erledigen könnte.",
        "## „Braucht diese Aufgabe das große Modell?“",
        "Klassifikation, Extraktion und Routing laufen oft problemlos auf einem kleineren, günstigeren Modell. Das Abwägen zwischen widersprüchlichen Quellen vielleicht nicht. Wir routen nach Aufgabe und prüfen das Ergebnis am Evaluationssatz. Hält die Qualität, bleibt die günstigere Route. Wenn nicht, geht sie zurück. Der Satz macht daraus eine Messung statt einer Vermutung.",
        "## „Wie viel von diesem Kontext wird gebraucht?“",
        "Die meisten Tokens eines RAG-Agenten sind abgerufener Text. Wir stimmen ab, wie viele Passagen übergeben werden, ordnen per Reranking die nützlichen nach vorn, cachen stabile Prompt-Präfixe und verwenden Antworten auf wiederkehrende Fragen wieder, wo es sicher ist. Jede Änderung wird vor dem Release auf Groundedness geprüft.",
        "## „Was verhindert, dass eine Schleife die ganze Nacht läuft?“",
        "Agenten brauchen Budgets. Wir setzen eine Obergrenze für Schritte und Tokens pro Aufgabe, Limits pro Nutzer und Workflow und einen Alarm, wenn die Kosten pro Aufgabe ihren normalen Bereich verlassen. Eine durchgehende Schleife kostet dann ein paar Cent und eine Benachrichtigung statt einer Rechnung.",
        "## „Was kostet eine erledigte Aufgabe?“",
        "Der Preis pro Token sagt einem Team wenig. Wir verfolgen die Kosten pro abgeschlossener Aufgabe und vergleichen sie mit den Kosten des manuellen Prozesses. Diese Zahl entscheidet, ob der Workflow auf das nächste Team ausgeweitet wird, und sie hält das Gespräch mit dem Finanzbereich konkret.",
      ],
    },
    takeawaysHeading: { en: "What we put in place", de: "Was wir aufsetzen" },
    takeaways: {
      en: [
        { title: "Tag every call", text: "Workflow, step and model on each request, so cost can be attributed." },
        { title: "Route by task", text: "Cheaper models for classification and extraction, verified on the evaluation set." },
        { title: "Trim the context", text: "Fewer, better ranked passages, cached prefixes, safe answer reuse." },
        { title: "Set budgets", text: "Step and token limits, per-user caps and cost alerts." },
        { title: "Measure cost per finished task", text: "Compare with the manual process to decide on expansion." },
      ],
      de: [
        { title: "Jeden Aufruf markieren", text: "Workflow, Schritt und Modell pro Anfrage, damit sich Kosten zuordnen lassen." },
        { title: "Nach Aufgabe routen", text: "Günstigere Modelle für Klassifikation und Extraktion, am Evaluationssatz geprüft." },
        { title: "Kontext schlanker machen", text: "Weniger, besser sortierte Passagen, gecachte Präfixe, sichere Wiederverwendung von Antworten." },
        { title: "Budgets setzen", text: "Schritt- und Token-Limits, Obergrenzen pro Nutzer und Kostenalarme." },
        { title: "Kosten pro erledigter Aufgabe messen", text: "Mit dem manuellen Prozess vergleichen, um über die Ausweitung zu entscheiden." },
      ],
    },
    links: [],
  },
  {
    slug: "versioning-prompts-and-models",
    status: "article",
    sortDate: "2026-05-21",
    dateLabel: { en: "21 May 2026", de: "21. Mai 2026" },
    tag: { en: "GenAIOps", de: "GenAIOps" },
    title: { en: "Nobody could say which prompt was in production", de: "Niemand konnte sagen, welcher Prompt im Betrieb war" },
    summary: { en: "A wrong answer, three people who had edited the prompt, and a model that changed underneath. How we version the whole agent and release changes safely.", de: "Eine falsche Antwort, drei Personen, die den Prompt bearbeitet hatten, und ein Modell, das sich im Hintergrund änderte. Wie wir den gesamten Agenten versionieren und Änderungen sicher ausrollen." },
    body: {
      en: [
        "The first incident review on a new agent often starts with a simple question that nobody can answer. Which version of the prompt produced this reply? The prompt had been edited in a web console, a colleague had tweaked it the week before, and the model name pointed to an alias the provider updates on its own.",
        "## “Which version answered this?”",
        "An agent is more than a prompt. The behavior comes from the prompt, the model, the retrieval settings, the tools and their descriptions, and the guardrail rules together. We treat that set as one versioned bundle. Every trace records the bundle version, so any answer can be tied to the exact configuration that gave it.",
        "## “Why is the prompt not in the repository?”",
        "Prompts are code in everything but name. We keep them in version control, review changes like any other change, and tag a release. The edit that lived only in a console is the one that cannot be explained three weeks later.",
        "## “What happens when the provider updates the model?”",
        "We pin model versions instead of following an alias. When a new version is available, we run the evaluation set against it first and compare groundedness, retrieval-dependent answers and cost. We switch when the numbers support it, and we keep the previous version ready for a rollback.",
        "## “How do we roll out without betting everything?”",
        "We release in stages. A new bundle first runs in shadow mode on live traffic without affecting users, then reaches a small share of requests, and then widens if the metrics hold. If they do not, the rollback is one configuration change.",
        "## “Who signed this off?”",
        "Each release carries its evaluation results and the name of the person who approved it. When an auditor or a client asks why the agent behaved as it did on a given date, the answer is in the change log and not in someone's memory.",
      ],
      de: [
        "Die erste Vorfallbesprechung bei einem neuen Agenten beginnt oft mit einer einfachen Frage, die niemand beantworten kann. Welche Version des Prompts hat diese Antwort erzeugt? Der Prompt war in einer Web-Konsole bearbeitet worden, ein Kollege hatte ihn in der Woche davor angepasst, und der Modellname zeigte auf einen Alias, den der Anbieter von sich aus aktualisiert.",
        "## „Welche Version hat das beantwortet?“",
        "Ein Agent ist mehr als ein Prompt. Das Verhalten entsteht aus Prompt, Modell, Retrieval-Einstellungen, Werkzeugen samt Beschreibungen und Guardrail-Regeln zusammen. Wir behandeln diese Menge als ein versioniertes Bündel. Jeder Trace hält die Bündelversion fest, damit sich jede Antwort der exakten Konfiguration zuordnen lässt.",
        "## „Warum liegt der Prompt nicht im Repository?“",
        "Prompts sind Code in allem außer im Namen. Wir halten sie in der Versionskontrolle, prüfen Änderungen wie jede andere Änderung und taggen ein Release. Die Änderung, die nur in einer Konsole existierte, ist die, die sich drei Wochen später nicht erklären lässt.",
        "## „Was passiert, wenn der Anbieter das Modell aktualisiert?“",
        "Wir fixieren Modellversionen, statt einem Alias zu folgen. Steht eine neue Version bereit, lassen wir zuerst den Evaluationssatz darüber laufen und vergleichen Groundedness, retrievalabhängige Antworten und Kosten. Wir wechseln, wenn die Zahlen es stützen, und halten die vorherige Version für ein Rollback bereit.",
        "## „Wie rollen wir aus, ohne alles zu riskieren?“",
        "Wir veröffentlichen in Stufen. Ein neues Bündel läuft zuerst im Shadow-Modus auf Live-Verkehr, ohne Nutzer zu beeinflussen, erreicht dann einen kleinen Anteil der Anfragen und wird ausgeweitet, wenn die Kennzahlen halten. Tun sie das nicht, ist das Rollback eine einzige Konfigurationsänderung.",
        "## „Wer hat das freigegeben?“",
        "Jedes Release trägt seine Evaluationsergebnisse und den Namen der Person, die es freigegeben hat. Wenn ein Prüfer oder ein Kunde fragt, warum sich der Agent an einem bestimmten Tag so verhalten hat, steht die Antwort im Änderungsprotokoll und nicht in der Erinnerung von jemandem.",
      ],
    },
    takeawaysHeading: { en: "What we put in place", de: "Was wir aufsetzen" },
    takeaways: {
      en: [
        { title: "Version the whole bundle", text: "Prompt, model, retrieval settings, tools and guardrails as one release." },
        { title: "Keep prompts in version control", text: "Reviewed, tagged and reproducible." },
        { title: "Pin model versions", text: "Evaluate new versions first and keep a rollback ready." },
        { title: "Release in stages", text: "Shadow mode, small share of traffic, then wider." },
        { title: "Log approvals", text: "Evaluation results and an approver on every release." },
      ],
      de: [
        { title: "Das ganze Bündel versionieren", text: "Prompt, Modell, Retrieval-Einstellungen, Werkzeuge und Guardrails als ein Release." },
        { title: "Prompts in die Versionskontrolle", text: "Geprüft, getaggt und reproduzierbar." },
        { title: "Modellversionen fixieren", text: "Neue Versionen zuerst evaluieren und ein Rollback bereithalten." },
        { title: "In Stufen ausrollen", text: "Shadow-Modus, kleiner Verkehrsanteil, dann breiter." },
        { title: "Freigaben protokollieren", text: "Evaluationsergebnisse und ein Freigebender bei jedem Release." },
      ],
    },
    links: [],
  },
  {
    slug: "guardrails-and-human-review",
    status: "article",
    sortDate: "2026-04-14",
    dateLabel: { en: "14 April 2026", de: "14. April 2026" },
    tag: { en: "GenAIOps", de: "GenAIOps" },
    title: { en: "Where we put the human in a document agent", de: "Wo wir den Menschen in einem Dokumenten-Agenten platzieren" },
    summary: { en: "Review everything and the agent saves no time. Review nothing and the first error lands with a supplier. How we decide which outputs are checked by rules and which go to a person.", de: "Wer alles prüft, spart mit dem Agenten keine Zeit. Wer nichts prüft, schickt den ersten Fehler an einen Lieferanten. Wie wir entscheiden, welche Ergebnisse Regeln prüfen und welche an einen Menschen gehen." },
    body: {
      en: [
        "Teams usually pick one of two extremes. Either a person reviews every output, and the agent saves almost no time, or nobody reviews anything, and the first mistake reaches a supplier or a customer. Neither lasts. We design the review points deliberately, per action, from the start of the prototype.",
        "## “What is the worst thing this agent could do?”",
        "We list what the agent can do and rank each action by consequence: read, draft, write to a system, send externally, trigger a payment. A wrong summary is a small problem. A wrong message to a carrier or a wrong purchase order is a larger one. The ranking tells us where checks must be strict and where they can be light.",
        "## “Which outputs can we check without a person?”",
        "Deterministic checks come first because they are cheap and do not drift. We validate against a schema, confirm that every cited passage exists, check permissions on the data used, scan for personal data and apply the business rules the client already has. Many bad outputs are stopped here.",
        "## “When should it ask?”",
        "The agent hands over when specific triggers fire: low groundedness, conflicting sources, a high-value amount, a new supplier, or a request outside its scope. The handoff carries the draft, the sources and the reason, so the reviewer decides in a minute and does not start from zero.",
        "## “Is the reviewer really reviewing?”",
        "Human review decays. After a few hundred correct outputs, people click approve. We track the override rate and the time spent per review, and we audit a random sample of approved items. If nobody ever overrides anything, either the agent is very good or the review has stopped working, and we want to know which.",
        "## “How does autonomy grow?”",
        "Autonomy is earned per class of action. When an action type has a clean record against the evaluation set and in production, we reduce its review from every item to a sample, with the trail intact. The operators who own the workflow make that call, based on the evidence.",
      ],
      de: [
        "Teams wählen meist eines von zwei Extremen. Entweder prüft ein Mensch jedes Ergebnis, und der Agent spart kaum Zeit, oder niemand prüft etwas, und der erste Fehler erreicht einen Lieferanten oder Kunden. Beides hält nicht. Wir gestalten die Prüfpunkte gezielt, pro Aktion, ab dem Beginn des Prototyps.",
        "## „Was ist das Schlimmste, das dieser Agent tun könnte?“",
        "Wir listen auf, was der Agent tun kann, und ordnen jede Aktion nach ihrer Tragweite: lesen, entwerfen, in ein System schreiben, extern senden, eine Zahlung auslösen. Eine falsche Zusammenfassung ist ein kleines Problem. Eine falsche Nachricht an einen Spediteur oder eine falsche Bestellung ist ein größeres. Die Rangfolge zeigt, wo Prüfungen streng sein müssen und wo sie leicht sein dürfen.",
        "## „Welche Ergebnisse lassen sich ohne Menschen prüfen?“",
        "Deterministische Prüfungen kommen zuerst, weil sie günstig sind und nicht driften. Wir validieren gegen ein Schema, bestätigen, dass jede zitierte Passage existiert, prüfen die Berechtigungen auf die genutzten Daten, suchen nach personenbezogenen Daten und wenden die Geschäftsregeln an, die der Kunde schon hat. Viele schlechte Ergebnisse werden hier gestoppt.",
        "## „Wann soll er nachfragen?“",
        "Der Agent übergibt, wenn bestimmte Auslöser greifen: geringe Groundedness, widersprüchliche Quellen, ein hoher Betrag, ein neuer Lieferant oder eine Anfrage außerhalb seines Auftrags. Die Übergabe enthält Entwurf, Quellen und Grund, damit der Prüfer in einer Minute entscheidet und nicht bei null anfängt.",
        "## „Prüft der Prüfer wirklich?“",
        "Menschliche Prüfung lässt nach. Nach einigen hundert richtigen Ergebnissen klicken Menschen auf Freigeben. Wir verfolgen die Korrekturquote und die Zeit pro Prüfung und auditieren eine Zufallsstichprobe der freigegebenen Fälle. Wenn nie jemand etwas korrigiert, ist entweder der Agent sehr gut oder die Prüfung funktioniert nicht mehr, und wir wollen wissen, welches von beiden.",
        "## „Wie wächst die Autonomie?“",
        "Autonomie wird pro Aktionsklasse verdient. Hat ein Aktionstyp eine saubere Bilanz am Evaluationssatz und im Betrieb, senken wir seine Prüfung von jedem Fall auf eine Stichprobe, bei vollständiger Nachvollziehbarkeit. Die Bearbeiter, denen der Workflow gehört, treffen diese Entscheidung auf Basis der Belege.",
      ],
    },
    takeawaysHeading: { en: "What we put in place", de: "Was wir aufsetzen" },
    takeaways: {
      en: [
        { title: "Rank actions by consequence", text: "Read, draft, write, send, pay: stricter checks as the stakes rise." },
        { title: "Automate the cheap checks", text: "Schema, citations, permissions, personal data and business rules." },
        { title: "Define handoff triggers", text: "Low groundedness, conflicts, high value, new supplier, out of scope." },
        { title: "Watch the reviewer", text: "Override rate, time per review and sampled audits." },
        { title: "Widen autonomy per action type", text: "Based on a clean record and decided by the workflow owners." },
      ],
      de: [
        { title: "Aktionen nach Tragweite ordnen", text: "Lesen, entwerfen, schreiben, senden, zahlen: strengere Prüfung mit steigendem Risiko." },
        { title: "Günstige Prüfungen automatisieren", text: "Schema, Zitate, Berechtigungen, personenbezogene Daten und Geschäftsregeln." },
        { title: "Übergabe-Auslöser festlegen", text: "Geringe Groundedness, Konflikte, hoher Betrag, neuer Lieferant, außerhalb des Auftrags." },
        { title: "Den Prüfer beobachten", text: "Korrekturquote, Zeit pro Prüfung und Stichproben-Audits." },
        { title: "Autonomie pro Aktionstyp erweitern", text: "Auf Basis einer sauberen Bilanz, entschieden von den Workflow-Verantwortlichen." },
      ],
    },
    links: [],
  },
];

export const sortedNews = () =>
  [...newsItems].sort((a, b) => {
    const aUp = a.status === "upcoming";
    const bUp = b.status === "upcoming";
    if (aUp !== bUp) return aUp ? -1 : 1;
    return aUp
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
  article: string;
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
    heading: "News and events.",
    intro: "What we are doing beyond client work.",
    seriesLabel: "The series",
    upcoming: "Upcoming",
    recap: "Recap",
    article: "Article",
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
    heading: "News und Events.",
    intro: "Was wir jenseits der Kundenprojekte tun.",
    seriesLabel: "Die Reihe",
    upcoming: "Demnächst",
    recap: "Rückblick",
    article: "Artikel",
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
