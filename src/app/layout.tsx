import type { Metadata } from "next";
import "./globals.css";

// ─── Site-wide default metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://golden-horizons.org"),
  title: {
    default: "Golden Horizons — Retire Abroad on $2,000–$5,000/Month",
    template: "%s | Golden Horizons",
  },
  description:
    "Discover the world's best affordable retirement destinations. Real costs, visa guides, healthcare, and expat communities for Americans planning to retire abroad.",
  keywords:
    "retirement abroad, expat retirement, best places to retire, affordable retirement, retire overseas, expat communities, retire on social security",
  alternates: {
    canonical: "https://golden-horizons.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Golden Horizons — Retire Abroad on $2,000–$5,000/Month",
    description:
      "Discover the world's best affordable retirement destinations. Real costs, visa guides, and expat communities for Americans planning to retire abroad.",
    url: "https://golden-horizons.org",
    siteName: "Golden Horizons",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://golden-horizons.org/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Horizons — Retire Abroad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goldenhorizons2026",
    creator: "@goldenhorizons2026",
    title: "Golden Horizons — Retire Abroad on $2,000–$5,000/Month",
    description:
      "Discover affordable retirement destinations abroad. Real costs and expat guides for Americans.",
    images: ["https://golden-horizons.org/og-default.jpg"],
  },
};

// ─── Organization + WebSite JSON-LD ──────────────────────────────────────────
function SiteSchemas() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Golden Horizons",
    url: "https://golden-horizons.org",
    logo: "https://golden-horizons.org/logo.png",
    sameAs: ["https://www.instagram.com/goldenhorizons2026/"],
    description:
      "Retirement travel guides and destination rankings for Americans planning to retire abroad.",
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Golden Horizons",
    url: "https://golden-horizons.org",
    publisher: { "@type": "Organization", name: "Golden Horizons" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <SiteSchemas />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
