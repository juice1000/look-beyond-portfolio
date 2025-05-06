import React from "react";
import { Language } from "../lib/i18n";
import { getPrivacyPolicy } from "../lib/i18n_privacy";

interface PrivacyPolicyProps {
  language?: Language;
}

const PrivacyPolicy = ({ language = "en" }: PrivacyPolicyProps) => {
  const privacyPolicy = getPrivacyPolicy(language);

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {privacyPolicy.title}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300">
            {privacyPolicy.content}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
