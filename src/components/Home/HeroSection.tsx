import React from "react";
import { motion } from "framer-motion";
import VerticalPipeline from "./VerticalPipeline";
import AgentNetwork from "./AgentNetwork";
import MonitoringAnimation from "./MonitoringAnimation";

const TABS = [
  { key: "vp",  label: "AI Workflow Systems",      dur: 16.5 },
  { key: "an",  label: "Autonomous Agents",         dur: 12   },
  { key: "mon", label: "AI Performance Monitoring", dur: 12   },
] as const;
type TabKey = typeof TABS[number]["key"];

const FADE = 0.6;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const useAnimationTimes = (activeTab: TabKey, prevTab: TabKey | null) => {
  const [times, setTimes] = React.useState<Record<TabKey, number>>({ vp: 0, an: 0, mon: 0 });
  const frameRef = React.useRef<number>();
  // Track accumulated elapsed per tab so paused tabs resume where they left off
  const accumulated = React.useRef<Record<TabKey, number>>({ vp: 0, an: 0, mon: 0 });
  const lastNow = React.useRef<number>();

  // Which tabs are visible right now — updated synchronously by the component
  const activeTabRef = React.useRef(activeTab);
  const prevTabRef = React.useRef(prevTab);
  activeTabRef.current = activeTab;
  prevTabRef.current = prevTab;

  React.useEffect(() => {
    const tick = (now: number) => {
      const delta = lastNow.current != null ? (now - lastNow.current) / 1000 : 0;
      lastNow.current = now;

      const visible = new Set<TabKey>([activeTabRef.current]);
      if (prevTabRef.current) visible.add(prevTabRef.current);

      visible.forEach((key) => {
        const dur = TABS.find((t) => t.key === key)!.dur;
        accumulated.current[key] = (accumulated.current[key] + delta) % dur;
      });

      setTimes({ ...accumulated.current });
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, []);

  return times;
};

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  supportingLine?: string;
  services?: string[];
  pipeline?: Array<{ label: string; items: string[] }>;
  ticker?: string[];
  kpis?: Array<{ value: string; label: string }>;
  isDarkMode: boolean;
}

const HeroSection = ({
  title = "Build Smart, Lead Change.",
  subtitle = "We help you",
  supportingLine,
  services = ["Ideate", "Ship", "Scale", "Dominate"],
  ticker = [],
  kpis = [],
  isDarkMode,
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<TabKey>("vp");
  const [prevTab, setPrevTab] = React.useState<TabKey | null>(null);
  const [fadeT, setFadeT] = React.useState(1);
  const fadeFrame = React.useRef<number>();
  const fadeStart = React.useRef<number>();
  const times = useAnimationTimes(activeTab, prevTab);

  // Auto-advance cycle
  const autoTimer = React.useRef<ReturnType<typeof setTimeout>>();
  const scheduleNext = React.useCallback((key: TabKey) => {
    clearTimeout(autoTimer.current);
    const dur = TABS.find((t) => t.key === key)!.dur * 1000;
    autoTimer.current = setTimeout(() => {
      const idx = TABS.findIndex((t) => t.key === key);
      switchTo(TABS[(idx + 1) % TABS.length].key);
    }, dur);
  }, []); // eslint-disable-line

  const switchTo = React.useCallback((next: TabKey) => {
    setActiveTab((cur) => {
      if (cur === next) return cur;
      setPrevTab(cur);
      setFadeT(0);
      cancelAnimationFrame(fadeFrame.current!);
      fadeStart.current = undefined;
      const tick = (now: number) => {
        if (!fadeStart.current) fadeStart.current = now;
        const t = clamp01((now - fadeStart.current) / (FADE * 1000));
        setFadeT(t);
        if (t < 1) fadeFrame.current = requestAnimationFrame(tick);
        else setPrevTab(null);
      };
      fadeFrame.current = requestAnimationFrame(tick);
      scheduleNext(next);
      return next;
    });
  }, [scheduleNext]);

  // Start auto-cycle on mount
  React.useEffect(() => {
    scheduleNext("vp");
    return () => {
      clearTimeout(autoTimer.current);
      cancelAnimationFrame(fadeFrame.current!);
    };
  }, [scheduleNext]);

  React.useEffect(() => {
    if (!services.length) return;
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const activeLabel = TABS.find((t) => t.key === activeTab)!.label;

  const renderAnim = (key: TabKey, opacity: number) => {
    if (opacity <= 0) return null;
    return (
      <div key={key} className="absolute inset-0" style={{ opacity }}>
        {key === "vp"  && <VerticalPipeline time={times.vp} isDarkMode={isDarkMode} />}
        {key === "an"  && <AgentNetwork time={times.an} isDarkMode={isDarkMode} />}
        {key === "mon" && <MonitoringAnimation time={times.mon} isDarkMode={isDarkMode} />}
      </div>
    );
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-[#0f1e35] bg-[#060b18] text-slate-100">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        <div className="relative z-10 flex w-full flex-shrink-0 flex-col justify-center border-b border-[#0f1e35] px-5 py-12 sm:px-8 md:px-12 lg:w-[29rem] lg:border-b-0 lg:border-r lg:py-0">
          <div className="pointer-events-none absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 whitespace-pre-line text-4xl font-bold leading-[1.08] tracking-normal text-slate-100 sm:text-5xl lg:text-4xl"
            >
              {title}
            </motion.h1>
            <div className="mb-5 h-1 w-8 rounded-full bg-blue-600" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-7 max-w-sm text-sm leading-7 text-[#4a6a8a] sm:text-base"
            >
              {subtitle}
            </motion.p>
            {!supportingLine && (
              <div className="h-20 mb-8">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold text-blue-500 sm:text-5xl"
                >
                  {services[currentServiceIndex]}
                </motion.div>
              </div>
            )}

            {kpis.length > 0 && (
              <div className="grid grid-cols-3 border-t border-[#0f1e35] pt-6">
                {kpis.slice(0, 3).map((kpi, index) => (
                  <div
                    key={kpi.label}
                    className={`${index < 2 ? "border-r border-[#0f1e35] pr-4" : "pl-4"} ${index === 1 ? "px-4" : ""}`}
                  >
                    <div className="mb-1 text-xl font-bold text-blue-600">{kpi.value}</div>
                    <div className="font-mono text-[0.48rem] uppercase leading-4 tracking-widest text-[#2a4060]">{kpi.label}</div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        <div className="relative min-h-[34rem] flex-1 overflow-hidden lg:min-h-0">
          {/* Tab controls — top right */}
          <div className="absolute right-5 top-5 z-10 flex flex-col gap-1.5 items-end">
            {TABS.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => switchTo(tab.key)}
                  className={`flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "border-blue-500/60 bg-blue-500/10 text-blue-400"
                      : "border-[#0f1e35] text-[#2a4060] hover:border-blue-500/30 hover:text-[#3a5a7a]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${isActive ? "bg-blue-500" : "bg-[#1a3050]"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Animations */}
          {prevTab && renderAnim(prevTab, 1 - fadeT)}
          {renderAnim(activeTab, prevTab ? fadeT : 1)}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
