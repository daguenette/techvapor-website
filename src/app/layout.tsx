import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import { PostHogProvider } from "@/lib/contexts/PostHogProvider";
import "./globals.css";

// Critical CSS for LCP optimization
const criticalCSS = `
  .hero-optimized h1 { 
    font-size: 2.25rem !important; 
    font-weight: 700 !important; 
    line-height: 1.1 !important; 
    color: #111827 !important;
    letter-spacing: -0.025em !important;
    margin-bottom: 1.5rem !important;
  }
  @media (min-width: 640px) {
    .hero-optimized h1 { font-size: 3rem !important; }
  }
  @media (min-width: 1024px) {
    .hero-optimized h1 { font-size: 3.75rem !important; }
  }
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// TODO: Update all metadata with TechVapor information
export const metadata: Metadata = {
  metadataBase: new URL("https://techvapor.com"), // TODO: Update with actual domain
  title: "TechVapor - [TODO: Add your site title]",
  description:
    "[TODO: Add your company description for SEO - explain what TechVapor does and the value you provide]",
  keywords:
    "TechVapor, [TODO: Add relevant keywords for your business]",
  authors: [{ name: "TechVapor" }],
  icons: {
    icon: [
      { url: "/vh_logo.svg", type: "image/svg+xml" }, // TODO: Replace with your logo
      { url: "/vh_logo.svg", sizes: "any" }, // TODO: Replace with your logo
    ],
    shortcut: "/vh_logo.svg", // TODO: Replace with your logo
    apple: "/vh_logo.svg", // TODO: Replace with your logo
  },
  openGraph: {
    title: "TechVapor - [TODO: Add Open Graph title]",
    description:
      "[TODO: Add Open Graph description for social media sharing]",
    type: "website",
    locale: "en_CA", // TODO: Update if different locale
    siteName: "TechVapor",
    images: [
      {
        url: "/vh_logo.svg", // TODO: Replace with your logo
        width: 1024,
        height: 1024,
        alt: "TechVapor - [TODO: Add logo alt text]",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVapor - [TODO: Add Twitter card title]",
    description:
      "[TODO: Add Twitter card description]",
    images: ["/vh_logo.svg"], // TODO: Replace with your logo
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // Resource hints for performance
    "dns-prefetch": "//fonts.googleapis.com //fonts.gstatic.com",
    preconnect:
      "https://fonts.googleapis.com https://fonts.gstatic.com https://us.i.posthog.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <link rel="icon" href="/vh_logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/vh_logo.svg" />
        <link rel="apple-touch-icon" href="/vh_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <PostHogProvider>{children}</PostHogProvider>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
