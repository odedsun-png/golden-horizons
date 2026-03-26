export type Country = {
  id: string;
  rank: number;
  name: string;
  flag: string;
  image: string;
  description: string;
  benefits: string[];
  scores: {
    costOfLiving: number; // 1-5 (5 = most affordable)
    safety: number;
    healthcare: number;
    lifestyle: number;
  };
  costOfLiving: {
    rent: number; // monthly, 1BR apartment
    food: number; // monthly groceries
    utilities: number;
    transportation: number;
    healthcare: number;
    entertainment: number;
  };
  currency: string;
};

export const countries: Country[] = [
  {
    id: "portugal",
    rank: 1,
    name: "Portugal",
    flag: "🇵🇹",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
    description: "Stunning coastlines, rich history, and one of Europe's most affordable countries with excellent healthcare.",
    benefits: ["EU residency path", "English widely spoken", "300+ days of sunshine", "World-class healthcare"],
    scores: { costOfLiving: 4, safety: 5, healthcare: 5, lifestyle: 5 },
    costOfLiving: {
      rent: 900,
      food: 350,
      utilities: 120,
      transportation: 80,
      healthcare: 150,
      entertainment: 150,
    },
    currency: "EUR",
  },
  {
    id: "mexico",
    rank: 2,
    name: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80",
    description: "Close to the US, vibrant culture, established expat communities, and very affordable living.",
    benefits: ["Close to US/Canada", "Large expat community", "Low cost of living", "Rich culture"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 },
    costOfLiving: {
      rent: 600,
      food: 250,
      utilities: 60,
      transportation: 50,
      healthcare: 100,
      entertainment: 100,
    },
    currency: "USD",
  },
  {
    id: "costa-rica",
    rank: 3,
    name: "Costa Rica",
    flag: "🇨🇷",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    description: "Pura Vida lifestyle, excellent healthcare, stable democracy, and stunning natural beauty.",
    benefits: ["Stable democracy", "Excellent healthcare", "No army", "Biodiversity hotspot"],
    scores: { costOfLiving: 3, safety: 4, healthcare: 5, lifestyle: 5 },
    costOfLiving: {
      rent: 800,
      food: 400,
      utilities: 100,
      transportation: 70,
      healthcare: 120,
      entertainment: 120,
    },
    currency: "USD",
  },
  {
    id: "spain",
    rank: 4,
    name: "Spain",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80",
    description: "Mediterranean lifestyle, world-renowned cuisine, excellent public healthcare, and rich cultural heritage.",
    benefits: ["Mediterranean climate", "Top-rated healthcare", "Rich culture", "EU membership"],
    scores: { costOfLiving: 3, safety: 5, healthcare: 5, lifestyle: 5 },
    costOfLiving: {
      rent: 1000,
      food: 400,
      utilities: 130,
      transportation: 90,
      healthcare: 100,
      entertainment: 150,
    },
    currency: "EUR",
  },
  {
    id: "panama",
    rank: 5,
    name: "Panama",
    flag: "🇵🇦",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    description: "Uses US dollar, generous pensionado discounts, modern infrastructure, and tropical climate.",
    benefits: ["Uses US dollar", "Pensionado discounts", "Modern healthcare", "Tax benefits"],
    scores: { costOfLiving: 4, safety: 3, healthcare: 4, lifestyle: 4 },
    costOfLiving: {
      rent: 700,
      food: 300,
      utilities: 80,
      transportation: 60,
      healthcare: 100,
      entertainment: 100,
    },
    currency: "USD",
  },
  {
    id: "thailand",
    rank: 6,
    name: "Thailand",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80",
    description: "Extremely affordable, world-class medical tourism, beautiful beaches, and welcoming culture.",
    benefits: ["Very affordable", "Medical tourism hub", "Tropical beaches", "Friendly locals"],
    scores: { costOfLiving: 5, safety: 4, healthcare: 4, lifestyle: 4 },
    costOfLiving: {
      rent: 450,
      food: 200,
      utilities: 80,
      transportation: 50,
      healthcare: 80,
      entertainment: 80,
    },
    currency: "USD",
  },
  {
    id: "ecuador",
    rank: 7,
    name: "Ecuador",
    flag: "🇪🇨",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&q=80",
    description: "Uses US dollar, diverse climates, affordable healthcare, and welcoming retirement visa program.",
    benefits: ["Uses US dollar", "Low cost of living", "Diverse geography", "Easy residency"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 3, lifestyle: 4 },
    costOfLiving: {
      rent: 500,
      food: 250,
      utilities: 60,
      transportation: 40,
      healthcare: 80,
      entertainment: 80,
    },
    currency: "USD",
  },
  {
    id: "malaysia",
    rank: 8,
    name: "Malaysia",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80",
    description: "Modern infrastructure, English widely spoken, excellent healthcare, and multicultural society.",
    benefits: ["English spoken", "Modern cities", "MM2H visa", "Great food scene"],
    scores: { costOfLiving: 5, safety: 4, healthcare: 4, lifestyle: 4 },
    costOfLiving: {
      rent: 500,
      food: 200,
      utilities: 70,
      transportation: 50,
      healthcare: 70,
      entertainment: 70,
    },
    currency: "USD",
  },
  {
    id: "greece",
    rank: 9,
    name: "Greece",
    flag: "🇬🇷",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    description: "Island lifestyle, Mediterranean diet, ancient history, and affordable European living.",
    benefits: ["Island living", "Mediterranean diet", "EU membership", "Rich history"],
    scores: { costOfLiving: 4, safety: 4, healthcare: 4, lifestyle: 5 },
    costOfLiving: {
      rent: 600,
      food: 350,
      utilities: 120,
      transportation: 70,
      healthcare: 100,
      entertainment: 100,
    },
    currency: "EUR",
  },
  {
    id: "colombia",
    rank: 10,
    name: "Colombia",
    flag: "🇨🇴",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
    description: "Eternal spring climate in Medellin, modern cities, affordable living, and improving safety.",
    benefits: ["Year-round spring climate", "Modern healthcare", "Affordable", "Growing expat scene"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 },
    costOfLiving: {
      rent: 550,
      food: 250,
      utilities: 70,
      transportation: 40,
      healthcare: 80,
      entertainment: 80,
    },
    currency: "USD",
  },
];

export function getCountryById(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}
