import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
