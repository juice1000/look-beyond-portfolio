import { Language, t } from "../lib/i18n";

interface ImprintProps {
  language: Language;
}

export default function Imprint({ language }: ImprintProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        {t("imprint.title", language)}
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.company", language)}
        </h2>
        <p>Look Beyond Solutions Pte. Ltd.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.registrationNumber", language)}
        </h2>
        <p>202439104D</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.address", language)}
        </h2>
        <p>22 Sin Ming Lane #06-76, Midview City, 573969 Singapore</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.managingDirector", language)}
        </h2>
        <p>Julien Look</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.contact", language)}
        </h2>
        <p>✉️ contact@lookbeyond.sg</p>
        <p>📞 +65 80161267</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {t("imprint.responsible", language)}
        </h2>
        <p>Julien Look</p>
        <p>{t("imprint.sameAddress", language)}</p>
      </section>
    </div>
  );
}
