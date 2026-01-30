"use client";

import {
  SITE_CONFIG,
  NAVIGATION_ITEMS,
  SERVICES,
} from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { t, language } = useLanguage();
  const navigationItems = NAVIGATION_ITEMS[language];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-9 md:gap-10 mb-10 sm:mb-11 md:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 sm:mb-6">
              <span className="text-xl sm:text-2xl font-bold">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-white/80 mb-3 sm:mb-4 leading-relaxed text-sm">
              {t(SITE_CONFIG.description)}
            </p>
            <p className="text-xs sm:text-sm text-white/60 italic">
              {t(SITE_CONFIG.tagline)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6 text-red-300">
              {language === "fr" ? "Liens Rapides" : "Quick Links"}
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  className="text-white/80 hover:text-red-300 active:text-red-400 transition-colors text-left text-sm min-h-[44px] flex items-center py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6 text-red-300">
              {language === "fr" ? "Nos Services" : "Our Services"}
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="text-white/80 hover:text-red-300 active:text-red-400 transition-colors text-left text-sm min-h-[44px] flex items-center py-1"
                >
                  {t(service.title)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 md:mb-6 text-red-300">
              {language === "fr" ? "Contactez-nous" : "Contact Us"}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-red-300 active:text-red-400 transition-colors group min-h-[44px]"
              >
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600/30 transition-colors flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">
                  {SITE_CONFIG.phone}
                </span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-red-300 active:text-red-400 transition-colors group min-h-[44px] break-all"
              >
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600/30 transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/80 min-h-[44px]">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-2">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm pt-2">
                  {language === "fr" ? SITE_CONFIG.location.fr : SITE_CONFIG.location.en}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 sm:pt-7 md:pt-8 mt-8 sm:mt-9 md:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
              © {new Date().getFullYear()} {SITE_CONFIG.name}.{" "}
              {language === "fr"
                ? "Tous droits réservés"
                : "All rights reserved"}
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-white/60 hover:text-red-300 active:text-red-400 transition-colors min-h-[44px] flex items-center justify-center"
              >
                {language === "fr"
                  ? "Politique de confidentialité"
                  : "Privacy Policy"}
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-white/60 hover:text-red-300 active:text-red-400 transition-colors min-h-[44px] flex items-center justify-center"
              >
                {language === "fr"
                  ? "Conditions d'utilisation"
                  : "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
