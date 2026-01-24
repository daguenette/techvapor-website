"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SERVICES_CONTENT, SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Home, Building2, Sparkles, TruckIcon } from "lucide-react";
import Link from "next/link";

const iconMap = {
  residential: Home,
  commercial: Building2,
  deep: Sparkles,
  moveinout: TruckIcon,
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t(SERVICES_CONTENT.title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t(SERVICES_CONTENT.subtitle)}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id as keyof typeof iconMap] || Home;
            return (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
              >
                <Card 
                  className="border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-2xl group cursor-pointer bg-white h-full"
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="h-16 w-16 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(service.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {t(service.description)}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-4">
                      {service.features.en.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
