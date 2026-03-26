"use client";

import { useState } from "react";
import { countries } from "@/lib/countries";

export default function CostCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].id);
  const [lifestyle, setLifestyle] = useState<"budget" | "moderate" | "comfortable">("moderate");

  const country = countries.find((c) => c.id === selectedCountry);
  if (!country) return null;

  const multiplier = lifestyle === "budget" ? 0.7 : lifestyle === "comfortable" ? 1.4 : 1;

  const costs = {
    rent: Math.round(country.costOfLiving.rent * multiplier),
    food: Math.round(country.costOfLiving.food * multiplier),
    utilities: Math.round(country.costOfLiving.utilities * multiplier),
    transportation: Math.round(country.costOfLiving.transportation * multiplier),
    healthcare: Math.round(country.costOfLiving.healthcare * multiplier),
    entertainment: Math.round(country.costOfLiving.entertainment * multiplier),
  };

  const total = Object.values(costs).reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-white rounded-sm border border-border p-6 md:p-8">
      <h3 className="text-2xl font-bold font-serif mb-6">Cost of Living Calculator</h3>

      {/* Selectors */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-semibold text-muted-foreground mb-2">
            Select Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-muted-foreground mb-2">
            Lifestyle
          </label>
          <select
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value as "budget" | "moderate" | "comfortable")}
            className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="budget">Budget</option>
            <option value="moderate">Moderate</option>
            <option value="comfortable">Comfortable</option>
          </select>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 mb-6">
        <CostRow label="Rent (1BR Apartment)" value={costs.rent} />
        <CostRow label="Groceries & Food" value={costs.food} />
        <CostRow label="Utilities" value={costs.utilities} />
        <CostRow label="Transportation" value={costs.transportation} />
        <CostRow label="Healthcare" value={costs.healthcare} />
        <CostRow label="Entertainment" value={costs.entertainment} />
      </div>

      {/* Total */}
      <div className="border-t border-border pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Estimated Monthly Total</span>
          <span className="text-2xl font-bold text-primary">
            ${total.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          *Estimates based on average costs. Actual costs may vary by location and personal choices.
        </p>
      </div>
    </div>
  );
}

function CostRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border/50">
      <span className="text-foreground/80">{label}</span>
      <span className="font-semibold">${value.toLocaleString()}</span>
    </div>
  );
}
