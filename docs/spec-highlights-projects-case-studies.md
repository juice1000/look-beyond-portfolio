# Spec: Highlights, Projects & Case Studies

## Context

The site currently has:

- `/projects` — renders `CaseStudyCards`, showing 3 real studies (Sprinkenhof, FGS Global, Sourcera)
- Pillar pages — 3 locked NDA placeholders in a dashed box
- Industry pages — 3 "coming soon" placeholders in a dashed box

This spec covers three additions: **Highlights**, filling out **Projects**, and an **NDA case study** format.

---

## 1. Highlights

Short, punchy proof points that don't require NDA clearance. The idea is "cool stuff we built" — memorable numbers and technical moments that can be said publicly.

### Data shape

```ts
{
  id: string
  headline: string          // e.g. "1.5M documents indexed, search time cut 40%"
  context: string           // 1–2 sentences, no client name required
  pillar: "workflow" | "agents" | "monitoring"
  category: string          // industry/context label: "Real Estate", "Procurement", …
  stat?: { value: string, label: string }  // optional single standout number
}
```

### Page / placement

Two options — pick one:

**Option A — Home section**
New section on the home page between CaseStudyCards and the bottom CTA. Horizontal scrollable row of compact glass cards (~280px). Each card: headline + context + pillar badge. Links to the relevant pillar page.

**Option B — Dedicated `/highlights` route**
Standalone page. Same card grid, but with a header and room to grow. Better if the number of entries will grow past 5–6.

### Design notes

- Cards do not say "locked" or "NDA" — only things we can say publicly live here
- Pillar badge drives the accent color (blue / teal / amber)
- No client logos

---

## 2. Projects

### Current state

`/projects` only shows the 3 full case studies. The page feels thin.

### Proposed addition: lightweight project entries

A second content type below the case studies on the same page, labeled **"Also shipped"**. These are real pieces of work that have a name and outcome but not a full writeup.

```ts
{
  id: string;
  title: string;
  category: string; // industry or domain
  oneLiner: string; // one sentence description
  outcome: string; // single metric or outcome phrase
  pillar: "workflow" | "agents" | "monitoring";
  status: "live" | "shipped" | "ongoing";
}
```

Rendered as a compact 2-column grid below the main case studies. Each entry is a small glass card: title + category + one-liner + outcome chip.

### Content needed

Real entries from the team. Aim for 4–8 to make the grid feel full.

---

## 3. Case Studies (NDA)

### Problem

The 6 existing placeholders show nothing useful. Even under NDA, a teaser is better than a dashed box.

### Two display states

**Locked (NDA-safe)**

- Client category instead of name: "Procurement operator", "Manufacturing client", etc.
- Outcome teaser (metric only, no specifics): "Processing time reduced by 60%"
- Pillar badge
- "Under NDA" label
- No "coming soon" copy

**Unlocked (full)**
Identical to the Sprinkenhof / FGS format in `CaseStudyCards`: client name, industry tag, stats chips, description, bullets.

### Implementation approach

Move the 6 NDA studies out of inline JSX into a shared data file (`src/data/caseStudies.ts`). Each entry has a `nda: boolean` flag. When `nda: true`, render the locked card. Flip the flag when cleared — no other changes needed.

```ts
{
  id: string
  nda: boolean

  // always present
  clientCategory: string    // "Procurement operator"
  pillar: "workflow" | "agents" | "monitoring"
  industry: string
  outcomeTeaser: string     // shown in locked state

  // present only when nda: false
  client?: string
  tagline?: string
  description?: string
  stats?: { value: string, label: string }[]
  bullets?: string[]
}
```

### Cross-linking

Each study is tagged with both `pillar` and `industry`. The pillar page and industry page each query the shared array for matching entries rather than having their own hardcoded placeholder JSX. This means flipping `nda: false` on one study automatically promotes it everywhere it appears.

### The 6 existing placeholders

| Location                         | Current label                   | Category (for locked state) |
| -------------------------------- | ------------------------------- | --------------------------- |
| AI Workflow Systems pillar       | "Procurement intake automation" | Procurement operator        |
| Autonomous Agents pillar         | "Supplier communication agent"  | Manufacturing client        |
| AI Performance Monitoring pillar | "AI support bot monitoring"     | Communications firm         |
| Procurement industry             | "Quote comparison workflow"     | Procurement operator        |
| Manufacturing industry           | "Quality issue triage system"   | Manufacturing client        |
| Logistics industry               | "Shipment status automation"    | Logistics operator          |

---

## 4. Geo Coverage

We're operating across 3 regions: APAC, EMEA and US
With our network of partners we're able to serve customers globally
Our project experience spans the 3 regions too.

## 5. Partners

Get some more fine-grained descriptions on what our partners do and how we complement each other

---

## Open questions

1. Highlights — home section or dedicated `/highlights` route?
2. Projects "Also shipped" — do we have 4–8 entries ready to write up?
3. NDA case studies — can we fill in `clientCategory` + `outcomeTeaser` for each of the 6 now?
