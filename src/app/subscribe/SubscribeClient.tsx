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
        {/* 2. TOP BAR */}
        <div className="topbar">
          <span>Vol. 60, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>June 2026</span>
        </div>

        {/* 3. MASTHEAD */}
        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>June 2026 · Issue 60</span>
          </div>

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
              Could You Retire Abroad on Less Than You Think?
            </h1>
            <p className={s.heroSub}>
              The free Starter Kit covers the countries, costs, visas, and
              healthcare options most Americans never consider.
            </p>
            <p className={s.heroSub}>
              Plus three real retirement-abroad stories in your inbox every
              morning by 7:30 AM EST.
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
                    {heroLoading ? "Sending…" : "Get My Free Kit + Stories →"}
                  </button>
                </form>
                {heroError && <p className={s.heroErrorMsg}>{heroError}</p>}
              </>
            )}

            <p className={s.heroTrust}>
              <em>Free forever · No spam · Unsubscribe anytime</em>
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
            <span className={s.statLabel}>Waiting When You Wake Up</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>3</span>
            <span className={s.statLabel}>Real Stories Daily</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>$0</span>
            <span className={s.statLabel}>No Card. No Catch.</span>
          </div>
        </div>

        {/* 8. VIDEO — SUBSCRIBE TEASER */}
        <section className={s.videoSection}>
          <span className={s.videoLabel}>Watch Before You Subscribe</span>
          <h2 className={s.videoH2}>See exactly what lands in your inbox</h2>
          <div className={s.videoWrap}>
            <video
              controls
              preload="metadata"
              className={s.videoEl}
              aria-label="Golden Horizons subscribe preview video"
            >
              <source src="/videos/sub-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={s.videoCta}>
            <a href="#subscribe" className={s.videoCtaBtn}>
              Get My Free Kit + Stories →
            </a>
          </div>
        </section>

        {/* 9. WHAT READERS ARE DISCOVERING */}
        <section className={s.neighborsBlock}>
          <span className={s.sectionLabel}>
            What Readers Are Discovering Before Breakfast
          </span>
          <h2 className={s.neighborsH2}>
            Every morning, somewhere, someone is reading about a life you{" "}
            <em>haven&rsquo;t planned yet.</em>
          </h2>
          <p className={s.neighborsBody}>
            A two-bedroom apartment in Lisbon for $850 a month. A visa that
            takes 60 days and costs $500. A hospital that charges $40 for a
            doctor&rsquo;s visit — no insurance needed.
          </p>
          <p className={s.neighborsBody}>
            Golden Horizons finds those places, runs the real numbers, and puts
            the full picture in your inbox before breakfast. No hype. No
            affiliate fluff. Just the information you need to decide if this is
            actually possible for you.
          </p>
          <p className={s.neighborsBold}>
            Today&rsquo;s issue goes out at 7:30 AM EST. It takes 5 minutes to
            read. It is free. And it might change what you do next.
          </p>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className={s.testimonials}>
          <span className={s.testimonialsLabel}>
            What Readers Say After Their First Week
          </span>
          <div className={s.testimonialsGrid}>
            <div className={s.testimonialCard}>
              <p className={s.testimonialQuote}>
                &ldquo;I&rsquo;ve been thinking about retiring abroad for three
                years. After one week of Golden Horizons, I finally had a real
                number to work with. Now I have a date.&rdquo;
              </p>
              <div className={s.testimonialFooter}>
                <div className={s.testimonialAvatar}>B</div>
                <cite className={s.testimonialCite}>
                  Barbara A., 63 · Retired Teacher · Now in Lisbon
                </cite>
              </div>
            </div>

            <div className={s.testimonialCard}>
              <p className={s.testimonialQuote}>
                &ldquo;I thought I needed $2 million to retire comfortably.
                Golden Horizons showed me I was wrong — and showed me exactly
                where $1,800 a month is genuinely enough.&rdquo;
              </p>
              <div className={s.testimonialFooter}>
                <div className={s.testimonialAvatar}>J</div>
                <cite className={s.testimonialCite}>
                  James R., 67 · Former Engineer · Now in Medell&iacute;n
                </cite>
              </div>
            </div>

            <div className={s.testimonialCard}>
              <p className={s.testimonialQuote}>
                &ldquo;I read it every morning before I get out of bed.
                It&rsquo;s the only email I actually look forward to. My wife
                and I are moving to Costa Rica in March.&rdquo;
              </p>
              <div className={s.testimonialFooter}>
                <div className={s.testimonialAvatar}>T</div>
                <cite className={s.testimonialCite}>
                  Tom &amp; Linda S., 61 &amp; 59 · Moving March 2027
                </cite>
              </div>
            </div>
          </div>
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
