/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found | Golden Horizons' };
  return {
    title: `${article.title} | Golden Horizons`,
    description: article.description || article.excerpt || '',
  };
}

export default async function ArticleDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const heroImage = article.heroImage || article.image || 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800';
  const category = article.category || 'Article';

  const relatedArticles = [
    {
      href: '/articles/comparison-portugal-vs-spain-which-is-the-better-retirement-destination-v2',
      thumb: 'https://images.pexels.com/photos/37304579/pexels-photo-37304579.jpeg?auto=compress&cs=tinysrgb&w=150',
      cat: 'Destination Report · Europe',
      title: 'Portugal vs Spain: Which Is Better for Retirement?',
    },
    {
      href: '/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2',
      thumb: 'https://images.pexels.com/photos/32754142/pexels-photo-32754142.jpeg?auto=compress&cs=tinysrgb&w=150',
      cat: 'The Money Page · Albania',
      title: 'What $1,000 a Month Gets You in Gjirokastër',
    },
    {
      href: '/articles/greece-oceanfront-living-in-crete-on-a-retirement-budget',
      thumb: 'https://images.pexels.com/photos/984877/pexels-photo-984877.jpeg?auto=compress&cs=tinysrgb&w=150',
      cat: 'The Beach Report · Greece',
      title: 'Oceanfront Living in Crete on a Retirement Budget',
    },
    {
      href: '/articles/ecuador-what-2000-a-month-gets-you-in-cuenca',
      thumb: 'https://images.pexels.com/photos/29817339/pexels-photo-29817339.jpeg?auto=compress&cs=tinysrgb&w=150',
      cat: 'The Money Page · Ecuador',
      title: 'What $2,000 a Month Gets You in Cuenca',
    },
    {
      href: '/articles/ireland-residency-options-for-american-retirees-v2',
      thumb: 'https://images.pexels.com/photos/154241/pexels-photo-154241.jpeg?auto=compress&cs=tinysrgb&w=150',
      cat: 'The Visa File · Ireland',
      title: 'Residency Options for American Retirees in Ireland',
    },
  ];

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

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/articles">All Stories</Link>
          <span> › </span>
          <Link href={`/articles?category=${encodeURIComponent(category)}`}>{category}</Link>
          <span> › </span>
          <span style={{ color: '#1e1408' }}>{article.title.slice(0, 40)}…</span>
        </div>

        <div className="article-layout">
          <div className="article-main">

            <div className="art-kicker">{category}</div>
            <h1 className="art-headline">{article.title}</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Reviewed by Golden Horizons Editors</span>
              <span>Updated: {article.date} · {article.readTime || '3 min read'}</span>
            </div>

            <div className="hero-img-wrap">
              <img className="hero-img" src={heroImage} alt={article.title} />
            </div>
            <div className="img-caption">
              {article.title} — golden-horizons.org
            </div>

            {article.excerpt && (
              <p className="art-intro">{article.excerpt}</p>
            )}

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Money Page</div>
                <div className="dyk-text">The average American can live comfortably in Portugal for $2,200/month — including rent, food, and healthcare.</div>
              </div>
            </div>

            <div
              className="art-article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="ornament">— ✦ —</div>

            <div className="disclaimer">
              The information in this article is for general informational purposes only. Costs, visa requirements, healthcare policies, and local conditions change frequently. Always verify current details with official government sources and consult a licensed advisor before making relocation decisions. Golden Horizons does not provide legal, financial, or medical advice.
            </div>

            <Link href="/articles" className="back-link">← Back to all stories</Link>

          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;Most people plan carefully for retirement. Almost none plan where to live it.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/golden_horizons_final.pdf" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label">More from {category}</div>

            {relatedArticles.map((rel) => (
              <Link key={rel.href} href={rel.href} className="rel-item">
                <img className="rel-thumb" src={rel.thumb} alt={rel.title} />
                <div>
                  <div className="rel-cat">{rel.cat}</div>
                  <div className="rel-title">{rel.title}</div>
                  <span className="rel-read">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <div className="footer-links">
            <Link href="/">Website</Link><span>|</span>
            <Link href="/articles">All Stories</Link><span>|</span>
            <Link href="/destinations">Destinations</Link><span>|</span>
            <Link href="/about">About</Link><span>|</span>
            <Link href="/privacy-policy">Privacy</Link><span>|</span>
            <Link href="/contact">Contact</Link><span>|</span>
            <Link href="/terms-of-use">Terms</Link>
          </div>
          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>© 2026 Golden Horizons — All rights reserved</p>
        </footer>

      </div>
    </main>
  );
}
