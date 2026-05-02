import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Golden Horizons",
  description:
    "The retirement abroad magazine for Americans comparing cost of living, healthcare, visas, and lifestyle abroad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${garamond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
