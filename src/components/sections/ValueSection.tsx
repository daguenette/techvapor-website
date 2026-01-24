import { VALUE_PROPS_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Target, Gauge, Award, TrendingUp, Eye } from "lucide-react";

const valueIcons = {
  roi: Target,
  speed: Gauge,
  experience: Award,
  data: TrendingUp,
  clarity: Eye,
};

export function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-orange-50/30 py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(VALUE_PROPS_CONTENT.title)}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS_CONTENT.items.map((item) => {
            const Icon = valueIcons[item.key as keyof typeof valueIcons];
            return (
              <div key={item.key} className="text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#F0492E]/20">
                  <Icon className="size-8 text-[#F0492E]" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-gray-600">{t(item.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
