import { PostHog } from "posthog-node";

declare global {
  var posthog: PostHog | undefined;
}

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    globalThis.posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
  }
}
