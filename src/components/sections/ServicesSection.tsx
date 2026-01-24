import { Card, CardContent } from "@/components/ui/card";
import { SERVICES_CONTENT, SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Brain, Zap, Code, BarChart3 } from "lucide-react";

const serviceIcons = {
  1: Brain,
  2: Zap,
  3: Code,
  4: BarChart3,
};

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-gray-50 py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(SERVICES_CONTENT.title)}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            return (
              <Card
                key={service.id}
                className="bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-[#F0492E]/20">
                    <Icon className="size-7 text-[#F0492E]" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {t(service.title)}
                  </h3>
                  <p className="text-gray-600">{t(service.description)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
