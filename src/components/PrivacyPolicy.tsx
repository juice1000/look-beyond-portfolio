import React from "react";
import { Language } from "../lib/i18n";
import { getPrivacyPolicy } from "../lib/i18n_privacy";

interface PrivacyPolicyProps {
  language?: Language;
}

const PrivacyPolicy = ({ language = "en" }: PrivacyPolicyProps) => {
  const privacyPolicy = getPrivacyPolicy(language);

  return (
    <div className="min-h-screen bg-[#060b18] px-4 py-24 mt-16 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-lg border border-[#0f1e35] bg-[#08101f] p-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-100">
          {privacyPolicy.title}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-[#4a6a8a]">
            {privacyPolicy.content}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
