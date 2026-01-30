import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
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

export const metadata: Metadata = {
  // Temporary: simple, correct browser tab title. (We can refine SEO metadata later.)
  title: "Nettoyeur Technivapeur",
  robots: {
    index: true,
    follow: true,
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta name="theme-color" content="#dc2626" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        {/* Intentionally no custom favicon for now */}
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
        <LanguageProvider>{children}</LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
