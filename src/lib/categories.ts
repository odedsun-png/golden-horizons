export type ArticleLike = {
  title?: string;
  slug?: string;
  category?: string;
};

/**
 * Classifies an article into a display category for the Articles page.
 * Checks title, slug, and frontmatter category using keyword rules.
 * Priority order matches the spec: Healthcare > Visa > Tax > Finance >
 * Safety > Real Estate > Cost > Comparison > Beach > Food Culture >
 * Hidden Gems > Expat Life > Logistics > LGBTQ > Solo > original category.
 */
export function getDisplayCategory(article: ArticleLike): string {
  const raw = [article.title || '', article.slug || '', article.category || '']
    .join(' ')
    .toLowerCase()
    .replace(/-/g, ' '); // treat hyphens as spaces so slug words match

  const has = (pattern: RegExp) => pattern.test(raw);

  if (has(/healthcare|health care|\bhospitals?\b|\bclinics?\b|\bmedical\b|\binsurance\b|nhi system|private hospital/))
    return 'Healthcare';

  if (has(/\bvisas?\b|\bresidency\b|\bresidence\b|\bpensionado\b/))
    return 'Visa';

  if (has(/\btaxes?\b|tax treaties|tax incentives/))
    return 'Tax';

  if (has(/\bfinance\b|\bassets\b|currency fluctuation|\bbanks?\b|protect your assets/))
    return 'Finance';

  if (has(/\bsafety\b|\bsafest\b|\bscams?\b|\bcrime\b|neighborhoods for retirees/))
    return 'Safety';

  if (has(/buying property|real estate|\brenting\b|\bvillas?\b|\bleasehold\b|\bhousing\b|\bforeigner/))
    return 'Real Estate';

  if (has(/cost of living|monthly budget|what \$|what \d|a month gets you|gets you in/))
    return 'Cost';

  if (has(/\bvs\b|\bversus\b|best cities|\bcompare\b|\bcomparison\b|city comparison/))
    return 'Comparison';

  if (has(/\bbeaches?\b|\boceanfront\b|\bcoastal\b|\bcoast\b|\briviera\b|\bislands?\b|\bseaside\b|\bwaterfront\b|\bbay\b|pacific coast|atlantic coast|adriatic coast/))
    return 'Beach';

  if (has(/\bfoods?\b|\bmarkets?\b|cafe|café|\bwine\b|\bseafood\b|\bcooking\b|\bkitchen\b|\btapas\b|\bbazaars?\b|\bfestivals?\b|\bbread\b|\bcheese\b|\bpasta\b|olive oil|street soups|\bherbs?\b|coffee culture|daily culture|la dolce vita|pura vida|slow living|\btavern\b|\bcuisine\b/))
    return 'Food Culture';

  if (has(/\bhidden\b|\bvillages?\b|\btown(s)?\b|beyond the tourist|mountain towns|colonial towns|spa towns/))
    return 'Hidden Gems';

  if (has(/expat life|daily life|normal week|living in|local life/))
    return 'Expat Life';

  if (has(/\blogistics\b|mail forwarding|\butilities\b|emergency medical evacuation|moving abroad|\bchecklist\b|transition plan/))
    return 'Logistics';

  if (has(/lgbtq/))
    return 'LGBTQ';

  if (has(/\bsolo\b|single retirees|\balone\b|\bdating\b|\bromance\b/))
    return 'Solo';

  return article.category?.trim() || 'Uncategorized';
}
