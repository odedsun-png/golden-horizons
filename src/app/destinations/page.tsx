import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CostCalculator from '@/components/CostCalculator';

export const metadata: Metadata = {
  title: 'Best Places to Retire Abroad in 2026 | Golden Horizons',
  description: 'Compare the best places for Americans to retire abroad in 2026. Real monthly costs, healthcare quality, visa options, and lifestyle ratings — ranked by the Golden Horizons editors.',
};

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
      <Header />

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Retire Abroad for Less — Compare the Best Countries in 2026
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Our 2026 ranking of the best places in the world for retirees, based on cost of living, safety, healthcare, and lifestyle.
          </p>

          <CostCalculator />
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">2026 Rankings</h2>

          <div className="space-y-8">
            {countries.map((country) => (
              <article
                key={country.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm z-10">
                    #{country.rank}
                  </div>
                  <div className="absolute top-4 right-4 text-4xl z-10">{country.flag}</div>
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{country.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                    {country.ilRank}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{country.description}</p>

                  <div className="mb-4 text-sm text-gray-700">
                    <strong>Costs:</strong> {country.costCouple} · {country.costSingle}
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {country.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded text-xs"
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Cost</div>
                      <div className="h-2 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${country.scores.cost}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Safety</div>
                      <div className="h-2 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-full bg-blue-500"
                          style={{ width: `${country.scores.safety}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Healthcare</div>
                      <div className="h-2 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-full bg-purple-500"
                          style={{ width: `${country.scores.healthcare}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Lifestyle</div>
                      <div className="h-2 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-full bg-orange-500"
                          style={{ width: `${country.scores.lifestyle}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/destinations/${country.id}`}
                    className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
