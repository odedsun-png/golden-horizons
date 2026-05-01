"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'Cover Story · The Destination Report',
      title: 'Where $2,000 a month can still buy a beautiful life',
      subtitle: 'Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.',
    },
    {
      image: 'https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'The Money Page · Cost of Living Report',
      title: 'What your Social Security check actually buys abroad',
      subtitle: '$1,800 a month goes further in Portugal than Pennsylvania. Here's the math on real monthly budgets.',
    },
    {
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      kicker: 'The Health File · Healthcare Overseas',
      title: 'Better care for less than you're paying now',
      subtitle: 'How expats get world-class healthcare in Spain, Costa Rica, and Malaysia — without the US price tag.',
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
          
          .site { max-width: 980px; margin: 0 auto; background: #faf5e9; border: 1px solid #d4b896; }
          
          .hero-wrap { position: relative; height: 460px; overflow: hidden; background: #1e1408; }
          .hero-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease-in-out; }
          .hero-slide.active { opacity: 1; }
          .hero-slide img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.05) saturate(1.04) brightness(0.92) sepia(0.05); animation: kenBurns 21s ease-in-out infinite; }
          .hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(30,20,8,0.56) 0%, rgba(30,20,8,0.30) 42%, rgba(30,20,8,0.06) 100%), linear-gradient(0deg, rgba(30,20,8,0.34) 0%, rgba(30,20,8,0.04) 58%); z-index: 2; }
          .hero-text { position: absolute; z-index: 3; left: 36px; bottom: 38px; max-width: 660px; color: #faf5e9; text-shadow: 0 2px 14px rgba(0,0,0,0.38); }
          .hero-kicker { font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: #c9a84c; margin-bottom: 10px; font-family: 'EB Garamond', serif; }
          .hero-title { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 900; line-height: 1.04; letter-spacing: -1px; margin-bottom: 12px; color: #fff7e8; }
          .hero-sub { font-family: 'EB Garamond', serif; font-size: 20px; line-height: 1.45; color: #f2dfb0; max-width: 560px; }
          
          @keyframes kenBurns { 0% { transform: scale(1.03) translateX(0); } 100% { transform: scale(1.12) translateX(-18px); } }
          
          .cover-story { padding: 32px 36px 0; border-bottom: 2px solid #1e1408; }
          .mag-label { font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: #8b6914; margin-bottom: 12px; font-family: 'EB Garamond', serif; }
          .cover-headline { font-family: 'Playfair Display', serif; font-size: 46px; font-weight: 700; line-height: 1.1; color: #1a0f00; letter-spacing: -0.8px; margin-bottom: 14px; }
          .byline { font-size: 12px; color: #8b6914; border-top: 1px solid #c9a84c; border-bottom: 1px solid #c9a84c; padding: 8px 0; margin-bottom: 20px; font-family: 'EB Garamond', serif; }
          .body-text { font-size: 20px; line-height: 1.82; color: #2b1a00; margin-bottom: 16px; font-family: 'EB Garamond', serif; }
          
          .pullquote { border-top: 2px solid #1e1408; border-bottom: 2px solid #1e1408; background: #f0e8d5; padding: 28px 36px; text-align: center; margin: 0 0 28px; }
          .pullquote p { font-family: 'Playfair Display', serif; font-size: 24px; font-style: italic; color: #1a0f00; line-height: 1.5; margin-bottom: 12px; }
          .pullquote cite { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8b6914; font-style: normal; }
          
          .below-fold { display: grid; grid-template-columns: 1fr 1fr 300px; border-bottom: 2px solid #1e1408; }
          .bf-col { padding: 26px 24px; border-right: 1px solid #c9a84c; }
          .bf-col:last-child { border-right: none; }
          .mag-section-label { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #faf5e9; background: #1e1408; padding: 5px 11px; display: inline-block; margin-bottom: 18px; font-family: 'EB Garamond', serif; }
          
          .dest-item { margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #e0cc99; }
          .dest-item:last-child { border-bottom: none; }
          .dest-flag { font-size: 24px; margin-bottom: 8px; }
          .dest-name { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: #1a0f00; margin-bottom: 4px; }
          .dest-cost { font-size: 14px; color: #8b6914; font-family: 'EB Garamond', serif; }
          
          .mag-sub { border: 1px solid #c9a84c; background: #f5edd8; padding: 22px 18px; text-align: center; }
          .mag-sub-eyebrow { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #8b6914; margin-bottom: 10px; font-family: 'EB Garamond', serif; }
          .mag-sub-headline { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: #1a0f00; line-height: 1.3; margin-bottom: 8px; }
          .mag-sub-body { font-size: 15px; color: #2b1a00; line-height: 1.65; margin-bottom: 16px; font-style: italic; font-family: 'EB Garamond', serif; }
          .mag-btn { display: block; background: #8b6914; color: #faf5e9; padding: 15px 18px; font-size: 15px; font-weight: bold; border: 2px solid #6b4f0f; font-family: 'Playfair Display', serif; text-decoration: none; text-align: center; margin-bottom: 10px; transition: background 0.15s; }
          .mag-btn:hover { background: #6b4f0f; }
          .mag-trust { font-size: 12px; color: #7a5c1e; font-style: italic; font-family: 'EB Garamond', serif; }
          
          @media (max-width: 768px) {
            .hero-wrap { height: 340px; }
            .hero-title { font-size: 28px; }
            .hero-text { left: 16px; bottom: 20px; max-width: 90%; }
            .cover-story { padding: 20px 16px 0; }
            .cover-headline { font-size: 32px; }
            .body-text { font-size: 18px; }
            .below-fold { grid-template-columns: 1fr; }
            .bf-col { border-right: none; border-bottom: 1px solid #c9a84c; }
            .bf-col:last-child { border-bottom: none; }
          }
        `
      }} />

      <Header />

      <div className="site">
        <div className="gh-topbar">
          <span>Vol. I, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>April 2026</span>
        </div>

        <div className="gh-masthead">
          <div className="gh-dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>April 2026 · Issue 1</span>
          </div>
          <Link href="/" className="gh-mastname">Golden Horizons</Link>
          <div className="gh-issue-line">
            <span className="gh-issue-tag"><strong>This Issue:</strong> Where $2,000/month buys a life worth living</span>
            <span className="gh-issue-tag"><strong>Inside:</strong> The Money Page · The Destination Report · The Health File</span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link href="/" className="active">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="#free-guide">Get Free Guide</Link>
        </nav>

        <div className="hero-wrap">
          {heroSlides.map((slide, index) => (
            <div key={index} className={`hero-slide ${currentSlide === index ? 'active' : ''}`}>
              <img src={slide.image} alt="" />
              <div className="hero-overlay" />
              <div className="hero-text">
                <div className="hero-kicker">{slide.kicker}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-sub">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cover-story">
          <div className="mag-label">Cover Story</div>
          <h2 className="cover-headline">The places where your money sets you free — and why more Americans are finding them every day</h2>
          <div className="byline">By the Golden Horizons Editorial Team · April 2026</div>
          
          <p className="body-text">
            You spent decades building a life. Now the question is not whether you can retire — it is where your retirement becomes bigger, warmer, lighter, and more yours.
          </p>
          <p className="body-text">
            The old retirement model assumed you'd stay put. But tens of thousands of Americans are discovering that $2,000 goes further in Portugal than Pennsylvania, that healthcare in Costa Rica beats what they left behind, and that the pace of life in a Greek island town feels like what retirement was supposed to be all along.
          </p>
        </div>

        <div className="pullquote">
          <p>"I kept waiting for the right time. Then I realized — this is the right time. I was already there."</p>
          <cite>— Barbara, 63 · Now living in Lisbon on $1,900/month</cite>
        </div>

        <div className="below-fold">
          <div className="bf-col">
            <div className="mag-section-label">The Money Page</div>
            <p className="body-text" style={{ fontSize: '18px', marginBottom: '14px' }}>
              What $2,000 actually gets you in 26 countries. Real rents. Real grocery bills. Real monthly budgets from Americans already living there.
            </p>
            <Link href="/destinations" style={{ fontSize: '14px', fontStyle: 'italic', color: '#8b6914', textDecoration: 'underline', fontFamily: 'EB Garamond, serif' }}>
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

          <div className="bf-col">
            <div className="mag-sub" id="free-guide">
              <div className="mag-sub-eyebrow">Free Retirement Abroad Guide</div>
              <h3 className="mag-sub-headline">Get the free guide before choosing where to retire.</h3>
              <p className="mag-sub-body">
                See where $2,000/month can go further, which countries are easier for Americans, and what to check before making a move abroad.
              </p>
              <a href="#free-guide" className="mag-btn">Get My Free Guide →</a>
              <p className="mag-trust">Free by email · No spam · Unsubscribe anytime</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
