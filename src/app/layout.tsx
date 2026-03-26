import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Golden Horizons — Your Guide to Retirement Abroad",
  description: "Discover the world's best retirement destinations. Expert guides on healthcare, food, activities, and expat communities for retirees planning to live abroad.",
  keywords: "retirement abroad, expat retirement, best places to retire, retirement destinations, retire overseas, expat communities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
