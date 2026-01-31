"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Building2, Sparkles, Sofa, DoorOpen, Armchair } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";

export default function CommercialCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "commercial");

  const carouselImages = [
    {
      src: "/Commercial_04.webp",
      alt:
        language === "fr" ? "Entretien commercial" : "Commercial maintenance",
    },
    {
      src: "/Commercial_01.webp",
      alt: language === "fr" ? "Nettoyage commercial" : "Commercial cleaning",
    },
    {
      src: "/Commercial_02.webp",
      alt: language === "fr" ? "Nettoyage de bureaux" : "Office cleaning",
    },
    {
      src: "/Commercial_03.webp",
      alt: language === "fr" ? "Nettoyage d'édifices" : "Building cleaning",
      focus: "25% center",
      zoom: 1.3,
    },
    {
      src: "/Commercial_05.webp",
      alt: language === "fr" ? "Services commerciaux" : "Commercial services",
    },
  ];

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-10 lg:py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t(service.title)}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  {language === "fr" ? (
                    <>
                      <span>
                        Vous recherchez un service professionnel de nettoyage
                        commercial à Montréal et environs?
                      </span>
                      <span className="block mt-2">
                        Technivapeur offre des solutions de nettoyage haute
                        performance disponibles 24/7 pour tous vos besoins
                        commerciaux et industriels.
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Looking for professional commercial cleaning in Montreal
                        and surrounding areas?
                      </span>
                      <span className="block mt-2">
                        Technivapeur offers high-performance cleaning solutions
                        available 24/7 for commercial and industrial needs.
                      </span>
                    </>
                  )}
                </p>
                <div className="mt-8">
                  <a href="#service-inquiry">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg"
                    >
                      {language === "fr"
                        ? "Demander une soumission"
                        : "Submit a Service Inquiry"}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <ImageCarousel
                  images={carouselImages}
                  className="aspect-square rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="pt-4 pb-10 lg:pt-6 lg:pb-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "Service de nettoyage commercial"
                  : "Commercial Cleaning Service"}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {language === "fr"
                  ? "Service de nettoyage pour édifices à bureaux, hôtels, cinémas, résidences pour personnes âgées et espaces industriels. Disponible 24/7 pour minimiser les interruptions."
                  : "Cleaning services for office buildings, hotels, cinemas, senior residences, and industrial spaces. Available 24/7 to minimize downtime."}
              </p>
            </div>

            {/* Icon Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">
                  {language === "fr"
                    ? "Tapis de halls et corridors revitalisés"
                    : "Revitalized lobby and corridor carpets"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">
                  {language === "fr"
                    ? "Traitement vapeur haute pression 24/7"
                    : "24/7 high-pressure steam treatment"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                  <Armchair className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">
                  {language === "fr"
                    ? "Nettoyage spécialisé de chaises de bureau"
                    : "Specialized office chair cleaning"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                  <Sofa className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">
                  {language === "fr"
                    ? "Protection des divans et cloisons textiles"
                    : "Protecting sofas and fabric partitions"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                  <DoorOpen className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">
                  {language === "fr"
                    ? "Séchage rapide pour reprendre vos activités"
                    : "Rapid drying to resume operations"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling Section */}
        <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "Nettoyage commercial selon votre horaire"
                  : "Commercial Cleaning on Your Schedule"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {language === "fr"
                  ? "Que ce soit pour un dégât d'eau, incendie, nettoyage après crime ou simple entretien préventif, notre expertise en nettoyage commercial professionnel permet de remettre en état presque n'importe quel environnement."
                  : "Whether it's water damage, fire, post-incident cleanup, or preventative maintenance, our commercial cleaning expertise can restore almost any environment."}
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {language === "fr"
                  ? "Disponibles 24 heures sur 24, 7 jours sur 7, nous intervenons rapidement afin de minimiser l’impact sur vos opérations et offrir à vos employés et clients un environnement sain et impeccable."
                  : "Available 24/7, we respond quickly to minimize impact on your operations and provide employees and customers with a clean, healthy environment."}
              </p>
              <div className="flex justify-center">
                <a href="#service-inquiry">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    {language === "fr"
                      ? "Demander une estimation gratuite"
                      : "Request Your Free Estimate"}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="service-inquiry" className="py-10 lg:py-16 bg-gray-50">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
