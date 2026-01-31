"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ABOUT_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Award, Heart, Star } from "lucide-react";

const iconMap = [Award, Heart, Star];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/Truck_06.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4">
        {/* Header with Guarantee Badge */}
        <div className="relative text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
              {t(ABOUT_CONTENT.subtitle)}
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t(ABOUT_CONTENT.title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(ABOUT_CONTENT.intro)}
          </p>
        </div>

        {/* Content Sections */}
        <div className="relative grid md:grid-cols-3 gap-8 mb-12">
          {ABOUT_CONTENT.sections.map((section, index) => {
            const Icon = iconMap[index];
            return (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 bg-white shadow-lg"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="h-14 w-14 rounded-lg bg-black flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(section.title)}
                  </h3>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed">
                    {t(section.content)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-red-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Join thousands of satisfied customers who trust us with their homes
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <Star className="h-6 w-6 fill-yellow-300 text-yellow-300" />
            <span className="ml-2">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
