import React from "react";
import { t, Language } from "../lib/i18n";

interface FooterProps {
  language?: Language;
}

const Footer = ({ language = "en" }: FooterProps) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center">
      <p className="text-gray-700 dark:text-gray-300">
        {t("footer.text", language)}
      </p>
    </footer>
  );
};

export default Footer;
