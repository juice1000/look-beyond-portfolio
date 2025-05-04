import React from "react";
import { t, Language } from "../lib/i18n";
import { Button } from "./ui/button";

const AIReadiness = ({ language = "en" }: { language: Language }) => {
  const linkAIReadiness = `https://aireadinessassessment.fillout.com/${language}`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20">
        <div className="container mx-auto px-4 py-24 flex flex-col  items-center justify-center">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("aiReadiness.title", language)}
          </h1>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              {t("aiReadiness.description", language)}
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section1.title", language)}
                </h2>
                <p>{t("aiReadiness.section1.content", language)}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section2.title", language)}
                </h2>
                <p>{t("aiReadiness.section2.content", language)}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  {t("aiReadiness.section3.title", language)}
                </h2>
                <p>{t("aiReadiness.section3.content", language)}</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3 mt-10">
            Curious how far you've come?
          </h2>
          <h2>
            Do a free AI Readiness Assessment with us to see what next potential
            steps you could adopt.
          </h2>
          <h2>It will take less than 5 minutes!</h2>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white mt-8"
          >
            <a href={linkAIReadiness} target="_blank" rel="noopener noreferrer">
              Start Assessment
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AIReadiness;
