import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Send, Phone, Mail } from "lucide-react";
import { t, Language } from "../../lib/i18n";
import { sendEmail } from "../../lib/sendEmail";

interface ContactSectionProps {
  onSubmit?: (data: FormData) => void;
  contactInfo?: {
    phone: string;
    email: string;
    address?: string;
  };
  language?: Language;
}

const GLASS = "relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] bg-gradient-to-br from-white/40 to-white/15 dark:bg-[#08101f]/80 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none";

const ContactSection = ({
  contactInfo = {
    phone: "+65 8035 0340",
    email: "contact@lookbeyond.sg",
  },
  language = "en",
}: ContactSectionProps) => {
  const handleSubmit = async (data: FormData) => {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    try {
      await sendEmail(email, message);
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to send email. Please use the email address displayed in the contact information.",
      );
    }
  };

  return (
    <section className="w-full min-h-[600px] px-4 py-16 bg-transparent dark:bg-[#060b18]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-[#0f1e35] dark:text-slate-100">
            {t("contact.title", language)}
          </h2>
          <p className="mx-auto max-w-2xl text-[#4a6a8a]">
            {t("contact.subtitle", language)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className={`${GLASS} p-8`}>
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
            <h3 className="mb-1 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
              {t("contact.form.submit", language)}
            </h3>
            <p className="mb-6 text-sm text-[#4a6a8a]">
              {t("contact.info.subtitle", language)}
            </p>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSubmit(formData);
              }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-[#0f1e35] dark:text-slate-300">
                  {t("contact.form.name", language)}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("contact.form.name", language)}
                  className="w-full bg-white/60 dark:bg-white/5 border-white/60 dark:border-[#1a3050]"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[#0f1e35] dark:text-slate-300">
                  {t("contact.form.email", language)}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.email", language)}
                  className="w-full bg-white/60 dark:bg-white/5 border-white/60 dark:border-[#1a3050]"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-[#0f1e35] dark:text-slate-300">
                  {t("contact.form.message", language)}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.message", language)}
                  className="w-full min-h-[150px] bg-white/60 dark:bg-white/5 border-white/60 dark:border-[#1a3050]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Send className="mr-2 h-4 w-4" />
                {t("contact.form.submit", language)}
              </Button>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className={`${GLASS} p-8`}>
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/60 blur-2xl dark:hidden" />
              <h3 className="mb-1 text-lg font-semibold text-[#0f1e35] dark:text-slate-100">
                {t("contact.info.title", language)}
              </h3>
              <p className="mb-6 text-sm text-[#4a6a8a]">
                {t("contact.info.subtitle", language)}
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0f1e35] dark:text-slate-100">
                      {t("contact.info.phone", language)}
                    </p>
                    <p className="text-sm text-[#4a6a8a]">{contactInfo.phone}</p>
                  </div>
                </div>
                <a className="flex items-center gap-4" href={`mailto:${contactInfo.email}`}>
                  <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0f1e35] dark:text-slate-100">
                      {t("contact.info.email", language)}
                    </p>
                    <p className="text-sm text-[#4a6a8a]">{contactInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-2xl border border-white/60 dark:border-[#0f1e35] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-none">
              <iframe
                title="Maps"
                src={t("contact.info.map", language)}
                width="100%"
                height="275"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
