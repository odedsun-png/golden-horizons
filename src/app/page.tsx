/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

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
              margin: 0;
              padding: 0;
            }

            .site {
              max-width: 980px;
              margin: 0 auto;
              background: #faf5e9;
              border-left: 1px solid #d4b896;
              border-right: 1px solid #d4b896;
              color: #1a0f00;
            }

            .topbar {
              background: #1e1408;
              padding: 7px 36px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 16px;
            }

            .topbar span {
              font-size: 10px;
              letter-spacing: 2.5px;
              text-transform: uppercase;
              color: #c9a84c;
              font-family: 'EB Garamond', serif;
              white-space: nowrap;
            }

            .masthead {
              padding: 20px 36px 15px;
              text-align: center;
              border-bottom: 3px double #1e1408;
              background: #faf5e9;
            }

            .dateline {
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

            .mastname {
              font-family: 'Playfair Display', serif;
              font-size: 66px;
              font-weight: 900;
              color: #1e1408;
              line-height: 1;
              letter-spacing: -2px;
              text-decoration: none;
              display: block;
            }

            .issue-line {
              display: flex;
              justify-content: center;
              gap: 28px;
              flex-wrap: wrap;
              margin-top: 10px;
            }

            .issue-tag {
              font-size: 12px;
              font-style: italic;
              color: #8b6914;
              font-family: 'EB Garamond', serif;
            }

            .issue-tag strong {
              font-style: normal;
              color: #1e1408;
              font-weight: 500;
            }

            .nav {
              display: flex;
              justify-content: center;
              border-bottom: 2px solid #1e1408;
              background: #faf5e9;
              overflow-x: auto;
            }

            .nav a {
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

            .nav a:last-child {
              border-right: none;
            }

            .nav a:hover,
            .nav a.active {
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
              0% { transform: scale(1.03) translateX(0); }
              100% { transform: scale(1.12) translateX(-18px); }
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
              margin: 0;
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

            .section-bar {
              background: #1e1408;
              color: #c9a84c;
              padding: 8px 36px;
              font-size: 10px;
              letter-spacing: 3.5px;
              text-transform: uppercase;
              font-family: 'EB Garamond', serif;
            }

            .inside-grid {
              display: grid;
              grid-template-columns: 1fr 1fr 300px;
              border-bottom: 2px solid #1e1408;
            }

            .inside-col {
              padding: 26px 24px;
              border-right: 1px solid #c9a84c;
            }

            .inside-col:last-child {
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

            .story-item {
              margin-bottom: 18px;
              padding-bottom: 18px;
              border-bottom: 1px solid #e0cc99;
            }

            .story-item:last-child {
              margin-bottom: 0;
              padding-bottom: 0;
              border-bottom: none;
            }

            .story-item img {
              width: 100%;
              height: 115px;
              object-fit: cover;
              margin-bottom: 10px;
              filter: contrast(1.08) saturate(1.15) brightness(0.84) sepia(0.1);
            }

            .story-kicker {
              font-size: 9px;
              letter-spacing: 2.2px;
              text-transform: uppercase;
              color: #8b6914;
              margin-bottom: 6px;
              font-family: 'EB Garamond', serif;
            }

            .story-title {
              font-family: 'Playfair Display', serif;
              font-size: 17px;
              font-weight: 700;
              line-height: 1.22;
              color: #1a0f00;
              margin: 0 0 7px;
            }

            .story-link {
              font-size: 13px;
              font-style: italic;
              color: #8b6914;
              text-decoration: underline;
              font-family: 'EB Garamond', serif;
            }

            .side-quote {
              border-top: 2px solid #1e1408;
              border-bottom: 2px solid #1e1408;
              padding: 20px 16px;
              margin-bottom: 18px;
              text-align: center;
              background: #f5edd8;
            }

            .side-quote p {
              font-family: 'Playfair Display', serif;
              font-size: 19px;
              font-style: italic;
              line-height: 1.4;
              color: #1a0f00;
              margin: 0 0 12px;
            }

            .side-quote cite {
              font-size: 10px;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #8b6914;
              font-style: normal;
              font-family: 'EB Garamond', serif;
            }

            .small-sub-box {
              border: 1px solid #c9a84c;
              background: #f5edd8;
              text-align: center;
              padding: 20px 16px;
            }

            .small-sub-box h3 {
              font-family: 'Playfair Display', serif;
              font-size: 19px;
              line-height: 1.25;
              margin: 0 0 10px;
              color: #1a0f00;
            }

            .small-sub-box p {
              font-family: 'EB Garamond', serif;
              font-size: 14px;
              line-height: 1.55;
              font-style: italic;
              color: #2b1a00;
              margin: 0 0 14px;
            }

            .small-sub-btn {
              display: block;
              background: #8b6914;
              color: #faf5e9;
              padding: 13px 14px;
              text-decoration: none;
              font-family: 'Playfair Display', serif;
              font-size: 14px;
              font-weight: 700;
            }

            .destination-glance {
              border-bottom: 1px solid #c9a84c;
            }

            .glance-inner {
              padding: 24px 30px;
            }

            .glance-title {
              font-size: 10px;
              letter-spacing: 3.5px;
              text-transform: uppercase;
              color: #8b6914;
              margin-bottom: 16px;
              font-family: 'EB Garamond', serif;
            }

            .glance-grid {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              gap: 8px;
            }

            .glance-card {
              border: 1px solid #c9a84c;
              text-align: center;
              padding: 12px 8px;
              background: #fbf3df;
            }

            .glance-card strong {
              display: block;
              font-family: 'Playfair Display', serif;
              font-size: 14px;
              margin-bottom: 5px;
              color: #1a0f00;
            }

            .glance-card span {
              display: block;
              font-family: 'EB Garamond', serif;
              font-size: 12px;
              color: #8b6914;
              font-style: italic;
            }

            .ornament {
              text-align: center;
              padding: 18px 0;
              border-bottom: 3px solid #c9a84c;
              color: #c9a84c;
              letter-spacing: 14px;
            }

            .guide-split {
              display: grid;
              grid-template-columns: 1fr 1fr;
              border-bottom: 3px solid #c9a84c;
            }

            .guide-copy {
              padding: 36px;
              background: #faf5e9;
            }

            .guide-eyebrow {
              font-size: 10px;
              letter-spacing: 4px;
              color: #8b6914;
              text-transform: uppercase;
              font-family: 'EB Garamond', serif;
              margin-bottom: 14px;
            }

            .guide-copy h2 {
              font-family: 'Playfair Display', serif;
              font-size: 34px;
              line-height: 1.05;
              margin: 0 0 14px;
              color: #1a0f00;
            }

            .guide-copy p {
              font-family: 'EB Garamond', serif;
              font-size: 18px;
              line-height: 1.55;
              font-style: italic;
              margin: 0 0 16px;
              color: #2b1a00;
            }

            .guide-list {
              list-style: none;
              padding: 0;
              margin: 0;
              font-family: 'EB Garamond', serif;
              font-size: 16px;
              line-height: 1.9;
              color: #2b1a00;
            }

            .guide-list li::before {
              content: "✓";
              color: #8b6914;
              font-weight: bold;
              margin-right: 8px;
            }

            .guide-form {
              background: #2a1d0e;
              padding: 36px;
              color: #faf5e9;
              position: relative;
            }

            .reader-offer {
              position: absolute;
              top: 16px;
              right: 16px;
              background: #faf5e9;
              color: #8b6914;
              padding: 5px 10px;
              font-size: 10px;
              letter-spacing: 2px;
              text-transform: uppercase;
              font-family: 'EB Garamond', serif;
              transform: rotate(2deg);
            }

            .guide-form h3 {
              font-family: 'Playfair Display', serif;
              font-size: 27px;
              margin: 0 0 18px;
              color: #faf5e9;
            }

            .form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              margin-bottom: 8px;
            }

            .guide-form input {
              width: 100%;
              box-sizing: border-box;
              padding: 14px;
              border: 1px solid #6b4f2a;
              background: #3a2a17;
              color: #faf5e9;
              font-family: 'EB Garamond', serif;
              font-size: 15px;
            }

            .guide-form input::placeholder {
              color: #b59a62;
            }

            .guide-form .email-input {
              margin-bottom: 10px;
            }

            .guide-form button {
              width: 100%;
              border: none;
              background: #c9a84c;
              color: #1e1408;
              padding: 15px;
              font-family: 'Playfair Display', serif;
              font-weight: 700;
              font-size: 16px;
              cursor: pointer;
            }

            .guide-form button:hover {
              background: #d8bb66;
            }

            .trust-line {
              text-align: center;
              font-family: 'EB Garamond', serif;
              font-size: 12px;
              color: #c9a84c;
              margin-top: 14px;
            }

            .footer {
              background: #1e1408;
              padding: 34px 36px;
              text-align: center;
            }

            .footer-name {
              font-family: 'Playfair Display', serif;
              font-size: 28px;
              font-weight: 700;
              color: #faf5e9;
              margin-bottom: 10px;
            }

            .footer p {
              font-family: 'EB Garamond', serif;
              color: #c9a84c;
              font-size: 13px;
              margin: 0 0 14px;
            }

            .footer-links {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 12px;
              font-family: 'EB Garamond', serif;
              font-size: 13px;
              color: #c9a84c;
            }

            .footer-links a {
              color: #c9a84c;
              text-decoration: none;
            }

            .copyright {
              margin-top: 18px !important;
              font-size: 11px !important;
              opacity: 0.55;
            }

            @media (max-width: 768px) {
              .site {
                border-left: none;
                border-right: none;
              }

              .hide-mob {
                display: none;
              }

              .topbar {
                padding: 6px 16px;
              }

              .masthead {
                padding: 14px 16px 12px;
              }

              .dateline {
                font-size: 10px;
              }

              .mastname {
                font-size: 38px;
                letter-spacing: -1px;
              }

              .issue-line {
                gap: 8px;
              }

              .nav {
                justify-content: flex-start;
              }

              .nav a {
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

              .inside-grid {
                grid-template-columns: 1fr;
              }

              .inside-col {
                border-right: none;
                border-bottom: 1px solid #c9a84c;
              }

              .glance-grid {
                grid-template-columns: 1fr 1fr;
              }

              .guide-split {
                grid-template-columns: 1fr;
              }

              .guide-copy,
              .guide-form {
                padding: 26px 18px;
              }

              .guide-copy h2 {
                font-size: 28px;
              }

              .form-row {
                grid-template-columns: 1fr;
              }
            }
          `,
        }}
      />

      <main className="site">
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
          <div className="mag-label">Cover Story · Destination Report</div>

          <h2 className="cover-headline">
            The places where your money sets you free — and why more Americans
            are finding them every day
          </h2>

          <div className="byline">
            By the Golden Horizons Editorial Team · Cover Story · April 2026
          </div>

          <p className="body-text">
            There are places in the world where $2,000 a month buys the kind of
            life most Americans spend their entire careers chasing. A terrace
            overlooking the sea. Fresh food every morning. A doctor you can
            actually afford to see. Those places are not secrets — they are
            simply overlooked.
          </p>

          <p className="body-text">
            Golden Horizons exists to change that. Every morning we find one of
            these places, dig into the real numbers, and bring it straight to
            you. No hype. No sales pitch. Just the truth about what is possible —
            and where it actually costs less.
          </p>
        </section>

        <section className="pullquote">
          <p>
            &ldquo;Most people plan carefully for retirement. Almost none plan where
            to live it. That decision changes everything.&rdquo;
          </p>
          <cite>— The Golden Horizons Editors</cite>
        </section>

        <div className="section-bar">Inside This Issue</div>

        <section className="inside-grid">
          <div className="inside-col">
            <div className="mag-section-label">The Money Page</div>

            <article className="story-item">
              <img
                src="https://images.pexels.com/photos/2175952/pexels-photo-2175952.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Green mountain landscape"
              />
              <div className="story-kicker">Cost of Living · Albania</div>
              <h3 className="story-title">
                What $1,000 a Month Gets You in Gjirokastër
              </h3>
              <Link href="/articles" className="story-link">
                Read this story →
              </Link>
            </article>

            <article className="story-item">
              <img
                src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Historic temple scene"
              />
              <div className="story-kicker">Cost of Living · Cambodia</div>
              <h3 className="story-title">
                What $1,000 a Month Gets You in Siem Reap
              </h3>
              <Link href="/articles" className="story-link">
                Read this story →
              </Link>
            </article>
          </div>

          <div className="inside-col">
            <div className="mag-section-label">The Visa Desk</div>

            <article className="story-item">
              <img
                src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coastal cliffs"
              />
              <div className="story-kicker">Visas & Residency · Ireland</div>
              <h3 className="story-title">
                Residency Options for American Retirees in Ireland
              </h3>
              <Link href="/articles" className="story-link">
                Read this story →
              </Link>
            </article>

            <article className="story-item">
              <img
                src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Retiree sitting near cafe"
              />
              <div className="story-kicker">Visas & Residency · Georgia</div>
              <h3 className="story-title">
                Residency Options for U.S. Retirees in Georgia
              </h3>
              <Link href="/articles" className="story-link">
                Read this story →
              </Link>
            </article>
          </div>

          <aside className="inside-col">
            <div className="side-quote">
              <p>
                &ldquo;I kept waiting for the right time. Then I realized — this is
                the right time.&rdquo;
              </p>
              <cite>— Barbara, 63 · Lisbon</cite>
            </div>

            <div className="small-sub-box">
              <div className="mag-label">Free Reader Guide</div>
              <h3>Get the Free Retirement Abroad Guide</h3>
              <p>
                A practical checklist for Americans 55+ — costs, healthcare,
                visas and lifestyle across 12 countries.
              </p>
              <Link href="#free-guide" className="small-sub-btn">
                Get My Free Guide →
              </Link>
            </div>
          </aside>
        </section>

        <section className="destination-glance">
          <div className="section-bar">The Destination Report · At a Glance</div>

          <div className="glance-inner">
            <div className="glance-title">
              Best Value Destinations for Americans Retiring Abroad
            </div>

            <div className="glance-grid">
              <Link href="/destinations/portugal" className="glance-card">
                <strong>Portugal</strong>
                <span>from $1,800/mo</span>
              </Link>

              <Link href="/destinations/panama" className="glance-card">
                <strong>Panama</strong>
                <span>from $1,600/mo</span>
              </Link>

              <Link href="/destinations/mexico" className="glance-card">
                <strong>Mexico</strong>
                <span>from $1,400/mo</span>
              </Link>

              <Link href="/destinations/vietnam" className="glance-card">
                <strong>Vietnam</strong>
                <span>from $1,200/mo</span>
              </Link>

              <Link href="/destinations/belize" className="glance-card">
                <strong>Belize</strong>
                <span>from $1,700/mo</span>
              </Link>

              <Link href="/destinations/ecuador" className="glance-card">
                <strong>Ecuador</strong>
                <span>from $1,300/mo</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="ornament">— ✦ —</div>

        <section className="guide-split" id="free-guide">
          <div className="guide-copy">
            <div className="guide-eyebrow">Free Retirement Abroad Guide</div>

            <h2>Get the free guide before choosing where to retire.</h2>

            <p>
              For Americans 55+ comparing cost, healthcare, visas and lifestyle
              abroad.
            </p>

            <ul className="guide-list">
              <li>Where $2,000/month goes furthest — 12 countries</li>
              <li>Healthcare quality and real monthly costs</li>
              <li>Visa and residency options explained simply</li>
              <li>Safety scores and expat community ratings</li>
              <li>What to check before making a move abroad</li>
            </ul>
          </div>

          <div className="guide-form">
            <div className="reader-offer">Reader Offer</div>

            <h3>Send me the free guide</h3>

            <form action="/api/subscribe" method="POST">
              <div className="form-row">
                <input name="firstName" type="text" placeholder="First name" />
                <input name="lastName" type="text" placeholder="Last name" />
              </div>

              <input
                className="email-input"
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />

              <button type="submit">Get My Free Guide →</button>
            </form>

            <div className="trust-line">
              Instant access · No spam · Unsubscribe anytime · 100% free
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-name">Golden Horizons</div>

          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done yet.
          </p>

          <div className="footer-links">
            <Link href="/">Website</Link>
            <Link href="/articles">All Stories</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/terms-of-use">Terms</Link>
          </div>

          <p className="copyright">
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
