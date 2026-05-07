import React from "react";
import { t, Language } from "../lib/i18n";
import { AuroraBackground } from "./Home/HeroSection";

interface WorkshopsProps {
  language?: Language;
}

const GLASS = "relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none transition-transform duration-200 hover:-translate-y-1 p-8";

const Workshops = ({ language = "en" }: WorkshopsProps) => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] px-4 py-24 text-[#0f1e35] dark:text-slate-100 mt-28">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <h1 className="mb-8 text-center text-4xl font-bold text-[#0f1e35] dark:text-slate-100">
        {t("workshops.title", language)}
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="mb-12 text-center text-lg text-[#4a6a8a]">
          {t("workshops.description", language)}
        </p>

        <div className="space-y-6">
          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop1.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop1.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop1.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop1.tag2", language)}
              </span>
            </div>
          </div>

          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop2.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop2.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop2.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop2.tag2", language)}
              </span>
            </div>
          </div>

          <div className={GLASS}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h2 className="mb-4 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("workshops.workshop3.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop3.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop3.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                {t("workshops.workshop3.tag2", language)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
