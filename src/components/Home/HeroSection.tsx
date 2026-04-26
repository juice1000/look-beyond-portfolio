import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  supportingLine?: string;
  services?: string[];
  ctaText?: string;
  secondaryCtaText?: string;
  pipeline?: Array<{
    label: string;
    items: string[];
  }>;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const HeroSection = ({
  eyebrow,
  title = "Build Smart, Lead Change.",
  subtitle = "We help you",
  supportingLine,
  services = ["Ideate", "Ship", "Scale", "Dominate"],
  ctaText = "Start Your Project",
  secondaryCtaText,
  pipeline,
  onCtaClick,
  onSecondaryCtaClick,
}: HeroSectionProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);

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
    <section className="min-h-[calc(100vh-7rem)] w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <div className="text-left">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 mb-6"
            >
              <ShieldCheck className="h-4 w-4" />
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-5 max-w-3xl"
          >
            {subtitle}
          </motion.p>
          {supportingLine ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl"
            >
              {supportingLine}
            </motion.p>
          ) : (
            <div className="h-20 mb-8">
              <motion.div
                key={currentServiceIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="sm:text-5xl font-semibold text-blue-600 dark:text-blue-400"
              >
                {services[currentServiceIndex]}
              </motion.div>
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              onClick={() =>
                onCtaClick ? onCtaClick() : scrollToSection("contact")
              }
              className="text-base px-6 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCtaText && (
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  onSecondaryCtaClick
                    ? onSecondaryCtaClick()
                    : scrollToSection("industries")
                }
                className="text-base px-6 py-6 rounded-full"
              >
                {secondaryCtaText}
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            )}
          </motion.div>
        </div>

        {pipeline && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Workflow pipeline
              </p>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                Governed system
              </span>
            </div>
            <div className="space-y-3">
              {pipeline.map((stage, index) => (
                <div
                  key={stage.label}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900/50"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {stage.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stage.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
