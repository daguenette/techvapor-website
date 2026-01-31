"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Flame, Droplets, Shield, Wind } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";

export default function PostDisasterCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "post-disaster");

  const carouselImages = [
    {
      src: "/Disaster_01.webp",
      alt:
        language === "fr"
          ? "Nettoyage après sinistre"
          : "Post disaster cleaning",
    },
  ];

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Carousel first on mobile for visual impact */}
              <div className="relative order-1 lg:order-2">
                <ImageCarousel
                  images={carouselImages}
                  className="aspect-square rounded-2xl sm:rounded-3xl"
                />
              </div>

              {/* Content */}
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  {t(service.title)}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  {language === "fr"
                    ? "Victime d'un dégât d'eau, incendie ou autre sinistre à Montréal? Technivapeur offre un service d'urgence disponible 24/7 pour le nettoyage après sinistre, l'assèchement et la restauration de votre propriété."
                    : "Dealing with water damage, fire, or another disaster in Montreal? Technivapeur provides 24/7 emergency post-disaster cleaning, drying, and restoration services."}
                </p>
                <div>
                  <a href="#service-inquiry">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto min-h-[48px]"
                    >
                      {language === "fr"
                        ? "Demander une soumission"
                        : "Submit a Service Inquiry"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                {language === "fr"
                  ? "Service de nettoyage post-sinistre"
                  : "Post Disaster Cleaning Service"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                {language === "fr"
                  ? "Un dégât d’eau ou un sinistre peut causer des dommages importants. Nous offrons l’extraction d’eau, la déshumidification, l’assèchement des planchers et l’élimination d’odeurs pour rétablir un environnement sécuritaire et sain."
                  : "Water damage or a disaster can cause major harm. We provide water extraction, dehumidification, floor drying, and odor removal to restore a safe, healthy environment."}
              </p>
            </div>

            {/* Icon Grid - 2 cols on mobile, 3 on tablet, 5 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-2">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Droplets
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Pompage d'eau & assèchement structurel"
                    : "Water pumping & structural drying"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Flame
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Décontamination fumée, suie & odeurs de feu"
                    : "Smoke, soot & fire-odor cleanup"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Shield
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Traitements antimicrobiens & prévention des moisissures"
                    : "Antimicrobial & mold-prevention treatments"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Wind
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Déshumidificateurs industriels & contrôle des odeurs"
                    : "Industrial dehumidifiers & odor control"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Pink Blob Background - Smaller on mobile */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                {language === "fr"
                  ? "Intervention rapide après sinistre"
                  : "Rapid Post-Disaster Response"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                {language === "fr"
                  ? "Un sinistre peut survenir à tout moment. Notre équipe est prête à intervenir rapidement pour minimiser les dommages et commencer le processus de restauration."
                  : "A disaster can strike at any time. Our team is ready to respond quickly to minimize damage and begin the restoration process."}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                {language === "fr"
                  ? "Nos services de nettoyage après sinistre et d’urgence 24/7 sont offerts à Montréal, sur la Rive-Nord et dans les environs, pour vous offrir une paix d’esprit lorsque vous en avez le plus besoin."
                  : "Our 24/7 post-disaster and emergency services are offered in Montreal, the North Shore, and surrounding areas—so you get peace of mind when you need it most."}
              </p>
              <a href="#service-inquiry">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto min-h-[48px]"
                >
                  {language === "fr"
                    ? "Demander une estimation gratuite"
                    : "Request Your Free Estimate"}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="service-inquiry"
          className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === "fr"
                  ? "Demander une soumission"
                  : "Submit a Service Inquiry"}
              </h2>
            </div>

            <QuoteRequestForm />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
