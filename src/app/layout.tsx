import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HashRedirect from "@/components/HashRedirect";
import { site } from "@/data/site";

// Apple devices render SF Pro from the system stack (see globals.css); Inter
// stands in everywhere else. It isn't preloaded, so only browsers that fall
// back to it download it.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  axes: ["opsz"],
  preload: false,
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2.5 focus:z-[100] focus:rounded-full focus:bg-btn focus:px-4 focus:py-2 focus:text-meta focus:font-medium focus:text-btn-ink"
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
