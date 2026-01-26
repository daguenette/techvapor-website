"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 lg:left-[45%]">
        <Image
          src="/497422573_10228264055646451_6047764831532838610_n.jpg"
          alt="Technivapeur Cleaning Service"
          fill
          className="object-cover"
          priority
          unoptimized
          style={{ objectPosition: '40% center' }}
        />
      </div>

      {/* Diagonal White Section - Left Side */}
      <div 
        className="absolute inset-y-0 left-0 bg-white lg:w-[50%]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="w-full px-6 lg:px-12 xl:px-16">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr" 
                ? "Vous avez un nettoyage de tapis à faire ?"
                : "Do you have carpets to clean?"}
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed">
              {language === "fr" 
                ? "Nous sommes spécialisés pour ce type de travail."
                : "We specialize in this type of work."}
            </p>
            
            {/* CTA Button */}
            <div>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {language === "fr" ? "Demander une soumission" : "Get a Free Quote"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
