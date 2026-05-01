import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';

type PageParams = Promise<{ slug: string }>;

type RelatedArticle = {
  slug: string;
  title: string;
  excerpt?: string;
};

function isRelatedArticle(item: unknown): item is RelatedArticle {
  if (!item || typeof item !== 'object') return false;
  const value = item as { slug?: unknown; title?: unknown; excerpt?: unknown };
  return typeof value.slug === 'string' && typeof value.title === 'string';
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Golden Horizons',
      description: 'This Golden Horizons article could not be found.',
    };
  }

  return {
    title: `${article.title} | Golden Horizons`,
    description: article.description || article.excerpt || 'Retirement abroad guidance from Golden Horizons.',
    openGraph: {
      title: `${article.title} | Golden Horizons`,
      description: article.description || article.excerpt || 'Retirement abroad guidance from Golden Horizons.',
      type: 'article',
      images: article.heroImage || article.image ? [article.heroImage || article.image] : [],
    },
  };
}

export default async function ArticlePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const heroImage = article.heroImage || article.image || '';
  const relatedArticles: RelatedArticle[] = Array.isArray(article.relatedArticles)
    ? article.relatedArticles.filter(isRelatedArticle)
    : [];

  const articleDescription = article.description || article.excerpt || 'Retirement abroad guidance from Golden Horizons.';
  const articleDate = article.datePublished || article.date || '2026';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: articleDescription,
    image: heroImage || undefined,
    author: {
      '@type': 'Organization',
      name: article.author || 'Golden Horizons Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Golden Horizons',
      logo: {
        '@type': 'ImageObject',
        url: 'https://golden-horizons.org/logo.png',
      },
    },
    datePublished: articleDate,
    dateModified: article.dateModified || articleDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://golden-horizons.org/articles/${slug}`,
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
          
          .mag-topbar { background: #1e1408; padding: 7px 36px; display: flex; justify-content: space-between; align-items: center; }
          .mag-topbar span { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: #c9a84c; font-family: 'EB Garamond', serif; }
          
          .mag-masthead { padding: 20px 36px 15px; text-align: center; border-bottom: 3px double #1e1408; background: #faf5e9; }
          .mag-dateline { display: flex; justify-content: space-between; font-size: 11px; color: #8b6914; border-bottom: 1px solid #c9a84c; padding-bottom: 9px; margin-bottom: 11px; font-family: 'EB Garamond', serif; }
          .mag-mastname { font-family: 'Playfair Display', serif; font-size: 58px; font-weight: 900; color: #1e1408; line-height: 1; letter-spacing: -2px; text-decoration: none; display: block; }
          .mag-issue-line { font-size: 12px; font-style: italic; color: #8b6914; margin-top: 7px; font-family: 'EB Garamond', serif; }
          
          .mag-breadcrumb { background: #faf5e9; border-bottom: 1px solid #c9a84c; padding: 9px 36px; font-size: 12px; color: #8b6914; font-style: italic; font-family: 'EB Garamond', serif; }
          .mag-breadcrumb a { color: #8b6914; text-decoration: underline; }
          
          .mag-section-banner { background: #1e1408; padding: 6px 36px; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #c9a84c; font-family: 'EB Garamond', serif; }
          
          .mag-section-stamp { display: inline-block; background: #1e1408; color: #c9a84c; padding: 4px 12px; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; font-family: 'EB Garamond', serif; margin-bottom: 12px; }
          
          .mag-ornamental { text-align: center; color: #c9a84c; font-size: 14px; margin: 32px 0; font-family: 'EB Garamond', serif; }
          
          .mag-vintage-img { filter: contrast(1.06) saturate(0.82) brightness(0.86) sepia(0.18); }
          
          .mag-article-body { font-family: 'EB Garamond', serif; font-size: 20px; line-height: 1.88; color: #1a0f00; }
          .mag-article-body h2 { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 700; color: #1e1408; margin-top: 48px; margin-bottom: 18px; border-bottom: 2px solid #1e1408; padding-bottom: 8px; }
          .mag-article-body p { margin-bottom: 24px; }
          .mag-article-body a { color: #8b6914; text-decoration: underline; font-weight: 500; }
          .mag-article-body a:hover { color: #1e1408; }
          
          .mag-sidebar-cta { background: #1e1408; border: 2px solid #c9a84c; border-radius: 4px; padding: 24px; text-align: center; margin-bottom: 24px; }
          .mag-sidebar-section { background: white; border: 1px solid #d8c28a; border-radius: 4px; padding: 20px; margin-bottom: 24px; }
          
          .hide-mob { display: block; }
          
          @media (max-width: 1024px) {
            .mag-topbar { padding: 6px 16px; }
            .mag-mastname { font-size: 36px; letter-spacing: -1px; }
            .mag-breadcrumb, .mag-section-banner { padding-left: 16px; padding-right: 16px; }
            .mag-article-body { font-size: 18px; line-height: 1.78; }
            .mag-article-body h2 { font-size: 26px; margin-top: 32px; }
            .hide-mob { display: none; }
          }
        `
      }} />

      <Header />

      <div className="mag-topbar">
        <span>Vol. I, No. 1</span>
        <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
        <span>April 2026</span>
      </div>

      <div className="mag-masthead">
        <div className="mag-dateline">
          <span>The Retirement Abroad Magazine</span>
          <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
          <span>April 2026 · Issue 1</span>
        </div>
        <Link href="/" className="mag-mastname">Golden Horizons</Link>
        <div className="mag-issue-line">
          {article.category || 'Feature Article'} · {articleDate}
        </div>
      </div>

      <div className="mag-breadcrumb">
        <Link href="/">Cover</Link>
        <span> › </span>
        <Link href="/articles">All Stories</Link>
        <span> › </span>
        <span style={{ color: '#1e1408' }}>{article.category || 'Article'}</span>
      </div>

      <div className="mag-section-banner">
        {article.category || 'Feature'} · {articleDate}
      </div>

      <article style={{ background: '#faf5e9', padding: '48px 36px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="mag-section-stamp">{article.category || 'The Main Feature'}</div>
          
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 900, color: '#1e1408', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1px' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', fontSize: '13px', color: '#6f5620', borderTop: '1px solid #c9a84c', borderBottom: '1px solid #c9a84c', padding: '10px 0', marginBottom: '32px', fontFamily: 'EB Garamond, serif' }}>
            <span>By {article.author}</span>
            <span>•</span>
            <span>{articleDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          {heroImage && (
            <div style={{ marginBottom: '32px' }}>
              <img
                src={heroImage}
                alt={article.heroAlt || article.title}
                className="mag-vintage-img"
                style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '2px' }}
              />
              {article.heroCaption && (
                <p style={{ fontSize: '13px', color: '#6f5620', fontStyle: 'italic', marginTop: '8px', fontFamily: 'EB Garamond, serif' }}>
                  {article.heroCaption}
                </p>
              )}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="mag-content-grid">
            <style dangerouslySetInnerHTML={{
              __html: `
                @media (min-width: 1025px) {
                  .mag-content-grid {
                    grid-template-columns: 2fr 1fr !important;
                  }
                }
              `
            }} />

            <div>
              {article.intro && (
                <p style={{ fontSize: '24px', lineHeight: 1.68, color: '#2b1a00', fontWeight: 500, marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #c9a84c', fontFamily: 'EB Garamond, serif' }}>
                  {article.intro}
                </p>
              )}

              <div className="mag-ornamental">— ✦ —</div>

              <div className="mag-article-body" dangerouslySetInnerHTML={{ __html: article.content || '' }} />

              {article.disclaimer !== false && (
                <>
                  <div className="mag-ornamental">— ✦ —</div>
                  <div style={{ marginTop: '48px', background: '#fff8e8', border: '2px solid #d8c28a', borderRadius: '4px', padding: '24px' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1e1408', marginBottom: '12px' }}>
                      Important Disclaimer
                    </h2>
                    <p style={{ fontSize: '15px', color: '#2b1a00', lineHeight: 1.7, fontFamily: 'EB Garamond, serif' }}>
                      The information in this article is for general informational purposes only. Costs, visa requirements, healthcare policies, and local conditions change frequently. Always verify current details with official government sources and consult a licensed advisor before making relocation decisions. Golden Horizons does not provide legal, financial, or medical advice.
                    </p>
                  </div>
                </>
              )}

              {relatedArticles.length > 0 && (
                <div style={{ marginTop: '48px', borderTop: '2px solid #1e1408', paddingTop: '32px' }}>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#1e1408', marginBottom: '24px' }}>
                    More {article.category || 'Golden Horizons'} Guides
                  </h2>
                  <div style={{ display: 'grid', gap: '16px' }}>
                    {relatedArticles.slice(0, 5).map((related) => (
                      <Link
                        key={related.slug}
                        href={`/articles/${related.slug}`}
                        style={{ display: 'block', padding: '16px', background: 'white', border: '1px solid #d8c28a', borderRadius: '4px', textDecoration: 'none' }}
                      >
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e1408', marginBottom: '4px', fontSize: '18px' }}>
                          {related.title}
                        </h3>
                        {related.excerpt && (
                          <p style={{ fontSize: '14px', color: '#6f5620', fontFamily: 'EB Garamond, serif', margin: 0 }}>
                            {related.excerpt}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '32px' }}>
                <Link
                  href="/articles"
                  style={{ color: '#8b6914', fontWeight: 700, textDecoration: 'none', fontFamily: 'EB Garamond, serif', fontSize: '16px' }}
                >
                  ← Back to all articles
                </Link>
              </div>
            </div>

            <aside style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: '120px' }}>
                <div className="mag-sidebar-cta">
                  <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 700, marginBottom: '8px', fontFamily: 'EB Garamond, serif' }}>
                    Free Reader Guide
                  </div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#faf5e9', marginBottom: '12px' }}>
                    Get the Free Retirement Abroad Guide
                  </h2>
                  <p style={{ fontSize: '14px', color: '#d4c4a0', marginBottom: '16px', lineHeight: 1.6, fontFamily: 'EB Garamond, serif' }}>
                    Compare costs, healthcare, visas, and lifestyle across top retirement countries before you decide.
                  </p>
                  <Link
                    href="/#free-guide"
                    style={{ display: 'block', background: '#c9a84c', color: '#1e1408', padding: '12px 20px', borderRadius: '4px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', fontFamily: 'EB Garamond, serif' }}
                  >
                    Get the Free Guide →
                  </Link>
                  <p style={{ fontSize: '11px', color: '#d4c4a0', marginTop: '12px', fontFamily: 'EB Garamond, serif' }}>
                    Free by email · No spam · Unsubscribe anytime
                  </p>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="mag-sidebar-section">
                    <h2 style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8b6914', fontWeight: 700, marginBottom: '16px', fontFamily: 'EB Garamond, serif' }}>
                      More from {article.category || 'this section'}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {relatedArticles.slice(0, 3).map((related) => (
                        <Link
                          key={related.slug}
                          href={`/articles/${related.slug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1e1408', fontSize: '15px', marginBottom: '4px', lineHeight: 1.3 }}>
                            {related.title}
                          </h3>
                          <p style={{ fontSize: '12px', color: '#8b6914', fontFamily: 'EB Garamond, serif', margin: 0 }}>
                            Read →
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </>
  );
}
