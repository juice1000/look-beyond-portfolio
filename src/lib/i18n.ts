type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.system": "System",
    "nav.solutions": "Solutions",
    "nav.industries": "Industries",
    "nav.agents": "Agents",
    "nav.security": "Security",
    "nav.proof": "Proof",
    "nav.process": "Process",
    "nav.projects": "Case Studies",
    "nav.partners": "Partners",
    "nav.howWeWork": "How We Work",
    "nav.aiReadiness": "AI Readiness",
    "nav.ourProcess": "Our Process",
    "nav.pricingEngagement": "Pricing & Engagement",
    "nav.workshops": "Workshops",
    "nav.contact": "Contact Us",
    "nav.imprint": "Imprint",
    "nav.privacyPolicy": "Privacy Policy",
    "nav.termsOfUse": "Terms of Use",
    "nav.darkMode": "Dark Mode",
    "nav.lightMode": "Light Mode",
    "nav.normalVision": "Normal Vision",
    "nav.protanopia": "Protanopia (Red-Blind)",
    "nav.deuteranopia": "Deuteranopia (Green-Blind)",
    "nav.tritanopia": "Tritanopia (Blue-Blind)",

    // Hero Section
    "hero.title": "AI that delivers from day one.",
    "hero.subtitle":
      "We help enterprises move faster by turning internal knowledge into better decisions, automating business operations, and making AI safe to scale.",
    "hero.cta": "See how we do this",
    "hero.service.1": "Better decisions from internal knowledge",
    "hero.service.2": "Less operational drag across workflows",
    "hero.service.3": "AI systems that are safe to scale",
    "hero.service.4": "Teams equipped to lead change",

    // Impact Section
    "ai.tagline": "Built for measurable business impact.",
    "ai.subTagline":
      "The shifts we consistently target when we embed AI inside enterprise workflows.",
    "ai.kpi.1": "less manual effort in targeted workflows",
    "ai.kpi.2": "faster turnaround in knowledge-heavy operations",
    "ai.kpi.3": "access to decision-critical knowledge across the business",
    "ai.kpi.4": "confidence through continuous testing and monitoring",

    // Projects / Case Studies Page
    "projects.title": "Selected case studies",
    "projects.subtitle":
      "Examples of how we operationalize AI across complex enterprise environments.",
    "projects.categories.top": "Highlights",
    "projects.categories.web": "Knowledge",
    "projects.categories.ai": "Automation",

    // Partners Page
    "partners.title": "Partners",
    "partners.subtitle":
      "Selected partners that extend our delivery capabilities across procurement, AI operations, document intelligence, and app delivery.",
    "partners.intro":
      "Each partner covers a distinct part of the stack. Together we cover discovery, implementation, and ongoing operations without stretching into weak spots.",
    "partners.sourcera.name": "Sourcera",
    "partners.sourcera.url": "sourcera.ai",
    "partners.sourcera.role": "Procurement solution",
    "partners.sourcera.capability":
      "Procurement intelligence that automates tenders and surfaces savings.",
    "partners.sourcera.point1": "Tender automation and supplier scoring",
    "partners.sourcera.point2": "EU data residency and compliance posture",
    "partners.innovandio.name": "Innovandio",
    "partners.innovandio.url": "innovandio.com",
    "partners.innovandio.role": "AI operations specialist",
    "partners.innovandio.capability":
      "Production AI delivery with governance, monitoring, and predictable outcomes.",
    "partners.innovandio.point1": "Heavy AI operations and governance",
    "partners.innovandio.point2": "Regulated-industry readiness",
    "partners.mueller.name": "Mueller AI Solutions",
    "partners.mueller.url": "muelleraisolutions.de",
    "partners.mueller.role": "Document specialist",
    "partners.mueller.capability":
      "Document intelligence for PDF-heavy back-office workflows.",
    "partners.mueller.point1": "Document extraction, classification, and search",
    "partners.mueller.point2": "Regulated, document-heavy operations",
    "partners.kuatsu.name": "Kuatsu",
    "partners.kuatsu.url": "kuatsu.de",
    "partners.kuatsu.role": "App and deployment specialist",
    "partners.kuatsu.capability":
      "App delivery, MVP validation, and long-term maintenance.",
    "partners.kuatsu.point1": "App design, development, and deployment",
    "partners.kuatsu.point2": "Orientation sprints and MVP validation",

    // Contact Section
    "contact.title": "Start a conversation",
    "contact.subtitle":
      "Tell us about the workflow friction or AI initiative you want to operationalize.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out through any of the channels below",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Address",
    "contact.info.map":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.696832660774!2d103.8309802756972!3d1.3585276986286259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1785a6611061%3A0x20e7cf0f0b8c8095!2sLook%20Beyond%20Solutions%20Pte.%20Ltd.!5e0!3m2!1sen!2ssg!4v1735837964291!5m2!1sen!2ssg",

    // Map / Coverage Section
    "map.title": "Geographic coverage",
    "map.subtitle":
      "We support enterprise clients across Europe, the Americas, and Asia-Pacific with senior, hands-on delivery.",
    "coverage.description": "We support enterprise clients across:",
    "coverage.point1": "Europe",
    "coverage.point2": "The Americas",
    "coverage.point3": "Asia-Pacific",
    "coverage.note":
      "Our work combines international delivery with senior, hands-on execution.",

    // Case Studies Section (Legacy card content)
    "caseStudies.title": "Proof and experience",
    "caseStudies.subtitle":
      "Relevant work across procurement intelligence, document-to-data workflows, knowledge systems, and AI reliability.",
    "caseStudies.cta": "Explore the work",
    "caseStudies.enables": "What this enables",
    "caseStudies.marketing.title": "Sprinkenhof",
    "caseStudies.marketing.painPoint":
      "Turning 1.5M documents into decision-ready knowledge.",
    "caseStudies.marketing.kpi": "Faster access to trusted insights",
    "caseStudies.sales.title": "FGS Global",
    "caseStudies.sales.painPoint":
      "Evaluation and monitoring for safer enterprise AI.",
    "caseStudies.sales.kpi": "Continuous testing in production",
    "caseStudies.operations.title": "Sourcera",
    "caseStudies.operations.painPoint":
      "Automation for procurement intelligence workflows.",
    "caseStudies.operations.kpi": "Less manual research effort",

    // Deep Case Study Content
    "caseStudies.sprinkenhof.title": "Sprinkenhof",
    "caseStudies.sprinkenhof.tagline":
      "Turning fragmented document landscapes into decision-ready knowledge",
    "caseStudies.sprinkenhof.description":
      "Sprinkenhof manages a large and complex document environment with around 1.5 million files across many structures, classes, and permission layers. Important knowledge is distributed across documents, systems, and organizational contexts, making it difficult to find and use the right information.",
    "caseStudies.sprinkenhof.bullet1":
      "Faster access to relevant internal knowledge",
    "caseStudies.sprinkenhof.bullet2":
      "Less time spent searching across complex document environments",
    "caseStudies.sprinkenhof.bullet3":
      "Better-informed decision making in knowledge-heavy workflows",
    "caseStudies.sprinkenhof.bullet4":
      "A foundation for AI support in highly regulated enterprise contexts",

    "caseStudies.fgs.title": "FGS Global",
    "caseStudies.fgs.tagline":
      "Making enterprise AI safer through evaluation, monitoring, and operational control",
    "caseStudies.fgs.description":
      "At FGS Global, we strengthened the reliability of AI systems used in enterprise settings. The work focused on AIOps foundations for the Fergus ecosystem, with an emphasis on making AI behavior measurable, testable, and easier to improve over time.",
    "caseStudies.fgs.bullet1":
      "More reliable AI performance in enterprise use cases",
    "caseStudies.fgs.bullet2":
      "Earlier detection of quality issues and regressions",
    "caseStudies.fgs.bullet3":
      "Clearer visibility into how AI systems behave over time",
    "caseStudies.fgs.bullet4":
      "Safer rollout of AI across internal workflows and teams",

    "caseStudies.sourcera.title": "Sourcera",
    "caseStudies.sourcera.tagline":
      "Automating strategic workflow execution with AI",
    "caseStudies.sourcera.description":
      "At Sourcera, we contributed to workflow-driven AI systems for procurement intelligence and supplier operations. The goal was to reduce manual research and coordination work in areas where teams traditionally spend significant time gathering information, evaluating fit, and moving decisions forward.",
    "caseStudies.sourcera.bullet1":
      "Less manual effort in research-heavy workflows",
    "caseStudies.sourcera.bullet2":
      "Faster progression from information gathering to decision support",
    "caseStudies.sourcera.bullet3":
      "More scalable handling of repetitive knowledge tasks",
    "caseStudies.sourcera.bullet4":
      "Improved process efficiency in operational and procurement contexts",

    // What We Solve
    "whatWeSolve.title": "What we solve",
    "whatWeSolve.intro":
      "Many enterprises are not held back by a lack of ideas. They are held back by friction.",
    "whatWeSolve.paragraph1":
      "Critical knowledge is buried across documents, systems, and teams.",
    "whatWeSolve.paragraph2":
      "Operations still depend on manual coordination and handoffs.",
    "whatWeSolve.paragraph3":
      "AI initiatives show promise in pilots but rarely become reliable parts of day-to-day business.",
    "whatWeSolve.paragraph4":
      "Change fails to stick when teams are not prepared to adopt, own, and extend new solutions.",
    "whatWeSolve.outro":
      "We design AI systems that fit real enterprise operations, produce value early, and are built to last. That means better decisions, less drag, and AI that can be rolled out with trust.",

    // Problem Focus
    "problems.title": "The problems we focus on",
    "problems.slowDecisions.title":
      "Slow decisions caused by scattered internal knowledge",
    "problems.slowDecisions.description":
      "Key information is spread across documents, repositories, and expert teams. Finding the right answer takes too long, and important context is often missed.",
    "problems.bottlenecks.title":
      "Operational bottlenecks caused by manual coordination",
    "problems.bottlenecks.description":
      "Teams spend too much time bridging gaps between systems, moving information by hand, and acting as the glue between disconnected processes.",
    "problems.trust.title": "AI that is difficult to trust at scale",
    "problems.trust.description":
      "Without structured testing, oversight, and monitoring, AI remains hard to operationalize in critical enterprise workflows.",
    "problems.change.title": "Change initiatives that fail to stick",
    "problems.change.description":
      "Even strong solutions underperform when internal teams are not prepared to adopt them, own them, and extend them.",

    // What we build
    "solutions.title": "What we build",
    "solutions.decisions.title": "AI for better business decisions",
    "solutions.decisions.description":
      "We build systems that synthesize internal company knowledge so teams can understand complex situations faster and act with more confidence.",
    "solutions.automation.title":
      "Operational automation that removes bottlenecks",
    "solutions.automation.description":
      "We automate workflows end to end, reducing manual coordination, repetitive work, and delays across business operations.",
    "solutions.reliability.title": "Reliable AI you can scale with confidence",
    "solutions.reliability.description":
      "We make AI safer and more dependable through structured evaluation, monitoring, and continuous improvement.",
    "solutions.enablement.title": "Enablement for lasting change",
    "solutions.enablement.description":
      "We train internal teams, support rollout, and help organizations build the capability to scale AI from within.",

    // How we work
    "howWeWork.title": "How we work",
    "howWeWork.paragraph1":
      "We combine business understanding with deep technical execution. Our work is designed for enterprise environments from the start: mature delivery, practical rollout, and clear ownership.",
    "howWeWork.paragraph2":
      "We stay close to the real workflow, identify where AI creates leverage, and build solutions that fit operational reality rather than becoming isolated demos. Clients work directly with a lean senior team for faster decisions and less overhead.",

    // Differentiators
    "differentiators.title": "What sets us apart",
    "differentiators.enterprise.title": "Enterprise-ready from the start",
    "differentiators.enterprise.description":
      "We build for real operations, not lab conditions. Reliability, scale, and adoption are part of the solution from day one.",
    "differentiators.team.title": "Lean senior team",
    "differentiators.team.description":
      "You work with experienced operators and builders, not layers of delivery management.",
    "differentiators.business.title": "Business-first execution",
    "differentiators.business.description":
      "We translate AI into measurable operational outcomes: faster decisions, lower manual effort, and stronger process consistency.",
    "differentiators.enablement.title": "Delivery plus enablement",
    "differentiators.enablement.description":
      "We build the system, but we also help your people make it work in practice.",
    "differentiators.regional.title": "Cross-regional perspective",
    "differentiators.regional.description":
      "We support enterprise clients across Europe, the Americas, and Asia-Pacific.",

    // Outcomes
    "outcomes.title": "The outcomes we aim for",
    "outcomes.description":
      "We focus on practical gains that hold up inside real enterprise environments. Typical target outcomes include:",
    "outcomes.bullet1": "Reduced repetitive manual work in selected workflows",
    "outcomes.bullet2":
      "Shorter response cycles through classification, drafting, and routing",
    "outcomes.bullet3":
      "Much faster access to internal knowledge and business context",
    "outcomes.bullet4": "More consistent decision support across teams",
    "outcomes.bullet5":
      "Stronger confidence in AI performance through evaluation and monitoring",
    "outcomes.note":
      "We treat hard savings and performance targets as workflow-specific claims that need evidence from the actual operating context.",

    // Training & Enablement
    "training.title": "Training and change enablement",
    "training.paragraph1":
      "Successful AI adoption is not just a systems problem. It is a people problem as well.",
    "training.paragraph2":
      "We bring experience in training and enablement, helping teams understand how to work with AI effectively and how to lead change internally. This ranges from practical workshops and hands-on guidance to building the internal confidence needed for long-term ownership.",
    "training.outro":
      "That means clients do not just receive a solution. They build capability.",

    // Closing Positioning
    "closing.title": "AI that delivers from day one.",
    "closing.description": "For enterprises, that means:",
    "closing.point1": "Better decisions from internal knowledge",
    "closing.point2": "Less operational drag through workflow automation",
    "closing.point3":
      "AI systems that are safe, measurable, and ready to scale",
    "closing.point4": "Internal teams equipped to lead the change",

    // Our Process Section
    "ourProcess.title": "Our Process",
    "ourProcess.step1.title": "Workflow-grounded discovery",
    "ourProcess.step1.description":
      "We start inside the real process to map knowledge, systems, and stakeholders so every build is anchored in operational reality.",
    "ourProcess.step2.title": "Design connected systems",
    "ourProcess.step2.description":
      "We design AI systems that connect internal knowledge with automation, evaluation, and the surrounding business context.",
    "ourProcess.step3.title": "Iterate with guardrails",
    "ourProcess.step3.description":
      "We ship in focused increments, with structured evaluation and monitoring loops to keep AI trustworthy as it scales.",
    "ourProcess.step4.title": "Enable ownership",
    "ourProcess.step4.description":
      "We launch with rollout support, training, and clear ownership so internal teams can extend the work with confidence.",

    // AI Readiness Section
    "aiReadiness.title": "AI readiness assessment",
    "aiReadiness.description":
      "Understand how close your organization is to running AI in production and where to focus next.",
    "aiReadiness.section1.title": "Knowledge foundations",
    "aiReadiness.section1.content":
      "Assess how your internal knowledge is captured, structured, and retrievable so AI can act on the right context.",
    "aiReadiness.section2.title": "Operational automation",
    "aiReadiness.section2.content":
      "Identify workflows where automation removes manual coordination and unlocks measurable value.",
    "aiReadiness.section3.title": "Trust and governance",
    "aiReadiness.section3.content":
      "Review evaluation, monitoring, and change-management practices to keep AI safe to scale.",
    "aiReadiness.cta.title": "Curious how far you've come?",
    "aiReadiness.cta.description1":
      "Run a complimentary AI readiness assessment with us to see the next steps worth tackling.",
    "aiReadiness.cta.description2": "It takes less than five minutes.",
    "aiReadiness.cta.button": "Start assessment",

    // Pricing & Engagement Section
    "pricingEngagement.title": "Pricing & Engagement",
    "pricingEngagement.description":
      "Transparent starting points for workshops, prototypes, and scaling work.",
    "pricingEngagement.tiers.free.title": "First meeting",
    "pricingEngagement.tiers.free.price": "Free",
    "pricingEngagement.tiers.free.description":
      "A short working session to map the workflow, surface constraints, and decide whether a workshop or POC is the right next step.",
    "pricingEngagement.tiers.free.item1": "Workflow framing and priority check",
    "pricingEngagement.tiers.free.item2": "No charge, no deck, no commitment",
    "pricingEngagement.tiers.workshop.title": "Discovery workshop",
    "pricingEngagement.tiers.workshop.price": "Starting at $2K USD",
    "pricingEngagement.tiers.workshop.description":
      "A focused workshop to understand the process, define the pipeline, and identify what should be automated first.",
    "pricingEngagement.tiers.workshop.item1":
      "Process mapping and stakeholder review",
    "pricingEngagement.tiers.workshop.item2":
      "Workflow opportunities and risks",
    "pricingEngagement.tiers.workshop.item3": "Next-step recommendation",
    "pricingEngagement.tiers.poc.title": "POC development",
    "pricingEngagement.tiers.poc.price": "Starting at $15K USD",
    "pricingEngagement.tiers.poc.description":
      "A working prototype built against real examples so you can validate usefulness, controls, and edge cases before scaling.",
    "pricingEngagement.tiers.poc.item1": "Prototype build and testing",
    "pricingEngagement.tiers.poc.item2":
      "Real sample data and exception handling",
    "pricingEngagement.tiers.poc.item3": "Review loop and handoff plan",
    "pricingEngagement.tiers.retainer.title": "Scaling solutions",
    "pricingEngagement.tiers.retainer.price": "Retainer basis",
    "pricingEngagement.tiers.retainer.description":
      "Ongoing implementation support for adjacent workflows, improvements, monitoring, and operational rollout.",
    "pricingEngagement.tiers.retainer.item1": "Continuous delivery support",
    "pricingEngagement.tiers.retainer.item2": "Monitoring and refinements",
    "pricingEngagement.tiers.retainer.item3": "Roadmap for adjacent workflows",
    "pricingEngagement.details.title": "What else to mention",
    "pricingEngagement.details.point1":
      "What is included in each phase and what is out of scope.",
    "pricingEngagement.details.point2":
      "Typical timeline for workshop, POC, and retainer work.",
    "pricingEngagement.details.point3":
      "Whether tax, travel, or third-party tooling costs are separate.",
    "pricingEngagement.details.point4":
      "Whether workshop fees are credited toward a POC if the project continues.",
    "pricingEngagement.pricing.title": "How we scope",
    "pricingEngagement.pricing.description":
      "We align work around measurable outcomes instead of vanity experiments.",
    "pricingEngagement.pricing.point1":
      "Strategy & discovery sprints: 2–4 weeks to align on workflows, metrics, and architecture.",
    "pricingEngagement.pricing.point2":
      "Build & automate pods: A senior cross-functional team embedded to design, ship, and iterate.",
    "pricingEngagement.pricing.point3":
      "Enablement retainers: Continuous improvement, evaluation, and training loops for internal teams.",
    "pricingEngagement.engagement.title": "How we collaborate",
    "pricingEngagement.engagement.description":
      "Clear checkpoints keep delivery pragmatic and transparent.",
    "pricingEngagement.engagement.point1":
      "Co-defined roadmap anchored in workflow data and business outcomes.",
    "pricingEngagement.engagement.point2":
      "Fast pilots with measurable checkpoints before broader rollout.",
    "pricingEngagement.engagement.point3":
      "Scale plans covering deployment, monitoring, and ownership transfer.",

    // Workshops Section
    "workshops.title": "Workshops",
    "workshops.description":
      "Hands-on sessions that equip teams to design, govern, and operationalize AI.",
    "workshops.workshop1.title": "Knowledge synthesis lab",
    "workshops.workshop1.description":
      "Design how internal documents, data, and expert input become decision-ready context for AI systems.",
    "workshops.workshop1.tag1": "Knowledge",
    "workshops.workshop1.tag2": "Decision support",
    "workshops.workshop2.title": "Workflow automation sprint",
    "workshops.workshop2.description":
      "Map and prototype AI-powered automations that remove manual coordination from core processes.",
    "workshops.workshop2.tag1": "Automation",
    "workshops.workshop2.tag2": "Workflow",
    "workshops.workshop3.title": "Reliability & governance clinic",
    "workshops.workshop3.description":
      "Establish evaluation, monitoring, and change-control practices that keep AI safe to scale.",
    "workshops.workshop3.tag1": "Reliability",
    "workshops.workshop3.tag2": "Governance",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.projects": "Case Studies",
    "footer.partners": "Partners",
    "footer.legal": "Legal",
    "footer.copyright": "All rights reserved.",

    // Imprint
    "imprint.title": "Imprint",
    "imprint.company.title": "Company",
    "imprint.company": "Look Beyond Solutions Pte. Ltd.",
    "imprint.registrationNumber.title": "Company Registration Number (UEN)",
    "imprint.registrationNumber": "202439104D",
    "imprint.address.title": "Registered Address",
    "imprint.address":
      "22 Sin Ming Lane #06-76, Midview City, 573969 Singapore",
    "imprint.managingDirector.title": "Managing Director",
    "imprint.managingDirector": "Julien Look",
    "imprint.contact.title": "Contact",
    "imprint.contact": "contact@lookbeyond.sg",
    "imprint.responsible": "Responsible for content",
    "imprint.sameAddress": "(Same as registered address)",

    phone: "+65 8035 0340",
  },
  de: {
    // Navbar
    "nav.home": "Startseite",
    "nav.system": "System",
    "nav.solutions": "Lösungen",
    "nav.industries": "Branchen",
    "nav.agents": "Agenten",
    "nav.security": "Sicherheit",
    "nav.proof": "Nachweise",
    "nav.process": "Prozess",
    "nav.projects": "Fallstudien",
    "nav.partners": "Partner",
    "nav.howWeWork": "Wie wir arbeiten",
    "nav.aiReadiness": "KI-Readiness",
    "nav.ourProcess": "Unser Prozess",
    "nav.pricingEngagement": "Pricing & Collaboration",
    "nav.workshops": "Workshops",
    "nav.contact": "Kontakt",
    "nav.imprint": "Impressum",
    "nav.privacyPolicy": "Datenschutzerklärung",
    "nav.termsOfUse": "Nutzungsbedingungen",
    "nav.darkMode": "Dunkelmodus",
    "nav.lightMode": "Hellmodus",
    "nav.normalVision": "Normale Sicht",
    "nav.protanopia": "Protanopie (Rotblind)",
    "nav.deuteranopia": "Deuteranopie (Grünblind)",
    "nav.tritanopia": "Tritanopie (Blaublind)",

    // Hero Section
    "hero.title": "KI, die vom ersten Tag an liefert.",
    "hero.subtitle":
      "Wir beschleunigen Unternehmen, indem wir internes Wissen in bessere Entscheidungen verwandeln, Geschäftsabläufe automatisieren und KI sicher skalierbar machen.",
    "hero.cta": "So setzen wir es um",
    "hero.service.1": "Bessere Entscheidungen aus internem Wissen",
    "hero.service.2": "Weniger operativer Reibungsverlust",
    "hero.service.3": "Skalierbare, vertrauenswürdige KI-Systeme",
    "hero.service.4": "Teams, die den Wandel führen",

    // Impact Section
    "ai.tagline": "Ausgelegt auf messbaren Geschäftserfolg.",
    "ai.subTagline":
      "Die Veränderungen, auf die wir abzielen, wenn wir KI in Unternehmensprozesse einbetten.",
    "ai.kpi.1": "weniger manueller Aufwand in Zielprozessen",
    "ai.kpi.2": "schnellere Durchlaufzeiten in wissenslastigen Bereichen",
    "ai.kpi.3":
      "schneller Zugang zu entscheidungsrelevantem Kontext im Unternehmen",
    "ai.kpi.4": "mehr Vertrauen durch kontinuierliche Tests und Monitoring",

    // Projects / Case Studies Page
    "projects.title": "Ausgewählte Fallstudien",
    "projects.subtitle":
      "So operationalisieren wir KI in komplexen Unternehmensumgebungen.",
    "projects.categories.top": "Highlights",
    "projects.categories.web": "Wissen",
    "projects.categories.ai": "Automatisierung",

    // Partners Page
    "partners.title": "Partner",
    "partners.subtitle":
      "Ausgewählte Partner, die unsere Delivery-Fähigkeiten in Beschaffung, KI-Betrieb, Dokumentenintelligenz und App-Delivery erweitern.",
    "partners.intro":
      "Jeder Partner deckt einen klaren Teil des Stacks ab. Gemeinsam unterstützen wir Discovery, Umsetzung und den laufenden Betrieb, ohne Schwachstellen zu überdecken.",
    "partners.sourcera.name": "Sourcera",
    "partners.sourcera.url": "sourcera.ai",
    "partners.sourcera.role": "Beschaffungslösung",
    "partners.sourcera.capability":
      "Procurement Intelligence, die Tenders automatisiert und Einsparungen sichtbar macht.",
    "partners.sourcera.point1": "Tender-Automatisierung und Supplier Scoring",
    "partners.sourcera.point2": "EU-Datenresidenz und Compliance-Posture",
    "partners.innovandio.name": "Innovandio",
    "partners.innovandio.url": "innovandio.com",
    "partners.innovandio.role": "KI-Operations-Spezialist",
    "partners.innovandio.capability":
      "Produktive KI-Delivery mit Governance, Monitoring und planbaren Ergebnissen.",
    "partners.innovandio.point1": "Heavy AI Operations und Governance",
    "partners.innovandio.point2": "Regulierte Branchen und planbare Ergebnisse",
    "partners.mueller.name": "Mueller AI Solutions",
    "partners.mueller.url": "muelleraisolutions.de",
    "partners.mueller.role": "Dokumentenspezialist",
    "partners.mueller.capability":
      "Dokumentenintelligenz für PDF-lastige Backoffice-Workflows.",
    "partners.mueller.point1": "Dokument-Extraktion, Klassifikation und Suche",
    "partners.mueller.point2": "Regulierte, dokumentenintensive Abläufe",
    "partners.kuatsu.name": "Kuatsu",
    "partners.kuatsu.url": "kuatsu.de",
    "partners.kuatsu.role": "App- und Deployment-Spezialist",
    "partners.kuatsu.capability":
      "App-Delivery, MVP-Validierung und langfristige Wartung.",
    "partners.kuatsu.point1": "App-Design, Entwicklung und Deployment",
    "partners.kuatsu.point2": "Orientation Sprints und MVP-Validierung",

    // Contact Section
    "contact.title": "Lassen Sie uns sprechen",
    "contact.subtitle":
      "Beschreiben Sie uns die Reibungspunkte oder KI-Initiativen, die Sie in den Betrieb bringen möchten.",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.subtitle": "Kontaktieren Sie uns über diese Kanäle",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.address": "Adresse",
    "contact.info.map":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5683948771793!2d13.425865077217276!3d52.48694997205244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb74c589cbb%3A0x73a2a17968909a22!2sSonnenallee%2023%2C%2012047%20Berlin!5e0!3m2!1sen!2sde!4v1751023037751!5m2!1sen!2sde",

    // Map / Coverage Section
    "map.title": "Regionale Abdeckung",
    "map.subtitle":
      "Wir unterstützen Unternehmen in Europa, Amerika und Asien-Pazifik mit einem schlanken Senior-Team.",
    "coverage.description": "Wir begleiten Kunden in:",
    "coverage.point1": "Europa",
    "coverage.point2": "Amerika",
    "coverage.point3": "Asien-Pazifik",
    "coverage.note":
      "Internationale Ausführung kombiniert mit direkter Umsetzung durch Senior-Teams.",

    // Case Studies Section (Legacy)
    "caseStudies.title": "Nachweise und Erfahrung",
    "caseStudies.subtitle":
      "Relevante Arbeit in Beschaffungsintelligenz, Document-to-Data-Workflows, Wissenssystemen und KI-Zuverlassigkeit.",
    "caseStudies.cta": "Mehr erfahren",
    "caseStudies.enables": "Was dadurch möglich wird",
    "caseStudies.marketing.title": "Sprinkenhof",
    "caseStudies.marketing.painPoint":
      "1,5 Mio. Dokumente werden zu entscheidungsreifem Wissen.",
    "caseStudies.marketing.kpi": "Schneller Zugang zu Kontext",
    "caseStudies.sales.title": "FGS Global",
    "caseStudies.sales.painPoint":
      "Evaluation und Monitoring für vertrauenswürdige KI.",
    "caseStudies.sales.kpi": "Kontinuierliche Tests",
    "caseStudies.operations.title": "Sourcera",
    "caseStudies.operations.painPoint":
      "Automatisierung für Beschaffungs-Workflows.",
    "caseStudies.operations.kpi": "Weniger manuelle Recherche",

    // Deep Case Study Content
    "caseStudies.sprinkenhof.title": "Sprinkenhof",
    "caseStudies.sprinkenhof.tagline":
      "Zersplitterte Dokumentlandschaften werden zu entscheidungsreifem Wissen",
    "caseStudies.sprinkenhof.description":
      "Sprinkenhof verwaltet eine große Dokumentlandschaft mit rund 1,5 Millionen Dateien, zahlreichen Strukturen und Berechtigungen. Wissen ist über Dokumente, Systeme und Organisationseinheiten verteilt – der Zugriff auf die richtige Information kostet Zeit und Vertrauen.",
    "caseStudies.sprinkenhof.bullet1":
      "Schnellerer Zugriff auf relevantes internes Wissen",
    "caseStudies.sprinkenhof.bullet2":
      "Weniger Suchaufwand in komplexen Ablagen",
    "caseStudies.sprinkenhof.bullet3":
      "Besser informierte Entscheidungen in wissensintensiven Workflows",
    "caseStudies.sprinkenhof.bullet4":
      "Fundament für KI-Unterstützung in regulierten Kontexten",

    "caseStudies.fgs.title": "FGS Global",
    "caseStudies.fgs.tagline":
      "Unternehmens-KI durch Evaluation, Monitoring und Steuerung absichern",
    "caseStudies.fgs.description":
      "Bei FGS Global haben wir die Zuverlässigkeit der im Fergus-Ökosystem eingesetzten KI gestärkt. Der Fokus lag auf AIOps-Grundlagen, die das Verhalten von KI messbar, testbar und fortlaufend verbesserbar machen.",
    "caseStudies.fgs.bullet1":
      "Zuverlässigere KI-Leistung in Unternehmenseinsatzszenarien",
    "caseStudies.fgs.bullet2": "Frühzeitige Erkennung von Qualitätsproblemen",
    "caseStudies.fgs.bullet3":
      "Bessere Transparenz über das Verhalten der KI im Zeitverlauf",
    "caseStudies.fgs.bullet4":
      "Sicherere Einführung von KI über Teams und Workflows hinweg",

    "caseStudies.sourcera.title": "Sourcera",
    "caseStudies.sourcera.tagline":
      "Strategische Workflows mit KI automatisieren",
    "caseStudies.sourcera.description":
      "Für Sourcera haben wir KI-gestützte Workflows für Beschaffungs- und Lieferantenprozesse mit aufgebaut. Ziel war es, manuelle Recherche und Abstimmung zu reduzieren und Entscheidungen schneller voranzutreiben.",
    "caseStudies.sourcera.bullet1":
      "Weniger manueller Aufwand in research-intensiven Aufgaben",
    "caseStudies.sourcera.bullet2":
      "Schnellere Schritte von Information zu Entscheidung",
    "caseStudies.sourcera.bullet3":
      "Skalierbare Bearbeitung wiederkehrender Wissensarbeit",
    "caseStudies.sourcera.bullet4":
      "Höhere Prozesseffizienz in Beschaffung und Operations",

    // What We Solve
    "whatWeSolve.title": "Was wir lösen",
    "whatWeSolve.intro":
      "Unternehmen scheitern selten an Ideen – sie scheitern an Reibung.",
    "whatWeSolve.paragraph1":
      "Kritisches Wissen steckt in Dokumenten, Systemen und Teams fest.",
    "whatWeSolve.paragraph2":
      "Abläufe basieren weiterhin auf manueller Koordination und Übergaben.",
    "whatWeSolve.paragraph3":
      "KI-Initiativen funktionieren im Pilot, schaffen aber selten den Sprung in den Alltag.",
    "whatWeSolve.paragraph4":
      "Veränderung verläuft im Sande, wenn Teams nicht vorbereitet sind, Lösungen zu übernehmen und weiterzuentwickeln.",
    "whatWeSolve.outro":
      "Wir entwickeln KI-Systeme, die in reale Abläufe passen, früh Nutzen stiften und langfristig tragfähig sind. Das bedeutet bessere Entscheidungen, weniger Reibung und KI, die mit Vertrauen ausgerollt wird.",

    // Problem Focus
    "problems.title": "Die Probleme, auf die wir uns fokussieren",
    "problems.slowDecisions.title":
      "Langsame Entscheidungen durch verstreutes Wissen",
    "problems.slowDecisions.description":
      "Informationen liegen über Dokumente, Repositorien und Expert:innen verteilt. Das richtige Signal zu finden dauert zu lange, Kontext geht verloren.",
    "problems.bottlenecks.title":
      "Operative Engpässe durch manuelle Koordination",
    "problems.bottlenecks.description":
      "Teams überbrücken Systembrüche, übertragen Informationen von Hand und sind das Bindeglied zwischen getrennten Prozessen.",
    "problems.trust.title": "Schwer vertrauenswürdige KI im Scale",
    "problems.trust.description":
      "Ohne strukturierte Tests, Aufsicht und Monitoring bleibt KI schwer produktiv nutzbar.",
    "problems.change.title": "Veränderung, die nicht trägt",
    "problems.change.description":
      "Selbst gute Lösungen wirken nicht, wenn Teams nicht bereit sind, sie anzunehmen, zu betreiben und zu erweitern.",

    // What we build
    "solutions.title": "Was wir bauen",
    "solutions.decisions.title": "KI für bessere Entscheidungen",
    "solutions.decisions.description":
      "Wir synthetisieren internes Wissen, damit Teams komplexe Situationen schneller verstehen und sicherer handeln.",
    "solutions.automation.title": "Automatisierung gegen Engpässe",
    "solutions.automation.description":
      "Wir automatisieren End-to-End-Workflows, reduzieren manuelle Koordination und verkürzen Durchlaufzeiten.",
    "solutions.reliability.title": "Zuverlässige KI, die skalierbar ist",
    "solutions.reliability.description":
      "Strukturierte Evaluation, Monitoring und kontinuierliche Verbesserung machen KI verlässlich.",
    "solutions.enablement.title": "Enablement für nachhaltige Veränderung",
    "solutions.enablement.description":
      "Wir schulen Teams, begleiten Rollouts und helfen Organisationen, KI aus eigener Kraft zu skalieren.",

    // How we work
    "howWeWork.title": "Wie wir arbeiten",
    "howWeWork.paragraph1":
      "Wir verbinden Business-Verständnis mit tiefem technischen Können. Unsere Arbeit ist von Beginn an auf Unternehmensrealität ausgelegt: reife Delivery, praxistauglicher Rollout und klare Ownership.",
    "howWeWork.paragraph2":
      "Wir bleiben nah am realen Workflow, identifizieren Hebel für KI und bauen Lösungen, die im Betrieb funktionieren. Kunden arbeiten direkt mit einem schlanken Senior-Team – schnelle Entscheidungen, wenig Overhead.",

    // Differentiators
    "differentiators.title": "Was uns auszeichnet",
    "differentiators.enterprise.title": "Enterprise-ready ab Tag eins",
    "differentiators.enterprise.description":
      "Wir bauen für den Betrieb, nicht für das Labor. Zuverlässigkeit, Skalierung und Adoption sind Teil der Lösung.",
    "differentiators.team.title": "Schlankes Senior-Team",
    "differentiators.team.description":
      "Sie arbeiten mit erfahrenen Operator:innen und Buildern statt mit Delivery-Schichten.",
    "differentiators.business.title": "Business-first Execution",
    "differentiators.business.description":
      "Wir übersetzen KI in messbare Ergebnisse: schnellere Entscheidungen, weniger Aufwand, konsistentere Prozesse.",
    "differentiators.enablement.title": "Delivery plus Enablement",
    "differentiators.enablement.description":
      "Wir bauen Systeme und sorgen dafür, dass Ihre Teams sie zum Laufen bringen.",
    "differentiators.regional.title": "Cross-regionale Perspektive",
    "differentiators.regional.description":
      "Wir begleiten Unternehmen in Europa, Amerika und Asien-Pazifik.",

    // Outcomes
    "outcomes.title": "Die Ergebnisse, auf die wir zielen",
    "outcomes.description":
      "Wir konzentrieren uns auf reale Verbesserungen in Unternehmensumgebungen. Typische Zielbilder:",
    "outcomes.bullet1":
      "Weniger repetitive manuelle Arbeit in ausgewahlten Workflows",
    "outcomes.bullet2":
      "Kurzere Reaktionszyklen durch Klassifikation, Entwurf und Routing",
    "outcomes.bullet3": "Deutlich schnellerer Zugriff auf internes Wissen",
    "outcomes.bullet4": "Konstantere Entscheidungshilfe über Teams hinweg",
    "outcomes.bullet5": "Mehr Vertrauen durch Evaluation und Monitoring",
    "outcomes.note":
      "Konkrete Einspar- und Performance-Ziele behandeln wir als workflow-spezifische Aussagen, die mit echten Betriebsdaten belegt werden mussen.",

    // Training & Enablement
    "training.title": "Training und Enablement",
    "training.paragraph1":
      "Erfolgreiche KI-Einführung ist ebenso ein Menschen- wie ein Systemthema.",
    "training.paragraph2":
      "Wir bringen Trainingserfahrung mit, befähigen Teams im Umgang mit KI und unterstützen internen Wandel – von Workshops bis zu Hands-on-Guidance.",
    "training.outro":
      "So erhalten Kunden nicht nur eine Lösung, sondern bauen Fähigkeiten auf.",

    // Closing
    "closing.title": "KI, die vom ersten Tag an liefert.",
    "closing.description": "Für Unternehmen bedeutet das:",
    "closing.point1": "Bessere Entscheidungen aus internem Wissen",
    "closing.point2": "Weniger operative Reibung durch Automatisierung",
    "closing.point3": "Messbare, skalierbare und abgesicherte KI-Systeme",
    "closing.point4": "Teams, die den Wandel tragen",

    // Our Process
    "ourProcess.title": "Unser Prozess",
    "ourProcess.step1.title": "Discovery am realen Workflow",
    "ourProcess.step1.description":
      "Wir kartieren Wissen, Systeme und Stakeholder direkt im Prozess, damit jedes Build in der Realität verankert ist.",
    "ourProcess.step2.title": "Verbundene Systeme designen",
    "ourProcess.step2.description":
      "Wir verknüpfen internes Wissen mit Automatisierung, Evaluation und Business-Kontext.",
    "ourProcess.step3.title": "Iterationen mit Guardrails",
    "ourProcess.step3.description":
      "Wir liefern in fokussierten Inkrementen mit strukturierten Tests und Monitoring.",
    "ourProcess.step4.title": "Ownership ermöglichen",
    "ourProcess.step4.description":
      "Rollout, Training und klare Verantwortlichkeiten sichern dauerhafte Wirkung.",

    // AI Readiness
    "aiReadiness.title": "KI-Readiness-Assessment",
    "aiReadiness.description":
      "Verstehen Sie, wie nah Ihre Organisation an produktiver KI ist und wo Sie ansetzen sollten.",
    "aiReadiness.section1.title": "Wissensfundament",
    "aiReadiness.section1.content":
      "Bewerten Sie, wie internes Wissen erfasst, strukturiert und auffindbar ist.",
    "aiReadiness.section2.title": "Operative Automatisierung",
    "aiReadiness.section2.content":
      "Identifizieren Sie Workflows, in denen Automatisierung messbare Effekte erzielt.",
    "aiReadiness.section3.title": "Trust & Governance",
    "aiReadiness.section3.content":
      "Prüfen Sie Evaluation, Monitoring und Change-Management, um KI sicher zu skalieren.",
    "aiReadiness.cta.title": "Wie weit sind Sie?",
    "aiReadiness.cta.description1":
      "Machen Sie mit uns ein kostenloses Readiness-Assessment und bestimmen Sie die nächsten Schritte.",
    "aiReadiness.cta.description2": "Dauert weniger als fünf Minuten.",
    "aiReadiness.cta.button": "Assessment starten",

    // Pricing & Engagement
    "pricingEngagement.title": "Pricing & Collaboration",
    "pricingEngagement.description":
      "Transparente Einstiegspunkte für Workshops, Prototypen und Skalierung.",
    "pricingEngagement.tiers.free.title": "Erstes Meeting",
    "pricingEngagement.tiers.free.price": "Kostenlos",
    "pricingEngagement.tiers.free.description":
      "Ein kurzes Arbeitstreffen, um den Workflow zu skizzieren, Rahmenbedingungen zu prüfen und zu entscheiden, ob Workshop oder POC der nächste Schritt ist.",
    "pricingEngagement.tiers.free.item1":
      "Workflow-Orientierung und Priorisierung",
    "pricingEngagement.tiers.free.item2":
      "Ohne Kosten, ohne Deck, ohne Verpflichtung",
    "pricingEngagement.tiers.workshop.title": "Discovery-Workshop",
    "pricingEngagement.tiers.workshop.price": "Ab 2K USD",
    "pricingEngagement.tiers.workshop.description":
      "Ein fokussierter Workshop, um den Prozess zu verstehen, die Pipeline zu definieren und zu bestimmen, was zuerst automatisiert werden sollte.",
    "pricingEngagement.tiers.workshop.item1":
      "Prozessmapping und Stakeholder-Review",
    "pricingEngagement.tiers.workshop.item2": "Chancen und Risiken im Workflow",
    "pricingEngagement.tiers.workshop.item3":
      "Empfehlung für den nächsten Schritt",
    "pricingEngagement.tiers.poc.title": "POC-Entwicklung",
    "pricingEngagement.tiers.poc.price": "Ab 15K USD",
    "pricingEngagement.tiers.poc.description":
      "Ein funktionierender Prototyp auf Basis realer Beispiele, um Nutzen, Kontrollen und Edge Cases vor dem Skalieren zu validieren.",
    "pricingEngagement.tiers.poc.item1": "Prototype Build und Tests",
    "pricingEngagement.tiers.poc.item2":
      "Reale Beispieldaten und Ausnahmebehandlung",
    "pricingEngagement.tiers.poc.item3": "Review-Schleife und Übergabeplan",
    "pricingEngagement.tiers.retainer.title": "Skalierungslösungen",
    "pricingEngagement.tiers.retainer.price": "Auf Retainer-Basis",
    "pricingEngagement.tiers.retainer.description":
      "Laufende Unterstützung bei angrenzenden Workflows, Verbesserungen, Monitoring und operativem Rollout.",
    "pricingEngagement.tiers.retainer.item1":
      "Kontinuierliche Delivery-Unterstützung",
    "pricingEngagement.tiers.retainer.item2": "Monitoring und Optimierungen",
    "pricingEngagement.tiers.retainer.item3": "Roadmap für weitere Workflows",
    "pricingEngagement.details.title": "Was Sie zusätzlich erwähnen sollten",
    "pricingEngagement.details.point1":
      "Was in jeder Phase enthalten ist und was nicht.",
    "pricingEngagement.details.point2":
      "Typische Timeline für Workshop, POC und Retainer.",
    "pricingEngagement.details.point3":
      "Ob Steuern, Reise oder Drittanbieter-Tools separat berechnet werden.",
    "pricingEngagement.details.point4":
      "Ob Workshop-Gebühren bei einem anschließenden POC angerechnet werden.",
    "pricingEngagement.pricing.title": "So scopen wir",
    "pricingEngagement.pricing.description":
      "Wir richten Arbeit an messbaren Outcomes statt an Showcases aus.",
    "pricingEngagement.pricing.point1":
      "Strategy & Discovery Sprints: 2–4 Wochen für Workflows, Metriken und Architektur.",
    "pricingEngagement.pricing.point2":
      "Build & Automation Pods: Eingebettetes Senior-Team, das designed, liefert und iteriert.",
    "pricingEngagement.pricing.point3":
      "Enablement-Retainer: Kontinuierliche Verbesserung, Evaluation und Training.",
    "pricingEngagement.engagement.title": "So arbeiten wir zusammen",
    "pricingEngagement.engagement.description":
      "Transparente Checkpoints halten Delivery pragmatisch.",
    "pricingEngagement.engagement.point1":
      "Gemeinsame Roadmaps auf Basis von Workflow-Daten und Business-Zielen.",
    "pricingEngagement.engagement.point2":
      "Schnelle Piloten mit klaren Messpunkten vor größerem Rollout.",
    "pricingEngagement.engagement.point3":
      "Scale-Pläne für Deployment, Monitoring und Ownership-Übergabe.",

    // Workshops
    "workshops.title": "Workshops",
    "workshops.description":
      "Hands-on-Formate, die Teams für Design, Governance und Betrieb von KI wappnen.",
    "workshops.workshop1.title": "Knowledge Synthesis Lab",
    "workshops.workshop1.description":
      "Wir entwerfen, wie Dokumente, Daten und Expertise zu kontextreicher Entscheidungsunterstützung werden.",
    "workshops.workshop1.tag1": "Wissen",
    "workshops.workshop1.tag2": "Decision Support",
    "workshops.workshop2.title": "Workflow Automation Sprint",
    "workshops.workshop2.description":
      "Wir kartieren und prototypen Automatisierungen, die manuelle Koordination eliminieren.",
    "workshops.workshop2.tag1": "Automatisierung",
    "workshops.workshop2.tag2": "Workflow",
    "workshops.workshop3.title": "Reliability & Governance Clinic",
    "workshops.workshop3.description":
      "Wir etablieren Evaluation, Monitoring und Change-Control für skalierbare KI.",
    "workshops.workshop3.tag1": "Reliability",
    "workshops.workshop3.tag2": "Governance",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Leistungen",
    "footer.projects": "Fallstudien",
    "footer.partners": "Partner",
    "footer.legal": "Rechtliches",
    "footer.copyright": "Alle Rechte vorbehalten.",

    // Imprint
    "imprint.title": "Impressum",
    "imprint.company.title": "Unternehmen",
    "imprint.company": "Look Beyond Solutions Pte. Ltd.",
    "imprint.registrationNumber.title": "Firmenregistierungsnummer (UEN)",
    "imprint.registrationNumber": "202439104D",
    "imprint.address.title": "Registrierte Adresse",
    "imprint.address":
      "22 Sin Ming Lane #06-76, Midview City, 573969 Singapore",
    "imprint.managingDirector.title": "Geschäftsführer",
    "imprint.managingDirector": "Julien Look",
    "imprint.contact.title": "Kontakt",
    "imprint.contact": "contact@lookbeyond.sg",
    "imprint.responsible": "Verantwortlich für den Inhalt",
    "imprint.sameAddress": "Julien Look",

    phone: "+49 160 9585 0537",
  },
};

export type Language = "en" | "de";

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key;
}
