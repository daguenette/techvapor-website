"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Flame, Droplets, Shield, Wind, Sparkles, Send } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export default function PostDisasterCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "post-disaster");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const carouselImages = [
    { src: "/Disaster_01.webp", alt: language === "fr" ? "Nettoyage après sinistre" : "Post disaster cleaning" },
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
                    ? "Nous vous aidons à retrouver votre espace après un sinistre. Notre équipe expérimentée intervient rapidement pour nettoyer et restaurer votre propriété."
                    : "We help you recover your space after a disaster. Our experienced team responds quickly to clean and restore your property."}
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
                  ? "Après un incendie, une inondation ou tout autre sinistre, notre équipe spécialisée intervient pour nettoyer, désinfecter et restaurer votre propriété."
                  : "After a fire, flood, or any other disaster, our specialized team intervenes to clean, disinfect, and restore your property."}
              </p>
            </div>

            {/* Icon Grid - 2 cols on mobile, 3 on tablet, 5 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Droplets
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Dégâts d'eau et inondations"
                    : "Water damage & floods"}
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
                    ? "Nettoyage après incendie"
                    : "Fire damage cleanup"}
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
                    ? "Élimination des moisissures"
                    : "Mold removal"}
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
                    ? "Élimination des odeurs"
                    : "Odor elimination"}
                </p>
              </div>

              <div className="text-center col-span-2 sm:col-span-1">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Sparkles
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Restauration complète"
                    : "Complete restoration"}
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
                  ? "Nous travaillons avec les compagnies d'assurance et vous accompagnons tout au long du processus. Faites confiance à notre expertise pour retrouver votre espace."
                  : "We work with insurance companies and guide you through the entire process. Trust our expertise to help you recover your space."}
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
          className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50"
        >
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === "fr"
                  ? "Demander une soumission"
                  : "Submit a Service Inquiry"}
              </h2>
            </div>

            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === "fr" ? "Prénom" : "First Name"}*
                      </label>
                      <Input
                        type="text"
                        placeholder={
                          language === "fr" ? "Votre prénom" : "Your first name"
                        }
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {language === "fr" ? "Téléphone" : "Phone Number"}*
                      </label>
                      <Input
                        type="tel"
                        placeholder={
                          language === "fr"
                            ? "Votre numéro"
                            : "Your phone number"
                        }
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "fr" ? "Adresse courriel" : "Email"}*
                    </label>
                    <Input
                      type="email"
                      placeholder={
                        language === "fr" ? "votre@email.com" : "your@email.com"
                      }
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {language === "fr" ? "Message" : "Message"}
                    </label>
                    <Textarea
                      placeholder={
                        language === "fr"
                          ? "Décrivez votre situation..."
                          : "Describe your situation..."
                      }
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="text-base border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold h-12 sm:h-13 text-base sm:text-lg min-h-[48px]"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {language === "fr"
                      ? "Envoyer la demande"
                      : "Submit Inquiry"}
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
