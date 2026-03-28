import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDestinationById, getAllDestinationIds } from "@/lib/destination-details";

export async function generateStaticParams() {
  return getAllDestinationIds().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestinationById(slug);
  if (!d) return { title: "Not Found" };
  return {
    title: `${d.name} Retirement Guide 2026 — Golden Horizons`,
    description: d.overview.slice(0, 155),
  };
}

function QolBar({ label, score, icon }: { label: string; score: number; icon: string }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-lg w-6 shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-foreground/70 font-medium">{label}</span>
          <span className="text-xs font-bold text-primary">{score}/10</span>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${score * 10}%` }} />
        </div>
      </div>
    </div>
  );
}

function KeyTakeaway({ text }: { text: string }) {
  return (
    <div className="mt-4 p-4 bg-amber-50 border-l-2 border-primary rounded-r-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Key Takeaway</p>
      <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/50 mb-2">{children}</h2>
      <div className="w-8 h-px bg-primary" />
    </div>
  );
}

const qolIcons: Record<string, string> = {
  healthcareQuality: "🏥", safety: "🛡️", englishProficiency: "🗣️",
  infrastructure: "🏗️", expatCommunity: "👥", climate: "☀️",
};

const qolLabels: Record<string, string> = {
  healthcareQuality: "Healthcare Quality", safety: "Safety",
  englishProficiency: "English Proficiency", infrastructure: "Infrastructure",
  expatCommunity: "Expat Community", climate: "Climate",
};

type CostKey = "rent1br" | "rent2br" | "groceries" | "dining" | "utilities" | "transportation" | "healthcare" | "entertainment";

const costLabels: Array<{ key: CostKey; label: string }> = [
  { key: "rent1br", label: "1BR Rent" }, { key: "rent2br", label: "2BR Rent" },
  { key: "groceries", label: "Groceries" }, { key: "dining", label: "Dining Out" },
  { key: "utilities", label: "Utilities" }, { key: "transportation", label: "Transport" },
  { key: "healthcare", label: "Healthcare" }, { key: "entertainment", label: "Entertainment" },
];

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestinationById(slug);
  if (!d) notFound();

  const avgQol = Math.round(
    Object.values(d.qol).reduce((a, b) => a + b, 0) / Object.keys(d.qol).length
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[420px] md:h-[520px] overflow-hidden">
          <img src={d.heroImage} alt={d.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <Link href="/destinations" className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-5">
                ← All Rankings
              </Link>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl drop-shadow">{d.flag}</span>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">{d.name}</h1>
                  <p className="text-white/60 text-sm mt-1">{d.region}</p>
                </div>
              </div>
              <p className="text-white/85 text-lg max-w-2xl font-light leading-relaxed">{d.tagline}</p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1f2326] border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">IL Rank</p>
                <p className="text-white font-semibold text-sm">{d.ilRank}</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Budget</p>
                <p className="text-white font-semibold text-sm">{d.budgetTier}</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Best Cities</p>
                <p className="text-white font-semibold text-sm">{d.bestCities.slice(0, 2).join(", ")}</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Currency</p>
                <p className="text-white font-semibold text-sm">{d.lifestyle.currency.split("(")[0].trim()}</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Avg QoL Score</p>
                <p className="text-primary font-bold text-lg">{avgQol}<span className="text-white/40 text-sm font-normal">/10</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <SectionHeading>Overview</SectionHeading>
                <p className="text-foreground/80 leading-relaxed">{d.overview}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.bestCities.map((city) => (
                    <span key={city} className="px-3 py-1 bg-muted text-xs text-foreground/70 rounded-full border border-border">
                      📍 {city}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Pros & Cons</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {d.pros.map((pro, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-sm">
                        <span className="text-emerald-500 text-sm mt-0.5 shrink-0">✓</span>
                        <p className="text-sm text-foreground/80 leading-snug">{pro}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {d.cons.map((con, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-sm">
                        <span className="text-red-400 text-sm mt-0.5 shrink-0">✕</span>
                        <p className="text-sm text-foreground/80 leading-snug">{con}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <SectionHeading>Monthly Cost Breakdown</SectionHeading>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {costLabels.map(({ key, label }) => (
                    <div key={key} className="bg-white border border-border p-4 rounded-sm">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">{label}</p>
                      <p className="font-semibold text-foreground text-sm">{d.costs[key]}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-sm">
                    <p className="text-[10px] uppercase tracking-wide text-primary/70 mb-1">Couple (Total/mo)</p>
                    <p className="text-xl font-bold text-primary">{d.costs.totalCouple}</p>
                  </div>
                  <div className="p-4 bg-muted border border-border rounded-sm">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Single (Total/mo)</p>
                    <p className="text-xl font-bold text-foreground">{d.costs.totalSingle}</p>
                  </div>
                </div>
              </section>

              <section>
                <SectionHeading>Healthcare</SectionHeading>
                <div className="bg-white border border-border p-6 rounded-sm">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h3 className="font-semibold font-serif">Medical Access</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                      Private: {d.healthcare.privateInsurance}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.healthcare.summary}</p>
                </div>
                <KeyTakeaway text={d.healthcare.keyTakeaway} />
              </section>

              <section>
                <SectionHeading>Visa & Residency</SectionHeading>
                <div className="bg-white border border-border p-6 rounded-sm">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">{d.visa.type}</span>
                    <span className="text-xs bg-muted px-3 py-1 rounded-full text-foreground/70">Min income: {d.visa.minIncome}</span>
                    {d.visa.ssSaccepted && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">✓ Social Security accepted</span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.visa.summary}</p>
                </div>
                <KeyTakeaway text={d.visa.keyTakeaway} />
              </section>

              <section>
                <SectionHeading>Taxes</SectionHeading>
                <div className="bg-white border border-border p-6 rounded-sm">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {d.taxes.usTaxTreaty && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">✓ US Tax Treaty</span>}
                    {d.taxes.totalizationAgreement && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">✓ Totalization Agreement</span>}
                    {!d.taxes.hostTaxesSS && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">✓ SS Not Taxed Locally</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Foreign Income Tax</p>
                  <p className="text-sm font-semibold text-foreground mb-3">{d.taxes.foreignIncomeTax}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.taxes.summary}</p>
                </div>
                <KeyTakeaway text={d.taxes.keyTakeaway} />
              </section>

              <section>
                <SectionHeading>Lifestyle & Culture</SectionHeading>
                <div className="bg-white border border-border p-6 rounded-sm space-y-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">{d.lifestyle.summary}</p>
                  <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Currency</p>
                      <p className="text-sm font-medium">{d.lifestyle.currency}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Climate</p>
                      <p className="text-sm font-medium">{d.lifestyle.climate}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white border border-border p-6 rounded-sm sticky top-24">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary text-lg">★</span>
                  <h3 className="font-semibold font-serif text-sm">Quality of Life</h3>
                </div>
                <div className="w-8 h-px bg-primary mb-4" />
                <div className="space-y-1">
                  {(Object.keys(d.qol) as Array<keyof typeof d.qol>).map((key) => (
                    <QolBar key={key} label={qolLabels[key]} score={d.qol[key]} icon={qolIcons[key]} />
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-border flex justify-between items-center">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Overall Avg</span>
                  <span className="text-2xl font-bold text-primary">{avgQol}<span className="text-xs text-muted-foreground font-normal">/10</span></span>
                </div>
                <Link href="/destinations" className="mt-5 block w-full text-center px-4 py-3 bg-foreground text-background text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-foreground/90 transition-colors">
                  Compare All Countries
                </Link>
              </div>

              <div className="bg-[#1f2326] p-6 rounded-sm">
                <h3 className="font-serif text-white font-semibold mb-2">Planning a move?</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Get weekly visa updates, expat guides, and insider tips for {d.name} delivered free.
                </p>
                <Link href="/#subscribe" className="block w-full text-center px-4 py-3 bg-primary text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors">
                  Subscribe Free →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
