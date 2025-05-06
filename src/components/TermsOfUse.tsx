import React from "react";
import { termsOfUse } from "../lib/i18n_terms";
import { Language } from "../lib/i18n";

interface TermsOfUseProps {
  language?: Language;
}

const TermsOfUse = ({ language = "en" }: TermsOfUseProps) => {
  const t = (key: string) => termsOfUse[language][key] || key;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {t("terms.title")}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {t("terms.effectiveDate")}
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {t("terms.companyInfo.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {t("terms.companyInfo.name")}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t("terms.companyInfo.address")}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t("terms.companyInfo.phone")}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t("terms.companyInfo.email")}
        </p>
      </div>

      <hr className="border-gray-300 dark:border-gray-700 my-8" />

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section1.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section1.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section2.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section2.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section3.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section3.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section4.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {t("terms.section4.content")}
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
            <li>{t("terms.section4.bullet1")}</li>
            <li>{t("terms.section4.bullet2")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section5.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section5.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section6.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section6.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section7.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section7.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section8.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section8.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section9.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section9.content")}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {t("terms.section10.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {t("terms.section10.content")}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section10.email")}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {t("terms.section10.phone")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
