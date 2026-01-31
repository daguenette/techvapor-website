"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Waves, Wind, Sofa, ShieldCheck, Fan } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";

export default function ResidentialCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "residential");

  const carouselImages = [
    {
      src: "/Residential_04.webp",
      alt:
        language === "fr" ? "Nettoyage professionnel" : "Professional cleaning",
    },
    {
      src: "/Residential_03.webp",
      alt: language === "fr" ? "Nettoyage de tapis" : "Carpet cleaning",
    },
    {
      src: "/Residential_02.webp",
      alt: language === "fr" ? "Nettoyage de maison" : "Home cleaning",
    },
    {
      src: "/Residential_05.webp",
      alt: language === "fr" ? "Service résidentiel" : "Residential service",
    },
    {
      src: "/Residential_06.webp",
      alt: language === "fr" ? "Entretien ménager" : "House maintenance",
    },
    {
      src: "/Residential_07.webp",
      alt: language === "fr" ? "Nettoyage à domicile" : "Home cleaning service",
    },
    {
      src: "/Residential_08.webp",
      alt: language === "fr" ? "Services de nettoyage" : "Cleaning services",
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
                  {language === "fr" ? (
                    <>
                      <span>
                        Vous cherchez un service professionnel de nettoyage de
                        tapis résidentiel à Montréal?
                      </span>
                      <span className="block mt-2">
                        Technivapeur offre un nettoyage en profondeur de vos
                        tapis avec plus de 30 ans d'expérience et des
                        équipements industriels à la fine pointe de la
                        technologie.
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Looking for professional residential carpet cleaning in
                        Montreal?
                      </span>
                      <span className="block mt-2">
                        Technivapeur provides deep carpet cleaning with 30+
                        years of experience and state-of-the-art industrial
                        equipment.
                      </span>
                    </>
                  )}
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
                  ? "Service de nettoyage résidentiel"
                  : "Residential Cleaning Service"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                {language === "fr"
                  ? "Notre service de nettoyage de tapis à domicile élimine efficacement les taches, la saleté incrustée, les allergènes, les acariens et les odeurs, tout en respectant les fibres de vos tapis, divans et fauteuils."
                  : "Our in-home carpet cleaning service removes stains, embedded dirt, allergens, dust mites, and odors—while respecting the fibers of your carpets, sofas, and chairs."}
              </p>
            </div>

            {/* Icon Grid - 2 cols on mobile, 3 on tablet, 5 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Waves
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Traitement vapeur des tapis mur à mur"
                    : "Wall-to-wall carpet steam treatment"}
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
                    ? "Extraction des allergènes et acariens"
                    : "Allergen and dust-mite extraction"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Sofa
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Nettoyage des divans et fauteuils en tissu"
                    : "Sofa and armchair upholstery cleaning"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <ShieldCheck
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Traitement anti-taches et anti-odeurs"
                    : "Anti-stain and deodorizing treatment"}
                </p>
              </div>

              <div className="text-center col-span-2 sm:col-span-1">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Fan
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Séchage rapide pour un retour à la vie normale"
                    : "Fast drying for quick home use"}
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
                  ? "Nettoyage résidentiel selon votre horaire"
                  : "Residential Cleaning on Your Schedule"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                {language === "fr"
                  ? "Méthode de nettoyage à la vapeur professionnelle: nettoyage à la vapeur haute température, extraction à haute pression, aspiration puissante pour un séchage rapide, et produits écologiques et sécuritaires."
                  : "Professional steam-cleaning method: high-temperature steam cleaning, high-pressure extraction, powerful vacuum for fast drying, and eco-friendly, safe products."}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                {language === "fr"
                  ? 'Résultats garantis: tapis propres en profondeur sans résidus, séchage rapide (sans humidité excessive), sans odeurs désagréables, sans taches visibles, et un vrai effet "comme neufs". Desservant Montréal, Laval et la Rive-Nord.'
                  : 'Guaranteed results: deep-cleaned carpets with no residue, fast drying (no excessive moisture), no unpleasant odors, no visible stains, and a true "like-new" refresh. Serving Montreal, Laval, and the North Shore.'}
              </p>
              <a href="#service-inquiry">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto min-h-[48px]"
                >
                  {language === "fr"
                    ? "Demander une estimation gratuite"
                    : "Request Your Free In-Home Estimate"}
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
