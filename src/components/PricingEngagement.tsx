import React from "react";
import { CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";

interface PricingEngagementProps {
  language?: Language;
}

const PricingEngagement = ({ language = "en" }: PricingEngagementProps) => {
  const tiers = [
    {
      title: t("pricingEngagement.tiers.free.title", language),
      price: t("pricingEngagement.tiers.free.price", language),
      description: t("pricingEngagement.tiers.free.description", language),
      items: [
        t("pricingEngagement.tiers.free.item1", language),
        t("pricingEngagement.tiers.free.item2", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.workshop.title", language),
      price: t("pricingEngagement.tiers.workshop.price", language),
      description: t("pricingEngagement.tiers.workshop.description", language),
      items: [
        t("pricingEngagement.tiers.workshop.item1", language),
        t("pricingEngagement.tiers.workshop.item2", language),
        t("pricingEngagement.tiers.workshop.item3", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.poc.title", language),
      price: t("pricingEngagement.tiers.poc.price", language),
      description: t("pricingEngagement.tiers.poc.description", language),
      items: [
        t("pricingEngagement.tiers.poc.item1", language),
        t("pricingEngagement.tiers.poc.item2", language),
        t("pricingEngagement.tiers.poc.item3", language),
      ],
    },
    {
      title: t("pricingEngagement.tiers.retainer.title", language),
      price: t("pricingEngagement.tiers.retainer.price", language),
      description: t("pricingEngagement.tiers.retainer.description", language),
      items: [
        t("pricingEngagement.tiers.retainer.item1", language),
        t("pricingEngagement.tiers.retainer.item2", language),
        t("pricingEngagement.tiers.retainer.item3", language),
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 mt-28">
      <h1 className="text-4xl font-bold mb-4 text-center">
        {t("pricingEngagement.title", language)}
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
          {t("pricingEngagement.description", language)}
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              className={`rounded-lg border p-6 shadow-sm ${
                index === 0
                  ? "border-blue-500 bg-blue-50 dark:border-blue-700 dark:bg-blue-950/20"
                  : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              }`}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                {tier.title}
              </p>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {tier.price}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pricingEngagement.details.title", language)}
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                t("pricingEngagement.details.point1", language),
                t("pricingEngagement.details.point2", language),
                t("pricingEngagement.details.point3", language),
                t("pricingEngagement.details.point4", language),
              ].map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default PricingEngagement;
