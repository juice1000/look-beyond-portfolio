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
    headline: string;
    subheadline: string;
    supportingLine: string;
    pipeline: Array<{
      label: string;
      items: string[];
    }>;
    ticker: string[];
  };
  kpis: Array<{
    value: string;
    label: string;
  }>;
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
    pov?: {
      label: string;
      statement: string;
      body: string;
      callout: string;
    };
    trackALabel?: string;
    layers: Array<{
      title: string;
      description: string;
      subProduct?: string;
    }>;
    trackBLabel?: string;
    trackBDescription?: string;
    trackB?: Array<{
      title: string;
      description: string;
      value?: string;
    }>;
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
    headline: "Enterprise AI.\nEngineered to\noperate.",
    subheadline:
      "We start with your team. Find where AI creates real value. Then build custom systems around it.",
    supportingLine:
      "Instead of isolated chatbots or one-off automations, we build connected systems where specialized agents extract, classify, route, draft, validate, and escalate work under clear security and review controls.",

    pipeline: [
      {
        label: "Inputs",
        items: ["Emails", "PDFs", "Spreadsheets", "ERP exports", "SOPs"],
      },
      {
        label: "Pipeline layer",
        items: ["Classify", "Extract", "Validate", "Route", "Approve"],
      },
      {
        label: "Specialized agents",
        items: [
          "Document agent",
          "Knowledge agent",
          "Communication agent",
          "Exception agent",
          "Reporting agent",
        ],
      },
      {
        label: "Control layer",
        items: [
          "Permissions",
          "Evaluations",
          "Monitoring",
          "Audit trails",
          "Human review",
        ],
      },
      {
        label: "Business outcomes",
        items: [
          "Shorter response cycles",
          "Less repetitive manual work",
          "Better visibility",
          "Fewer avoidable errors",
        ],
      },
    ],
    ticker: [
      "AI workflow systems",
      "Knowledge retrieval",
      "Document-to-data pipelines",
      "AI stability and security",
      "Human review controls",
    ],
  },
  kpis: [
    { value: "30K+", label: "people directly reached" },
    { value: "1.5M+", label: "hours saved" },
    { value: "€60M+", label: "in manual work value freed" },
  ],
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
    eyebrow: "What we build",
    heading: "Guided discovery. Custom systems.",
    description:
      "We start with enablement workshops to surface where AI creates real leverage. Then we co-design and build — AI workflow systems, custom platforms, or the infrastructure they run on.",
    pov: {
      label: "How we think about this",
      statement: "The best AI solutions are discovered together, not prescribed in advance.",
      body: "We start with your team, not our assumptions. Enablement workshops surface where AI creates real operational value. Then we co-design the system around those opportunities — and apply AI where the data shows it makes the biggest difference.",
      callout: "Custom solutions that fit how your business actually works — because we designed them with you.",
    },
    trackALabel: "AI Systems",
    layers: [
      {
        title: "AI workflow systems",
        description:
          "Connected pipelines that classify, route, validate, approve, and log operational work across documents, emails, and ERP exports.",
      },
      {
        title: "Autonomous agents",
        description:
          "Specialized agents that extract, classify, route, draft, and escalate work — with knowledge retrieval built in for permission-aware access across documents, SOPs, and company knowledge.",
      },
      {
        title: "AI performance monitoring",
        description:
          "Evaluations, real-time monitoring, access controls, audit trails, and human review paths that keep production systems reliable.",
      },
    ],
    trackBLabel: "Custom Platform & Infrastructure",
    trackBDescription:
      "When the joint design process shows your processes don't fit off-the-shelf software, we build the platform around you instead.",
    trackB: [
      {
        title: "Custom platform development",
        description:
          "Full bespoke platforms built around your existing processes. A direct alternative to off-the-shelf SaaS — you no longer adapt to the software.",
        value: "Built for your processes. Priced like SaaS.",
      },
      {
        title: "ERP integration & migration",
        description:
          "Connect custom platforms or new ERP systems to replace fragmented legacy tooling. From ERPNext to Microsoft Business Central.",
        value: "Connect or replace legacy systems without disrupting operations.",
      },
      {
        title: "Cloud data infrastructure",
        description:
          "Data warehouse design and build on BigQuery, GCP, and dbt. MLOps pipelines and CI/CD workflows. The foundation AI needs to work in production.",
        value: "Data foundations that make AI work in production.",
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    heading: "The Industries we Specialise in",
    description:
      "The same operational AI system, adapted to the specific inputs, exception paths, and review steps of each industry.",
    workflows: [
      {
        id: "procurement",
        label: "Procurement",
        accent: "violet",
        problem:
          "Procurement teams move requests, supplier context, quotes, policies, approvals, and spend data through manual comparison and follow-up.",
        positioning: "Control supplier risk. Automate procurement intake.",
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
        positioning: "Reduce production friction. Structure quality work.",
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
        positioning: "Route work smarter. Respond faster.",
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
    eyebrow: "Implementation approach",
    heading: "From workflow map to reliable AI system.",
    description:
      "We start narrow, test against real examples, add controls early, and expand only after the workflow proves useful and manageable.",
    steps: [
      {
        title: "Map the workflow",
        description:
          "Identify repetitive, document-heavy, coordination-heavy processes and the people who review them.",
      },
      {
        title: "Design the pipeline",
        description:
          "Define inputs, outputs, agents, human review points, integrations, and controls.",
      },
      {
        title: "Prototype the system",
        description:
          "Build a focused workflow prototype using real examples, edge cases, and operator feedback.",
      },
      {
        title: "Add reliability controls",
        description:
          "Introduce evaluations, permissions, monitoring, audit trails, and escalation logic.",
      },
      {
        title: "Expand carefully",
        description:
          "Move from one workflow to adjacent workflows once reliability is proven.",
      },
    ],
  },
  finalCta: {
    heading: "Start with one workflow worth automating.",
    description:
      "We will map one operational workflow and identify where AI agents, structured data, and human review can reduce manual work without increasing risk.",
    primaryCta: "Contact Us",
    secondaryCta: "See example workflows",
    points: [
      "AI workflow systems",
      "Connected agents and pipelines",
      "Security, monitoring, and human review",
      "Logistics, manufacturing, and procurement focus",
    ],
  },
};

const germanContent: LandingPageContent = {
  ...englishContent,
  hero: {
    ...englishContent.hero,
    headline: "Enterprise AI.\nEngineered to\noperate.",
    subheadline:
      "Wir starten bei Ihrem Team. Finden heraus, wo KI echten Mehrwert schafft. Und bauen maßgeschneiderte Systeme genau darum.",
    supportingLine:
      "Statt isolierter Chatbots oder einzelner Automationen bauen wir verbundene Systeme, in denen spezialisierte Agenten extrahieren, klassifizieren, routen, entwerfen, validieren und eskalieren - mit klaren Sicherheits- und Review-Kontrollen.",
  },
  kpis: englishContent.kpis,
  problems: {
    heading:
      "Operations-Teams stecken zwischen fragmentierten Tools und unzuverlassiger Automatisierung fest.",
    items: englishContent.problems.items,
  },
  system: {
    ...englishContent.system,
    eyebrow: "Was wir bauen",
    heading: "Gemeinsame Entdeckung. Maßgeschneiderte Systeme.",
    description:
      "Wir starten mit Enablement-Workshops, um herauszufinden, wo KI echten Hebel hat. Dann co-designen und bauen wir — KI-Workflow-Systeme, Custom Platforms oder die nötige Infrastruktur.",
    pov: {
      label: "Unsere Überzeugung",
      statement: "Die besten KI-Lösungen werden gemeinsam entdeckt, nicht vorab verschrieben.",
      body: "Wir starten bei Ihrem Team, nicht bei unseren Annahmen. Enablement-Workshops zeigen, wo KI echten operativen Mehrwert schafft. Dann co-designen wir das System gemeinsam — und setzen KI dort ein, wo der Effekt am größten ist.",
      callout: "Maßgeschneiderte Lösungen, die wirklich zu Ihrem Betrieb passen — weil wir sie gemeinsam entwickelt haben.",
    },
    trackALabel: "KI-Systeme",
    trackBLabel: "Plattform & Infrastruktur",
    trackBDescription:
      "Wenn der gemeinsame Designprozess zeigt, dass Ihre Prozesse nicht in Standardsoftware passen, bauen wir die Plattform um Sie herum.",
    trackB: [
      {
        title: "Custom Platform Development",
        description:
          "Maßgeschneiderte Plattformen, ausgelegt auf Ihre bestehenden Prozesse. Eine direkte Alternative zu Standard-SaaS — Sie passen sich nicht mehr der Software an.",
        value: "Für Ihre Prozesse gebaut. SaaS-Preismodell.",
      },
      {
        title: "ERP-Integration & Migration",
        description:
          "Verbinden oder ersetzen Sie Legacy-Systeme ohne Betriebsunterbrechung. Von ERPNext bis Microsoft Business Central.",
        value: "Legacy-Systeme verbinden oder ersetzen — ohne Unterbrechung.",
      },
      {
        title: "Cloud-Dateninfrastruktur",
        description:
          "Data-Warehouse-Aufbau auf BigQuery, GCP und dbt. MLOps-Pipelines und CI/CD-Workflows. Das Fundament, auf dem KI in der Produktion funktioniert.",
        value: "Datenfundament für produktive KI.",
      },
    ],
  },
  industries: {
    ...englishContent.industries,
    eyebrow: "Branchen",
    heading: "Drei Branchen, auf die wir uns spezialisieren.",
  },
  agents: {
    ...englishContent.agents,
    eyebrow: "Agenten-Orchestrierung",
    heading: "Spezialisierte Agenten, gesteuert durch Workflow-Logik.",
  },
  security: {
    ...englishContent.security,
    eyebrow: "Sicherheit und Stabilitat",
    heading: "Fur operative Zuverlassigkeit gebaut, nicht fur Demos.",
  },
  implementation: {
    ...englishContent.implementation,
    eyebrow: "Implementierungsansatz",
    heading: "Von der Workflow-Karte zum zuverlassigen KI-System.",
  },
  finalCta: {
    ...englishContent.finalCta,
    heading: "Starten Sie mit einem Workflow, der Automatisierung verdient.",
    primaryCta: "Automatisierungspotenzial mappen",
    secondaryCta: "Beispiel-Workflows ansehen",
  },
};

export const landingPageContent: Record<Language, LandingPageContent> = {
  en: englishContent,
  de: germanContent,
};

export const getLandingPageContent = (language: Language) =>
  landingPageContent[language] || landingPageContent.en;
