import React from "react";
import { Link } from "react-router-dom";
import { t, Language } from "../lib/i18n";

interface FooterProps {
  language?: Language;
}

const Footer = ({ language = "en" }: FooterProps) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-4">
      <div className="container mx-auto">
        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("footer.company", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.home", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-process"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.ourProcess", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.contact", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("footer.services", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/ai-readiness"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.aiReadiness", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.workshops", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing-engagement"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.pricingEngagement", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("footer.projects", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.projects", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("footer.legal", language)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/imprint"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.imprint", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.privacyPolicy", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.termsOfUse", language)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            {t("footer.text", language)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            © {new Date().getFullYear()} {t("footer.copyright", language)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
