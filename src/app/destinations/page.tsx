import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
import { destinationDetails } from "@/lib/destination-details";

// Keep your existing CountryCard type, all26 array, and ScoreBar function exactly as-is above this point.

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1f2326] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c]">
              2026 Retirement Abroad Rankings
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-5 leading-tight">
              What If $2,000 a Month Could Buy You a Better Life?
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Compare the best countries for Americans retiring abroad in 2026 — based on real cost, healthcare, safety, and lifestyle data.
            </p>

            <div className="mt-4 text-sm text-white/60">
              Updated for 2026 · Based on real expat data
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/free-guide"
                className="px-8 py-4 bg-[#8b6914] text-white text-sm font-semibold tracking-wider uppercase border border-[#6b4f0f] hover:bg-[#7a5c1e] transition-colors"
              >
                See Where Your Money Goes Further →
              </Link>
            </div>

            <div className="mt-3 text-xs text-white/50">
              Used by Americans planning smarter retirement decisions abroad
            </div>
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
              {all26.map((country, index) => {
                const detail = destinationDetails.find((d) => d.id === country.id);

                return (
                  <div
                    key={country.id}
                    className="bg-white rounded-sm border border-border p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 flex items-start">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex flex-col items-center justify-center">
                        <span className="text-sm font-bold text-primary leading-tight">
                          #{index + 1}
                        </span>
                        <span className="text-xl leading-tight">{country.flag}</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-full md:w-48 h-32 rounded overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

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
