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
    address: "Midview City, Singapore",
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
      await sendEmail(
        contactInfo.email,
        "New Contact Form Submission",
        newMessage,
        email
      );
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again later.");
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
                    validation="email"
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

                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">
                      {t("contact.info.address", language)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="p-0 overflow-hidden bg-white dark:bg-gray-800">
              <div className="h-[200px] bg-gray-200 dark:bg-gray-700">
                <iframe
                  title="Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.696832660774!2d103.8309802756972!3d1.3585276986286259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1785a6611061%3A0x20e7cf0f0b8c8095!2sLook%20Beyond%20Solutions%20Pte.%20Ltd.!5e0!3m2!1sen!2ssg!4v1735837964291!5m2!1sen!2ssg"
                  width="100%"
                  height="200"
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
