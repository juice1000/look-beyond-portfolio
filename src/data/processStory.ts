import { Act, BaseSlide } from "./storyTypes";

export type ActId = "start" | "engagement" | "outcomes";

export type VisualId =
  | "focus"
  | "people"
  | "messy"
  | "method"
  | "map"
  | "design"
  | "prototype"
  | "controls"
  | "expand"
  | "timeline";

export type Slide = BaseSlide<ActId, VisualId>;

export const ACTS: Act<ActId>[] = [
  { id: "start", label: "Starting point" },
  { id: "engagement", label: "The engagement" },
  { id: "outcomes", label: "Outcomes" },
];

export const SLIDES: Slide[] = [
  // Act 1: how an engagement starts
  {
    act: "start",
    eyebrow: "Starting point",
    title: "Start with one workflow worth fixing.",
    visual: "focus",
    body: "We do not begin with a platform or ten pilots. We begin with one process that is repetitive, high in volume and heavy on documents. Narrow scope is what lets a project reach daily use.",
    points: [
      "Clear inputs and a clear output",
      "Enough volume for the savings to show",
      "A team that wants it to work",
    ],
  },
  {
    act: "start",
    eyebrow: "Starting point",
    title: "Bring the people who do the work.",
    visual: "people",
    body: "Operators and team leads know which cases are hard and what a good result looks like. We involve them from the first week, because they will be the ones using the system.",
    points: [
      "Operators who run the process today",
      "A reviewer who can say what good looks like",
      "Someone in finance to agree how savings are counted",
    ],
  },
  {
    act: "start",
    eyebrow: "Starting point",
    title: "Share real examples, including the messy ones.",
    visual: "messy",
    body: "We build and test on your actual documents, emails and exports. Clean samples hide the cases that cause most of the manual work.",
    points: [
      "Documents, emails and spreadsheets from the live process",
      "The odd formats and special cases",
      "The SOPs and policies the process must follow",
    ],
  },
  {
    act: "engagement",
    eyebrow: "How we work",
    title: "A method, not a better model.",
    visual: "method",
    body: "Better AI does not solve a process problem. We work in five steps: start small, use real data, build the checks in early and grow only when the numbers hold.",
  },

  // Act 3: the solution
  {
    act: "engagement",
    eyebrow: "Step 1 of 5 · Weeks 1-2",
    title: "Map the workflow and the baseline.",
    visual: "map",
    body: "We sit with the people doing the work and follow one repetitive process from start to finish. We measure what it costs today in time, errors and waiting.",
    points: [
      "Talk to operators and team leads, not only managers",
      "Find the exceptions that cause most of the manual time",
      "Write down today's cost, speed and error rate",
    ],
    outcome: "A workflow map and a baseline everyone agrees on.",
  },
  {
    act: "engagement",
    eyebrow: "Step 2 of 5 · Weeks 2-3",
    title: "Design the pipeline and the checks.",
    visual: "design",
    body: "We decide which steps the AI handles, which stay with people, and what a pass looks like. We plan for the exceptions first, because the easy cases take care of themselves.",
    points: [
      "Give each agent one clear job",
      "Set the moments where the agent stops and asks a person",
      "Write the pass criteria before building anything",
    ],
    outcome: "A written plan with clear boundaries and pass criteria.",
  },
  {
    act: "engagement",
    eyebrow: "Step 3 of 5 · Weeks 3-5",
    title: "Prototype with real data.",
    visual: "prototype",
    body: "We build a focused prototype and test it on your actual documents and edge cases. It runs next to the existing process, not instead of it. We want it to fail early, while it is cheap to fix.",
    points: [
      "50 to 200 real examples form the first test set",
      "Operators give structured feedback",
      "Results are compared with the baseline",
    ],
    outcome: "A prototype the team has stress-tested under real conditions.",
  },
  {
    act: "engagement",
    eyebrow: "Step 4 of 5 · Weeks 5-7",
    title: "Add the reliability controls.",
    visual: "controls",
    body: "Before we widen the scope, we put checks around the system: tests, monitoring, access rules and a full activity log. How these work in detail is covered on Our Practice.",
    points: [
      "Checks are built in during the prototype, not added at launch",
      "A failed critical check blocks the release",
    ],
    outcome: "A system operators can trust, with full visibility.",
    cta: [{ label: "See our practice", href: "/practice" }],
  },

  {
    act: "engagement",
    eyebrow: "Step 5 of 5 · Week 7+",
    title: "Report, then expand carefully.",
    visual: "expand",
    body: "Once the first workflow holds up, we publish a scorecard against the baseline. Only then do we move to the next process. Each one repeats the same steps.",
    points: [
      "Agree what 'reliable' means in numbers before expanding",
      "Reuse tests and monitoring for adjacent workflows",
      "Keep human review until thresholds are met consistently",
    ],
    outcome:
      "A growing system where each addition is as reliable as the first.",
  },

  // Act 4: the results
  {
    act: "outcomes",
    eyebrow: "Outcomes",
    title: "Numbers you can check, not promises.",
    visual: "timeline",
    body: "Every engagement ends with a comparison against the baseline from step 1, in numbers finance can check. This is what it has looked like for clients.",
    stats: [
      {
        value: "500+",
        label: "test scenarios run continuously on one AI platform",
      },
      {
        value: "2 hrs",
        label: "of manual work saved per office worker per day",
      },
      {
        value: "Millions",
        label:
          "in projected savings from opportunity generation with trustworthy procurement workflows",
      },
    ],
  },
];
