import Link from "next/link";
import { getAllDestinationDetails } from "@/lib/destination-details";

export default function DestinationsPage() {
  const destinations = getAllDestinationDetails();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-700 to-amber-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Destinations</h1>
        <p className="text-xl text-amber-100 max-w-2xl mx-auto">
          Compare the world's best countries for retirement and remote living — costs, visas, taxes, and quality of life.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition group overflow-hidden"
            >
              {/* Color band */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-2" />

              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{dest.region}</p>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition">
                      {dest.name}
                    </h2>
                  </div>
                  <div className="text-center bg-amber-50 rounded-xl px-3 py-2">
                    <p className="text-2xl font-bold text-amber-600">{dest.qolScore}</p>
                    <p className="text-xs text-gray-400">QoL</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-5">{dest.tagline}</p>

                {/* Mini scores */}
                <div className="space-y-2 mb-5">
                  {[
                    { label: "Cost", score: dest.costScore },
                    { label: "Healthcare", score: dest.healthcareScore },
                    { label: "Safety", score: dest.safetyScore },
                  ].map(({ label, score }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-20">{label}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div
                          className="bg-amber-400 h-1.5 rounded-full"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 w-8 text-right">{score}</span>
                    </div>
                  ))}
                </div>

                {/* Budget */}
                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Monthly budget (solo)</p>
                    <p className="text-sm font-semibold text-gray-800">{dest.costs.monthlyBudgetSolo}</p>
                  </div>
                  <span className="text-amber-500 font-semibold text-sm group-hover:translate-x-1 transition">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
