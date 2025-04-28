import React from "react";
import { t, Language } from "../lib/i18n";

interface WorkshopsProps {
  language?: Language;
}

const Workshops = ({ language = "en" }: WorkshopsProps) => {
  return (
    <div className="container mx-auto px-4 py-24 mt-28">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {t("workshops.title", language)}
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          {t("workshops.description", language)}
        </p>

        <div className="space-y-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("workshops.workshop1.title", language)}
            </h2>
            <p className="text-lg mb-4">
              {t("workshops.workshop1.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {t("workshops.workshop1.tag1", language)}
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {t("workshops.workshop1.tag2", language)}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("workshops.workshop2.title", language)}
            </h2>
            <p className="text-lg mb-4">
              {t("workshops.workshop2.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {t("workshops.workshop2.tag1", language)}
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {t("workshops.workshop2.tag2", language)}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("workshops.workshop3.title", language)}
            </h2>
            <p className="text-lg mb-4">
              {t("workshops.workshop3.description", language)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {t("workshops.workshop3.tag1", language)}
              </span>
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
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
