import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { t, Language } from "../lib/i18n";

interface PartnersProps {
  language?: Language;
}

const Partners = ({ language = "en" }: PartnersProps) => {
  const partners = [
    {
      name: t("partners.sourcera.name", language),
      url: t("partners.sourcera.url", language),
      href: "https://sourcera.ai",
      role: t("partners.sourcera.role", language),
      capability: t("partners.sourcera.capability", language),
      points: [
        t("partners.sourcera.point1", language),
        t("partners.sourcera.point2", language),
      ],
    },
    {
      name: t("partners.innovandio.name", language),
      url: t("partners.innovandio.url", language),
      href: "https://innovandio.com",
      role: t("partners.innovandio.role", language),
      capability: t("partners.innovandio.capability", language),
      points: [
        t("partners.innovandio.point1", language),
        t("partners.innovandio.point2", language),
      ],
    },
    {
      name: t("partners.mueller.name", language),
      url: t("partners.mueller.url", language),
      href: "https://muelleraisolutions.de",
      role: t("partners.mueller.role", language),
      capability: t("partners.mueller.capability", language),
      points: [
        t("partners.mueller.point1", language),
        t("partners.mueller.point2", language),
      ],
    },
    {
      name: t("partners.kuatsu.name", language),
      url: t("partners.kuatsu.url", language),
      href: "https://kuatsu.de",
      role: t("partners.kuatsu.role", language),
      capability: t("partners.kuatsu.capability", language),
      points: [
        t("partners.kuatsu.point1", language),
        t("partners.kuatsu.point2", language),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#060b18] text-white">
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#4d6b8d]">
              {t("nav.partners", language)}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {t("partners.title", language)}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#91a8c2] md:text-lg">
              {t("partners.subtitle", language)}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5f7793]">
              {t("partners.intro", language)}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.href}
                className="rounded-lg border border-[#132640] bg-[#081120] px-4 py-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#6f86a2]">
                  {partner.role}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">
                  {partner.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#9bb0c8]">
                  {partner.capability}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.href}
                className="rounded-xl border border-[#132640] bg-[#081120] p-6 shadow-[0_0_0_1px_rgba(11,18,37,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#4d6b8d]">
                      {partner.url}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {partner.name}
                    </h2>
                  </div>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#1a3050] text-[#89a7c7] transition-colors hover:border-blue-500 hover:text-blue-300"
                    aria-label={partner.url}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <ul className="mt-5 space-y-3">
                  {partner.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-[#bfd0e3]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partners;
