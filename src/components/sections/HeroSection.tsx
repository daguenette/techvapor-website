"use client";

import { Button } from "@/components/ui/button";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { analytics } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    analytics.business.scheduleCallClicked(language, "hero");
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-50 to-white py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center hero-optimized">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {t(HERO_CONTENT.title)}
          </h1>
          <p className="sr-only">{t(HERO_CONTENT.description)}</p>
          <p className="mb-8 text-lg text-gray-600 sm:text-xl lg:text-2xl">
            {t(HERO_CONTENT.subtitle)}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group bg-[#F0492E] hover:bg-[#E03E24] text-white px-8 py-3 text-lg"
            >
              {t(SITE_CONFIG.ctaText)}
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50/30 to-transparent" />
    </section>
  );
}
