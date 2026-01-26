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
        <div className="w-full px-8 flex justify-between items-center text-sm">
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
      <div className="w-full px-8">
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo - LEFT */}
          <Link href="/" className="flex items-center group flex-shrink-0">
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

          {/* Desktop Nav - CENTER */}
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
                      className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-red-600 transition-colors h-20"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu - Connected to navbar */}
                    <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="min-w-[220px] bg-white shadow-lg border-t-2 border-t-red-600 border-x border-b border-gray-100 py-1">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
                          >
                            {t(service.title)}
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

          {/* CTA Button - RIGHT */}
          <div className="hidden md:block flex-shrink-0">
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
