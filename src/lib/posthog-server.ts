import { PostHog } from "posthog-node";

export function getPostHogClient() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

// Helper function to track server-side events
export function trackServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, unknown>,
) {
  const client = getPostHogClient();

  client.capture({
    distinctId,
    event,
    properties,
  });

  // Important: flush events to ensure they are sent
  client.flush();
}
