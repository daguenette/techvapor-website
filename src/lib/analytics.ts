import posthog from "posthog-js";

// Ensure PostHog is only used on client-side
const isClient = typeof window !== "undefined";

// Helper function to check if PostHog is properly initialized
const isPostHogReady = () => {
  return isClient && posthog && posthog.__loaded;
};

// Analytics utility functions for consistent tracking
export const analytics = {
  // User identification
  identify: (userId: string, properties?: Record<string, unknown>) => {
    if (isPostHogReady()) {
      posthog.identify(userId, properties);
    }
  },

  // Generic event tracking
  track: (event: string, properties?: Record<string, unknown>) => {
    if (isPostHogReady()) {
      posthog.capture(event, properties);
    } else {
      console.warn(`[Analytics] PostHog not ready, skipping event: ${event}`);
    }
  },

  // Page view tracking (handled automatically by PostHogProvider)
  pageView: (url?: string) => {
    if (isPostHogReady()) {
      posthog.capture("$pageview", {
        $current_url: url || window.location.href,
      });
    }
  },

  // Business-specific events
  business: {
    // Contact form interactions
    contactFormStarted: (language: string) => {
      analytics.track("contact_form_started", {
        language,
        form_type: "contact_message",
        timestamp: new Date().toISOString(),
      });
    },

    contactFormSubmitted: (
      language: string,
      formData: { name: string; email: string; message: string },
    ) => {
      analytics.track("contact_form_submitted", {
        language,
        form_type: "contact_message",
        has_name: !!formData.name,
        has_email: !!formData.email,
        has_message: !!formData.message,
        message_length: formData.message.length,
        timestamp: new Date().toISOString(),
      });
    },

    // CTA button clicks
    scheduleCallClicked: (language: string, source: string) => {
      analytics.track("schedule_call_clicked", {
        language,
        source,
        timestamp: new Date().toISOString(),
      });
    },

    // Navigation tracking
    sectionViewed: (section: string, language: string) => {
      analytics.track("section_viewed", {
        section,
        language,
        timestamp: new Date().toISOString(),
      });
    },

    // Language switching
    languageChanged: (fromLanguage: string, toLanguage: string) => {
      analytics.track("language_changed", {
        from_language: fromLanguage,
        to_language: toLanguage,
        timestamp: new Date().toISOString(),
      });
    },

    // Service interest tracking
    serviceInteractionStarted: (service: string, language: string) => {
      analytics.track("service_interaction_started", {
        service,
        language,
        timestamp: new Date().toISOString(),
      });
    },

    // Use case interest
    useCaseViewed: (useCase: string, category: string, language: string) => {
      analytics.track("use_case_viewed", {
        use_case: useCase,
        category,
        language,
        timestamp: new Date().toISOString(),
      });
    },

    // Engagement metrics
    scrollDepth: (depth: number, language: string) => {
      analytics.track("scroll_depth", {
        depth_percentage: depth,
        language,
        timestamp: new Date().toISOString(),
      });
    },

    // Time on site tracking
    sessionStart: (language: string) => {
      analytics.track("session_start", {
        language,
        timestamp: new Date().toISOString(),
        user_agent: isClient ? navigator.userAgent : undefined,
        screen_resolution: isClient
          ? `${window.screen.width}x${window.screen.height}`
          : undefined,
      });
    },
  },
};

// Set up user properties
export const setUserProperties = (properties: Record<string, unknown>) => {
  if (isClient && posthog) {
    posthog.people.set(properties);
  }
};

// Set up super properties (sent with every event)
export const setSuperProperties = (properties: Record<string, unknown>) => {
  if (isClient && posthog) {
    posthog.register(properties);
  }
};
