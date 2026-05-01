import fs from 'fs';
import path from 'path';

const destinationsFile = path.join(process.cwd(), 'src/data/destinations.json');

const destinationsData: any = {
  'portugal': {
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
    heroImage: 'https://images.pexels.com/photos/1210642/pexels-photo-1210642.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Portugal claims the #1 spot in International Living\'s 2026 Global Retirement Index. With 300+ sunny Algarve days, a clear EU citizenship path after 5 years, world-class SNS public healthcare, and the NHR 2.0 regime offering a 10% flat tax on foreign pensions, Portugal delivers an unmatched mix of safety, culture, and value.',
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
      'NHR 2.0 less generous than the original (10% vs. full exemption)',
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
      description: "Portugal's SNS (Serviço Nacional de Saúde) is ranked among Europe's best and is free for all legal residents. Private insurance costs $100–$200/month and gives fast access to English-speaking specialists.",
      keyTakeaway: 'EU-standard public healthcare free for residents plus excellent affordable private care. Strong English-speaking medical access throughout the Algarve.',
    },
    visa: {
      name: 'D7 Passive Income Visa',
      requirements: 'Minimum income: ~$1,400/month · Social Security accepted ✓',
      description: 'The D7 requires ~$1,400/month in passive income (pensions, Social Security, investments). It leads to a 2-year permit, renewable for 3-year periods. After 5 years you qualify for permanent residency and EU citizenship.',
      keyTakeaway: "One of Europe's most accessible retirement visas. Social Security counts as qualifying income and the 5-year EU citizenship path is unmatched globally.",
    },
    tax: {
      description: 'NHR 2.0 offers new residents a 10% flat tax on foreign pension income for 10 years — far below Portugal\'s standard rates (up to 48%). The US-Portugal tax treaty and totalization agreement prevent double taxation on Social Security income.',
      keyTakeaway: "NHR 2.0 is one of Europe's best retiree tax regimes. A 10% flat rate plus a US treaty makes Portugal highly tax-efficient compared to France or Spain.",
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

export async function getAllDestinationSlugs() {
  if (fs.existsSync(destinationsFile)) {
    const fileContents = fs.readFileSync(destinationsFile, 'utf8');
    const data = JSON.parse(fileContents);
    return Object.keys(data);
  }
  return Object.keys(destinationsData);
}

export async function getDestinationBySlug(slug: string) {
  if (fs.existsSync(destinationsFile)) {
    const fileContents = fs.readFileSync(destinationsFile, 'utf8');
    const data = JSON.parse(fileContents);
    return data[slug] || null;
  }
  return destinationsData[slug] || null;
}
