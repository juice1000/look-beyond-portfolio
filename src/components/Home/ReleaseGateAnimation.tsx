import React from "react";
import { Check, X } from "lucide-react";
import AnimationPanel from "./AnimationPanel";
import { clamp, useLoopTime } from "./useLoopTime";

// Row 2, "It stays within the rules": every release runs the same checks. In
// the first run they all pass and it ships. In the second one fails and it stops.
const CYCLE = 6;
const START = 0.8;
const STEP = 0.9;
const CHECKS = ["Safety", "Data protection", "EU AI Act", "Company policy"];
const FAIL_INDEX = 1;

type Status = "pending" | "checking" | "pass" | "fail" | "skipped";

const ReleaseGateAnimation = ({ label }: { label?: string }) => {
  const time = useLoopTime(CYCLE * 2);
  const cycle = Math.floor(time / CYCLE);
  const local = time % CYCLE;
  const failIndex = cycle === 1 ? FAIL_INDEX : -1;
  const failAt = START + FAIL_INDEX * STEP;
  const allDoneAt = START + CHECKS.length * STEP;

  const statuses: Status[] = CHECKS.map((_, i) => {
    const resolveAt = START + i * STEP;
    if (failIndex >= 0 && i > failIndex) return local >= failAt ? "skipped" : "pending";
    if (local >= resolveAt) return i === failIndex ? "fail" : "pass";
    if (local >= resolveAt - 0.45) return "checking";
    return "pending";
  });

  const release: "checking" | "shipped" | "stopped" =
    failIndex >= 0 && local >= failAt ? "stopped" : failIndex < 0 && local >= allDoneAt ? "shipped" : "checking";
  const fade = clamp((CYCLE - local) / 0.5, 0, 1);

  return (
    <AnimationPanel title={label ?? "Release checks"}>
      <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]" style={{ opacity: fade }}>
        <ul className="space-y-3">
          {CHECKS.map((check, index) => {
            const status = statuses[index];
            return (
              <li
                key={check}
                className="flex items-center gap-3 rounded-xl border border-white/60 dark:border-[#0f1e35] bg-white/40 dark:bg-[#0b1426] px-4 py-3"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-white transition-colors ${
                    status === "pass"
                      ? "border-green-500 bg-green-500"
                      : status === "fail"
                        ? "border-red-500 bg-red-500"
                        : status === "checking"
                          ? "animate-pulse border-blue-500 bg-blue-500/30"
                          : "border-slate-300 dark:border-[#1a3050]"
                  }`}
                >
                  {status === "pass" && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                  {status === "fail" && <X className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                <span
                  className={`text-sm font-medium ${
                    status === "skipped" ? "text-slate-400 dark:text-[#2a4060]" : "text-[#0f1e35] dark:text-slate-100"
                  }`}
                >
                  {check}
                </span>
              </li>
            );
          })}
        </ul>

        <div
          className={`flex w-full flex-col items-center justify-center rounded-2xl border px-6 py-6 text-center sm:w-40 ${
            release === "shipped"
              ? "border-green-500/50 bg-green-500/10"
              : release === "stopped"
                ? "border-red-500/50 bg-red-500/10"
                : "border-white/60 dark:border-[#0f1e35] bg-white/40 dark:bg-[#0b1426]"
          }`}
        >
          <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
            New release
          </p>
          <p
            className={`text-lg font-bold ${
              release === "shipped"
                ? "text-green-600 dark:text-green-400"
                : release === "stopped"
                  ? "text-red-600 dark:text-red-400"
                  : "text-slate-400 dark:text-[#4a6a8a]"
            }`}
          >
            {release === "shipped" ? "Shipped" : release === "stopped" ? "Stopped" : "Checking"}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-[#4a6a8a]">
            {release === "shipped" ? "All checks passed" : release === "stopped" ? "Critical check failed" : "Running checks"}
          </p>
        </div>
      </div>
    </AnimationPanel>
  );
};

export default ReleaseGateAnimation;
