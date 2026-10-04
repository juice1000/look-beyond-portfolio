import React from "react";
import AnimationPanel from "./AnimationPanel";
import { clamp, useLoopTime } from "./useLoopTime";

// Row 1, "It keeps working": a quality line is drawn after release, dips below
// the threshold, the dip is caught, and the failure becomes a new test.
const DURATION = 9;
const DRAW_SECONDS = 5.5;
const PATH =
  "M30 120 C80 112 120 108 170 114 S250 122 285 120 C300 118 305 215 325 230 C345 245 355 150 380 130 S430 112 450 108";
const THRESHOLD_Y = 175;

const STEPS = ["Tested before release", "Watched after launch", "Failures become tests"];

const QualityWatchAnimation = ({ label }: { label?: string }) => {
  const time = useLoopTime(DURATION);
  const pathRef = React.useRef<SVGPathElement>(null);
  const [geometry, setGeometry] = React.useState({ length: 1, dipFraction: 0.6, dip: { x: 325, y: 230 } });

  React.useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    let best = 0;
    let bestY = -Infinity;
    for (let i = 0; i <= 200; i++) {
      const point = path.getPointAtLength((i / 200) * length);
      if (point.y > bestY) {
        bestY = point.y;
        best = i / 200;
      }
    }
    const dip = path.getPointAtLength(best * length);
    setGeometry({ length, dipFraction: best, dip: { x: dip.x, y: dip.y } });
  }, []);

  const progress = clamp(time / DRAW_SECONDS, 0, 1);
  const dipTime = geometry.dipFraction * DRAW_SECONDS;
  const head = pathRef.current
    ? pathRef.current.getPointAtLength(progress * geometry.length)
    : { x: 30, y: 120 };
  const fade = clamp((DURATION - time) / 0.8, 0, 1);
  const caught = time >= dipTime;
  const added = time >= dipTime + 0.9;
  const activeStep = added ? 2 : time >= 1.5 ? 1 : 0;

  return (
    <AnimationPanel title={label ?? "Live quality"}>
      <svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="Quality line dips below the threshold, is caught, and becomes a new test">
        <g style={{ opacity: fade }}>
          <line x1="30" y1={THRESHOLD_Y} x2="450" y2={THRESHOLD_Y} className="stroke-slate-300 dark:stroke-[#1a3050]" strokeDasharray="4 5" />
          <text x="38" y={THRESHOLD_Y + 14} className="fill-slate-400 dark:fill-[#4a6a8a]" style={{ fontSize: 10, fontFamily: "monospace" }}>
            QUALITY THRESHOLD
          </text>

          <line x1="30" y1="80" x2="30" y2="250" className="stroke-slate-300 dark:stroke-[#1a3050]" />
          <text x="38" y="92" className="fill-slate-400 dark:fill-[#4a6a8a]" style={{ fontSize: 10, fontFamily: "monospace" }}>
            RELEASE
          </text>

          <path d={PATH} fill="none" className="stroke-slate-200 dark:stroke-[#0f1e35]" strokeWidth="3" />
          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            className="stroke-blue-500"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={geometry.length}
            strokeDashoffset={geometry.length * (1 - progress)}
          />
          {progress < 1 && <circle cx={head.x} cy={head.y} r="5" className="fill-blue-500" />}

          {caught && (
            <g>
              <circle cx={geometry.dip.x} cy={geometry.dip.y} r="9" className="fill-red-500/20 stroke-red-500" />
              <rect x={geometry.dip.x - 160} y={geometry.dip.y - 12} width="116" height="24" rx="12" className="fill-red-500/15 stroke-red-500" />
              <text x={geometry.dip.x - 102} y={geometry.dip.y + 4} textAnchor="middle" className="fill-red-600 dark:fill-red-400" style={{ fontSize: 11, fontFamily: "monospace" }}>
                Drop detected
              </text>
            </g>
          )}
          {added && (
            <g>
              <rect x={geometry.dip.x - 180} y={geometry.dip.y + 20} width="136" height="24" rx="12" className="fill-blue-500/15 stroke-blue-500" />
              <text x={geometry.dip.x - 112} y={geometry.dip.y + 36} textAnchor="middle" className="fill-blue-600 dark:fill-blue-300" style={{ fontSize: 11, fontFamily: "monospace" }}>
                Added as new test
              </text>
            </g>
          )}
        </g>
      </svg>
      <ol className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className={`flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-widest transition-colors ${
              index === activeStep ? "text-blue-600 dark:text-blue-300" : "text-slate-400 dark:text-[#2a4060]"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${index === activeStep ? "bg-blue-500" : "bg-slate-300 dark:bg-[#1a3050]"}`} />
            {step}
          </li>
        ))}
      </ol>
    </AnimationPanel>
  );
};

export default QualityWatchAnimation;
