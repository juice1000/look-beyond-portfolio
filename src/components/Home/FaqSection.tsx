import React from "react";
import { Link } from "react-router-dom";
import { LandingPageContent } from "../../data/landingPage";
import { fillPriceTokens } from "../../data/pricing";
import { Language } from "../../lib/i18n";
import { useCurrency } from "../../lib/region";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FaqSectionProps {
  content: LandingPageContent["faq"];
  language: Language;
}

const FaqSection = ({ content, language }: FaqSectionProps) => {
  const currency = useCurrency();
  return (
    <section
      id="faq"
      className="border-b border-white/30 dark:border-[#0f1e35] py-14"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-500">
            {content.eyebrow}
          </p>
          <h2 className="mb-4 text-2xl font-bold text-[#0f1e35] dark:text-slate-100 md:text-3xl">
            {content.heading}
          </h2>
          <Link
            to="/contact"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            {content.moreLabel} →
          </Link>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {content.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="border-white/40 dark:border-[#0f1e35]"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-[#0f1e35] dark:text-slate-100">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-6 text-slate-500 dark:text-[#4a6a8a]">
                {fillPriceTokens(item.answer, language, currency)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
