import { Act, BaseSlide } from "./storyTypes";

export type ActId = "problem" | "analysis" | "solution" | "results";

export type VisualId =
  | "funnel"
  | "nobaseline"
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
  { id: "problem", label: "The problem" },
  { id: "analysis", label: "Why it happens" },
  { id: "solution", label: "How we fix it" },
  { id: "results", label: "What you get" },
];

export const SLIDES: Slide[] = [
  // Act 1: the problem
  {
    act: "problem",
    eyebrow: "The problem",
    title: "Most AI pilots never reach daily use.",
    visual: "funnel",
    body: "A demo works in a meeting. Then it meets real documents, real exceptions and real deadlines. The pilot stalls, and the team goes back to doing the work by hand.",
    points: [
      "The pilot impressed everyone, but nobody relies on it",
      "The budget is spent and the process looks the same as before",
      "No one can say whether it actually saved anything",
    ],
  },
  {
    act: "problem",
    eyebrow: "The problem",
    title: "Nobody can say whether it paid off.",
    visual: "nobaseline",
    body: "Most pilots start without a measured starting point. When the pilot ends, there is no before to compare with, so the value stays a matter of opinion.",
    points: [
      "Time and error rates were never recorded before the pilot",
      "Savings are claimed, but nobody can check them",
      "The next budget round turns into a debate",
    ],
  },

  // Act 2: the analysis
  {
    act: "analysis",
    eyebrow: "Why it happens",
    title: "The demo was never tested against reality.",
    visual: "messy",
    body: "Pilots are usually built on clean examples. Real operations are full of odd formats, missing fields and special cases. The five to ten exceptions that cause most of the manual work were never part of the test.",
    points: [
      "Clean sample data hides the hard cases",
      "No agreed starting point, so no way to show improvement",
      "The people doing the work were not involved",
    ],
  },
  {
    act: "analysis",
    eyebrow: "Why it happens",
    title: "So the fix is a method, not a better model.",
    visual: "method",
    body: "Better AI does not solve a process problem. What works is to start small, use real data, build the checks in early and grow only when the numbers hold. This is the order we follow.",
  },

  // Act 3: the solution
  {
    act: "solution",
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
    act: "solution",
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
    act: "solution",
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
    act: "solution",
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
    act: "solution",
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
    act: "results",
    eyebrow: "What you get",
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
