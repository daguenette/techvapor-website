"use client";

import { SITE_CONFIG, NAVIGATION_ITEMS, SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();
  const navigationItems = NAVIGATION_ITEMS[language];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed text-sm">
              {t(SITE_CONFIG.description)}
            </p>
            <p className="text-sm text-white/60 italic">
              {t(SITE_CONFIG.tagline)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">
              {language === "fr" ? "Liens Rapides" : "Quick Links"}
            </h3>
            <nav className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-red-300 transition-colors text-left text-sm"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">
              {language === "fr" ? "Nos Services" : "Our Services"}
            </h3>
            <nav className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection("#services")}
                  className="text-white/80 hover:text-red-300 transition-colors text-left text-sm"
                >
                  {t(service.title)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">
              {language === "fr" ? "Contactez-nous" : "Contact Us"}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-red-300 transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-red-300 transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. {language === "fr" ? "Tous droits réservés" : "All rights reserved"}.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-white/60 hover:text-red-300 transition-colors">
                {language === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
              </button>
              <button className="text-sm text-white/60 hover:text-red-300 transition-colors">
                {language === "fr" ? "Conditions d'utilisation" : "Terms of Service"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
