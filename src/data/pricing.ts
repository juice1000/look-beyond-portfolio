import type { Language } from "../lib/i18n";

// Single source for every price shown on the site. The pricing page and the
// FAQ both read from here, so a change is made once.
// Only "starting from" prices are shown. Prices are in euros. The retainer is
// priced individually and has no figure. Durations, averages and any credit
// between offers are not stated publicly: they are agreed in a formal offer.
export const PRICING = {
  workshop: { fromEur: 4500 },
  poc: { fromEur: 15000 },
} as const;

export const formatEuro = (amount: number, language: Language) =>
  language === "de"
    ? `${amount.toLocaleString("de-DE")} €`
    : `€${amount.toLocaleString("en-US")}`;

export const startingAt = (amount: number, language: Language) =>
  language === "de"
    ? `Ab ${formatEuro(amount, language)}`
    : `Starting at ${formatEuro(amount, language)}`;

export const formalOfferNote = (language: Language) =>
  language === "de"
    ? "Umfang und Preis jedes Angebots werden nach der Scoping-Phase in einem formalen Angebot festgelegt."
    : "Scope and price of each engagement are set in a formal offer after scoping.";

export const costFaqAnswer = (language: Language) =>
  language === "de"
    ? `Das Erstgespräch ist kostenfrei. Ein Discovery-Workshop beginnt bei ${formatEuro(PRICING.workshop.fromEur, language)}, ein Proof of Concept bei ${formatEuro(PRICING.poc.fromEur, language)}. ${formalOfferNote(language)}`
    : `The first meeting is free. A discovery workshop starts at ${formatEuro(PRICING.workshop.fromEur, language)} and a proof of concept starts at ${formatEuro(PRICING.poc.fromEur, language)}. ${formalOfferNote(language)}`;
