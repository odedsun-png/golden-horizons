import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDestinationBySlug, getAllDestinationSlugs } from '@/lib/destination-details';

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getAllDestinationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const dest = await getDestinationBySlug(slug);
  
  if (!dest) return { title: 'Destination Not Found | Golden Horizons' };
  
  return {
    title: `Retire in ${dest.name} 2026 — Cost, Healthcare, Visas & Lifestyle | Golden Horizons`,
    description: `The complete 2026 guide to retiring in ${dest.name} — real monthly costs, visa requirements, healthcare quality, and lifestyle ratings for American retirees.`,
  };
}

export default async function DestinationPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const dest = await getDestinationBySlug(slug);
  
  if (!dest) notFound();

  return (
    <>
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
            <span className="gh-issue-tag"><strong>The Destination Report:</strong> #{dest.rank} Ranked</span>
          </div>
        </div>

        <nav className="gh-nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">Destinations</Link>
          <Link href="#free-guide">Get Free Guide</Link>
        </nav>

        <div className="gh-breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/destinations">Destinations</Link>
          <span> › </span>
          <span style={{ color: '#1e1408' }}>{dest.flag} {dest.name}</span>
        </div>

        <div className="gh-section-banner">
          The Destination Report · #{dest.rank} in 2026 Rankings
        </div>

        <div style={{ position: 'relative', height: '420px', background: '#1e1408', overflow: 'hidden' }}>
          <img
            src={dest.heroImage}
            alt={`${dest.name} retirement destination`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'contrast(1.08) saturate(1.15) brightness(0.84) sepia(0.1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(30,20,8,0.2) 0%, rgba(30,20,8,0.7) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 36px', zIndex: 2 }}>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '8px', fontFamily: 'EB Garamond, serif' }}>
              #{dest.rank} Ranked · {dest.ilRank}
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#faf5e9', lineHeight: 1.1, marginBottom: '8px', letterSpacing: '-1px' }}>
              {dest.flag} {dest.name}
            </h1>
            <p style={{ fontSize: '20px', color: '#f2dfb0', fontFamily: 'EB Garamond, serif', maxWidth: '720px' }}>
              {dest.tagline}
            </p>
          </div>
        </div>

        <div style={{ background: '#f0e8d5', borderBottom: '2px solid #1e1408', padding: '20px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b6914', marginBottom: '4px', fontFamily: 'EB Garamond, serif' }}>IL Rank</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.ilRankShort || '#1'}</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b6914', marginBottom: '4px', fontFamily: 'EB Garamond, serif' }}>Budget</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.budgetShort}</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b6914', marginBottom: '4px', fontFamily: 'EB Garamond, serif' }}>Best City</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.bestCity}</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b6914', marginBottom: '4px', fontFamily: 'EB Garamond, serif' }}>Tax Rate</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.taxRate || 'Varies'}</div>
            </div>
            <div>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#8b6914', marginBottom: '4px', fontFamily: 'EB Garamond, serif' }}>QoL Score</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.qolScore || '9/10'}</div>
            </div>
          </div>
        </div>

        <div className="gh-article-layout">
          <div className="gh-article-main">
            <section style={{ marginBottom: '40px' }}>
              <div className="gh-section-stamp">Overview</div>
              <h2 className="gh-heading-2" style={{ marginBottom: '16px' }}>Why {dest.name}?</h2>
              <p className="gh-body-text">{dest.overview}</p>
              {dest.cities && dest.cities.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  {dest.cities.map((city: string, i: number) => (
                    <span key={i} style={{ background: '#f0e8d5', padding: '6px 12px', borderRadius: '3px', fontSize: '14px', color: '#2b1a00', fontFamily: 'EB Garamond, serif' }}>
                      📍 {city}
                    </span>
                  ))}
                </div>
              )}
            </section>

            <div className="gh-ornamental">— ✦ —</div>

            <section style={{ marginBottom: '40px' }}>
              <div className="gh-section-stamp">Advantages & Watch Fors</div>
              <h2 className="gh-heading-2" style={{ marginBottom: '20px' }}>Pros & Cons</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: '#f0fdf4', border: '2px solid #86efac', borderLeft: '4px solid #22c55e', padding: '20px', borderRadius: '4px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 'bold', color: '#166534', marginBottom: '12px' }}>Advantages</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {dest.pros && dest.pros.map((pro: string, i: number) => (
                      <li key={i} style={{ fontSize: '15px', color: '#2b1a00', marginBottom: '8px', paddingLeft: '20px', position: 'relative', fontFamily: 'EB Garamond, serif', lineHeight: 1.6 }}>
                        <span style={{ position: 'absolute', left: 0, color: '#22c55e', fontWeight: 'bold' }}>✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderLeft: '4px solid #f97316', padding: '20px', borderRadius: '4px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 'bold', color: '#9a3412', marginBottom: '12px' }}>Watch For</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {dest.cons && dest.cons.map((con: string, i: number) => (
                      <li key={i} style={{ fontSize: '15px', color: '#2b1a00', marginBottom: '8px', paddingLeft: '20px', position: 'relative', fontFamily: 'EB Garamond, serif', lineHeight: 1.6 }}>
                        <span style={{ position: 'absolute', left: 0, color: '#f97316', fontWeight: 'bold' }}>✕</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="gh-ornamental">— ✦ —</div>

            <section style={{ marginBottom: '40px' }}>
              <div className="gh-section-stamp">Monthly Budget</div>
              <h2 className="gh-heading-2" style={{ marginBottom: '20px' }}>What It Actually Costs</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', border: '1px solid #d8c28a' }}>
                <thead>
                  <tr style={{ background: '#1e1408', color: '#faf5e9' }}>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontFamily: 'EB Garamond, serif', fontWeight: 'bold' }}>Expense</th>
                    <th style={{ textAlign: 'left', padding: '12px', fontSize: '14px', fontFamily: 'EB Garamond, serif', fontWeight: 'bold' }}>Budget Range / Month</th>
                  </tr>
                </thead>
                <tbody>
                  {dest.costs && dest.costs.map((cost: { item: string; range: string }, i: number) => (
                    <tr key={i} style={{ borderBottom: '1px solid #e0cc99' }}>
                      <td style={{ padding: '12px', fontSize: '16px', color: '#1a0f00', fontFamily: 'EB Garamond, serif' }}>{cost.item}</td>
                      <td style={{ padding: '12px', fontSize: '16px', color: '#2b1a00', fontFamily: 'EB Garamond, serif' }}>{cost.range}</td>
                    </tr>
                  ))}
                  <tr style={{ background: '#f0e8d5', fontWeight: 'bold' }}>
                    <td style={{ padding: '12px', fontSize: '16px', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>Couple Total / Month</td>
                    <td style={{ padding: '12px', fontSize: '16px', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.costCouple}</td>
                  </tr>
                  <tr style={{ background: '#f0e8d5', fontWeight: 'bold' }}>
                    <td style={{ padding: '12px', fontSize: '16px', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>Single Total / Month</td>
                    <td style={{ padding: '12px', fontSize: '16px', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{dest.costSingle}</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {dest.healthcare && (
              <>
                <div className="gh-ornamental">— ✦ —</div>
                <section style={{ marginBottom: '40px' }}>
                  <div className="gh-section-stamp">The Health File</div>
                  <h2 className="gh-heading-2" style={{ marginBottom: '16px' }}>Healthcare Quality</h2>
                  <div style={{ background: '#f0e8d5', border: '2px solid #d8c28a', borderRadius: '4px', padding: '20px' }}>
                    <p className="gh-body-text" style={{ marginBottom: '16px' }}>{dest.healthcare.description}</p>
                    <div style={{ background: '#1e1408', color: '#c9a84c', padding: '16px', borderRadius: '3px', fontSize: '15px', fontFamily: 'EB Garamond, serif', lineHeight: 1.7 }}>
                      <strong>Key Takeaway:</strong> {dest.healthcare.keyTakeaway}
                    </div>
                  </div>
                </section>
              </>
            )}

            {dest.visa && (
              <>
                <div className="gh-ornamental">— ✦ —</div>
                <section style={{ marginBottom: '40px' }}>
                  <div className="gh-section-stamp">The Visa Desk</div>
                  <h2 className="gh-heading-2" style={{ marginBottom: '16px' }}>Visa & Residency</h2>
                  <div style={{ background: '#f0e8d5', border: '2px solid #d8c28a', borderRadius: '4px', padding: '20px' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 'bold', color: '#1e1408', marginBottom: '8px' }}>{dest.visa.name}</h3>
                    <p style={{ fontSize: '14px', color: '#8b6914', fontStyle: 'italic', marginBottom: '12px', fontFamily: 'EB Garamond, serif' }}>{dest.visa.requirements}</p>
                    <p className="gh-body-text" style={{ marginBottom: '16px' }}>{dest.visa.description}</p>
                    <div style={{ background: '#1e1408', color: '#c9a84c', padding: '16px', borderRadius: '3px', fontSize: '15px', fontFamily: 'EB Garamond, serif', lineHeight: 1.7 }}>
                      <strong>Key Takeaway:</strong> {dest.visa.keyTakeaway}
                    </div>
                  </div>
                </section>
              </>
            )}

            {dest.tax && (
              <>
                <div className="gh-ornamental">— ✦ —</div>
                <section style={{ marginBottom: '40px' }}>
                  <div className="gh-section-stamp">The Money Page</div>
                  <h2 className="gh-heading-2" style={{ marginBottom: '16px' }}>Tax Benefits</h2>
                  <div style={{ background: '#f0e8d5', border: '2px solid #d8c28a', borderRadius: '4px', padding: '20px' }}>
                    <p className="gh-body-text" style={{ marginBottom: '16px' }}>{dest.tax.description}</p>
                    <div style={{ background: '#1e1408', color: '#c9a84c', padding: '16px', borderRadius: '3px', fontSize: '15px', fontFamily: 'EB Garamond, serif', lineHeight: 1.7 }}>
                      <strong>Key Takeaway:</strong> {dest.tax.keyTakeaway}
                    </div>
                  </div>
                </section>
              </>
            )}

            <div className="gh-ornamental">— ✦ —</div>

            <section>
              <div className="gh-section-stamp">Quality of Life</div>
              <h2 className="gh-heading-2" style={{ marginBottom: '20px' }}>Lifestyle Scores</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {dest.scores && Object.entries(dest.scores).map(([key, value]: [string, number]) => (
                  <div key={key} style={{ background: '#f0e8d5', padding: '16px', borderRadius: '4px' }}>
                    <div style={{ fontSize: '13px', textTransform: 'capitalize', color: '#8b6914', marginBottom: '8px', fontFamily: 'EB Garamond, serif' }}>{key}</div>
                    <div style={{ height: '8px', background: '#d8c28a', borderRadius: '4px', overflow: 'hidden', marginBottom: '6px' }}>
                      <div style={{ height: '8px', background: '#8b6914', borderRadius: '4px', width: `${value}%` }} />
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e1408', fontFamily: 'Playfair Display, serif' }}>{value} / 100</div>
                  </div>
                ))}
              </div>
            </section>

            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '2px solid #1e1408' }}>
              <Link href="/destinations" style={{ fontSize: '16px', color: '#8b6914', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'EB Garamond, serif' }}>
                ← Back to all destinations
              </Link>
            </div>
          </div>

          <aside className="gh-article-sidebar">
            <div style={{ position: 'sticky', top: '120px' }}>
              <div className="gh-mag-sub">
                <div className="gh-mag-sub-eyebrow">Free Reader Guide</div>
                <h2 className="gh-mag-sub-headline">Compare {dest.name} to 11 Other Destinations</h2>
                <p className="gh-mag-sub-body">
                  Get our free guide comparing costs, healthcare, visas, and lifestyle across 12 top retirement destinations.
                </p>
                <Link href="/#free-guide" className="gh-mag-btn">
                  Get the Free Guide →
                </Link>
                <p className="gh-mag-trust">Free by email · No spam</p>
              </div>

              {dest.relatedDestinations && dest.relatedDestinations.length > 0 && (
                <div style={{ background: 'white', border: '1px solid #d8c28a', borderRadius: '4px', padding: '20px', marginTop: '20px' }}>
                  <div className="gh-mag-section-label">Other Destinations</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {dest.relatedDestinations.map((related: { slug: string; flag: string; name: string; budgetShort: string }, i: number) => (
                      <Link
                        key={i}
                        href={`/destinations/${related.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div style={{ fontSize: '20px', marginBottom: '4px' }}>{related.flag}</div>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold', color: '#1e1408', fontSize: '16px', marginBottom: '2px', lineHeight: 1.3 }}>
                          {related.name}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#8b6914', fontFamily: 'EB Garamond, serif', margin: 0 }}>
                          from {related.budgetShort}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
