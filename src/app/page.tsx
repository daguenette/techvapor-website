"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { useScrollTracking } from "@/lib/hooks/useScrollTracking";
import dynamic from "next/dynamic";

// Loading component for better UX
const SectionLoader = () => (
  <div className="py-24 lg:py-32">
    <div className="container mx-auto max-w-6xl px-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  </div>
);

// Lazy load sections that are below the fold
const ApproachSection = dynamic(
  () =>
    import("@/components/sections/ApproachSection").then((mod) => ({
      default: mod.ApproachSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then((mod) => ({
      default: mod.ServicesSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

const ValueSection = dynamic(
  () =>
    import("@/components/sections/ValueSection").then((mod) => ({
      default: mod.ValueSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

const UseCasesSection = dynamic(
  () =>
    import("@/components/sections/UseCasesSection").then((mod) => ({
      default: mod.UseCasesSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((mod) => ({
      default: mod.AboutSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    ssr: true,
    loading: () => <SectionLoader />,
  },
);

export default function Home() {
  const { language } = useLanguage();

  // Enable scroll and section view tracking
  useScrollTracking(language);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <ServicesSection />
        <ValueSection />
        <UseCasesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
