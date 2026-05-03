import type { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/lib/countries";

export const metadata: Metadata = {
  title: "Best Places to Retire Abroad in 2026 | Golden Horizons",
  description:
    "Compare the best places for Americans to retire abroad in 2026. Real monthly costs, healthcare quality, visa options, and lifestyle ratings.",
};

export default function DestinationsPage() {
  const featured = countries.slice(0, 5);
  const more = countries;

  return (
    <main className="mag-page">
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
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">
            Destinations
          </Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="cine-hero">
          <img
            className="cine-img"
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Algarve coast Portugal retirement"
          />
          <div className="cine-overlay" />

          <div className="cine-content">
            <div className="cine-eyebrow">
              The Destination Report · 2026 World Rankings
            </div>
            <h1 className="cine-headline">
              The places where <em>your money</em> sets you free.
            </h1>
            <p className="cine-sub">
              Every morning we find them. Every morning we bring them to you.
            </p>
          </div>
        </div>

        <div className="hero-caption">
          <p>
            Algarve coast, Portugal — where couples retire well on $2,500/month.
            Warm winters. English spoken. Healthcare included.
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
          <div className="sl-kicker">The Destination Report · 2026 Rankings</div>
          <div className="sl-title">
            The World&rsquo;s Best Places to Retire Abroad
          </div>
        </div>

        <div className="dest-grid">
          return (
  <Link
    key={dest.id}
    href={`/destinations/${dest.id}`}
    className={`dest-card${index === 0 ? " tall" : ""}`}
    style={{ position: "relative", overflow: "hidden" }}
  >
    <img
      className="dc-img"
      src={dest.image}
      alt={dest.name}
      style={{ minHeight: index === 0 ? "463px" : "230px" }}
    />

    <div className="dc-overlay" />

    <div
      className="dc-body"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: index === 0 ? "flex-start" : "flex-end",
        alignItems: index === 0 ? "flex-start" : "center",
        textAlign: index === 0 ? "left" : "center",
        padding: index === 0 ? "26px 24px" : "18px 16px",
      }}
    >
      <div
        className="dc-rank"
        style={{
          marginBottom: "8px",
          width: index === 0 ? "100%" : "auto",
        }}
      >
        #{dest.rank} Ranked · 2026
      </div>

      <div
        className="dc-name"
        style={{
          marginBottom: "8px",
          lineHeight: 1.05,
          width: index === 0 ? "100%" : "auto",
        }}
      >
        {dest.flag} {dest.name}
      </div>

      <div
        className="dc-feeling"
        style={{
          maxWidth: index === 0 ? "72%" : "88%",
          margin: index === 0 ? "0 0 10px 0" : "0 auto 8px",
          lineHeight: 1.35,
          minHeight: index === 0 ? "auto" : "54px",
          display: "flex",
          alignItems: index === 0 ? "flex-start" : "center",
          justifyContent: "center",
        }}
      >
        {dest.description}
      </div>

      <div
        className="dc-cost"
        style={{
          marginTop: "2px",
          marginBottom: "10px",
          width: index === 0 ? "100%" : "auto",
        }}
      >
        from ${monthlyCost.toLocaleString()}/mo estimated
      </div>

      {index === 0 && (
        <div className="dc-tags" style={{ marginBottom: "12px" }}>
          {dest.benefits.map((b) => (
            <span key={b} className="dc-tag">
              {b}
            </span>
          ))}
        </div>
      )}

      <span
        className="dc-cta"
        style={{
          display: "inline-block",
          marginTop: "2px",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        View Profile →
      </span>
    </div>
  </Link>
);
            const monthlyCost = Object.values(dest.costOfLiving).reduce(
              (a, b) => a + b,
              0
            );

            return (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className={`dest-card${index === 0 ? " tall" : ""}`}
              >
                <img
                  className="dc-img"
                  src={dest.image}
                  alt={dest.name}
                  style={{ minHeight: index === 0 ? "463px" : "230px" }}
                />

                <div className="dc-overlay" />

                <div className="dc-body">
                  <div className="dc-rank">#{dest.rank} Ranked · 2026</div>
                  <div className="dc-name">
                    {dest.flag} {dest.name}
                  </div>
                  <div className="dc-feeling">{dest.description}</div>
                  <div className="dc-cost">
                    from ${monthlyCost.toLocaleString()}/mo estimated
                  </div>

                  <div className="dc-tags">
                    {dest.benefits.map((b) => (
                      <span key={b} className="dc-tag">
                        {b}
                      </span>
                    ))}
                  </div>

                  <span className="dc-cta">
                    {index === 0 ? "Read Full Profile" : "View Profile"} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

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
            className="more-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
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

                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: 12,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-playfair), Georgia, serif",
                      }}
                    >
                      View Profile →
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

          <Link href="/?scrollTo=subscribe" className="sub-btn">
            Start My Free Subscription →
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
