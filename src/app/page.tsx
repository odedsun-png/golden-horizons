import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'All Articles — Golden Horizons Magazine',
  description:
    'Browse all retirement abroad articles from Golden Horizons — real costs, visa guides, healthcare reports, and destination deep-dives.',
};

export default async function ArticlesPage() {
  const slugs = await getAllArticleSlugs();

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticleBySlug(slug);
      return article;
    })
  );

  const validArticles = articles.filter((article) => article !== null);

  const categoryGroups: Record<string, typeof validArticles> = {};

  validArticles.forEach((article) => {
    const category = article.category || 'Uncategorized';

    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }

    categoryGroups[category].push(article);
  });

  const categories = Object.keys(categoryGroups).sort();

  return (
    <>
      <Header />

      <div className="site">
        <div className="gh-topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>April 2026</span>
        </div>

        <div className="gh-masthead">
          <div className="gh-dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>April 2026 · Issue 1</span>
          </div>

          <Link href="/" className="gh-mastname">
            Golden Horizons
          </Link>

          <div className="gh-issue-line">
            <span className="gh-issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report · The Health File
            </span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link href="/">Cover</Link>
          <Link href="/articles" className="active">
            All Stories
          </Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/#free-guide">Get Free Guide</Link>
        </nav>

        <div className="gh-breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <span style={{ color: '#1e1408' }}>All Stories</span>
        </div>

        <div className="gh-section-banner">
          All Stories · {validArticles.length} Articles
        </div>

        <div
          style={{
            padding: '32px 36px',
            borderBottom: '2px solid #1e1408',
          }}
        >
          <div className="gh-section-stamp">The Complete Archive</div>

          <h1 className="gh-heading-1" style={{ marginBottom: '16px' }}>
            All Golden Horizons Stories
          </h1>

          <p
            className="gh-body-text"
            style={{ maxWidth: '720px', marginBottom: 0 }}
          >
            Every guide, destination deep-dive, and cost breakdown — organized by
            department. Real budgets, real visa processes, real healthcare experiences
            from Americans already living abroad.
          </p>
        </div>

        <div style={{ padding: '32px 36px', background: '#faf5e9' }}>
          {categories.map((category) => (
            <section key={category} style={{ marginBottom: '48px' }}>
              <div className="gh-mag-section-label">{category}</div>

              <div style={{ display: 'grid', gap: '18px' }}>
                {categoryGroups[category].map((article) => {
                  const heroImage = article.heroImage || article.image || '';

                  return (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <article
                        className="gh-story-item"
                        style={{
                          display: 'grid',
                          gridTemplateColumns: heroImage ? '200px 1fr' : '1fr',
                          gap: '16px',
                          alignItems: 'start',
                        }}
                      >
                        {heroImage && (
                          <img
                            src={heroImage}
                            alt={article.title}
                            className="gh-story-img"
                            style={{
                              width: '200px',
                              height: '130px',
                              objectFit: 'cover',
                            }}
                          />
                        )}

                        <div>
                          <div className="gh-story-cat">
                            {article.category || 'Article'}
                          </div>

                          <h3
                            className="gh-story-title"
                            style={{ marginBottom: '6px' }}
                          >
                            {article.title}
                          </h3>

                          {article.excerpt && (
                            <p
                              style={{
                                fontSize: '16px',
                                color: '#2b1a00',
                                lineHeight: 1.6,
                                marginBottom: '6px',
                                fontFamily: 'EB Garamond, serif',
                              }}
                            >
                              {article.excerpt}
                            </p>
                          )}

                          <div
                            style={{
                              fontSize: '12px',
                              color: '#8b6914',
                              fontFamily: 'EB Garamond, serif',
                            }}
                          >
                            {article.date} · {article.readTime || '3 min read'}
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <section
          id="free-guide"
          style={{
            background: '#1e1408',
            padding: '40px 36px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '12px',
                fontFamily: 'EB Garamond, serif',
              }}
            >
              Free Reader Guide
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '32px',
                fontWeight: 700,
                color: '#faf5e9',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}
            >
              Get the Free Retirement Abroad Guide
            </h2>

            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#d4c4a0',
                marginBottom: '20px',
                fontFamily: 'EB Garamond, serif',
              }}
            >
              Compare costs, healthcare, visas, and lifestyle across top retirement
              countries before you decide.
            </p>

            <Link
              href="/#free-guide"
              style={{
                display: 'inline-block',
                background: '#c9a84c',
                color: '#1e1408',
                padding: '15px 32px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                fontFamily: 'Playfair Display, serif',
                textDecoration: 'none',
                border: '2px solid #c9a84c',
                transition: 'all 0.15s',
              }}
            >
              Get the Free Guide →
            </Link>

            <p
              style={{
                fontSize: '12px',
                color: '#d4c4a0',
                marginTop: '12px',
                fontFamily: 'EB Garamond, serif',
              }}
            >
              Free by email · No spam · Unsubscribe anytime
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
