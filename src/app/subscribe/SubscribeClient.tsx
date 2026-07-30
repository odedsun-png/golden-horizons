"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./subscribe.module.css";

const TICKER_TEXT =
  "◆  Today's issue goes out at 7:30 AM EST  ◆  This morning's story: Retire in Portugal on $1,750/month  ◆  Real costs · Real visas · Real life  ◆  Free every morning";

export default function SubscribeClient() {
  const [heroEmail, setHeroEmail] = useState("");
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState("");

  async function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!heroEmail || !heroEmail.includes("@")) return;
    setHeroLoading(true);
    setHeroError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: heroEmail }),
      });
      if (res.ok) {
        setHeroSuccess(true);
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Subscribe", { value: 0, currency: "USD" });
        }
      } else {
        const data = await res.json();
        setHeroError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setHeroError("Network error. Please check your connection and try again.");
    } finally {
      setHeroLoading(false);
    }
  }

  return (
    <main className="mag-page">
      {/* 1. FOMO TICKER */}
      <div className={s.tickerBar} aria-hidden="true">
        <div className={s.tickerTrack}>
          <span className={s.tickerText}>{TICKER_TEXT}</span>
          <span className={s.tickerText}>{TICKER_TEXT}</span>
        </div>
      </div>

      <div className="site">
        {/* 2. MASTHEAD */}
        <div className="masthead">
          <Link href="/" className="mastname">
            Golden Horizons
          </Link>
        </div>

        {/* 4. NAVIGATION */}
        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food">Food</Link>
          <Link href="/tax-guide">Tax Guide</Link>
          <Link href="/subscribe" className="active">
            Subscribe Free
          </Link>
        </nav>

        {/* 5. HERO */}
        <section className={s.hero} id="subscribe">
          <img
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="A scenic retirement destination abroad"
            className={s.heroImg}
            loading="eager"
          />
          <div className={s.heroOverlay} />
          <div className={s.heroContent}>
            <h1 className={s.heroH1}>
              Americans Are Retiring Abroad on $1,500 a Month. Here&rsquo;s
              What They Know That You Don&rsquo;t.
            </h1>
            <p className={s.heroSub}>
              Every morning, we send you one real place where Social Security
              covers rent, healthcare, and daily life — with the exact costs,
              visa steps, and trade-offs.
            </p>
            <p className={s.heroSub}>
              Free. In your inbox by 7:30 AM. Takes 5 minutes to read.
            </p>

            {heroSuccess ? (
              <p className={s.heroSuccess}>
                ✓ You&rsquo;re in — check your inbox for the Starter Kit and
                watch for tomorrow&rsquo;s stories by 7:30 AM EST.
              </p>
            ) : (
              <>
                <form onSubmit={handleHeroSubmit} className={s.heroForm}>
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    className={s.heroInputEmail}
                    autoComplete="email"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={heroLoading}
                    className={s.heroBtn}
                  >
                    {heroLoading ? "Sending…" : "Get Tomorrow's Story Free →"}
                  </button>
                </form>
                {heroError && <p className={s.heroErrorMsg}>{heroError}</p>}
              </>
            )}

            <p className={s.heroTrust}>
              <em>
                Plus a free Starter Kit: budget checklist, visa questions,
                healthcare comparison, and country shortlist. No card. No
                spam. Unsubscribe anytime.
              </em>
            </p>
          </div>
        </section>

        {/* 7. SOCIAL PROOF STRIP */}
        <div className={s.statsStrip} aria-label="Newsletter facts">
          <div className={s.statItem}>
            <span className={s.statNumber}>26</span>
            <span className={s.statLabel}>Destinations Researched</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>5 min</span>
            <span className={s.statLabel}>Morning Read</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>7:30 AM</span>
            <span className={s.statLabel}>In Your Inbox by 7:30 AM</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>2</span>
            <span className={s.statLabel}>New Stories Every Day</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>$0</span>
            <span className={s.statLabel}>Free Forever</span>
          </div>
        </div>

        {/* 8. VIDEO — SUBSCRIBE TEASER */}
        <section className={s.videoSection}>
          <span className={s.videoLabel}>Watch Before You Subscribe</span>
          <h2 className={s.videoH2}>Here&rsquo;s Exactly What You&rsquo;ll Get</h2>
          <div className={s.videoWrap}>
            <video
              controls
              preload="metadata"
              poster="/images/sub-video-thumbnail.jpg"
              className={s.videoEl}
              aria-label="Golden Horizons subscribe preview video"
            >
              <source src="/videos/sub-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={s.videoCta}>
            <a href="#subscribe" className={s.videoCtaBtn}>
              Get Tomorrow&rsquo;s Story Free →
            </a>
          </div>
        </section>

        {/* 9. WHAT READERS ARE DISCOVERING */}
        <section className={s.neighborsBlock}>
          <span className={s.sectionLabel}>
            What Readers Are Discovering Before Breakfast
          </span>
          <h2 className={s.neighborsH2}>
            What Landed in Readers&rsquo; Inboxes This Week
          </h2>
          <p className={s.neighborsBody}>
            Monday: $100/month private health insurance in T&uuml;rkiye —
            JCI-accredited hospitals, English-speaking doctors, and how the
            public option works for $30/month.
          </p>
          <p className={s.neighborsBody}>
            Wednesday: 3 money mistakes that cost Americans thousands when
            they move abroad — and the fix for each one.
          </p>
          <p className={s.neighborsBody}>
            Thursday: $400/month rent in Cuenca, Ecuador — a UNESCO city with
            year-round spring weather and a pensioner visa that requires just
            $800/month income.
          </p>
          <p className={s.neighborsBold}>
            This is what you&rsquo;ll get. Real places. Real numbers. Every
            morning.
          </p>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className={s.testimonials}>
          <span className={s.testimonialsLabel}>See What You&rsquo;ll Get</span>
          <p className={s.testimonialQuote}>Recent stories from the archive:</p>
          <div className={s.testimonialsGrid}>
            <div className={s.testimonialCard}>
              <a
                href="https://golden-horizons.org/articles/albania-beach-retirement-living-in-sarande"
                className={s.testimonialCite}
              >
                Albania: Beach Retirement Living in Sarand&euml; — $300/month
                rent, 300+ sunny days, 20,000-person coastal town
              </a>
            </div>

            <div className={s.testimonialCard}>
              <a
                href="https://golden-horizons.org/articles/turkiye-healthcare-quality-for-expats-in-turkiye"
                className={s.testimonialCite}
              >
                T&uuml;rkiye: Healthcare Quality for Expats — $100/month
                private insurance, JCI-accredited hospitals
              </a>
            </div>

            <div className={s.testimonialCard}>
              <a
                href="https://golden-horizons.org/articles/mexico-hidden-beach-towns-like-mazunte-for-retirement"
                className={s.testimonialCite}
              >
                Mexico: Hidden Beach Towns Like Mazunte — $1,500/month total
                budget, no resorts, no crowds
              </a>
            </div>

            <div className={s.testimonialCard}>
              <a
                href="https://golden-horizons.org/articles/georgia-hidden-wine-villages-in-kakheti-for-retirement"
                className={s.testimonialCite}
              >
                Georgia: Hidden Wine Villages in Kakheti — $250/month rent,
                1-year visa-free
              </a>
            </div>
          </div>
          <p className={s.testimonialQuote}>
            408 reports published. New ones every morning.
          </p>
        </section>

        {/* 11. FOOTER */}
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
          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 8 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
