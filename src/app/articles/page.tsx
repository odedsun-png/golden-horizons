import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
  title: "All Stories — Golden Horizons Magazine",
  description: "Browse all retirement abroad articles from Golden Horizons.",
};

export default async function ArticlesPage() {
  const slugs = await getAllArticleSlugs();
  const articles = await Promise.all(
    slugs.map((slug) => getArticleBySlug(slug))
  );

  const validArticles = articles.filter((article) => article !== null);

  const categoryGroups: Record<string, typeof validArticles> = {};

  validArticles.forEach((article) => {
    const category = article.category || "Uncategorized";

    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }

    categoryGroups[category].push(article);
  });

  const categories = Object.keys(categoryGroups).sort();
  const editorPick = validArticles[0];

  return (
    <main className="mag-page articles-page">
      <div className="site">
        <div className="topbar">
          <span>Vol. I, No. 1</span>
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
            <span>April 2026 · Issue 1</span>
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
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="page-header">
          <span className="ph-kicker">The Archive</span>
          <h1 className="ph-title">All Stories</h1>
          <span className="ph-count">
            {validArticles.length} articles · Updated daily
          </span>
        </div>

        <ArticlesClient
          articles={validArticles}
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
          <Link href="/#free-guide" className="mag-button">
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
            <Link href="/">Cover</Link>
            <span>|</span>
            <Link href="/articles">Articles</Link>
            <span>|</span>
            <Link href="/destinations">Destinations</Link>
            <span>|</span>
            <Link href="/about">About</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy</Link>
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
