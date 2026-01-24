import { Card, CardContent } from "@/components/ui/card";
import { APPROACH_CONTENT, PROCESS_STEPS } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const stepIcons = {
  1: Search,
  2: Map,
  3: Rocket,
  4: TrendingUp,
};

export function ApproachSection() {
  const { t } = useLanguage();

  return (
    <section id="approach" className="py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t(APPROACH_CONTENT.title)}
            </h2>
            <p className="text-lg text-gray-600">{t(APPROACH_CONTENT.intro)}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {PROCESS_STEPS.map((step) => {
              const Icon = stepIcons[step.id as keyof typeof stepIcons];
              return (
                <Card
                  key={step.id}
                  className="border-2 transition-colors hover:border-[#F0492E]/30"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-[#F0492E]/20">
                      <Icon className="size-6 text-[#F0492E]" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {t(step.title)}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-[#F0492E]">
                      {t(step.subtitle)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t(step.description)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
