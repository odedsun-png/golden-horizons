import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
import { countries } from "@/lib/countries";
import { destinationDetails } from "@/lib/destination-details";

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < score ? "bg-primary" : "bg-border"
          }`}
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

        {/* Rankings List */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
                2026 Rankings
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <div className="space-y-6">
              {countries.map((country) => {
                const detail = destinationDetails.find((d) => d.id === country.id);
                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-sm border border-border p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Rank Badge */}
                    <div className="flex-shrink-0 flex items-start">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">#{country.rank}</span>
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
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{country.flag}</span>
                        <h3 className="text-xl font-bold font-serif">{country.name}</h3>
                        {detail && (
                          <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                            {detail.ilRank}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{country.description}</p>
                      {detail && (
                        <p className="text-sm text-foreground/70 mb-3 italic">
                          Costs: {detail.costs.totalCouple}/mo couple · {detail.costs.totalSingle}/mo single
                        </p>
                      )}
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

        {/* All Destinations Grid (beyond top 10) */}
        {destinationDetails.filter(d => !countries.find(c => c.id === d.id)).length > 0 && (
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
                  More Destinations
                </h2>
                <div className="w-12 h-1 bg-primary" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinationDetails
                  .filter((d) => !countries.find((c) => c.id === d.id))
                  .map((d) => (
                    <Link
                      key={d.id}
                      href={`/destinations/${d.id}`}
                      className="bg-white border border-border rounded-sm p-5 hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{d.flag}</span>
                        <div>
                          <h3 className="font-semibold font-serif group-hover:text-primary transition-colors">
                            {d.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">{d.region} · {d.ilRank}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{d.tagline}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">{d.costs.totalCouple}/mo</span>
                        <span className="text-xs text-primary font-semibold group-hover:underline">
                          View Profile →
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparison Table */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
                Country Comparison
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-sm border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Country</th>
                    <th className="text-center p-4 font-semibold">Monthly Cost</th>
                    <th className="text-center p-4 font-semibold">Cost Rating</th>
                    <th className="text-center p-4 font-semibold">Safety</th>
                    <th className="text-center p-4 font-semibold">Healthcare</th>
                    <th className="text-center p-4 font-semibold">Lifestyle</th>
                    <th className="text-center p-4 font-semibold">Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country) => {
                    const totalCost = Object.values(country.costOfLiving).reduce(
                      (a, b) => a + b,
                      0
                    );
                    return (
                      <tr
                        key={country.id}
                        className="border-b border-border/50 hover:bg-muted/30"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.name}</span>
                          </div>
                        </td>
                        <td className="text-center p-4 font-semibold">
                          ${totalCost.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <ScoreBar score={country.scores.costOfLiving} />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <ScoreBar score={country.scores.safety} />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <ScoreBar score={country.scores.healthcare} />
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center">
                            <ScoreBar score={country.scores.lifestyle} />
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <Link
                            href={`/destinations/${country.id}`}
                            className="text-xs font-semibold text-primary hover:underline"
                          >
                            View →
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              *Ratings based on 1-5 scale. Cost rating: higher = more affordable. Monthly costs are estimates for moderate lifestyle.
            </p>
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-16 md:py-20">
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
