"use client";

import { useEffect, useRef } from "react";

export function useScrollTracking(language: string) {
  const scrollDepthRef = useRef<Set<number>>(new Set());
  const sectionViewedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.floor((scrollTop / documentHeight) * 100);

          // Track scroll depth at 25%, 50%, 75%, and 90%
          const depths = [25, 50, 75, 90];
          depths.forEach((depth) => {
            if (scrollPercent >= depth && !scrollDepthRef.current.has(depth)) {
              scrollDepthRef.current.add(depth);
              // Removed analytics tracking
            }
          });

          // Track section views
          const sections = document.querySelectorAll("section[id]");
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible =
              rect.top < window.innerHeight * 0.5 &&
              rect.bottom > window.innerHeight * 0.5;

            if (isVisible && !sectionViewedRef.current.has(section.id)) {
              sectionViewedRef.current.add(section.id);
              // Removed analytics tracking
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Removed session start tracking

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [language]);

  // Reset tracking when language changes
  useEffect(() => {
    scrollDepthRef.current.clear();
    sectionViewedRef.current.clear();
  }, [language]);
}
