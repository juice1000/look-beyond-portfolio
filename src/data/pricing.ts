import type { Language } from "../lib/i18n";
import type { Currency } from "../lib/region";

// Single source for every price shown on the site. The pricing page and the
// FAQ both read from here, so a change is made once.
//
// Prices are set in euros and shown in the viewer's regional currency (see
// src/lib/region.ts). Only "starting from" figures are shown. Durations,
// averages and any credit between offers are not stated publicly: they are
// agreed in a formal offer. The retainer is priced individually.
export const PRICING = {
  workshop: { fromEur: 4500 },
  poc: { fromEur: 15000 },
} as const;

// Static, rounded conversion from euros. The rates are fixed on purpose and do
// not follow the market. They were set close to the rates of early October
// 2026 (EUR/USD about 1.12, EUR/SGD about 1.44) and should be reviewed from
// time to time. Converted amounts are rounded to the nearest 100, or to the
// nearest 1,000 once they reach 10,000.
const RATES: Record<Currency, number> = { EUR: 1, SGD: 1.44, USD: 1.12 };
const roundingStep = (value: number) => (value >= 10000 ? 1000 : 100);

export const convertFromEur = (eur: number, currency: Currency) => {
  if (currency === "EUR") return eur;
  const raw = eur * RATES[currency];
  const step = roundingStep(raw);
  return Math.round(raw / step) * step;
};

export const formatPrice = (eur: number, language: Language, currency: Currency) =>
  new Intl.NumberFormat(language === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(convertFromEur(eur, currency));

export const startingAt = (eur: number, language: Language, currency: Currency) =>
  language === "de"
    ? `Ab ${formatPrice(eur, language, currency)}`
    : `Starting at ${formatPrice(eur, language, currency)}`;

export const formalOfferNote = (language: Language) =>
  language === "de"
    ? "Umfang und Preis jedes Angebots werden nach der Scoping-Phase in einem formalen Angebot festgelegt."
    : "Scope and price of each engagement are set in a formal offer after scoping.";

// Text content may contain {workshopFrom} and {pocFrom}. They are filled in at
// render time, once the viewer's currency is known.
export const fillPriceTokens = (text: string, language: Language, currency: Currency) =>
  text
    .split("{workshopFrom}")
    .join(formatPrice(PRICING.workshop.fromEur, language, currency))
    .split("{pocFrom}")
    .join(formatPrice(PRICING.poc.fromEur, language, currency));
