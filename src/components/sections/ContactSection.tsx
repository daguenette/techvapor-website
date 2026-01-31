"use client";

import { CONTACT_CONTENT, SITE_CONFIG } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";

export function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section
      id="contact"
      className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t(CONTACT_CONTENT.title)}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            {t(CONTACT_CONTENT.subtitle)}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <QuoteRequestForm />
        </div>

        {/* Contact Info Bar - Responsive Grid */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 md:gap-6">
            {/* Phone */}
            <div className="text-center p-4 sm:p-0">
              <div className="inline-flex h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <Phone className="h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Appelez-nous" : "Call Us"}
              </h3>
              <div className="flex flex-col items-center gap-1">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-lg sm:text-base md:text-lg font-bold text-gray-900 block hover:text-red-600 transition-colors min-h-[36px] flex items-center justify-center"
                >
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phones.riveNord}`}
                  className="text-lg sm:text-base md:text-lg font-bold text-gray-900 block hover:text-red-600 transition-colors min-h-[36px] flex items-center justify-center"
                >
                  {SITE_CONFIG.phones.riveNord}
                </a>
              </div>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Disponible 24/7" : "Available 24/7"}
              </p>
            </div>

            {/* Email */}
            <div className="text-center p-4 sm:p-0">
              <div className="inline-flex h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <Mail className="h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Écrivez-nous" : "Email Us"}
              </h3>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-base sm:text-sm md:text-base font-semibold text-gray-900 block mb-1 hover:text-red-600 transition-colors break-all min-h-[44px] flex items-center justify-center px-2"
              >
                {SITE_CONFIG.email}
              </a>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Réponse en 24h" : "Response within 24h"}
              </p>
            </div>

            {/* Location */}
            <div className="text-center p-4 sm:p-0">
              <div className="inline-flex h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-red-50 items-center justify-center mb-3">
                <MapPin className="h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {language === "fr" ? "Notre zone" : "Service Area"}
              </h3>
              <p className="text-base sm:text-sm md:text-base font-semibold text-gray-900 mb-1 min-h-[44px] flex items-center justify-center">
                {language === "fr"
                  ? SITE_CONFIG.location.fr
                  : SITE_CONFIG.location.en}
              </p>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Estimation gratuite" : "Free estimate"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
