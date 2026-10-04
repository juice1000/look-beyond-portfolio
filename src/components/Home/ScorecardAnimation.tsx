import React from "react";
import AnimationPanel from "./AnimationPanel";
import { clamp, useLoopTime } from "./useLoopTime";

// Row 3, "It shows its return": each measure is compared with the baseline set
// before launch. Bars are illustrative and carry no figures.
const DURATION = 8;
const BASELINE = 0.55;
const MEASURES = [
  { name: "Time saved", result: 0.8 },
  { name: "Cost per task", result: 0.72 },
  { name: "Quality", result: 0.86 },
  { name: "Compliance", result: 0.92 },
];

const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);

const ScorecardAnimation = ({ label }: { label?: string }) => {
  const time = useLoopTime(DURATION);
  const fade = clamp((DURATION - time) / 0.8, 0, 1);
  const showChip = time >= 2.6;

  return (
    <AnimationPanel title={label ?? "Scorecard"}>
      <div style={{ opacity: fade }}>
        <ul className="space-y-5">
          {MEASURES.map((measure, index) => {
            const p = easeOut(clamp((time - 0.3 - index * 0.25) / 1.2, 0, 1));
            return (
              <li key={measure.name}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-[#0f1e35] dark:text-slate-100">{measure.name}</span>
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
                    vs. baseline
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-slate-200/70 dark:bg-[#0f1e35]">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: `${measure.result * p * 100}%` }} />
                  <span
                    className="absolute -top-1 h-4 w-0.5 rounded bg-[#0f1e35] dark:bg-slate-200"
                    style={{ left: `${BASELINE * 100}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <span className="h-4 w-0.5 rounded bg-[#0f1e35] dark:bg-slate-200" />
          <span className="font-mono text-[0.55rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
            Baseline set before launch
          </span>
          <span
            className={`ml-auto rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 font-mono text-[0.55rem] uppercase tracking-widest text-blue-600 transition-opacity duration-500 dark:text-blue-300 ${
              showChip ? "opacity-100" : "opacity-0"
            }`}
          >
            Numbers finance can check
          </span>
        </div>
      </div>
    </AnimationPanel>
  );
};

export default ScorecardAnimation;
