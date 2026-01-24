"use client";

import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { POSTHOG_CONFIG } from "@/lib/config";

function PostHogTracking() {
  useEffect(() => {
    // Defer PostHog initialization until after page load
    const initializePostHog = () => {
      if (typeof window !== "undefined" && !posthog.__loaded) {
        // Get configuration from our config file
        const posthogKey = POSTHOG_CONFIG.key;
        const posthogHost = POSTHOG_CONFIG.host;

        console.log("[PostHog] Key length:", posthogKey?.length || 0);
        console.log("[PostHog] Host:", posthogHost);
        console.log("[PostHog] Environment:", process.env.NODE_ENV);

        if (
          posthogKey &&
          posthogKey.length > 10 &&
          posthogKey !== "undefined"
        ) {
          try {
            console.log("[PostHog] Attempting to initialize...");
            posthog.init(posthogKey, {
              api_host: "/ingest",
              ui_host: "https://us.posthog.com",
              person_profiles: "identified_only",
              capture_pageview: true, // Enable automatic pageview and pageleave tracking
              debug: process.env.NODE_ENV === "development",
              loaded: (posthogInstance) => {
                console.log("[PostHog] Successfully initialized and loaded");
                console.log("[PostHog] Instance:", posthogInstance);
              },
            });
            console.log("[PostHog] Init call completed");
          } catch (error) {
            console.error("[PostHog] Initialization error:", error);
          }
        } else {
          console.error("[PostHog] Invalid key - Key:", posthogKey);
          console.error(
            "[PostHog] This could be due to environment variable not being available",
          );
        }
      }
    };

    // Load PostHog after initial render to avoid blocking LCP
    if (document.readyState === "complete") {
      setTimeout(initializePostHog, 0);
    } else {
      window.addEventListener("load", initializePostHog);
      return () => window.removeEventListener("load", initializePostHog);
    }
  }, []);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <PostHogTracking />
      </Suspense>
      {children}
    </>
  );
}
