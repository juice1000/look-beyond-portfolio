import React from "react";
import { motion } from "framer-motion";
import { Language } from "../lib/i18n";
import { LandingPageContent } from "../data/landingPage";
import { PracticeVisualId } from "../data/practiceStory";
import {
  BLUE,
  CARD,
  INK,
  LINE,
  Label,
  MUTED,
  ROSE,
  fade,
} from "./ProcessVisuals";

const TEXT = {
  en: {
    launch: "Launch",
    month4: "Month 4",
    demo: "Demo works",
    trust: "Trust is gone",
    quality: "Quality",
    cost: "Cost",
    time: "Time",
    eng: "Engineering",
    speedOk: "Speed: fine",
    fin: "Finance",
    finAsk: "Cost? Time saved? Risk?",
    gap: "Nobody translates",
    above: "Launch",
    below: "Operating it",
    belowItems: ["Testing", "Monitoring", "Cost tracking", "Reporting"],
    definition: "Definition of done",
    realCases: "Built on real cases",
    release: "Release",
    passRate: "Pass rate",
    threshold: "Minimum",
    safety: "Safety",
    accuracy: "Accuracy",
    compliance: "Compliance",
    blocked: "Release blocked",
    alert: "Alert",
    costTask: "Cost per task",
    live: "Live quality",
    baseline: "Baseline",
    after: "After",
    link: "Linked to business results",
    reviewItems: [
      "What the agent does",
      "How it is tested",
      "What it costs",
      "What you can show",
    ],
    critical: "Critical checks decide the release",
    illustrative: "Illustrative",
  },
  de: {
    launch: "Start",
    month4: "Monat 4",
    demo: "Demo funktioniert",
    trust: "Vertrauen weg",
    quality: "Qualität",
    cost: "Kosten",
    time: "Zeit",
    eng: "Technik",
    speedOk: "Tempo: in Ordnung",
    fin: "Controlling",
    finAsk: "Kosten? Zeitersparnis? Risiko?",
    gap: "Niemand übersetzt",
    above: "Start",
    below: "Betrieb",
    belowItems: ["Testen", "Überwachen", "Kostenverfolgung", "Berichten"],
    definition: "Definition von „fertig“",
    realCases: "Auf echten Fällen gebaut",
    release: "Release",
    passRate: "Bestehensquote",
    threshold: "Minimum",
    safety: "Sicherheit",
    accuracy: "Genauigkeit",
    compliance: "Compliance",
    blocked: "Release gestoppt",
    alert: "Alarm",
    costTask: "Kosten pro Aufgabe",
    live: "Laufende Qualität",
    baseline: "Baseline",
    after: "Danach",
    link: "Mit Geschäftsergebnissen verknüpft",
    reviewItems: [
      "Was der Agent tut",
      "Wie er getestet wird",
      "Was er kostet",
      "Was Sie belegen können",
    ],
    critical: "Kritische Prüfungen entscheiden",
    illustrative: "Beispielhaft",
  },
};

type T = (typeof TEXT)["en"];
interface Ctx {
  t: T;
  content: LandingPageContent;
}

const MonthFour = ({ t }: Ctx) => {
  const bars = [92, 90, 62, 28];
  const labels = [t.launch, "1", "2", t.month4];
  return (
    <>
      <line
        x1={30}
        x2={430}
        y1={240}
        y2={240}
        className={LINE}
        strokeWidth={2}
      />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={50 + i * 100}
          width={60}
          rx={6}
          className={i === 3 ? "fill-rose-500/70" : "fill-blue-600/80"}
          initial={{ height: 0, y: 240 }}
          animate={{ height: h * 1.7, y: 240 - h * 1.7 }}
          transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
        />
      ))}
      {labels.map((l, i) => (
        <Label key={i} x={80 + i * 100} y={262} size={12}>
          {l}
        </Label>
      ))}
      <motion.g {...fade(6)}>
        <Label x={80} y={60} cls={INK} size={12}>
          {t.demo}
        </Label>
        <Label x={380} y={60} cls={ROSE} size={12}>
          {t.trust}
        </Label>
      </motion.g>
      <Label x={30} y={22} anchor="start" size={12}>
        {t.quality}
      </Label>
    </>
  );
};

const QualityCost = ({ t }: Ctx) => (
  <>
    <rect x={20} y={20} width={420} height={240} rx={10} className={CARD} />
    <motion.path
      d="M45 80 C140 85 240 130 415 210"
      fill="none"
      strokeWidth={3}
      className="stroke-blue-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45 220 C140 215 260 150 415 70"
      fill="none"
      strokeWidth={3}
      className="stroke-rose-500"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
    <motion.g {...fade(6)}>
      <Label x={60} y={72} anchor="start" cls={BLUE} size={13}>
        {t.quality}
      </Label>
      <Label x={60} y={246} anchor="start" cls={ROSE} size={13}>
        {t.cost}
      </Label>
    </motion.g>
    <Label x={230} y={284} size={12}>
      {t.time}
    </Label>
  </>
);

const RiskVisibility = ({ t }: Ctx) => (
  <>
    <motion.g {...fade(0)}>
      <rect x={20} y={50} width={175} height={150} rx={12} className={CARD} />
      <Label x={107} y={80} cls={INK} size={14}>
        {t.eng}
      </Label>
      <rect
        x={42}
        y={108}
        width={130}
        height={14}
        rx={4}
        className="fill-blue-600/50"
      />
      <rect
        x={42}
        y={132}
        width={100}
        height={14}
        rx={4}
        className="fill-blue-600/50"
      />
      <Label x={107} y={178} size={12}>
        {t.speedOk}
      </Label>
    </motion.g>
    <motion.g {...fade(2)}>
      <rect x={265} y={50} width={175} height={150} rx={12} className={CARD} />
      <Label x={352} y={80} cls={INK} size={14}>
        {t.fin}
      </Label>
      <text x={352} y={140} textAnchor="middle" fontSize={46} className={ROSE}>
        ?
      </text>
      <Label x={352} y={178} size={11}>
        {t.finAsk}
      </Label>
    </motion.g>
    <motion.g {...fade(4)}>
      <path
        d="M200 125 h60"
        strokeDasharray="5 5"
        className="stroke-rose-500"
        strokeWidth={2}
        fill="none"
      />
      <Label x={230} y={235} cls={ROSE} size={13}>
        {t.gap}
      </Label>
    </motion.g>
  </>
);

const Iceberg = ({ t }: Ctx) => (
  <>
    <motion.path
      d="M190 110 L230 40 L270 110 Z"
      className="fill-blue-600/70"
      {...fade(0)}
    />
    <Label x={230} y={32} cls={INK} size={13}>
      {t.above}
    </Label>
    <line
      x1={20}
      x2={440}
      y1={110}
      y2={110}
      strokeDasharray="6 4"
      className="stroke-blue-500"
      strokeWidth={2}
    />
    <motion.rect
      x={80}
      y={118}
      width={300}
      height={150}
      rx={20}
      className="fill-blue-600/20 stroke-blue-500"
      {...fade(2)}
    />
    <Label x={230} y={146} cls={INK} size={14}>
      {t.below}
    </Label>
    {t.belowItems.map((it, i) => (
      <motion.g key={it} {...fade(3 + i)}>
        <rect
          x={100 + (i % 2) * 140}
          y={162 + Math.floor(i / 2) * 50}
          width={120}
          height={36}
          rx={8}
          className={CARD}
        />
        <Label
          x={160 + (i % 2) * 140}
          y={185 + Math.floor(i / 2) * 50}
          cls={INK}
          size={12}
        >
          {it}
        </Label>
      </motion.g>
    ))}
  </>
);

const Layers = ({ content }: Ctx) => (
  <>
    {content.system.layers.map((l, i) => (
      <motion.g key={l.title} {...fade(i)}>
        <rect
          x={10 + i * 89}
          y={90}
          width={80}
          height={80}
          rx={10}
          className={i === 2 ? "fill-blue-600" : "fill-blue-600/75"}
        />
        <Label
          x={50 + i * 89}
          y={122}
          cls="fill-white/80"
          size={11}
        >{`${i + 1}`}</Label>
        <Label x={50 + i * 89} y={148} cls="fill-white" size={13}>
          {l.title}
        </Label>
      </motion.g>
    ))}
    <motion.path
      d="M20 200 H440"
      strokeWidth={2}
      className="stroke-blue-600"
      fill="none"
      {...fade(6)}
    />
  </>
);

const Build = ({ t }: Ctx) => (
  <>
    <motion.g {...fade(0)}>
      <rect x={90} y={30} width={280} height={190} rx={12} className={CARD} />
      <Label x={230} y={62} cls={INK} size={14}>
        {t.definition}
      </Label>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={125} cy={100 + i * 36} r={10} className={BLUE} />
          <path
            d={`M120 ${100 + i * 36} l4 4 l7 -8`}
            stroke="white"
            strokeWidth={2.5}
            fill="none"
          />
          <rect
            x={150}
            y={94 + i * 36}
            width={170 - i * 30}
            height={12}
            rx={4}
            className="fill-slate-400/50"
          />
        </g>
      ))}
    </motion.g>
    <motion.g {...fade(3)}>
      <Label x={230} y={256} size={13}>
        {t.realCases}
      </Label>
    </motion.g>
  </>
);

const Test = ({ t }: Ctx) => {
  const rates = [58, 66, 74, 83, 92];
  return (
    <>
      <line
        x1={30}
        x2={430}
        y1={240}
        y2={240}
        className={LINE}
        strokeWidth={2}
      />
      <line
        x1={30}
        x2={430}
        y1={115}
        y2={115}
        strokeDasharray="5 5"
        className="stroke-rose-400"
      />
      <Label x={430} y={106} anchor="end" cls={ROSE} size={11}>
        {t.threshold}
      </Label>
      {rates.map((r, i) => (
        <g key={i}>
          <motion.rect
            x={50 + i * 78}
            width={48}
            rx={6}
            className={r < 80 ? "fill-slate-400/60" : "fill-blue-600/85"}
            initial={{ height: 0, y: 240 }}
            animate={{ height: r * 1.8, y: 240 - r * 1.8 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
          />
          <Label
            x={74 + i * 78}
            y={260}
            size={11}
          >{`${t.release} ${i + 1}`}</Label>
        </g>
      ))}
      <Label x={30} y={22} anchor="start" size={12}>
        {t.passRate}
      </Label>
    </>
  );
};

const Protect = ({ t }: Ctx) => (
  <>
    {[
      { l: t.safety, ok: true },
      { l: t.accuracy, ok: true },
      { l: t.compliance, ok: false },
    ].map((c, i) => (
      <motion.g key={c.l} {...fade(i)}>
        <rect
          x={20}
          y={40 + i * 66}
          width={190}
          height={50}
          rx={10}
          className={CARD}
        />
        <circle
          cx={48}
          cy={65 + i * 66}
          r={11}
          className={c.ok ? BLUE : ROSE}
        />
        <path
          d={
            c.ok
              ? `M43 ${65 + i * 66} l4 4 l7 -8`
              : `M44 ${60 + i * 66} l8 10 M52 ${60 + i * 66} l-8 10`
          }
          stroke="white"
          strokeWidth={2.5}
          fill="none"
        />
        <Label x={72} y={70 + i * 66} anchor="start" cls={INK} size={14}>
          {c.l}
        </Label>
      </motion.g>
    ))}
    <motion.g {...fade(4)}>
      <path
        d="M210 135 h45"
        className="stroke-rose-500"
        strokeWidth={2.5}
        fill="none"
      />
      <rect
        x={255}
        y={95}
        width={185}
        height={80}
        rx={12}
        className="fill-rose-500/80"
      />
      <Label x={347} y={142} cls="fill-white" size={15}>
        {t.blocked}
      </Label>
    </motion.g>
    <Label x={230} y={270} size={12}>
      {t.critical}
    </Label>
  </>
);

const Monitor = ({ t }: Ctx) => (
  <>
    <rect x={20} y={20} width={420} height={190} rx={10} className={CARD} />
    <motion.path
      d="M40 110 L100 100 L160 108 L220 95 L255 160 L300 175 L360 170 L420 178"
      fill="none"
      strokeWidth={3}
      className="stroke-blue-600"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.3 }}
    />
    <motion.g {...fade(7)}>
      <circle cx={255} cy={160} r={8} className={ROSE} />
      <Label x={255} y={138} cls={ROSE} size={12}>
        {t.alert}
      </Label>
    </motion.g>
    <Label x={40} y={44} anchor="start" size={12}>
      {t.live}
    </Label>
    <motion.g {...fade(9)}>
      <rect x={120} y={228} width={220} height={44} rx={10} className={CARD} />
      <Label x={230} y={256} cls={INK} size={13}>
        {t.costTask}
      </Label>
    </motion.g>
  </>
);

const Prove = ({ t }: Ctx) => (
  <>
    {[
      { base: 40, now: 80 },
      { base: 55, now: 88 },
      { base: 60, now: 94 },
    ].map((r, i) => (
      <g key={i}>
        <rect
          x={30}
          y={40 + i * 52}
          width={r.base * 4}
          height={10}
          rx={4}
          className="fill-slate-400/60"
        />
        <motion.rect
          x={30}
          y={56 + i * 52}
          height={10}
          rx={4}
          className={BLUE}
          initial={{ width: 0 }}
          animate={{ width: r.now * 4 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
        />
      </g>
    ))}
    <rect x={30} y={206} width={10} height={8} className="fill-slate-400/60" />
    <Label x={46} y={214} anchor="start" size={11}>
      {t.baseline}
    </Label>
    <rect x={130} y={206} width={10} height={8} className={BLUE} />
    <Label x={146} y={214} anchor="start" size={11}>
      {t.after}
    </Label>
    <motion.g {...fade(6)}>
      <rect
        x={60}
        y={235}
        width={340}
        height={44}
        rx={10}
        className="fill-blue-600"
      />
      <Label x={230} y={262} cls="fill-white" size={13}>
        {t.link}
      </Label>
    </motion.g>
    <Label x={430} y={214} anchor="end" size={10}>
      {t.illustrative}
    </Label>
  </>
);

const Scorecard5 = ({ content }: Ctx) => {
  const widths = [78, 88, 70, 94, 62];
  return (
    <>
      <rect x={10} y={10} width={440} height={280} rx={12} className={CARD} />
      {content.scorecard.groups.map((g, i) => (
        <g key={g.title}>
          <Label x={30} y={52 + i * 50} anchor="start" cls={INK} size={13}>
            {g.title}
          </Label>
          <rect
            x={30}
            y={60 + i * 50}
            width={400}
            height={9}
            rx={4}
            className="fill-slate-400/30"
          />
          <motion.rect
            x={30}
            y={60 + i * 50}
            height={9}
            rx={4}
            className={BLUE}
            initial={{ width: 0 }}
            animate={{ width: widths[i] * 4 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
          />
        </g>
      ))}
    </>
  );
};

const Review = ({ t }: Ctx) => (
  <>
    {t.reviewItems.map((it, i) => (
      <motion.g key={it} {...fade(i)}>
        <rect
          x={50}
          y={30 + i * 62}
          width={360}
          height={48}
          rx={10}
          className={CARD}
        />
        <circle cx={80} cy={54 + i * 62} r={11} className={BLUE} />
        <path
          d={`M75 ${54 + i * 62} l4 4 l7 -8`}
          stroke="white"
          strokeWidth={2.5}
          fill="none"
        />
        <Label x={104} y={59 + i * 62} anchor="start" cls={INK} size={14}>
          {it}
        </Label>
      </motion.g>
    ))}
  </>
);

const MAP: Record<PracticeVisualId, React.FC<Ctx>> = {
  monthfour: MonthFour,
  qualitycost: QualityCost,
  riskvisibility: RiskVisibility,
  iceberg: Iceberg,
  layers: Layers,
  build: Build,
  test: Test,
  protect: Protect,
  monitor: Monitor,
  prove: Prove,
  scorecard5: Scorecard5,
  review: Review,
};

const PracticeVisual = ({
  id,
  language,
  content,
}: {
  id: PracticeVisualId;
  language: Language;
  content: LandingPageContent;
}) => {
  const V = MAP[id];
  return (
    <svg
      viewBox="0 0 460 300"
      aria-hidden="true"
      className="h-auto w-full max-h-[60vh]"
    >
      <V t={TEXT[language]} content={content} />
    </svg>
  );
};

export default PracticeVisual;
