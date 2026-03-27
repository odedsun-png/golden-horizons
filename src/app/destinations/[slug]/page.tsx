import { getDestinationDetail, getAllDestinationDetails } from "@/lib/destination-details";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const destinations = getAllDestinationDetails();
  return destinations.map((d) => ({ slug: d.slug }));
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-amber-600">{score}/100</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-amber-500 h-2 rounded-full"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default async function DestinationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const dest = getDestinationDetail(params.slug);
  if (!dest) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-700 to-amber-500 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-200 text-sm uppercase tracking-widest mb-2">{dest.region}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{dest.name}</h1>
          <p className="text-xl text-amber-100">{dest.tagline}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* Summary */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">{dest.summary}</p>
        </section>

        {/* QoL Scores */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality of Life Scores</h2>
          <ScoreBar label="Overall Quality of Life" score={dest.qolScore} />
          <ScoreBar label="Cost of Living" score={dest.costScore} />
          <ScoreBar label="Healthcare" score={dest.healthcareScore} />
          <ScoreBar label="Safety" score={dest.safetyScore} />
          <ScoreBar label="Internet & Infrastructure" score={dest.internetScore} />
          <ScoreBar label="Climate" score={dest.climateScore} />
        </section>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-green-800 mb-4">✅ Pros</h2>
            <ul className="space-y-2">
              {dest.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-green-900">
                  <span className="mt-1 text-green-500">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-red-800 mb-4">⚠️ Cons</h2>
            <ul className="space-y-2">
              {dest.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-red-900">
                  <span className="mt-1 text-red-400">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visa */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🛂 Visa Information</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Visa Type</p>
              <p className="font-semibold text-gray-900">{dest.visa.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-semibold text-gray-900">{dest.visa.duration}</p>
            </div>
            {dest.visa.minIncome && (
              <div>
                <p className="text-sm text-gray-500">Minimum Income</p>
                <p className="font-semibold text-amber-600">{dest.visa.minIncome}</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Requirements</p>
            <ul className="space-y-1">
              {dest.visa.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-gray-700">
                  <span className="text-amber-500">→</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Taxes */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Tax Overview</h2>
          <p className="text-gray-700 mb-4">{dest.taxes.summary}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Income Tax</p>
              <p className="font-semibold text-gray-900">{dest.taxes.incomeTax}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Capital Gains</p>
              <p className="font-semibold text-gray-900">{dest.taxes.capitalGains}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Remittance Based</p>
              <p className="font-semibold text-gray-900">{dest.taxes.remittanceBased ? "Yes" : "No"}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">{dest.taxes.notes}</p>
        </section>

        {/* Healthcare */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏥 Healthcare</h2>
          <p className="text-gray-700 mb-4">{dest.healthcare.summary}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Public Healthcare</p>
              <p className="font-semibold text-gray-900">{dest.healthcare.publicAvailable ? "Available" : "Not for expats"}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Avg. Monthly Premium</p>
              <p className="font-semibold text-gray-900">{dest.healthcare.avgMonthlyPremium}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Quality Rating</p>
              <p className="font-semibold text-amber-600">{dest.healthcare.quality}</p>
            </div>
          </div>
        </section>

        {/* Cost of Living */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 Cost of Living</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Monthly Budget (Solo)</p>
              <p className="font-bold text-amber-700 text-lg">{dest.costs.monthlyBudgetSolo}</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Monthly Budget (Couple)</p>
              <p className="font-bold text-amber-700 text-lg">{dest.costs.monthlyBudgetCouple}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">1BR Rent</p>
              <p className="font-semibold text-gray-900">{dest.costs.rent1br}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Meal Out</p>
              <p className="font-semibold text-gray-900">{dest.costs.mealOut}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Groceries/Month</p>
              <p className="font-semibold text-gray-900">{dest.costs.groceries}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500">Transport/Month</p>
              <p className="font-semibold text-gray-900">{dest.costs.transport}</p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center pb-8">
          
            href="/destinations"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            ← Back to All Destinations
          </a>
        </div>

      </div>
    </main>
  );
}
