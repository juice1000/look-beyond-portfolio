import React from "react";
import { ArrowRight } from "lucide-react";
import { t, Language } from "../lib/i18n";
import { AuroraBackground } from "./Home/HeroSection";

interface WorkshopsProps {
  language?: Language;
}

const GLASS =
  "relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none transition-transform duration-200 hover:-translate-y-1 p-8";

const Workshops = ({ language = "en" }: WorkshopsProps) => {
  const isDE = language === "de";

  const intro = isDE
    ? {
        eyebrow: "Einstiegspunkt",
        lead: "Workshops sind der Beginn des gemeinsamen Designprozesses.",
        body: "Wir starten nicht mit einer Lösung. Wir starten mit Ihrem Team — um gemeinsam herauszufinden, wo KI in Ihren Abläufen echten Unterschied macht. Die Workshops sind der erste Schritt, bevor irgendetwas gebaut wird.",
      }
    : {
        eyebrow: "Starting point",
        lead: "Workshops are where the joint design process begins.",
        body: "We don't start with a solution. We start with your team — to discover together where AI makes a real difference in your operations. Workshops are the first step before anything gets built.",
      };

  const leadsTo = isDE
    ? {
        label: "Führt typischerweise zu",
        workshops: [
          "Co-Design eines Knowledge-Retrieval-Agenten oder einer Custom-Datenplattform",
          "POC-Entwicklung für den spezifisch gemappten Workflow",
          "KI-Performance-Monitoring-Retainer oder Governance-Layer-Design",
        ],
      }
    : {
        label: "Typically leads to",
        workshops: [
          "Co-design of a knowledge retrieval agent or custom data platform",
          "POC development targeting the specific workflow mapped in the session",
          "AI performance monitoring retainer or governance layer design",
        ],
      };

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] px-4 py-24 text-[#0f1e35] dark:text-slate-100 mt-28">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Intro — workshops as the starting point */}
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wide text-blue-500">
          {intro.eyebrow}
        </p>
        <h1 className="mb-4 text-center text-4xl font-bold text-[#0f1e35] dark:text-slate-100">
          {t("workshops.title", language)}
        </h1>
        <p className="mb-3 text-center text-lg font-semibold text-[#0f1e35] dark:text-slate-200">
          {intro.lead}
        </p>
        <p className="mb-12 text-center text-base text-[#4a6a8a]">
          {intro.body}
        </p>

        <div className="space-y-6">
          {/* Workshop 1 */}
          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop1.title", language)}
            </h2>
            <p className="mb-4 text-base text-[#4a6a8a]">
              {t("workshops.workshop1.description", language)}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop1.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop1.tag2", language)}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-[#4a6a8a] border-t border-white/30 dark:border-[#0f1e35] pt-4">
              <ArrowRight className="h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <span className="font-medium text-[#0f1e35] dark:text-slate-300">
                  {leadsTo.label}:
                </span>{" "}
                {leadsTo.workshops[0]}
              </span>
            </div>
          </div>

          {/* Workshop 2 */}
          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop2.title", language)}
            </h2>
            <p className="mb-4 text-base text-[#4a6a8a]">
              {t("workshops.workshop2.description", language)}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop2.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop2.tag2", language)}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-[#4a6a8a] border-t border-white/30 dark:border-[#0f1e35] pt-4">
              <ArrowRight className="h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <span className="font-medium text-[#0f1e35] dark:text-slate-300">
                  {leadsTo.label}:
                </span>{" "}
                {leadsTo.workshops[1]}
              </span>
            </div>
          </div>

          {/* Workshop 3 */}
          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop3.title", language)}
            </h2>
            <p className="mb-4 text-base text-[#4a6a8a]">
              {t("workshops.workshop3.description", language)}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop3.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop3.tag2", language)}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-[#4a6a8a] border-t border-white/30 dark:border-[#0f1e35] pt-4">
              <ArrowRight className="h-4 w-4 shrink-0 text-blue-500" />
              <span>
                <span className="font-medium text-[#0f1e35] dark:text-slate-300">
                  {leadsTo.label}:
                </span>{" "}
                {leadsTo.workshops[2]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
