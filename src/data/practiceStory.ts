import { Language } from "../lib/i18n";
import { LandingPageContent } from "./landingPage";
import { Act, BaseSlide, StoryLabels } from "./storyTypes";

export type PracticeActId = "problem" | "why" | "practice" | "results";

export type PracticeVisualId =
  | "monthfour"
  | "qualitycost"
  | "riskvisibility"
  | "iceberg"
  | "layers"
  | "build"
  | "test"
  | "protect"
  | "monitor"
  | "prove"
  | "scorecard5"
  | "review";

export type PracticeSlide = BaseSlide<PracticeActId, PracticeVisualId>;

interface Copy {
  acts: Record<PracticeActId, string>;
  labels: StoryLabels;
  failureTitles: [string, string];
  failureBodies: [string, string];
  evidenceTitle: string;
  evidenceBody: string;
  gapTitle: string;
  gapBody: string;
  gapPoints: string[];
  layersTitle: string;
  layersBody: string;
  nextStep: string;
}

const COPY: Record<Language, Copy> = {
  en: {
    acts: {
      problem: "The problem",
      why: "Why it happens",
      practice: "The practice",
      results: "What you get",
    },
    labels: {
      back: "Back",
      next: "Next",
      result: "You get",
      chapters: "Story chapters",
      carousel: "Our practice",
    },
    failureTitles: [
      "Quality and cost move, and nobody sees it.",
      "Risk and results reach the business too late.",
    ],
    failureBodies: [
      "Two of the four problems are silent. Nothing breaks. Things just get worse.",
      "The other two are about trust. Controls and reporting arrive after the damage is done.",
    ],
    evidenceTitle: "Analysts see the same pattern.",
    evidenceBody:
      "Two Gartner forecasts point to the same causes: rising cost, unclear value and weak governance.",
    gapTitle: "Launch is where the work starts.",
    gapBody:
      "A demo proves an agent can work once. Keeping it working takes testing, monitoring and reporting after launch. In the industry this is called GenAIOps.",
    gapPoints: [
      "Most of the effort sits after launch",
      "Done well, it is mostly invisible",
      "It is what separates a demo from a system",
    ],
    layersTitle: "One practice. Five layers.",
    layersBody:
      "Each layer answers one plain question about an agent. Together they keep it useful after launch.",
    nextStep: "Next step",
  },
  de: {
    acts: {
      problem: "Das Problem",
      why: "Warum es passiert",
      practice: "Die Praxis",
      results: "Was Sie erhalten",
    },
    labels: {
      back: "Zurück",
      next: "Weiter",
      result: "Sie erhalten",
      chapters: "Kapitel",
      carousel: "Unsere Praxis",
    },
    failureTitles: [
      "Qualität und Kosten verschieben sich, und niemand sieht es.",
      "Risiko und Ergebnisse erreichen das Business zu spät.",
    ],
    failureBodies: [
      "Zwei der vier Probleme sind leise. Nichts bricht zusammen. Es wird nur schlechter.",
      "Die anderen beiden betreffen das Vertrauen. Kontrollen und Berichte kommen, wenn der Schaden da ist.",
    ],
    evidenceTitle: "Analysten sehen dasselbe Muster.",
    evidenceBody:
      "Zwei Gartner-Prognosen nennen dieselben Ursachen: steigende Kosten, unklaren Nutzen und schwache Governance.",
    gapTitle: "Mit dem Start beginnt die Arbeit.",
    gapBody:
      "Eine Demo zeigt, dass ein Agent einmal funktioniert. Damit er weiter funktioniert, braucht es Testen, Überwachen und Berichten nach dem Start. In der Branche heißt das GenAIOps.",
    gapPoints: [
      "Der größte Teil des Aufwands liegt nach dem Start",
      "Gut gemacht, ist er kaum sichtbar",
      "Er trennt eine Demo von einem System",
    ],
    layersTitle: "Eine Praxis. Fünf Schichten.",
    layersBody:
      "Jede Schicht beantwortet eine einfache Frage zu einem Agenten. Zusammen halten sie ihn nach dem Start nützlich.",
    nextStep: "Nächster Schritt",
  },
};

const LAYER_VISUALS: PracticeVisualId[] = [
  "build",
  "test",
  "protect",
  "monitor",
  "prove",
];

const percent = (text: string) => text.match(/\d+\s?%/)?.[0] ?? "";

export const getPracticeStory = (
  language: Language,
  content: LandingPageContent,
): {
  acts: Act<PracticeActId>[];
  slides: PracticeSlide[];
  labels: StoryLabels;
} => {
  const c = COPY[language];
  const { failures, system, scorecard, finalCta } = content;

  const acts = (Object.keys(c.acts) as PracticeActId[]).map((id) => ({
    id,
    label: c.acts[id],
  }));

  const slides: PracticeSlide[] = [
    {
      act: "problem",
      eyebrow: failures.eyebrow,
      title: failures.heading,
      body: failures.description,
      visual: "monthfour",
    },
    {
      act: "problem",
      eyebrow: failures.eyebrow,
      title: c.failureTitles[0],
      body: c.failureBodies[0],
      items: failures.items.slice(0, 2),
      visual: "qualitycost",
    },
    {
      act: "problem",
      eyebrow: failures.eyebrow,
      title: c.failureTitles[1],
      body: c.failureBodies[1],
      items: failures.items.slice(2, 4),
      visual: "riskvisibility",
    },
    {
      act: "why",
      eyebrow: failures.eyebrow,
      title: c.evidenceTitle,
      body: c.evidenceBody,
      stats: failures.evidence.map((e) => ({
        value: percent(e.text),
        label: `${e.text} (${e.source})`,
      })),
    },
    {
      act: "why",
      eyebrow: content.practice.eyebrow,
      title: c.gapTitle,
      body: c.gapBody,
      points: c.gapPoints,
      visual: "iceberg",
    },
    {
      act: "practice",
      eyebrow: system.eyebrow,
      title: c.layersTitle,
      body: `${c.layersBody} ${system.principle}`,
      visual: "layers",
    },
    ...system.layers.map(
      (layer, i): PracticeSlide => ({
        act: "practice",
        eyebrow: `${system.eyebrow} · ${i + 1} / ${system.layers.length}`,
        title: layer.title,
        body: layer.description,
        outcome: layer.signal,
        visual: LAYER_VISUALS[i],
      }),
    ),
    {
      act: "results",
      anchor: "scorecard",
      eyebrow: scorecard.eyebrow,
      title: scorecard.heading,
      body: scorecard.description,
      points: scorecard.groups.map((g) => `${g.title}: ${g.description}`),
      outcome: scorecard.closing,
      visual: "scorecard5",
    },
    {
      act: "results",
      eyebrow: c.nextStep,
      title: finalCta.heading,
      body: finalCta.description,
      points: finalCta.points,
      cta: [{ label: finalCta.primaryCta, href: "/contact" }],
      visual: "review",
    },
  ];

  return { acts, slides, labels: c.labels };
};
