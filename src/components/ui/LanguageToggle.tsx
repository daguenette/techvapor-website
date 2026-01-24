"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { analytics } from "@/lib/analytics";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";

    // Track language change with analytics
    analytics.business.languageChanged(language, newLanguage);

    setLanguage(newLanguage);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
}
