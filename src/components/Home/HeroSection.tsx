import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MonitoringAnimation, { useMonitoringTime } from "./MonitoringAnimation";

interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  supportingLine?: string;
  services?: string[];
  ctaText?: string;
  pipeline?: Array<{
    label: string;
    items: string[];
  }>;
  ticker?: string[];
  kpis?: Array<{
    value: string;
    label: string;
  }>;
  onCtaClick?: () => void;
}

const HeroSection = ({
  eyebrow,
  title = "Build Smart, Lead Change.",
  subtitle = "We help you",
  supportingLine,
  services = ["Ideate", "Ship", "Scale", "Dominate"],
  ctaText = "Start Your Project",
  pipeline,
  ticker = [],
  kpis = [],
  onCtaClick,
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);
  const time = useMonitoringTime();

  React.useEffect(() => {
    if (!services.length) return;
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const scrollToSection = (id: string, offset = 80) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-[#0f1e35] bg-[#060b18] text-white">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        <div className="relative z-10 flex w-full flex-shrink-0 flex-col justify-center border-b border-[#0f1e35] px-5 py-12 sm:px-8 md:px-12 lg:w-[29rem] lg:border-b-0 lg:border-r lg:py-0">
          <div className="pointer-events-none absolute left-[10%] top-[30%] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 inline-flex items-center gap-2 rounded-sm border border-blue-500/40 px-3 py-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-blue-500"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {eyebrow}
              </motion.p>
            )}

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
            >
              <Button
                size="lg"
                onClick={() =>
                  onCtaClick ? onCtaClick() : scrollToSection("contact")
                }
                className="rounded-sm bg-blue-600 px-5 py-5 font-mono text-[0.7rem] font-semibold uppercase tracking-widest text-white hover:bg-blue-700"
              >
                {ctaText}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {kpis.length > 0 && (
              <div className="grid grid-cols-3 border-t border-[#0f1e35] pt-6">
                {kpis.slice(0, 3).map((kpi, index) => (
                  <div
                    key={kpi.label}
                    className={`${
                      index < 2 ? "border-r border-[#0f1e35] pr-4" : "pl-4"
                    } ${index === 1 ? "px-4" : ""}`}
                  >
                    <div className="mb-1 text-xl font-bold text-blue-600">
                      {kpi.value}
                    </div>
                    <div className="font-mono text-[0.48rem] uppercase leading-4 tracking-widest text-[#2a4060]">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {["Procurement", "Manufacturing", "Logistics"].map((industry) => (
                <span
                  key={industry}
                  className="rounded-sm border border-[#172540] px-2.5 py-1 font-mono text-[0.48rem] uppercase tracking-widest text-[#2a4060]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[34rem] flex-1 overflow-hidden lg:min-h-0">
          <div className="absolute right-6 top-5 flex items-center gap-2 z-10">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500/60" />
            <span className="font-mono text-[1.2rem] uppercase tracking-[0.2em] text-[#2a4a6a]">
              AI Performance Monitoring
            </span>
          </div>
          <MonitoringAnimation time={time} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
