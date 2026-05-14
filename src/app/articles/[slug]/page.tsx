import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles";

type PageParams = Promise<{ slug: string }>;

const siteUrl = "https://golden-horizons.org";

function cleanText(value: string | undefined | null) {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value: string, maxLength = 155) {
  if (!value) return "";
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trim()}…`;
}

function removeEmbeddedDisclaimer(content: string) {
  if (!content) return "";

  return content
    .replace(
      /<p[^>]*>\s*(?:<em[^>]*>)?\s*The information in this article[\s\S]*?Golden Horizons does not provide legal,\s*financial,\s*or medical advice\.\s*(?:<\/em>)?\s*<\/p>/gi,
      ""
    )
    .replace(
      /<div[^>]*class=["'][^"']*disclaimer[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,
      ""
    )
    .trim();
}

function extractFaqsFromContent(
  content: string
): { question: string; answer: string }[] {
  if (!content) return [];

  function decodeEntities(str: string): string {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&nbsp;/g, " ");
  }

  function clean(str: string): string {
    return decodeEntities(str.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
  }

  // Normalize markdown headings to HTML tags for uniform processing
  const normalized = content
    .replace(/^###\s+(.+)$/gm, "<h3>$1</h3>")
    .replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");

  const faqSectionMatch = normalized.match(
    /<h2[^>]*>[^<]*Frequently Asked Questions[^<]*<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/i
  );

  if (!faqSectionMatch) return [];

  const faqSection = faqSectionMatch[1];
  const h3Regex =
    /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|<h2[^>]*>|$)/gi;
  const faqs: { question: string; answer: string }[] = [];

  let match: RegExpExecArray | null;
  while ((match = h3Regex.exec(faqSection)) !== null) {
    const question = clean(match[1]);
    const answer = clean(match[2]);
    if (question && answer) faqs.push({ question, answer });
    if (faqs.length >= 5) break;
  }

  return faqs;
}

async function getCanonicalSlug(slug: string) {
  if (!slug.endsWith("-v2")) return slug;

  const baseSlug = slug.replace(/-v2$/, "");
  const baseArticle = await getArticleBySlug(baseSlug);

  return baseArticle ? baseSlug : slug;
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
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
      title: "Article Not Found | Golden Horizons",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalSlug = await getCanonicalSlug(slug);
  const canonicalUrl = `${siteUrl}/articles/${canonicalSlug}`;

  const heroImage =
    article.heroImage ||
    article.image ||
    "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200";

  const description = truncate(
    cleanText(
      article.description ||
        article.excerpt ||
        `Read ${article.title} from Golden Horizons, the retirement abroad magazine for Americans comparing cost of living, healthcare, visas, housing, safety, and lifestyle overseas.`
    )
  );

  return {
    title: `${article.title} | Golden Horizons`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Golden Horizons",
      title: article.title,
      description,
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Golden Horizons Editorial Team"],
      section: article.category || "Retirement Abroad",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [heroImage],
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
}

export default async function ArticleDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const canonicalSlug = await getCanonicalSlug(slug);
  const canonicalUrl = `${siteUrl}/articles/${canonicalSlug}`;

  const heroImage =
    article.heroImage ||
    article.image ||
    "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800";

  const category = article.category || "Article";

  const description = truncate(
    cleanText(
      article.description ||
        article.excerpt ||
        `Read ${article.title} from Golden Horizons, the retirement abroad magazine for Americans comparing cost of living, healthcare, visas, housing, safety, and lifestyle overseas.`
    )
  );

  const cleanedArticleContent = removeEmbeddedDisclaimer(article.content);

  const faqs = extractFaqsFromContent(cleanedArticleContent);

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const allSlugs = await getAllArticleSlugs();
  const allArticlesRaw = await Promise.all(
    allSlugs.map((articleSlug) => getArticleBySlug(articleSlug))
  );

  const allArticles = allArticlesRaw.filter(
    (item): item is NonNullable<typeof item> => item !== null
  );

  const sameCategoryArticles = allArticles
    .filter((item) => {
      const itemCategory = item.category || "Article";
      return (
        item.slug !== slug &&
        item.slug !== canonicalSlug &&
        itemCategory === category
      );
    })
    .slice(0, 5);

  const fallbackArticles = allArticles
    .filter((item) => item.slug !== slug && item.slug !== canonicalSlug)
    .slice(0, 5);

  const relatedArticles =
    sameCategoryArticles.length >= 3 ? sameCategoryArticles : fallbackArticles;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: article.title,
    description,
    image: [heroImage],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Golden Horizons Editorial Team",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Golden Horizons",
      url: siteUrl,
    },
    articleSection: category,
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `${siteUrl}/articles?category=${encodeURIComponent(category)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="mag-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

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
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/articles">All Stories</Link>
          <span> › </span>
          <Link href={`/articles?category=${encodeURIComponent(category)}`}>
            {category}
          </Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>
            {article.title.slice(0, 40)}…
          </span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">{category}</div>

            <h1 className="art-headline">{article.title}</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Reviewed by Golden Horizons Editors</span>
              <span>
                Updated: {article.date} · {article.readTime || "3 min read"}
              </span>
            </div>

            <div className="hero-img-wrap">
              <img className="hero-img" src={heroImage} alt={article.title} />
            </div>

            <div className="img-caption">
              {article.title} — golden-horizons.org
            </div>

            {article.excerpt && <p className="art-intro">{article.excerpt}</p>}

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Money Page</div>
                <div className="dyk-text">
                  The average American can live comfortably in Portugal for
                  $2,200/month — including rent, food, and healthcare.
                </div>
              </div>
            </div>

            <div
              className="art-article-body"
              dangerouslySetInnerHTML={{ __html: cleanedArticleContent }}
            />

            <div className="ornament">— ✦ —</div>

            <div className="disclaimer">
              The information in this article is for general informational
              purposes only. Costs, visa requirements, healthcare policies, and
              local conditions change frequently. Always verify current details
              with official government sources and consult a licensed advisor
              before making relocation decisions. Golden Horizons does not
              provide legal, financial, or medical advice.
            </div>

            <Link href="/articles" className="back-link">
              ← Back to all stories
            </Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>
                &ldquo;Most people plan carefully for retirement. Almost none plan
                where to live it.&rdquo;
              </p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">
                Start reading Golden Horizons every morning
              </div>
              <div className="mag-sub-body">
                Real costs. Real places. One story, every morning.
              </div>
              <Link href="/?scrollTo=subscribe" className="mag-btn">
                Start My Free Subscription →
              </Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label">More from {category}</div>

            {relatedArticles.map((rel) => {
              const relImage =
                rel.heroImage ||
                rel.image ||
                "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=150";

              const relCategory = rel.category || "Retirement Abroad";

              return (
                <Link
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  className="rel-item"
                >
                  <img className="rel-thumb" src={relImage} alt={rel.title} />
                  <div>
                    <div className="rel-cat">{relCategory}</div>
                    <div className="rel-title">{rel.title}</div>
                    <span className="rel-read">Read →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

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

          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
