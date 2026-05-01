import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Best Places to Retire Abroad in 2026 | Golden Horizons',
  description: 'Compare the best places for Americans to retire abroad in 2026. Real monthly costs, healthcare quality, visa options, and lifestyle ratings — ranked by the Golden Horizons editors.',
  openGraph: {
    title: 'Best Places to Retire Abroad in 2026 | Golden Horizons',
    description: 'Compare 26 retirement destinations worldwide — costs, healthcare, visas, and lifestyle.',
    type: 'website',
  },
};

// Country data type
interface Country {
  id: string;
  rank: number;
  flag: string;
  name: string;
  ilRank: string;
  image: string;
  description: string;
  costCouple: string;
  costSingle: string;
  benefits: string[];
  scores: {
    cost: number;
    safety: number;
    healthcare: number;
    lifestyle: number;
  };
}

// All 26 countries array — dynamically rendered
const countries: Country[] = [
  {
    id: 'portugal',
    rank: 1,
    flag: '🇵🇹',
    name: 'Portugal',
    ilRank: '#1 International Living 2026',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80',
    description: 'Stunning coastlines, rich history, and one of Europe\'s most affordable countries with excellent healthcare.',
    costCouple: '$2,500–$4,000/mo couple',
    costSingle: '$1,500–$2,500/mo single',
    benefits: ['EU residency path', 'English widely spoken', '300+ days of sunshine', 'World-class healthcare'],
    scores: { cost: 85, safety: 95, healthcare: 95, lifestyle: 90 },
  },
  {
    id: 'mexico',
    rank: 2,
    flag: '🇲🇽',
    name: 'Mexico',
    ilRank: '#5 International Living 2026',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80',
    description: 'Close to the US, vibrant culture, established expat communities, and very affordable living.',
    costCouple: '$1,500–$3,000/mo couple',
    costSingle: '$1,000–$1,800/mo single',
    benefits: ['Close to US/Canada', 'Large expat community', 'Low cost of living', 'Rich culture'],
    scores: { cost: 95, safety: 70, healthcare: 80, lifestyle: 85 },
  },
  {
    id: 'costa-rica',
    rank: 3,
    flag: '🇨🇷',
    name: 'Costa Rica',
    ilRank: 'Top 3 International Living 2026',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80',
    description: 'Pura Vida lifestyle, excellent healthcare, stable democracy, and stunning natural beauty.',
    costCouple: '$2,000–$3,500/mo couple',
    costSingle: '$1,200–$2,000/mo single',
    benefits: ['Stable democracy', 'Excellent healthcare', 'No army', 'Biodiversity hotspot'],
    scores: { cost: 80, safety: 85, healthcare: 90, lifestyle: 95 },
  },
  {
    id: 'spain',
    rank: 4,
    flag: '🇪🇸',
    name: 'Spain',
    ilRank: 'Top 15 International Living 2026',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
    description: 'Mediterranean lifestyle, world-renowned cuisine, excellent public healthcare, and rich cultural heritage.',
    costCouple: '$2,500–$4,500/mo couple',
    costSingle: '$1,500–$2,500/mo single',
    benefits: ['Mediterranean climate', 'Top-rated healthcare', 'Rich culture', 'EU membership'],
    scores: { cost: 75, safety: 90, healthcare: 95, lifestyle: 95 },
  },
  {
    id: 'panama',
    rank: 5,
    flag: '🇵🇦',
    name: 'Panama',
    ilRank: 'Top 5 International Living 2026',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
    description: 'Uses US dollar, generous pensionado discounts, modern infrastructure, and tropical climate.',
    costCouple: '$2,500–$4,500/mo couple',
    costSingle: '$1,500–$2,500/mo single',
    benefits: ['Uses US dollar', 'Pensionado discounts', 'Modern healthcare', 'Tax benefits'],
    scores: { cost: 80, safety: 75, healthcare: 85, lifestyle: 85 },
  },
  {
    id: 'thailand',
    rank: 6,
    flag: '🇹🇭',
    name: 'Thailand',
    ilRank: 'Top 10 International Living 2026',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
    description: 'Extremely affordable, world-class medical tourism, beautiful beaches, and welcoming culture.',
    costCouple: '$1,500–$3,000/mo couple',
    costSingle: '$900–$1,800/mo single',
    benefits: ['Very affordable', 'Medical tourism hub', 'Tropical beaches', 'Friendly locals'],
    scores: { cost: 95, safety: 80, healthcare: 90, lifestyle: 90 },
  },
  {
    id: 'ecuador',
    rank: 7,
    flag: '🇪🇨',
    name: 'Ecuador',
    ilRank: 'Top 10 International Living 2026',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&q=80',
    description: 'Uses US dollar, diverse climates, affordable healthcare, and welcoming retirement visa program.',
    costCouple: '$1,500–$2,500/mo couple',
    costSingle: '$900–$1,400/mo single',
    benefits: ['Uses US dollar', 'Low cost of living', 'Diverse geography', 'Easy residency'],
    scores: { cost: 95, safety: 70, healthcare: 75, lifestyle: 80 },
  },
  {
    id: 'malaysia',
    rank: 8,
    flag: '🇲🇾',
    name: 'Malaysia',
    ilRank: 'Top 5 International Living 2026',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
    description: 'Modern infrastructure, English widely spoken, excellent healthcare, and multicultural society.',
    costCouple: '$1,500–$2,800/mo couple',
    costSingle: '$900–$1,600/mo single',
    benefits: ['English spoken', 'Modern cities', 'MM2H visa', 'Great food scene'],
    scores: { cost: 90, safety: 85, healthcare: 85, lifestyle: 85 },
  },
  {
    id: 'greece',
    rank: 9,
    flag: '🇬🇷',
    name: 'Greece',
    ilRank: 'Top 10 International Living 2026',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    description: 'Island lifestyle, Mediterranean diet, ancient history, and affordable European living.',
    costCouple: '$2,000–$3,500/mo couple',
    costSingle: '$1,200–$2,000/mo single',
    benefits: ['Island living', 'Mediterranean diet', 'EU membership', 'Rich history'],
    scores: { cost: 80, safety: 85, healthcare: 85, lifestyle: 90 },
  },
  {
    id: 'colombia',
    rank: 10,
    flag: '🇨🇴',
    name: 'Colombia',
    ilRank: 'Top 10 International Living 2026',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80',
    description: 'Eternal spring climate in Medellin, modern cities, affordable living, and improving safety.',
    costCouple: '$1,500–$2,800/mo couple',
    costSingle: '$900–$1,600/mo single',
    benefits: ['Year-round spring climate', 'Modern healthcare', 'Affordable', 'Growing expat scene'],
    scores: { cost: 90, safety: 70, healthcare: 80, lifestyle: 85 },
  },
  {
    id: 'vietnam',
    rank: 11,
    flag: '🇻🇳',
    name: 'Vietnam',
    ilRank: 'Emerging destination',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    description: 'Southeast Asia\'s best value — extraordinary food culture, beautiful coastline, and warm welcoming people.',
    costCouple: '$1,000–$1,800/mo couple',
    costSingle: '$700–$1,200/mo single',
    benefits: ['Cheapest in Asia', 'World-Class Food', 'Very Safe', 'Zero Foreign Tax'],
    scores: { cost: 100, safety: 90, healthcare: 75, lifestyle: 85 },
  },
  {
    id: 'italy',
    rank: 12,
    flag: '🇮🇹',
    name: 'Italy',
    ilRank: 'Top 15 International Living 2026',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80',
    description: '€100k flat tax option, free SSN healthcare for legal residents, and the world\'s greatest food and wine culture.',
    costCouple: '$2,500–$5,000/mo couple',
    costSingle: '$1,400–$2,800/mo single',
    benefits: ['7% Southern Tax', 'Free SSN Healthcare', 'EU Access', 'US Tax Treaty'],
    scores: { cost: 70, safety: 90, healthcare: 95, lifestyle: 100 },
  },
  {
    id: 'france',
    rank: 13,
    flag: '🇫🇷',
    name: 'France',
    ilRank: 'Top 20 International Living 2026',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    description: 'WHO-ranked #1 healthcare globally, free via Sécurité Sociale. Unmatched quality of life across every region.',
    costCouple: '$3,000–$6,000/mo couple',
    costSingle: '$1,800–$3,500/mo single',
    benefits: ['#1 Healthcare WHO', 'Sécurité Sociale', 'EU Access', 'US Tax Treaty'],
    scores: { cost: 60, safety: 90, healthcare: 100, lifestyle: 95 },
  },
  {
    id: 'new-zealand',
    rank: 14,
    flag: '🇳🇿',
    name: 'New Zealand',
    ilRank: 'Special mention',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80',
    description: '#2 Safest country on Earth. English-speaking, spectacular natural beauty, world-class infrastructure.',
    costCouple: '$3,500–$6,000/mo couple',
    costSingle: '$2,000–$3,500/mo single',
    benefits: ['#2 Global Peace Index', 'English Speaking', 'No Language Barrier', 'US Tax Treaty'],
    scores: { cost: 55, safety: 100, healthcare: 90, lifestyle: 90 },
  },
  {
    id: 'portugal-azores',
    rank: 15,
    flag: '🇵🇹',
    name: 'Portugal — Azores',
    ilRank: 'Hidden gem',
    image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&q=80',
    description: '30–40% cheaper than mainland Portugal with identical D7 visa, NHR 2.0 tax benefits, and EU citizenship path.',
    costCouple: '$1,800–$2,800/mo couple',
    costSingle: '$1,100–$1,700/mo single',
    benefits: ['30% Cheaper than Lisbon', 'Same D7 Visa', 'NHR 2.0 Tax', 'EU Citizenship'],
    scores: { cost: 90, safety: 95, healthcare: 90, lifestyle: 85 },
  },
  {
    id: 'malta',
    rank: 16,
    flag: '🇲🇹',
    name: 'Malta',
    ilRank: 'Top 10 International Living 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    description: 'Only English-speaking EU country. 15% flat tax on foreign income, 300 sunny days, and EU citizenship pathway.',
    costCouple: '$2,500–$4,000/mo couple',
    costSingle: '$1,400–$2,200/mo single',
    benefits: ['English-Speaking EU', '15% Flat Tax', '300 Sunny Days', 'EU Citizenship'],
    scores: { cost: 75, safety: 90, healthcare: 90, lifestyle: 85 },
  },
  {
    id: 'belize',
    rank: 17,
    flag: '🇧🇿',
    name: 'Belize',
    ilRank: 'Top 15 International Living 2026',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
    description: 'English-speaking Caribbean, QRP retirement visa, barrier reef, and welcoming expat community.',
    costCouple: '$2,000–$3,500/mo couple',
    costSingle: '$1,200–$2,000/mo single',
    benefits: ['English Official', 'QRP Retirement Visa', 'Caribbean Living', 'Tax Incentives'],
    scores: { cost: 80, safety: 75, healthcare: 70, lifestyle: 85 },
  },
  {
    id: 'argentina',
    rank: 18,
    flag: '🇦🇷',
    name: 'Argentina',
    ilRank: 'Top 20 International Living 2026',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80',
    description: 'European culture in South America, world-class wine, and surprisingly affordable with favorable exchange rates.',
    costCouple: '$1,800–$3,200/mo couple',
    costSingle: '$1,000–$1,800/mo single',
    benefits: ['European Culture', 'World-Class Wine', 'Favorable Exchange', 'Easy Residency'],
    scores: { cost: 85, safety: 70, healthcare: 80, lifestyle: 85 },
  },
  {
    id: 'bolivia',
    rank: 19,
    flag: '🇧🇴',
    name: 'Bolivia',
    ilRank: 'Budget choice',
    image: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=600&q=80',
    description: 'South America\'s most affordable, diverse landscapes from Andes to Amazon, and growing expat scene.',
    costCouple: '$1,200–$2,000/mo couple',
    costSingle: '$700–$1,200/mo single',
    benefits: ['Most Affordable', 'Diverse Geography', 'Low Property Costs', 'Easy Rentista Visa'],
    scores: { cost: 100, safety: 65, healthcare: 65, lifestyle: 70 },
  },
  {
    id: 'cambodia',
    rank: 20,
    flag: '🇰🇭',
    name: 'Cambodia',
    ilRank: 'Emerging choice',
    image: 'https://images.unsplash.com/photo-1557401622-e6c0f129a27e?w=600&q=80',
    description: 'Ultra-affordable, uses US dollar, stunning temples, tropical beaches, and easy retirement visa.',
    costCouple: '$1,200–$2,200/mo couple',
    costSingle: '$700–$1,300/mo single',
    benefits: ['Uses US Dollar', 'Ultra Affordable', 'Easy ER Visa', 'Tropical Beaches'],
    scores: { cost: 95, safety: 70, healthcare: 70, lifestyle: 75 },
  },
  {
    id: 'northern-cyprus',
    rank: 21,
    flag: '🇨🇾',
    name: 'Northern Cyprus',
    ilRank: 'Hidden gem',
    image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&q=80',
    description: 'Mediterranean climate, English widely spoken, affordable EU-quality healthcare, and welcoming residency.',
    costCouple: '$1,800–$3,000/mo couple',
    costSingle: '$1,000–$1,700/mo single',
    benefits: ['Mediterranean Climate', 'English Spoken', 'Affordable Healthcare', 'Easy Residency'],
    scores: { cost: 85, safety: 85, healthcare: 80, lifestyle: 80 },
  },
  {
    id: 'philippines',
    rank: 22,
    flag: '🇵🇭',
    name: 'Philippines',
    ilRank: 'Top 15 International Living 2026',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
    description: 'English-speaking, tropical islands, extremely affordable, and SRRV retirement visa with low deposit.',
    costCouple: '$1,500–$2,500/mo couple',
    costSingle: '$900–$1,500/mo single',
    benefits: ['English Official', 'SRRV Retirement Visa', 'Tropical Islands', 'Very Affordable'],
    scores: { cost: 90, safety: 70, healthcare: 75, lifestyle: 85 },
  },
  {
    id: 'paraguay',
    rank: 23,
    flag: '🇵🇾',
    name: 'Paraguay',
    ilRank: 'Budget choice',
    image: 'https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?w=600&q=80',
    description: 'Easiest permanent residency in South America, zero foreign tax, and very low cost of living.',
    costCouple: '$1,500–$2,500/mo couple',
    costSingle: '$900–$1,400/mo single',
    benefits: ['Easiest PR Visa', 'Zero Foreign Tax', 'Low Living Costs', 'Stable Economy'],
    scores: { cost: 95, safety: 75, healthcare: 70, lifestyle: 70 },
  },
  {
    id: 'indonesia',
    rank: 24,
    flag: '🇮🇩',
    name: 'Indonesia',
    ilRank: 'Emerging destination',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    description: 'Bali lifestyle, tropical paradise, ultra-affordable, and new retirement visa options.',
    costCouple: '$1,500–$2,500/mo couple',
    costSingle: '$900–$1,500/mo single',
    benefits: ['Bali Lifestyle', 'Ultra Affordable', 'Tropical Paradise', 'New Retirement Visa'],
    scores: { cost: 95, safety: 75, healthcare: 75, lifestyle: 90 },
  },
  {
    id: 'albania',
    rank: 25,
    flag: '🇦🇱',
    name: 'Albania',
    ilRank: 'Hidden gem',
    image: 'https://images.unsplash.com/photo-1594750461822-e97910f155b0?w=600&q=80',
    description: 'Europe\'s last undiscovered coastline, incredibly affordable, and EU candidate country.',
    costCouple: '$1,500–$2,500/mo couple',
    costSingle: '$900–$1,400/mo single',
    benefits: ['Most Affordable EU Region', 'Stunning Coast', 'EU Candidate', 'Easy 1-Year Visa'],
    scores: { cost: 95, safety: 80, healthcare: 70, lifestyle: 75 },
  },
  {
    id: 'montenegro',
    rank: 26,
    flag: '🇲🇪',
    name: 'Montenegro',
    ilRank: 'Hidden gem',
    image: 'https://images.unsplash.com/photo-1593506765083-d2c3f7704194?w=600&q=80',
    description: 'Adriatic coast, EU candidate, affordable Mediterranean living, and easy temporary residency.',
    costCouple: '$2,000–$3,200/mo couple',
    costSingle: '$1,200–$1,800/mo single',
    benefits: ['Adriatic Coast', 'EU Candidate', 'Affordable Med', 'Easy Temp Residency'],
    scores: { cost: 85, safety: 85, healthcare: 75, lifestyle: 80 },
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <span>Vol. I, No. 1</span>
        <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
        <span>April 2026</span>
      </div>

      {/* Masthead */}
      <div className="masthead">
        <div className="dateline">
          <span>The Retirement Abroad Magazine</span>
          <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
          <span>April 2026 · Issue 1</span>
        </div>
        <Link href="/" className="mastname">
          Golden Horizons
        </Link>
        <div className="issue-line">
          The Destination Report · 2026 World Rankings · 26 Countries Compared
        </div>
      </div>

      {/* Nav */}
      <nav className="nav">
        <Link href="/">Cover</Link>
        <Link href="/articles">All Stories</Link>
        <Link href="/destinations" className="active">
          Destinations
        </Link>
        <Link href="/#free-guide">Get Free Guide</Link>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Cover</Link> &nbsp;›&nbsp; Destinations
      </div>

      {/* Section Banner */}
      <div className="section-banner">The Destination Report · 2026 Rankings</div>

      {/* Hero */}
      <div className="dest-hero">
        <Image
          src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="World map showing best retirement destinations for Americans in 2026"
          width={1200}
          height={400}
          className="dest-hero-img"
          priority
        />
        <div className="dest-hero-overlay" />
        <div className="dest-hero-content">
          <h1 className="dest-hero-h1">
            The 26 Best Places to Retire Abroad in 2026
          </h1>
          <p className="dest-hero-sub">
            Real monthly costs · Healthcare quality · Visa requirements · Lifestyle ratings
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="dest-intro">
        <p className="dest-intro-text">
          Our 2026 ranking of the best places in the world for American retirees, based on cost
          of living, safety, healthcare quality, and lifestyle. Every destination is scored and
          compared — from the Algarve to the Adriatic, from $700/month to $6,000/month.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="dest-grid">
        {countries.map((country) => (
          <article key={country.id} className="dest-card">
            <div className="dest-card-rank">#{country.rank}</div>
            <div className="dest-card-flag">{country.flag}</div>

            <div className="dest-card-img-wrap">
              <Image
                src={country.image}
                alt={`${country.name} retirement destination for Americans`}
                width={600}
                height={320}
                className="dest-card-img"
              />
            </div>

            <div className="dest-card-content">
              <h2 className="dest-card-title">{country.name}</h2>
              <div className="dest-card-il">{country.ilRank}</div>
              <p className="dest-card-desc">{country.description}</p>

              <div className="dest-card-cost">
                <strong>Costs:</strong> {country.costCouple} · {country.costSingle}
              </div>

              <ul className="dest-card-benefits">
                {country.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>

              {/* Scores */}
              <div className="dest-card-scores">
                <div className="score-item">
                  <div className="score-label">Cost</div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${country.scores.cost}%` }}
                    />
                  </div>
                </div>
                <div className="score-item">
                  <div className="score-label">Safety</div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${country.scores.safety}%` }}
                    />
                  </div>
                </div>
                <div className="score-item">
                  <div className="score-label">Healthcare</div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${country.scores.healthcare}%` }}
                    />
                  </div>
                </div>
                <div className="score-item">
                  <div className="score-label">Lifestyle</div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{ width: `${country.scores.lifestyle}%` }}
                    />
                  </div>
                </div>
              </div>

              <Link href={`/destinations/${country.id}`} className="dest-card-link">
                View Full Profile →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="dest-cta">
        <div className="dest-cta-inner">
          <h2 className="dest-cta-title">Ready to Compare Countries Side-by-Side?</h2>
          <p className="dest-cta-text">
            Get our free guide comparing costs, healthcare, visas, and lifestyle across 12 top
            retirement destinations.
          </p>
          <Link href="/#free-guide" className="dest-cta-btn">
            Get the Free Comparison Guide →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-name">Golden Horizons</div>
        <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
        <div className="footer-links">
          <Link href="/">Website</Link>
          <span>|</span>
          <Link href="/articles">All Stories</Link>
          <span>|</span>
          <Link href="/destinations">Destinations</Link>
          <span>|</span>
          <Link href="/about">About</Link>
          <span>|</span>
          <Link href="/privacy-policy">Privacy</Link>
          <span>|</span>
          <Link href="/contact">Contact</Link>
          <span>|</span>
          <Link href="/terms-of-use">Terms</Link>
        </div>
        <p style={{ marginTop: '12px', fontSize: '11px', opacity: 0.5 }}>
          © 2026 Golden Horizons — All rights reserved
        </p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .topbar {
          background: #1e1408;
          padding: 7px 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .topbar span {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #c9a84c;
          font-family: 'EB Garamond', serif;
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
          font-size: 11px;
          color: #8b6914;
          border-bottom: 1px solid #c9a84c;
          padding-bottom: 9px;
          margin-bottom: 11px;
          font-family: 'EB Garamond', serif;
        }
        .mastname {
          font-family: 'Playfair Display', serif;
          font-size: 58px;
          font-weight: 900;
          color: #1e1408;
          line-height: 1;
          letter-spacing: -2px;
          text-decoration: none;
          display: block;
        }
        .issue-line {
          font-size: 12px;
          font-style: italic;
          color: #8b6914;
          margin-top: 7px;
          font-family: 'EB Garamond', serif;
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
          transition: background 0.15s;
        }
        .nav a:last-child {
          border-right: none;
        }
        .nav a:hover {
          background: #f0e8d5;
        }
        .nav a.active {
          background: #1e1408;
          color: #c9a84c;
        }

        .breadcrumb {
          padding: 9px 36px;
          border-bottom: 1px solid #c9a84c;
          font-size: 12px;
          color: #8b6914;
          font-style: italic;
          background: #faf5e9;
          font-family: 'EB Garamond', serif;
        }
        .breadcrumb a {
          color: #8b6914;
          text-decoration: underline;
        }

        .section-banner {
          background: #1e1408;
          padding: 6px 36px;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c9a84c;
          font-family: 'EB Garamond', serif;
        }

        .dest-hero {
          position: relative;
          height: 360px;
          overflow: hidden;
          background: #1e1408;
          line-height: 0;
        }
        .dest-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: contrast(1.08) saturate(1.12) brightness(0.72) sepia(0.14);
        }
        .dest-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(30, 20, 8, 0.04) 0%,
            rgba(30, 20, 8, 0.18) 40%,
            rgba(30, 20, 8, 0.88) 100%
          );
        }
        .dest-hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 40px 34px;
          z-index: 2;
        }
        .dest-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 900;
          color: #faf5e9;
          line-height: 1.1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        .dest-hero-sub {
          font-size: 18px;
          font-style: italic;
          color: #d4c4a0;
          font-family: 'EB Garamond', serif;
          margin: 0;
        }

        .dest-intro {
          padding: 28px 36px;
          border-bottom: 2px solid #1e1408;
          background: #faf5e9;
        }
        .dest-intro-text {
          font-size: 21px;
          line-height: 1.78;
          color: #1a0f00;
          font-weight: 500;
          font-family: 'EB Garamond', serif;
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }

        .dest-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 0;
          background: #faf5e9;
        }

        .dest-card {
          position: relative;
          border-right: 1px solid #c9a84c;
          border-bottom: 1px solid #c9a84c;
          background: #faf5e9;
          padding: 0;
          transition: background 0.2s;
        }
        .dest-card:hover {
          background: #f5edd8;
        }

        .dest-card-rank {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #1e1408;
          color: #c9a84c;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
          z-index: 3;
        }
        .dest-card-flag {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 32px;
          z-index: 3;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .dest-card-img-wrap {
          line-height: 0;
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .dest-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.06) saturate(1.08) brightness(0.88) sepia(0.1);
          transition: filter 0.3s;
        }
        .dest-card:hover .dest-card-img {
          filter: contrast(1.06) saturate(1.08) brightness(0.92) sepia(0.1);
        }

        .dest-card-content {
          padding: 20px 18px 22px;
        }

        .dest-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #1a0f00;
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .dest-card-il {
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8b6914;
          margin-bottom: 12px;
          font-family: 'EB Garamond', serif;
        }
        .dest-card-desc {
          font-size: 16px;
          line-height: 1.65;
          color: #2b1a00;
          margin-bottom: 14px;
          font-family: 'EB Garamond', serif;
        }
        .dest-card-cost {
          font-size: 14px;
          color: #2b1a00;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e0cc99;
          font-family: 'EB Garamond', serif;
        }
        .dest-card-cost strong {
          color: #1e1408;
        }

        .dest-card-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .dest-card-benefits li {
          font-size: 12px;
          color: #8b6914;
          padding: 4px 8px;
          background: #f5edd8;
          border: 1px solid #e0cc99;
          font-family: 'EB Garamond', serif;
        }

        .dest-card-scores {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 16px;
        }
        .score-item {
          font-family: 'EB Garamond', serif;
        }
        .score-label {
          font-size: 11px;
          color: #8b6914;
          margin-bottom: 3px;
        }
        .score-bar-track {
          height: 4px;
          background: #e0cc99;
          margin-bottom: 2px;
        }
        .score-bar-fill {
          height: 4px;
          background: #8b6914;
        }

        .dest-card-link {
          display: inline-block;
          background: #1e1408;
          color: #c9a84c;
          padding: 11px 18px;
          font-size: 14px;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
          text-decoration: none;
          border: 2px solid #1e1408;
          transition: all 0.15s;
        }
        .dest-card-link:hover {
          background: #8b6914;
          border-color: #8b6914;
        }

        .dest-cta {
          padding: 40px 36px;
          background: #1e1408;
          border-top: 3px double #c9a84c;
        }
        .dest-cta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }
        .dest-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          color: #faf5e9;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .dest-cta-text {
          font-size: 18px;
          line-height: 1.7;
          color: #d4c4a0;
          margin-bottom: 20px;
          font-family: 'EB Garamond', serif;
        }
        .dest-cta-btn {
          display: inline-block;
          background: #8b6914;
          color: #faf5e9;
          padding: 15px 32px;
          font-size: 16px;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
          text-decoration: none;
          border: 2px solid #c9a84c;
          transition: all 0.15s;
        }
        .dest-cta-btn:hover {
          background: #c9a84c;
          color: #1e1408;
        }

        .footer {
          background: #1e1408;
          padding: 26px 36px;
          text-align: center;
          border-top: 3px double #c9a84c;
        }
        .footer-name {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #faf5e9;
          margin-bottom: 8px;
        }
        .footer p {
          font-size: 13px;
          color: #c9a84c;
          margin-bottom: 8px;
          font-family: 'EB Garamond', serif;
        }
        .footer-links {
          font-size: 13px;
          color: #c9a84c;
          font-family: 'EB Garamond', serif;
        }
        .footer-links a {
          color: #c9a84c;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-links span {
          opacity: 0.35;
          margin: 0 8px;
        }

        @media (max-width: 768px) {
          .topbar {
            padding: 6px 16px;
          }
          .topbar .hide-mob,
          .dateline .hide-mob {
            display: none;
          }
          .masthead {
            padding: 14px 16px 12px;
          }
          .mastname {
            font-size: 36px;
            letter-spacing: -1px;
          }
          .nav {
            justify-content: flex-start;
          }
          .nav a {
            padding: 8px 14px;
            font-size: 10px;
          }
          .dest-hero {
            height: 280px;
          }
          .dest-hero-h1 {
            font-size: 28px;
          }
          .dest-hero-content {
            padding: 0 18px 22px;
          }
          .dest-intro {
            padding: 20px 16px;
          }
          .dest-intro-text {
            font-size: 18px;
          }
          .dest-grid {
            grid-template-columns: 1fr;
          }
          .dest-card {
            border-right: none;
          }
          .dest-cta {
            padding: 28px 16px;
          }
          .dest-cta-title {
            font-size: 24px;
          }
          .footer {
            padding: 18px 16px;
          }
          .footer-links {
            line-height: 2.2;
          }
          .breadcrumb,
          .section-banner {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </>
  );
}
