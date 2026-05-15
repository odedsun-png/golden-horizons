import type { Metadata } from "next";
import Link from "next/link";
import RetirementFinder from "@/components/RetirementFinder";
import { countries } from "@/lib/countries";
const siteUrl = "https://golden-horizons.org";
export const metadata: Metadata = {
  title: "Best Places to Retire Abroad in 2026",
  description:
    "Compare the best places for Americans to retire abroad in 2026, including monthly cost, healthcare, visas, safety, climate, and lifestyle.",
  alternates: {
    canonical: `${siteUrl}/destinations`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/destinations`,
    siteName: "Golden Horizons",
    title: "Best Places to Retire Abroad in 2026 | Golden Horizons",
    description:
      "Explore 26 ranked retirement-abroad destinations for Americans, with real monthly costs, healthcare notes, visa considerations, safety, and lifestyle fit.",
    images: [
      {
        url: `${siteUrl}/European%20caffee.jpg`,
        width: 1200,
        height: 630,
        alt: "Mediterranean café life and retirement abroad lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Places to Retire Abroad in 2026 | Golden Horizons",
    description:
      "Compare 26 ranked retirement-abroad destinations by cost, healthcare, visas, safety, climate, and lifestyle.",
    images: [`${siteUrl}/European%20caffee.jpg`],
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
export default function DestinationsPage() {
  const more = countries;
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/destinations#itemlist`,
    name: "Best Places to Retire Abroad in 2026",
    description:
      "A ranked list of retirement-abroad destinations for Americans comparing cost of living, healthcare, visas, safety, climate, and lifestyle.",
    url: `${siteUrl}/destinations`,
    numberOfItems: countries.length,
    itemListElement: countries.map((country, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: country.name,
      url: `${siteUrl}/destinations/${country.id}`,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/destinations#breadcrumb`,
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
    ],
  };
  return (
    <main className="mag-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
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
          <span>Vol. 58, No. 1</span>
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
            <span>April 2026 · Issue 58</span>
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
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">
            Destinations
          </Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>
        {/* BRIGHT EDITORIAL HERO - NO TEXT BOX */}
        <section
          style={{
            position: "relative",
            background: "#faf5e9",
            borderBottom: "1px solid #2d2416",
            overflow: "hidden",
          }}
        >
          <img
            src="/European%20caffee.jpg"
            alt="Mediterranean café street with outdoor chairs, a warm retirement abroad lifestyle scene"
            style={{
              display: "block",
              width: "100%",
              height: 500,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(250,245,233,0.82) 0%, rgba(250,245,233,0.54) 38%, rgba(250,245,233,0.08) 72%, rgba(250,245,233,0.02) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 52,
              bottom: 58,
              maxWidth: 660,
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8b6914",
                marginBottom: 14,
                fontWeight: 700,
                fontFamily: "var(--font-playfair), Georgia, serif",
                textShadow: "0 1px 1px rgba(250,245,233,0.7)",
              }}
            >
              The Destination Report · 2026 World Rankings
            </div>
            <h1
              style={{
                margin: "0 0 16px",
                color: "#1a0f00",
                fontSize: "clamp(46px, 5.7vw, 76px)",
                lineHeight: 0.95,
                fontWeight: 500,
                fontFamily: "var(--font-playfair), Georgia, serif",
                textShadow: "0 2px 12px rgba(250,245,233,0.65)",
              }}
            >
              The places where <em>your money</em> sets you free.
            </h1>
            <p
              style={{
                margin: 0,
                color: "#1a0f00",
                fontSize: 24,
                lineHeight: 1.35,
                maxWidth: 620,
                fontFamily: "var(--font-garamond), Georgia, serif",
                textShadow: "0 2px 10px rgba(250,245,233,0.8)",
              }}
            >
              Every morning, we find the places where retirement feels possible
              again.
            </p>
          </div>
        </section>
        <div className="hero-caption">
          <p>
            Mediterranean café life — where retirement starts to feel lighter,
            slower, and more affordable.
          </p>
        </div>
        <div className="dest-intro">
          <div>
            <div className="intro-kicker">A note from our editors</div>
            <div className="intro-quote">
              &ldquo;You worked for this. Every single day. Now — finally —
              it&rsquo;s your turn.&rdquo;
            </div>
          </div>
          <div className="intro-body">
            These are the places where Americans like you are discovering
            something unexpected: that{" "}
            <strong>
              the life they always wanted costs less than the life they settled
              for.
            </strong>
            <br />
            <br />
            We rank them honestly. We do the math so you don&rsquo;t have to.
            Every destination below was chosen because real retirees — people
            just like you — are living there right now, spending less and
            feeling more alive.
          </div>
        </div>
        <div className="dest-section-label">
          <div className="sl-kicker">Personal Retirement Match</div>
          <div className="sl-title">
            Find the country that actually fits your life.
          </div>
        </div>
        <section
          style={{
            padding: "34px 48px",
            borderTop: "1px solid #2d2416",
            borderBottom: "1px solid #2d2416",
            background:
              "linear-gradient(135deg, rgba(250,245,233,0.94), rgba(244,234,215,0.88))",
          }}
        >
          <RetirementFinder defaultOpen={false} />
        </section>
        <div className="dest-pullquote">
          <span className="pq-ornament">— ✦ —</span>
          <div className="pq-text">
            &ldquo;I kept waiting for the right time.
            <br />
            Then I realized — <em>this is the right time.</em>
            <br />I was already there.&rdquo;
          </div>
          <div className="pq-attr">
            — Barbara, 63 · Now living in Lisbon on $1,900/month
          </div>
        </div>
        <div className="more-section">
          <div className="more-kicker">All Destinations · 26 Ranked</div>
          <div
            className="more-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{
              borderLeft: "1px solid #c9a84c",
              borderTop: "1px solid #c9a84c",
              gap: 0,
            }}
          >
            {more.map((dest) => {
              const monthlyCost = Object.values(dest.costOfLiving).reduce(
                (a, b) => a + b,
                0
              );
              return (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.id}`}
                  className="more-card"
                  style={{
                    position: "relative",
                    display: "block",
                    minHeight: 230,
                    overflow: "hidden",
                    textDecoration: "none",
                    background: "#1a0f00",
                    borderRight: "1px solid #c9a84c",
                    borderBottom: "1px solid #c9a84c",
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${dest.image})`,
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
                        "linear-gradient(to top, rgba(17,10,2,0.94) 0%, rgba(17,10,2,0.66) 48%, rgba(17,10,2,0.22) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      minHeight: 230,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "16px 14px 14px",
                    }}
                  >
                    <div
                      style={{
                        color: "#f3dfab",
                        fontSize: 11,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        marginBottom: 8,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      #{dest.rank} Ranked · {dest.flag}
                    </div>
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: 25,
                        lineHeight: 1.04,
                        marginBottom: 8,
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      {dest.name}
                    </div>
                    {dest.cardData ? (
                      <>
                        <div
                          style={{
                            color: "#f6ead0",
                            fontSize: 12,
                            lineHeight: 1.35,
                            marginBottom: 6,
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          {dest.cardData.visaLabel}
                        </div>
                        <div
                          style={{
                            color: "#f3dfab",
                            fontSize: 13,
                            fontStyle: "italic",
                            marginBottom: 6,
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          {dest.cardData.monthlyBudget}/mo
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: 4,
                            marginBottom: 6,
                            flexWrap: "wrap",
                          }}
                        >
                          {(
                            Object.entries(dest.cardData.scores) as [
                              string,
                              number,
                            ][]
                          ).map(([k, v]) => {
                            const lbl: Record<string, string> = {
                              cost: "Cost",
                              healthcare: "HC",
                              safety: "Safety",
                              lifestyle: "Life",
                              visaEase: "Visa",
                              englishEase: "Eng",
                            };
                            return (
                              <div
                                key={k}
                                style={{
                                  background: "rgba(201,168,76,0.15)",
                                  border: "1px solid rgba(201,168,76,0.45)",
                                  borderRadius: 2,
                                  padding: "2px 5px",
                                  fontSize: 10,
                                  color: "#f3dfab",
                                  fontFamily:
                                    "var(--font-playfair), Georgia, serif",
                                }}
                              >
                                {lbl[k] || k} {v}
                              </div>
                            );
                          })}
                        </div>
                        <div
                          style={{
                            color: "#7ef0a0",
                            fontSize: 11,
                            marginBottom: 8,
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          ✓ {dest.cardData.socialSecurityFit}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            color: "#f6ead0",
                            fontSize: 13,
                            lineHeight: 1.35,
                            marginBottom: 8,
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          {dest.description.slice(0, 82)}...
                        </div>
                        <div
                          style={{
                            color: "#f3dfab",
                            fontSize: 13,
                            fontStyle: "italic",
                            marginBottom: 8,
                            fontFamily: "var(--font-garamond), Georgia, serif",
                          }}
                        >
                          from ${monthlyCost.toLocaleString()}/mo
                        </div>
                      </>
                    )}
                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      View Profile {"→"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="sub-section" id="subscribe">
          <div className="sub-eyebrow">
            Every morning. In your inbox. Free.
          </div>
          <h2 className="sub-headline">
            We find the place.
            <br />
            You live the life.
          </h2>
          <p className="sub-body">
            Each morning we send one story — a real place, real costs, real
            people who made the move. No fluff. Just the truth about what&rsquo;s
            possible.
          </p>
          <Link href="/#subscribe" className="sub-btn">
            Start My Free Subscription {"→"}
          </Link>
          <div className="sub-trust">
            ◆ &nbsp; Join 5,000+ readers planning their next chapter &nbsp; ◆
          </div>
        </div>
        <div className="ornament">— ✦ —</div>
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-use">Terms of Use</Link>
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
