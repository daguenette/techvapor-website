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
import { Home, Sparkles, Wind, Sofa, DoorOpen, Send } from "lucide-react";
import Image from "next/image";

export default function ResidentialCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "residential");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Image first on mobile for visual impact */}
              <div className="relative order-1 lg:order-2">
                {service.image ? (
                  <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
                    <Image
                      src={`/${service.image}`}
                      alt={t(service.title)}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gray-800 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                    <Home
                      className="h-32 w-32 sm:h-48 sm:w-48 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  {t(service.title)}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  {language === "fr"
                    ? "Après une longue journée de travail, vous méritez de rentrer dans un espace frais et impeccable. Profitez de notre service de nettoyage professionnel hebdomadaire, bihebdomadaire ou mensuel."
                    : "After a long day at work, you deserve to come home to a fresh, spotless space. Enjoy our professional weekly, bi-weekly, or monthly cleaning service."}
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
                  ? "Profitez d'une maison impeccable avec notre service de nettoyage résidentiel. Notre équipe d'experts s'assure que votre espace reste frais avec des tâches essentielles personnalisées selon vos besoins uniques."
                  : "Enjoy a spotless home with our residential cleaning service. Our expert team ensures your space stays fresh with essential tasks customized to your unique needs."}
              </p>
            </div>

            {/* Icon Grid - 2 cols on mobile, 3 on tablet, 5 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Sparkles
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Nettoyage en profondeur des salles de bain et cuisines"
                    : "Thorough cleaning of your bathroom and kitchen"}
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
                    ? "Aspiration complète de chaque pièce"
                    : "Complete vacuuming of every room"}
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
                    ? "Lavage de tous les planchers"
                    : "Washing all non-carpeted floors"}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <Sparkles
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Dépoussiérage des surfaces et luminaires"
                    : "Dusting surfaces and fixtures"}
                </p>
              </div>

              <div className="text-center col-span-2 sm:col-span-1">
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-black flex items-center justify-center">
                  <DoorOpen
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium px-2">
                  {language === "fr"
                    ? "Nettoyage des vitres intérieures (sur demande)"
                    : "Interior window cleaning (upon request)"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling Section with Image */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Pink Blob Background - Smaller on mobile */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square bg-black rounded-2xl sm:rounded-3xl flex items-center justify-center">
                  <Home
                    className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 text-red-600/40"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Decorative blob spots - Hidden on very small screens */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full"></div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full"></div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  {language === "fr"
                    ? "Nettoyage résidentiel selon votre horaire"
                    : "Residential Cleaning on Your Schedule"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  {language === "fr"
                    ? "Après une journée bien remplie au travail ou à prendre soin de votre famille, la dernière chose dont vous voulez vous soucier est de nettoyer votre maison. Laissez Technivapeur s'occuper du travail pour vous!"
                    : "After a busy day at work or taking care of your family, the last thing you want to worry about is cleaning your home. Let Technivapeur take care of the dirty work for you!"}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  {language === "fr"
                    ? "Que vous préfériez un nettoyage hebdomadaire, bihebdomadaire ou mensuel, nous avons ce qu'il vous faut. Imaginez entrer dans votre salle de bain étincelante ou votre cuisine bien rangée sans avoir à lever le petit doigt."
                    : "Whether you prefer weekly, bi-weekly or monthly cleaning service, we have you covered. Imagine walking into your sparkling clean bathroom or your tidy and shining kitchen without you having to lift a finger."}
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
                          ? "Décrivez vos besoins de nettoyage..."
                          : "Describe your cleaning needs..."
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
