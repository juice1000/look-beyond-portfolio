import React from "react";

export type Currency = "EUR" | "SGD" | "USD";

// Detection uses the viewer's browser time zone. It needs no external service
// and sends no data anywhere. It is a good guess, not proof of location: a
// viewer on a VPN or travelling is read by their device clock.
const SOUTHEAST_ASIA_ZONES = new Set([
  "Asia/Singapore",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Asia/Bangkok",
  "Asia/Ho_Chi_Minh",
  "Asia/Saigon",
  "Asia/Manila",
  "Asia/Brunei",
  "Asia/Phnom_Penh",
  "Asia/Vientiane",
  "Asia/Yangon",
  "Asia/Rangoon",
  "Asia/Dili",
]);

// European zones that do not start with "Europe/".
const OTHER_EUROPEAN_ZONES = new Set([
  "Atlantic/Canary",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Atlantic/Faroe",
  "Atlantic/Reykjavik",
  "Africa/Ceuta",
]);

export const currencyForTimeZone = (timeZone: string | undefined): Currency => {
  if (!timeZone) return "USD";
  if (timeZone.startsWith("Europe/") || OTHER_EUROPEAN_ZONES.has(timeZone)) return "EUR";
  if (SOUTHEAST_ASIA_ZONES.has(timeZone)) return "SGD";
  return "USD";
};

const isCurrency = (value: string | null): value is Currency =>
  value === "EUR" || value === "SGD" || value === "USD";

export const detectCurrency = (): Currency => {
  try {
    // ?currency=eur|sgd|usd forces a currency, for checking and for shared links.
    const forced = new URLSearchParams(window.location.search)
      .get("currency")
      ?.toUpperCase() ?? null;
    if (isCurrency(forced)) return forced;
    return currencyForTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  } catch {
    return "USD";
  }
};

export const useCurrency = (): Currency => {
  const [currency] = React.useState<Currency>(detectCurrency);
  return currency;
};
