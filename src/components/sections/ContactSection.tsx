"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer } from "@/components/ui/toast";
import { CONTACT_CONTENT, SITE_CONFIG } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { useToast } from "@/lib/hooks/useToast";
import { Send, Calendar } from "lucide-react";
import { analytics } from "@/lib/analytics";

export function ContactSection() {
  const { t, language } = useLanguage();
  const { toasts, success, error, removeToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track form submission with PostHog
      analytics.business.contactFormSubmitted(language, formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      if (response.ok) {
        const successTitle =
          language === "fr" ? "Message envoyé !" : "Message sent!";
        const successMessage =
          language === "fr"
            ? "Nous vous contacterons bientôt."
            : "We'll get back to you soon.";
        success(successTitle, successMessage);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorTitle = language === "fr" ? "Erreur d'envoi" : "Send Error";
        const errorMessage =
          language === "fr"
            ? "Veuillez réessayer plus tard."
            : "Please try again later.";
        error(errorTitle, errorMessage);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      const errorTitle = language === "fr" ? "Erreur réseau" : "Network Error";
      const errorMessage =
        language === "fr"
          ? "Vérifiez votre connexion et réessayez."
          : "Check your connection and try again.";
      error(errorTitle, errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleCall = () => {
    // Track schedule call button click
    analytics.business.scheduleCallClicked(language, "contact_section");

    const calendlyUrl =
      language === "en"
        ? "https://calendly.com/team-vectorhorizon/let-s-discuss"
        : "https://calendly.com/team-vectorhorizon/discutons";

    window.open(calendlyUrl, "_blank");
  };

  const handleFormFocus = () => {
    // Track when user starts interacting with form
    analytics.business.contactFormStarted(language);
  };

  return (
    <section id="contact" className="bg-gray-900 py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            {t(CONTACT_CONTENT.title)}
          </h2>
          <p className="text-xl text-gray-300">{t(CONTACT_CONTENT.subtitle)}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Button
              onClick={handleScheduleCall}
              size="lg"
              className="h-14 w-full bg-[#F0492E] hover:bg-[#E03E24] text-white text-lg"
            >
              <Calendar className="mr-2 size-5" />
              {t(SITE_CONFIG.ctaText)}
            </Button>

            <div className="text-center text-gray-400">
              <p>
                {language === "fr"
                  ? "ou envoyez-nous un message ci-dessous"
                  : "or send us a message below"}
              </p>
            </div>
          </div>

          <Card className="border-gray-700 bg-white/5">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder={language === "fr" ? "Votre nom" : "Your Name"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onFocus={handleFormFocus}
                  required
                  className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder={language === "fr" ? "Votre email" : "Your Email"}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder={
                    language === "fr"
                      ? "Parlez-nous de votre projet IA..."
                      : "Tell us about your AI project..."
                  }
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="border-gray-600 bg-white/10 text-white placeholder:text-gray-400"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F0492E] hover:bg-[#E03E24] text-white disabled:opacity-50"
                >
                  <Send className="mr-2 size-4" />
                  {isSubmitting
                    ? language === "fr"
                      ? "Envoi en cours..."
                      : "Sending..."
                    : language === "fr"
                      ? "Envoyer le message"
                      : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  );
}
