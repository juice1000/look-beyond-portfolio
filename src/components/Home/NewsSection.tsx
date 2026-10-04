import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import { newsSeries, newsUi, sortedNews } from "../../data/news";
import NewsCard from "./NewsCard";

const NewsSection = ({ language }: { language: Language }) => {
  const ui = newsUi[language];
  const items = sortedNews().slice(0, 2);

  return (
    <section
      id="news"
      className="border-b border-white/30 dark:border-[#0f1e35] py-14"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
              {ui.eyebrow}
            </p>
            <h2 className="mb-3 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
              {newsSeries.name}
            </h2>
            <p className="max-w-2xl text-slate-500 dark:text-[#4a6a8a]">
              {newsSeries.description[language]}
            </p>
          </div>
          <Link
            to="/news"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
          >
            {ui.allNews} →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <NewsCard key={item.slug} item={item} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
