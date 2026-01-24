"use client";

import Image from "next/image";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { MapPin, Linkedin } from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = NAVIGATION_ITEMS[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <Image
                src="/vh_logo.svg"
                alt="Vector Horizon Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#F0492E] via-[#FB802B] to-[#F7542E] bg-clip-text text-transparent">
                {SITE_CONFIG.name}
              </h3>
            </div>
            <p className="mb-4 text-gray-300">{t(SITE_CONFIG.description)}</p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="size-4" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              {language === "fr" ? "Liens rapides" : "Quick Links"}
            </h4>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-300 transition-colors hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              {language === "fr" ? "Se connecter" : "Connect"}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/vector-horizon/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}
            {" Inc"}.{" "}
            {language === "fr"
              ? "Tous droits réservés."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
