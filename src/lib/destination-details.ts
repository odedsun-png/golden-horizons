import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getDestinationBySlug,
  getAllDestinationSlugs,
} from "@/lib/destination-details";

type CostItem = {
  item: string;
  range: string;
};

type InfoBlock = {
  description: string;
  keyTakeaway: string;
};

type VisaBlock = {
  name: string;
  requirements: string;
  description: string;
  keyTakeaway: string;
};

type RelatedDestination = {
  slug: string;
  flag: string;
  name: string;
  budgetShort: string;
};

type Destination = {
  id: string;
  rank: number;
  flag: string;
  name: string;
  ilRank: string;
  ilRankShort?: string;
  tagline: string;
  budgetShort: string;
  bestCity: string;
  taxRate?: string;
  qolScore?: string;
  heroImage: string;
  overview: string;
  cities: string[];
  costCouple: string;
  costSingle: string;
  pros: string[];
  cons: string[];
  costs: CostItem[];
  healthcare: InfoBlock;
  visa: VisaBlock;
  tax: InfoBlock;
  scores: Record<string, number>;
  relatedDestinations?: RelatedDestination[];
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllDestinationSlugs();

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = (await getDestinationBySlug(slug)) as Destination | null;

  if (!dest) {
    return {
      title: "Destination Not Found | Golden Horizons",
      description: "This retirement destination could not be found.",
    };
  }

  return {
    title: `Retire in ${dest.name} in 2026 | Cost, Healthcare, Visa & Lifestyle`,
    description: `Complete 2026 retirement guide for ${dest.name}: monthly costs, healthcare, visa requirements, taxes, lifestyle, pros and cons for American retirees.`,
    openGraph: {
      title: `Retire in ${dest.name} in 2026 | Golden Horizons`,
      description: `Costs, healthcare, visa requirements, taxes, and lifestyle for Americans retiring in ${dest.name}.`,
      type: "article",
      images: [
        {
          url: dest.heroImage,
          width: 1200,
          height: 630,
          alt: `${dest.name} retirement destination guide`,
        },
      ],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = (await getDestinationBySlug(slug)) as Destination | null;

  if (!dest) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Retire in ${dest.name} in 2026`,
    description: dest.overview,
    image: dest.heroImage,
    author: {
      "@type": "Organization",
      name: "Golden Horizons",
    },
    publisher: {
      "@type": "Organization",
      name: "Golden Horizons",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://golden-horizons.org/destinations/${dest.id}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f1df] text-[#1a0f00]">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main>
        {/* Breadcrumb */}
        <section className="border-b border-[#d6bd7a] bg-[#fbf5e8]">
          <div className="mx-auto max-w-5xl px-4 py-3 text-sm text-[#7b5a16]">
            <Link href="/" className="underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/destinations" className="underline">
              Destinations
            </Link>
            <span className="mx-2">›</span>
            <span>
              {dest.flag} {dest.name}
            </span>
          </div>
        </section>

        {/* Hero */}
        <section className="relative h-[420px] overflow-hidden bg-[#1e1408]">
          <img
            src={dest.heroImage}
            alt={`${dest.name} retirement destination for Americans`}
            className="h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1408] via-[#1e1408]/35 to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-5xl px-4 pb-10">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d4a84b]">
                #{dest.rank} Ranked · {dest.ilRank}
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-black leading-tight text-[#fff7e6] md:text-6xl">
                {dest.flag} Retire in {dest.name}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#ead9b2] md:text-xl">
                {dest.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-[#d6bd7a] bg-[#fff8e8]">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-5">
            <Stat label="Rank" value={dest.ilRankShort || `#${dest.rank}`} />
            <Stat label="Budget" value={dest.budgetShort} />
            <Stat label="Best City" value={dest.bestCity} />
            <Stat label="Tax Rate" value={dest.taxRate || "Varies"} />
            <Stat label="QoL Score" value={dest.qolScore || "N/A"} />
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#f8f1df] py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <Section title="Overview">
                <p className="text-lg leading-8 text-[#2b1a00]">
                  {dest.overview}
                </p>

                {dest.cities?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {dest.cities.map((city) => (
                      <span
                        key={city}
                        className="border border-[#d6bd7a] bg-[#fff8e8] px-3 py-1 text-sm text-[#7b5a16]"
                      >
                        📍 {city}
                      </span>
                    ))}
                  </div>
                )}
              </Section>

              <Section title="Pros & Cons">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="border border-[#d6bd7a] bg-[#fff8e8] p-5">
                    <h3 className="mb-3 font-serif text-2xl font-bold">
                      Why retirees love it
                    </h3>
                    <ul className="space-y-3">
                      {dest.pros.map((pro) => (
                        <li key={pro} className="text-sm leading-6">
                          ✅ {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-[#d6bd7a] bg-[#fff8e8] p-5">
                    <h3 className="mb-3 font-serif text-2xl font-bold">
                      What to watch
                    </h3>
                    <ul className="space-y-3">
                      {dest.cons.map((con) => (
                        <li key={con} className="text-sm leading-6">
                          ⚠️ {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>

              <Section title="Monthly Cost Breakdown">
                <div className="overflow-hidden border border-[#d6bd7a] bg-[#fff8e8]">
                  <div className="grid grid-cols-2 border-b border-[#d6bd7a] bg-[#1e1408] px-4 py-3 text-sm font-bold uppercase tracking-widest text-[#d4a84b]">
                    <div>Category</div>
                    <div className="text-right">Estimated Range</div>
                  </div>

                  {dest.costs.map((cost) => (
                    <div
                      key={cost.item}
                      className="grid grid-cols-2 border-b border-[#ead7a2] px-4 py-3 last:border-b-0"
                    >
                      <div>{cost.item}</div>
                      <div className="text-right font-bold">{cost.range}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="border border-[#d6bd7a] bg-[#fff8e8] p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7b5a16]">
                      Couple
                    </div>
                    <div className="text-2xl font-bold">{dest.costCouple}</div>
                  </div>

                  <div className="border border-[#d6bd7a] bg-[#fff8e8] p-4">
                    <div className="text-xs uppercase tracking-widest text-[#7b5a16]">
                      Single
                    </div>
                    <div className="text-2xl font-bold">{dest.costSingle}</div>
                  </div>
                </div>
              </Section>

              <Section title="Healthcare">
                <InfoCard
                  text={dest.healthcare.description}
                  takeaway={dest.healthcare.keyTakeaway}
                />
              </Section>

              <Section title="Visa Requirements">
                <div className="border border-[#d6bd7a] bg-[#fff8e8] p-5">
                  <h3 className="font-serif text-2xl font-bold">
                    {dest.visa.name}
                  </h3>
                  <p className="mt-2 font-bold text-[#7b5a16]">
                    {dest.visa.requirements}
                  </p>
                  <p className="mt-4 leading-8">{dest.visa.description}</p>
                  <div className="mt-4 border-l-4 border-[#8b6914] bg-[#f3e4bd] p-4">
                    <strong>Key takeaway:</strong> {dest.visa.keyTakeaway}
                  </div>
                </div>
              </Section>

              <Section title="Taxes">
                <InfoCard
                  text={dest.tax.description}
                  takeaway={dest.tax.keyTakeaway}
                />
              </Section>

              <Section title="Quality of Life Scores">
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(dest.scores).map(([label, score]) => (
                    <ScoreBar key={label} label={label} score={score} />
                  ))}
                </div>
              </Section>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="border border-[#d6bd7a] bg-[#1e1408] p-6 text-[#fff8e8]">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#d4a84b]">
                    Free Guide
                  </div>
                  <h2 className="mt-3 font-serif text-2xl font-bold">
                    Compare the best retirement countries
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#ead9b2]">
                    Get the free Golden Horizons retirement abroad guide with
                    cost, healthcare, visa, and lifestyle comparisons.
                  </p>
                  <Link
                    href="/#free-guide"
                    className="mt-5 block bg-[#d4a84b] px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-[#1e1408]"
                  >
                    Get Free Guide →
                  </Link>
                </div>

                {dest.relatedDestinations &&
                  dest.relatedDestinations.length > 0 && (
                    <div className="border border-[#d6bd7a] bg-[#fff8e8] p-6">
                      <h2 className="font-serif text-2xl font-bold">
                        Related Destinations
                      </h2>

                      <div className="mt-4 space-y-3">
                        {dest.relatedDestinations.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/destinations/${related.slug}`}
                            className="block border-b border-[#ead7a2] pb-3 last:border-b-0"
                          >
                            <div className="font-bold">
                              {related.flag} {related.name}
                            </div>
                            <div className="text-sm text-[#7b5a16]">
                              From {related.budgetShort}/mo
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="border border-[#d6bd7a] bg-[#fff8e8] p-6">
                  <h2 className="font-serif text-2xl font-bold">
                    Explore More
                  </h2>

                  <div className="mt-4 space-y-3 text-sm">
                    <Link href="/destinations" className="block underline">
                      View all destinations
                    </Link>
                    <Link href="/articles" className="block underline">
                      Read retirement articles
                    </Link>
                    <Link href="/" className="block underline">
                      Back to homepage
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="mb-1 text-xs uppercase tracking-widest text-[#7b5a16]">
        {label}
      </div>
      <div className="font-serif text-xl font-bold text-[#1e1408] md:text-2xl">
        {value}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 border-b-2 border-[#1e1408] pb-2 font-serif text-3xl font-black text-[#1e1408]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function InfoCard({
  text,
  takeaway,
}: {
  text: string;
  takeaway: string;
}) {
  return (
    <div className="border border-[#d6bd7a] bg-[#fff8e8] p-5">
      <p className="leading-8">{text}</p>
      <div className="mt-4 border-l-4 border-[#8b6914] bg-[#f3e4bd] p-4">
        <strong>Key takeaway:</strong> {takeaway}
      </div>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  const cleanLabel = label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());

  return (
    <div className="border border-[#d6bd7a] bg-[#fff8e8] p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-bold">{cleanLabel}</span>
        <span className="text-sm font-bold text-[#7b5a16]">{score}/100</span>
      </div>

      <div className="h-3 overflow-hidden bg-[#ead7a2]">
        <div
          className="h-full bg-[#8b6914]"
          style={{ width: `${Math.min(score, 100)}%` }}
        />
      </div>
    </div>
  );
}
