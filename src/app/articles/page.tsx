import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'All Stories — Golden Horizons Magazine',
  description: 'Browse all retirement abroad articles from Golden Horizons.',
};

export default async function ArticlesPage() {
  const slugs = await getAllArticleSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticleBySlug(slug)));
  const validArticles = articles.filter((a) => a !== null);

  const categoryGroups: Record<string, typeof validArticles> = {};
  validArticles.forEach((article) => {
    const cat = article.category || 'Uncategorized';
    if (!categoryGroups[cat]) categoryGroups[cat] = [];
    categoryGroups[cat].push(article);
  });

  const categories = Object.keys(categoryGroups).sort();
  const editorPick = validArticles[0];

  return (
    <main className="mag-page">
      <div className="site">

        <div className="topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>April 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>April 2026 · Issue 1</span>
          </div>
          <Link href="/" className="mastname">Golden Horizons</Link>
          <div className="issue-line">
            <span className="issue-tag"><strong>This Issue:</strong> Where $2,000/month buys a life worth living</span>
            <span className="issue-tag"><strong>Inside:</strong> The Money Page · The Destination Report · The Health File</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles" className="active">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="page-header">
          <span className="ph-kicker">The Archive</span>
          <h1 className="ph-title">All Stories</h1>
          <span className="ph-count">{validArticles.length} articles · Updated daily</span>
        </div>

        <div className="section-banner">Browse by Section</div>
        <div className="cat-index">
          <Link href="/articles" className="cat-cell active">
            <div className="cat-name">All Stories</div>
            <div className="cat-count">{validArticles.length} articles</div>
            <div className="cat-desc">Every destination we&rsquo;ve covered</div>
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/articles?category=${encodeURIComponent(cat)}`}
              className="cat-cell"
            >
              <div className="cat-name">{cat}</div>
              <div className="cat-count">{categoryGroups[cat].length} articles</div>
              <div className="cat-desc">Browse {cat.toLowerCase()} stories</div>
            </Link>
          ))}
        </div>

        {editorPick && (
          <>
            <div className="section-banner">Editor&rsquo;s Pick · This Week&rsquo;s Must-Read</div>
            <div className="editor-pick">
              <div className="ep-img-wrap">
                <img
                  className="ep-img"
                  src={editorPick.heroImage || editorPick.image || 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=700'}
                  alt={editorPick.title}
                />
                <div className="ep-caption">
                  <p>{editorPick.excerpt || editorPick.description}</p>
                </div>
              </div>
              <div className="ep-content">
                <div className="ep-kicker">{editorPick.category || 'Featured'}</div>
                <Link href={`/articles/${editorPick.slug}`} className="ep-headline">
                  {editorPick.title}
                </Link>
                <p className="ep-body">{editorPick.description || editorPick.excerpt}</p>
                <Link href={`/articles/${editorPick.slug}`} className="ep-read">
                  Read the full story →
                </Link>
              </div>
            </div>
          </>
        )}

        <div className="section-banner">Latest Stories</div>
        <div className="articles-grid">
          {validArticles.slice(1, 19).map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="art-card"
            >
              <img
                className="art-thumb"
                src={article.heroImage || article.image || 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400'}
                alt={article.title}
              />
              <div className="art-cat">{article.category || 'Article'}</div>
              <div className="art-title">{article.title}</div>
              <span className="art-read">Read →</span>
            </Link>
          ))}
        </div>

        {validArticles.length > 19 && (
          <div className="load-more">
            <Link href="/articles" className="load-btn">
              Load More Stories
            </Link>
            <p className="load-count">
              Showing 18 of {validArticles.length} articles
            </p>
          </div>
        )}

        <div className="ornament">— ✦ —</div>

        <section className="mag-cta" id="free-guide">
          <p className="kicker">Free Retirement Abroad Guide</p>
          <h2>Get the free guide before choosing where to retire.</h2>
          <p>Compare costs, healthcare, visas, and lifestyle across top retirement countries.</p>
          <Link href="/#free-guide" className="mag-button">Get the Free Guide →</Link>
        </section>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <div className="footer-links">
            <Link href="/">Cover</Link><span>|</span>
            <Link href="/articles">Articles</Link><span>|</span>
            <Link href="/destinations">Destinations</Link><span>|</span>
            <Link href="/about">About</Link><span>|</span>
            <Link href="/privacy-policy">Privacy</Link><span>|</span>
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
