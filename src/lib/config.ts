// PostHog configuration
export const POSTHOG_CONFIG = {
  key:
    process.env.NEXT_PUBLIC_POSTHOG_KEY ||
    "phc_vxcbAJl2yhrwXkM37CMogAAy5vJqFwoYY6qLAG1CJaw",
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
} as const;

// Validate configuration
if (typeof window !== "undefined") {
  console.log(
    "[Config] PostHog Key:",
    POSTHOG_CONFIG.key ? "Found" : "Missing",
  );
  console.log("[Config] PostHog Host:", POSTHOG_CONFIG.host);
}
