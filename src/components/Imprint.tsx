import { Language, t } from "../lib/i18n";

interface ImprintProps {
  language: Language;
}

export default function Imprint({ language }: ImprintProps) {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {t("imprint.title", language)}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {t("imprint.company.title", language)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {" "}
              {t("imprint.company", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {t("imprint.registrationNumber.title", language)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {" "}
              {t("imprint.registrationNumber", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {t("imprint.address.title", language)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("imprint.address", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {t("imprint.managingDirector.title", language)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {" "}
              {t("imprint.managingDirector", language)}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {t("imprint.contact.title", language)}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">Julien Look</p>
            <p className="text-gray-700 dark:text-gray-300">
              ✉️ {t("imprint.contact", language)}
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              📞 {t("phone", language)}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
