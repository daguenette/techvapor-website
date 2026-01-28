"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SERVICES_CONTENT, SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Home, Building2, Sofa, Wind } from "lucide-react";
import Link from "next/link";

const iconMap = {
  residential: Home,
  commercial: Building2,
  furniture: Sofa,
  ducts: Wind,
};

export function ServicesSection() {
  const { t, language } = useLanguage();

  return (
    <section
      id="services"
      className="relative bg-white -mt-8 sm:-mt-12 lg:-mt-16"
    >
      {/* Diagonal top edge overlapping hero - Hidden on mobile */}
      <div
        className="hidden md:block absolute top-0 left-0 right-0 h-20 lg:h-24 bg-white z-10"
        style={{
          clipPath: "polygon(0 0, 15% 100%, 100% 100%, 100% 0)",
        }}
      ></div>

      <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t(SERVICES_CONTENT.title)}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {t(SERVICES_CONTENT.subtitle)}
            </p>
          </div>

          {/* Services Grid - 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id as keyof typeof iconMap] || Home;
              const features =
                language === "fr" ? service.features.fr : service.features.en;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block"
                >
                  <Card className="border-2 border-gray-200 hover:border-red-300 active:border-red-400 transition-all duration-300 hover:shadow-2xl active:shadow-lg group cursor-pointer bg-white h-full">
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      {/* Icon */}
                      <div className="mb-4 sm:mb-5 md:mb-6">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 group-active:scale-105 transition-transform duration-300">
                          <Icon
                            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {t(service.title)}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">
                        {t(service.description)}
                      </p>

                      {/* Features List - Show fewer items on mobile for better readability */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-4">
                        {features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600 flex-shrink-0 mt-1.5" />
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                        {features.length > 3 && (
                          <li className="text-xs sm:text-sm text-red-600 font-medium pt-1">
                            +{features.length - 3}{" "}
                            {language === "fr" ? "plus" : "more"}...
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
