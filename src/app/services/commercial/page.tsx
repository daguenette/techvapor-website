"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Building2, Sparkles, Wind, Sofa, DoorOpen, Send } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export default function CommercialCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "commercial");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const carouselImages = [
    { src: "/Commercial_01.webp", alt: language === "fr" ? "Nettoyage commercial" : "Commercial cleaning" },
    { src: "/Commercial_02.webp", alt: language === "fr" ? "Nettoyage de bureaux" : "Office cleaning" },
    { src: "/Commercial_03.webp", alt: language === "fr" ? "Nettoyage d'édifices" : "Building cleaning" },
    { src: "/Commercial_04.webp", alt: language === "fr" ? "Entretien commercial" : "Commercial maintenance" },
    { src: "/Commercial_05.webp", alt: language === "fr" ? "Services commerciaux" : "Commercial services" },
  ];

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t(service.title)}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {language === "fr"
                  ? "Vous recherchez un service professionnel de nettoyage commercial à Montréal et environs? Technivapeur offre des solutions de nettoyage haute performance disponibles 24/7 pour tous vos besoins commerciaux et industriels."
                  : "Looking for professional commercial cleaning in Montreal and surrounding areas? Technivapeur offers high-performance cleaning solutions available 24/7 for commercial and industrial needs."}
              </p>
              <div className="mt-8">
                <a href="#service-inquiry">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    {language === "fr" ? "Demander une soumission" : "Submit a Service Inquiry"}
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
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Service de nettoyage commercial" : "Commercial Cleaning Service"}
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
              <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                <Building2 className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-gray-700 font-medium">
                {language === "fr"
                  ? "Nettoyage complet des bureaux"
                  : "Complete office cleaning"}
              </p>
            </div>

            <div className="text-center">
              <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-gray-700 font-medium">
                {language === "fr"
                  ? "Désinfection des surfaces communes"
                  : "Sanitization of common areas"}
              </p>
            </div>

            <div className="text-center">
              <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                <Wind className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-gray-700 font-medium">
                {language === "fr"
                  ? "Aspiration et nettoyage de tapis"
                  : "Vacuuming and carpet cleaning"}
              </p>
            </div>

            <div className="text-center">
              <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                <Sofa className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-gray-700 font-medium">
                {language === "fr"
                  ? "Entretien des salles de repos"
                  : "Break room maintenance"}
              </p>
            </div>

            <div className="text-center">
              <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                <DoorOpen className="h-12 w-12 text-white" strokeWidth={2} />
              </div>
              <p className="text-gray-700 font-medium">
                {language === "fr"
                  ? "Nettoyage des espaces d'accueil"
                  : "Reception area cleaning"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
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
      </section>

      {/* Contact Form Section */}
      <section id="service-inquiry" className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === "fr" ? "Demander une soumission" : "Submit a Service Inquiry"}
            </h2>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "fr" ? "Prénom" : "First Name"}*
                    </label>
                    <Input
                      type="text"
                      required
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "fr" ? "Téléphone" : "Phone Number"}*
                    </label>
                    <Input
                      type="tel"
                      required
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === "fr" ? "Adresse courriel" : "Email"}*
                  </label>
                  <Input
                    type="email"
                    required
                    className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === "fr" ? "Message" : "Message"}
                  </label>
                  <Textarea
                    rows={5}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {language === "fr" ? "Envoyer la demande" : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
