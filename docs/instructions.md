Use this as the Codex instruction:

# Task: Build product-specific, industry-adaptable landing page

You are working on the existing landing page codebase. Build a new landing page version that integrates the updated positioning below, while preserving the existing component architecture.

## Important constraints

- Do **not** rewrite or delete existing components unless absolutely necessary.
- Keep previously built components independent and reusable.
- Preserve the existing design system, layout primitives, animation patterns, and component boundaries.
- Do not collapse everything into one large page component.
- Where possible, create new content/config files and pass data into existing reusable components.
- Any existing components for hero sections, metrics, cards, sections, industry panels, tabs, case studies, CTAs, or feature grids should remain standalone.
- Adjust existing metric/claim numbers only where they are currently too generic, unsupported, or misaligned with the updated positioning.
- Do not invent aggressive ROI claims, savings numbers, or performance stats unless they are clearly framed as examples, placeholders, or configurable claims.
- Prefer grounded, qualitative credibility over exaggerated metrics.
- Keep the page suitable for an early-stage B2B AI/workflow consulting-product hybrid.

---

# Positioning direction

The landing page should position the company as building:

> Secure AI workflow systems that turn fragmented operational work into connected, reliable pipelines.
> Supporting explanation:
> We connect documents, business tools, company knowledge, and specialized AI agents so operations teams can automate repetitive coordination work without losing control, visibility, or security.
> The page should feel product-specific, not like a generic AI agency.
> Avoid leading with:

- “We build AI agents”
- “We help companies adopt AI”
- “Custom AI solutions for every business”
- “Chatbots for your company”
  Instead, lead with:
- AI workflow systems
- Operational pipelines
- Document-heavy and coordination-heavy workflows
- Security, stability, monitoring, and human review
- Industry-specific examples for logistics, manufacturing, and procurement

---

# Target industries to display

The page should remain industry-agnostic at the product level, but clearly show focus and relevance for:

1. Logistics
2. Manufacturing
3. Procurement-heavy organizations
   These should appear as industry-specific routes, tabs, cards, or sections.
   The main product system should stay the same across all industries. Only the examples, problem statements, and workflow pipelines should change.

---

# Recommended page architecture

Build the landing page with the following structure.

## 1. Hero section

Purpose: explain the product category and outcome clearly.
Suggested copy:

### Headline

Secure AI workflow systems for operational teams

### Subheadline

We help logistics, manufacturing, and procurement-heavy teams turn fragmented documents, emails, spreadsheets, and business tools into structured AI-assisted pipelines.

### Supporting line

Instead of isolated chatbots or one-off automations, we build connected systems where specialized agents extract, classify, route, draft, validate, and escalate work under clear security and review controls.

### Primary CTA

Map an automation opportunity

### Secondary CTA

Explore industry workflows
Hero visual idea:
Show a pipeline diagram:

```text
Inputs → Pipeline Layer → Specialized Agents → Control Layer → Business Outcomes

Where:

Inputs:
Emails, PDFs, spreadsheets, ERP exports, SOPs
Pipeline layer:
Classify, extract, validate, route, approve
Specialized agents:
Document agent, knowledge agent, communication agent, exception agent, reporting agent
Control layer:
Permissions, evaluations, monitoring, audit trails, human review
Outcomes:
Faster response times, less manual work, better visibility, fewer errors

⸻

2. Problem section

Purpose: show that the company understands operational pain.

Suggested heading:

Operations teams are stuck between fragmented tools and unreliable automation.

Problem cards:

1. Critical workflows still run through email, PDFs, spreadsheets, and manual follow-ups.
2. Existing tools hold data, but do not coordinate work across teams.
3. AI pilots often stay isolated because they lack security, monitoring, and workflow integration.
4. Operations teams need automation that supports human review instead of removing control.

⸻

3. Core system section

Purpose: explain the reusable product system.

Suggested heading:

One base system. Multiple operational workflows.

Show the system as five layers:

Connect

Connect to documents, inboxes, databases, ERPs, CRMs, spreadsheets, and knowledge sources.

Structure

Turn unstructured operational inputs into clean, usable data.

Orchestrate

Route work through specialized agents, tools, and human decision points.

Secure

Apply permissions, review steps, evaluations, monitoring, and audit logs.

Improve

Track outcomes and continuously improve workflows over time.

This section should make clear that the company does not only build individual agents. It builds the base system that makes agents useful and reliable.

⸻

4. Industry workflow section

Purpose: make the page feel specific without creating a generic agency feel.

Use tabs, cards, or route-style panels for:

* Logistics
* Manufacturing
* Procurement

Each industry should have:

* Industry-specific problem statement
* Example workflow pipeline
* 3–5 use cases
* Short CTA to view or discuss that workflow

Logistics

Positioning:

Automate shipment document handling, customer status requests, carrier coordination, and exception triage.

Example workflow:

Customer email → Identify shipment → Retrieve status → Draft response → Flag exception → Human approval → Log update

Use cases:

* Shipment status request automation
* Bill of lading / delivery order / invoice extraction
* Carrier and vendor coordination
* Exception triage
* Customer communication drafting

Suggested accent style:
Blue / teal, movement, routes, status cards, lanes.

⸻

Manufacturing

Positioning:

Automate production, quality, supplier, and maintenance workflows with AI-assisted operational pipelines.

Example workflow:

Quality issue report → Classify defect → Retrieve SOP → Suggest next action → Notify responsible team → Track resolution

Use cases:

* Quality issue triage
* Supplier follow-up workflows
* Production report structuring
* Maintenance knowledge assistant
* Work instruction retrieval

Suggested accent style:
Graphite / amber, structured grids, process lines, production flow.

⸻

Procurement

Positioning:

Automate procurement intake, supplier comparison, quote analysis, and approval routing.

Example workflow:

Purchase request → Check policy → Extract requirements → Match suppliers → Compare quotes → Route approval

Use cases:

* Procurement intake assistant
* Supplier quote comparison
* Invoice, PO, and contract extraction
* Spend classification
* Approval workflow routing

Suggested accent style:
Green / violet, approval states, comparison tables, supplier cards.

⸻

5. Agent orchestration section

Purpose: explain agents without sounding vague.

Suggested heading:

Specialized agents, controlled by workflow logic.

Suggested copy:

Each agent handles a specific task. The system controls when it runs, what data it can access, when a human reviews it, and how outputs are logged.

Agent cards:

* Document extraction agent
* Classification agent
* Knowledge retrieval agent
* Communication drafting agent
* Exception detection agent
* Reporting agent
* Security review agent
* Human handoff agent

Important:
Frame agents as controlled components inside a governed system, not autonomous black boxes.

⸻

6. Security and stability section

Purpose: create trust.

Suggested heading:

Built for operational reliability, not demos.

Include cards for:

* Role-based access
* Human-in-the-loop approvals
* Audit trails
* Output validation
* Evaluation frameworks
* Error handling
* Monitoring
* Permission-aware retrieval
* Escalation paths

This section should feel prominent, not hidden.

⸻

7. Proof / experience section

Purpose: show credibility without overstating.

Reference existing case study or credibility components if they exist.

Relevant proof themes:

* Procurement and indirect spend work from Sourcera
* Knowledge system / workflow work from Sprinkenhof
* Document-to-data workflows
* AI workflow prototyping and implementation
* Data structuring and process automation work

Important:
Do not invent client results or quantitative outcomes.
If exact numbers are already in the current landing page, review whether they still fit this updated positioning. If they are vague or unsupported, either:

* make them more conservative,
* turn them into qualitative proof points,
* or mark them as configurable placeholders.

Preferred claim style:

* “Built procurement workflow prototypes”
* “Implemented document-to-structured-data workflows”
* “Designed AI-assisted knowledge and operations systems”
* “Mapped operational workflows across fragmented tools”

Avoid:

* “Reduced costs by 80%”
* “10x productivity”
* “Millions saved”
* “Fully autonomous operations”
    unless these are explicitly supported by real project data.

⸻

8. Implementation approach section

Purpose: show how the company works.

Suggested heading:

From workflow map to reliable AI system.

Steps:

1. Map the workflow

Identify repetitive, document-heavy, coordination-heavy processes.

2. Design the pipeline

Define inputs, outputs, agents, human review points, integrations, and controls.

3. Prototype the system

Build a focused workflow prototype using real examples and edge cases.

4. Add reliability controls

Introduce evaluations, permissions, monitoring, audit trails, and escalation logic.

5. Expand carefully

Move from one workflow to adjacent workflows once reliability is proven.

⸻

9. Final CTA

Suggested heading:

Start with one workflow worth automating.

Suggested CTA copy:

We will map one operational workflow and identify where AI agents, structured data, and human review can reduce manual work without increasing risk.

Primary CTA:
Map an automation opportunity

Secondary CTA:
See example workflows

⸻

Navigation recommendation

Use a clean nav structure:

* System
* Industries
* Agents
* Security
* Proof
* Contact

If the codebase already has nav logic, adapt labels without rewriting the component.

⸻

Content hierarchy

The page should communicate this hierarchy:

Main category:
AI workflow systems
Core mechanism:
Connected agents and pipelines
Trust layer:
Security, stability, monitoring, human review
Market focus:
Logistics, manufacturing, procurement

⸻

Design requirements

Use one shared brand system with industry-specific accents.

Do not make each industry feel like a separate company or brand.

Shared across all pages/sections:

* Typography
* Spacing
* Component style
* CTA style
* Navigation
* Layout rhythm

Industry-specific variations:

* Accent color
* Example workflow
* Problem statements
* Icons or illustrations
* Use-case cards

The site should feel coherent but personalized.

⸻

Component implementation guidance

Prefer a data-driven structure.

Suggested data objects:

const industries = [
  {
    id: "logistics",
    label: "Logistics",
    accent: "teal",
    problem: "...",
    workflow: [
      "Customer email",
      "Identify shipment",
      "Retrieve status",
      "Draft response",
      "Flag exception",
      "Human approval",
      "Log update"
    ],
    useCases: [...]
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    accent: "amber",
    problem: "...",
    workflow: [...],
    useCases: [...]
  },
  {
    id: "procurement",
    label: "Procurement",
    accent: "violet",
    problem: "...",
    workflow: [...],
    useCases: [...]
  }
]

Suggested reusable components:

* HeroSection
* ProblemSection
* SystemLayersSection
* IndustryWorkflowTabs
* WorkflowPipeline
* AgentCardsSection
* SecurityControlsSection
* ProofSection
* ImplementationProcessSection
* FinalCTA

If equivalents already exist, use the existing components and only adjust data/content.

⸻

Metrics and claims handling

Review all existing metric/stat components.

For any existing numbers:

1. Keep them only if they are supported and relevant to the new positioning.
2. If unsupported, replace them with softer credibility points.
3. If they are placeholders, make that clear in the data/config naming.
4. Do not create new hard performance claims without source data.

Better alternatives to hard numbers:

Before:
"Reduce manual work by 80%"
After:
"Reduce repetitive manual work in selected workflows"
Before:
"10x faster operations"
After:
"Shorten response cycles by automating classification, drafting, and routing"
Before:
"$1M+ savings identified"
After:
"Identify automation opportunities across document-heavy workflows"

⸻

Tone

Use clear B2B operational language.

The copy should feel:

* specific
* controlled
* trustworthy
* implementation-oriented
* practical

Avoid:

* hype
* generic AI agency language
* vague transformation language
* excessive buzzwords
* claims of full autonomy
* overpromising

⸻

Acceptance criteria

The completed landing page should:

* Clearly position the company around secure AI workflow systems.
* Preserve existing components as independent modules.
* Use reusable data structures for industry-specific content.
* Include logistics, manufacturing, and procurement as focus industries.
* Explain agents as specialized components inside controlled workflows.
* Include a visible security, stability, and governance section.
* Include an implementation approach from workflow mapping to expansion.
* Review and adjust previous claim numbers to align with the new positioning.
* Avoid unsupported ROI, productivity, or automation claims.
* Maintain a coherent design system while allowing industry-specific accents.
* Be ready for targeted outreach links to logistics, manufacturing, and procurement prospects.

```
