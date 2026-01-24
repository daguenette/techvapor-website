"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Sparkles, Wind, Sofa, DoorOpen, Send, Droplet } from "lucide-react";

export default function DeepCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "deep");

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-32 bg-red-600">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                {t(service.title)}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                {language === "fr"
                  ? "Un nettoyage en profondeur complet pour redonner à votre espace son éclat d'origine. Idéal pour le changement de saison ou les occasions spéciales."
                  : "A comprehensive deep clean to restore your space to its original sparkle. Perfect for seasonal changes or special occasions."}
              </p>
              <div className="mt-8">
                <a href="#service-inquiry">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                    {language === "fr" ? "Demander une soumission" : "Submit a Service Inquiry"}
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <Sparkles className="h-48 w-48 text-white/80" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Service de grand nettoyage" : "Deep Cleaning Service"}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === "fr"
                ? "Notre service de grand nettoyage va au-delà du nettoyage régulier. Nous nous concentrons sur chaque détail et les zones souvent négligées pour un résultat impeccable."
                : "Our deep cleaning service goes beyond regular cleaning. We focus on every detail and often-neglected areas for a spotless result."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              { icon: Sparkles, text: language === "fr" ? "Nettoyage détaillé de toutes les surfaces" : "Detailed cleaning of all surfaces" },
              { icon: Wind, text: language === "fr" ? "Zones difficiles d'accès" : "Hard-to-reach areas" },
              { icon: Droplet, text: language === "fr" ? "Désinfection en profondeur" : "Deep sanitization" },
              { icon: Sofa, text: language === "fr" ? "Nettoyage de meubles" : "Furniture cleaning" },
              { icon: DoorOpen, text: language === "fr" ? "Portes et cadres" : "Doors and frames" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-black flex items-center justify-center">
                  <item.icon className="h-12 w-12 text-white" strokeWidth={2} />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-black rounded-3xl flex items-center justify-center">
                <Sparkles className="h-48 w-48 text-red-600/40" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "Résultats qui durent" : "Results That Last"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {language === "fr"
                  ? "Notre grand nettoyage utilise des techniques et équipements professionnels pour un résultat durable. Parfait pour préparer votre maison pour le printemps, les fêtes ou simplement pour un nouveau départ."
                  : "Our deep cleaning uses professional techniques and equipment for lasting results. Perfect for preparing your home for spring, holidays or simply a fresh start."}
              </p>
              <a href="#service-inquiry">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
                  {language === "fr" ? "Réserver maintenant" : "Book Now"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="service-inquiry" className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === "fr" ? "Demander une soumission" : "Submit a Service Inquiry"}
            </h2>
          </div>
          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input type="text" placeholder={language === "fr" ? "Prénom" : "First Name"} required className="h-12" />
                  <Input type="tel" placeholder={language === "fr" ? "Téléphone" : "Phone"} required className="h-12" />
                </div>
                <Input type="email" placeholder="Email" required className="h-12" />
                <Textarea rows={5} placeholder={language === "fr" ? "Message" : "Message"} className="resize-none" />
                <Button type="submit" size="lg" className="w-full bg-red-600 text-white font-semibold h-12">
                  <Send className="mr-2 h-5 w-5" />
                  {language === "fr" ? "Envoyer" : "Submit"}
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
