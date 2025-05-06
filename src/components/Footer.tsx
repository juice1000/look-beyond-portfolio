import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { t, Language } from "../lib/i18n";

interface FooterProps {
  language?: Language;
}

const Footer = ({ language = "en" }: FooterProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, label: string) => {
    navigate(path);
  };

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
                  onClick={() => handleNavigation("/", t("nav.home", language))}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.home", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-process"
                  onClick={() =>
                    handleNavigation(
                      "/our-process",
                      t("nav.ourProcess", language)
                    )
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.ourProcess", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    handleNavigation("/contact", t("nav.contact", language))
                  }
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
                  onClick={() =>
                    handleNavigation(
                      "/ai-readiness",
                      t("nav.aiReadiness", language)
                    )
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.aiReadiness", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/workshops"
                  onClick={() =>
                    handleNavigation("/workshops", t("nav.workshops", language))
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.workshops", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing-engagement"
                  onClick={() =>
                    handleNavigation(
                      "/pricing-engagement",
                      t("nav.pricingEngagement", language)
                    )
                  }
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
                  onClick={() =>
                    handleNavigation("/projects", t("nav.projects", language))
                  }
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
                  onClick={() =>
                    handleNavigation("/imprint", t("nav.imprint", language))
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.imprint", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  onClick={() =>
                    handleNavigation(
                      "/privacy-policy",
                      t("nav.privacyPolicy", language)
                    )
                  }
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  {t("nav.privacyPolicy", language)}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  onClick={() =>
                    handleNavigation(
                      "/terms-of-use",
                      t("nav.termsOfUse", language)
                    )
                  }
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
