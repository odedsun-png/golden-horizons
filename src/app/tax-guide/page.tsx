import type { Metadata } from "next";
import Link from "next/link";
import TaxGuideClient from "./TaxGuideClient";
import { taxGuideCountries } from "./taxGuideData";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title:
    "Tax Guide: 35 Countries Where Retirees Can Stretch Retirement Income Abroad",
  description:
    "Compare 35 tax-friendly retirement destinations, including countries with territorial tax systems, low flat-tax programs, retiree visas, and treaty advantages for Americans considering retirement abroad.",
  keywords: [
    "retire abroad tax guide",
    "tax-friendly countries for retirees",
    "retire overseas taxes",
    "retirement visa countries",
    "Panama Pensionado Visa",
    "Greece 7% tax retiree program",
    "Italy retiree flat tax",
    "France US tax treaty pensions",
    "best countries to retire abroad",
  ],
  alternates: {
    canonical: `${siteUrl}/tax-guide`,
  },
  openGraph: {
    type: "article",
    url: `${siteUrl}/tax-guide`,
    siteName: "Golden Horizons",
    title: "35 Countries Where Retirees Can Stretch Retirement Income Abroad",
    description:
      "Explore retirement destinations with potential tax advantages, special visa paths, foreign-income rules, and official-document verification guidance.",
    images: [
      {
        url: `${siteUrl}/European%20caffee.jpg`,
        width: 1200,
        height: 630,
        alt: "Golden Horizons Tax Guide — retirement destinations with tax advantages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "35 Countries Where Retirees Can Stretch Retirement Income Abroad",
    description:
      "Explore retirement destinations with potential tax advantages, special visa paths, and foreign-income rules for Americans.",
    images: [`${siteUrl}/European%20caffee.jpg`],
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/tax-guide#webpage`,
  url: `${siteUrl}/tax-guide`,
  name: "Tax Guide: 35 Countries Where Retirees Can Stretch Retirement Income Abroad",
  description:
    "Compare 35 tax-friendly retirement destinations with territorial tax systems, flat-rate programs, retiree visas, and US treaty advantages for Americans retiring abroad.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    url: siteUrl,
    name: "Golden Horizons",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Golden Horizons", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Tax Guide", item: `${siteUrl}/tax-guide` },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Americans still pay US taxes when living abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The United States taxes citizens on worldwide income regardless of where they reside. Americans living abroad must generally continue filing US tax returns annually. However, provisions such as the Foreign Earned Income Exclusion (FEIE), Foreign Tax Credit, and bilateral tax treaties may reduce or offset US tax liability in certain circumstances. Always consult a qualified international tax professional.",
      },
    },
    {
      "@type": "Question",
      name: "What is a territorial tax system and how does it benefit retirees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Countries with territorial tax systems generally only tax income earned within their borders. For retirees receiving pension income or Social Security sourced from outside the country, this may mean that income is not subject to local taxation — depending on residency status and income type. Always verify official rules before making any tax or residency decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Foreign Earned Income Exclusion (FEIE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FEIE allows qualifying Americans abroad to exclude a portion of foreign-earned income from US federal income tax (up to $126,500 for 2024). It applies only to earned income — not passive income, US pensions, or Social Security. To qualify you must meet the Physical Presence Test or Bona Fide Residence Test. Consult a qualified CPA for your specific circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "What is an income tax treaty and how does it protect retirees abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The US has bilateral income tax treaties with dozens of countries that determine which country has the right to tax specific income types — pensions, Social Security, dividends, or capital gains — and at what rates. Treaty provisions are complex and depend on residency status and income type. A qualified international tax advisor should review your specific situation.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I typically need to establish foreign tax residency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common documents may include: proof of long-term housing, proof of pension or retirement income, certified bank statements, prior-year US tax returns, valid passport, apostilled criminal background check, medical insurance documentation, and proof of local residency registration. Requirements vary significantly by country. Consult an immigration attorney and local tax advisor before applying.",
      },
    },
    {
      "@type": "Question",
      name: "Are Social Security benefits taxable when I live abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social Security benefits may remain subject to US income tax for Americans living abroad. However, some bilateral tax treaties include provisions that affect how Social Security is taxed in your country of residence. Rules vary by treaty country. Verify current IRS guidance, applicable treaty provisions, and consult a qualified international tax advisor.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Foreign Tax Credit and can it eliminate double taxation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you pay income tax to a foreign country, you may be eligible to claim a US Foreign Tax Credit to reduce your US tax liability dollar-for-dollar on the same income, helping prevent double taxation. It is subject to limitations and complex IRS rules. A qualified CPA specializing in expat taxation should evaluate your individual situation.",
      },
    },
    {
      "@type": "Question",
      name: "Should I consult a tax professional before retiring abroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — strongly recommended. International tax situations are among the most complex in personal finance. Laws change frequently, treaty provisions are nuanced, FBAR and FATCA compliance adds reporting obligations, and circumstances vary widely. Working with a CPA who specializes in US expat taxation and a qualified local advisor in your destination country is strongly recommended before making any residency or tax decisions.",
      },
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/tax-guide#itemlist`,
  name: "35 Countries Where Retirees Can Stretch Retirement Income Abroad",
  description:
    "A curated list of 35 retirement destinations with potential tax advantages, including territorial tax systems, flat-rate programs, and US treaty advantages.",
  url: `${siteUrl}/tax-guide`,
  numberOfItems: taxGuideCountries.length,
  itemListElement: taxGuideCountries.map((country, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: country.country,
    description: country.seoSummary,
  })),
};

export default function TaxGuidePage() {
  return (
    <main className="mag-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="site">
        {/* TOPBAR */}
        <div className="topbar">
          <span>Vol. 60, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>June 2026</span>
        </div>

        {/* MASTHEAD */}
        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>June 2026 · Issue 60</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>This Issue:</strong> Where $2,000/month buys a life worth living
            </span>
            <span className="issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report · The Health File
            </span>
          </div>
        </div>

        {/* NAV */}
        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food">Food</Link>
          <Link href="/tax-guide" className="active">
            Tax Guide
          </Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        {/* CLIENT COMPONENT — ALL INTERACTIVE CONTENT */}
        <TaxGuideClient />

        {/* FOOTER */}
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <nav className="footer-links" aria-label="Footer legal navigation">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Use</Link>
            <span>|</span>
            <Link href="/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <span>|</span>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <span>|</span>
            <Link href="/contact">Contact</Link>
            <span>|</span>
            <a
              href="https://www.instagram.com/goldenhorizons2026/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </nav>
          <p style={{ fontSize: 11, opacity: 0.7 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
