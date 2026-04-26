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
    supportingLine: string;
    primaryCta: string;
    secondaryCta: string;
    pipeline: Array<{
      label: string;
      items: string[];
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
    layers: Array<{
      title: string;
      description: string;
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
    eyebrow: "AI workflow systems for real operations",
    headline: "Secure AI workflow systems for operational teams",
    subheadline:
      "We help logistics, manufacturing, and procurement-heavy teams turn fragmented documents, emails, spreadsheets, and business tools into structured AI-assisted pipelines.",
    supportingLine:
      "Instead of isolated chatbots or one-off automations, we build connected systems where specialized agents extract, classify, route, draft, validate, and escalate work under clear security and review controls.",
    primaryCta: "Map an automation opportunity",
    secondaryCta: "Explore industry workflows",
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
    eyebrow: "Core system",
    heading: "One base system. Multiple operational workflows.",
    description:
      "We do not only build individual agents. We build the workflow layer that makes agents useful, controlled, and reliable across real operational processes.",
    layers: [
      {
        title: "Connect",
        description:
          "Connect documents, inboxes, databases, ERPs, CRMs, spreadsheets, and knowledge sources.",
      },
      {
        title: "Structure",
        description:
          "Turn unstructured operational inputs into clean, usable data with source context preserved.",
      },
      {
        title: "Orchestrate",
        description:
          "Route work through specialized agents, tools, and human decision points.",
      },
      {
        title: "Secure",
        description:
          "Apply permissions, review steps, evaluations, monitoring, and audit logs.",
      },
      {
        title: "Improve",
        description:
          "Track outcomes and improve workflows over time using real exceptions and operator feedback.",
      },
    ],
  },
  industries: {
    eyebrow: "Industry workflows",
    heading: "The same operating system, adapted to your workflow route.",
    description:
      "The base system stays consistent. The inputs, exception paths, review steps, and use cases change by industry.",
    workflows: [
      {
        id: "logistics",
        label: "Logistics",
        accent: "teal",
        problem:
          "Shipment teams manage high-volume status requests, document handoffs, carrier follow-ups, and exceptions across disconnected channels.",
        positioning:
          "Automate shipment document handling, customer status requests, carrier coordination, and exception triage.",
        workflow: [
          "Customer email",
          "Identify shipment",
          "Retrieve status",
          "Draft response",
          "Flag exception",
          "Human approval",
          "Log update",
        ],
        useCases: [
          "Shipment status request automation",
          "Bill of lading, delivery order, and invoice extraction",
          "Carrier and vendor coordination",
          "Exception triage",
          "Customer communication drafting",
        ],
        cta: "Discuss a logistics workflow",
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        accent: "amber",
        problem:
          "Production, quality, maintenance, and supplier workflows depend on reports, SOPs, handoffs, and recurring operational judgment.",
        positioning:
          "Automate production, quality, supplier, and maintenance workflows with AI-assisted operational pipelines.",
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
          "Maintenance knowledge assistant",
          "Work instruction retrieval",
        ],
        cta: "Discuss a manufacturing workflow",
      },
      {
        id: "procurement",
        label: "Procurement",
        accent: "violet",
        problem:
          "Procurement teams move requests, supplier context, quotes, policies, approvals, and spend data through manual comparison and follow-up.",
        positioning:
          "Automate procurement intake, supplier comparison, quote analysis, and approval routing.",
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
          "Supplier quote comparison",
          "Invoice, PO, and contract extraction",
          "Spend classification",
          "Approval workflow routing",
        ],
        cta: "Discuss a procurement workflow",
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
    eyebrow: "KI-Workflow-Systeme fur reale Operations",
    headline: "Sichere KI-Workflow-Systeme fur operative Teams",
    subheadline:
      "Wir helfen Logistik-, Fertigungs- und Beschaffungsteams, fragmentierte Dokumente, E-Mails, Tabellen und Business-Tools in strukturierte KI-gestutzte Pipelines zu verwandeln.",
    supportingLine:
      "Statt isolierter Chatbots oder einzelner Automationen bauen wir verbundene Systeme, in denen spezialisierte Agenten extrahieren, klassifizieren, routen, entwerfen, validieren und eskalieren - mit klaren Sicherheits- und Review-Kontrollen.",
    primaryCta: "Automatisierungspotenzial mappen",
    secondaryCta: "Branchen-Workflows ansehen",
  },
  problems: {
    heading:
      "Operations-Teams stecken zwischen fragmentierten Tools und unzuverlassiger Automatisierung fest.",
    items: englishContent.problems.items,
  },
  system: {
    ...englishContent.system,
    eyebrow: "Kernsystem",
    heading: "Ein Basissystem. Mehrere operative Workflows.",
  },
  industries: {
    ...englishContent.industries,
    eyebrow: "Branchen-Workflows",
    heading: "Dasselbe Betriebssystem, angepasst an Ihren Workflow.",
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
