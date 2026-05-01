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
        <div className="topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>2026 Edition</span>
        </div>

        <header className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
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

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles" className="active">
            All Stories
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/#free-guide">Get Free Guide</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link> &nbsp;›&nbsp; All Articles
        </div>

        <div className="section-banner">The Complete Golden Horizons Article Archive</div>

        <section className="archive-hero">
          <p className="kicker">Retirement Abroad Intelligence</p>
          <h1>All Golden Horizons Stories</h1>
          <p className="archive-lede">
            Every guide, destination deep-dive, and cost breakdown — organized by
            department. Real budgets, real tax processes, real healthcare experiences
            from Americans already living abroad.
          </p>
        </section>

        <section className="archive-content">
          <ArticlesClient articles={articles} />
        </section>

        <section className="mag-cta" id="free-guide">
          <p className="kicker">Free Retirement Abroad Guide</p>
          <h2>Get the free guide before choosing where to retire.</h2>
          <p>
            Compare costs, healthcare, visas, and lifestyle across top retirement
            countries before you decide.
          </p>
          <Link href="/#free-guide" className="mag-button">
            Get the Free Guide →
          </Link>
        </section>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>

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
