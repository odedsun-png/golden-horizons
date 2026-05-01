"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'Cover Story · The Destination Report',
      title: 'Where $2,000 a month can still buy a beautiful life',
      sub: 'Warm evenings, walkable towns, better healthcare — the retirement dream is moving overseas.',
    },
    {
      image: 'https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'The Money Page · Cost of Living Report',
      title: 'What your Social Security check actually buys abroad',
      sub: '$1,800/month goes further in Portugal than Pennsylvania. Here\'s the real math.',
    },
    {
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'The Health File · Healthcare Overseas',
      title: 'Better care for less than you\'re paying now',
      sub: 'How expats get world-class healthcare in Spain, Costa Rica, and Malaysia.',
    },
  ];

  return (
    <main className="mag-page">
      <div className="site">

        <div className="topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>April 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>April 2026 · Issue 1</span>
          </div>
          <Link href="/" className="mastname">Golden Horizons</Link>
          <div className="issue-line">
            <span className="issue-tag"><strong>This Issue:</strong> Where $2,000/month buys a life worth living</span>
            <span className="issue-tag"><strong>Inside:</strong> The Money Page · The Destination Report · The Health File</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/" className="active">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="#free-guide">Subscribe Free</Link>
        </nav>

        {/* ── HERO ── */}
        <div style={{ position: 'relative', height: '460px', overflow: 'hidden', background: '#1e1408' }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{
                position: 'absolute', inset: 0,
                opacity: currentSlide === i ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
              }}
            >
              <img
                src={slide.image}
                alt=""
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'contrast(1.05) saturate(1.04) brightness(0.92) sepia(0.05)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg,rgba(30,20,8,.56) 0%,rgba(30,20,8,.06) 100%),linear-gradient(0deg,rgba(30,20,8,.34) 0%,rgba(30,20,8,.04) 58%)',
              }} />
              <div style={{ position: 'absolute', zIndex: 3, left: 36, bottom: 38, maxWidth: 660, color: '#faf5e9' }}>
                <div style={{ fontSize: 10, letterSpacing: '3.5px', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 10, fontFamily: 'EB Garamond, serif' }}>
                  {slide.kicker}
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 900, lineHeight: 1.04, letterSpacing: -1, marginBottom: 12, color: '#fff7e8' }}>
                  {slide.title}
                </div>
                <div style={{ fontFamily: 'EB Garamond, serif', fontSize: 20, lineHeight: 1.45, color: '#f2dfb0', maxWidth: 560 }}>
                  {slide.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── COVER STORY ── */}
        <div style={{ padding: '32px 36px 28px', borderBottom: '2px solid #1e1408' }}>
          <div className="section-banner" style={{ display: 'inline-block', marginBottom: 16, padding: '5px 12px' }}>Cover Story</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 42, fontWeight: 700, lineHeight: 1.1, color: '#1a0f00', letterSpacing: -0.8, marginBottom: 14 }}>
            The places where your money sets you free — and why more Americans are finding them every day
          </h2>
          <div style={{ fontSize: 12, color: '#8b6914', borderTop: '1px solid #c9a84c', borderBottom: '1px solid #c9a84c', padding: '8px 0', marginBottom: 20, fontFamily: 'EB Garamond, serif' }}>
            By the Golden Horizons Editorial Team · April 2026
          </div>
          <p style={{ fontSize: 20, lineHeight: 1.82, color: '#2b1a00', marginBottom: 16, fontFamily: 'EB Garamond, serif' }}>
            You spent decades building a life. Now the question is not whether you can retire — it is where. Tens of thousands of Americans are discovering that $2,000 goes further in Portugal than Pennsylvania, that healthcare in Costa Rica beats what they left behind, and that the pace of life abroad feels like what retirement was supposed to be all along.
          </p>
          <Link href="/articles" style={{ fontSize: 14, fontStyle: 'italic', color: '#8b6914', textDecoration: 'underline', fontFamily: 'EB Garamond, serif' }}>
            Browse all stories →
          </Link>
        </div>

        {/* ── PULL QUOTE ── */}
        <div className="pullquote">
          <p>&ldquo;I kept waiting for the right time. Then I realized — this is the right time. I was already there.&rdquo;</p>
          <cite>— Barbara, 63 · Now living in Lisbon on $1,900/month</cite>
        </div>

        {/* ── BELOW FOLD ── */}
        <div className="section-banner">This Issue</div>
        <div className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: '#2b1a00', marginBottom: 14, fontFamily: 'EB Garamond, serif' }}>
              What $2,000 actually gets you in 26 countries. Real rents, real grocery bills, real monthly budgets from Americans already living there.
            </p>
            <Link href="/destinations" style={{ fontSize: 14, fontStyle: 'italic', color: '#8b6914', textDecoration: 'underline', fontFamily: 'EB Garamond, serif' }}>
              Compare all 26 destinations →
            </Link>
          </div>
          <div className="bf-col">
            <div className="mag-section-label">The Destination Report</div>
            {[
              { flag: '🇵🇹', name: 'Portugal', cost: 'from $2,500/month couple', slug: 'portugal' },
              { flag: '🇲🇽', name: 'Mexico', cost: 'from $1,500/month couple', slug: 'mexico' },
              { flag: '🇨🇷', name: 'Costa Rica', cost: 'from $2,000/month couple', slug: 'costa-rica' },
              { flag: '🇹🇭', name: 'Thailand', cost: 'from $1,400/month couple', slug: 'thailand' },
            ].map((d) => (
              <Link key={d.slug} href={`/destinations/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div className="story-item">
                  <div style={{ fontSize: 22, marginBottom: 4 }}>{d.flag}</div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: '#1a0f00' }}>{d.name}</div>
                  <div style={{ fontSize: 13, color: '#8b6914', fontFamily: 'EB Garamond, serif' }}>{d.cost}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="bf-col">
            <div id="free-guide" className="mag-sub">
              <div className="mag-sub-eyebrow">Free Retirement Abroad Guide</div>
              <h3 className="mag-sub-headline">Get the free guide before choosing where to retire.</h3>
              <p className="mag-sub-body">See where $2,000/month goes further, which countries are easiest for Americans, and what to check before you move.</p>
              <Link href="#free-guide" className="mag-btn">Get My Free Guide →</Link>
              <p className="mag-trust">Free by email · No spam · Unsubscribe anytime</p>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <div className="footer-links">
            <Link href="/">Cover</Link><span>|</span>
            <Link href="/articles">Articles</Link><span>|</span>
            <Link href="/destinations">Destinations</Link><span>|</span>
            <Link href="/about">About</Link><span>|</span>
            <Link href="/privacy-policy">Privacy</Link><span>|</span>
            <Link href="/contact">Contact</Link>
          </div>
          <p>© 2026 Golden Horizons — All rights reserved</p>
        </footer>

      </div>
    </main>
  );
}
