"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./subscribe.module.css";

const TICKER_TEXT =
  "◆  Today's issue goes out around 7:30 AM EST  ◆  This morning's story: Retire in Portugal on $1,750/month  ◆  Real costs · Real visas · Real life  ◆  Free every morning";

const STARTER_KIT_ITEMS = [
  "Monthly retirement-abroad budget checklist",
  "Visa questions to ask before choosing a country",
  "Healthcare comparison guide",
  "Housing and rental red flags",
  "Country shortlist worksheet",
];

export default function SubscribeClient() {
  const [heroFirstName, setHeroFirstName] = useState("");
  const [heroLastName, setHeroLastName] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [heroError, setHeroError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleHeroSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!heroEmail || !heroEmail.includes("@")) return;
    setHeroLoading(true);
    setHeroError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: heroEmail, firstName: heroFirstName, lastName: heroLastName }),
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

  async function handleMainSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
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

          <div className={s.subTags}>
            <span className={s.subTag}>
              Free Starter Kit + Daily Newsletter — one real retirement story, every morning
            </span>
            <span className={s.subTag}>
              No fluff. Real costs, real visas, real life — delivered by 7:30 AM EST
            </span>
          </div>
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

        {/* 5. URGENCY BAR */}
        <div className={s.urgencyBar}>
          <div className={s.pulseDot} />
          <span>
            Today&rsquo;s issue goes out around 7:30 AM EST — subscribe now and it
            will be waiting when you wake up
          </span>
        </div>

        {/* 6. HERO */}
        <section className={s.hero}>
          <img
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="A scenic retirement destination abroad"
            className={s.heroImg}
            loading="eager"
          />
          <div className={s.heroOverlay} />
          <div className={s.heroContent}>
            <p className={s.heroEyebrow}>
              Free Starter Kit + Daily Newsletter · Golden Horizons
            </p>
            <h1 className={s.heroH1}>
              Get the free Retirement Abroad Starter Kit —{" "}
              <em>plus one real story every morning.</em>
            </h1>
            <p className={s.heroSub}>
              Five practical guides to compare countries, costs, visas, and
              healthcare — plus a real retirement-abroad story in your inbox
              every morning by 7:30 AM EST.
            </p>

            {heroSuccess ? (
              <p className={s.heroSuccess}>
                ✓ You&rsquo;re in — check your inbox for the Starter Kit and
                watch for tomorrow&rsquo;s story by 7:30 AM EST.
              </p>
            ) : (
              <>
                <form onSubmit={handleHeroSubmit} className={s.heroForm}>
                  <input
                    type="text"
                    placeholder="First name"
                    value={heroFirstName}
                    onChange={(e) => setHeroFirstName(e.target.value)}
                    className={s.heroInputFirst}
                    autoComplete="given-name"
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={heroLastName}
                    onChange={(e) => setHeroLastName(e.target.value)}
                    className={s.heroInputLast}
                    autoComplete="family-name"
                    aria-label="Last name"
                  />
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
                    {heroLoading ? "Sending…" : "Send Me the Free Starter Kit →"}
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
            <span className={s.statLabel}>Countries Covered</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>5 min</span>
            <span className={s.statLabel}>To Read Each Issue</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>7:30 AM</span>
            <span className={s.statLabel}>In Your Inbox Daily</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>1</span>
            <span className={s.statLabel}>Real Story Per Issue</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.statItem}>
            <span className={s.statNumber}>$0</span>
            <span className={s.statLabel}>Forever Free</span>
          </div>
        </div>

        {/* 8. WHAT YOUR NEIGHBORS ALREADY KNOW */}
        <section className={s.neighborsBlock}>
          <span className={s.sectionLabel}>
            What Your Neighbors Already Know
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
            Today&rsquo;s issue goes out around 7:30 AM EST. It takes 5 minutes to
            read. It is free. And it might change what you do next.
          </p>
        </section>

        {/* 9. STARTER KIT BLOCK */}
        <section className={s.starterKitBlock}>
          <span className={s.starterKitLabel}>Free Retirement Abroad Starter Kit</span>
          <h2 className={s.starterKitH2}>
            Five practical guides — sent to new subscribers.
          </h2>
          <p className={s.starterKitIntro}>
            When you subscribe, you&rsquo;ll receive five guides to help you
            compare countries, plan your budget, and ask the right questions
            before you move.
          </p>
          <ul className={s.kitList}>
            {STARTER_KIT_ITEMS.map((item) => (
              <li key={item} className={s.kitItem}>
                <span className={s.kitDiamond}>◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={s.starterKitNote}>
            Delivered after you confirm your email — along with your first
            daily story.
          </p>
        </section>

        {/* 10. TODAY'S ISSUE PREVIEW */}
        <section className={s.previewSection}>
          <div className={s.previewGrid}>
            {/* Left column */}
            <div>
              <span className={s.previewLabel}>Today&rsquo;s Story — Teaser</span>
              <h3 className={s.previewH3}>
                Retire in Portugal on $1,750 a month — the real numbers
              </h3>
              <p className={s.previewBody}>
                A two-bedroom apartment in Alfama, Lisbon. A weekly market where
                a week of groceries costs $38. A private doctor who sees you the
                same day for $40. This morning&rsquo;s issue walks through every
                line of the budget — rent, utilities, food, transport,
                healthcare, and the one expense most guides forget to mention.
              </p>
              <div className={s.lockedBox}>
                Subscribers only. Today&rsquo;s full issue — including the visa
                breakdown, the neighborhood comparison, and the one thing that
                surprised our researcher — goes out around 7:30 AM EST. Subscribe
                free below to read it.
              </div>
            </div>

            {/* Right column */}
            <div>
              <span className={s.previewLabel}>The Numbers at a Glance</span>
              <div className={s.statsGrid}>
                <div className={s.statCard}>
                  <span className={s.statCardNum}>$850</span>
                  <span className={s.statCardLabel}>Monthly Rent</span>
                  <span className={s.statCardDesc}>
                    2BR apartment, central Lisbon
                  </span>
                </div>
                <div className={s.statCard}>
                  <span className={s.statCardNum}>$280</span>
                  <span className={s.statCardLabel}>Groceries</span>
                  <span className={s.statCardDesc}>
                    Per month, local markets
                  </span>
                </div>
                <div className={s.statCard}>
                  <span className={s.statCardNum}>$40</span>
                  <span className={s.statCardLabel}>Doctor Visit</span>
                  <span className={s.statCardDesc}>
                    Private clinic, no wait
                  </span>
                </div>
                <div className={s.statCard}>
                  <span className={s.statCardNum}>$1,750</span>
                  <span className={s.statCardLabel}>Total Budget</span>
                  <span className={s.statCardDesc}>
                    Comfortable, not frugal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. MID-PAGE URGENCY BAR */}
        <div className={s.midUrgency}>
          <strong className={s.midUrgencyStrong}>
            Today&rsquo;s full issue — including the visa breakdown and the
            neighborhood guide — goes out around 7:30 AM EST.
          </strong>
          <em className={s.midUrgencyNote}>
            Subscribe now and it will be in your inbox when you wake up tomorrow
            morning.
          </em>
        </div>

        {/* 12. MAIN SUBSCRIBE FORM */}
        <section className={s.formSection} id="subscribe">
          <span className={s.sectionLabel}>Free Starter Kit + Daily Newsletter</span>

          {success ? (
            <div className={s.successBox}>
              <p className={s.successTitle}>You&rsquo;re in.</p>
              <p className={s.successBody}>
                Check your inbox for the Starter Kit, and watch for
                tomorrow&rsquo;s Golden Horizons story by 7:30 AM EST.
              </p>
            </div>
          ) : (
            <>
              <h2 className={s.formH2}>
                Get the Free Starter Kit + tomorrow&rsquo;s story by 7:30 AM EST.
              </h2>
              <p className={s.formBody}>
                Five practical retirement-abroad guides delivered after you
                subscribe — plus one real destination story every morning. No
                strings, no upsells, unsubscribe anytime.
              </p>

              <form onSubmit={handleMainSubmit} noValidate>
                <div className={s.nameRow}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="firstName" className={s.fieldLabel}>
                      First Name (optional)
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={s.fieldInput}
                      autoComplete="given-name"
                    />
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="lastName" className={s.fieldLabel}>
                      Last Name (optional)
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={s.fieldInput}
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div className={s.emailRow}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="email" className={s.fieldLabel}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={s.fieldInput}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={s.submitBtn}
                >
                  {loading
                    ? "Subscribing…"
                    : "Send Me the Free Starter Kit →"}
                </button>

                {error && <p className={s.errorMsg}>{error}</p>}
              </form>

              <div className={s.trustBadges}>
                <span className={s.trustBadge}>◆ Free forever</span>
                <span className={s.trustBadge}>◆ No spam, ever</span>
                <span className={s.trustBadge}>◆ Unsubscribe in one click</span>
              </div>
            </>
          )}
        </section>

        {/* 13. TESTIMONIALS */}
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
                  James R., 67 · Former Engineer · Now in Medellín
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

        {/* 14. FOOTER */}
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
