import Link from "next/link";
import { getArticleCards } from "@/lib/markdown";
import ArticlesClient from "./ArticlesClient";

export const metadata = {
  title: "Articles — Golden Horizons",
  description:
    "Retirement destination guides, cost breakdowns, healthcare tips, and expat stories for Americans planning life abroad.",
};

export default function ArticlesPage() {
  const articles = getArticleCards();

  return (
    <main className="mag-page">
      <div className="site">
        {/* Topbar */}
        <div className="topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>2026 Edition</span>
        </div>

        {/* Masthead */}
        <header className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What’s Next</span>
            <span>Articles Archive</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Money</strong> · Healthcare · Visas · Lifestyle · Real Stories
            </span>
          </div>
        </header>

        {/* Nav */}
        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles" className="active">
            All Stories
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/#free-guide">Get Free Guide</Link>
        </nav>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Cover</Link> &nbsp;›&nbsp; All Articles
        </div>

        {/* Section Banner */}
        <div className="section-banner">The Complete Golden Horizons Article Archive</div>

        {/* Page Intro */}
        <section className="archive-hero">
          <p className="kicker">Retirement Abroad Intelligence</p>

          <h1>All Articles</h1>

          <p className="archive-lede">
            Practical retirement-abroad guides for Americans comparing cost of living,
            healthcare, visas, housing, taxes, safety, and lifestyle across the world’s
            most popular retirement destinations.
          </p>
        </section>

        {/* Articles Grid Client */}
        <section className="archive-content">
          <ArticlesClient articles={articles} />
        </section>

        {/* Bottom CTA */}
        <section className="mag-cta" id="free-guide">
          <p className="kicker">Free Retirement Abroad Guide</p>
          <h2>Not sure where to start?</h2>
          <p>
            Get the Golden Horizons retirement-abroad guide with cost comparisons,
            healthcare notes, visa basics, and destination ideas.
          </p>
          <Link href="/#free-guide" className="mag-button">
            Get the Free Guide →
          </Link>
        </section>

        {/* Footer */}
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren’t done yet.</p>

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

          <p className="copyright">© 2026 Golden Horizons — All rights reserved</p>
        </footer>
      </div>
    </main>
  );
}
