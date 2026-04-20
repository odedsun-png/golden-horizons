'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    slogan: 'The place you retire will shape the life you live.',
    support: 'You may have more options than you think — and some can help your savings go further while improving your everyday life.',
    trigger: 'A few minutes could change how you think about retirement.',
    bg: 'https://images.pexels.com/photos/36463421/pexels-photo-36463421.jpeg?auto=compress&cs=tinysrgb&w=1800',
    bgPos: 'center 55%',
  },
  {
    slogan: 'Are you retiring where you want… or just where you\'re used to?',
    support: 'Many people never explore their options — even when a better lifestyle could be within reach.',
    trigger: 'It\'s a question worth thinking about before you decide.',
    bg: 'https://images.stockcake.com/public/6/c/5/6c59ecc6-8ff5-490a-981c-574d81c26c24_large/sunlit-outdoor-dining-stockcake.jpg',
    bgPos: 'center 40%',
  },
  {
    slogan: 'What if your savings could last longer… and your lifestyle could improve?',
    support: 'In some places, the same income can provide more comfort, less stress, and a better quality of life.',
    trigger: 'The difference can be bigger than most people expect.',
    bg: 'https://images.pexels.com/photos/12832297/pexels-photo-12832297.jpeg?auto=compress&cs=tinysrgb&w=1800',
    bgPos: 'center 50%',
  },
  {
    slogan: 'You may have more retirement options than you think.',
    support: 'We explore places where your money goes further — and your everyday life can feel easier and more enjoyable.',
    trigger: 'We share simple ideas worth considering — one email at a time.',
    bg: 'https://images.pexels.com/photos/36463421/pexels-photo-36463421.jpeg?auto=compress&cs=tinysrgb&w=1800',
    bgPos: 'center 30%',
  },
];

const DELAY = 8000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(0);

  const goTo = useCallback((n: number) => {
    setCurrent(n);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  // Fade: when current changes, update visible after a tick
  useEffect(() => {
    const t = setTimeout(() => setVisible(current), 50);
    return () => clearTimeout(t);
  }, [current]);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(next, DELAY);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

        .gh-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          background: #1a1d21;
          font-family: 'Inter', sans-serif;
        }

        .gh-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          opacity: 0;
          transition: opacity 1.4s ease;
          will-change: opacity;
        }
        .gh-bg.active { opacity: 1; }

        .gh-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(26,29,33,0.55) 0%,
            rgba(26,29,33,0.78) 40%,
            rgba(26,29,33,0.78) 60%,
            rgba(26,29,33,0.55) 100%
          );
          z-index: 2;
        }

        .gh-nav {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 30;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 56px;
        }

        .gh-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          color: #fff;
        }

        .gh-logo-text { display: flex; flex-direction: column; line-height: 1; }

        .gh-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .gh-logo-tag {
          font-size: 9px;
          color: rgba(255,255,255,0.50);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-top: 3px;
        }

        .gh-nav-links {
          display: flex;
          gap: 36px;
          align-items: center;
        }

        .gh-nav-links a {
          color: rgba(255,255,255,0.80);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .gh-nav-links a:hover { color: #dcb770; }

        .gh-nav-btn {
          background: #dcb770;
          color: #1a1a1a;
          border: none;
          padding: 11px 26px;
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .gh-nav-btn:hover { background: #e8c980; }

        .gh-content {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 80px 80px 200px;
        }

        .gh-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 6px 18px;
          margin-bottom: 32px;
        }

        .gh-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #dcb770;
          animation: gh-pulse 2.4s ease-in-out infinite;
        }

        @keyframes gh-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .gh-badge-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.80);
        }

        .gh-slides {
          position: relative;
          width: 100%;
          height: 300px;
        }

        .gh-slide {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transition: opacity 1s ease;
          pointer-events: none;
        }
        .gh-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .gh-slogan {
          font-family: 'Playfair Display', serif;
          font-size: 58px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          max-width: 900px;
        }

        .gh-support {
          font-size: 20px;
          font-weight: 300;
          color: rgba(255,255,255,0.70);
          line-height: 1.70;
          max-width: 620px;
          margin: 0 auto 10px;
        }

        .gh-trigger {
          font-size: 16px;
          font-style: italic;
          color: #dcb770;
          margin-bottom: 32px;
          opacity: 0.92;
        }

        .gh-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .gh-cta-btn {
          background: #dcb770;
          color: #1a1a1a;
          border: none;
          padding: 17px 38px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .gh-cta-btn:hover { background: #e8c980; transform: translateY(-2px); }

        .gh-cta-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }

        .gh-dots {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gh-dot {
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.28);
          cursor: pointer;
          border: none;
          padding: 0;
          transition: background 0.3s, width 0.3s;
          width: 28px;
        }
        .gh-dot.active {
          background: #dcb770;
          width: 56px;
        }

        .gh-counter {
          position: absolute;
          bottom: 28px;
          right: 56px;
          z-index: 20;
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.10em;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .gh-nav { padding: 16px 24px; }
          .gh-nav-links a { display: none; }
          .gh-content { padding: 80px 24px 80px; }
          .gh-slogan { font-size: 32px; }
          .gh-support { font-size: 17px; }
          .gh-slides { height: 380px; }
          .gh-cta-row { flex-direction: column; gap: 14px; }
          .gh-cta-btn { width: 100%; text-align: center; }
          .gh-counter { right: 24px; }
        }
      `}</style>

      <section className="gh-hero" aria-label="Golden Horizons — Retirement Abroad">

        {/* Background slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`gh-bg${visible === i ? ' active' : ''}`}
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundPosition: slide.bgPos,
            }}
          />
        ))}

        <div className="gh-overlay" />

        {/* Nav */}
        <nav className="gh-nav" aria-label="Main navigation">
          <Link href="/" className="gh-logo" aria-label="Golden Horizons home">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <circle cx="17" cy="23" r="9" stroke="#dcb770" strokeWidth="1.8"/>
              <path d="M8 23 Q17 7 26 23" fill="none" stroke="#dcb770" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="17" cy="10" r="3.2" fill="#dcb770"/>
              <line x1="17" y1="13.5" x2="17" y2="14.5" stroke="#dcb770" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <div className="gh-logo-text">
              <span className="gh-logo-name">Golden Horizons</span>
              <span className="gh-logo-tag">Your Guide to Retirement Abroad</span>
            </div>
          </Link>
          <div className="gh-nav-links">
          </div>
        </nav>

        {/* Content */}
        <div className="gh-content">
          <div className="gh-badge">
            <span className="gh-badge-dot" aria-hidden="true" />
            <span className="gh-badge-label">Retirement Travel Guide</span>
          </div>

          <div className="gh-slides" aria-live="polite" aria-atomic="true">
            {SLIDES.map((slide, i) => (
              <div key={i} className={`gh-slide${visible === i ? ' active' : ''}`}>
                <h1 className="gh-slogan">{slide.slogan}</h1>
                <p className="gh-support">{slide.support}</p>
                <p className="gh-trigger">{slide.trigger}</p>
                <div className="gh-cta-row">
                  <Link href="/articles" className="gh-cta-btn">Explore Where Your Money Goes Further</Link>
                  <span className="gh-cta-sub">See what $2,000/month<br />gets you around the world</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="gh-dots" role="tablist" aria-label="Slide navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`gh-dot${current === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="gh-counter" aria-hidden="true">
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </div>

      </section>
    </>
  );
}
