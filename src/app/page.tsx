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
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400',
      kicker: 'Cover Story · The Destination Report',
      title: 'Where $2,000 a month can still buy a beautiful life',
      sub: 'Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.',
    },
    {
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1400',
      kicker: 'The Expat File',
      title: 'The old-town life people dream about — cafés, shade, and slow golden evenings',
      sub: 'A real European street, real cafés, real texture — the kind of daily life retirement should make possible.',
    },
    {
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1400',
      kicker: 'The Money Page',
      title: 'Seaside towns where every morning feels like a postcard',
      sub: 'Historic streets, sea views, walkable neighborhoods, and a softer rhythm — with the numbers checked before the dream begins.',
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
          <Link href="#subscribe">Subscribe Free</Link>
        </nav>

        {/* ── HERO ── */}
        <div className="hero-wrap">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="hero-slide"
              style={{ opacity: currentSlide === i ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}
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
          <p>Three windows into the Golden Horizons promise: old-world charm, sea air, richer days, and a retirement lifestyle that still feels possible.</p>
        </div>

        {/* ── COVER STORY ── */}
        <div className="cover-story">
          <div className="mag-label">Cover Story · The Destination Report</div>
          <h2 className="cover-headline">The places where your money sets you free — and why more Americans are finding them every day</h2>
          <div className="byline">By the Editors of Golden Horizons · Cover Story · April 2026</div>
          <p className="body-text">
            There are places in the world where $2,000 a month buys the kind of life most Americans spend their entire career chasing. A terrace overlooking the sea. Fresh food every morning. A doctor you can actually afford to see. These places are not secrets — they are simply overlooked.
          </p>
          <p className="body-text">
            Golden Horizons exists to change that. Every morning we find one of these places, dig into the real numbers, and bring it straight to you. No hype. No sales pitch. Just the truth about what is possible — and what it actually costs.
          </p>
          <Link href="/articles" className="read-more">Read all stories in this issue →</Link>
        </div>

        {/* ── PULL QUOTE ── */}
        <div className="pullquote">
          <p>&ldquo;Most people plan carefully for retirement. Almost none plan <em>where</em> to live it. That decision changes everything.&rdquo;</p>
          <cite>— The Golden Horizons Editors</cite>
        </div>

        {/* ── BELOW FOLD ── */}
        <div className="section-banner">Inside This Issue</div>
        <div className="below-fold">

          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>
            <div className="story-item">
              <img className="story-img" src="https://images.pexels.com/photos/32754142/pexels-photo-32754142.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Albania" />
              <div className="story-cat">Cost of Living · Albania</div>
              <Link href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2" style={{ textDecoration: 'none' }}>
                <div className="story-title">What $1,000 a Month Gets You in Gjirokastër</div>
              </Link>
              <Link href="/articles/albania-what-1000-a-month-gets-you-in-gjirokastr-v2" className="story-read">Read this story →</Link>
            </div>
            <div className="story-item">
              <img className="story-img" src="https://images.pexels.com/photos/15894001/pexels-photo-15894001.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cambodia" />
              <div className="story-cat">Cost of Living · Cambodia</div>
              <Link href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2" style={{ textDecoration: 'none' }}>
                <div className="story-title">What $1,000 a Month Gets You in Siem Reap</div>
              </Link>
              <Link href="/articles/cambodia-what-1000-a-month-gets-you-in-siem-reap-v2" className="story-read">Read this story →</Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="mag-section-label">The Visa File</div>
            <div className="story-item">
              <img className="story-img" src="https://images.pexels.com/photos/154241/pexels-photo-154241.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ireland" />
              <div className="story-cat">Visas &amp; Residency · Ireland</div>
              <Link href="/articles/ireland-residency-options-for-american-retirees-v2" style={{ textDecoration: 'none' }}>
                <div className="story-title">Residency Options for American Retirees in Ireland</div>
              </Link>
              <Link href="/articles/ireland-residency-options-for-american-retirees-v2" className="story-read">Read this story →</Link>
            </div>
            <div className="story-item">
              <img className="story-img" src="https://images.pexels.com/photos/20813456/pexels-photo-20813456.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Georgia" />
              <div className="story-cat">Visas &amp; Residency · Georgia</div>
              <Link href="/articles/georgia-residency-options-for-us-retirees" style={{ textDecoration: 'none' }}>
                <div className="story-title">Residency Options for U.S. Retirees in Georgia</div>
              </Link>
              <Link href="/articles/georgia-residency-options-for-us-retirees" className="story-read">Read this story →</Link>
            </div>
          </div>

          <div className="bf-col">
            <div className="sb-pull">
              <p>&ldquo;I kept waiting for the right time. Then I realized — this <em>is</em> the right time.&rdquo;</p>
              <cite>— Barbara, 63 · Lisbon, $1,900/mo</cite>
            </div>
            <div className="mag-sub" id="subscribe">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story every morning — free, forever.</div>
              <Link href="/golden_horizons_final.pdf" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers planning their next chapter ◆</div>
            </div>
          </div>

        </div>

        {/* ── DESTINATIONS STRIP ── */}
        <div className="section-banner">The Destination Report · At a Glance</div>
        <div className="dest-strip">
          <div className="dest-label">Best value destinations for Americans retiring abroad</div>
          <div className="dest-row">
            {[
              { name: 'Portugal', cost: 'from $1,800/mo', tag: 'Top Ranked' },
              { name: 'Panama', cost: 'from $1,600/mo', tag: 'Best Healthcare' },
              { name: 'Mexico', cost: 'from $1,400/mo', tag: 'Most Popular' },
              { name: 'Vietnam', cost: 'from $1,200/mo', tag: 'Best Value' },
              { name: 'Belize', cost: 'from $1,700/mo', tag: 'English Only' },
              { name: 'Ecuador', cost: 'from $1,300/mo', tag: 'Hidden Gem' },
            ].map((d) => (
              <Link key={d.name} href="/destinations" className="dest-card">
                <div className="dest-name">{d.name}</div>
                <div className="dest-cost">{d.cost}</div>
                <div className="dest-tag">{d.tag}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ornament">— ✦ —</div>

        {/* ── FOOTER ── */}
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <div className="footer-links">
            <Link href="/">Website</Link><span>|</span>
            <Link href="/articles">All Stories</Link><span>|</span>
            <Link href="/destinations">Destinations</Link><span>|</span>
            <Link href="/about">About</Link><span>|</span>
            <Link href="/privacy-policy">Privacy</Link><span>|</span>
            <Link href="/contact">Contact</Link><span>|</span>
            <Link href="/terms-of-use">Terms</Link>
          </div>
          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>© 2026 Golden Horizons — All rights reserved</p>
        </footer>

      </div>
    </main>
  );
}
