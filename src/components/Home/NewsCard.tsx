import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../../lib/i18n";
import { NewsItem, newsUi } from "../../data/news";

const NewsCard = ({ item, language }: { item: NewsItem; language: Language }) => {
  const ui = newsUi[language];
  return (
    <Link
      to={`/news/${item.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl
                 border border-white/60 dark:border-[#0f1e35]
                 bg-gradient-to-br from-white/40 to-white/15
                 dark:bg-[#08101f]/80
                 backdrop-blur-xl backdrop-saturate-150
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)]
                 dark:shadow-none
                 transition-transform duration-200 hover:-translate-y-1"
    >
      {item.cover && (
        <img
          src={item.cover}
          alt={item.title[language]}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 font-mono text-[0.55rem] uppercase tracking-widest ${
              item.status === "upcoming"
                ? "bg-blue-600 text-white"
                : "border border-blue-500/30 text-blue-500"
            }`}
          >
            {item.status === "upcoming" ? ui.upcoming : item.status === "article" ? ui.article : ui.recap}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
            {item.dateLabel[language]}{item.location ? ` · ${item.location}` : ""}
          </span>
        </div>
        <h3 className="mb-3 text-xl font-bold leading-snug text-[#0f1e35] dark:text-slate-100">
          {item.title[language]}
        </h3>
        <p className="mb-6 text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
          {item.summary[language]}
        </p>
        <span className="mt-auto font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-blue-500 group-hover:underline">
          {ui.readMore} →
        </span>
      </div>
    </Link>
  );
};

export default NewsCard;
