import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Language } from "../lib/i18n";
import { findNews, newsUi } from "../data/news";
import { AuroraBackground } from "./Home/HeroSection";

const NewsArticle = ({ language }: { language: Language }) => {
  const { slug } = useParams();
  const item = findNews(slug);
  if (!item) return <Navigate to="/news" replace />;
  const ui = newsUi[language];

  return (
    <div className="min-h-screen bg-transparent dark:bg-[#060b18] text-[#0f1e35] dark:text-slate-100">
      <div className="fixed inset-0 -z-10 dark:hidden">
        <AuroraBackground isDarkMode={false} />
      </div>
      <main className="pt-20">
        <article className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/news"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#2a4060] transition-colors hover:text-blue-500"
            >
              ← {ui.allNews}
            </Link>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 font-mono text-[0.55rem] uppercase tracking-widest ${
                  item.status === "upcoming"
                    ? "bg-blue-600 text-white"
                    : "border border-blue-500/30 text-blue-500"
                }`}
              >
                {item.status === "upcoming" ? ui.upcoming : ui.recap}
              </span>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
                {item.dateLabel[language]} · {item.location}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#0f1e35] dark:text-slate-100 sm:text-4xl">
              {item.title[language]}
            </h1>
            <div className="mb-8 h-1 w-10 rounded-full bg-blue-600" />

            {item.cover && (
              <img
                src={item.cover}
                alt={item.title[language]}
                className="mb-8 aspect-[16/9] w-full rounded-2xl object-cover"
              />
            )}

            <div className="space-y-5 text-base leading-7 text-[#4a6a8a]">
              {item.body[language].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {item.questions && (
              <div className="mt-10 rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 p-6">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                  {ui.questions}
                </p>
                <ol className="space-y-3">
                  {item.questions[language].map((question, index) => (
                    <li key={question} className="flex gap-4">
                      <span className="font-mono text-xs font-semibold text-blue-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium text-[#0f1e35] dark:text-slate-100">
                        {question}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {item.takeaways && (
              <div className="mt-10">
                <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                  {ui.takeaways}
                </p>
                <ul className="space-y-5">
                  {item.takeaways[language].map((takeaway) => (
                    <li key={takeaway.title} className="border-l-2 border-blue-500 pl-5">
                      <p className="mb-1 text-base font-semibold text-[#0f1e35] dark:text-slate-100">
                        {takeaway.title}
                      </p>
                      <p className="text-sm leading-6 text-[#4a6a8a]">{takeaway.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.gallery && item.gallery.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-blue-500">
                  {ui.gallery}
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {item.gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="aspect-[3/4] w-full rounded-2xl object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-700"
                >
                  {link.label[language]}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
              {item.status === "upcoming" && (
                <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">{ui.approval}</p>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NewsArticle;
