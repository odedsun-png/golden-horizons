import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Places to Retire Abroad in 2026 | Golden Horizons',
  description: 'Compare the best places for Americans to retire abroad in 2026. Real monthly costs, healthcare quality, visa options, and lifestyle ratings.',
};

const featuredDestinations = [
  {
    rank: "#1 Ranked · Editor's Choice · 2026",
    name: 'Portugal',
    feeling: '"The moment the plane landed, I knew. This is where I was supposed to be."',
    cost: '$1,500–$2,500/mo single · $2,500–$4,000/mo couple',
    tags: ['EU residency path', 'English widely spoken', '300+ sunny days', 'World-class healthcare'],
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=700',
    href: '/articles?category=Best+Cities',
    tall: true,
  },
  {
    rank: '#2 · Mexico',
    name: 'Mexico',
    feeling: 'Close enough to visit. Far enough to finally live differently.',
    cost: 'from $1,160/mo',
    tags: ['Near US', 'Large expat scene'],
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/articles?category=Cost',
    tall: false,
  },
  {
    rank: '#3 · Costa Rica',
    name: 'Costa Rica',
    feeling: "Pura Vida isn't a slogan. It's the actual pace of life here.",
    cost: 'from $1,610/mo',
    tags: ['Stable democracy', 'No army'],
    image: 'https://images.pexels.com/photos/32133654/pexels-photo-32133654.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/articles?category=Beach',
    tall: false,
  },
  {
    rank: '#4 · Panama',
    name: 'Panama',
    feeling: 'US dollar. Modern hospitals. Ocean on both sides.',
    cost: 'from $1,340/mo',
    tags: ['Uses US dollar', 'Pensionado discounts'],
    image: 'https://images.pexels.com/photos/14840759/pexels-photo-14840759.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/articles/panama-healthcare-quality-in-panama-for-expats',
    tall: false,
  },
  {
    rank: '#5 · Greece',
    name: 'Greece',
    feeling: 'The Mediterranean diet is the way they actually eat every day.',
    cost: 'from $1,340/mo',
    tags: ['Island lifestyle', 'EU member'],
    image: 'https://images.pexels.com/photos/984877/pexels-photo-984877.jpeg?auto=compress&cs=tinysrgb&w=500',
    href: '/articles?category=Beach',
    tall: false,
  },
];

const moreDestinations = [
  { flag: '🇻🇳', name: 'Vietnam',     tagline: "SE Asia's best value for the budget-conscious retiree", cost: 'from $1,000/mo', href: '/articles?category=Cost' },
  { flag: '🇮🇹', name: 'Italy',       tagline: '€100k flat tax, free healthcare, world\'s best food culture', cost: 'from $2,500/mo', href: '/articles?category=Best+Cities' },
  { flag: '🇧🇿', name: 'Belize',      tagline: 'English-speaking Caribbean. No tax on foreign income.', cost: 'from $1,500/mo', href: '/articles?category=Beach' },
  { flag: '🇦🇷', name: 'Argentina',   tagline: 'The Paris of South America. Extraordinary USD buying power.', cost: 'from $1,000/mo', href: '/articles?category=Cost' },
  { flag: '🇲🇾', name: 'Malaysia',    tagline: 'English spoken. Modern cities. MM2H visa program.', cost: 'from $960/mo', href: '/articles?category=Cost' },
  { flag: '🇪🇨', name: 'Ecuador',     tagline: 'Uses US dollar. Easy residency. Diverse geography.', cost: 'from $1,010/mo', href: '/articles/ecuador-what-2000-a-month-gets-you-in-cuenca' },
  { flag: '🇵🇭', name: 'Philippines', tagline: 'English-speaking Asia. No tax on foreign pensions.', cost: 'from $1,200/mo', href: '/articles?category=Culture' },
  { flag: '🇲🇹', name: 'Malta',       tagline: 'Only English-speaking EU country. 300 sunny days.', cost: 'from $2,500/mo', href: '/articles?category=Best+Cities' },
];

export default function DestinationsPage() {
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
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations" className="active">Destinations</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="cine-hero">
          <img
            className="cine-img"
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Algarve coast Portugal retirement"
          />
          <div className="cine-overlay" />
          <div className="cine-content">
            <div className="cine-eyebrow">The Destination Report · 2026 World Rankings</div>
            <h1 className="cine-headline">The places where <em>your money</em> sets you free.</h1>
            <p className="cine-sub">Every morning we find them. Every morning we bring them to you.</p>
          </div>
        </div>
        <div className="hero-caption">
          <p>Algarve coast, Portugal — where couples retire well on $2,500/month. Warm winters. English spoken. Healthcare included.</p>
        </div>

        <div className="dest-intro">
          <div>
            <div className="intro-kicker">A note from our editors</div>
            <div className="intro-quote">
              &ldquo;You worked for this. Every single day. Now — finally — it&rsquo;s your turn.&rdquo;
            </div>
          </div>
          <div className="intro-body">
            These are the places where Americans like you are discovering something unexpected: that{' '}
            <strong>the life they always wanted costs less than the life they settled for.</strong>
            <br /><br />
            We rank them honestly. We do the math so you don&rsquo;t have to. Every destination below was chosen because real retirees — people just like you — are living there right now, spending less and feeling more alive.
          </div>
        </div>

        <div className="dest-section-label">
          <div className="sl-kicker">The Destination Report · 2026 Rankings</div>
          <div className="sl-title">The World&rsquo;s Best Places to Retire Abroad</div>
        </div>

        <div className="dest-grid">
          {featuredDestinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className={`dest-card${dest.tall ? ' tall' : ''}`}
            >
              <img
                className="dc-img"
                src={dest.image}
                alt={dest.name}
                style={{ minHeight: dest.tall ? '463px' : '230px' }}
              />
              <div className="dc-overlay" />
              <div className="dc-body">
                <div className="dc-rank">{dest.rank}</div>
                <div className="dc-name">{dest.name}</div>
                <div className="dc-feeling">{dest.feeling}</div>
                <div className="dc-cost">{dest.cost}</div>
                <div className="dc-tags">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="dc-tag">{tag}</span>
                  ))}
                </div>
                <span className="dc-cta">
                  {dest.tall ? 'Read Full Profile' : 'View Profile'} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="dest-pullquote">
          <span className="pq-ornament">— ✦ —</span>
          <div className="pq-text">
            &ldquo;I kept waiting for the right time.<br />
            Then I realized — <em>this is the right time.</em><br />
            I was already there.&rdquo;
          </div>
          <div className="pq-attr">— Barbara, 63 · Now living in Lisbon on $1,900/month</div>
        </div>

        <div className="more-section">
          <div className="more-kicker">More Destinations · Explore All</div>
          <div className="more-grid">
            {moreDestinations.map((dest) => (
              <Link key={dest.name} href={dest.href} className="more-card">
                <span className="mc-flag">{dest.flag}</span>
                <div className="mc-name">{dest.name}</div>
                <div className="mc-tagline">{dest.tagline}</div>
                <div className="mc-cost">{dest.cost}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="sub-section" id="subscribe">
          <div className="sub-eyebrow">Every morning. In your inbox. Free.</div>
          <h2 className="sub-headline">We find the place.<br />You live the life.</h2>
          <p className="sub-body">Each morning we send one story — a real place, real costs, real people who made the move. No fluff. Just the truth about what&rsquo;s possible.</p>
          <Link href="/golden_horizons_final.pdf" className="sub-btn">Start My Free Subscription →</Link>
          <div className="sub-trust">◆ &nbsp; Join 5,000+ readers planning their next chapter &nbsp; ◆</div>
        </div>

        <div className="ornament">— ✦ —</div>

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
