"use client";

import { VALUE_PROPS_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export function ValueSection() {
  const { t } = useLanguage();

  // Return empty section if no value props
  if (VALUE_PROPS_CONTENT.items.length === 0) {
    return null;
  }

  return (
    <section className="bg-orange-50/30 py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(VALUE_PROPS_CONTENT.title)}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Value propositions will be rendered here when added */}
        </div>
      </div>
    </section>
  );
}
