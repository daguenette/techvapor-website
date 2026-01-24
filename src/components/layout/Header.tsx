"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { NAVIGATION_ITEMS, SITE_CONFIG, SERVICES } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navigationItems = NAVIGATION_ITEMS[language];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <Phone className="h-4 w-4" />
            <a href={`tel:${SITE_CONFIG.phone}`} className="font-semibold hover:underline">
              {SITE_CONFIG.phone}
            </a>
          </div>
          <LanguageToggle />
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logoT.webp"
              alt="Technivapeur"
              width={200}
              height={64}
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
            {navigationItems.map((item) => {
              // Services dropdown
              if (item.href === "#services") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                  >
                    <button
                      className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-red-600 transition-colors py-2"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block w-full px-4 py-3 text-left hover:bg-red-50 transition-colors"
                          >
                            <div className="font-semibold text-gray-900 text-sm">
                              {t(service.title)}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {t(service.description).substring(0, 60)}...
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Regular nav items
              return (
                  <Link
                    key={item.name}
                    href={`/${item.href}`}
                    className="text-base font-semibold text-gray-700 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/#contact">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6"
              >
                {t(SITE_CONFIG.ctaText)}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => {
              // Services with submenu in mobile
              if (item.href === "#services") {
                return (
                  <div key={item.name}>
                    <Link
                      href={`/${item.href}`}
                      className="text-left text-base font-semibold text-gray-700 hover:text-red-600 py-2 w-full block"
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-2 mt-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="block text-sm text-gray-600 hover:text-red-600 py-1"
                        >
                          {t(service.title)}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  className="text-left text-base font-semibold text-gray-700 hover:text-red-600 py-2"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/#contact" className="block mt-2">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full"
              >
                {t(SITE_CONFIG.ctaText)}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
