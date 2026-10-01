import { Language } from "../lib/i18n";

export type IndustryAccent = "teal" | "amber" | "violet";

export interface IndustryWorkflow {
  id: string;
  label: string;
  accent: IndustryAccent;
  problem: string;
  positioning: string;
  workflow: string[];
  useCases: string[];
  cta: string;
}

export interface LandingPageContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    lifecycle: string[];
  };
  outcomes: {
    eyebrow: string;
    heading: string;
    callout: {
      text: string;
      source: string;
    };
    items: Array<{
      title: string;
      description: string;
      linkLabel?: string;
    }>;
    linkLabel: string;
  };
  practice: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  failures: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    evidence: Array<{
      text: string;
      source: string;
    }>;
  };
  problems: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  system: {
    eyebrow: string;
    heading: string;
    description: string;
    principle: string;
    signalLabel: string;
    layers: Array<{
      title: string;
      description: string;
      signal: string;
    }>;
  };
  scorecard: {
    eyebrow: string;
    heading: string;
    description: string;
    groups: Array<{
      title: string;
      description: string;
    }>;
    closing: string;
  };
  industries: {
    eyebrow: string;
    heading: string;
    description: string;
    workflows: IndustryWorkflow[];
  };
  agents: {
    eyebrow: string;
    heading: string;
    description: string;
    items: string[];
  };
  security: {
    eyebrow: string;
    heading: string;
    description: string;
    controls: string[];
  };
  implementation: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  finalCta: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    points: string[];
  };
}

const englishContent: LandingPageContent = {
  hero: {
    eyebrow: "AI operations for enterprises",
    headline: "Keep your AI agents working.\nProve they pay off.",
    subheadline:
      "We make sure your AI agents keep doing their job, stay within the rules, and show what they return.",
    lifecycle: ["Build", "Test", "Protect", "Monitor", "Prove"],
  },
  outcomes: {
    eyebrow: "What you get",
    heading: "Three things your board will ask about.",
    callout: {
      text: "Gartner expects over 40% of agentic AI projects to be canceled by the end of 2027, citing cost, unclear value or weak risk controls.",
      source: "Gartner, 2025",
    },
    items: [
      {
        title: "It keeps working",
        description:
          "Every agent is tested before release and watched after launch, so quality does not decline unnoticed.",
      },
      {
        title: "It stays within the rules",
        description:
          "Safety, data protection and EU AI Act requirements are tested on every release, not just documented.",
        linkLabel: "Our compliance approach",
      },
      {
        title: "It shows its return",
        description:
          "One scorecard reports time saved, cost per task and quality, in numbers finance can check.",
      },
    ],
    linkLabel: "How we do it",
  },
  practice: {
    eyebrow: "Our practice",
    heading: "How we keep AI agents working in production.",
    description:
      "The testing, monitoring and reporting that keep agents reliable after launch. In the industry this is called GenAIOps.",
  },
  failures: {
    eyebrow: "Why agents fail in production",
    heading: "Agents fail in month four, not at launch.",
    description:
      "A demo proves an agent can work once. Production asks whether it works every day, at acceptable cost.",
    items: [
      {
        title: "Quality declines without a signal",
        description:
          "Models, data and users change. Without regular tests, nobody sees the decline until trust is gone.",
      },
      {
        title: "Cost grows faster than value",
        description:
          "Agents run continuously. Without per-task cost tracking, nobody can say what a completed task costs.",
      },
      {
        title: "Risk controls arrive late",
        description:
          "Hallucinations and policy breaches are cheaper to prevent with built-in checks than to explain afterwards.",
      },
      {
        title: "Results stay invisible to the business",
        description:
          "Engineering reports speed. Finance asks about cost, time saved and risk. Nobody translates.",
      },
    ],
    evidence: [
      {
        text: "Over 40% of agentic AI projects will be canceled by the end of 2027, citing escalating costs, unclear business value or inadequate risk controls.",
        source: "Gartner, June 2025",
      },
      {
        text: "40% of enterprises will demote or decommission autonomous AI agents by 2027 because of governance gaps found only after production incidents.",
        source: "Gartner, May 2026",
      },
    ],
  },
  problems: {
    heading:
      "Operations teams are stuck between fragmented tools and unreliable automation.",
    items: [
      {
        title: "Critical work still moves through fragments",
        description:
          "Email threads, PDFs, spreadsheets, and manual follow-ups carry work that should be structured, visible, and routed.",
      },
      {
        title: "Systems hold data, but do not coordinate work",
        description:
          "ERP, CRM, inbox, and document platforms each contain signals, while teams still bridge the gaps by hand.",
      },
      {
        title: "AI pilots stay isolated",
        description:
          "Useful prototypes often stall because they are not connected to permissions, monitoring, review steps, or production workflows.",
      },
      {
        title: "Teams need automation with control",
        description:
          "Operational leaders need AI assistance that supports human review, exception handling, and clear accountability.",
      },
    ],
  },
  system: {
    eyebrow: "The five layers",
    heading: "One practice. Five layers.",
    description:
      "AI solutions come first. This practice keeps them useful afterwards.",
    principle:
      "Critical checks decide whether a release ships. Other checks show where to improve.",
    signalLabel: "You get",
    layers: [
      {
        title: "Build",
        description:
          "Design each agent around a defined task, scope and review path, using real cases.",
        signal: "A written definition of done",
      },
      {
        title: "Test",
        description:
          "Score every release against test sets built from real cases.",
        signal: "Pass rate per release",
      },
      {
        title: "Protect",
        description:
          "Block releases that fail safety, accuracy or compliance checks. Scale human review to each agent's autonomy.",
        signal: "Blocked releases, compliance results",
      },
      {
        title: "Monitor",
        description:
          "Track live quality, speed, cost and rule violations. Feed failures back into the tests.",
        signal: "Early alerts, cost per task",
      },
      {
        title: "Prove",
        description:
          "Set baselines before launch and link agent data to business results.",
        signal: "A scorecard a CFO can read",
      },
    ],
  },
  scorecard: {
    eyebrow: "The scorecard",
    heading: "What the scorecard shows",
    description:
      "The same five measures for every agent, so a portfolio can be compared.",
    groups: [
      { title: "Productivity", description: "Time saved, cycle time, rework." },
      { title: "Quality", description: "Scored against benchmark data." },
      {
        title: "Cost",
        description: "Cost per completed task against its baseline.",
      },
      {
        title: "Compliance",
        description: "Safety, data protection and EU AI Act checks, per release.",
      },
      {
        title: "Context",
        description: "Results by user attributes such as location and seniority.",
      },
    ],
    closing:
      "Engineering sees technical metrics. The business sees cost, time and risk.",
  },
  industries: {
    eyebrow: "Industries",
    heading: "Where we keep agents reliable",
    description:
      "The same practice, adapted to each industry's inputs and review steps.",
    workflows: [
      {
        id: "procurement",
        label: "Procurement",
        accent: "violet",
        problem:
          "Procurement teams move requests, supplier context, quotes, policies, approvals, and spend data through manual comparison and follow-up.",
        positioning: "Keep supplier scoring accurate as suppliers change.",
        workflow: [
          "Purchase request",
          "Check policy",
          "Extract requirements",
          "Match suppliers",
          "Compare quotes",
          "Route approval",
        ],
        useCases: [
          "Procurement intake assistant",
          "Supplier risk scoring",
          "Quote comparison workflow",
          "Contract anomaly detection",
        ],
        cta: "Discuss procurement workflow",
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        accent: "amber",
        problem:
          "Production, quality, maintenance, and supplier workflows depend on reports, SOPs, handoffs, and recurring operational judgment.",
        positioning: "Keep quality triage consistent across plants.",
        workflow: [
          "Quality issue report",
          "Classify defect",
          "Retrieve SOP",
          "Suggest next action",
          "Notify team",
          "Track resolution",
        ],
        useCases: [
          "Quality issue triage",
          "Supplier follow-up workflows",
          "Production report structuring",
          "Maintenance knowledge retrieval",
        ],
        cta: "Discuss manufacturing workflow",
      },
      {
        id: "logistics",
        label: "Logistics",
        accent: "teal",
        problem:
          "Shipment teams manage high-volume status requests, document handoffs, carrier follow-ups, and exceptions across disconnected channels.",
        positioning: "Keep status agents correct as carriers change.",
        workflow: [
          "Customer email",
          "Identify shipment",
          "Retrieve status",
          "Draft response",
          "Flag exception",
          "Human approval",
        ],
        useCases: [
          "Shipment status request automation",
          "Delivery order and invoice extraction",
          "Carrier coordination",
          "Exception handler",
        ],
        cta: "Discuss logistics workflow",
      },
    ],
  },
  agents: {
    eyebrow: "Agent orchestration",
    heading: "Specialized agents, controlled by workflow logic.",
    description:
      "Each agent handles a specific task. The system controls when it runs, what data it can access, when a human reviews it, and how outputs are logged.",
    items: [
      "Document extraction agent",
      "Classification agent",
      "Knowledge retrieval agent",
      "Communication drafting agent",
      "Exception detection agent",
      "Reporting agent",
      "Security review agent",
      "Human handoff agent",
    ],
  },
  security: {
    eyebrow: "Security and stability",
    heading: "Built for operational reliability, not demos.",
    description:
      "Controls are designed into the workflow from the start, so teams can automate repetitive coordination work without losing visibility, security, or review authority.",
    controls: [
      "Role-based access",
      "Human-in-the-loop approvals",
      "Audit trails",
      "Output validation",
      "Evaluation frameworks",
      "Error handling",
      "Monitoring",
      "Permission-aware retrieval",
      "Escalation paths",
    ],
  },
  implementation: {
    eyebrow: "How we work",
    heading: "From baseline to a scorecard you can defend.",
    description:
      "We start narrow, test on real examples, add controls early, and expand when the numbers hold.",
    steps: [
      {
        title: "Map the workflow and the baseline",
        description:
          "Identify the task, the people who review it, and today's cost and cycle time.",
      },
      {
        title: "Design the pipeline and the checks",
        description:
          "Define agents, human review points and the pass criteria.",
      },
      {
        title: "Prototype with real data",
        description:
          "Build the agent and its first test set together, using real examples and edge cases.",
      },
      {
        title: "Add reliability controls",
        description:
          "Gates, permissions, monitoring, audit trails and escalation.",
      },
      {
        title: "Report and expand",
        description:
          "Publish the scorecard. Extend to adjacent workflows only when the numbers hold.",
      },
    ],
  },
  finalCta: {
    heading: "Would your AI agents survive a budget review?",
    description:
      "A call to review one agent: what it does, how it is tested, what it costs and what you can show.",
    primaryCta: "Book a review call",
    secondaryCta: "See how we measure",
    points: [
      "Free first meeting",
      "Real examples, not slides",
      "A clear next step, or none",
    ],
  },
};

const germanContent: LandingPageContent = {
  ...englishContent,
  hero: {
    eyebrow: "KI-Betrieb für Unternehmen",
    headline: "Ihre KI-Agenten laufen zuverlässig.\nMit Nachweis, dass sie sich lohnen.",
    subheadline:
      "Wir sorgen dafür, dass Ihre KI-Agenten ihre Aufgabe erfüllen, die Regeln einhalten und zeigen, was sie einbringen.",
    lifecycle: ["Bauen", "Testen", "Absichern", "Überwachen", "Belegen"],
  },
  outcomes: {
    eyebrow: "Was Sie bekommen",
    heading: "Drei Fragen, die Ihr Vorstand stellen wird.",
    callout: {
      text: "Gartner erwartet, dass über 40 % der Agentic-AI-Projekte bis Ende 2027 eingestellt werden, wegen Kosten, unklarem Nutzen oder schwacher Risikokontrollen.",
      source: "Gartner, 2025",
    },
    items: [
      {
        title: "Es funktioniert dauerhaft",
        description:
          "Jeder Agent wird vor dem Release getestet und nach dem Start überwacht, damit die Qualität nicht unbemerkt sinkt.",
      },
      {
        title: "Es hält die Regeln ein",
        description:
          "Sicherheit, Datenschutz und Anforderungen des EU AI Act werden bei jedem Release getestet, nicht nur dokumentiert.",
        linkLabel: "Unser Compliance-Ansatz",
      },
      {
        title: "Es belegt seinen Ertrag",
        description:
          "Eine Scorecard zeigt eingesparte Zeit, Kosten pro Aufgabe und Qualität, in Zahlen, die das Controlling prüfen kann.",
      },
    ],
    linkLabel: "So gehen wir vor",
  },
  practice: {
    eyebrow: "Unsere Praxis",
    heading: "So halten wir KI-Agenten im Betrieb am Laufen.",
    description:
      "Testen, Überwachen und Berichten, damit Agenten nach dem Start zuverlässig bleiben. In der Branche heißt das GenAIOps.",
  },
  failures: {
    eyebrow: "Warum Agenten im Betrieb scheitern",
    heading: "Agenten scheitern im vierten Monat, nicht beim Start.",
    description:
      "Eine Demo zeigt, dass ein Agent einmal funktioniert. Der Betrieb fragt, ob er täglich funktioniert, zu vertretbaren Kosten.",
    items: [
      {
        title: "Die Qualität sinkt ohne Signal",
        description:
          "Modelle, Daten und Nutzer ändern sich. Ohne regelmäßige Tests fällt der Rückgang erst auf, wenn das Vertrauen weg ist.",
      },
      {
        title: "Kosten wachsen schneller als der Nutzen",
        description:
          "Agenten laufen dauerhaft. Ohne Kosten pro Aufgabe weiß niemand, was eine erledigte Aufgabe kostet.",
      },
      {
        title: "Risikokontrollen kommen spät",
        description:
          "Halluzinationen und Richtlinienverstöße verhindert man günstiger mit eingebauten Prüfungen, als man sie im Nachhinein erklärt.",
      },
      {
        title: "Ergebnisse bleiben für das Business unsichtbar",
        description:
          "Die Technik meldet Geschwindigkeit. Das Controlling fragt nach Kosten, Zeitersparnis und Risiko. Niemand übersetzt.",
      },
    ],
    evidence: [
      {
        text: "Über 40 % der Agentic-AI-Projekte werden bis Ende 2027 eingestellt, wegen steigender Kosten, unklarem Geschäftsnutzen oder unzureichender Risikokontrollen.",
        source: "Gartner, Juni 2025",
      },
      {
        text: "40 % der Unternehmen werden autonome KI-Agenten bis 2027 zurückstufen oder abschalten, weil Governance-Lücken erst nach Vorfällen im Betrieb auffallen.",
        source: "Gartner, Mai 2026",
      },
    ],
  },
  problems: {
    heading:
      "Operations-Teams stecken zwischen fragmentierten Tools und unzuverlässiger Automatisierung fest.",
    items: englishContent.problems.items,
  },
  system: {
    eyebrow: "Die fünf Schichten",
    heading: "Eine Praxis. Fünf Schichten.",
    description:
      "KI-Lösungen stehen am Anfang. Diese Praxis hält sie danach nützlich.",
    principle:
      "Kritische Prüfungen entscheiden, ob ein Release live geht. Weitere Prüfungen zeigen, wo sich etwas verbessern lässt.",
    signalLabel: "Sie erhalten",
    layers: [
      {
        title: "Bauen",
        description:
          "Jeden Agenten um eine definierte Aufgabe, Umfang und Review-Pfad entwerfen, mit echten Fällen.",
        signal: "Eine schriftliche Definition von „fertig“",
      },
      {
        title: "Testen",
        description:
          "Jedes Release gegen Testsets aus echten Fällen bewerten.",
        signal: "Bestehensquote je Release",
      },
      {
        title: "Absichern",
        description:
          "Releases stoppen, die Sicherheits-, Genauigkeits- oder Compliance-Prüfungen nicht bestehen. Menschliche Prüfung nach Autonomie des Agenten abstufen.",
        signal: "Gestoppte Releases, Compliance-Ergebnisse",
      },
      {
        title: "Überwachen",
        description:
          "Laufende Qualität, Geschwindigkeit, Kosten und Regelverstöße verfolgen. Fehler zurück in die Tests führen.",
        signal: "Frühwarnungen, Kosten pro Aufgabe",
      },
      {
        title: "Belegen",
        description:
          "Baselines vor dem Start festlegen und Agentendaten mit Geschäftsergebnissen verknüpfen.",
        signal: "Eine Scorecard, die ein CFO lesen kann",
      },
    ],
  },
  scorecard: {
    eyebrow: "Die Scorecard",
    heading: "Was die Scorecard zeigt",
    description:
      "Dieselben fünf Kennzahlen für jeden Agenten, damit sich ein Portfolio vergleichen lässt.",
    groups: [
      { title: "Produktivität", description: "Zeitersparnis, Durchlaufzeit, Nacharbeit." },
      { title: "Qualität", description: "Bewertet gegen Benchmark-Daten." },
      {
        title: "Kosten",
        description: "Kosten pro erledigter Aufgabe gegenüber der Baseline.",
      },
      {
        title: "Compliance",
        description: "Sicherheits-, Datenschutz- und EU-AI-Act-Prüfungen, je Release.",
      },
      {
        title: "Kontext",
        description: "Ergebnisse nach Nutzerattributen wie Standort und Seniorität.",
      },
    ],
    closing:
      "Die Technik sieht technische Kennzahlen. Das Business sieht Kosten, Zeit und Risiko.",
  },
  industries: {
    ...englishContent.industries,
    eyebrow: "Branchen",
    heading: "Wo wir Agenten zuverlässig halten",
    description:
      "Dieselbe Praxis, angepasst an Eingaben und Review-Schritte jeder Branche.",
    workflows: englishContent.industries.workflows.map((w) => ({
      ...w,
      positioning:
        {
          procurement:
            "Lieferantenbewertung korrekt halten, wenn sich Lieferanten ändern.",
          manufacturing:
            "Qualitäts-Triage über Werke hinweg konsistent halten.",
          logistics:
            "Status-Agenten korrekt halten, wenn sich Carrier ändern.",
        }[w.id] ?? w.positioning,
    })),
  },
  agents: {
    ...englishContent.agents,
    eyebrow: "Agenten-Orchestrierung",
    heading: "Spezialisierte Agenten, gesteuert durch Workflow-Logik.",
  },
  security: {
    ...englishContent.security,
    eyebrow: "Sicherheit und Stabilität",
    heading: "Für operative Zuverlässigkeit gebaut, nicht für Demos.",
  },
  implementation: {
    eyebrow: "So arbeiten wir",
    heading: "Von der Baseline zur Scorecard, die Sie vertreten können.",
    description:
      "Wir starten eng, testen an echten Beispielen, bauen Kontrollen früh ein und erweitern, wenn die Zahlen tragen.",
    steps: [
      {
        title: "Workflow und Baseline erfassen",
        description:
          "Aufgabe, prüfende Personen sowie heutige Kosten und Durchlaufzeit bestimmen.",
      },
      {
        title: "Pipeline und Checks entwerfen",
        description:
          "Agenten, menschliche Prüfpunkte und Bestehenskriterien festlegen.",
      },
      {
        title: "Mit echten Daten prototypen",
        description:
          "Agent und erstes Testset gemeinsam bauen, mit echten Beispielen und Randfällen.",
      },
      {
        title: "Zuverlässigkeitskontrollen ergänzen",
        description:
          "Gates, Berechtigungen, Monitoring, Audit-Trails und Eskalation.",
      },
      {
        title: "Berichten und erweitern",
        description:
          "Die Scorecard veröffentlichen. Auf benachbarte Workflows erst erweitern, wenn die Zahlen tragen.",
      },
    ],
  },
  finalCta: {
    heading: "Würden Ihre KI-Agenten eine Budgetrunde überstehen?",
    description:
      "Ein Gespräch, in dem wir einen Agenten prüfen: was er tut, wie er getestet wird, was er kostet und was Sie belegen können.",
    primaryCta: "Gespräch buchen",
    secondaryCta: "So messen wir",
    points: [
      "Kostenfreies Erstgespräch",
      "Echte Beispiele, keine Folien",
      "Ein klarer nächster Schritt, oder keiner",
    ],
  },
};

export const landingPageContent: Record<Language, LandingPageContent> = {
  en: englishContent,
  de: germanContent,
};

export const getLandingPageContent = (language: Language) =>
  landingPageContent[language] || landingPageContent.en;
