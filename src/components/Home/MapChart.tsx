import * as React from "react";
import WorldMap, { CountryContext } from "react-svg-worldmap";
import { t, Language } from "../../lib/i18n";

const stylingFunction = ({ countryCode }: CountryContext<string>) => {
  const countries = ["US", "DE", "IN", "MY", "JP"];
  return {
    fill: countries.includes(countryCode) ? "#4c6ef5" : "grey",
    fillOpacity: countries.includes(countryCode) ? 1 : 0.2,
    stroke: "#999",
    strokeWidth: 1,
    strokeOpacity: 0,
  };
};

const MapChart = ({ language }: { language: Language }) => {
  const data = [
    { country: "de", value: "" },
    { country: "us", value: "" },
    { country: "my", value: "" },
    { country: "in", value: "" },
    { country: "jp", value: "" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("map.title", language)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            {t("map.subtitle", language)}
          </p>
          <div className="text-left max-w-md mx-auto">
            <p className="text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2 text-center">
              {t("coverage.description", language)}
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-center">
              {[1, 2, 3].map((index) => (
                <li key={index}>{t(`coverage.point${index}`, language)}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
              {t("coverage.note", language)}
            </p>
          </div>
        </div>
      </div>
      <div className="h-100 w-100 flex justify-center">
        <WorldMap
          color="#4c6ef5"
          backgroundColor="bg-background"
          size="responsive"
          data={data}
          styleFunction={stylingFunction}
        />
      </div>
    </section>
  );
};

export default MapChart;
