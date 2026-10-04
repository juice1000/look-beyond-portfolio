import React from "react";
import { ClientLogo } from "../../data/credentials";

interface TrustStripProps {
  label: string;
  logos: ClientLogo[];
}

const TrustStrip = ({ label, logos }: TrustStripProps) => {
  if (logos.length === 0) return null;

  return (
    <section
      id="trusted-by"
      className="-mt-28 relative z-10 border-b border-white/30 dark:border-[#0f1e35] pb-10 pt-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 dark:text-[#4a6a8a]">
          {label}
        </p>
        <ul className="flex flex-1 flex-wrap items-center justify-between gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-8 w-auto max-w-[9rem] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustStrip;
