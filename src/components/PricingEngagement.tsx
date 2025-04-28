import React from "react";
import { t, Language } from "../lib/i18n";

interface PricingEngagementProps {
  language?: Language;
}

const PricingEngagement = ({ language = "en" }: PricingEngagementProps) => {
  return (
    <div className="container mx-auto px-4 py-24 mt-28">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {t("pricingEngagement.title", language)}
      </h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          {t("pricingEngagement.description", language)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pricingEngagement.pricing.title", language)}
            </h2>
            <p className="text-lg mb-6">
              {t("pricingEngagement.pricing.description", language)}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{t("pricingEngagement.pricing.point1", language)}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{t("pricingEngagement.pricing.point2", language)}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{t("pricingEngagement.pricing.point3", language)}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pricingEngagement.engagement.title", language)}
            </h2>
            <p className="text-lg mb-6">
              {t("pricingEngagement.engagement.description", language)}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  {t("pricingEngagement.engagement.point1", language)}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  {t("pricingEngagement.engagement.point2", language)}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>
                  {t("pricingEngagement.engagement.point3", language)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingEngagement;
