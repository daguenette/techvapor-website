"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DuctsCleaningPage() {
  const { t, language } = useLanguage();
  const service = SERVICES.find((s) => s.id === "ducts");

  if (!service) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t(service.title)}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {t(service.description)}
              </p>
              <div className="mt-8">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg"
                  >
                    {language === "fr" ? "Demander une soumission" : "Get a Free Quote"}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              {service.image ? (
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={`/${service.image}`}
                    alt={t(service.title)}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="aspect-square bg-gray-800 rounded-3xl flex items-center justify-center">
                  <Wind className="h-48 w-48 text-gray-600" strokeWidth={1.5} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}
