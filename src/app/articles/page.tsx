import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'All Stories — Golden Horizons Magazine',
  description: 'Browse all retirement abroad articles from Golden Horizons — real costs, visa guides, healthcare reports, and destination deep-dives.',
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

  const editorPick = validArticles[0];

  return (
    <>
      <Header />

      <div className="site">
        <div className="gh-topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>April 2026</span>
        </div>

        <div className="gh-masthead">
          <div className="gh-dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>April 2026 · Issue 1</span>
          </div>
          <Link href="/" className="gh-mastname">Golden Horizons</Link>
          <div className="gh-issue-line">
            <span className="gh-issue-tag"><strong>This Issue:</strong> Where $2,000/month buys a life worth living</span>
            <span className="gh-issue-tag"><strong>Inside:</strong> The Money Page · The Destination Report · The Health File</span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link href="/">Cover</Link>
          <Link href="/articles" className="active">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/#free-guide">Subscribe Free</Link>
        </nav>

        <div className="page-header">
          <span className="ph-kicker">The Archive</span>
          <h1 className="ph-title">All Stories</h1>
          <span className="ph-count">{validArticles.length} articles · Updated daily</span>
        </div>

        <div className="gh-section-banner">Browse by Section</div>
        <div className="cat-index">
          <Link href="/articles" className="cat-cell active">
            <div className="cat-name">All Stories</div>
            <div className="cat-count">{validArticles.length} articles</div>
            <div className="cat-desc">Every destination we&rsquo;ve covered</div>
          </Link>
          {categories.map((category) => (
            <Link key={category} href={`/articles?category=${encodeURIComponent(category)}`} className="cat-cell">
              <div className="cat-name">{category}</div>
              <div className="cat-count">{categoryGroups[category].length} articles</div>
              <div className="cat-desc">Browse {category.toLowerCase()} stories</div>
            </Link>
          ))}
        </div>

        {editorPick && (
          <>
            <div className="gh-section-banner">Editor&rsquo;s Pick · This Week&rsquo;s Must-Read</div>
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

        <div className="gh-section-banner">Latest Stories</div>
        <div className="articles-grid">
          {validArticles.slice(1, 19).map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="art-card">
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
            <Link href="/articles" className="load-btn">Load More Stories</Link>
            <p className="load-count">Showing 18 of {validArticles.length} articles</p>
          </div>
        )}

        <div className="ornament">— ✦ —</div>
      </div>

      <Footer />
    </>
  );
}
