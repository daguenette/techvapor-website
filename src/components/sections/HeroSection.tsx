"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();

  const heading =
    language === "fr"
      ? "Vous avez un nettoyage de tapis à faire ?"
      : "Do you have carpets to clean?";

  const subheading =
    language === "fr"
      ? "Nous sommes spécialisés pour ce type de travail."
      : "We specialize in this type of work.";

  const ctaText =
    language === "fr" ? "Demander une soumission" : "Get a Free Quote";

  return (
    <section id="home" className="overflow-hidden">
      {/* Mobile/Tablet: Stacked Layout */}
      <div className="lg:hidden">
        {/* Image Container */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1]">
          <Image
            src="/497422573_10228264055646451_6047764831532838610_n.jpg"
            alt="Technivapeur Cleaning Service"
            fill
            className="object-cover"
            priority
            unoptimized
            style={{ objectPosition: "center center" }}
            sizes="100vw"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white px-4 py-8 sm:px-6 sm:py-12">
          <div className="max-w-xl mx-auto sm:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {subheading}
            </p>

            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto min-h-[48px]"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: Diagonal Layout */}
      <div className="hidden lg:block relative min-h-[700px]">
        {/* Background Image - Right Side */}
        <div className="absolute inset-0 left-[45%]">
          <Image
            src="/497422573_10228264055646451_6047764831532838610_n.jpg"
            alt="Technivapeur Cleaning Service"
            fill
            className="object-cover"
            priority
            unoptimized
            style={{ objectPosition: "center center" }}
            sizes="60vw"
          />
        </div>

        {/* Diagonal White Section - Left Side */}
        <div
          className="absolute inset-y-0 left-0 bg-white w-[50%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center min-h-[700px]">
          <div className="w-full px-12 xl:px-16">
            <div className="max-w-lg xl:max-w-xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {heading}
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
                {subheading}
              </p>

              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all min-h-[48px]"
                >
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
