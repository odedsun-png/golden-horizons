import type { Metadata } from "next";
import SubscribeClient from "./SubscribeClient";

const siteUrl = "https://golden-horizons.org";
const ogImage =
  "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200";

export const metadata: Metadata = {
  title: "Subscribe Free — Golden Horizons | Retire Abroad on Your Terms",
  description:
    "One real retirement-abroad story in your inbox every morning. Real costs. Real visas. Real life. Free forever.",
  alternates: {
    canonical: `${siteUrl}/subscribe`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/subscribe`,
    siteName: "Golden Horizons",
    title:
      "Join readers planning their next chapter abroad — free daily newsletter",
    description:
      "One real retirement-abroad story in your inbox every morning. Real costs. Real visas. Real life. Free forever.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 800,
        alt: "Golden Horizons — Free Daily Retirement Abroad Newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Join readers planning their next chapter abroad — free daily newsletter",
    description:
      "One real retirement-abroad story in your inbox every morning. Real costs. Real visas. Real life. Free forever.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SubscribePage() {
  return <SubscribeClient />;
}
