import React from "react";
import { t, Language } from "../lib/i18n";
import { Button } from "./ui/button";
import { AuroraBackground } from "./Home/HeroSection";

const AIReadiness = ({ language = "en" }: { language: Language }) => {
  const linkAIReadiness = `https://aireadinessassessment.fillout.com/${language}`;

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
          <h1 className="mb-8 text-center text-4xl font-bold text-[#0f1e35] dark:text-slate-100">
            {t("aiReadiness.title", language)}
          </h1>
          <div className="relative overflow-hidden mx-auto max-w-3xl rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none p-8">
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <p className="mb-6 text-lg text-[#4a6a8a]">
              {t("aiReadiness.description", language)}
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="mb-3 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
                  {t("aiReadiness.section1.title", language)}
                </h2>
                <p className="text-[#4a6a8a]">{t("aiReadiness.section1.content", language)}</p>
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
                  {t("aiReadiness.section2.title", language)}
                </h2>
                <p className="text-[#4a6a8a]">{t("aiReadiness.section2.content", language)}</p>
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
                  {t("aiReadiness.section3.title", language)}
                </h2>
                <p className="text-[#4a6a8a]">{t("aiReadiness.section3.content", language)}</p>
              </div>
            </div>
          </div>
          <h2 className="mb-3 mt-10 text-center text-2xl font-semibold text-[#0f1e35] dark:text-slate-100">
            {t("aiReadiness.cta.title", language)}
          </h2>
          <p className="text-center text-lg text-[#4a6a8a]">
            {t("aiReadiness.cta.description1", language)}
          </p>
          <p className="text-center text-[#5f7793]">
            {t("aiReadiness.cta.description2", language)}
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white mt-8"
          >
            <a href={linkAIReadiness} target="_blank" rel="noopener noreferrer">
              {t("aiReadiness.cta.button", language)}
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AIReadiness;
