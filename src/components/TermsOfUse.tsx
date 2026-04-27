import React from "react";
import { termsOfUse } from "../lib/i18n_terms";
import { Language } from "../lib/i18n";

interface TermsOfUseProps {
  language?: Language;
}

const TermsOfUse = ({ language = "en" }: TermsOfUseProps) => {
  const t = (key: string) => termsOfUse[language][key] || key;

  return (
    <div className="min-h-screen bg-[#060b18] px-4 py-24 mt-16 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-100">
          {t("terms.title")}
        </h1>
        <p className="mb-6 text-[#5f7793]">
          {t("terms.effectiveDate")}
        </p>

        <div className="prose dark:prose-invert max-w-none">
          <div className="mb-8">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("terms.companyInfo.title")}
            </h2>
            <p className="text-[#4a6a8a]">
              {t("terms.companyInfo.name")}
            </p>
            <p className="text-[#4a6a8a]">
              {t("terms.companyInfo.address")}
            </p>
            <p className="text-[#4a6a8a]">
              {t("terms.companyInfo.phone")}
            </p>
            <p className="text-[#4a6a8a]">
              {t("terms.companyInfo.email")}
            </p>
          </div>

          <hr className="my-8 border-[#0f1e35]" />

          <div className="space-y-6">
            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section1.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section1.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section2.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section2.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section3.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section3.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section4.title")}
              </h2>
              <p className="mb-2 text-[#4a6a8a]">
                {t("terms.section4.content")}
              </p>
              <ul className="space-y-1 list-disc pl-6 text-[#4a6a8a]">
                <li>{t("terms.section4.bullet1")}</li>
                <li>{t("terms.section4.bullet2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section5.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section5.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section6.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section6.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section7.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section7.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section8.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section8.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section9.title")}
              </h2>
              <p className="text-[#4a6a8a]">
                {t("terms.section9.content")}
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold text-slate-100">
                {t("terms.section10.title")}
              </h2>
              <p className="mb-2 text-[#4a6a8a]">
                {t("terms.section10.content")}
              </p>
              <p className="text-[#4a6a8a]">
                {t("terms.section10.email")}
              </p>
              <p className="text-[#4a6a8a]">
                {t("terms.section10.phone")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
