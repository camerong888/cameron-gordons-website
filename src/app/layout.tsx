import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HashRedirect from "@/components/HashRedirect";
import { site } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Cameron Gordon" },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/og/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og/og-default.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Hardware Engineer",
  worksFor: { "@type": "Organization", name: "Draper" },
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Northeastern University" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-copper focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-[#0a0f14]"
          >
            Skip to content
          </a>
          <HashRedirect />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {site.cfBeaconToken && (
          // Mirrors Cloudflare's own snippet: a module script (so legacy
          // browsers skip it) that reads its token from data-cf-beacon.
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            type="module"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: site.cfBeaconToken })}
          />
        )}
      </body>
    </html>
  );
}
