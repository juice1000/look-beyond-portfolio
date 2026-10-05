import React from "react";
import { motion } from "framer-motion";
import { VisualId } from "../data/processStory";

const INK = "fill-[#0f1e35] dark:fill-slate-100";
const MUTED = "fill-[#4a6a8a]";
const BLUE = "fill-blue-600";
const ROSE = "fill-rose-500";
const CARD = "fill-white/70 dark:fill-[#08101f] stroke-slate-300 dark:stroke-[#1a2c48]";
const LINE = "stroke-slate-400 dark:stroke-[#2a4060]";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15 + i * 0.12, duration: 0.4 },
});

const Label = ({ x, y, children, cls = MUTED, anchor = "middle", size = 13 }: {
  x: number; y: number; children: React.ReactNode; cls?: string; anchor?: "start" | "middle" | "end"; size?: number;
}) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} className={cls}>{children}</text>
);

const Funnel = () => {
  const rows = [
    { label: "Ideas and demos", w: 400, cls: "fill-blue-600/80" },
    { label: "Pilots", w: 270, cls: "fill-blue-600/60" },
    { label: "Stalled", w: 150, cls: "fill-rose-500/70" },
    { label: "Daily use", w: 50, cls: "fill-blue-600" },
  ];
  return (
    <>
      {rows.map((r, i) => (
        <motion.g key={r.label} {...fade(i)}>
          <rect x={220 - r.w / 2} y={30 + i * 70} width={r.w} height={46} rx={8} className={r.cls} />
          <Label x={220} y={58 + i * 70} cls="fill-white" size={14}>{r.w > 100 ? r.label : ""}</Label>
          {r.w <= 100 && <Label x={290} y={58 + i * 70} cls={INK} anchor="start" size={14}>{r.label}</Label>}
        </motion.g>
      ))}
    </>
  );
};

const Drift = () => (
  <>
    <rect x={30} y={20} width={400} height={240} rx={10} className={CARD} />
    <line x1={50} x2={410} y1={110} y2={110} strokeDasharray="5 5" className={LINE} />
    <Label x={410} y={102} anchor="end" size={11}>Acceptable quality</Label>
    <motion.path
      d="M50 80 C100 70 130 90 170 85 S230 100 270 130 S340 190 410 215"
      fill="none" strokeWidth={3} className="stroke-blue-600"
      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }}
    />
    <motion.circle cx={270} cy={130} r={7} className={ROSE} {...fade(8)} />
    <motion.g {...fade(10)}>
      <Label x={270} y={156} cls={INK} size={12}>Drop starts</Label>
      <Label x={270} y={172} size={11}>Nobody notices</Label>
    </motion.g>
    <Label x={230} y={284} size={12}>Time since go-live</Label>
    <Label x={14} y={140} size={12} anchor="middle">Quality</Label>
  </>
);

const Messy = () => (
  <>
    <motion.g {...fade(0)}>
      <rect x={20} y={50} width={190} height={230} rx={10} className={CARD} />
      <Label x={115} y={40} cls={INK} size={13}>The demo</Label>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={40} y={75 + i * 36} width={150} height={20} rx={4} className="fill-blue-600/25" />
      ))}
    </motion.g>
    <motion.g {...fade(2)}>
      <rect x={250} y={50} width={190} height={230} rx={10} className={CARD} />
      <Label x={345} y={40} cls={INK} size={13}>Real operations</Label>
      {[
        { x: 270, w: 100, r: -2, bad: false },
        { x: 285, w: 130, r: 3, bad: true },
        { x: 268, w: 70, r: -4, bad: false },
        { x: 300, w: 120, r: 2, bad: true },
        { x: 272, w: 110, r: -3, bad: true },
      ].map((b, i) => (
        <rect key={i} x={b.x} y={75 + i * 36} width={b.w} height={20} rx={4} transform={`rotate(${b.r} ${b.x} ${85 + i * 36})`}
          className={b.bad ? "fill-rose-500/50" : "fill-blue-600/25"} />
      ))}
    </motion.g>
    <Label x={345} y={304} size={12}>Odd formats, missing fields, special cases</Label>
  </>
);

const Unwatched = () => (
  <>
    <line x1={30} x2={430} y1={150} y2={150} className={LINE} strokeWidth={2} />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.g key={i} {...fade(i)}>
        <rect x={40 + i * 66} y={120} width={44} height={60} rx={8} className={i < 2 ? CARD : "fill-rose-500/20 stroke-rose-400"} />
        <Label x={62 + i * 66} y={156} cls={INK} size={12}>{`v${i + 1}`}</Label>
      </motion.g>
    ))}
    <motion.g {...fade(7)}>
      <Label x={62 + 2 * 66} y={100} cls={ROSE} size={12}>Issue enters</Label>
      <Label x={62 + 5 * 66} y={100} cls={INK} size={12}>Found by a customer</Label>
    </motion.g>
    <motion.g {...fade(9)}>
      <Label x={230} y={235} size={13}>No tests. No alerts. No log.</Label>
      <Label x={230} y={255} size={13}>Release after release, nobody checks.</Label>
    </motion.g>
  </>
);

const Method = () => (
  <>
    <motion.g {...fade(0)}>
      <rect x={30} y={90} width={170} height={110} rx={12} className={CARD} />
      <Label x={115} y={140} cls={INK} size={15}>Better model</Label>
      <Label x={115} y={162} size={12}>Same process gaps</Label>
      <line x1={50} x2={180} y1={110} y2={180} strokeWidth={3} className="stroke-rose-500" />
    </motion.g>
    <motion.path d="M205 145 L255 145" strokeWidth={3} className="stroke-blue-600" fill="none" {...fade(2)} />
    <motion.g {...fade(3)}>
      <rect x={260} y={90} width={180} height={110} rx={12} className="fill-blue-600" />
      <Label x={350} y={140} cls="fill-white" size={15}>Better method</Label>
      <Label x={350} y={162} cls="fill-white/80" size={12}>Start small, test, grow</Label>
    </motion.g>
  </>
);

const MapV = () => (
  <>
    {["Request", "Review", "Approve", "Done"].map((n, i) => (
      <motion.g key={n} {...fade(i)}>
        <rect x={20 + i * 112} y={50} width={90} height={44} rx={8} className={CARD} />
        <Label x={65 + i * 112} y={77} cls={INK} size={13}>{n}</Label>
        {i < 3 && <path d={`M${112 + i * 112} 72 h20`} className="stroke-blue-600" strokeWidth={2} fill="none" />}
      </motion.g>
    ))}
    {[
      { x: 177, label: "Missing data" },
      { x: 289, label: "Special format" },
    ].map((e, i) => (
      <motion.g key={e.label} {...fade(5 + i)}>
        <path d={`M${e.x} 94 v50`} strokeDasharray="4 4" className="stroke-rose-500" strokeWidth={2} fill="none" />
        <rect x={e.x - 50} y={144} width={100} height={36} rx={8} className="fill-rose-500/20 stroke-rose-400" />
        <Label x={e.x} y={167} cls={INK} size={12}>{e.label}</Label>
      </motion.g>
    ))}
    <motion.g {...fade(8)}>
      <rect x={60} y={220} width={340} height={56} rx={10} className={CARD} />
      <Label x={230} y={244} cls={INK} size={13}>Baseline recorded</Label>
      <Label x={230} y={263} size={12}>time · errors · waiting</Label>
    </motion.g>
  </>
);

const Design = () => (
  <>
    {[
      { l: "Classify", x: 20 },
      { l: "Extract", x: 130 },
      { l: "Validate", x: 240 },
    ].map((n, i) => (
      <motion.g key={n.l} {...fade(i)}>
        <rect x={n.x} y={70} width={92} height={50} rx={8} className="fill-blue-600" />
        <Label x={n.x + 46} y={100} cls="fill-white" size={13}>{n.l}</Label>
        <path d={`M${n.x + 92} 95 h18`} className="stroke-blue-600" strokeWidth={2} fill="none" />
      </motion.g>
    ))}
    <motion.g {...fade(4)}>
      <path d="M385 70 l45 25 l-45 25 l-45 -25 z" className="fill-amber-400/80" />
      <Label x={385} y={99} cls="fill-[#0f1e35]" size={11}>Person</Label>
      <Label x={385} y={150} size={12}>Agent stops and asks</Label>
    </motion.g>
    <motion.g {...fade(6)}>
      <rect x={20} y={200} width={410} height={70} rx={10} className={CARD} />
      <Label x={225} y={226} cls={INK} size={13}>Pass criteria written before building</Label>
      <Label x={225} y={250} size={12}>quality · compliance · speed</Label>
    </motion.g>
  </>
);

const Prototype = () => (
  <>
    <Label x={20} y={50} anchor="start" cls={INK} size={13}>Existing process</Label>
    <rect x={20} y={60} width={420} height={36} rx={8} className={CARD} />
    <Label x={20} y={150} anchor="start" cls={INK} size={13}>Prototype, running alongside</Label>
    <rect x={20} y={160} width={420} height={36} rx={8} className={CARD} />
    {Array.from({ length: 14 }).map((_, i) => (
      <React.Fragment key={i}>
        <motion.circle cx={40 + i * 29} cy={78} r={7} className="fill-slate-400" {...fade(i * 0.3)} />
        <motion.circle cx={40 + i * 29} cy={178} r={7} className={i === 4 || i === 9 ? ROSE : BLUE} {...fade(i * 0.3 + 1)} />
      </React.Fragment>
    ))}
    <motion.g {...fade(10)}>
      <Label x={20} y={235} anchor="start" size={12}>Real documents in, results compared</Label>
      <Label x={20} y={256} anchor="start" size={12}>Red dots are failures found early, while cheap to fix</Label>
    </motion.g>
  </>
);

const Controls = () => {
  const items = ["Automatic tests", "Compliance checks", "Live monitoring", "Access rules", "Activity log"];
  return (
    <>
      {items.map((t, i) => (
        <motion.g key={t} {...fade(i)}>
          <rect x={20} y={20 + i * 52} width={260} height={42} rx={8} className={CARD} />
          <circle cx={46} cy={41 + i * 52} r={10} className={BLUE} />
          <path d={`M41 ${41 + i * 52} l4 4 l7 -8`} stroke="white" strokeWidth={2.5} fill="none" />
          <Label x={68} y={46 + i * 52} anchor="start" cls={INK} size={14}>{t}</Label>
        </motion.g>
      ))}
      <motion.g {...fade(6)}>
        <path d="M280 135 h40" className="stroke-blue-600" strokeWidth={2} fill="none" />
        <rect x={320} y={95} width={120} height={80} rx={12} className="fill-blue-600" />
        <Label x={380} y={130} cls="fill-white" size={14}>Release</Label>
        <Label x={380} y={152} cls="fill-white/80" size={12}>only if all pass</Label>
      </motion.g>
    </>
  );
};

const Expand = () => (
  <>
    <motion.g {...fade(0)}>
      <circle cx={110} cy={150} r={46} className="fill-blue-600" />
      <Label x={110} y={146} cls="fill-white" size={13}>Workflow</Label>
      <Label x={110} y={164} cls="fill-white" size={13}>1</Label>
    </motion.g>
    {[
      { x: 300, y: 70, l: "Workflow 2" },
      { x: 360, y: 160, l: "Workflow 3" },
      { x: 290, y: 250, l: "Workflow 4" },
    ].map((n, i) => (
      <motion.g key={n.l} {...fade(i + 2)}>
        <line x1={150} y1={150} x2={n.x - 36} y2={n.y} strokeDasharray="5 5" className={LINE} strokeWidth={2} />
        <circle cx={n.x} cy={n.y} r={36} className="fill-blue-600/30 stroke-blue-600" strokeWidth={2} />
        <Label x={n.x} y={n.y + 4} cls={INK} size={12}>{n.l}</Label>
      </motion.g>
    ))}
    <motion.g {...fade(6)}>
      <Label x={110} y={230} size={12}>Reused: tests, monitoring, scorecard</Label>
    </motion.g>
  </>
);

const Scorecard = () => {
  const rows = [
    { l: "Productivity", base: 40, now: 78 },
    { l: "Quality", base: 55, now: 88 },
    { l: "Compliance", base: 60, now: 95 },
  ];
  return (
    <>
      <rect x={10} y={10} width={440} height={270} rx={12} className={CARD} />
      <Label x={30} y={42} anchor="start" cls={INK} size={14}>Scorecard against the baseline</Label>
      {rows.map((r, i) => (
        <g key={r.l}>
          <Label x={30} y={88 + i * 62} anchor="start" cls={INK} size={13}>{r.l}</Label>
          <rect x={30} y={96 + i * 62} width={r.base * 4} height={9} rx={4} className="fill-slate-400/60" />
          <motion.rect x={30} y={110 + i * 62} height={9} rx={4} className={BLUE}
            initial={{ width: 0 }} animate={{ width: r.now * 4 }} transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }} />
        </g>
      ))}
      <rect x={30} y={262} width={10} height={8} className="fill-slate-400/60" />
      <Label x={46} y={270} anchor="start" size={11}>Baseline</Label>
      <rect x={120} y={262} width={10} height={8} className={BLUE} />
      <Label x={136} y={270} anchor="start" size={11}>After</Label>
      <Label x={420} y={270} anchor="end" size={10}>Illustrative</Label>
    </>
  );
};

const MAP: Record<VisualId, React.FC> = {
  funnel: Funnel, drift: Drift, messy: Messy, unwatched: Unwatched, method: Method,
  map: MapV, design: Design, prototype: Prototype, controls: Controls, expand: Expand, scorecard: Scorecard,
};

const ProcessVisual = ({ id }: { id: VisualId }) => {
  const V = MAP[id];
  return (
    <svg viewBox="0 0 460 300" role="img" aria-hidden="true" className="h-auto w-full max-h-[60vh]">
      <V />
    </svg>
  );
};

export default ProcessVisual;
