import { Language, t } from "../lib/i18n";

interface ImprintProps {
  language: Language;
}

export default function Imprint({ language }: ImprintProps) {
  return (
    <div className="min-h-screen bg-[#060b18] px-4 py-24 mt-16 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-100">
          {t("imprint.title", language)}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("imprint.company.title", language)}
            </h2>
            <p className="text-[#4a6a8a]">
              {" "}
              {t("imprint.company", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("imprint.registrationNumber.title", language)}
            </h2>
            <p className="text-[#4a6a8a]">
              {" "}
              {t("imprint.registrationNumber", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("imprint.address.title", language)}
            </h2>
            <p className="text-[#4a6a8a]">
              {t("imprint.address", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("imprint.managingDirector.title", language)}
            </h2>
            <p className="text-[#4a6a8a]">
              {" "}
              {t("imprint.managingDirector", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
              {t("imprint.contact.title", language)}
            </h2>
            <p className="text-[#4a6a8a]">Julien Look</p>
            <p className="text-[#4a6a8a]">
              ✉️ {t("imprint.contact", language)}
            </p>

            <p className="text-[#4a6a8a]">
              📞 {t("phone", language)}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
