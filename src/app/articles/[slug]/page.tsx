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

  const value = item as {
    slug?: unknown;
    title?: unknown;
    excerpt?: unknown;
  };

  return typeof value.slug === 'string' && typeof value.title === 'string';
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
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
    description:
      article.description ||
      article.excerpt ||
      'Retirement abroad guidance from Golden Horizons.',
    openGraph: {
      title: `${article.title} | Golden Horizons`,
      description:
        article.description ||
        article.excerpt ||
        'Retirement abroad guidance from Golden Horizons.',
      type: 'article',
      images: article.heroImage || article.image ? [article.heroImage || article.image] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const heroImage = article.heroImage || article.image || '';
  const relatedArticles: RelatedArticle[] = Array.isArray(article.relatedArticles)
    ? article.relatedArticles.filter(isRelatedArticle)
    : [];

  const articleDescription =
    article.description ||
    article.excerpt ||
    'Retirement abroad guidance from Golden Horizons.';

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
      <Header />

      <div className="bg-[#faf5e9] border-b border-[#d8c28a]">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <nav className="text-sm text-[#7a5a18]">
            <Link href="/" className="hover:text-[#1e1408]">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/articles" className="hover:text-[#1e1408]">
              Articles
            </Link>
            <span className="mx-2">›</span>
            <span className="text-[#1e1408]">
              {article.category || 'Golden Horizons'}
            </span>
          </nav>
        </div>
      </div>

      <article className="bg-[#faf5e9] text-[#1a0f00]">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.22em] text-[#8b6914] font-bold mb-3">
              {article.category || 'Article'}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1e1408] mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-[#6f5620] border-t border-b border-[#d8c28a] py-3">
              <span>By {article.author || 'Golden Horizons Editorial Team'}</span>
              <span>•</span>
              <span>{articleDate}</span>
              <span>•</span>
              <span>{article.readTime || '3 min read'}</span>
            </div>
          </div>

          {heroImage && (
            <div className="mb-8">
              <img
                src={heroImage}
                alt={article.heroAlt || article.title}
                className="w-full h-[260px] md:h-[420px] object-cover rounded-md"
              />

              {article.heroCaption && (
                <p className="text-sm text-[#6f5620] italic mt-2">
                  {article.heroCaption}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {article.intro && (
                <p className="text-xl md:text-2xl text-[#2b1a00] leading-relaxed mb-8 font-medium border-b border-[#d8c28a] pb-6">
                  {article.intro}
                </p>
              )}

              <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-h2:text-3xl prose-h2:text-[#1e1408] prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b-2 prose-h2:border-[#1e1408] prose-h2:pb-2 prose-p:text-[#2b1a00] prose-p:leading-relaxed prose-a:text-[#8b6914] prose-a:font-semibold hover:prose-a:text-[#1e1408]"
                dangerouslySetInnerHTML={{ __html: article.content || '' }}
              />

              {article.disclaimer !== false && (
                <div className="mt-12 bg-[#fff8e8] border border-[#d8c28a] rounded-lg p-6">
                  <h2 className="text-xl font-serif font-bold text-[#1e1408] mb-2">
                    Important Disclaimer
                  </h2>
                  <p className="text-sm text-[#2b1a00] leading-relaxed">
                    The information in this article is for general informational
                    purposes only. Costs, visa requirements, healthcare policies,
                    and local conditions change frequently. Always verify current
                    details with official government sources and consult a licensed
                    advisor before making relocation decisions. Golden Horizons does
                    not provide legal, financial, or medical advice.
                  </p>
                </div>
              )}

              {relatedArticles.length > 0 && (
                <div className="mt-12 border-t border-[#d8c28a] pt-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1e1408] mb-5">
                    Related Articles
                  </h2>

                  <div className="space-y-4">
                    {relatedArticles.slice(0, 5).map((related) => (
                      <Link
                        key={related.slug}
                        href={`/articles/${related.slug}`}
                        className="block p-4 bg-white border border-[#d8c28a] rounded-lg hover:shadow-md transition-all"
                      >
                        <h3 className="font-serif font-bold text-[#1e1408] mb-1">
                          {related.title}
                        </h3>
                        {related.excerpt && (
                          <p className="text-sm text-[#6f5620]">
                            {related.excerpt}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link
                  href="/articles"
                  className="text-[#8b6914] hover:text-[#1e1408] font-bold"
                >
                  ← Back to all articles
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#1e1408] border-2 border-[#c9a84c] rounded-lg p-6 text-center">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#c9a84c] font-bold mb-2">
                    Free Reader Guide
                  </div>

                  <h2 className="text-xl font-serif font-bold text-[#faf5e9] mb-3">
                    Get the Free Retirement Abroad Guide
                  </h2>

                  <p className="text-sm text-[#d4c4a0] mb-5 leading-relaxed">
                    Compare costs, healthcare, visas, and lifestyle across top
                    retirement countries before you decide.
                  </p>

                  <Link
                    href="/#free-guide"
                    className="block w-full text-center bg-[#c9a84c] text-[#1e1408] px-4 py-3 rounded-md font-bold hover:bg-[#e0c46c] transition-colors"
                  >
                    Get the Free Guide →
                  </Link>

                  <p className="text-xs text-[#d4c4a0] text-center mt-3">
                    Free by email · No spam · Unsubscribe anytime
                  </p>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-white border border-[#d8c28a] rounded-lg p-6">
                    <h2 className="text-sm uppercase tracking-[0.18em] text-[#8b6914] font-bold mb-4">
                      More Articles
                    </h2>

                    <div className="space-y-4">
                      {relatedArticles.slice(0, 3).map((related) => (
                        <Link
                          key={related.slug}
                          href={`/articles/${related.slug}`}
                          className="block group"
                        >
                          <h3 className="font-serif font-bold text-[#1e1408] text-sm mb-1 group-hover:text-[#8b6914]">
                            {related.title}
                          </h3>
                          <p className="text-xs text-[#8b6914]">Read →</p>
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
