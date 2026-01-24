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
    <section id="contact" className="py-20 lg:py-28 bg-white">
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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === "fr" ? "Appelez-nous" : "Call Us"}
                    </h3>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-2xl font-bold text-red-600 hover:text-red-600 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === "fr" ? "Disponible 24/7" : "Available 24/7"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === "fr" ? "Écrivez-nous" : "Email Us"}
                    </h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-red-600 hover:text-red-600 transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === "fr" ? "Réponse en 24h" : "Response within 24h"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === "fr" ? "Notre zone" : "Service Area"}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {SITE_CONFIG.location}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === "fr" ? "Estimation gratuite" : "Free estimate"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
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
                    className="w-full bg-red-600 hover:from-blue-700 hover:to-pink-700 text-white font-semibold h-12 text-lg disabled:opacity-50"
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
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  );
}
