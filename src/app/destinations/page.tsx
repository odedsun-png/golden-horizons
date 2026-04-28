import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
import { destinationDetails } from "@/lib/destination-details";

type CountryCard = {
  id: string;
  flag: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
  scores: {
    costOfLiving: number;
    safety: number;
    healthcare: number;
    lifestyle: number;
  };
  ilRank: string;
  couple: string;
  single: string;
};

const all26: CountryCard[] = [
  { id: "portugal", flag: "🇵🇹", name: "Portugal", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80", description: "Stunning coastlines, rich history, and one of Europe's most affordable countries with excellent healthcare.", benefits: ["EU residency path", "English widely spoken", "300+ days of sunshine", "World-class healthcare"], scores: { costOfLiving: 4, safety: 5, healthcare: 5, lifestyle: 5 }, ilRank: "#1 International Living 2026", couple: "$2,500–$4,000", single: "$1,500–$2,500" },
  { id: "mexico", flag: "🇲🇽", name: "Mexico", image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80", description: "Close to the US, vibrant culture, established expat communities, and very affordable living.", benefits: ["Close to US/Canada", "Large expat community", "Low cost of living", "Rich culture"], scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 }, ilRank: "#5 International Living 2026", couple: "$1,500–$3,000", single: "$1,000–$1,800" },
  { id: "costa-rica", flag: "🇨🇷", name: "Costa Rica", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80", description: "Pura Vida lifestyle, excellent healthcare, stable democracy, and stunning natural beauty.", benefits: ["Stable democracy", "Excellent healthcare", "No army", "Biodiversity hotspot"], scores: { costOfLiving: 3, safety: 4, healthcare: 5, lifestyle: 5 }, ilRank: "Top 3 International Living 2026", couple: "$2,000–$3,500", single: "$1,200–$2,000" },
  { id: "spain", flag: "🇪🇸", name: "Spain", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80", description: "Mediterranean lifestyle, world-renowned cuisine, excellent public healthcare, and rich cultural heritage.", benefits: ["Mediterranean climate", "Top-rated healthcare", "Rich culture", "EU membership"], scores: { costOfLiving: 3, safety: 5, healthcare: 5, lifestyle: 5 }, ilRank: "Top 15 International Living 2026", couple: "$2,500–$4,500", single: "$1,500–$2,500" },
  { id: "panama", flag: "🇵🇦", name: "Panama", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80", description: "Uses US dollar, generous pensionado discounts, modern infrastructure, and tropical climate.", benefits: ["Uses US dollar", "Pensionado discounts", "Modern healthcare", "Tax benefits"], scores: { costOfLiving: 4, safety: 3, healthcare: 4, lifestyle: 4 }, ilRank: "Top 5 International Living 2026", couple: "$2,500–$4,500", single: "$1,500–$2,500" },
  { id: "thailand", flag: "🇹🇭", name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80", description: "Extremely affordable, world-class medical tourism, beautiful beaches, and welcoming culture.", benefits: ["Very affordable", "Medical tourism hub", "Tropical beaches", "Friendly locals"], scores: { costOfLiving: 5, safety: 4, healthcare: 4, lifestyle: 4 }, ilRank: "Top 10 International Living 2026", couple: "$1,500–$3,000", single: "$900–$1,800" },
  { id: "ecuador", flag: "🇪🇨", name: "Ecuador", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&q=80", description: "Uses US dollar, diverse climates, affordable healthcare, and welcoming retirement visa program.", benefits: ["Uses US dollar", "Low cost of living", "Diverse geography", "Easy residency"], scores: { costOfLiving: 5, safety: 3, healthcare: 3, lifestyle: 4 }, ilRank: "Top 10 International Living 2026", couple: "$1,500–$2,500", single: "$900–$1,400" },
  { id: "malaysia", flag: "🇲🇾", name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", description: "Modern infrastructure, English widely spoken, excellent healthcare, and multicultural society.", benefits: ["English spoken", "Modern cities", "MM2H visa", "Great food scene"], scores: { costOfLiving: 5, safety: 4, healthcare: 4, lifestyle: 4 }, ilRank: "Top 5 International Living 2026", couple: "$1,500–$2,800", single: "$900–$1,600" },
  { id: "greece", flag: "🇬🇷", name: "Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", description: "Island lifestyle, Mediterranean diet, ancient history, and affordable European living.", benefits: ["Island living", "Mediterranean diet", "EU membership", "Rich history"], scores: { costOfLiving: 4, safety: 4, healthcare: 4, lifestyle: 5 }, ilRank: "Top 10 International Living 2026", couple: "$2,000–$3,500", single: "$1,200–$2,000" },
  { id: "colombia", flag: "🇨🇴", name: "Colombia", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80", description: "Eternal spring climate in Medellin, modern cities, affordable living, and improving safety.", benefits: ["Year-round spring climate", "Modern healthcare", "Affordable", "Growing expat scene"], scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 }, ilRank: "Top 10 International Living 2026", couple: "$1,500–$2,800", single: "$900–$1,600" },
  { id: "vietnam", flag: "🇻🇳", name: "Vietnam", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80", description: "Southeast Asia's best value — extraordinary food culture, beautiful coastline, and warm welcoming people.", benefits: ["Cheapest in Asia", "World-Class Food", "Very Safe", "Zero Foreign Tax"], scores: { costOfLiving: 5, safety: 5, healthcare: 4, lifestyle: 4 }, ilRank: "Emerging destination", couple: "$1,000–$1,800", single: "$700–$1,200" },
  { id: "italy", flag: "🇮🇹", name: "Italy", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80", description: "€100k flat tax option, free SSN healthcare for legal residents, and the world's greatest food and wine culture.", benefits: ["7% Southern Tax", "Free SSN Healthcare", "EU Access", "US Tax Treaty"], scores: { costOfLiving: 3, safety: 4, healthcare: 5, lifestyle: 5 }, ilRank: "Top 15 International Living 2026", couple: "$2,500–$5,000", single: "$1,400–$2,800" },
  { id: "france", flag: "🇫🇷", name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", description: "WHO-ranked #1 healthcare globally, free via Sécurité Sociale. Unmatched quality of life across every region.", benefits: ["#1 Healthcare WHO", "Sécurité Sociale", "EU Access", "US Tax Treaty"], scores: { costOfLiving: 2, safety: 4, healthcare: 5, lifestyle: 5 }, ilRank: "Top 20 International Living 2026", couple: "$3,000–$6,000", single: "$1,800–$3,500" },
  { id: "new-zealand", flag: "🇳🇿", name: "New Zealand", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80", description: "#2 Safest country on Earth. English-speaking, spectacular natural beauty, world-class infrastructure.", benefits: ["#2 Global Peace Index", "English Speaking", "No Language Barrier", "US Tax Treaty"], scores: { costOfLiving: 2, safety: 5, healthcare: 5, lifestyle: 5 }, ilRank: "Special mention", couple: "$3,500–$6,000", single: "$2,000–$3,500" },
  { id: "panama-azores", flag: "🇵🇹", name: "Portugal — Azores", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&q=80", description: "30–40% cheaper than mainland Portugal with identical D7 visa, NHR 2.0 tax benefits, and EU citizenship path.", benefits: ["30% Cheaper than Lisbon", "Same D7 Visa", "NHR 2.0 Tax", "EU Citizenship"], scores: { costOfLiving: 4, safety: 5, healthcare: 4, lifestyle: 4 }, ilRank: "Hidden gem", couple: "$1,800–$2,800", single: "$1,100–$1,700" },
  { id: "malta", flag: "🇲🇹", name: "Malta", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", description: "Only English-speaking EU country. 15% flat tax on foreign income, 300 sunny days, and EU citizenship pathway.", benefits: ["English-Speaking EU", "15% Flat Tax", "300 Sunny Days", "EU Citizenship"], scores: { costOfLiving: 3, safety: 5, healthcare: 4, lifestyle: 5 }, ilRank: "Top 10 International Living 2026", couple: "$2,500–$4,000", single: "$1,400–$2,200" },
  { id: "belize", flag: "🇧🇿", name: "Belize", image: "https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?w=600&q=80", description: "Only English-speaking country in Central America. Zero tax on foreign income, USD peg, and world-class diving.", benefits: ["English Official", "Zero Foreign Tax", "USD Peg", "World-Class Diving"], scores: { costOfLiving: 4, safety: 3, healthcare: 2, lifestyle: 4 }, ilRank: "Top 15 International Living 2026", couple: "$1,500–$2,500", single: "$900–$1,500" },
  { id: "argentina", flag: "🇦🇷", name: "Argentina", image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=600&q=80", description: "Paris of South America. Extraordinary USD purchasing power, world-class steak and wine, European architecture.", benefits: ["USD Purchasing Power", "World-Class Culture", "European Feel", "Great Food & Wine"], scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 }, ilRank: "Not in standard rankings", couple: "$1,000–$2,000", single: "$700–$1,200" },
  { id: "bolivia", flag: "🇧🇴", name: "Bolivia", image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&q=80", description: "South America's most affordable country. Sucre's perfect 63°F year-round climate and UNESCO Heritage city.", benefits: ["Most Affordable SA", "Perfect Sucre Climate", "USD Peg", "UNESCO Heritage"], scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 3 }, ilRank: "Budget pick", couple: "$800–$1,400", single: "$600–$900" },
  { id: "cambodia", flag: "🇰🇭", name: "Cambodia", image: "https://images.unsplash.com/photo-1568733126608-7cd9b0a753c6?w=600&q=80", description: "Easiest visa in Asia at $290/year with no income requirement. USD economy and near-zero cost of living.", benefits: ["$290/yr Visa", "USD Economy", "No Income Req", "Angkor Wat"], scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 3 }, ilRank: "Budget pick", couple: "$1,000–$1,800", single: "$700–$1,100" },
  { id: "northern-cyprus", flag: "🇨🇾", name: "Northern Cyprus", image: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=600&q=80", description: "Mediterranean lifestyle at budget prices. 300 sunny days, English widely spoken, low crime, and low taxes.", benefits: ["Mediterranean Budget", "English Spoken", "300 Sunny Days", "Low Tax"], scores: { costOfLiving: 4, safety: 5, healthcare: 4, lifestyle: 4 }, ilRank: "Hidden gem", couple: "$1,200–$2,200", single: "$800–$1,400" },
  { id: "philippines", flag: "🇵🇭", name: "Philippines", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80", description: "English-speaking Asia with no tax on foreign pensions. Deposit-only SRRV visa and US tax treaty.", benefits: ["English Official", "No Foreign Tax", "US Tax Treaty", "Deposit-Only Visa"], scores: { costOfLiving: 4, safety: 3, healthcare: 4, lifestyle: 4 }, ilRank: "Top 15 International Living 2026", couple: "$1,200–$2,500", single: "$800–$1,500" },
  { id: "paraguay", flag: "🇵🇾", name: "Paraguay", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80", description: "One of South America's easiest residency programs. Territorial tax system and USD-linked economy.", benefits: ["Easiest SA Residency", "Territorial Tax", "USD-Linked", "Low Cost"], scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 3 }, ilRank: "76.0/100 Research Score", couple: "$1,200–$2,000", single: "$800–$1,300" },
  { id: "indonesia", flag: "🇮🇩", name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", description: "Dedicated retirement KITAS visa, Bali's world-famous lifestyle, and very affordable living across 17,000 islands.", benefits: ["Retirement KITAS Visa", "Bali Lifestyle", "Very Affordable", "Zero Foreign Tax"], scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 4 }, ilRank: "75.0/100 Research Score", couple: "$1,200–$2,200", single: "$800–$1,400" },
  { id: "albania", flag: "🇦🇱", name: "Albania", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=600&q=80", description: "Cheapest country in Europe. 1-year visa-free for Americans — longest in Europe. Albanian Riviera rivals Greece.", benefits: ["Cheapest in Europe", "1yr Visa-Free", "Riviera Beaches", "EU Candidate"], scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 3 }, ilRank: "66.0/100 Research Score", couple: "$930–$1,830", single: "$570–$1,150" },
  { id: "montenegro", flag: "🇲🇪", name: "Montenegro", image: "https://images.unsplash.com/photo-1555990538-c01c6462f8e2?w=600&q=80", description: "9% flat tax — one of Europe's lowest. Stunning Bay of Kotor, Adriatic coastline, and EU candidate stability.", benefits: ["9% Flat Tax", "Bay of Kotor", "Euro Economy", "EU Candidate"], scores: { costOfLiving: 4, safety: 4, healthcare: 3, lifestyle: 4 }, ilRank: "65.0/100 Research Score", couple: "$1,410–$2,640", single: "$880–$1,660" },
];

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i < score ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1f2326] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
              Retire Abroad for Less — Compare the Best Countries in 2026
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our 2026 ranking of the best places in the world for retirees, based on cost of living, safety, healthcare, and lifestyle.
            </p>
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
                Plan Your Budget
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto" />
            </div>
            <CostCalculator />
          </div>
        </section>

        {/* Rankings List — all 26 */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
                2026 Rankings
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <div className="space-y-6">
              {all26.map((country, index) => {
                const detail = destinationDetails.find((d) => d.id === country.id);
                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-sm border border-border p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Rank Badge */}
                    <div className="flex-shrink-0 flex items-start">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex flex-col items-center justify-center">
                        <span className="text-sm font-bold text-primary leading-tight">#{index + 1}</span>
                        <span className="text-xl leading-tight">{country.flag}</span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 w-full md:w-48 h-32 rounded overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-xl font-bold font-serif">{country.name}</h3>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                          {country.ilRank}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{country.description}</p>
                      <p className="text-sm text-foreground/70 mb-3 italic">
                        Costs: {country.couple}/mo couple · {country.single}/mo single
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {country.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-3 py-1 bg-muted text-sm text-foreground/80 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scores + CTA */}
                    <div className="flex-shrink-0 flex flex-col gap-3 md:w-44">
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                        <div>
                          <span className="text-xs text-muted-foreground">Cost</span>
                          <ScoreBar score={country.scores.costOfLiving} />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Safety</span>
                          <ScoreBar score={country.scores.safety} />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Healthcare</span>
                          <ScoreBar score={country.scores.healthcare} />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Lifestyle</span>
                          <ScoreBar score={country.scores.lifestyle} />
                        </div>
                      </div>
                      {detail && (
                        <Link
                          href={`/destinations/${country.id}`}
                          className="mt-2 block w-full text-center px-4 py-2.5 bg-foreground text-background text-xs font-semibold tracking-wider uppercase rounded hover:bg-foreground/90 transition-colors"
                        >
                          View Full Profile →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3.5 bg-foreground text-background font-semibold tracking-widest uppercase text-sm hover:bg-foreground/90 transition-colors"
            >
              Explore All Stories
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
