import React from "react";
import { t, Language } from "../lib/i18n";

interface WorkshopsProps {
  language?: Language;
}

const Workshops = ({ language = "en" }: WorkshopsProps) => {
  return (
    <div className="min-h-screen bg-[#060b18] px-4 py-24 text-slate-100 mt-28">
      <h1 className="mb-8 text-center text-4xl font-bold">
        {t("workshops.title", language)}
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="mb-12 text-center text-lg text-[#4a6a8a]">
          {t("workshops.description", language)}
        </p>

        <div className="space-y-12">
          <div className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              {t("workshops.workshop1.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop1.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {t("workshops.workshop1.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {t("workshops.workshop1.tag2", language)}
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              {t("workshops.workshop2.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop2.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {t("workshops.workshop2.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {t("workshops.workshop2.tag2", language)}
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              {t("workshops.workshop3.title", language)}
            </h2>
            <p className="mb-4 text-lg text-[#4a6a8a]">
              {t("workshops.workshop3.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {t("workshops.workshop3.tag1", language)}
              </span>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
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
