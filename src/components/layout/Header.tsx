"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { analytics } from "@/lib/analytics";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    analytics.business.scheduleCallClicked(language, "header");
    scrollToSection("#contact");
  };

  const navigationItems = NAVIGATION_ITEMS[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/vh_logo.svg"
            alt="Vector Horizon Logo"
            width={65}
            height={65}
            className="h-14 w-auto"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#F0492E] via-[#FB802B] to-[#F7542E] bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.name}
            </button>
          ))}
          <LanguageToggle />
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={handleCTAClick}
            className="bg-[#F0492E] hover:bg-[#E03E24] text-white"
          >
            {t(SITE_CONFIG.ctaText)}
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-base font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex gap-2">
              <Button
                onClick={handleCTAClick}
                className="flex-1 bg-[#F0492E] hover:bg-[#E03E24] text-white"
              >
                {t(SITE_CONFIG.ctaText)}
              </Button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
