import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getDestinationBySlug,
  getAllDestinationSlugs,
} from '@/lib/destination-details';

type CostItem = {
  item: string;
  range: string;
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
  cities?: string[];
  costCouple: string;
  costSingle: string;
  pros?: string[];
  cons?: string[];
  costs?: CostItem[];
  healthcare?: {
    description: string;
    keyTakeaway: string;
  };
  visa?: {
    name: string;
    requirements: string;
    description: string;
    keyTakeaway: string;
  };
  tax?: {
    description: string;
    keyTakeaway: string;
  };
  scores?: Record<string, number>;
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
      title: 'Destination Not Found | Golden Horizons',
      description: 'This retirement destination could not be found.',
    };
  }

  return {
    title: `Retire in ${dest.name} 2026 — Cost, Healthcare, Visas & Lifestyle | Golden Horizons`,
    description: `The complete 2026 guide to retiring in ${dest.name} — real monthly costs, visa requirements, healthcare quality, and lifestyle ratings for American retirees.`,
    openGraph: {
      title: `Retire in ${dest.name} 2026 | Golden Horizons`,
      description: `Costs, healthcare, visas, taxes, pros and cons for retiring in ${dest.name}.`,
      type: 'article',
      images: [
        {
          url: dest.heroImage,
          width: 1200,
          height: 630,
          alt: `${dest.name} retirement destination`,
        },
      ],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = (await getDestinationBySlug(slug)) as Destination | null;

  if (!dest) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Retire in ${dest.name} 2026 — The Complete Guide`,
    description: `Real monthly costs, visa, healthcare and lifestyle for American retirees in ${dest.name}.`,
    image: dest.heroImage,
    author: {
      '@type': 'Organization',
      name: 'Golden Horizons',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Golden Horizons',
      logo: {
        '@type': 'ImageObject',
        url: 'https://golden-horizons.org/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://golden-horizons.org/destinations/${dest.id}`,
    },
  };

  return (
    <>
      <Header />

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/destinations" className="hover:text-gray-900">
              Destinations
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">
              {dest.flag} {dest.name}
            </span>
          </nav>
        </div>
      </div>

      <main>
        <section className="relative h-96 bg-gray-900">
          <img
            src={dest.heroImage}
            alt={`${dest.name} retirement destination for Americans`}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-sm text-blue-300 uppercase tracking-wide mb-2">
                #{dest.rank} Ranked · {dest.ilRank}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {dest.flag} {dest.name}
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                {dest.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  IL Rank
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {dest.ilRankShort || '#1'}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  Budget
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {dest.budgetShort}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  Best City
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {dest.bestCity}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  Tax Rate
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {dest.taxRate || 'Varies'}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                  QoL Score
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {dest.qolScore || '9/10'}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <article className="lg:col-span-2 space-y-10">
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                    Overview
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {dest.overview}
                  </p>

                  {dest.cities && dest.cities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {dest.cities.map((city, index) => (
                        <span
                          key={`${city}-${index}`}
                          className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700"
                        >
                          📍 {city}
                        </span>
                      ))}
                    </div>
                  )}
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                    Pros & Cons
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <h3 className="font-bold text-green-900 mb-3">
                        Advantages
                      </h3>

                      <ul className="space-y-2">
                        {(dest.pros || []).map((pro, index) => (
                          <li
                            key={`${pro}-${index}`}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h3 className="font-bold text-orange-900 mb-3">
                        Watch For
                      </h3>

                      <ul className="space-y-2">
                        {(dest.cons || []).map((con, index) => (
                          <li
                            key={`${con}-${index}`}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-orange-600 font-bold">✕</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                    Monthly Cost Breakdown
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="text-left p-3 text-sm">Expense</th>
                          <th className="text-left p-3 text-sm">
                            Budget Range / Month
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {(dest.costs || []).map((cost, index) => (
                          <tr
                            key={`${cost.item}-${index}`}
                            className="border-b border-gray-200 hover:bg-gray-50"
                          >
                            <td className="p-3 text-gray-900">{cost.item}</td>
                            <td className="p-3 text-gray-700">{cost.range}</td>
                          </tr>
                        ))}

                        <tr className="bg-blue-50 font-bold">
                          <td className="p-3 text-gray-900">
                            Couple Total / Month
                          </td>
                          <td className="p-3 text-gray-900">
                            {dest.costCouple}
                          </td>
                        </tr>

                        <tr className="bg-blue-50 font-bold">
                          <td className="p-3 text-gray-900">
                            Single Total / Month
                          </td>
                          <td className="p-3 text-gray-900">
                            {dest.costSingle}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {dest.healthcare && (
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                      Healthcare
                    </h2>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        {dest.healthcare.description}
                      </p>

                      <div className="bg-gray-900 text-blue-200 p-4 rounded">
                        <strong>Key Takeaway:</strong>{' '}
                        {dest.healthcare.keyTakeaway}
                      </div>
                    </div>
                  </section>
                )}

                {dest.visa && (
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                      Visa & Residency
                    </h2>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {dest.visa.name}
                      </h3>

                      <p className="text-sm text-gray-600 italic mb-4">
                        {dest.visa.requirements}
                      </p>

                      <p className="text-gray-700 mb-4">
                        {dest.visa.description}
                      </p>

                      <div className="bg-gray-900 text-blue-200 p-4 rounded">
                        <strong>Key Takeaway:</strong>{' '}
                        {dest.visa.keyTakeaway}
                      </div>
                    </div>
                  </section>
                )}

                {dest.tax && (
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                      Tax Benefits
                    </h2>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="text-gray-700 mb-4">
                        {dest.tax.description}
                      </p>

                      <div className="bg-gray-900 text-blue-200 p-4 rounded">
                        <strong>Key Takeaway:</strong>{' '}
                        {dest.tax.keyTakeaway}
                      </div>
                    </div>
                  </section>
                )}

                {dest.scores && (
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                      Quality of Life
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {Object.entries(dest.scores).map(([key, value]) => (
                        <div key={key} className="bg-blue-50 p-4 rounded">
                          <div className="text-sm text-gray-600 mb-2 capitalize">
                            {key}
                          </div>

                          <div className="h-2 bg-gray-200 rounded mb-1">
                            <div
                              className="h-2 bg-blue-600 rounded"
                              style={{ width: `${value}%` }}
                            />
                          </div>

                          <div className="text-lg font-bold text-gray-900">
                            {value} / 100
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <div className="border-t border-gray-200 pt-6">
                  <Link
                    href="/destinations"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    ← Back to all destinations
                  </Link>
                </div>
              </article>

              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className="bg-blue-600 text-white rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-3">
                      Ready to Compare?
                    </h2>

                    <p className="text-sm mb-4 text-blue-100">
                      Get our free guide comparing {dest.name} to 11 other top
                      retirement destinations.
                    </p>

                    <Link
                      href="/#free-guide"
                      className="block w-full text-center bg-white text-blue-600 px-4 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
                    >
                      Get the Free Guide →
                    </Link>

                    <p className="text-xs text-blue-200 text-center mt-3">
                      Free by email · No spam
                    </p>
                  </div>

                  {dest.relatedDestinations &&
                    dest.relatedDestinations.length > 0 && (
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-sm uppercase tracking-wide text-gray-600 font-bold mb-4">
                          Other Destinations
                        </h2>

                        <div className="space-y-4">
                          {dest.relatedDestinations.map((related, index) => (
                            <Link
                              key={`${related.slug}-${index}`}
                              href={`/destinations/${related.slug}`}
                              className="block group"
                            >
                              <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                                {related.flag} {related.name}
                              </h3>

                              <p className="text-xs text-gray-600">
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
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}
