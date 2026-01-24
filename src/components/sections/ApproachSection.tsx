"use client";

import { Card, CardContent } from "@/components/ui/card";
import { APPROACH_CONTENT, PROCESS_STEPS } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Shield, Users, CheckCircle, Sparkles } from "lucide-react";

const iconMap = {
  1: Users,
  2: Shield,
  3: CheckCircle,
  4: Sparkles,
};

export function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t(APPROACH_CONTENT.title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(APPROACH_CONTENT.intro)}
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.id as keyof typeof iconMap];
            return (
              <Card 
                key={step.id} 
                className="border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center">
                      <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(step.title)}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-4">
                    {t(step.subtitle)}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {t(step.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
