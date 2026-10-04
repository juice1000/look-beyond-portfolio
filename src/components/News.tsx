import React from "react";
import { Language } from "../lib/i18n";
import { newsSeries, newsUi, sortedNews } from "../data/news";
import { AuroraBackground } from "./Home/HeroSection";
import NewsCard from "./Home/NewsCard";

const News = ({ language }: { language: Language }) => {
  const ui = newsUi[language];

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <section className="border-b border-white/30 dark:border-[#0f1e35] px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
              {ui.eyebrow}
            </p>
            <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-5xl">
              {ui.heading}
            </h1>
            <div className="mb-6 h-1 w-10 rounded-full bg-blue-600" />
            <p className="max-w-2xl text-base leading-7 text-[#4a6a8a] sm:text-lg">
              {ui.intro}
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 border-l-2 border-blue-500 py-1 pl-5">
              <p className="mb-1 font-mono text-[0.6rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
                {ui.seriesLabel}
              </p>
              <p className="max-w-3xl text-base font-semibold text-[#0f1e35] dark:text-slate-100">
                {newsSeries.name}
              </p>
              <p className="max-w-3xl text-sm text-slate-500 dark:text-[#4a6a8a]">
                {newsSeries.description[language]}{" "}
                <a
                  href={newsSeries.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-500 hover:underline"
                >
                  {ui.seriesLink} →
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {sortedNews().map((item) => (
                <NewsCard key={item.slug} item={item} language={language} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
