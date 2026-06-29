import type { Metadata } from "next";
import Link from "next/link";
import { Search, Check } from "lucide-react";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import FoodClient, { type SlimArticle } from "./FoodClient";
import styles from "./Food.module.css";

const CATEGORY_TILES = [
  {
    name: "Cheap Local Meals",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Best Food Markets",
    image:
      "https://images.pexels.com/photos/10023264/pexels-photo-10023264.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Comfort Food Abroad",
    image:
      "https://images.pexels.com/photos/27535815/pexels-photo-27535815.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Seafood Countries",
    image:
      "https://images.pexels.com/photos/10067622/pexels-photo-10067622.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Street Food Guides",
    image:
      "https://images.pexels.com/photos/10162327/pexels-photo-10162327.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Retiree-Friendly Eating",
    image:
      "https://images.pexels.com/photos/10194835/pexels-photo-10194835.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
];

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
    readTime: a.readTime,
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
          <span>Vol. 60, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>June 2026</span>
        </div>

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
          <Link href="/subscribe">Subscribe Free</Link>
        </nav>

        {/* Hero */}
      <section className={styles.hero} aria-labelledby="food-hero-heading">
        <img
          className={styles.heroImg}
          src="/European%20caffee.jpg"
          alt="A warm European street café and outdoor market scene"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <p className={styles.heroKicker}>The Food File</p>
            {/* Single H1 for the page */}
            <h1 id="food-hero-heading" className={styles.heroTitle}>
              Food Abroad, Without the Tourist Filter
            </h1>
            <p className={styles.heroSub}>
              Real meals. Local markets. Food prices that make sense.
              Cultural eating habits for retirees and slow travelers.
              {foodArticles.length > 0 && ` · ${foodArticles.length} stories`}
            </p>
          </div>
        </div>
      </section>

      {/*
        FoodClient owns:
          1. Search bar + country chips
          2. Rotating featured story / Editor's Pick (hidden during search)
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

      {/* Browse by what matters most */}
      <div className={styles.sectionTitleRow}>
        <span className={styles.sectionRule} aria-hidden="true" />
        <h2 className={styles.sectionTitle}>Browse by What Matters Most</h2>
        <span className={styles.sectionRule} aria-hidden="true" />
      </div>
      <div className={styles.categoryGrid}>
        {CATEGORY_TILES.map((tile) => (
          <a key={tile.name} href="#food-stories" className={styles.categoryCard}>
            <img
              className={styles.categoryBg}
              src={tile.image}
              alt=""
              aria-hidden="true"
            />
            <span className={styles.categoryIcon} aria-hidden="true">
              <Search size={20} />
            </span>
            <span className={styles.categoryName}>{tile.name}</span>
          </a>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className={styles.newsletter} id="free-guide">
        <img
          className={styles.newsletterImg}
          src="/European%20caffee.jpg"
          alt="Coffee and a travel journal on a café table"
        />
        <div className={styles.newsletterBody}>
          <h2 className={styles.newsletterHeadline}>
            Get 3 real retirement-abroad stories every morning
          </h2>
          <p className={styles.newsletterSub}>
            Practical insights on food, cost of living, healthcare, and the
            best places to live well abroad.
          </p>
          <form className={styles.newsletterForm} action="/subscribe">
            <label
              htmlFor="newsletter-email"
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
              }}
            >
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterBtn}>
              Subscribe Free
            </button>
          </form>
          <p className={styles.trustLine}>No spam. Unsubscribe anytime.</p>
          <ul className={styles.benefitList}>
            <li>
              <Check size={14} aria-hidden="true" /> 100% Free
            </li>
            <li>
              <Check size={14} aria-hidden="true" /> Unbiased &amp; Practical
            </li>
            <li>
              <Check size={14} aria-hidden="true" /> Trusted by Readers
            </li>
          </ul>
        </div>
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
