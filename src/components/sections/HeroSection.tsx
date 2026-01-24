"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/497422573_10228264055646451_6047764831532838610_n.jpg"
          alt="Technivapeur Cleaning Service"
          fill
          className="object-cover"
          priority
          unoptimized
          style={{ objectPosition: '65% center' }}
        />
      </div>

      {/* Blurred White Overlay - Gradient from left to 70% of the 45% section */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[45%]">
        {/* White opacity gradient WITHOUT blur */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 70%, transparent 100%)'
          }}
        ></div>
        {/* Blur gradient - starts strong on left, fades to no blur at 70% */}
        <div 
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 70%)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="grid lg:grid-cols-[30%_70%] h-full min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Text Content (30%) */}
          <div className="flex flex-col justify-center py-12 lg:py-20 px-4 lg:px-8 xl:px-12">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {language === "fr" 
                ? "Nettoyage de tapis commercial et résidentiel"
                : "Commercial and Residential Carpet Cleaning"}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              {language === "fr" 
                ? "Montréal - Rive-Nord et environs"
                : "Montreal - North Shore and Surrounding Areas"}
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

          {/* Right Side - Image shows through */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
