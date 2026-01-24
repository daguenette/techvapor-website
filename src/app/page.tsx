"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { useScrollTracking } from "@/lib/hooks/useScrollTracking";

export default function Home() {
  const { language } = useLanguage();

  // Enable scroll and section view tracking
  useScrollTracking(language);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
