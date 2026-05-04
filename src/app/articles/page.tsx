import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import ArticlesClient from "./ArticlesClient";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Retirement Abroad Articles, Guides & Cost Breakdowns | Golden Horizons",
  description:
    "Browse Golden Horizons retirement abroad articles covering cost of living, healthcare, visas, safety, housing, lifestyle, and the best places for Americans to retire overseas.",
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/articles`,
    siteName: "Golden Horizons",
    title: "Retirement Abroad Articles, Guides & Cost Breakdowns",
    description:
      "Explore retirement abroad guides for Americans comparing cost of living, healthcare, visas, safety, housing, lifestyle, and destination options overseas.",
    images: [
      {
        url: `${siteUrl}/European%20caffee.jpg`,
        width: 1200,
        height: 630,
        alt: "Golden Horizons retirement abroad magazine articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Abroad Articles, Guides & Cost Breakdowns",
    description:
      "Retirement abroad guides covering cost of living, healthcare, visas, safety, housing, lifestyle, and destination choices for Americans.",
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

export default async function ArticlesPage() {
  const slugs = await getAllArticleSlugs();

  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  const validArticles = articles.filter(
    (article): article is NonNullable<typeof article> => article !== null
  );

  const editorPick = validArticles[0] || null;

  // Keep the visible archive count consistent with the article grid count.
  // The editor pick is shown separately, so it should not be counted again
  // inside the archive list.
  const archiveArticles = editorPick ? validArticles.slice(1) : validArticles;

  const categoryGroups: Record<string, typeof archiveArticles> = {};

  archiveArticles.forEach((article) => {
    const category = article.category || "Uncategorized";

    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }

    categoryGroups[category].push(article);
  });

  const categories = Object.keys(categoryGroups).sort();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/articles#itemlist`,
    name: "Retirement Abroad Articles and Guides",
    description:
      "A library of Golden Horizons retirement abroad articles covering cost of living, healthcare, visas, safety, housing, lifestyle, and destinations.",
    url: `${siteUrl}/articles`,
    numberOfItems: archiveArticles.length,
    itemListElement: archiveArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `${siteUrl}/articles/${article.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/articles#breadcrumb`,
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
        name: "All Stories",
        item: `${siteUrl}/articles`,
      },
    ],
  };

  return (
    <main className="mag-page articles-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
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
          <Link href="/articles" className="active">
            All Stories
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="page-header">
          <span className="ph-kicker">The Archive</span>
          <h1 className="ph-title">
            Retirement Abroad Articles, Guides &amp; Cost Breakdowns
          </h1>
          <span className="ph-count">
            {archiveArticles.length} articles · Updated daily
          </span>
        </div>

        <ArticlesClient
          articles={archiveArticles}
          categoryGroups={categoryGroups}
          categories={categories}
          editorPick={editorPick}
        />

        <div className="ornament">— ✦ —</div>

        <section className="mag-cta" id="free-guide">
          <p className="kicker">Free Retirement Abroad Guide</p>
          <h2>Get the free guide before choosing where to retire.</h2>
          <p>
            Compare costs, healthcare, visas, and lifestyle across top
            retirement countries.
          </p>
          <Link href="/?scrollTo=subscribe" className="mag-button">
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
