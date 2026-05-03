import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { countries, getCountryById } from '@/lib/countries';

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return countries.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryById(slug);
  if (!country) return { title: 'Destination Not Found | Golden Horizons' };
  return {
    title: `Retire in ${country.name} 2026 — Costs, Visa & Lifestyle | Golden Horizons`,
    description: country.description,
  };
}

export default async function DestinationDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const country = getCountryById(slug);
  if (!country) notFound();

  const totalMonthly = Object.values(country.costOfLiving).reduce((a, b) => a + b, 0);
  const relatedCountries = countries.filter((c) => c.id !== country.id).slice(0, 5);

  const scoreLabel = (score: number) => {
    if (score >= 5) return 'Excellent';
    if (score >= 4) return 'Very Good';
    if (score >= 3) return 'Good';
    return 'Fair';
  };

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
            <span className="issue-tag"><strong>The Destination Report:</strong> #{country.rank} Ranked</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">Destinations</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/destinations">Destinations</Link>
          <span> › </span>
          <span style={{ color: '#1e1408' }}>{country.flag} {country.name}</span>
        </div>

        {/* ── CINEMATIC HERO ── */}
        <div className="cine-hero">
          <img className="cine-img" src={country.image} alt={country.name} />
          <div className="cine-overlay" />
          <div className="cine-content">
            <div className="cine-eyebrow">#{country.rank} Ranked · The Destination Report · 2026</div>
            <h1 className="cine-headline">{country.flag} {country.name}</h1>
            <p className="cine-sub">{country.description}</p>
          </div>
        </div>
        <div className="hero-caption">
          <p>{country.name} — ranked #{country.rank} by Golden Horizons editors for American retirees in 2026.</p>
        </div>

        <div className="article-layout">
          <div className="article-main">

            {/* ── WHY RETIRE HERE ── */}
            <div className="art-kicker">The Destination Report · #{country.rank} Ranked</div>
            <h2 className="art-headline">Why Americans Are Retiring in {country.name}</h2>
            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Rankings</span>
            </div>

            <p className="art-intro">{country.description}</p>

            <div className="section-hdr">Why Retire Here</div>

            <p className="art-article-body" style={{ marginBottom: 20 }}>
              {country.name} offers American retirees a compelling combination of affordability, lifestyle, and accessibility.
              With an estimated monthly budget of around ${totalMonthly.toLocaleString()}, it&rsquo;s one of the most
              attractive retirement destinations for Americans living on Social Security or a fixed income.
            </p>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Money Page</div>
                <div className="dyk-text">
                  Estimated monthly cost in {country.name}: ${totalMonthly.toLocaleString()} — including rent, food, utilities, transport, healthcare, and entertainment.
                </div>
              </div>
            </div>

            {/* ── KEY BENEFITS ── */}
            <div className="section-hdr">Practical Tips</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {country.benefits.map((benefit) => (
                <div key={benefit} style={{ background: '#f5edd8', padding: '12px 16px', borderLeft: '3px solid #c9a84c', fontFamily: 'EB Garamond, serif', fontSize: '16px', color: '#2b1a00' }}>
                  ✓ {benefit}
                </div>
              ))}
            </div>

            <p className="art-article-body" style={{ marginBottom: 20 }}>
              Before making the move, research visa requirements carefully, connect with local expat communities,
              and consider visiting for at least 4-6 weeks before committing. The Golden Horizons editorial team
              recommends consulting with a licensed immigration attorney familiar with {country.name}&rsquo;s requirements.
            </p>

            {/* ── COST BREAKDOWN ── */}
            <div className="section-hdr">Cost &amp; Healthcare</div>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">From the Health File</div>
                <div className="dyk-text">
                  Healthcare score: {scoreLabel(country.scores.healthcare)} · Safety score: {scoreLabel(country.scores.safety)} · Lifestyle score: {scoreLabel(country.scores.lifestyle)}
                </div>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontFamily: 'EB Garamond, serif' }}>
              <thead>
                <tr style={{ background: '#1e1408', color: '#c9a84c' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Expense</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>Monthly (USD)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(country.costOfLiving).map(([key, value], i) => (
                  <tr key={key} style={{ background: i % 2 === 0 ? '#faf5e9' : '#f5edd8', borderBottom: '1px solid #e0cc99' }}>
                    <td style={{ padding: '10px 12px', fontSize: '16px', textTransform: 'capitalize', color: '#2b1a00' }}>{key.replace(/([A-Z])/g, ' $1')}</td>
                    <td style={{ padding: '10px 12px', fontSize: '16px', textAlign: 'right', color: '#1e1408', fontWeight: 'bold' }}>${value}</td>
                  </tr>
                ))}
                <tr style={{ background: '#1e1408' }}>
                  <td style={{ padding: '12px', fontSize: '16px', color: '#c9a84c', fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }}>Total / Month</td>
                  <td style={{ padding: '12px', fontSize: '18px', textAlign: 'right', color: '#c9a84c', fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }}>${totalMonthly.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            {/* ── LIFESTYLE SCORES ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
              {Object.entries(country.scores).map(([key, value]) => (
                <div key={key} style={{ background: '#f0e8d5', padding: '16px', textAlign: 'center', borderTop: '3px solid #c9a84c' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'capitalize', color: '#8b6914', marginBottom: '8px', fontFamily: 'EB Garamond, serif' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>
                    {value}/5
                  </div>
                  <div style={{ fontSize: '12px', color: '#8b6914', fontFamily: 'EB Garamond, serif' }}>
                    {scoreLabel(value)}
                  </div>
                </div>
              ))}
            </div>

            <div className="disclaimer">
              The information in this article is for general informational purposes only. Costs, visa requirements, healthcare policies, and local conditions change frequently. Always verify current details with official government sources and consult a licensed advisor before making relocation decisions. Golden Horizons does not provide legal, financial, or medical advice.
            </div>

            <Link href="/destinations" className="back-link">← Back to all destinations</Link>

          </div>

          {/* ── SIDEBAR ── */}
          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;Most people plan carefully for retirement. Almost none plan where to live it.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
             <Link href="/#subscribe" className="mag-btn" scroll={false}>
  Start My Free Subscription →
</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label">More Destinations</div>

            {relatedCountries.map((rel) => (
              <Link key={rel.id} href={`/destinations/${rel.id}`} className="rel-item">
                <div style={{ width: 74, height: 56, overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    className="rel-thumb"
                    src={rel.image}
                    alt={rel.name}
                  />
                </div>
                <div>
                  <div className="rel-cat">#{rel.rank} Ranked · {rel.flag}</div>
                  <div className="rel-title">{rel.name}</div>
                  <span className="rel-read">View Profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
