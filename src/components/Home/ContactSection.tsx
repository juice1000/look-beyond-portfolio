import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { t, Language } from "../../lib/i18n";
import { sendEmail } from "../../lib/sendEmail";

interface ContactSectionProps {
  onSubmit?: (data: FormData) => void;
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
  };
  language?: Language;
}

const ContactSection = ({
  contactInfo = {
    phone: "+65 8016 1267",
    email: "contact@lookbeyond.sg",
  },
  language = "en",
}: ContactSectionProps) => {
  const handleSubmit = async (data: FormData) => {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const newMessage: string = `Message From: ${name}\nEmail: ${email}\n\n${message}`;

    // Send email
    try {
      await sendEmail(email, message);
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to send email. Please use the email address displayed in the contact information."
      );
    }
  };
  return (
    <section className="w-full min-h-[600px] py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("contact.title", language)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("contact.subtitle", language)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>{t("contact.form.submit", language)}</CardTitle>
              <CardDescription>
                {t("contact.info.subtitle", language)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  handleSubmit(formData);
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {t("contact.form.name", language)}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.form.name", language)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t("contact.form.email", language)}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email", language)}
                    className="w-full"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {t("contact.form.message", language)}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.message", language)}
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.form.submit", language)}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>{t("contact.info.title", language)}</CardTitle>
                <CardDescription>
                  {t("contact.info.subtitle", language)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {t("contact.info.phone", language)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

                <a
                  className="flex items-center space-x-4"
                  href={`mailto:${contactInfo.email}`}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {t("contact.info.email", language)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {t("contact.info.address", language)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {contactInfo.address}
                    </p>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="p-0 overflow-hidden bg-white dark:bg-gray-800">
              <div className="h-[275px] bg-gray-200 dark:bg-gray-700">
                <iframe
                  title="Maps"
                  src={t("contact.info.map", language)}
                  width="100%"
                  height="275"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
