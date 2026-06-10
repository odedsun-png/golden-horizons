import type { Metadata, Viewport } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import NewsletterPopup from "@/components/NewsletterPopupClient";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  verification: {
    google: "h5_IRMvaBEQ-kmjeoPnofkbISPpSXpSBVC3QgGK0VP8",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  metadataBase: new URL(siteUrl),

  title: {
    default: "Golden Horizons — Retirement Abroad Magazine",
    template: "%s | Golden Horizons",
  },

  description:
    "Golden Horizons is a premium retirement-abroad magazine helping Americans compare cost of living, healthcare, visas, safety, housing, and lifestyle in the best countries to retire abroad.",

  applicationName: "Golden Horizons",

  authors: [{ name: "Golden Horizons Editors" }],

  creator: "Golden Horizons",
  publisher: "Golden Horizons",

  keywords: [
    "retire abroad",
    "retirement abroad",
    "best places to retire abroad",
    "retire overseas",
    "cost of living abroad",
    "retirement destinations",
    "healthcare abroad",
    "visas for retirees",
    "retire on Social Security",
    "Golden Horizons",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Golden Horizons",
    title: "Golden Horizons — Retirement Abroad Magazine",
    description:
      "Compare the best places to retire abroad with real cost breakdowns, healthcare insights, visa guidance, safety notes, and lifestyle stories for Americans planning their next chapter.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Horizons — Retirement Abroad Magazine",
    description:
      "A premium retirement-abroad magazine for Americans comparing cost of living, healthcare, visas, safety, housing, and lifestyle overseas.",
  },

  category: "Retirement Travel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Golden Horizons",
  url: siteUrl,
  description: "Retirement abroad magazine for Americans.",
  publisher: {
    "@type": "Organization",
    name: "Golden Horizons",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${garamond.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <NewsletterPopup />
        {children}
      </body>
    </html>
  );
}
