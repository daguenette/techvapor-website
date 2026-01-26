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
import { Send, Phone, Mail, MapPin } from "lucide-react";

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
            ? "Vérifiez votre connexion et réessayez."
            : "Check your connection and try again.";
        error(errorTitle, errorMessage);
      }
    } catch {
      const errorTitle = language === "fr" ? "Erreur d'envoi" : "Send Error";
      const errorMessage =
        language === "fr"
          ? "Vérifiez votre connexion et réessayez."
          : "Check your connection and try again.";
      error(errorTitle, errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-8 lg:pt-12 pb-20 lg:pb-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t(CONTACT_CONTENT.title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t(CONTACT_CONTENT.subtitle)}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "Demander une soumission" : "Request a Quote"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === "fr" ? "Nom complet" : "Full Name"}
                  </label>
                  <Input
                    type="text"
                    placeholder={language === "fr" ? "Entrez votre nom" : "Enter your name"}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === "fr" ? "Adresse courriel" : "Email Address"}
                  </label>
                  <Input
                    type="email"
                    placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === "fr" ? "Votre message" : "Your Message"}
                  </label>
                  <Textarea
                    placeholder={
                      language === "fr"
                        ? "Décrivez vos besoins de nettoyage..."
                        : "Describe your cleaning needs..."
                    }
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      {language === "fr" ? "Envoi en cours..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {language === "fr" ? "Envoyer la demande" : "Send Request"}
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  {language === "fr" 
                    ? "Nous respectons votre vie privée. Vos informations sont sécurisées."
                    : "We respect your privacy. Your information is secure."}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info Bar - Horizontal Modern Style */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <Phone className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Appelez-nous" : "Call Us"}
              </h3>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-lg font-bold text-gray-900 block mb-1"
              >
                {SITE_CONFIG.phone}
              </a>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Disponible 24/7" : "Available 24/7"}
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <Mail className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Écrivez-nous" : "Email Us"}
              </h3>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-base font-semibold text-gray-900 block mb-1"
              >
                {SITE_CONFIG.email}
              </a>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Réponse en 24h" : "Response within 24h"}
              </p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <MapPin className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Notre zone" : "Service Area"}
              </h3>
              <p className="text-base font-semibold text-gray-900 mb-1">
                {SITE_CONFIG.location}
              </p>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Estimation gratuite" : "Free estimate"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  );
}
