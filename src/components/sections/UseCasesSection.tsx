import { Card, CardContent } from "@/components/ui/card";
import { USE_CASES, USE_CASES_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Rocket, Building, Building2 } from "lucide-react";

const categoryIcons = {
  startup: Rocket,
  sme: Building,
  enterprise: Building2,
};

export function UseCasesSection() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(USE_CASES_CONTENT.title)}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {USE_CASES.map((useCase) => {
            const Icon =
              categoryIcons[useCase.categoryKey as keyof typeof categoryIcons];
            return (
              <Card
                key={useCase.id}
                className="border-2 transition-colors hover:border-[#F0492E]/30"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#F0492E]/20">
                      <Icon className="size-5 text-[#F0492E]" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-[#F0492E]">
                      {t(useCase.category)}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {t(useCase.title)}
                  </h3>
                  <p className="mb-4 text-gray-600">{t(useCase.description)}</p>
                  <div className="rounded-lg bg-green-50 px-3 py-2">
                    <p className="text-sm font-medium text-green-800">
                      {t(useCase.metrics)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
