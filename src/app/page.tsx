import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Golden Horizons — Retirement Abroad Magazine for Americans",
  description:
    "Golden Horizons helps Americans compare the best places to retire abroad with real cost breakdowns, healthcare insights, visa guidance, safety notes, housing tips, and lifestyle stories.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Golden Horizons",
    title: "Golden Horizons — Retirement Abroad Magazine for Americans",
    description:
      "Discover where retirement abroad feels possible again. Compare cost of living, healthcare, visas, safety, housing, and lifestyle in the best countries for Americans.",
    images: [
      {
        url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Golden Horizons retirement abroad magazine cover story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Horizons — Retirement Abroad Magazine for Americans",
    description:
      "A premium retirement-abroad magazine helping Americans compare cost of living, healthcare, visas, safety, housing, and lifestyle overseas.",
    images: [
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
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
};

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Golden Horizons — Retirement Abroad Magazine for Americans",
    description:
      "Golden Horizons helps Americans compare the best places to retire abroad with real cost breakdowns, healthcare insights, visa guidance, safety notes, housing tips, and lifestyle stories.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: [
      "retirement abroad",
      "cost of living overseas",
      "healthcare abroad",
      "retirement visas",
      "best places to retire abroad",
    ],
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <HomeClient />
    </>
  );
}
