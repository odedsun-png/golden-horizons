import fs from 'fs';
import path from 'path';

const destinationsFile = path.join(process.cwd(), 'src/data/destinations.json');

type CostItem = {
  item: string;
  range: string;
};

type TextBlock = {
  description: string;
  keyTakeaway: string;
  name?: string;
  requirements?: string;
};

type RelatedDestination = {
  slug: string;
  flag: string;
  name: string;
  budgetShort: string;
};

export type DestinationDetail = {
  id: string;
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
};

const defaultCosts: CostItem[] = [
  { item: '1BR Apartment Rent', range: '$700–$1,800' },
  { item: '2BR Apartment Rent', range: '$1,000–$2,500' },
  { item: 'Groceries & Food', range: '$300–$500' },
  { item: 'Dining Out', range: '$150–$400' },
  { item: 'Utilities', range: '$100–$220' },
  { item: 'Transportation', range: '$60–$180' },
  { item: 'Healthcare / Insurance', range: '$100–$300' },
  { item: 'Entertainment', range: '$150–$350' },
];

const baseDestinations = [
  { slug: 'portugal', rank: 1, flag: '🇵🇹', name: 'Portugal', budget: '$2,500', city: 'Algarve' },
  { slug: 'mexico', rank: 2, flag: '🇲🇽', name: 'Mexico', budget: '$1,500', city: 'San Miguel de Allende' },
  { slug: 'costa-rica', rank: 3, flag: '🇨🇷', name: 'Costa Rica', budget: '$2,000', city: 'Central Valley' },
  { slug: 'spain', rank: 4, flag: '🇪🇸', name: 'Spain', budget: '$2,500', city: 'Valencia' },
  { slug: 'panama', rank: 5, flag: '🇵🇦', name: 'Panama', budget: '$2,500', city: 'Boquete' },
  { slug: 'thailand', rank: 6, flag: '🇹🇭', name: 'Thailand', budget: '$1,500', city: 'Chiang Mai' },
  { slug: 'ecuador', rank: 7, flag: '🇪🇨', name: 'Ecuador', budget: '$1,500', city: 'Cuenca' },
  { slug: 'malaysia', rank: 8, flag: '🇲🇾', name: 'Malaysia', budget: '$1,500', city: 'Penang' },
  { slug: 'greece', rank: 9, flag: '🇬🇷', name: 'Greece', budget: '$2,000', city: 'Crete' },
  { slug: 'colombia', rank: 10, flag: '🇨🇴', name: 'Colombia', budget: '$1,500', city: 'Medellín' },
  { slug: 'vietnam', rank: 11, flag: '🇻🇳', name: 'Vietnam', budget: '$1,000', city: 'Da Nang' },
  { slug: 'italy', rank: 12, flag: '🇮🇹', name: 'Italy', budget: '$2,500', city: 'Puglia' },
  { slug: 'france', rank: 13, flag: '🇫🇷', name: 'France', budget: '$3,000', city: 'Occitanie' },
  { slug: 'new-zealand', rank: 14, flag: '🇳🇿', name: 'New Zealand', budget: '$3,500', city: 'Tauranga' },
  { slug: 'portugal-azores', rank: 15, flag: '🇵🇹', name: 'Portugal — Azores', budget: '$1,800', city: 'São Miguel' },
  { slug: 'malta', rank: 16, flag: '🇲🇹', name: 'Malta', budget: '$2,500', city: 'Sliema' },
  { slug: 'belize', rank: 17, flag: '🇧🇿', name: 'Belize', budget: '$2,000', city: 'Ambergris Caye' },
  { slug: 'argentina', rank: 18, flag: '🇦🇷', name: 'Argentina', budget: '$1,800', city: 'Mendoza' },
  { slug: 'bolivia', rank: 19, flag: '🇧🇴', name: 'Bolivia', budget: '$1,200', city: 'Sucre' },
  { slug: 'cambodia', rank: 20, flag: '🇰🇭', name: 'Cambodia', budget: '$1,200', city: 'Siem Reap' },
  { slug: 'northern-cyprus', rank: 21, flag: '🇨🇾', name: 'Northern Cyprus', budget: '$1,800', city: 'Kyrenia' },
  { slug: 'philippines', rank: 22, flag: '🇵🇭', name: 'Philippines', budget: '$1,500', city: 'Cebu' },
  { slug: 'paraguay', rank: 23, flag: '🇵🇾', name: 'Paraguay', budget: '$1,500', city: 'Asunción' },
  { slug: 'indonesia', rank: 24, flag: '🇮🇩', name: 'Indonesia', budget: '$1,500', city: 'Bali' },
  { slug: 'albania', rank: 25, flag: '🇦🇱', name: 'Albania', budget: '$1,500', city: 'Sarandë' },
  { slug: 'montenegro', rank: 26, flag: '🇲🇪', name: 'Montenegro', budget: '$2,000', city: 'Kotor' },
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
    rank,
    flag,
    name,
    ilRank: rank <= 10 ? `Top ${rank} Golden Horizons 2026` : 'Golden Horizons 2026 pick',
    ilRankShort: `#${rank}`,
    tagline: `${name} retirement guide · real costs · healthcare · visa basics · lifestyle fit`,
    budgetShort,
    bestCity,
    taxRate: 'Varies',
    qolScore: rank <= 10 ? '9/10' : '8/10',
    heroImage:
      'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: `${name} is one of the retirement destinations Golden Horizons is tracking for Americans looking abroad in 2026. This guide gives a practical overview of monthly costs, lifestyle, healthcare, visa considerations, and what retirees should watch before making a move.`,
    cities: [bestCity],
    costCouple: `${budgetShort}+/mo`,
    costSingle: 'Varies by city and lifestyle',
    pros: [
      'Potentially lower cost of living than many US retirement markets',
      'Attractive lifestyle for retirees seeking a slower pace',
      'Useful option for Americans comparing overseas retirement choices',
      'Can work well for retirees who research healthcare, visas, and taxes carefully',
    ],
    cons: [
      'Costs vary heavily by city, neighborhood, and lifestyle',
      'Visa and residency rules should be verified before moving',
      'Healthcare access can differ between major cities and smaller towns',
      'Tax planning should be reviewed with a cross-border tax professional',
    ],
    costs: defaultCosts,
    healthcare: {
      description: `Healthcare quality in ${name} depends on the city, hospital network, and whether you use public or private care. Retirees should compare private insurance, local clinics, specialist access, and emergency care before choosing a location.`,
      keyTakeaway: `Use ${bestCity} as a starting point, then verify hospital access, English-speaking doctors, and insurance options before committing.`,
    },
    visa: {
      name: 'Retirement / Long-Stay Visa',
      requirements: 'Requirements vary by country and applicant profile.',
      description: `${name} may offer retirement, income-based, investor, or long-stay residency options depending on the applicant. Rules change often, so retirees should verify income requirements, paperwork, renewals, and path-to-residency details before applying.`,
      keyTakeaway: 'Confirm visa requirements directly with official government or consulate sources before making financial plans.',
    },
    tax: {
      description: `Tax treatment in ${name} depends on residency status, income type, tax treaties, and how long you stay in the country each year. US citizens may still have US filing obligations even while living abroad.`,
      keyTakeaway: 'Before moving, speak with a tax professional who understands US expats and local residency rules.',
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
      { slug: 'portugal', flag: '🇵🇹', name: 'Portugal', budgetShort: '$2,500' },
      { slug: 'spain', flag: '🇪🇸', name: 'Spain', budgetShort: '$2,500' },
      { slug: 'greece', flag: '🇬🇷', name: 'Greece', budgetShort: '$2,000' },
    ].filter((item) => item.slug !== slug),
  };
}

const generatedDestinations: Record<string, DestinationDetail> = Object.fromEntries(
  baseDestinations.map((item) => [
    item.slug,
    makeDestination(item.slug, item.rank, item.flag, item.name, item.budget, item.city),
  ])
);

const destinationsData: Record<string, DestinationDetail> = {
  ...generatedDestinations,

  portugal: {
    ...generatedDestinations.portugal,
    id: 'portugal',
    rank: 1,
    flag: '🇵🇹',
    name: 'Portugal',
    ilRank: '#1 International Living 2026',
    ilRankShort: '#1',
    tagline: "Europe's #1 retirement destination · 300+ sunny days · EU citizenship after 5 years",
    budgetShort: '$2,500',
    bestCity: 'Algarve',
    taxRate: '10%',
    qolScore: '9/10',
    heroImage:
      'https://images.pexels.com/photos/1210642/pexels-photo-1210642.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview:
      "Portugal claims the #1 spot in International Living's 2026 Global Retirement Index. With 300+ sunny Algarve days, a clear EU citizenship path after 5 years, world-class SNS public healthcare, and the NHR 2.0 regime offering a 10% flat tax on foreign pensions, Portugal delivers an unmatched mix of safety, culture, and value.",
    cities: ['Algarve', 'Lisbon', 'Porto', 'Silver Coast', 'Cascais', 'Azores'],
    costCouple: '$2,500–$4,000/mo',
    costSingle: '$1,500–$2,500/mo',
    pros: [
      '#1 International Living 2026 — top overall retirement destination',
      'NHR 2.0: 10% flat tax on all foreign-source pensions for 10 years',
      'EU citizenship after just 5 years of legal residency',
      '300+ sunny days in the Algarve · #7 Global Peace Index',
      'World-class SNS public healthcare for legal residents',
      'English widely spoken in Lisbon, Algarve, and Porto',
    ],
    cons: [
      'Lisbon and Porto costs rising rapidly — look inland for value',
      'NHR 2.0 less generous than the original',
      'Portuguese bureaucracy can be slow — plan for delays',
      'Winters in Porto are rainy — Algarve remains the top climate zone',
    ],
    costs: [
      { item: '1BR Apartment Rent', range: '$1,000–$1,800' },
      { item: '2BR Apartment Rent', range: '$1,300–$2,500' },
      { item: 'Groceries & Food', range: '$300–$450' },
      { item: 'Dining Out', range: '$200–$400' },
      { item: 'Utilities', range: '$120–$180' },
      { item: 'Transportation', range: '$80–$150' },
      { item: 'Healthcare (private)', range: '$100–$200' },
      { item: 'Entertainment', range: '$150–$250' },
    ],
    healthcare: {
      description:
        "Portugal's SNS healthcare system is widely used by legal residents. Private insurance can also provide faster access to English-speaking specialists.",
      keyTakeaway:
        'EU-standard public healthcare for residents plus strong private care options in major retirement areas.',
    },
    visa: {
      name: 'D7 Passive Income Visa',
      requirements: 'Minimum income requirements apply. Social Security may qualify.',
      description:
        'The D7 visa is designed for retirees and passive-income applicants. It can lead to long-term residency and potential citizenship after meeting residency requirements.',
      keyTakeaway:
        'One of Europe’s most accessible retirement visa paths for Americans with stable passive income.',
    },
    tax: {
      description:
        "Portugal's tax treatment depends on residency status, income source, and applicable treaties. Retirees should review NHR 2.0 and US filing obligations before relocating.",
      keyTakeaway:
        'Portugal can be tax-efficient, but retirees should confirm details with a qualified cross-border tax advisor.',
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
      { slug: 'spain', flag: '🇪🇸', name: 'Spain', budgetShort: '$2,500' },
      { slug: 'greece', flag: '🇬🇷', name: 'Greece', budgetShort: '$2,000' },
      { slug: 'portugal-azores', flag: '🇵🇹', name: 'Portugal — Azores', budgetShort: '$1,800' },
    ],
  },
};

function readDestinationJson(): Record<string, DestinationDetail> {
  if (!fs.existsSync(destinationsFile)) return {};

  try {
    const fileContents = fs.readFileSync(destinationsFile, 'utf8');
    return JSON.parse(fileContents) as Record<string, DestinationDetail>;
  } catch {
    return {};
  }
}

export async function getAllDestinationSlugs(): Promise<string[]> {
  const fileData = readDestinationJson();
  return Array.from(new Set([...Object.keys(destinationsData), ...Object.keys(fileData)]));
}

export async function getDestinationBySlug(slug: string): Promise<DestinationDetail | null> {
  const fileData = readDestinationJson();
  return fileData[slug] ?? destinationsData[slug] ?? null;
}
