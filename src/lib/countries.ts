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
    rent: number;         // monthly, 1BR apartment
    food: number;         // monthly groceries
    utilities: number;
    transportation: number;
    healthcare: number;
    entertainment: number;
  };
  currency: string;
  mainVisaRoute?: string;
  cardData?: {
    snapshotSummary?: string;
    visaRoute: string;
    visaLabel: string;
    monthlyBudget: string;
    healthcareSnapshot: string;
    socialSecurityFit: string;
    safetySnapshot: string;
    taxSnapshot: string;
    scores: {
      cost: number;
      healthcare: number;
      safety: number;
      lifestyle: number;
      visaEase: number;
      englishEase: number;
    };
  };
  officialSources?: {
    visa?: string;
    immigration?: string;
    healthcare?: string;
    tax?: string;
    safety?: string;
    socialSecurity?: string;
    banking?: string;
  };
  verificationStatus?: {
    visaVerifiedFromOfficialSource?: boolean;
    taxVerifiedFromOfficialSource?: boolean;
    healthcareVerifiedFromOfficialSource?: boolean;
    safetyVerifiedFromOfficialSource?: boolean;
    lastReviewed?: string;
    confidenceScore?: number;
    notes?: string;
  };
  pros?: string[];
  cons?: string[];
  bestFit?: string;
  notBestFit?: string;
  finalVerdict?: string;
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
    costOfLiving: { rent: 900, food: 350, utilities: 120, transportation: 80, healthcare: 150, entertainment: 150 },
    currency: "EUR",
    mainVisaRoute: "D7 Passive Income Visa",
    cardData: {
      snapshotSummary: "Portugal is a strong retirement destination for Americans because Social Security income may support the D7/residency visa route, healthcare access is strong, and safety scores are high.",
      visaRoute: "D7 Passive Income Visa",
      visaLabel: "Passive income visa — pensions, SS, investments accepted",
      monthlyBudget: "$1,800–$2,500",
      healthcareSnapshot: "Excellent public SNS system. Private insurance required initially.",
      socialSecurityFit: "Yes — SS qualifies if $1,085+/month",
      safetySnapshot: "Extremely safe. Low crime, with petty theft risk in tourist areas.",
      taxSnapshot: "Progressive Portuguese tax on worldwide income. No more NHR exemption for new retirees.",
      scores: { cost: 3, healthcare: 5, safety: 5, lifestyle: 5, visaEase: 4, englishEase: 4 },
    },
    officialSources: {
      visa: "https://vistos.mne.gov.pt/en/national-visas/necessary-documentation/residency",
      immigration: "https://aima.gov.pt/",
      healthcare: "https://www.sns24.gov.pt/",
      tax: "https://info.portaldasfinancas.gov.pt/",
      safety: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html",
      socialSecurity: "https://www.ssa.gov/international/payments.html",
      banking: "https://www.bportugal.pt/",
    },
    verificationStatus: {
      visaVerifiedFromOfficialSource: true,
      taxVerifiedFromOfficialSource: true,
      healthcareVerifiedFromOfficialSource: true,
      safetyVerifiedFromOfficialSource: true,
      lastReviewed: "May 2026",
      confidenceScore: 97,
      notes: "All visa and source data verified from official Portuguese government and U.S. State Department sources. Visa link updated to necessary-documentation/residency. Healthcare updated to SNS24. Tax updated to info.portaldasfinancas.gov.pt. Safety updated to travel advisory URL. SSA updated to international/payments. Tax note reflects end of NHR program.",
    },
    pros: [
      "EU residency pathway — live and travel freely across the Schengen zone",
      "Among Europe's safest countries with very low violent crime",
      "Excellent public SNS healthcare accessible to legal residents",
      "Large, active English-speaking expat community in Lisbon, Porto, and the Algarve",
      "Clear path to EU citizenship after 5 years of legal residency",
    ],
    cons: [
      "NHR tax exemption ended — no longer available to new arrivals after 2024",
      "Rents in Lisbon and Porto have risen sharply — look beyond the capital",
      "Must spend 183+ days per year in Portugal to maintain legal residency",
      "AIMA immigration agency backlogs — expect paperwork delays",
      "Portuguese language barrier outside expat hubs — learning basics is strongly advised",
    ],
    bestFit: "Retirees with at least $1,085/month in pension or Social Security who want European residency, excellent healthcare, and a safe, sunny lifestyle with an established expat community.",
    notBestFit: "Social Security-only retirees on very tight budgets, or those unwilling to commit to 183+ days per year in Portugal.",
    finalVerdict: "Portugal remains the gold standard for American retirees seeking European residency. Despite the closure of the NHR tax program, it still offers exceptional quality of life, world-class safety, excellent healthcare, and a clear path to EU citizenship. The D7 Visa is accessible to most retirees with a moderate income. Budget carefully — Lisbon and Porto have gotten expensive, but the Algarve, Silver Coast, and interior towns still offer outstanding value.",
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
    costOfLiving: { rent: 600, food: 250, utilities: 60, transportation: 50, healthcare: 100, entertainment: 100 },
    currency: "USD",
    mainVisaRoute: "Temporary Resident Visa",
    cardData: {
      snapshotSummary: "Mexico is a strong retirement destination for Americans because Social Security income may support temporary residency, private healthcare is widely available in major cities, and many expat-friendly communities offer a lower monthly cost than the U.S.",
      visaRoute: "Temporary Resident Visa",
      visaLabel: "Temporary residency path — income or savings based",
      monthlyBudget: "$1,600–$3,000",
      healthcareSnapshot: "Good private healthcare in major cities and expat hubs. Private insurance or out-of-pocket care is commonly used.",
      socialSecurityFit: "Yes — SS income may help qualify, but consulate thresholds vary",
      safetySnapshot: "Varies heavily by state and city. Safer expat hubs exist, but retirees should check local advisories.",
      taxSnapshot: "Tax residency depends on time spent, income source, and center of life. U.S. citizens may still have U.S. filing obligations.",
      scores: { cost: 5, healthcare: 4, safety: 3, lifestyle: 5, visaEase: 4, englishEase: 3 },
    },
    officialSources: {
      visa: "https://consulmex.sre.gob.mx/leamington/index.php/non-mexicans/visas/115-temporary-resident-visa",
      immigration: "https://www.gob.mx/inm",
      healthcare: "https://www.gob.mx/salud",
      tax: "https://www.sat.gob.mx/",
      safety: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html",
      socialSecurity: "https://www.ssa.gov/international/payments.html",
      banking: "https://www.banxico.org.mx/",
    },
    verificationStatus: {
      visaVerifiedFromOfficialSource: true,
      taxVerifiedFromOfficialSource: true,
      healthcareVerifiedFromOfficialSource: true,
      safetyVerifiedFromOfficialSource: true,
      lastReviewed: "May 2026",
      confidenceScore: 94,
      notes: "Mexico data verified using official Mexican consular temporary resident visa guidance, INM government portal, Secretaría de Salud, SAT tax authority, U.S. State Department Mexico country information, SSA international payments guidance, and Banco de México. Visa financial thresholds can vary by consulate and should be confirmed directly before applying.",
    },
    pros: [
      "Very close to the U.S., making family visits and medical return trips easier",
      "Large, established American and Canadian expat communities in cities like San Miguel de Allende, Lake Chapala, Mérida, Puerto Vallarta, and Mexico City",
      "Lower monthly cost of living than many U.S. retirement markets",
      "Strong private healthcare options in major cities and expat hubs",
      "Temporary residency route can work well for retirees with stable Social Security, pension income, or savings",
    ],
    cons: [
      "Safety varies significantly by state, city, and neighborhood",
      "Visa income and savings requirements can differ by consulate and may change",
      "Private healthcare quality is strongest in major cities, not every rural or coastal area",
      "Spanish is important for healthcare, government paperwork, rentals, and daily life outside major expat zones",
      "Tax residency rules require careful planning if Mexico becomes your main home",
    ],
    bestFit: "Retirees who want to stay close to the U.S., live on a lower monthly budget, access private healthcare, and join an established expat community while maintaining flexibility for family visits.",
    notBestFit: "Retirees who require uniform safety across the entire country, do not want to learn basic Spanish, or need guaranteed low-cost healthcare in smaller towns without checking local medical access first.",
    finalVerdict: "Mexico is one of the most practical retirement-abroad options for Americans because it combines proximity, affordability, culture, strong private healthcare in major cities, and established expat infrastructure. The biggest factor is location selection: the difference between one state, city, or neighborhood and another can be huge. For retirees with Social Security, pension income, or savings, Mexico’s temporary residency path may be realistic, but consulate requirements should be verified before making financial plans.",
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
    costOfLiving: { rent: 800, food: 400, utilities: 100, transportation: 70, healthcare: 120, entertainment: 120 },
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
    costOfLiving: { rent: 1000, food: 400, utilities: 130, transportation: 90, healthcare: 100, entertainment: 150 },
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
    costOfLiving: { rent: 700, food: 300, utilities: 80, transportation: 60, healthcare: 100, entertainment: 100 },
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
    costOfLiving: { rent: 450, food: 200, utilities: 80, transportation: 50, healthcare: 80, entertainment: 80 },
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
    costOfLiving: { rent: 500, food: 250, utilities: 60, transportation: 40, healthcare: 80, entertainment: 80 },
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
    costOfLiving: { rent: 500, food: 200, utilities: 70, transportation: 50, healthcare: 70, entertainment: 70 },
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
    costOfLiving: { rent: 600, food: 350, utilities: 120, transportation: 70, healthcare: 100, entertainment: 100 },
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
    costOfLiving: { rent: 550, food: 250, utilities: 70, transportation: 40, healthcare: 80, entertainment: 80 },
    currency: "USD",
  },
  {
    id: "vietnam",
    rank: 11,
    name: "Vietnam",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    description: "Southeast Asia's best value destination with world-class food culture and stunning coastline.",
    benefits: ["Ultra-affordable", "Amazing food scene", "Beautiful beaches", "Friendly locals"],
    scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 400, food: 180, utilities: 60, transportation: 35, healthcare: 60, entertainment: 70 },
    currency: "USD",
  },
  {
    id: "italy",
    rank: 12,
    name: "Italy",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
    description: "7% flat tax in southern villages, free SSN healthcare, and the world's greatest food and wine culture.",
    benefits: ["7% flat tax option", "Free public healthcare", "EU membership", "World-class cuisine"],
    scores: { costOfLiving: 3, safety: 4, healthcare: 5, lifestyle: 5 },
    costOfLiving: { rent: 850, food: 380, utilities: 140, transportation: 80, healthcare: 100, entertainment: 160 },
    currency: "EUR",
  },
  {
    id: "france",
    rank: 13,
    name: "France",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    description: "WHO-ranked #1 healthcare globally, unmatched quality of life via food, culture, and high-speed rail.",
    benefits: ["#1 global healthcare", "Rich cultural life", "Excellent infrastructure", "EU membership"],
    scores: { costOfLiving: 2, safety: 4, healthcare: 5, lifestyle: 5 },
    costOfLiving: { rent: 1100, food: 450, utilities: 150, transportation: 100, healthcare: 120, entertainment: 200 },
    currency: "EUR",
  },
  {
    id: "new-zealand",
    rank: 14,
    name: "New Zealand",
    flag: "🇳🇿",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80",
    description: "#2 safest country on Earth with English-speaking culture, spectacular nature, and world-class infrastructure.",
    benefits: ["Very safe", "English-speaking", "Stunning scenery", "Clean environment"],
    scores: { costOfLiving: 2, safety: 5, healthcare: 5, lifestyle: 5 },
    costOfLiving: { rent: 1400, food: 500, utilities: 160, transportation: 120, healthcare: 100, entertainment: 180 },
    currency: "NZD",
  },
  {
    id: "portugal-azores",
    rank: 15,
    name: "Portugal — Azores",
    flag: "🇵🇹",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&q=80",
    description: "30–40% cheaper than mainland Portugal with identical D7 visa and NHR 2.0 tax benefits.",
    benefits: ["Budget Portugal option", "D7 visa eligible", "NHR tax benefits", "Unspoiled nature"],
    scores: { costOfLiving: 5, safety: 5, healthcare: 4, lifestyle: 4 },
    costOfLiving: { rent: 600, food: 280, utilities: 100, transportation: 60, healthcare: 120, entertainment: 100 },
    currency: "EUR",
  },
  {
    id: "malta",
    rank: 16,
    name: "Malta",
    flag: "🇲🇹",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    description: "The only English-speaking EU country with 15% flat tax, 300 sunny days, and an EU citizenship pathway.",
    benefits: ["English-speaking EU", "15% flat tax", "300 sunny days", "EU citizenship path"],
    scores: { costOfLiving: 3, safety: 5, healthcare: 4, lifestyle: 4 },
    costOfLiving: { rent: 900, food: 320, utilities: 110, transportation: 70, healthcare: 90, entertainment: 130 },
    currency: "EUR",
  },
  {
    id: "belize",
    rank: 17,
    name: "Belize",
    flag: "🇧🇿",
    image: "https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?w=600&q=80",
    description: "The only English-speaking country in Central America with zero tax on foreign income and world-class diving.",
    benefits: ["English-speaking", "Zero foreign income tax", "QRP visa program", "Caribbean coast"],
    scores: { costOfLiving: 4, safety: 3, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 600, food: 280, utilities: 90, transportation: 55, healthcare: 90, entertainment: 100 },
    currency: "USD",
  },
  {
    id: "argentina",
    rank: 18,
    name: "Argentina",
    flag: "🇦🇷",
    image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=600&q=80",
    description: "Paris of South America with extraordinary USD purchasing power and world-class steak and wine culture.",
    benefits: ["Extraordinary value", "World-class food & wine", "European culture", "Easy residency"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 4, lifestyle: 4 },
    costOfLiving: { rent: 350, food: 180, utilities: 50, transportation: 30, healthcare: 60, entertainment: 80 },
    currency: "USD",
  },
  {
    id: "bolivia",
    rank: 19,
    name: "Bolivia",
    flag: "🇧🇴",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&q=80",
    description: "South America's most affordable destination. Sucre's perfect 63°F year-round climate and UNESCO heritage.",
    benefits: ["Lowest cost in S. America", "Perfect spring climate", "UNESCO heritage city", "Zero foreign income tax"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 2, lifestyle: 3 },
    costOfLiving: { rent: 280, food: 150, utilities: 40, transportation: 25, healthcare: 50, entertainment: 60 },
    currency: "USD",
  },
  {
    id: "cambodia",
    rank: 20,
    name: "Cambodia",
    flag: "🇰🇭",
    image: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=900",
    description: "Easiest visa in Asia at $290/year with no income requirement, USD economy, and near-zero costs.",
    benefits: ["Easiest visa in Asia", "USD economy", "No income requirement", "Very affordable"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 2, lifestyle: 3 },
    costOfLiving: { rent: 350, food: 160, utilities: 50, transportation: 30, healthcare: 55, entertainment: 65 },
    currency: "USD",
  },
  {
    id: "northern-cyprus",
    rank: 21,
    name: "Northern Cyprus",
    flag: "🇨🇾",
    image: "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=600&q=80",
    description: "Mediterranean lifestyle at budget prices with 300 sunny days, English widely spoken, and very low taxes.",
    benefits: ["Mediterranean lifestyle", "English spoken", "Very low taxes", "300 sunny days"],
    scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 450, food: 220, utilities: 80, transportation: 45, healthcare: 70, entertainment: 90 },
    currency: "USD",
  },
  {
    id: "philippines",
    rank: 22,
    name: "Philippines",
    flag: "🇵🇭",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    description: "English-speaking Asia with no tax on foreign pensions, deposit-only SRRV visa, and US tax treaty.",
    benefits: ["English-speaking", "No tax on pensions", "SRRV visa", "US tax treaty"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 400, food: 200, utilities: 70, transportation: 40, healthcare: 70, entertainment: 80 },
    currency: "USD",
  },
  {
    id: "paraguay",
    rank: 23,
    name: "Paraguay",
    flag: "🇵🇾",
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80",
    description: "Easiest residency in South America with territorial tax, USD-linked economy, and very low cost of living.",
    benefits: ["Easiest residency in S. America", "Territorial tax system", "USD-linked economy", "Low cost of living"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 3, lifestyle: 3 },
    costOfLiving: { rent: 400, food: 190, utilities: 55, transportation: 35, healthcare: 60, entertainment: 70 },
    currency: "USD",
  },
  {
    id: "indonesia",
    rank: 24,
    name: "Indonesia",
    flag: "🇮🇩",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    description: "Dedicated retirement KITAS visa, Bali's world-famous lifestyle, and 17,000 islands to explore.",
    benefits: ["Retirement KITAS visa", "Bali lifestyle", "Very affordable", "Tropical paradise"],
    scores: { costOfLiving: 5, safety: 3, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 380, food: 170, utilities: 60, transportation: 35, healthcare: 60, entertainment: 75 },
    currency: "USD",
  },
  {
    id: "albania",
    rank: 25,
    name: "Albania",
    flag: "🇦🇱",
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=600&q=80",
    description: "Cheapest country in Europe with 1-year visa-free for Americans. Albanian Riviera rivals Greece.",
    benefits: ["Cheapest in Europe", "1-year visa-free", "Albanian Riviera", "EU candidate country"],
    scores: { costOfLiving: 5, safety: 4, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 380, food: 190, utilities: 70, transportation: 35, healthcare: 55, entertainment: 80 },
    currency: "USD",
  },
  {
    id: "montenegro",
    rank: 26,
    name: "Montenegro",
    flag: "🇲🇪",
    image: "https://images.unsplash.com/photo-1555990538-c01c6462f8e2?w=600&q=80",
    description: "Europe's lowest flat tax at 9%, stunning Bay of Kotor, and an Adriatic coastline rivaling Croatia.",
    benefits: ["9% flat tax", "Bay of Kotor", "Adriatic coast", "EU candidate country"],
    scores: { costOfLiving: 4, safety: 4, healthcare: 3, lifestyle: 4 },
    costOfLiving: { rent: 550, food: 240, utilities: 90, transportation: 50, healthcare: 70, entertainment: 100 },
    currency: "EUR",
  },
];

export function getCountryById(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}
