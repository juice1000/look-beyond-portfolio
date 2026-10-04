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
    "nav.practice": "Our Practice",
    "nav.ourProcess": "Our Process",
    "nav.pricingEngagement": "Pricing & Engagement",
    "nav.workshops": "Workshops",
    "nav.contact": "Contact Us",
    "nav.imprint": "Imprint",
    "nav.privacyPolicy": "Privacy Policy",
    "nav.termsOfUse": "Terms of Use",
    "nav.compliance": "Compliance & Security",
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
      "Selected partners that extend our delivery capabilities across AI operations, document intelligence, and app delivery.",
    "partners.intro":
      "Each partner covers a distinct part of the stack. Together we cover discovery, implementation, and ongoing operations without stretching into weak spots.",
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
    "partners.mueller.point1":
      "Document extraction, classification, and search",
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
    "caseStudies.sales.title": "FGS Global",
    "caseStudies.sales.painPoint":
      "Evaluation and monitoring for safer enterprise AI.",
    "caseStudies.sales.kpi": "Continuous testing in production",
    "caseStudies.operations.title": "Sourcera",
    "caseStudies.operations.painPoint":
      "Automation for procurement intelligence workflows.",
    "caseStudies.operations.kpi": "Less manual research effort",

    // Deep Case Study Content
    "caseStudies.strict.tagline":
      "An AI-first operational transformation that frees more than 2 hours per person per day",
    "caseStudies.strict.description":
      "Strict's backoffice handles email, invoicing, and operations across disconnected tools. We are building an AI-first transformation on top of an ERPNext backbone: an AI email assistant that auto-drafts shared inbox replies, an OCR and LLM invoice extraction tool that classifies and counts line items automatically, and a centralised ERP replacing Lexware, Google Sheets, and legacy systems. The combined transformation is projected to free more than 2 hours per person per day and reduce the mental load of context-switching across fragmented tools.",
    "caseStudies.strict.bullet1":
      "AI email assistant drafts shared inbox replies automatically. Staff review and send, the system never does",
    "caseStudies.strict.bullet2":
      "OCR and LLM invoice tool extracts and classifies line items (prints, textiles, non-relevant) into a GDPR-compliant cloud database",
    "caseStudies.strict.bullet3":
      "ERPNext centralises Lexware, Google Sheets, and legacy tools into one workplace, migrating 15+ years of historical data",
    "caseStudies.strict.bullet4":
      "Projected to free 2+ hours per person daily, representing measurable recoverable capacity across the entire backoffice",


    "caseStudies.fgs.title": "FGS Global",
    "caseStudies.fgs.tagline":
      "One scorecard for 30+ agents across different use cases.",
    "caseStudies.fgs.description":
      "FGS Global runs specialist AI agents for M&A, IPO communications, research and stakeholder analysis. We built the evaluation and monitoring layer so every agent is graded the same way and every release is tested before it ships.",
    "caseStudies.fgs.bullet1":
      "Productivity, quality and cost graded on one unified scale across use cases",
    "caseStudies.fgs.bullet2":
      "Results split by user context, including location and seniority",
    "caseStudies.fgs.bullet3":
      "Releases gated on critical checks such as hallucination, relevance and faithfulness",
    "caseStudies.fgs.bullet4":
      "Production conversations reviewed and turned into new test cases",

    "caseStudies.sourcera.title": "Sourcera",
    "caseStudies.sourcera.tagline":
      "Saving opportunities scored against a benchmark, not by opinion.",
    "caseStudies.sourcera.description":
      "Sourcera generates cost-saving opportunities from spend and supplier data. We built the evaluation that decides which opportunities are worth acting on. The process now runs without manual effort.",
    "caseStudies.sourcera.bullet1":
      "Savings identified measured on the opportunities the system generates",
    "caseStudies.sourcera.bullet2":
      "Output quality compared against benchmark datasets",
    "caseStudies.sourcera.bullet3":
      "Each opportunity scored on geographic relevance, critical suppliers and cross-domain suppliers",
    "caseStudies.sourcera.bullet4":
      "Fully automated, so scoring is repeatable across every run",

    "caseStudies.expresssteuer.tagline":
      "Rebuilding a cloud data foundation and cutting costs with AI-driven automation",
    "caseStudies.expresssteuer.description":
      "Expresssteuer, a tax services company, needed to modernize its cloud data infrastructure and reduce both storage and operational costs. We rebuilt the data warehouse using Big Query and dbt, deployed AI solutions for legal document screening, and built an autonomous chatbot to handle individual client case inquiries.",
    "caseStudies.expresssteuer.bullet1":
      "More than 90% reduction in database infrastructure costs after data warehouse rebuild",
    "caseStudies.expresssteuer.bullet2":
      "Around 70% cut in operational costs through custom internal AI solutions",
    "caseStudies.expresssteuer.bullet3":
      "Automated legal document screening and extraction using Google Vertex AI",
    "caseStudies.expresssteuer.bullet4":
      "Client-facing agentic chatbot reducing manual handling of case inquiries",

    "caseStudies.fullcircle.tagline":
      "Building an AI-powered mobile advisor for personalized parenting guidance",
    "caseStudies.fullcircle.description":
      "Full-Circle Family needed an accessible AI advisor that parents could reach through everyday channels. We led the architecture and implementation of an AI-powered chatbot accessible via WhatsApp, using a fine-tuned LLM combined with a domain-specific RAG knowledge base for accurate, safe parenting guidance.",
    "caseStudies.fullcircle.bullet1":
      "Mobile-first AI advisor accessible directly through WhatsApp",
    "caseStudies.fullcircle.bullet2":
      "Fine-tuned LLM with domain-specific knowledge base for consistent, accurate responses",
    "caseStudies.fullcircle.bullet3":
      "Scalable microservices architecture on AWS for reliable production deployment",
    "caseStudies.fullcircle.bullet4":
      "User behavior analytics dashboard to track engagement and inform product strategy",

    "caseStudies.rcycle.tagline":
      "Giving manufacturers real-time visibility into recycling compliance across facilities",
    "caseStudies.rcycle.description":
      "R-Cycle needed a centralized dashboard to help manufacturers monitor plastic production data and meet government recycling mandates. We led development of the customer-facing platform, rebuilt the data and file management layer on GCP, and introduced a comprehensive testing strategy for a previously untested application.",
    "caseStudies.rcycle.bullet1":
      "Cross-manufacturer tracking of plastic production data in a unified dashboard",
    "caseStudies.rcycle.bullet2":
      "GCP-based data transformation for scalable file and record management",
    "caseStudies.rcycle.bullet3":
      "Compliance visibility aligned with government recycling mandates",
    "caseStudies.rcycle.bullet4":
      "End-to-end testing strategy introduced to stabilize a previously untested codebase",

    "caseStudies.cinoware.tagline":
      "Connecting remote robot operation to ML performance monitoring in critical infrastructure",
    "caseStudies.cinoware.description":
      "Cinoware builds testing and automation software for critical infrastructure in the government and telecommunications sector. We developed a remote robot operation console, implemented navigation tracking through image detection, and built an ML pipeline with performance monitoring to benchmark and improve algorithm accuracy over time.",
    "caseStudies.cinoware.bullet1":
      "Remote robot control application with command-issuance interface built in Python and React",
    "caseStudies.cinoware.bullet2":
      "Navigation tracking through real-time image detection using OpenCV",
    "caseStudies.cinoware.bullet3":
      "ML pipeline for algorithm benchmarking and performance tracking with MLflow",
    "caseStudies.cinoware.bullet4":
      "Selenium Grid testing suite with Allure reporting for systematic quality assurance",


    "caseStudies.applai.tagline":
      "Automating job application workflows with an agentic AI pipeline",
    "caseStudies.applai.description":
      "Applai needed to accelerate the job search and cover letter process for users at scale. We built a fully agentic backend using LangGraph for workflow orchestration and multiple LLMs with RAG for high-quality, consistent cover letter generation, tracked and evaluated through LangSmith.",
    "caseStudies.applai.bullet1":
      "Agentic pipeline orchestrated with LangGraph for end-to-end job search automation",
    "caseStudies.applai.bullet2":
      "Multi-LLM cover letter generation with RAG for domain-specific accuracy and consistency",
    "caseStudies.applai.bullet3":
      "Selenium-based scraper backend built on FastAPI for live job market data",
    "caseStudies.applai.bullet4":
      "LangSmith integration for continuous model evaluation and quality tracking",

    "caseStudies.kunveno.tagline":
      "Integrating an enterprise application directly into Microsoft Teams for 270 million users",
    "caseStudies.kunveno.description":
      "kunveno needed to extend their SaaS product into the Microsoft Teams ecosystem to reach corporate users at scale. We architected the Azure cloud environment, implemented the Teams Message Extension, and built organization-wide authentication via Microsoft's delegated OAuth protocol.",
    "caseStudies.kunveno.bullet1":
      "Microsoft Teams Message Extension built to extend product reach to 270 million potential users",
    "caseStudies.kunveno.bullet2":
      "Microsoft Azure environment architected from the ground up as lead developer",
    "caseStudies.kunveno.bullet3":
      "Organization-wide authentication implemented via Azure AD and delegated OAuth",
    "caseStudies.kunveno.bullet4":
      "CI/CD pipeline managed across multiple deployment stages in close collaboration with the CTO",

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
      "Review how AI is tested, monitored and kept compliant, and whether you can show its return.",
    "aiReadiness.cta.title": "Curious how far you've come?",
    "aiReadiness.cta.description1":
      "Run a complimentary AI readiness assessment with us to see the next steps worth tackling.",
    "aiReadiness.cta.description2": "It takes less than five minutes.",
    "aiReadiness.cta.button": "Start assessment",

    // Pricing & Engagement Section
    "pricingEngagement.title": "Pricing & Engagement",
    "pricingEngagement.description":
      "Transparent starting points for reviews, prototypes, and ongoing operations.",
    "pricingEngagement.tiers.free.title": "First meeting",
    "pricingEngagement.tiers.free.price": "Free",
    "pricingEngagement.tiers.free.description":
      "A short working session to review one agent or workflow, surface constraints, and decide whether a workshop or POC is the right next step.",
    "pricingEngagement.tiers.free.item1": "Review of one agent or workflow",
    "pricingEngagement.tiers.free.item2": "No charge, no deck, no commitment",
    "pricingEngagement.tiers.workshop.title": "Discovery workshop",
    "pricingEngagement.tiers.workshop.description":
      "A focused workshop to understand the process, set the baseline, and define what should be built and tested first.",
    "pricingEngagement.tiers.workshop.item1":
      "Process mapping and baseline",
    "pricingEngagement.tiers.workshop.item2":
      "Opportunities, risks and success measures",
    "pricingEngagement.tiers.workshop.item3": "Next-step recommendation",
    "pricingEngagement.tiers.poc.title": "POC development",
    "pricingEngagement.tiers.poc.description":
      "A working prototype built against real examples, with its first test set, so you can validate usefulness, controls and compliance before scaling.",
    "pricingEngagement.tiers.poc.item1": "Prototype build and first test set",
    "pricingEngagement.tiers.poc.item2":
      "Real sample data and exception handling",
    "pricingEngagement.tiers.poc.item3": "Review loop and handoff plan",
    "pricingEngagement.tiers.retainer.title": "Operations retainer",
    "pricingEngagement.tiers.retainer.price": "Retainer basis",
    "pricingEngagement.tiers.retainer.description":
      "Ongoing testing, monitoring and scorecard reporting for your agents, plus delivery of adjacent workflows.",
    "pricingEngagement.tiers.retainer.item1": "Continuous testing and monitoring",
    "pricingEngagement.tiers.retainer.item2": "Regular scorecard reporting",
    "pricingEngagement.tiers.retainer.item3": "Roadmap for adjacent workflows",
    "pricingEngagement.details.title": "Good to know",
    "pricingEngagement.details.point1":
      "Each phase is scoped tightly: workshops map one workflow, POCs build one working prototype. You know what's delivered before you commit to the next phase.",
    "pricingEngagement.details.point3":
      "Pricing covers our team's time and delivery. Third-party tooling or infrastructure costs are agreed upfront, never a surprise on the invoice.",
    "pricingEngagement.pricing.title": "How we scope",
    "pricingEngagement.pricing.description":
      "We align work around measurable outcomes instead of vanity experiments.",
    "pricingEngagement.pricing.point1":
      "Strategy & discovery sprints: 2–4 weeks to align on workflows, metrics, and architecture.",
    "pricingEngagement.pricing.point2":
      "Build & automate pods: A senior cross-functional team embedded to design, ship, and iterate.",
    "pricingEngagement.pricing.point3":
      "Operating retainers: continuous testing, monitoring and reporting, with training for internal teams.",
    "pricingEngagement.engagement.title": "How we collaborate",
    "pricingEngagement.engagement.description":
      "Clear checkpoints keep delivery pragmatic and transparent.",
    "pricingEngagement.engagement.point1":
      "Co-defined roadmap anchored in a baseline and business outcomes.",
    "pricingEngagement.engagement.point2":
      "Fast pilots with measurable checkpoints before broader rollout.",
    "pricingEngagement.engagement.point3":
      "Scale plans covering deployment, monitoring, and ownership transfer.",

    // Workshops Section
    "workshops.title": "Workshops",
    "workshops.description":
      "Hands-on sessions that equip teams to design, test, and operate AI.",
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
    "workshops.workshop3.title": "Reliability & compliance clinic",
    "workshops.workshop3.description":
      "Set up the testing, compliance checks, and monitoring that keep AI working in production, and the scorecard that proves it.",
    "workshops.workshop3.tag1": "Testing",
    "workshops.workshop3.tag2": "Compliance",

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
    "nav.practice": "Unsere Praxis",
    "nav.ourProcess": "Unser Prozess",
    "nav.pricingEngagement": "Pricing & Collaboration",
    "nav.workshops": "Workshops",
    "nav.contact": "Kontakt",
    "nav.imprint": "Impressum",
    "nav.privacyPolicy": "Datenschutzerklärung",
    "nav.termsOfUse": "Nutzungsbedingungen",
    "nav.compliance": "Compliance & Sicherheit",
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
      "Ausgewählte Partner, die unsere Delivery-Fähigkeiten in KI-Betrieb, Dokumentenintelligenz und App-Delivery erweitern.",
    "partners.intro":
      "Jeder Partner deckt einen klaren Teil des Stacks ab. Gemeinsam unterstützen wir Discovery, Umsetzung und den laufenden Betrieb, ohne Schwachstellen zu überdecken.",
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
    "caseStudies.sales.title": "FGS Global",
    "caseStudies.sales.painPoint":
      "Evaluation und Monitoring für vertrauenswürdige KI.",
    "caseStudies.sales.kpi": "Kontinuierliche Tests",
    "caseStudies.operations.title": "Sourcera",
    "caseStudies.operations.painPoint":
      "Automatisierung für Beschaffungs-Workflows.",
    "caseStudies.operations.kpi": "Weniger manuelle Recherche",

    // Deep Case Study Content
    "caseStudies.strict.tagline":
      "Eine KI-zuerst-Transformation, die mehr als 2 Stunden pro Person und Tag freisetzt",
    "caseStudies.strict.description":
      "Das Backoffice von Strict verwaltet E-Mails, Rechnungen und operative Abläufe über fragmentierte Tools. Wir bauen eine KI-zuerst-Transformation auf einem ERPNext-Backbone: einen KI-E-Mail-Assistenten, der Antworten im geteilten Posteingang automatisch entwirft, ein OCR- und LLM-Rechnungsextraktionstool zur automatischen Klassifikation von Positionen sowie ein zentralisiertes ERP als Ersatz für Lexware, Google Sheets und Altsysteme. Die Transformation soll mehr als 2 Stunden pro Person und Tag freisetzen und den mentalen Aufwand durch Kontextwechsel zwischen fragmentierten Tools deutlich reduzieren.",
    "caseStudies.strict.bullet1":
      "KI-E-Mail-Assistent entwirft Antworten im geteilten Posteingang automatisch. Mitarbeitende prüfen und senden, das System nie",
    "caseStudies.strict.bullet2":
      "OCR- und LLM-Rechnungstool extrahiert und klassifiziert Positionen (Drucke, Textilien, nicht relevant) in einer DSGVO-konformen Cloud-Datenbank",
    "caseStudies.strict.bullet3":
      "ERPNext konsolidiert Lexware, Google Sheets und Altsysteme in einem zentralen Arbeitsplatz, mit Migration von über 15 Jahren Geschäftsdaten",
    "caseStudies.strict.bullet4":
      "Projektiert: 2+ Stunden täglich je Person freigesetzt, messbar wiedergewinnbare Kapazität im gesamten Backoffice",


    "caseStudies.fgs.title": "FGS Global",
    "caseStudies.fgs.tagline":
      "Eine Scorecard für über 30 Agenten in unterschiedlichen Anwendungsfällen.",
    "caseStudies.fgs.description":
      "FGS Global betreibt spezialisierte KI-Agenten für M&A, IPO-Kommunikation, Recherche und Stakeholder-Analyse. Wir haben die Evaluations- und Monitoring-Schicht gebaut, damit jeder Agent gleich bewertet wird und jedes Release vor der Auslieferung getestet ist.",
    "caseStudies.fgs.bullet1":
      "Produktivität, Qualität und Kosten auf einer einheitlichen Skala über alle Anwendungsfälle bewertet",
    "caseStudies.fgs.bullet2":
      "Ergebnisse nach Nutzerkontext aufgeteilt, darunter Standort und Seniorität",
    "caseStudies.fgs.bullet3":
      "Releases an kritische Checks wie Halluzination, Relevanz und Faithfulness gekoppelt",
    "caseStudies.fgs.bullet4":
      "Produktionsgespräche geprüft und in neue Testfälle überführt",

    "caseStudies.sourcera.title": "Sourcera",
    "caseStudies.sourcera.tagline":
      "Einsparpotenziale gegen einen Benchmark bewertet, nicht nach Meinung.",
    "caseStudies.sourcera.description":
      "Sourcera erzeugt Einsparpotenziale aus Ausgaben- und Lieferantendaten. Wir haben die Evaluation gebaut, die entscheidet, welche Potenziale sich lohnen. Der Prozess läuft inzwischen ohne manuellen Aufwand.",
    "caseStudies.sourcera.bullet1":
      "Identifizierte Einsparungen an den vom System erzeugten Potenzialen gemessen",
    "caseStudies.sourcera.bullet2":
      "Ausgabequalität gegen Benchmark-Datensätze verglichen",
    "caseStudies.sourcera.bullet3":
      "Jedes Potenzial nach geografischer Relevanz, kritischen Lieferanten und domänenübergreifenden Lieferanten bewertet",
    "caseStudies.sourcera.bullet4":
      "Vollständig automatisiert, sodass die Bewertung bei jedem Lauf reproduzierbar ist",

    "caseStudies.expresssteuer.tagline":
      "Cloud-Datenfundament neu aufgebaut und Kosten durch KI-Automatisierung drastisch gesenkt",
    "caseStudies.expresssteuer.description":
      "Expresssteuer musste seine Cloud-Dateninfrastruktur modernisieren und sowohl Speicher- als auch Betriebskosten senken. Wir bauten das Data Warehouse mit Big Query und dbt neu auf, entwickelten KI-Lösungen für die Prüfung rechtlicher Dokumente und bauten einen autonomen Chatbot für Mandantenanfragen.",
    "caseStudies.expresssteuer.bullet1":
      "Mehr als 90 % Reduktion der Datenbankinfrastrukturkosten nach dem Data-Warehouse-Umbau",
    "caseStudies.expresssteuer.bullet2":
      "Rund 70 % weniger Betriebskosten durch interne KI-Lösungen",
    "caseStudies.expresssteuer.bullet3":
      "Automatisierte Prüfung und Extraktion rechtlicher Dokumente mit Google Vertex AI",
    "caseStudies.expresssteuer.bullet4":
      "Mandantenseitiger KI-Chatbot reduziert manuelle Bearbeitung von Fallanfragen",

    "caseStudies.fullcircle.tagline":
      "KI-gestützter mobiler Berater für personalisierte Erziehungsbegleitung",
    "caseStudies.fullcircle.description":
      "Full-Circle Family benötigte einen zugänglichen KI-Berater für Eltern über alltägliche Kanäle. Wir führten Architektur und Umsetzung eines WhatsApp-basierten KI-Chatbots – mit fein-tuned LLM und domänenspezifischer RAG-Wissensbasis für zuverlässige Elternberatung.",
    "caseStudies.fullcircle.bullet1":
      "Mobile-first KI-Berater direkt über WhatsApp erreichbar",
    "caseStudies.fullcircle.bullet2":
      "Fein-tuned LLM mit domänenspezifischer Wissensbasis für konsistente, akkurate Antworten",
    "caseStudies.fullcircle.bullet3":
      "Skalierbare Microservices-Architektur auf AWS für zuverlässigen Produktivbetrieb",
    "caseStudies.fullcircle.bullet4":
      "Nutzerverhalten-Dashboard zur Steuerung und Weiterentwicklung der Produktstrategie",

    "caseStudies.rcycle.tagline":
      "Echtzeit-Übersicht zur Recycling-Compliance über Produktionsstandorte hinweg",
    "caseStudies.rcycle.description":
      "R-Cycle benötigte ein zentrales Dashboard für Hersteller, um Produktionsdaten zu überwachen und staatliche Recyclingvorgaben zu erfüllen. Wir führten die Plattformentwicklung, bauten die Daten- und Dateiverwaltung auf GCP um und etablierten eine umfassende Teststrategie.",
    "caseStudies.rcycle.bullet1":
      "Herstellerübergreifendes Tracking von Kunststoffproduktionsdaten in einem zentralen Dashboard",
    "caseStudies.rcycle.bullet2":
      "GCP-basierte Datentransformation für skalierbare Datei- und Datensatzverwaltung",
    "caseStudies.rcycle.bullet3":
      "Compliance-Transparenz entsprechend staatlicher Recyclingvorgaben",
    "caseStudies.rcycle.bullet4":
      "Einführung einer End-to-End-Teststrategie zur Stabilisierung der Anwendung",

    "caseStudies.cinoware.tagline":
      "Fernsteuerung von Robotern und ML-Performance-Monitoring in kritischer Infrastruktur",
    "caseStudies.cinoware.description":
      "Cinoware entwickelt Test- und Automatisierungssoftware für kritische Infrastruktur im Regierungs- und Telekommunikationssektor. Wir bauten eine Fernsteuerungsanwendung für Roboter, implementierten Navigations-Tracking via Bilderkennung und erstellten eine ML-Pipeline mit Performance-Monitoring.",
    "caseStudies.cinoware.bullet1":
      "Roboterfernsteuerungsanwendung mit Befehlsschnittstelle in Python und React",
    "caseStudies.cinoware.bullet2":
      "Navigations-Tracking via Echtzeit-Bilderkennung mit OpenCV",
    "caseStudies.cinoware.bullet3":
      "ML-Pipeline für Algorithm-Benchmarking und Performance-Tracking mit MLflow",
    "caseStudies.cinoware.bullet4":
      "Selenium Grid Testsuite mit Allure-Reporting für systematische Qualitätssicherung",


    "caseStudies.applai.tagline":
      "Bewerbungsprozesse mit einer agentischen KI-Pipeline automatisieren",
    "caseStudies.applai.description":
      "Applai wollte Stellensuche und Bewerbungsschreiben für Nutzer skalierbar beschleunigen. Wir bauten ein vollständig agentisches Backend mit LangGraph zur Workflow-Orchestrierung und mehreren LLMs mit RAG für konsistente, hochwertige Anschreiben – überwacht und evaluiert via LangSmith.",
    "caseStudies.applai.bullet1":
      "Agentische Pipeline mit LangGraph für durchgängige Automatisierung der Stellensuche",
    "caseStudies.applai.bullet2":
      "Multi-LLM-Anschreibengenerierung mit RAG für domänenspezifische Genauigkeit",
    "caseStudies.applai.bullet3":
      "Selenium-basiertes Scraper-Backend auf FastAPI für aktuelle Stellenmarktdaten",
    "caseStudies.applai.bullet4":
      "LangSmith-Integration für kontinuierliche Modellevaluation und Qualitätstracking",

    "caseStudies.kunveno.tagline":
      "Unternehmensanwendung direkt in Microsoft Teams für 270 Millionen Nutzer integriert",
    "caseStudies.kunveno.description":
      "kunveno wollte sein SaaS-Produkt im Microsoft-Teams-Ökosystem positionieren, um Unternehmensnutzer skalierbar zu erreichen. Wir konzipierten die Azure-Umgebung, implementierten die Teams-Message-Extension und bauten organisationsweite Authentifizierung via Microsoft OAuth.",
    "caseStudies.kunveno.bullet1":
      "Microsoft Teams Message Extension für den Zugang zu 270 Millionen potenziellen Nutzern entwickelt",
    "caseStudies.kunveno.bullet2":
      "Microsoft Azure Umgebung von Grund auf als Lead Developer aufgebaut",
    "caseStudies.kunveno.bullet3":
      "Organisationsweite Authentifizierung via Azure AD und delegiertem OAuth implementiert",
    "caseStudies.kunveno.bullet4":
      "CI/CD-Pipeline über mehrere Deployment-Stages in enger Zusammenarbeit mit dem CTO verwaltet",

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
      "Prüfen Sie, wie KI getestet, überwacht und regelkonform gehalten wird und ob Sie ihren Ertrag belegen können.",
    "aiReadiness.cta.title": "Wie weit sind Sie?",
    "aiReadiness.cta.description1":
      "Machen Sie mit uns ein kostenloses Readiness-Assessment und bestimmen Sie die nächsten Schritte.",
    "aiReadiness.cta.description2": "Dauert weniger als fünf Minuten.",
    "aiReadiness.cta.button": "Assessment starten",

    // Pricing & Engagement
    "pricingEngagement.title": "Pricing & Collaboration",
    "pricingEngagement.description":
      "Transparente Einstiegspunkte für Reviews, Prototypen und laufenden Betrieb.",
    "pricingEngagement.tiers.free.title": "Erstes Meeting",
    "pricingEngagement.tiers.free.price": "Kostenlos",
    "pricingEngagement.tiers.free.description":
      "Eine kurze Arbeitssitzung, in der wir einen Agenten oder Workflow prüfen, Einschränkungen aufdecken und klären, ob ein Workshop oder POC der richtige nächste Schritt ist.",
    "pricingEngagement.tiers.free.item1":
      "Review eines Agenten oder Workflows",
    "pricingEngagement.tiers.free.item2":
      "Ohne Kosten, ohne Deck, ohne Verpflichtung",
    "pricingEngagement.tiers.workshop.title": "Discovery-Workshop",
    "pricingEngagement.tiers.workshop.description":
      "Ein fokussierter Workshop, um den Prozess zu verstehen, die Baseline festzulegen und zu bestimmen, was zuerst gebaut und getestet wird.",
    "pricingEngagement.tiers.workshop.item1":
      "Prozesserfassung und Baseline",
    "pricingEngagement.tiers.workshop.item2": "Chancen, Risiken und Erfolgskennzahlen",
    "pricingEngagement.tiers.workshop.item3":
      "Empfehlung für den nächsten Schritt",
    "pricingEngagement.tiers.poc.title": "POC-Entwicklung",
    "pricingEngagement.tiers.poc.description":
      "Ein funktionierender Prototyp auf Basis echter Beispiele, mit erstem Testset, damit Sie Nutzen, Kontrollen und Compliance vor der Skalierung prüfen können.",
    "pricingEngagement.tiers.poc.item1": "Prototyp und erstes Testset",
    "pricingEngagement.tiers.poc.item2":
      "Reale Beispieldaten und Ausnahmebehandlung",
    "pricingEngagement.tiers.poc.item3": "Review-Schleife und Übergabeplan",
    "pricingEngagement.tiers.retainer.title": "Betriebs-Retainer",
    "pricingEngagement.tiers.retainer.price": "Auf Retainer-Basis",
    "pricingEngagement.tiers.retainer.description":
      "Laufendes Testen, Monitoring und Scorecard-Reporting für Ihre Agenten, plus Umsetzung angrenzender Workflows.",
    "pricingEngagement.tiers.retainer.item1":
      "Kontinuierliches Testen und Monitoring",
    "pricingEngagement.tiers.retainer.item2": "Regelmäßiges Scorecard-Reporting",
    "pricingEngagement.tiers.retainer.item3": "Roadmap für weitere Workflows",
    "pricingEngagement.details.title": "Gut zu wissen",
    "pricingEngagement.details.point1":
      "Jede Phase ist klar abgegrenzt: Workshops kartieren einen Workflow, POCs bauen einen funktionierenden Prototyp. Sie wissen, was geliefert wird, bevor Sie sich für die nächste Phase entscheiden.",
    "pricingEngagement.details.point3":
      "Der Preis deckt Zeit und Umsetzung unseres Teams ab. Kosten für Drittanbieter-Tools oder Infrastruktur werden vorab abgestimmt, keine Überraschungen auf der Rechnung.",
    "pricingEngagement.pricing.title": "So scopen wir",
    "pricingEngagement.pricing.description":
      "Wir richten Arbeit an messbaren Outcomes statt an Showcases aus.",
    "pricingEngagement.pricing.point1":
      "Strategy & Discovery Sprints: 2–4 Wochen für Workflows, Metriken und Architektur.",
    "pricingEngagement.pricing.point2":
      "Build & Automation Pods: Eingebettetes Senior-Team, das designed, liefert und iteriert.",
    "pricingEngagement.pricing.point3":
      "Betriebs-Retainer: laufendes Testen, Monitoring und Reporting, mit Training für interne Teams.",
    "pricingEngagement.engagement.title": "So arbeiten wir zusammen",
    "pricingEngagement.engagement.description":
      "Transparente Checkpoints halten Delivery pragmatisch.",
    "pricingEngagement.engagement.point1":
      "Gemeinsam definierte Roadmap, verankert in einer Baseline und Geschäftsergebnissen.",
    "pricingEngagement.engagement.point2":
      "Schnelle Piloten mit klaren Messpunkten vor größerem Rollout.",
    "pricingEngagement.engagement.point3":
      "Scale-Pläne für Deployment, Monitoring und Ownership-Übergabe.",

    // Workshops
    "workshops.title": "Workshops",
    "workshops.description":
      "Praxisnahe Sessions, die Teams befähigen, KI zu gestalten, zu testen und zu betreiben.",
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
    "workshops.workshop3.title": "Reliability & Compliance Clinic",
    "workshops.workshop3.description":
      "Testing, Compliance-Prüfungen und Monitoring aufsetzen, die KI im Betrieb zuverlässig halten, samt Scorecard als Beleg.",
    "workshops.workshop3.tag1": "Testing",
    "workshops.workshop3.tag2": "Compliance",

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
