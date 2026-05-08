import fs from "fs";
import path from "path";

const destinationsFile = path.join(
  process.cwd(),
  "src",
  "data",
  "destinations.json"
);

export type CostItem = {
  item: string;
  range: string;
};

export type TextBlock = {
  name?: string;
  requirements?: string;
  description: string;
  keyTakeaway: string;
  sourceUrl?: string;
};

export type RelatedDestination = {
  slug: string;
  flag: string;
  name: string;
  budgetShort: string;
};

export type SourceLink = {
  label: string;
  url: string;
  type:
    | "official-government"
    | "embassy-consulate"
    | "healthcare"
    | "tax"
    | "cost-of-living"
    | "retirement-index"
    | "other";
};

export type DestinationDetail = {
  id: string;
  slug?: string;
  rank: number;
  flag: string;
  name: string;

  ilRank: string;
  ilRankShort: string;
  tagline: string;
  budgetShort: string;
  bestCity: string;
  taxRate: string;
  qolScore: string;
  heroImage: string;

  overview: string;
  cities: string[];

  costCouple: string;
  costSingle: string;
  pros: string[];
  cons: string[];

  costs: CostItem[];

  healthcare: TextBlock;
  visa: TextBlock;
  tax: TextBlock;

  scores: Record<string, number>;

  relatedDestinations: RelatedDestination[];

  sourceLinks?: SourceLink[];

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalPath?: string;
  };

  aiSummary?: {
    bestFor?: string;
    notBestFor?: string;
    keyDecision?: string;
  };

  lastVerified?: string;
};

const defaultCosts: CostItem[] = [
  { item: "1BR Apartment Rent", range: "$700–$1,800" },
  { item: "2BR Apartment Rent", range: "$1,000–$2,500" },
  { item: "Groceries & Food", range: "$300–$500" },
  { item: "Dining Out", range: "$150–$400" },
  { item: "Utilities", range: "$100–$220" },
  { item: "Transportation", range: "$60–$180" },
  { item: "Healthcare / Insurance", range: "$100–$300" },
  { item: "Entertainment", range: "$150–$350" },
];

const baseDestinations = [
  { slug: "portugal", rank: 1, flag: "🇵🇹", name: "Portugal", budget: "$2,500", city: "Algarve" },
  { slug: "mexico", rank: 2, flag: "🇲🇽", name: "Mexico", budget: "$1,500", city: "San Miguel de Allende" },
  { slug: "costa-rica", rank: 3, flag: "🇨🇷", name: "Costa Rica", budget: "$2,000", city: "Central Valley" },
  { slug: "spain", rank: 4, flag: "🇪🇸", name: "Spain", budget: "$2,500", city: "Valencia" },
  { slug: "panama", rank: 5, flag: "🇵🇦", name: "Panama", budget: "$2,500", city: "Boquete" },
  { slug: "thailand", rank: 6, flag: "🇹🇭", name: "Thailand", budget: "$1,500", city: "Chiang Mai" },
  { slug: "ecuador", rank: 7, flag: "🇪🇨", name: "Ecuador", budget: "$1,500", city: "Cuenca" },
  { slug: "malaysia", rank: 8, flag: "🇲🇾", name: "Malaysia", budget: "$1,500", city: "Penang" },
  { slug: "greece", rank: 9, flag: "🇬🇷", name: "Greece", budget: "$2,000", city: "Crete" },
  { slug: "colombia", rank: 10, flag: "🇨🇴", name: "Colombia", budget: "$1,500", city: "Medellín" },
  { slug: "vietnam", rank: 11, flag: "🇻🇳", name: "Vietnam", budget: "$1,000", city: "Da Nang" },
  { slug: "italy", rank: 12, flag: "🇮🇹", name: "Italy", budget: "$2,500", city: "Puglia" },
  { slug: "france", rank: 13, flag: "🇫🇷", name: "France", budget: "$3,000", city: "Occitanie" },
  { slug: "new-zealand", rank: 14, flag: "🇳🇿", name: "New Zealand", budget: "$3,500", city: "Tauranga" },
  { slug: "portugal-azores", rank: 15, flag: "🇵🇹", name: "Portugal — Azores", budget: "$1,800", city: "São Miguel" },
  { slug: "malta", rank: 16, flag: "🇲🇹", name: "Malta", budget: "$2,500", city: "Sliema" },
  { slug: "belize", rank: 17, flag: "🇧🇿", name: "Belize", budget: "$2,000", city: "Ambergris Caye" },
  { slug: "argentina", rank: 18, flag: "🇦🇷", name: "Argentina", budget: "$1,800", city: "Mendoza" },
  { slug: "bolivia", rank: 19, flag: "🇧🇴", name: "Bolivia", budget: "$1,200", city: "Sucre" },
  { slug: "cambodia", rank: 20, flag: "🇰🇭", name: "Cambodia", budget: "$1,200", city: "Siem Reap" },
  { slug: "northern-cyprus", rank: 21, flag: "🇨🇾", name: "Northern Cyprus", budget: "$1,800", city: "Kyrenia" },
  { slug: "philippines", rank: 22, flag: "🇵🇭", name: "Philippines", budget: "$1,500", city: "Cebu" },
  { slug: "paraguay", rank: 23, flag: "🇵🇾", name: "Paraguay", budget: "$1,500", city: "Asunción" },
  { slug: "indonesia", rank: 24, flag: "🇮🇩", name: "Indonesia", budget: "$1,500", city: "Bali" },
  { slug: "albania", rank: 25, flag: "🇦🇱", name: "Albania", budget: "$1,500", city: "Sarandë" },
  { slug: "montenegro", rank: 26, flag: "🇲🇪", name: "Montenegro", budget: "$2,000", city: "Kotor" },
];

function makeDestination(
  slug: string,
  rank: number,
  flag: string,
  name: string,
  budgetShort: string,
  bestCity: string
): DestinationDetail {
  return {
    id: slug,
    slug,
    rank,
    flag,
    name,
    ilRank: rank <= 10 ? `Top ${rank} Golden Horizons 2026` : "Golden Horizons 2026 pick",
    ilRankShort: `#${rank}`,
    tagline: `${name} retirement guide · real costs · healthcare · visa basics · lifestyle fit`,
    budgetShort,
    bestCity,
    taxRate: "Varies",
    qolScore: rank <= 10 ? "9/10" : "8/10",
    heroImage:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview: `${name} is one of the retirement destinations Golden Horizons is tracking for Americans looking abroad in 2026. This guide gives a practical overview of monthly costs, lifestyle, healthcare, visa considerations, insurance options, taxes, safety, and what retirees should verify before making a move.`,
    cities: [bestCity],
    costCouple: `${budgetShort}+/mo`,
    costSingle: "Varies by city and lifestyle",
    pros: [
      "Potentially lower cost of living than many U.S. retirement markets",
      "Attractive lifestyle for retirees seeking a slower pace",
      "Useful option for Americans comparing overseas retirement choices",
      "Can work well for retirees who research healthcare, visas, and taxes carefully",
    ],
    cons: [
      "Costs vary heavily by city, neighborhood, and lifestyle",
      "Visa and residency rules should be verified before moving",
      "Healthcare access can differ between major cities and smaller towns",
      "Tax planning should be reviewed with a cross-border tax professional",
    ],
    costs: defaultCosts,
    healthcare: {
      description: `Healthcare quality in ${name} depends on the city, hospital network, and whether retirees use public care, private care, international insurance, or local private insurance. Retirees age 60–75 should verify hospital access, English-speaking doctors, specialist availability, prescription access, emergency care, and whether pre-existing conditions are covered.`,
      keyTakeaway: `Use ${bestCity} as a starting point, then verify hospital access, English-speaking doctors, emergency care, and insurance options before committing.`,
    },
    visa: {
      name: "Retirement / Long-Stay Visa",
      requirements: "Requirements vary by country and applicant profile.",
      description: `${name} may offer retirement, income-based, investor, or long-stay residency options depending on the applicant. Rules change often, so retirees should verify income requirements, paperwork, renewals, health insurance requirements, and path-to-residency details before applying.`,
      keyTakeaway: "Confirm visa requirements directly with official government, embassy, or consulate sources before making financial plans.",
    },
    tax: {
      description: `Tax treatment in ${name} depends on residency status, income type, tax treaties, and how long you stay in the country each year. U.S. citizens may still have U.S. filing obligations even while living abroad.`,
      keyTakeaway: "Before moving, speak with a tax professional who understands U.S. expats and local residency rules.",
    },
    scores: {
      healthcare: 80,
      safety: 80,
      english: 70,
      infrastructure: 80,
      expat: 75,
      climate: 85,
    },
    relatedDestinations: [
      { slug: "portugal", flag: "🇵🇹", name: "Portugal", budgetShort: "$2,500" },
      { slug: "spain", flag: "🇪🇸", name: "Spain", budgetShort: "$2,500" },
      { slug: "greece", flag: "🇬🇷", name: "Greece", budgetShort: "$2,000" },
    ].filter((item) => item.slug !== slug),
    sourceLinks: [],
    seo: {
      title: `Retire in ${name}: Cost, Healthcare, Visa & Safety Guide`,
      description: `A practical Golden Horizons retirement guide to ${name}, including cost of living, healthcare, visa options, safety, taxes, best cities, and lifestyle fit for Americans age 60–75.`,
      keywords: [
        `retire in ${name}`,
        `${name} retirement`,
        `${name} cost of living`,
        `${name} healthcare for expats`,
        `${name} retirement visa`,
      ],
      canonicalPath: `/destinations/${slug}`,
    },
    aiSummary: {
      bestFor: "Retirees comparing cost, healthcare access, visa practicality, and lifestyle fit.",
      notBestFor: "Retirees who need guaranteed low-cost healthcare without verifying insurance, doctors, and residency rules.",
      keyDecision: "Confirm healthcare quality, insurance coverage, visa rules, taxes, and monthly budget before choosing a city.",
    },
    lastVerified: "2026-05-08",
  };
}

const generatedDestinations: Record<string, DestinationDetail> = Object.fromEntries(
  baseDestinations.map((item) => [
    item.slug,
    makeDestination(item.slug, item.rank, item.flag, item.name, item.budget, item.city),
  ])
);

const fallbackDestinations: Record<string, DestinationDetail> = {
  ...generatedDestinations,

  portugal: {
    ...generatedDestinations.portugal,
    id: "portugal",
    slug: "portugal",
    rank: 1,
    flag: "🇵🇹",
    name: "Portugal",
    ilRank: "#1 Golden Horizons 2026",
    ilRankShort: "#1",
    tagline: "Europe retirement favorite · healthcare access · visa path · strong expat lifestyle",
    budgetShort: "$2,500",
    bestCity: "Algarve",
    taxRate: "Varies",
    qolScore: "9/10",
    heroImage:
      "https://images.pexels.com/photos/1210642/pexels-photo-1210642.jpeg?auto=compress&cs=tinysrgb&w=1200",
    overview:
      "Portugal remains one of the strongest retirement-abroad options for Americans because it combines European lifestyle, strong healthcare access, relative safety, attractive coastal cities, and a clear long-stay residency path. Retirees should still verify current visa rules, tax treatment, and healthcare access before making financial decisions.",
    cities: ["Algarve", "Lisbon", "Porto", "Silver Coast", "Cascais", "Azores"],
    costCouple: "$2,500–$4,000/mo",
    costSingle: "$1,500–$2,500/mo",
    pros: [
      "Strong retirement lifestyle with beaches, cities, history, and slower-paced towns",
      "Public healthcare access for eligible legal residents plus private healthcare options",
      "Private insurance can help retirees access faster appointments and English-speaking specialists",
      "English is commonly spoken in major expat areas like Lisbon, Porto, Cascais, and the Algarve",
      "Strong fit for retirees who want Europe without the highest Western Europe cost base",
    ],
    cons: [
      "Lisbon, Porto, and Cascais can be expensive compared with smaller towns",
      "Visa and residency paperwork can be slow",
      "Tax benefits and rules can change, so retirees need professional tax advice",
      "Healthcare access may be better in larger cities than smaller rural areas",
    ],
    costs: [
      { item: "1BR Apartment Rent", range: "$1,000–$1,800" },
      { item: "2BR Apartment Rent", range: "$1,300–$2,500" },
      { item: "Groceries & Food", range: "$300–$450" },
      { item: "Dining Out", range: "$200–$400" },
      { item: "Utilities", range: "$120–$180" },
      { item: "Transportation", range: "$80–$150" },
      { item: "Healthcare / Private Insurance", range: "$100–$300" },
      { item: "Entertainment", range: "$150–$250" },
    ],
    healthcare: {
      description:
        "Portugal has public healthcare access for eligible legal residents and a strong private healthcare market. Retirees age 60–75 should compare public access, private insurance, English-speaking doctors, specialist wait times, prescriptions, and emergency care in the specific city they are considering.",
      keyTakeaway:
        "Strong healthcare profile, but retirees should verify private insurance options, English-speaking doctors, and hospital access before choosing a location.",
    },
    visa: {
      name: "D7 / Long-Stay Residency Path",
      requirements:
        "Income, housing, health insurance, background checks, and documentation requirements may apply.",
      description:
        "Portugal is commonly considered by retirees because of its long-stay residency routes for people with passive income. Applicants should verify the latest income, insurance, appointment, renewal, and residency rules through official sources before applying.",
      keyTakeaway:
        "Good long-stay option for retirees with stable income, but requirements must be confirmed from official sources.",
    },
    tax: {
      description:
        "Portugal tax treatment depends on residency status, income source, pensions, treaties, and time spent in country. U.S. citizens may still need to file U.S. taxes while living abroad.",
      keyTakeaway:
        "Do not rely on old tax-program headlines. Verify with a cross-border tax professional.",
    },
    scores: {
      healthcare: 95,
      safety: 90,
      english: 80,
      infrastructure: 90,
      expat: 90,
      climate: 90,
    },
    relatedDestinations: [
      { slug: "spain", flag: "🇪🇸", name: "Spain", budgetShort: "$2,500" },
      { slug: "greece", flag: "🇬🇷", name: "Greece", budgetShort: "$2,000" },
      { slug: "portugal-azores", flag: "🇵🇹", name: "Portugal — Azores", budgetShort: "$1,800" },
    ],
    sourceLinks: [],
    seo: {
      title: "Retire in Portugal: Cost, Healthcare, Visa & Safety Guide",
      description:
        "A practical Golden Horizons retirement guide to Portugal, including cost of living, healthcare, visa options, safety, taxes, best cities, and lifestyle fit for Americans age 60–75.",
      keywords: [
        "retire in Portugal",
        "Portugal retirement",
        "Portugal cost of living",
        "Portugal healthcare for expats",
        "Portugal retirement visa",
      ],
      canonicalPath: "/destinations/portugal",
    },
    aiSummary: {
      bestFor:
        "Retirees who want a European lifestyle, coastal towns, strong healthcare access, and established expat communities.",
      notBestFor:
        "Retirees who want ultra-low rent in the most popular city centers or who do not want paperwork.",
      keyDecision:
        "Portugal works best when retirees choose the right city and verify visa, tax, and healthcare requirements before moving.",
    },
    lastVerified: "2026-05-08",
  },
};

function normalizeDestination(
  slug: string,
  destination: DestinationDetail
): DestinationDetail {
  return {
    ...destination,
    id: destination.id || slug,
    slug: destination.slug || slug,
    costs: Array.isArray(destination.costs) && destination.costs.length > 0
      ? destination.costs
      : defaultCosts,
    pros: Array.isArray(destination.pros) ? destination.pros : [],
    cons: Array.isArray(destination.cons) ? destination.cons : [],
    cities: Array.isArray(destination.cities) ? destination.cities : [],
    relatedDestinations: Array.isArray(destination.relatedDestinations)
      ? destination.relatedDestinations
      : [],
    sourceLinks: Array.isArray(destination.sourceLinks)
      ? destination.sourceLinks
      : [],
    scores: destination.scores || {},
  };
}

function readDestinationJson(): Record<string, DestinationDetail> {
  if (!fs.existsSync(destinationsFile)) {
    return {};
  }

  try {
    const fileContents = fs.readFileSync(destinationsFile, "utf8");
    const parsed = JSON.parse(fileContents) as Record<string, DestinationDetail>;

    return Object.fromEntries(
      Object.entries(parsed).map(([slug, destination]) => [
        slug,
        normalizeDestination(slug, destination),
      ])
    );
  } catch (error) {
    console.error("Failed to read src/data/destinations.json:", error);
    return {};
  }
}

export async function getAllDestinationSlugs(): Promise<string[]> {
  const fileData = readDestinationJson();

  return Array.from(
    new Set([...Object.keys(fallbackDestinations), ...Object.keys(fileData)])
  ).sort((a, b) => {
    const aRank = fileData[a]?.rank ?? fallbackDestinations[a]?.rank ?? 999;
    const bRank = fileData[b]?.rank ?? fallbackDestinations[b]?.rank ?? 999;
    return aRank - bRank;
  });
}

export async function getAllDestinations(): Promise<DestinationDetail[]> {
  const fileData = readDestinationJson();
  const mergedData = {
    ...fallbackDestinations,
    ...fileData,
  };

  return Object.entries(mergedData)
    .map(([slug, destination]) => normalizeDestination(slug, destination))
    .sort((a, b) => a.rank - b.rank);
}

export async function getDestinationBySlug(
  slug: string
): Promise<DestinationDetail | null> {
  const fileData = readDestinationJson();
  const destination = fileData[slug] ?? fallbackDestinations[slug];

  if (!destination) {
    return null;
  }

  return normalizeDestination(slug, destination);
}

export function getDestinationJsonLd(destination: DestinationDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      destination.seo?.title ||
      `Retire in ${destination.name}: Cost, Healthcare, Visa & Safety Guide`,
    description:
      destination.seo?.description ||
      destination.overview,
    image: destination.heroImage,
    author: {
      "@type": "Organization",
      name: "Golden Horizons",
    },
    publisher: {
      "@type": "Organization",
      name: "Golden Horizons",
    },
    about: [
      destination.name,
      "Retirement abroad",
      "Cost of living",
      "Healthcare",
      "Visa",
      "Taxes",
      "Safety",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://golden-horizons.org/destinations/${destination.slug || destination.id}`,
    },
  };
}

export function getDestinationFaqJsonLd(destination: DestinationDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does it cost to retire in ${destination.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Estimated monthly cost is ${destination.costCouple} for a couple and ${destination.costSingle} for a single retiree, depending on city, housing, healthcare, and lifestyle.`,
        },
      },
      {
        "@type": "Question",
        name: `Is healthcare good in ${destination.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: destination.healthcare.keyTakeaway,
        },
      },
      {
        "@type": "Question",
        name: `What visa do retirees need for ${destination.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${destination.visa.name}: ${destination.visa.keyTakeaway}`,
        },
      },
      {
        "@type": "Question",
        name: `What is the best city for retirees in ${destination.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${destination.bestCity} is highlighted as a strong starting point, but retirees should compare healthcare access, rent, walkability, safety, and English-speaking services before choosing.`,
        },
      },
    ],
  };
}
