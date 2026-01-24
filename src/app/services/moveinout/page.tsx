"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { TruckIcon, Sparkles, Wind, Sofa, DoorOpen, Send } from "lucide-react";

export default function MoveInOutCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "moveinout");

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
                  ? "Facilitez votre déménagement avec notre service de nettoyage complet. Nous préparons votre nouveau chez-vous ou nettoyons votre ancienne résidence de fond en comble."
                  : "Make your move easier with our comprehensive cleaning service. We prepare your new home or clean your old residence from top to bottom."}
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
                <TruckIcon className="h-48 w-48 text-white/80" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === "fr" ? "Service de nettoyage de déménagement" : "Move-In/Move-Out Cleaning Service"}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === "fr"
                ? "Un nettoyage complet de votre nouvelle maison ou ancienne résidence. Nous nettoyons chaque recoin pour vous aider à obtenir votre dépôt ou commencer dans un espace immaculé."
                : "A complete cleaning of your new home or old residence. We clean every corner to help you get your deposit back or start in a spotless space."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              { icon: Sparkles, text: language === "fr" ? "Nettoyage complet" : "Full cleaning" },
              { icon: Sofa, text: language === "fr" ? "Armoires & Tiroirs" : "Cabinets & Drawers" },
              { icon: Wind, text: language === "fr" ? "Électroménagers" : "Appliances" },
              { icon: DoorOpen, text: language === "fr" ? "Murs & Plafonds" : "Walls & Ceilings" },
              { icon: Sparkles, text: language === "fr" ? "Planchers en profondeur" : "Deep floor cleaning" },
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-black rounded-3xl flex items-center justify-center">
                <TruckIcon className="h-48 w-48 text-red-600/40" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr" ? "Transition sans stress" : "Stress-Free Transition"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {language === "fr"
                  ? "Le déménagement est déjà assez stressant. Laissez-nous nous occuper du nettoyage pendant que vous vous concentrez sur votre installation. Service rapide et horaires flexibles disponibles."
                  : "Moving is stressful enough. Let us handle the cleaning while you focus on settling in. Fast service and flexible scheduling available."}
              </p>
              <a href="#service-inquiry">
                <Button size="lg" className="bg-red-600 text-white font-semibold px-8 py-6 text-lg">
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
