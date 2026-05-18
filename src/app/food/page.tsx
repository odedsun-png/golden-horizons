import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import FoodClient, { type SlimArticle } from "./FoodClient";

const siteUrl = "https://golden-horizons.org";

const FOOD_CATEGORIES = new Set([
  "food",
  "food culture",
  "street food",
  "seafood",
  "mediterranean",
  "breakfast",
  "local markets",
  "spices",
  "home cooking",
  "vegetarian",
  "comfort food",
  "grilling",
  "desserts",
  "bakery",
  "healthy food",
  "farm to table",
  "cooking techniques",
  "regional cuisine",
  "food history",
  "fermentation",
  "nordic food",
  "special food",
  "local cuisine",
]);

// Revalidate every 4 hours so the featured article rotates on schedule
export const revalidate = 14400;

export const metadata: Metadata = {
  title: "Food Abroad — Markets, Cuisine & Eating Well as a Retiree | Golden Horizons",
  description:
    "Food culture, local markets, street food, and everyday eating abroad for Americans retiring overseas. Explore flavors from Mediterranean kitchens to Asian markets.",
  alternates: {
    canonical: `${siteUrl}/food`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/food`,
    siteName: "Golden Horizons",
    title: "Food Abroad — Markets, Cuisine & Eating Well as a Retiree",
    description:
      "Food culture, local markets, street food, and everyday eating abroad for Americans retiring overseas.",
    images: [
      {
        url: `${siteUrl}/European%20caffee.jpg`,
        width: 1200,
        height: 630,
        alt: "Golden Horizons food culture and markets abroad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Abroad — Markets, Cuisine & Eating Well as a Retiree",
    description:
      "Food culture, local markets, street food, and everyday eating abroad for Americans retiring overseas.",
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

export default async function FoodPage() {
  const slugs = await getAllArticleSlugs();

  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  const foodArticles = articles
    .filter(
      (a): a is NonNullable<typeof a> =>
        a !== null &&
        FOOD_CATEGORIES.has((a.category || "").toLowerCase().trim())
    )
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  // Time-based rotation: same featured article for all visitors in the
  // same 4-hour window; advances deterministically without randomness.
  const windowIndex =
    foodArticles.length > 0
      ? Math.floor(Date.now() / (4 * 60 * 60 * 1000)) % foodArticles.length
      : 0;
  const featuredArticle = foodArticles[windowIndex] ?? null;
  const gridArticles = foodArticles.filter((_, i) => i !== windowIndex);

  const slimArticle = (a: (typeof foodArticles)[number]): SlimArticle => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    excerpt: a.excerpt,
    category: a.category,
    heroImage: a.heroImage,
    image: a.image,
    date: a.date,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/food#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Golden Horizons",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Food",
        item: `${siteUrl}/food`,
      },
    ],
  };

  return (
    <main className="mag-page articles-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="site">
        <div className="topbar">
          <span>Vol. 58, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>April 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>April 2026 · Issue 58</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>This Issue:</strong> Where $2,000/month buys a life worth
              living
            </span>
            <span className="issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report ·
              The Health File
            </span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food" className="active">
            Food
          </Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        {/* Single H1 for the page */}
        <div className="page-header">
          <span className="ph-kicker">The Food File</span>
          <h1 className="ph-title">Food</h1>
          <span className="ph-count">
            Food culture, markets, and everyday eating abroad for retirees and
            slow travelers.
            {foodArticles.length > 0 && ` · ${foodArticles.length} articles`}
          </span>
        </div>

        {/*
          FoodClient owns:
            1. Country search input + quick-filter buttons
            2. Rotating featured story (hidden during search)
            3. Article grid (hidden during search)
            4. Search results view
          The default SSR render (no search active) exposes all article
          links to crawlers for full SEO coverage.
        */}
        <FoodClient
          foodArticles={foodArticles.map(slimArticle)}
          featuredArticle={featuredArticle ? slimArticle(featuredArticle) : null}
          gridArticles={gridArticles.map(slimArticle)}
        />

        <div className="ornament">— ✦ —</div>

        <section className="mag-cta" id="free-guide">
          <p className="kicker">Free Retirement Abroad Guide</p>
          <h2>Get the free guide before choosing where to retire.</h2>
          <p>
            Compare costs, healthcare, visas, and lifestyle across top
            retirement countries.
          </p>
          <Link href="/#subscribe" className="mag-button">
            Get the Free Guide →
          </Link>
        </section>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>

          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>

          <div className="footer-links">
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
          </div>

          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 8 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
