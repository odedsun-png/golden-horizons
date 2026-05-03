"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeBox from "@/components/SubscribeBox";
import RetirementFinder from "@/components/RetirementFinder";
import { countries } from "@/lib/countries";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const forceScrollToSubscribe = () => {
    const subscribeBox = document.getElementById("subscribe");

    if (!subscribeBox) return;

    const y = subscribeBox.getBoundingClientRect().top + window.scrollY - 90;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "Cover Story · The Destination Report",
      title: "Where $2,000 a month can still buy a beautiful life",
      sub:
        "Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.",
    },
    {
      image:
        "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "The Expat File",
      title:
        "The old-town life people dream about — cafés, shade, and slow golden evenings",
      sub:
        "A real European street, real cafés, real texture — the kind of daily life retirement should make possible.",
    },
    {
      image:
        "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "The Money Page",
      title: "Seaside towns where every morning feels like a postcard",
      sub:
        "Historic streets, sea views, walkable neighborhoods, and a softer rhythm — with the numbers checked before the dream begins.",
    },
  ];

  const destinationCards = [
    {
      id: "portugal",
      name: "Portugal",
      cost: "from $1,800/mo",
      tag: "Top Ranked",
    },
    {
      id: "panama",
      name: "Panama",
      cost: "from $1,600/mo",
      tag: "Best Healthcare",
    },
    {
      id: "mexico",
      name: "Mexico",
      cost: "from $1,400/mo",
      tag: "Most Popular",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      cost: "from $1,200/mo",
      tag: "Best Value",
    },
    {
      id: "belize",
      name: "Belize",
      cost: "from $1,700/mo",
      tag: "English Only",
    },
    {
      id: "ecuador",
      name: "Ecuador",
      cost: "from $1,300/mo",
      tag: "Hidden Gem",
    },
  ].map((item) => {
    const country = countries.find((c) => c.id === item.id);

    return {
      ...item,
      image:
        country?.image ||
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=900",
      flag: country?.flag || "",
      rank: country?.rank,
      description: country?.description || item.tag,
    };
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const shouldScroll =
      params.get("scrollTo") === "subscribe" ||
      window.location.hash === "#subscribe";

    if (!shouldScroll) return;

    let attempts = 0;

    const scrollWithRetry = () => {
      const subscribeBox = document.getElementById("subscribe");

      if (!subscribeBox) return;

      const y = subscribeBox.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: y,
        behavior: attempts === 0 ? "auto" : "smooth",
      });

      attempts += 1;

      if (attempts < 8) {
        window.setTimeout(scrollWithRetry, 400);
      } else {
        window.history.replaceState({}, "", "/");
      }
    };

    window.setTimeout(scrollWithRetry, 250);
  }, []);

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
          <Link href="/" className="active">
            Cover
          </Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link
            href="/?scrollTo=subscribe"
            onClick={(e) => {
              e.preventDefault();
              forceScrollToSubscribe();
            }}
          >
            Subscribe Free
          </Link>
        </nav>

        {/* ── HERO ── */}
        <div className="hero-wrap">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="hero-slide"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            >
              <img src={slide.image} alt="" className="hero-img" />
              <div className="hero-overlay" />

              <div className="hero-text">
                <div className="hero-kicker">{slide.kicker}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-sub">{slide.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-caption">
          <p>
            Three windows into the Golden Horizons promise: old-world charm, sea
            air, richer days, and a retirement lifestyle that still feels
            possible.
          </p>
        </div>

        {/* ── COVER STORY ── */}
        <div className="cover-story">
          <div className="mag-label">Cover Story · The Destination Report</div>

          <h2 className="cover-headline">
            The places where your money sets you free — and why more Americans
            are finding them every day
          </h2>

          <div className="byline">
            By the Editors of Golden Horizons · Cover Story · April 2026
          </div>

          <p className="body-text">
            There are places in the world where $2,000 a month buys the kind of
            life most Americans spend their entire career chasing. A terrace
            overlooking the sea. Fresh food every morning. A doctor you can
            actually afford to see. These places are not secrets — they are
            simply overlooked.
          </p>

          <p className="body-text">
            Golden Horizons exists to change that. Every morning we find one of
            these places, dig into the real numbers, and bring it straight to
            you. No hype. No sales pitch. Just the truth about what is possible —
            and what it actually costs.
          </p>

          <Link href="/articles" className="read-more">
            Read all stories in this issue →
          </Link>
        </div>

        {/* ── PULL QUOTE ── */}
        <div className="pullquote">
          <p>
            &ldquo;Most people plan carefully for retirement. Almost none plan{" "}
            <em>where</em> to live it. That decision changes everything.&rdquo;
          </p>
          <cite>— The Golden Horizons Editors</cite>
        </div>

        {/* ── INLINE SUBSCRIBE BOX ── */}
        <div id="subscribe" style={{ scrollMarginTop: "110px" }}>
          <SubscribeBox variant="inline" />
        </div>

        {/* ── BELOW FOLD ── */}
        <div className="section-banner">Inside This Issue</div>

        <div className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/32754142/pexels-photo-32754142.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Albania"
              />
              <div className="story-cat">Cost of Living · Albania</div>

              <Link
                href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  What $1,000 a Month Gets You in Gjirokastër
                </div>
              </Link>

              <Link
                href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/15894001/pexels-photo-15894001.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cambodia"
              />
              <div className="story-cat">Cost of Living · Cambodia</div>

              <Link
                href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  What $1,000 a Month Gets You in Siem Reap
                </div>
              </Link>

              <Link
                href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="mag-section-label">The Visa File</div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/154241/pexels-photo-154241.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ireland"
              />
              <div className="story-cat">Visas &amp; Residency · Ireland</div>

              <Link
                href="/articles/ireland-residency-options-for-american-retirees-v2"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  Residency Options for American Retirees in Ireland
                </div>
              </Link>

              <Link
                href="/articles/ireland-residency-options-for-american-retirees-v2"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/20813456/pexels-photo-20813456.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Georgia"
              />
              <div className="story-cat">Visas &amp; Residency · Georgia</div>

              <Link
                href="/articles/georgia-residency-options-for-us-retirees"
                style={{ textDecoration: "none" }}
              >
                <div className="story-title">
                  Residency Options for U.S. Retirees in Georgia
                </div>
              </Link>

              <Link
                href="/articles/georgia-residency-options-for-us-retirees"
                className="story-read"
              >
                Read this story →
              </Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="sb-pull">
              <p>
                &ldquo;I kept waiting for the right time. Then I realized — this{" "}
                <em>is</em> the right time.&rdquo;
              </p>
              <cite>— Barbara, 63 · Lisbon, $1,900/mo</cite>
            </div>

            <div
              style={{
                background: "#faf5e9",
                border: "2px solid #2d2416",
                padding: "24px 20px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#8b6914",
                  marginBottom: 12,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Editor&apos;s Note
              </div>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#1a0f00",
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                &ldquo;The best time to retire abroad was ten years ago. The
                second best time is today.&rdquo;
              </p>

              <div
                style={{
                  fontSize: 12,
                  color: "#6b5d47",
                  marginTop: 12,
                  fontFamily: "var(--font-garamond), Georgia, serif",
                }}
              >
                — The Editors
              </div>
            </div>
          </div>
        </div>

        {/* ── RETIREMENT FINDER ── */}
        <div className="section-banner">Find Your Retirement Match</div>

        <section
          style={{
            padding: "30px 36px",
            borderTop: "1px solid #2d2416",
            borderBottom: "1px solid #2d2416",
            background:
              "linear-gradient(135deg, rgba(250,245,233,0.96), rgba(245,237,216,0.92))",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              border: "2px solid #2d2416",
              background: "#faf5e9",
              padding: "26px 30px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "22px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🎯
              </div>

              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#8b6914",
                    marginBottom: 7,
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Personal Retirement Match
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: "#1a0f00",
                    fontSize: 30,
                    lineHeight: 1.1,
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  Not sure where to retire abroad?
                  <br />
                  Start with your lifestyle.
                </h3>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#4a3f2f",
                    fontSize: 16,
                    lineHeight: 1.45,
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                >
                  Answer 6 quick questions and see which countries fit your
                  budget, healthcare needs, climate, safety comfort, and
                  retirement pace.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <RetirementFinder defaultOpen={false} />
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS STRIP ── */}
        <div className="section-banner">
          The Destination Report · At a Glance
        </div>

        <div className="dest-strip">
          <div className="dest-label">
            Best value destinations for Americans retiring abroad
          </div>

          <div
            className="dest-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
              gap: "8px",
            }}
          >
            {destinationCards.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className="dest-card"
                style={{
                  position: "relative",
                  minHeight: 140,
                  overflow: "hidden",
                  display: "block",
                  padding: 0,
                  textDecoration: "none",
                  background: "#1a0f00",
                  border: "1px solid #c9a84c",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.04)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(17,10,2,0.92) 0%, rgba(17,10,2,0.62) 50%, rgba(17,10,2,0.2) 100%)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: 140,
                    padding: "12px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#f3dfab",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: 5,
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {destination.flag}{" "}
                    {destination.rank ? `#${destination.rank}` : "Featured"}
                  </div>

                  <div
                    style={{
                      color: "#ffffff",
                      fontSize: 21,
                      lineHeight: 1.05,
                      marginBottom: 5,
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {destination.name}
                  </div>

                  <div
                    style={{
                      color: "#f6ead0",
                      fontSize: 13,
                      fontStyle: "italic",
                      marginBottom: 5,
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    {destination.cost}
                  </div>

                  <div
                    style={{
                      color: "#f3dfab",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {destination.tag}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ornament">— ✦ —</div>

        {/* ── FOOTER ── */}
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
