export interface DestinationDetail {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  qolScore: number;
  costScore: number;
  healthcareScore: number;
  safetyScore: number;
  internetScore: number;
  climateScore: number;
  pros: string[];
  cons: string[];
  visa: {
    type: string;
    duration: string;
    requirements: string[];
    minIncome?: string;
  };
  taxes: {
    summary: string;
    incomeTax: string;
    capitalGains: string;
    remittanceBased: boolean;
    notes: string;
  };
  healthcare: {
    summary: string;
    publicAvailable: boolean;
    avgMonthlyPremium: string;
    quality: string;
  };
  costs: {
    monthlyBudgetSolo: string;
    monthlyBudgetCouple: string;
    rent1br: string;
    mealOut: string;
    groceries: string;
    transport: string;
  };
  summary: string;
}

export const destinationDetails: Record<string, DestinationDetail> = {
  portugal: {
    slug: "portugal",
    name: "Portugal",
    country: "Portugal",
    region: "Europe",
    tagline: "Sunny coastlines, low cost, and a welcoming expat culture",
    heroImage: "/images/portugal.jpg",
    qolScore: 88,
    costScore: 82,
    healthcareScore: 85,
    safetyScore: 90,
    internetScore: 80,
    climateScore: 92,
    pros: [
      "Affordable cost of living vs. Western Europe",
      "Excellent healthcare system",
      "High safety — one of the safest countries in the world",
      "Warm climate with 300+ sunny days/year",
      "English widely spoken",
      "Golden Visa and D7 Passive Income Visa available",
      "Strong expat community",
    ],
    cons: [
      "Bureaucracy can be slow",
      "Property prices rising fast in Lisbon/Porto",
      "Lower salaries if you work locally",
      "Language barrier outside tourist areas",
    ],
    visa: {
      type: "D7 Passive Income Visa",
      duration: "2 years (renewable)",
      requirements: [
        "Proof of passive income (pension, rental, dividends)",
        "Clean criminal record",
        "Health insurance",
        "Proof of accommodation",
      ],
      minIncome: "~€760/month",
    },
    taxes: {
      summary: "Portugal offers the NHR tax regime for new residents.",
      incomeTax: "Flat 20% under NHR for qualifying income",
      capitalGains: "28% on capital gains",
      remittanceBased: false,
      notes: "NHR status lasts 10 years. Foreign pension income may be taxed at 10%.",
    },
    healthcare: {
      summary: "Portugal has a strong national health service (SNS) and excellent private options.",
      publicAvailable: true,
      avgMonthlyPremium: "~€60–€150/month private",
      quality: "Excellent — ranked top 15 globally",
    },
    costs: {
      monthlyBudgetSolo: "€1,500–€2,200",
      monthlyBudgetCouple: "€2,200–€3,200",
      rent1br: "€800–€1,400/month (Lisbon), €500–€900 (smaller cities)",
      mealOut: "€10–€20 per person",
      groceries: "€200–€350/month",
      transport: "€40/month public transit",
    },
    summary:
      "Portugal consistently ranks as one of the best countries for retirees and remote workers. Its combination of safety, healthcare, climate, and relatively low cost of living make it a top choice for Americans and Canadians seeking a European base.",
  },

  mexico: {
    slug: "mexico",
    name: "Mexico",
    country: "Mexico",
    region: "Latin America",
    tagline: "Vibrant culture, warm weather, and unbeatable value",
    heroImage: "/images/mexico.jpg",
    qolScore: 78,
    costScore: 92,
    healthcareScore: 72,
    safetyScore: 62,
    internetScore: 74,
    climateScore: 88,
    pros: [
      "Very low cost of living",
      "Close to the US — easy flights home",
      "Rich culture and food scene",
      "Warm climate year-round in most areas",
      "Large expat communities in CDMX, Oaxaca, Merida",
      "Temporary residency easy to obtain",
    ],
    cons: [
      "Safety concerns in certain regions",
      "Healthcare quality varies significantly by city",
      "Bureaucracy and legal complexity",
      "Air quality issues in Mexico City",
    ],
    visa: {
      type: "Temporary Resident Visa",
      duration: "1–4 years",
      requirements: [
        "Proof of income or savings",
        "Application at Mexican consulate",
        "Background check",
      ],
      minIncome: "~$1,620 USD/month",
    },
    taxes: {
      summary: "Mexico taxes residents on worldwide income.",
      incomeTax: "1.92%–35% progressive",
      capitalGains: "25% flat or 35% on net gain",
      remittanceBased: false,
      notes: "US-Mexico tax treaty helps avoid double taxation.",
    },
    healthcare: {
      summary: "Private healthcare is affordable and high quality in major cities.",
      publicAvailable: true,
      avgMonthlyPremium: "~$100–$250 USD/month private",
      quality: "Good in cities, limited in rural areas",
    },
    costs: {
      monthlyBudgetSolo: "$1,200–$2,000 USD",
      monthlyBudgetCouple: "$1,800–$2,800 USD",
      rent1br: "$500–$1,200 USD/month",
      mealOut: "$5–$15 USD",
      groceries: "$150–$300 USD/month",
      transport: "$20–$50 USD/month",
    },
    summary:
      "Mexico offers North Americans an easy transition abroad — familiar products, short flights home, and a dramatically lower cost of living. Best suited to those comfortable navigating safety considerations and drawn to vibrant Latin culture.",
  },

  thailand: {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "World-class food, tropical paradise, and ultra-low costs",
    heroImage: "/images/thailand.jpg",
    qolScore: 80,
    costScore: 95,
    healthcareScore: 82,
    safetyScore: 78,
    internetScore: 76,
    climateScore: 80,
    pros: [
      "Extremely low cost of living",
      "World-class private hospitals",
      "Amazing food and culture",
      "Warm weather year-round",
      "Friendly locals and large expat community",
      "Thailand LTR Visa available for 10 years",
    ],
    cons: [
      "Hot and humid — extreme heat in summer",
      "Language barrier is significant",
      "Cannot own land as a foreigner",
      "Visa rules can be complex",
      "Air quality issues in Chiang Mai (burning season)",
    ],
    visa: {
      type: "Long-Term Resident (LTR) Visa",
      duration: "10 years",
      requirements: [
        "Passive income of $40,000+/year OR $80k savings",
        "Health insurance with $50k coverage",
        "Background check",
      ],
      minIncome: "$40,000 USD/year",
    },
    taxes: {
      summary: "Thailand taxes income earned in Thailand. Foreign-sourced income rules changed in 2024.",
      incomeTax: "0%–35% progressive",
      capitalGains: "Taxed as ordinary income",
      remittanceBased: true,
      notes: "LTR visa holders get tax exemptions on foreign-sourced income.",
    },
    healthcare: {
      summary: "Thailand has excellent private hospitals especially in Bangkok and Chiang Mai.",
      publicAvailable: false,
      avgMonthlyPremium: "~$80–$200 USD/month",
      quality: "Excellent private, basic public",
    },
    costs: {
      monthlyBudgetSolo: "$1,000–$1,800 USD",
      monthlyBudgetCouple: "$1,500–$2,500 USD",
      rent1br: "$300–$800 USD/month",
      mealOut: "$2–$10 USD",
      groceries: "$100–$200 USD/month",
      transport: "$30–$80 USD/month",
    },
    summary:
      "Thailand is the ultimate value destination — unbeatable cost of living, excellent private healthcare, and a rich culture. The new LTR visa makes long-term stays easier than ever for retirees and remote workers with foreign income.",
  },

  spain: {
    slug: "spain",
    name: "Spain",
    country: "Spain",
    region: "Europe",
    tagline: "Passionate culture, stunning cities, and Mediterranean lifestyle",
    heroImage: "/images/spain.jpg",
    qolScore: 87,
    costScore: 78,
    healthcareScore: 88,
    safetyScore: 86,
    internetScore: 82,
    climateScore: 90,
    pros: [
      "High quality of life",
      "Excellent food and wine culture",
      "Strong public healthcare system",
      "Affordable vs. Northern Europe",
      "Non-Lucrative Visa available for retirees",
      "Rich history and arts scene",
    ],
    cons: [
      "Bureaucracy is slow and complex",
      "High unemployment — local job market tough",
      "Wealth tax applies to residents",
      "Spanish language required for daily life outside cities",
    ],
    visa: {
      type: "Non-Lucrative Visa",
      duration: "1 year (renewable)",
      requirements: [
        "Proof of income (~€2,400/month)",
        "Health insurance",
        "Clean criminal record",
        "Cannot work for Spanish companies",
      ],
      minIncome: "~€2,400/month",
    },
    taxes: {
      summary: "Spain taxes worldwide income. The Beckham Law offers a flat 24% for qualifying new residents.",
      incomeTax: "19%–47% progressive (or 24% flat under Beckham Law)",
      capitalGains: "19%–28%",
      remittanceBased: false,
      notes: "Wealth tax applies above €700k in most regions. Beckham Law lasts 6 years.",
    },
    healthcare: {
      summary: "Spain has one of the best public healthcare systems in the world.",
      publicAvailable: true,
      avgMonthlyPremium: "~€50–€150/month private",
      quality: "Excellent — ranked top 10 globally",
    },
    costs: {
      monthlyBudgetSolo: "€1,800–€2,800",
      monthlyBudgetCouple: "€2,500–€3,800",
      rent1br: "€700–€1,500/month (Madrid/Barcelona), €500–€900 elsewhere",
      mealOut: "€12–€25 per person",
      groceries: "€250–€400/month",
      transport: "€50/month public transit",
    },
    summary:
      "Spain offers a passionate high-quality lifestyle at a fraction of Northern European costs. With world-class healthcare, beautiful cities, and a welcoming culture, it is ideal for retirees and remote workers seeking a full European experience.",
  },

  panama: {
    slug: "panama",
    name: "Panama",
    country: "Panama",
    region: "Latin America",
    tagline: "Dollar economy, pensionado perks, and tropical convenience",
    heroImage: "/images/panama.jpg",
    qolScore: 76,
    costScore: 84,
    healthcareScore: 78,
    safetyScore: 72,
    internetScore: 78,
    climateScore: 80,
    pros: [
      "Uses US dollar — no currency risk",
      "Pensionado visa — best retiree visa in the world",
      "Territorial tax system — foreign income not taxed",
      "Modern infrastructure",
      "Easy access to US flights",
      "Retiree discounts of 25–50% on many services",
    ],
    cons: [
      "Hot and humid year-round",
      "Income inequality and poverty visible",
      "Limited cultural scene outside Panama City",
      "Heavy traffic in Panama City",
    ],
    visa: {
      type: "Pensionado Visa",
      duration: "Permanent",
      requirements: [
        "Proof of lifetime pension of $1,000+/month",
        "Background check",
        "Medical certificate",
      ],
      minIncome: "$1,000 USD/month pension",
    },
    taxes: {
      summary: "Panama uses a territorial tax system — only Panama-sourced income is taxed.",
      incomeTax: "0% on foreign income",
      capitalGains: "10% on Panama-sourced gains",
      remittanceBased: false,
      notes: "Ideal for retirees with foreign pensions or investment income.",
    },
    healthcare: {
      summary: "Good private healthcare in Panama City, more limited in rural areas.",
      publicAvailable: true,
      avgMonthlyPremium: "~$100–$200 USD/month",
      quality: "Good in Panama City",
    },
    costs: {
      monthlyBudgetSolo: "$1,500–$2,500 USD",
      monthlyBudgetCouple: "$2,000–$3,500 USD",
      rent1br: "$700–$1,400 USD/month (Panama City)",
      mealOut: "$8–$20 USD",
      groceries: "$200–$350 USD/month",
      transport: "$30–$80 USD/month",
    },
    summary:
      "Panama is arguably the world's best retirement destination for Americans. The Pensionado visa grants extraordinary discounts, the dollar eliminates currency risk, and the territorial tax system means your foreign income is completely untouched.",
  },
};

export function getDestinationDetail(slug: string): DestinationDetail | null {
  return destinationDetails[slug] ?? null;
}

export function getAllDestinationDetails(): DestinationDetail[] {
  return Object.values(destinationDetails);
}
