"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import {
  Users,
  Truck,
  Award,
  Clock,
  Home,
  Building2,
  AlertTriangle,
  MapPin,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "À Propos de Technivapeur"
                  : "About Technivapeur"}
              </h1>
              <p className="text-xl sm:text-2xl text-red-600 font-semibold mb-6">
                {language === "fr"
                  ? "Nettoyage de Tapis à Montréal Depuis 1996"
                  : "Carpet Cleaning in Montreal Since 1996"}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                {language === "fr"
                  ? "Technivapeur est une entreprise familiale de nettoyage de tapis et de restauration après sinistre qui dessert Montréal, Laval et la Rive-Nord depuis 1996. Fondée par Jacques Beauchesne et Stéphane Géraldet, notre entreprise est bâtie sur des valeurs de service personnalisé et de satisfaction client."
                  : "Technivapeur is a family-owned carpet cleaning and disaster restoration company serving Montreal, Laval, and the North Shore since 1996. Founded by Jacques Beauchesne and Stéphane Géraldet, our company is built on values of personalized service and customer satisfaction."}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {language === "fr" ? "Notre Histoire" : "Our Story"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  {language === "fr"
                    ? "Depuis près de 30 ans, Jacques et Stéphane travaillent personnellement sur le terrain pour offrir un service de qualité supérieure. Notre philosophie est simple: chaque client est unique et mérite une attention personnalisée."
                    : "For nearly 30 years, Jacques and Stéphane have been personally working in the field to deliver superior quality service. Our philosophy is simple: every client is unique and deserves personalized attention."}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  {language === "fr"
                    ? "Cette approche nous a permis de bâtir une clientèle fidèle qui nous réfère année après année."
                    : "This approach has allowed us to build a loyal customer base that refers us year after year."}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                      30
                    </div>
                    <p className="text-gray-600 font-medium">
                      {language === "fr"
                        ? "Années d'expérience"
                        : "Years of Experience"}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">
                      3
                    </div>
                    <p className="text-gray-600 font-medium">
                      {language === "fr"
                        ? "Camions équipés"
                        : "Equipped Trucks"}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200 col-span-2">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="h-8 w-8 text-red-600" />
                      <span className="text-2xl sm:text-3xl font-bold text-red-600">
                        {language === "fr"
                          ? "Entreprise Familiale"
                          : "Family Business"}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      {language === "fr"
                        ? "Propriétaires présents et impliqués"
                        : "Owners present and involved"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Expertise Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "Notre Équipement et Expertise"
                  : "Our Equipment & Expertise"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {language === "fr"
                  ? "Nous investissons continuellement dans la formation de notre personnel et l'achat d'équipements modernes pour vous garantir les meilleurs résultats."
                  : "We continuously invest in training our staff and purchasing modern equipment to guarantee you the best results."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === "fr"
                      ? "3 camions équipés"
                      : "3 Equipped Trucks"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "fr"
                      ? "Entièrement équipés pour tous types de travaux"
                      : "Fully equipped for all types of work"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === "fr"
                      ? "Équipements industriels"
                      : "Industrial Equipment"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "fr"
                      ? "À la fine pointe de la technologie"
                      : "State-of-the-art technology"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === "fr"
                      ? "Équipe après sinistre"
                      : "Disaster Response Team"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "fr"
                      ? "Spécialisée en nettoyage après sinistre"
                      : "Specialized in post-disaster cleaning"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {language === "fr"
                      ? "Entretien commercial"
                      : "Commercial Maintenance"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === "fr"
                      ? "Équipe d'entretien ménager commercial"
                      : "Commercial cleaning team"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "Nos Services à Montréal et Environs"
                  : "Our Services in Montreal and Surroundings"}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Residential */}
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Home className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">
                      {language === "fr"
                        ? "Nettoyage résidentiel"
                        : "Residential Cleaning"}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Tapis et carpettes"
                        : "Carpets and rugs"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Meubles rembourrés"
                        : "Upholstered furniture"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr" ? "Matelas" : "Mattresses"}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Commercial */}
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">
                      {language === "fr"
                        ? "Nettoyage commercial"
                        : "Commercial Cleaning"}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Édifices à bureaux"
                        : "Office buildings"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Hôtels et cinémas"
                        : "Hotels and cinemas"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Complexes funéraires"
                        : "Funeral homes"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Résidences pour personnes âgées"
                        : "Senior residences"}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">
                      {language === "fr" ? "Urgence 24/7" : "24/7 Emergency"}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Dégâts d'eau et inondations"
                        : "Water damage and floods"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Assèchement de planchers"
                        : "Floor drying"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Nettoyage après incendie"
                        : "Fire cleanup"}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-red-600 flex-shrink-0" />
                      {language === "fr"
                        ? "Élimination d'odeurs"
                        : "Odor elimination"}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {language === "fr"
                  ? "Pourquoi Choisir Technivapeur?"
                  : "Why Choose Technivapeur?"}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">
                  {language === "fr"
                    ? "30 ans d'expérience à Montréal"
                    : "30 years of experience in Montreal"}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">
                  {language === "fr"
                    ? "Propriétaires présents et impliqués"
                    : "Owners present and involved"}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">
                  {language === "fr"
                    ? "Service personnalisé et professionnel"
                    : "Personalized and professional service"}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">
                  {language === "fr"
                    ? "Équipements industriels performants"
                    : "High-performance industrial equipment"}
                </p>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2 lg:col-span-2">
                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">
                  {language === "fr"
                    ? "Clientèle fidèle et satisfaite"
                    : "Loyal and satisfied customers"}
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-8 py-6 text-lg"
                >
                  {language === "fr"
                    ? "Demander une soumission gratuite"
                    : "Request a Free Quote"}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  {language === "fr" ? "Zones Desservies" : "Service Areas"}
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {language === "fr"
                  ? "Montréal, Laval, Repentigny, Rive-Nord, Saint-Eustache, Saint-Jérôme et les environs."
                  : "Montreal, Laval, Repentigny, North Shore, Saint-Eustache, Saint-Jérôme and surrounding areas."}
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
