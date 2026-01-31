"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import {
  NAVIGATION_ITEMS,
  SITE_CONFIG,
  SERVICES,
} from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(120);
  const headerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const navigationItems = NAVIGATION_ITEMS[language];

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [language]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md"
      >
        {/* Top Bar */}
        <div className="bg-red-600 text-white py-1 sm:py-1.5">
          <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${SITE_CONFIG.phones.montreal}`}
                aria-label={`${language === "fr" ? "Appeler" : "Call"} ${SITE_CONFIG.phones.montreal}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/40 px-3 py-0.5 text-white/90 hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" />
                <span className="text-xs sm:text-sm">
                  {SITE_CONFIG.phones.montreal}
                </span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phones.riveNord}`}
                aria-label={`${language === "fr" ? "Appeler" : "Call"} ${SITE_CONFIG.phones.riveNord}`}
                className="hidden lg:flex items-center justify-center gap-2 rounded-full border border-white/40 px-3 py-0.5 text-white/90 hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{SITE_CONFIG.phones.riveNord}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label={`${language === "fr" ? "Envoyer un courriel" : "Email"}`}
                className="flex items-center justify-center gap-0 lg:gap-2 rounded-full border border-white/40 px-2.5 py-0.5 text-white/90 hover:bg-white/10 transition"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline text-sm">
                  {SITE_CONFIG.email}
                </span>
              </a>
            </div>
            <div className="flex items-center justify-end">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between relative">
            {/* Logo - LEFT */}
            <Link
              href="/"
              className="flex items-center group flex-shrink-0"
              onClick={closeMobileMenu}
            >
              <Image
                src="/logoT.webp"
                alt="Technivapeur"
                width={200}
                height={64}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Nav - CENTER */}
            <nav className="hidden items-center gap-6 lg:gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
              {navigationItems.map((item) => {
                // Services dropdown
                if (item.href === "#services") {
                  return (
                    <div key={item.name} className="relative group">
                      <button className="flex items-center gap-1 text-base font-semibold text-gray-700 hover:text-red-600 transition-colors h-20 min-h-[44px] px-2">
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
                              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center"
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
                    className="text-base font-semibold text-gray-700 hover:text-red-600 transition-colors min-h-[44px] flex items-center px-2"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - RIGHT */}
            <div className="hidden lg:block flex-shrink-0">
              <Link href="/#contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 h-11">
                  {t(SITE_CONFIG.ctaText)}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        <div
          className={`fixed inset-0 bg-white lg:hidden z-[60] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Image
              src="/logoT.webp"
              alt="Technivapeur"
              width={150}
              height={48}
              className="h-10 w-auto"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-6 py-6 flex flex-col gap-2">
            {navigationItems.map((item) => {
              // Services with submenu in mobile
              if (item.href === "#services") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-left text-base font-semibold text-gray-700 hover:text-red-600 py-3 w-full flex items-center justify-between min-h-[44px] active:bg-gray-50 rounded-lg px-3 -mx-3 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-200 ml-3">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={closeMobileMenu}
                            className="block text-sm text-gray-600 hover:text-red-600 py-2.5 min-h-[44px] flex items-center active:bg-gray-50 rounded px-2 -ml-2 transition-colors"
                          >
                            {t(service.title)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  onClick={closeMobileMenu}
                  className="text-left text-base font-semibold text-gray-700 hover:text-red-600 py-3 min-h-[44px] flex items-center active:bg-gray-50 rounded-lg px-3 -mx-3 transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="block mt-4"
              onClick={closeMobileMenu}
            >
              <Button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold w-full h-12 text-base">
                {t(SITE_CONFIG.ctaText)}
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  );
}
