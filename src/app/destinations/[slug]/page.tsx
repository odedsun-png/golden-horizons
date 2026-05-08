import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountryById } from "@/lib/countries";
import { getAllArticleSlugs, getArticleBySlug } from "@/lib/articles";

type PageParams = Promise<{ slug: string }>;

const siteUrl = "https://golden-horizons.org";

function truncate(value: string, maxLength = 155) {
  if (!value) return "";
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trim()}…`;
}

function cleanText(value: string | undefined | null) {
  if (!value) return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryById(slug);

  if (!country) {
    return {
      title: "Destination Not Found | Golden Horizons",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${siteUrl}/destinations/${country.id}`;
  const title = `Retire in ${country.name} in 2026 — Cost, Healthcare, Visa & Lifestyle`;
  const description = truncate(
    `${country.description} Compare cost of living, healthcare, safety, lifestyle, and retirement fit for Americans considering ${country.name} in 2026.`
  );

  return {
    title: `${title} | Golden Horizons`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "Golden Horizons",
      title,
      description,
      images: [
        {
          url: country.image,
          width: 1200,
          height: 630,
          alt: `Retire in ${country.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [country.image],
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

export default async function DestinationDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const country = getCountryById(slug);

  if (!country) notFound();

  const canonicalUrl = `${siteUrl}/destinations/${country.id}`;

  const totalMonthly = Object.values(country.costOfLiving).reduce(
    (a, b) => a + b,
    0
  );

  const relatedCountries = countries
    .filter((c) => c.id !== country.id)
    .slice(0, 4);

  const allArticleSlugs = await getAllArticleSlugs();
  const allArticlesRaw = await Promise.all(
    allArticleSlugs.map((articleSlug) => getArticleBySlug(articleSlug))
  );

  const allArticles = allArticlesRaw.filter((article) => article !== null);

  const countryNameLower = country.name.toLowerCase();
  const countryIdLower = country.id.toLowerCase();

  const relatedArticles = allArticles
    .filter((article) => {
      const searchableText = `${article.title || ""} ${article.slug || ""} ${
        article.category || ""
      } ${article.excerpt || ""} ${cleanText(article.description)}`.toLowerCase();

      return (
        searchableText.includes(countryNameLower) ||
        searchableText.includes(countryIdLower)
      );
    })
    .slice(0, 5);

  const fallbackArticles = allArticles
    .filter((article) => {
      const searchableText = `${article.title || ""} ${article.slug || ""} ${
        article.category || ""
      }`.toLowerCase();

      return (
        searchableText.includes("cost") ||
        searchableText.includes("visa") ||
        searchableText.includes("healthcare") ||
        searchableText.includes("safety") ||
        searchableText.includes("retirement")
      );
    })
    .slice(0, 5);

  const sidebarArticles =
    relatedArticles.length > 0 ? relatedArticles : fallbackArticles;

  const scoreLabel = (score: number) => {
    if (score >= 5) return "Excellent";
    if (score >= 4) return "Very Good";
    if (score >= 3) return "Good";
    return "Fair";
  };

  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: `Retire in ${country.name} in 2026 — Cost, Healthcare, Visa & Lifestyle`,
    description: truncate(
      `${country.description} Compare cost of living, healthcare, safety, lifestyle, and retirement fit for Americans considering ${country.name} in 2026.`
    ),
    image: [country.image],
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
    articleSection: "Destinations",
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
        name: "Destinations",
        item: `${siteUrl}/destinations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="mag-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(destinationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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
              <strong>The Destination Report:</strong> #{country.rank} Ranked
            </span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">
            Destinations
          </Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/destinations">Destinations</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>
            {country.flag} {country.name}
          </span>
        </div>

        <div className="cine-hero">
          <img
            className="cine-img"
            src={country.image}
            alt={`Retire in ${country.name} — retirement abroad destination profile`}
          />
          <div className="cine-overlay" />

          <div className="cine-content">
            <div className="cine-eyebrow">
              #{country.rank} Ranked · The Destination Report · 2026
            </div>
            <h1 className="cine-headline">
              {country.flag} {country.name}
            </h1>
            <p className="cine-sub">{country.description}</p>
          </div>
        </div>

        <div className="hero-caption">
          <p>
            {country.name} — ranked #{country.rank} by Golden Horizons editors
            for American retirees in 2026.
          </p>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">
              The Destination Report · #{country.rank} Ranked
            </div>

            <h2 className="art-headline">
              Why Americans Are Retiring in {country.name}
            </h2>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Rankings</span>
            </div>

            {country.cardData && (
              <div
                style={{
                  background: "#f0e8d5",
                  border: "1px solid #c9a84c",
                  borderLeft: "4px solid #c9a84c",
                  padding: "20px 24px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#8b6914",
                    marginBottom: 14,
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 700,
                  }}
                >
                  Retiree Decision Snapshot
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px 28px",
                    marginBottom: "16px",
                  }}
                >
                  {(
                    [
                      {
                        label: "Visa Route",
                        value: country.cardData.visaRoute,
                      },
                      {
                        label: "Monthly Budget",
                        value: country.cardData.monthlyBudget,
                      },
                      {
                        label: "Social Security Fit",
                        value: country.cardData.socialSecurityFit,
                      },
                      {
                        label: "Healthcare",
                        value: country.cardData.healthcareSnapshot,
                      },
                      {
                        label: "Safety",
                        value: country.cardData.safetySnapshot,
                      },
                      {
                        label: "Tax Note",
                        value: country.cardData.taxSnapshot,
                      },
                    ] as { label: string; value: string }[]
                  ).map(({ label, value }) => (
                    <div key={label}>
                      <div
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#8b6914",
                          marginBottom: 3,
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontWeight: 700,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          color: "#1e1408",
                          lineHeight: 1.4,
                          fontFamily: "var(--font-garamond), Georgia, serif",
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  {(
                    Object.entries(country.cardData.scores) as [
                      string,
                      number,
                    ][]
                  ).map(([key, val]) => {
                    const labels: Record<string, string> = {
                      cost: "Cost",
                      healthcare: "Healthcare",
                      safety: "Safety",
                      lifestyle: "Lifestyle",
                      visaEase: "Visa Ease",
                      englishEase: "English",
                    };
                    return (
                      <div
                        key={key}
                        style={{
                          background: "#1e1408",
                          padding: "6px 12px",
                          textAlign: "center",
                          minWidth: 64,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#c9a84c",
                            marginBottom: 2,
                            fontFamily: "var(--font-playfair), Georgia, serif",
                          }}
                        >
                          {labels[key] || key}
                        </div>
                        <div
                          style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#faf5e9",
                            fontFamily: "var(--font-playfair), Georgia, serif",
                          }}
                        >
                          {val}/5
                        </div>
                      </div>
                    );
                  })}
                </div>

                {country.officialSources && (
                  <div style={{ marginBottom: "14px" }}>
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#8b6914",
                        marginBottom: 8,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      Official Sources
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {country.officialSources.visa && (
                        <a
                          href={country.officialSources.visa}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          Visa ↗
                        </a>
                      )}
                      {country.officialSources.immigration && (
                        <a
                          href={country.officialSources.immigration}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          Immigration ↗
                        </a>
                      )}
                      {country.officialSources.healthcare && (
                        <a
                          href={country.officialSources.healthcare}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          Healthcare ↗
                        </a>
                      )}
                      {country.officialSources.tax && (
                        <a
                          href={country.officialSources.tax}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          Tax Authority ↗
                        </a>
                      )}
                      {country.officialSources.safety && (
                        <a
                          href={country.officialSources.safety}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          Safety Info ↗
                        </a>
                      )}
                      {country.officialSources.socialSecurity && (
                        <a
                          href={country.officialSources.socialSecurity}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 12,
                            padding: "4px 10px",
                            border: "1px solid #c9a84c",
                            color: "#8b6914",
                            textDecoration: "none",
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          SSA ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {country.verificationStatus && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "#8b6914",
                      fontStyle: "italic",
                      marginBottom: 10,
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    Last Reviewed: {country.verificationStatus.lastReviewed} ·
                    Confidence: {country.verificationStatus.confidenceScore}/100
                  </div>
                )}

                <div
                  style={{
                    fontSize: 11,
                    color: "#8b6914",
                    fontFamily: "var(--font-garamond), Georgia, serif",
                    opacity: 0.8,
                  }}
                >
                  This snapshot is for general informational purposes only.
                  Verify all details with official government sources before
                  making relocation decisions.
                </div>
              </div>
            )}

            <p className="art-intro">{country.finalVerdict || country.description}</p>

            <div className="section-hdr">Why Retire Here</div>

            <p className="art-article-body" style={{ marginBottom: 20 }}>
              {country.name} offers American retirees a compelling combination
              of affordability, lifestyle, and accessibility. With an estimated
              monthly budget of around ${totalMonthly.toLocaleString()}, it
              &rsquo;s one of the most attractive retirement destinations for
              Americans living on Social Security or a fixed income.
            </p>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Money Page</div>
                <div className="dyk-text">
                  Estimated monthly cost in {country.name}: $
                  {totalMonthly.toLocaleString()} — including rent, food,
                  utilities, transport, healthcare, and entertainment.
                </div>
              </div>
            </div>

            <div className="section-hdr">Practical Tips</div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {country.benefits.map((benefit) => (
                <div
                  key={benefit}
                  style={{
                    background: "#f5edd8",
                    padding: "12px 16px",
                    borderLeft: "3px solid #c9a84c",
                    fontFamily: "EB Garamond, serif",
                    fontSize: "16px",
                    color: "#2b1a00",
                  }}
                >
                  ✓ {benefit}
                </div>
              ))}
            </div>

            <p className="art-article-body" style={{ marginBottom: 20 }}>
              Before making the move, research visa requirements carefully,
              connect with local expat communities, and consider visiting for at
              least 4-6 weeks before committing. The Golden Horizons editorial
              team recommends consulting with a licensed immigration attorney
              familiar with {country.name}&rsquo;s requirements.
            </p>

            {country.pros && country.cons && (
              <>
                <div className="section-hdr">Pros &amp; Cons</div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#2d6a4f",
                        marginBottom: 10,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      What Works
                    </div>
                    {country.pros.map((pro, i) => (
                      <div
                        key={i}
                        style={{
                          borderLeft: "3px solid #52b788",
                          paddingLeft: 12,
                          marginBottom: 10,
                          fontSize: 15,
                          color: "#1e1408",
                          fontFamily: "var(--font-garamond), Georgia, serif",
                          lineHeight: 1.4,
                        }}
                      >
                        {pro}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#8b3a1a",
                        marginBottom: 10,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      What to Consider
                    </div>
                    {country.cons.map((con, i) => (
                      <div
                        key={i}
                        style={{
                          borderLeft: "3px solid #c77537",
                          paddingLeft: 12,
                          marginBottom: 10,
                          fontSize: 15,
                          color: "#1e1408",
                          fontFamily: "var(--font-garamond), Georgia, serif",
                          lineHeight: 1.4,
                        }}
                      >
                        {con}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {(country.bestFit || country.notBestFit) && (
              <>
                <div className="section-hdr">Who Is This For?</div>
                {country.bestFit && (
                  <div
                    style={{
                      background: "#edf6f0",
                      borderLeft: "4px solid #52b788",
                      padding: "14px 18px",
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#2d6a4f",
                        marginBottom: 6,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      Best Fit
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "#1e1408",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-garamond), Georgia, serif",
                      }}
                    >
                      {country.bestFit}
                    </div>
                  </div>
                )}
                {country.notBestFit && (
                  <div
                    style={{
                      background: "#fdf3ec",
                      borderLeft: "4px solid #c77537",
                      padding: "14px 18px",
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#8b3a1a",
                        marginBottom: 6,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      Not the Best Fit If
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "#1e1408",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-garamond), Georgia, serif",
                      }}
                    >
                      {country.notBestFit}
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="section-hdr">Cost &amp; Healthcare</div>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Health File</div>
                <div className="dyk-text">
                  Healthcare score: {scoreLabel(country.scores.healthcare)} ·
                  Safety score: {scoreLabel(country.scores.safety)} · Lifestyle
                  score: {scoreLabel(country.scores.lifestyle)}
                </div>
              </div>
            </div>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "24px",
                fontFamily: "EB Garamond, serif",
              }}
            >
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Expense
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      padding: "10px 12px",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Monthly (USD)
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(country.costOfLiving).map(([key, value], i) => (
                  <tr
                    key={key}
                    style={{
                      background: i % 2 === 0 ? "#faf5e9" : "#f5edd8",
                      borderBottom: "1px solid #e0cc99",
                    }}
                  >
                    <td
                      style={{
                        padding: "10px 12px",
                        fontSize: "16px",
                        textTransform: "capitalize",
                        color: "#2b1a00",
                      }}
                    >
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td
                      style={{
                        padding: "10px 12px",
                        fontSize: "16px",
                        textAlign: "right",
                        color: "#1e1408",
                        fontWeight: "bold",
                      }}
                    >
                      ${value}
                    </td>
                  </tr>
                ))}

                <tr style={{ background: "#1e1408" }}>
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "16px",
                      color: "#c9a84c",
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "bold",
                    }}
                  >
                    Total / Month
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "18px",
                      textAlign: "right",
                      color: "#c9a84c",
                      fontFamily: "Playfair Display, serif",
                      fontWeight: "bold",
                    }}
                  >
                    ${totalMonthly.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {Object.entries(country.scores).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    background: "#f0e8d5",
                    padding: "16px",
                    textAlign: "center",
                    borderTop: "3px solid #c9a84c",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "capitalize",
                      color: "#8b6914",
                      marginBottom: "8px",
                      fontFamily: "EB Garamond, serif",
                    }}
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>

                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#1e1408",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {value}/5
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#8b6914",
                      fontFamily: "EB Garamond, serif",
                    }}
                  >
                    {scoreLabel(value)}
                  </div>
                </div>
              ))}
            </div>

            <div className="section-hdr">Related {country.name} Guides</div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {sidebarArticles.slice(0, 4).map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  style={{
                    display: "block",
                    background: "#faf5e9",
                    border: "1px solid #c9a84c",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#8b6914",
                      marginBottom: 7,
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {article.category || "Retirement Abroad"}
                  </div>

                  <div
                    style={{
                      color: "#1a0f00",
                      fontSize: 18,
                      lineHeight: 1.15,
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {article.title}
                  </div>

                  <div
                    style={{
                      color: "#8b6914",
                      fontSize: 13,
                      marginTop: 8,
                      fontStyle: "italic",
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    Read guide →
                  </div>
                </Link>
              ))}
            </div>

            <div className="section-hdr">Related Retirement Planning Guides</div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              {[
                {
                  href: "/best-countries-to-retire-abroad-on-a-budget",
                  label: "Best Countries to Retire Abroad on a Budget",
                  kicker: "The Money Page",
                },
                {
                  href: "/healthcare-abroad-for-american-retirees",
                  label: "Healthcare Abroad for American Retirees",
                  kicker: "The Health File",
                },
                {
                  href: "/visa-rules-for-americans-retiring-abroad",
                  label: "Visa Rules for Americans Retiring Abroad",
                  kicker: "The Visa File",
                },
                {
                  href: "/taxes-for-americans-retiring-overseas",
                  label: "Taxes for Americans Retiring Overseas",
                  kicker: "The Money Page",
                },
                {
                  href: "/retiring-abroad-checklist-for-americans",
                  label: "Retiring Abroad Checklist for Americans",
                  kicker: "The Strategy Page",
                },
                {
                  href: "/safest-countries-to-retire-abroad",
                  label: "Safest Countries to Retire Abroad",
                  kicker: "The Destination Report",
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  style={{
                    display: "block",
                    background: "#faf5e9",
                    border: "1px solid #c9a84c",
                    padding: "12px 14px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#8b6914",
                      marginBottom: 5,
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    {guide.kicker}
                  </div>
                  <div
                    style={{
                      color: "#1a0f00",
                      fontSize: 16,
                      lineHeight: 1.25,
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontWeight: 700,
                      marginBottom: 5,
                    }}
                  >
                    {guide.label}
                  </div>
                  <div
                    style={{
                      color: "#8b6914",
                      fontSize: 13,
                      fontStyle: "italic",
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    Read guide →
                  </div>
                </Link>
              ))}
            </div>

            <div className="disclaimer">
              The information in this article is for general informational
              purposes only. Costs, visa requirements, healthcare policies, and
              local conditions change frequently. Always verify current details
              with official government sources and consult a licensed advisor
              before making relocation decisions. Golden Horizons does not
              provide legal, financial, or medical advice.
            </div>

            <Link href="/destinations" className="back-link">
              ← Back to all destinations
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

            <div className="related-label">Related {country.name} Guides</div>

            {sidebarArticles.slice(0, 4).map((article) => {
              const articleImage =
                article.heroImage ||
                article.image ||
                "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=150";

              return (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="rel-item"
                >
                  <img
                    className="rel-thumb"
                    src={articleImage}
                    alt={article.title}
                  />
                  <div>
                    <div className="rel-cat">
                      {article.category || "Retirement Abroad"}
                    </div>
                    <div className="rel-title">{article.title}</div>
                    <span className="rel-read">Read →</span>
                  </div>
                </Link>
              );
            })}

            <div className="related-label" style={{ marginTop: 22 }}>
              More Destinations
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "10px",
              }}
            >
              {relatedCountries.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/destinations/${rel.id}`}
                  className="rel-item"
                  style={{
                    position: "relative",
                    display: "block",
                    minHeight: 150,
                    overflow: "hidden",
                    textDecoration: "none",
                    background: "#1a0f00",
                    border: "1px solid #c9a84c",
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${rel.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "scale(1.03)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(17,10,2,0.92) 0%, rgba(17,10,2,0.66) 48%, rgba(17,10,2,0.25) 100%)",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      minHeight: 150,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "14px 13px",
                    }}
                  >
                    <div
                      style={{
                        color: "#f3dfab",
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      #{rel.rank} Ranked · {rel.flag}
                    </div>

                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: 24,
                        lineHeight: 1.02,
                        marginBottom: 6,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {rel.name}
                    </div>

                    <div
                      style={{
                        color: "#f6ead0",
                        fontSize: 13,
                        lineHeight: 1.35,
                        marginBottom: 8,
                        fontFamily: "var(--font-garamond), Georgia, serif",
                      }}
                    >
                      {rel.description}
                    </div>

                    <span
                      style={{
                        color: "#f3dfab",
                        fontSize: 12,
                        fontStyle: "italic",
                        fontFamily: "var(--font-garamond), Georgia, serif",
                      }}
                    >
                      View Profile →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>

          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>

          <div className="footer-links">
            <Link href="/">Website</Link>
            <span>|</span>
            <Link href="/articles">All Stories</Link>
            <span>|</span>
            <Link href="/destinations">Destinations</Link>
            <span>|</span>
            <Link href="/about">About</Link>
            <span>|</span>
            <Link href="/privacy-policy">Privacy</Link>
            <span>|</span>
            <Link href="/contact">Contact</Link>
            <span>|</span>
            <Link href="/terms-of-use">Terms</Link>
          </div>

          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
