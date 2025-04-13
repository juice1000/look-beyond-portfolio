import * as React from "react";
import { Component } from "react";
import WorldMap, { CountryContext } from "react-svg-worldmap";
import { t, Language } from "../../lib/i18n";

const stylingFunction = ({
  countryValue,
  countryCode,
  minValue,
  maxValue,
  color,
}: CountryContext) => {
  const calculatedValue =
    typeof countryValue === "string" ? minValue : countryValue;
  const countries = ["US", "DE", "IN", "MY", "JP"];
  return {
    fill: countries.includes(countryCode) ? "#4c6ef5" : "grey",
    fillOpacity: countries.includes(countryCode) ? 1 : 0.2,
    stroke: "#999",
    strokeWidth: 1,
    strokeOpacity: 0,
  };
};
const MapChart = ({ isDarkMode, language = "en" }) => {
  const data = [
    { country: "de", value: "" },
    { country: "us", value: "" },
    { country: "my", value: "" },
    { country: "in", value: "" },
    { country: "jp", value: "" },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("map.title", language)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("map.subtitle", language)}
          </p>
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
