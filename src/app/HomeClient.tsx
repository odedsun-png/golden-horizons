"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeBox from "@/components/SubscribeBox";

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="mag-page">
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
          <Link href="/" className="active">
            Cover
          </Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="#subscribe">Subscribe Free</Link>
        </nav>

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
              <img src={slide.image} alt={slide.title} className="hero-img" />
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

        <div className="pullquote">
          <p>
            &ldquo;Most people plan carefully for retirement. Almost none plan{" "}
            <em>where</em> to live it. That decision changes everything.&rdquo;
          </p>
          <cite>— The Golden Horizons Editors</cite>
        </div>

        <div id="subscribe">
          <SubscribeBox variant="inline" />
        </div>

        <div className="section-banner">Inside This Issue</div>

        <div className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>

            <div className="story-item">
              <img
                className="story-img"
                src="https://images.pexels.com/photos/32754142/pexels-photo-32754142.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Gjirokastër Albania old town retirement cost of living"
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
                alt="Siem Reap Cambodia retirement cost of living"
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
                alt="Ireland countryside and residency options for American retirees"
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
                alt="Georgia retirement residency options for U.S. retirees"
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
