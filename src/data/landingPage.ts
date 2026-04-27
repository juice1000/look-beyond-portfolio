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
    layers: Array<{
      title: string;
      description: string;
      subProduct?: string;
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
      "Autonomous agents, knowledge retrieval, data pipelines and AI security - production systems for operational workflows.",
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
    { value: "30%", label: "manual effort reduction observed" },
    { value: "25%", label: "cost savings observed" },
    { value: "40%", label: "avoidable error reduction observed" },
    { value: "Built-in", label: "review and monitoring" },
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
    eyebrow: "Core capabilities",
    heading: "Three Pillars of Operational AI",
    description:
      "We do not only build individual agents. We build the workflow layer that makes agents useful, controlled, and reliable across real operational processes.",
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
    primaryCta: "Map an automation opportunity",
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
      "Wir helfen Logistik-, Fertigungs- und Beschaffungsteams, fragmentierte Dokumente, E-Mails, Tabellen und Business-Tools in strukturierte KI-gestutzte Pipelines zu verwandeln.",
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
    eyebrow: "Kernsystem",
    heading: "Drei Säulen operativer KI.",
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
