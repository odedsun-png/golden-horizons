/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const heroSlides = useMemo(
    () => [
      {
        image:
          "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
        kicker: "Cover Story · The Destination Report",
        title: "Where $2,000 a month can still buy a beautiful life",
        subtitle:
          "Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.",
      },
      {
        image:
          "https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=1200",
        kicker: "The Money Page · Cost of Living Report",
        title: "What your Social Security check actually buys abroad",
        subtitle:
          "A $1,800 monthly income can go further in Portugal than Pennsylvania. Here is the math on real monthly budgets.",
      },
      {
        image:
          "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200",
        kicker: "The Health File · Healthcare Overseas",
        title: "Better care for less than you are paying now",
        subtitle:
          "How expats get world-class healthcare in Spain, Costa Rica, and Malaysia — without the US price tag.",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

            body {
              background: #e8e0d0;
            }

            .site {
              max-width: 980px;
              margin: 0 auto;
              background: #faf5e9;
              border-left: 1px solid #d4b896;
              border-right: 1px solid #d4b896;
              color: #1a0f00;
            }

            .gh-topbar {
              background: #1e1408;
              padding: 7px 36px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 16px;
            }

            .gh-topbar span {
              font-size: 10px;
              letter-spacing: 2.5px;
              text-transform: uppercase;
              color: #c9a84c;
              font-family: 'EB Garamond', serif;
              white-space: nowrap;
            }

            .gh-masthead {
              padding: 20px 36px 15px;
              text-align: center;
              border-bottom: 3px double #1e1408;
              background: #faf5e9;
            }

            .gh-dateline {
              display: flex;
              justify-content: space-between;
              gap: 20px;
              font-size: 11px;
              color: #8b6914;
              border-bottom: 1px solid #c9a84c;
              padding-bottom: 9px;
              margin-bottom: 11px;
              font-family: 'EB Garamond', serif;
            }

            .gh-mastname {
              font-family: 'Playfair Display', serif;
              font-size: 66px;
              font-weight: 900;
              color: #1e1408;
              line-height: 1;
              letter-spacing: -2px;
              text-decoration: none;
              display: block;
            }

            .gh-issue-line {
              display: flex;
              justify-content: center;
              gap: 28px;
              flex-wrap: wrap;
              margin-top: 10px;
            }

            .gh-issue-tag {
              font-size: 12px;
              font-style: italic;
              color: #8b6914;
              font-family: 'EB Garamond', serif;
            }

            .gh-issue-tag strong {
              font-style: normal;
              color: #1e1408;
              font-weight: 500;
            }

            .gh-nav {
              display: flex;
              justify-content: center;
              border-bottom: 2px solid #1e1408;
              background: #faf5e9;
              overflow-x: auto;
            }

            .gh-nav a {
              font-size: 11px;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #1e1408;
              text-decoration: none;
              padding: 10px 24px;
              border-right: 1px solid #c9a84c;
              white-space: nowrap;
              font-family: 'EB Garamond', serif;
            }

            .gh-nav a:last-child {
              border-right: none;
            }

            .gh-nav a:hover,
            .gh-nav a.active {
              background: #1e1408;
              color: #c9a84c;
            }

            .hero-wrap {
              position: relative;
              height: 460px;
              overflow: hidden;
              background: #1e1408;
            }

            .hero-slide {
              position: absolute;
              inset: 0;
              opacity: 0;
              transition: opacity 1.2s ease-in-out;
            }

            .hero-slide.active {
              opacity: 1;
            }

            .hero-slide img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: contrast(1.08) saturate(1.15) brightness(0.84) sepia(0.1);
              animation: kenBurns 21s ease-in-out infinite;
            }

            .hero-overlay {
              position: absolute;
              inset: 0;
              background:
                linear-gradient(90deg, rgba(30,20,8,0.58) 0%, rgba(30,20,8,0.32) 45%, rgba(30,20,8,0.08) 100%),
                linear-gradient(0deg, rgba(30,20,8,0.42) 0%, rgba(30,20,8,0.02) 60%);
              z-index: 2;
            }

            .hero-text {
              position: absolute;
              z-index: 3;
              left: 36px;
              bottom: 38px;
              max-width: 660px;
              color: #faf5e9;
              text-shadow: 0 2px 14px rgba(0,0,0,0.38);
            }

            .hero-kicker {
              font-size: 10px;
              letter-spacing: 3.5px;
              text-transform: uppercase;
              color: #c9a84c;
              margin-bottom: 10px;
              font-family: 'EB Garamond', serif;
            }

            .hero-title {
              font-family: 'Playfair Display', serif;
              font-size: 44px;
              font-weight: 900;
              line-height: 1.04;
              letter-spacing: -1px;
              margin: 0 0 12px;
              color: #fff7e8;
            }

            .hero-sub {
              font-family: 'EB Garamond', serif;
              font-size: 20px;
              line-height: 1.45;
              color: #f2dfb0;
              max-width: 560px;
              margin: 0;
            }

            @keyframes kenBurns {
              0% {
                transform: scale(1.03) translateX(0);
              }

              100% {
                transform: scale(1.12) translateX(-18px);
              }
            }

            .cover-story {
              padding: 32px 36px 0;
              border-bottom: 2px solid #1e1408;
            }

            .mag-label {
              font-size: 10px;
              letter-spacing: 3.5px;
              text-transform: uppercase;
              color: #8b6914;
              margin-bottom: 12px;
              font-family: 'EB Garamond', serif;
            }

            .cover-headline {
              font-family: 'Playfair Display', serif;
              font-size: 46px;
              font-weight: 700;
              line-height: 1.1;
              color: #1a0f00;
              letter-spacing: -0.8px;
              margin: 0 0 14px;
            }

            .byline {
              font-size: 12px;
              color: #8b6914;
              border-top: 1px solid #c9a84c;
              border-bottom: 1px solid #c9a84c;
              padding: 8px 0;
              margin-bottom: 20px;
              font-family: 'EB Garamond', serif;
            }

            .body-text {
              font-size: 20px;
              line-height: 1.82;
              color: #2b1a00;
              margin: 0 0 16px;
              font-family: 'EB Garamond', serif;
            }

            .pullquote {
              border-top: 2px solid #1e1408;
              border-bottom: 2px solid #1e1408;
              background: #f0e8d5;
              padding: 28px 36px;
              text-align: center;
              margin: 0 0 28px;
            }

            .pullquote p {
              font-family: 'Playfair Display', serif;
              font-size: 24px;
              font-style: italic;
              color: #1a0f00;
              line-height: 1.5;
              margin: 0 0 12px;
            }

            .pullquote cite {
              font-size: 11px;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #8b6914;
              font-style: normal;
              font-family: 'EB Garamond', serif;
            }

            .below-fold {
              display: grid;
              grid-template-columns: 1fr 1fr 300px;
              border-bottom: 2px solid #1e1408;
            }

            .bf-col {
              padding: 26px 24px;
              border-right: 1px solid #c9a84c;
            }

            .bf-col:last-child {
              border-right: none;
            }

            .mag-section-label {
              font-size: 10px;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #faf5e9;
              background: #1e1408;
              padding: 5px 11px;
              display: inline-block;
              margin-bottom: 18px;
              font-family: 'EB Garamond', serif;
            }

            .small-story-text {
              font-size: 18px;
              margin-bottom: 14px;
            }

            .mag-text-link {
              font-size: 14px;
              font-style: italic;
              color: #8b6914;
              text-decoration: underline;
              font-family: 'EB Garamond', serif;
            }

            .dest-item {
              margin-bottom: 18px;
              padding-bottom: 18px;
              border-bottom: 1px solid #e0cc99;
            }

            .dest-item:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            .dest-flag {
              font-size: 24px;
              margin-bottom: 8px;
            }

            .dest-name {
              font-family: 'Playfair Display', serif;
              font-size: 17px;
              font-weight: 700;
              color: #1a0f00;
              margin-bottom: 4px;
            }

            .dest-cost {
              font-size: 14px;
              color: #8b6914;
              font-family: 'EB Garamond', serif;
            }

            .mag-sub {
              border: 1px solid #c9a84c;
              background: #f5edd8;
              padding: 22px 18px;
              text-align: center;
            }

            .mag-sub-eyebrow {
              font-size: 10px;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #8b6914;
              margin-bottom: 10px;
              font-family: 'EB Garamond', serif;
            }

            .mag-sub-headline {
              font-family: 'Playfair Display', serif;
              font-size: 19px;
              font-weight: 700;
              color: #1a0f00;
              line-height: 1.3;
              margin: 0 0 8px;
            }

            .mag-sub-body {
              font-size: 15px;
              color: #2b1a00;
              line-height: 1.65;
              margin: 0 0 16px;
              font-style: italic;
              font-family: 'EB Garamond', serif;
            }

            .mag-btn {
              display: block;
              background: #8b6914;
              color: #faf5e9;
              padding: 15px 18px;
              font-size: 15px;
              font-weight: bold;
              border: 2px solid #6b4f0f;
              font-family: 'Playfair Display', serif;
              text-decoration: none;
              text-align: center;
              margin-bottom: 10px;
              transition: background 0.15s;
            }

            .mag-btn:hover {
              background: #6b4f0f;
            }

            .mag-trust {
              font-size: 12px;
              color: #7a5c1e;
              font-style: italic;
              font-family: 'EB Garamond', serif;
              margin: 0;
            }

            @media (max-width: 768px) {
              .site {
                border-left: none;
                border-right: none;
              }

              .hide-mob {
                display: none;
              }

              .gh-topbar {
                padding: 6px 16px;
              }

              .gh-masthead {
                padding: 14px 16px 12px;
              }

              .gh-dateline {
                font-size: 10px;
              }

              .gh-mastname {
                font-size: 38px;
                letter-spacing: -1px;
              }

              .gh-issue-line {
                gap: 8px;
              }

              .gh-nav {
                justify-content: flex-start;
              }

              .gh-nav a {
                padding: 8px 14px;
                font-size: 10px;
              }

              .hero-wrap {
                height: 340px;
              }

              .hero-title {
                font-size: 28px;
              }

              .hero-sub {
                font-size: 17px;
              }

              .hero-text {
                left: 16px;
                bottom: 20px;
                max-width: 90%;
              }

              .cover-story {
                padding: 20px 16px 0;
              }

              .cover-headline {
                font-size: 32px;
              }

              .body-text {
                font-size: 18px;
              }

              .pullquote {
                padding: 22px 16px;
              }

              .pullquote p {
                font-size: 21px;
              }

              .below-fold {
                grid-template-columns: 1fr;
              }

              .bf-col {
                border-right: none;
                border-bottom: 1px solid #c9a84c;
              }

              .bf-col:last-child {
                border-bottom: none;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="site">
        <div className="gh-topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>April 2026</span>
        </div>

        <div className="gh-masthead">
          <div className="gh-dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>April 2026 · Issue 1</span>
          </div>

          <Link href="/" className="gh-mastname">
            Golden Horizons
          </Link>

          <div className="gh-issue-line">
            <span className="gh-issue-tag">
              <strong>This Issue:</strong> Where $2,000/month buys a life worth
              living
            </span>
            <span className="gh-issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report ·
              The Health File
            </span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link href="/" className="active">
            Cover
          </Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="#free-guide">Get Free Guide</Link>
        </nav>

        <section className="hero-wrap" aria-label="Golden Horizons featured stories">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`hero-slide ${currentSlide === index ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="hero-overlay" />
              <div className="hero-text">
                <div className="hero-kicker">{slide.kicker}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-sub">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="cover-story">
          <div className="mag-label">Cover Story</div>

          <h2 className="cover-headline">
            The places where your money sets you free — and why more Americans
            are finding them every day
          </h2>

          <div className="byline">
            By the Golden Horizons Editorial Team · April 2026
          </div>

          <p className="body-text">
            You spent decades building a life. Now the question is not whether
            you can retire — it is where your retirement becomes bigger, warmer,
            lighter, and more yours.
          </p>

          <p className="body-text">
            The old retirement model assumed you would stay put. But tens of
            thousands of Americans are discovering that $2,000 goes further in
            Portugal than Pennsylvania, that healthcare in Costa Rica beats what
            they left behind, and that the pace of life in a Greek island town
            feels like what retirement was supposed to be all along.
          </p>
        </section>

        <section className="pullquote">
          <p>
            &ldquo;I kept waiting for the right time. Then I realized — this is the
            right time. I was already there.&rdquo;
          </p>
          <cite>— Barbara, 63 · Now living in Lisbon on $1,900/month</cite>
        </section>

        <section className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>

            <p className="body-text small-story-text">
              What $2,000 actually gets you in 26 countries. Real rents. Real
              grocery bills. Real monthly budgets from Americans already living
              there.
            </p>

            <Link href="/destinations" className="mag-text-link">
              Compare all 26 destinations →
            </Link>
          </div>

          <div className="bf-col">
            <div className="mag-section-label">The Destination Report</div>

            <div className="dest-item">
              <div className="dest-flag">🇵🇹</div>
              <div className="dest-name">Portugal</div>
              <div className="dest-cost">from $2,500/month couple</div>
            </div>

            <div className="dest-item">
              <div className="dest-flag">🇲🇽</div>
              <div className="dest-name">Mexico</div>
              <div className="dest-cost">from $1,500/month couple</div>
            </div>

            <div className="dest-item">
              <div className="dest-flag">🇨🇷</div>
              <div className="dest-name">Costa Rica</div>
              <div className="dest-cost">from $2,000/month couple</div>
            </div>
          </div>

          <aside className="bf-col" id="free-guide">
            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Retirement Abroad Guide</div>

              <h3 className="mag-sub-headline">
                Get the free guide before choosing where to retire.
              </h3>

              <p className="mag-sub-body">
                See where $2,000/month can go further, which countries are
                easier for Americans, and what to check before making a move
                abroad.
              </p>

              <Link href="/#free-guide" className="mag-btn">
                Get My Free Guide →
              </Link>

              <p className="mag-trust">
                Free by email · No spam · Unsubscribe anytime
              </p>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
