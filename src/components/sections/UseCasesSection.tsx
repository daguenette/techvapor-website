"use client";

import { USE_CASES, USE_CASES_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export function UseCasesSection() {
  const { t } = useLanguage();

  // Return empty section if no use cases
  if (USE_CASES.length === 0) {
    return null;
  }

  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(USE_CASES_CONTENT.title)}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Use cases will be rendered here when added */}
        </div>
      </div>
    </section>
  );
}
