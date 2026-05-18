import type { Metadata } from "next";
import Link from "next/link";
import { getCountryById } from "@/lib/countries";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/safest-countries-to-retire-abroad`;

export const metadata: Metadata = {
  title: "Safest Countries to Retire Abroad for Americans (2026)",
  description:
    "Which countries are safest for American retirees in 2026? Safety scores, practical context, and what safety actually means day-to-day for retirees abroad — from Golden Horizons.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Safest Countries to Retire Abroad for Americans (2026)",
    description:
      "Safety scores, real-world context, and what to look for — a practical guide to the safest retirement destinations for Americans abroad.",
    images: [
      {
        url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Safest countries to retire abroad for Americans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safest Countries to Retire Abroad for Americans (2026)",
    description: "Safety scores and practical context for American retirees comparing destinations abroad.",
    images: ["https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const faqs = [
  {
    q: "Which countries are safest for American retirees abroad?",
    a: "In Golden Horizons' destination rankings, Portugal, Spain, New Zealand, and Malta each score 5/5 for safety — the highest rating in the index. Costa Rica, Thailand, Malaysia, Greece, Vietnam, Italy, and France each score 4/5. Safety scores reflect general conditions for expat retirees and represent Golden Horizons' editorial assessment rather than official crime statistics. Always verify current safety conditions through the US State Department travel advisories at travel.state.gov.",
  },
  {
    q: "Is it safe for Americans to retire in Latin America?",
    a: "Parts of Latin America are considered quite safe for American retirees; others are not. Costa Rica and Panama are among the most popular retirement destinations in the region and are generally considered safe, particularly in areas with established expat communities. Mexico varies significantly by region — some areas are very safe for retirees; others are not. Colombia's safety picture has improved significantly in major cities like Medellín, but risks remain and neighborhood-level research is essential. Ecuador falls in a middle range. Check US State Department advisories for specific countries and regions before planning.",
  },
  {
    q: "How do I check current safety conditions for a retirement destination?",
    a: "The US State Department publishes country-level travel advisories at travel.state.gov, ranging from Level 1 (Exercise Normal Precautions) to Level 4 (Do Not Travel). These are updated regularly and are the most authoritative US government source. Beyond the overall country rating, advisories often identify specific regions within a country that carry different risk levels. Supplement official advisories with current reports from active expat communities in your specific target city — conditions at the neighborhood level can differ significantly from the national average.",
  },
  {
    q: "What does safety mean day-to-day as a retiree abroad?",
    a: "For retirees, practical safety generally means: low petty theft risk, walkable neighborhoods without significant personal security concerns, a functional emergency response system, political stability, and a local culture that is welcoming to foreigners. Countries with high safety scores tend to have low violent crime rates, stable governments, and established expat communities that make the transition easier. 'Safety' as a single score does not capture neighborhood-level variation — a country with a 5/5 score can still have unsafe areas, and a 3/5 country can have very safe expat neighborhoods.",
  },
  {
    q: "Is the safety situation in a country likely to change?",
    a: "Yes. Safety conditions change over time — sometimes improving, sometimes deteriorating. A country that was considered very safe five years ago may face new political instability today, and vice versa. For this reason, it is important to stay informed throughout your time abroad, not just before you move. Register with the US Embassy (through STEP — the Smart Traveler Enrollment Program at step.state.gov) so you can receive official safety alerts for your country of residence.",
  },
];

export default function SafetyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: "Safest Countries to Retire Abroad for Americans (2026)",
    description: "Safety scores, real-world context, and practical guidance for Americans comparing retirement destinations abroad.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en-US",
    author: { "@type": "Organization", name: "Golden Horizons Editorial Team", url: siteUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Golden Horizons", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Planning Guides", item: `${siteUrl}/#planning-guides` },
      { "@type": "ListItem", position: 3, name: "Safest Countries to Retire Abroad", item: canonicalUrl },
    ],
  };

  return (
    <main className="mag-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="site">
        <div className="topbar">
          <span>Vol. 58, No. 1</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>April 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>April 2026 · Issue 58</span>
          </div>
          <Link href="/" className="mastname">Golden Horizons</Link>
          <div className="issue-line">
            <span className="issue-tag"><strong>Planning Guide:</strong> Safety Abroad</span>
            <span className="issue-tag"><strong>Section:</strong> The Destination Report</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food">Food</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Safest Countries to Retire Abroad</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Destination Report · Planning Guide</div>

            <h1 className="art-headline">Safest Countries to Retire Abroad for Americans</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Safety Guide</span>
            </div>

            <p className="art-intro">
              Safety is one of the most common questions American retirees ask about moving abroad — and one of the most
              misunderstood. A national safety score does not tell you whether the specific neighborhood you are considering
              is comfortable to walk at night. This guide covers which countries score highest on the Golden Horizons safety
              index, what those scores mean in practice, and what tools you should use to verify current conditions.
            </p>

            <div style={{ background: "#fdf8ec", border: "1px solid #c9a84c", borderLeft: "4px solid #c9a84c", padding: "14px 18px", marginBottom: 20 }}>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 15, color: "#5a4010", fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>
                <strong style={{ fontStyle: "normal" }}>General information only.</strong> Safety scores in this guide represent Golden Horizons&rsquo; editorial assessment of general conditions for expat retirees — they are not official crime statistics or government rankings. Conditions vary significantly within countries, cities, and neighborhoods and can change at any time. Always verify current safety conditions through the US State Department at travel.state.gov before making any relocation decisions.
              </p>
            </div>

            <div style={{ background: "#1e1408", padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 15, fontWeight: 700, color: "#c9a84c", letterSpacing: "1px", marginBottom: 12 }}>
                Which countries score highest in Golden Horizons&rsquo; editorial safety index?
              </div>
              {[
                "Portugal, Spain, New Zealand, Malta, and the Azores each score 5/5 — the highest editorial safety rating",
                "Costa Rica, Thailand, Malaysia, Greece, Vietnam, Italy, and France each score 4/5 — also widely popular with American retirees",
                "Scores reflect Golden Horizons’ editorial assessment of general expat conditions, not official crime statistics",
                "Safety can vary significantly at the neighborhood level — a national score is a starting point, not a guarantee",
                "Always verify current conditions through the US State Department at travel.state.gov before making any decisions",
              ].map((item) => (
                <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#f5edd8", lineHeight: 1.6, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#c9a84c" }}>◆</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Portugal, Spain, New Zealand, and Malta all score 5/5 for safety in Golden Horizons&rsquo; destination index.
                  For retirees who prioritize a very calm daily environment, these four offer the highest confidence level.
                  Costa Rica, Thailand, Malaysia, and Greece score 4/5 and are also popular with American retirees.
                  Always check the US State Department travel advisory for any country you are seriously considering — at
                  travel.state.gov. Safety conditions change.
                </div>
              </div>
            </div>

            <div className="section-hdr">Safety Scores by Destination</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              The following scores are from Golden Horizons&rsquo; editorial ranking of destinations for American retirees.
              Scores are on a 1–5 scale and reflect general conditions for expat retirees based on our editorial assessment.
              They are not official crime statistics. Conditions vary significantly within countries and change over time.
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 28, fontFamily: "EB Garamond, serif" }}>
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Country</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Safety Score</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Overall Rank</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Est. Monthly Budget</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Portugal", slug: "portugal", flag: "🇵🇹", safety: "5/5 — Excellent", rank: "#1", cost: "~$1,750/mo" },
                  { name: "Spain", slug: "spain", flag: "🇪🇸", safety: "5/5 — Excellent", rank: "#4", cost: "~$1,870/mo" },
                  { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿", safety: "5/5 — Excellent", rank: "#14", cost: "~$2,460/mo" },
                  { name: "Malta", slug: "malta", flag: "🇲🇹", safety: "5/5 — Excellent", rank: "#16", cost: "~$1,620/mo" },
                  { name: "Portugal — Azores", slug: "portugal-azores", flag: "🇵🇹", safety: "5/5 — Excellent", rank: "#15", cost: "~$1,260/mo" },
                  { name: "Costa Rica", slug: "costa-rica", flag: "🇨🇷", safety: "4/5 — Very Good", rank: "#3", cost: "~$1,610/mo" },
                  { name: "Thailand", slug: "thailand", flag: "🇹🇭", safety: "4/5 — Very Good", rank: "#6", cost: "~$940/mo" },
                  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", safety: "4/5 — Very Good", rank: "#8", cost: "~$960/mo" },
                  { name: "Greece", slug: "greece", flag: "🇬🇷", safety: "4/5 — Very Good", rank: "#9", cost: "~$1,340/mo" },
                  { name: "Vietnam", slug: "vietnam", flag: "🇻🇳", safety: "4/5 — Very Good", rank: "#11", cost: "~$805/mo" },
                  { name: "Italy", slug: "italy", flag: "🇮🇹", safety: "4/5 — Very Good", rank: "#12", cost: "~$1,710/mo" },
                  { name: "France", slug: "france", flag: "🇫🇷", safety: "4/5 — Very Good", rank: "#13", cost: "~$2,120/mo" },
                ].map((row, i) => (
                  <tr key={row.slug} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8", borderBottom: "1px solid #e0cc99" }}>
                    <td style={{ padding: "10px 12px", fontSize: 17, color: "#2b1a00" }}>
                      <Link href={`/destinations/${row.slug}`} style={{ color: "#8b6914", textDecoration: "underline" }}>
                        {row.flag} {row.name}
                      </Link>
                    </td>
                    <td style={{ padding: "10px 12px", fontSize: 15, textAlign: "center", color: "#5a4010" }}>{row.safety}</td>
                    <td style={{ padding: "10px 12px", fontSize: 15, textAlign: "center", color: "#5a4010" }}>{row.rank}</td>
                    <td style={{ padding: "10px 12px", fontSize: 15, color: "#1e1408", fontWeight: "bold" }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="art-article-body" style={{ marginBottom: 12, fontSize: 16, fontStyle: "italic", color: "#5a4010" }}>
              The groupings below summarize Golden Horizons&rsquo; editorial safety tiers. These are planning-level categories, not official government ratings. Scores represent general conditions for expat retirees and do not reflect every neighborhood or every period of time.
            </p>

            <div style={{ overflowX: "auto", marginBottom: 28 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "EB Garamond, serif", fontSize: 16 }}>
                <thead>
                  <tr style={{ background: "#1e1408" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "#c9a84c", fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", borderRight: "1px solid #3a2a10" }}>Safety Tier</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "#c9a84c", fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", borderRight: "1px solid #3a2a10" }}>Countries (from index)</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "#c9a84c", fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tier: "Excellent (5/5)", countries: "Portugal, Spain, New Zealand, Malta, Azores", notes: "Generally calm for expat retirees in typical residential areas; costs vary significantly by destination" },
                    { tier: "Very Good (4/5)", countries: "Costa Rica, Thailand, Malaysia, Greece, Vietnam, Italy, France", notes: "Often viewed as comfortable by many expat retirees; neighborhood-level research still important before committing" },
                    { tier: "Research Carefully", countries: "Other destinations", notes: "Country-level scores can mask significant local variation — always research specific cities and neighborhoods" },
                  ].map((row, i) => (
                    <tr key={row.tier} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8" }}>
                      <td style={{ padding: "10px 14px", color: "#2b1a00", fontWeight: 600, borderRight: "1px solid #e0cc99", verticalAlign: "top", whiteSpace: "nowrap" }}>{row.tier}</td>
                      <td style={{ padding: "10px 14px", color: "#8b6914", borderRight: "1px solid #e0cc99", verticalAlign: "top" }}>{row.countries}</td>
                      <td style={{ padding: "10px 14px", color: "#2b1a00", verticalAlign: "top" }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="section-hdr">What Safety Means at the Neighborhood Level</div>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              A 5/5 national safety score does not mean every street in every city is comfortable to walk at midnight.
              Portugal&rsquo;s Lisbon, for example, scores very high overall — but like any city, it has neighborhoods
              with higher petty theft risk, particularly in high-tourist areas. The score reflects the general experience
              for retirees living in typical residential areas.
            </p>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              When evaluating safety, consider your specific lifestyle. A retiree who prefers quiet beach towns in
              Thailand faces a very different day-to-day reality than someone living in a large Thai city. A retiree
              in a well-established expat neighborhood of Colombia&rsquo;s Medellín (safety score 3/5 nationally) may
              feel as safe as someone in a small Portuguese town.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              Golden Horizons&rsquo; safety scores should be treated as a starting point — not a final judgment.
              Spend time in expat forums specific to your target city. Ask people who live there now, not people
              who visited as tourists three years ago.
            </p>

            <div className="section-hdr">Safety Checklist for Retirees Abroad</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Check the US State Department travel advisory for your destination",
                "Register with the Smart Traveler Enrollment Program (STEP) at step.state.gov",
                "Research specific neighborhoods — not just the country or city overall",
                "Join local expat Facebook groups and ask about day-to-day safety",
                "Visit for at least 4 weeks before committing to any location",
                "Learn basic phrases in the local language including emergency requests",
                "Know the local emergency number (not 911 in most countries)",
                "Locate the nearest US Embassy or Consulate",
                "Store emergency contacts and documents in the cloud",
                "Avoid displaying expensive jewelry, watches, or electronics in public",
                "Understand local scams that target expats and tourists",
                "Tell trusted people at home your itinerary and how to reach you",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <p className="art-article-body" style={{ marginBottom: 24, fontSize: 16 }}>
              Safety is one piece of a larger planning process. For a full step-by-step relocation guide, see our{" "}
              <Link href="/retiring-abroad-checklist-for-americans" style={{ color: "#8b6914" }}>Retiring Abroad Checklist for Americans</Link>.
              For an overview of visa and residency options by destination, see our{" "}
              <Link href="/visa-rules-for-americans-retiring-abroad" style={{ color: "#8b6914" }}>Visa Rules for Americans Retiring Abroad</Link> guide.
            </p>

            <div className="section-hdr">Common Safety Mistakes Abroad</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Relying on a country&rsquo;s tourism reputation for safety information.</strong>
              A country can be heavily marketed to tourists while carrying real risks for long-term residents.
              Tourist-area safety differs from residential-area safety. Research what daily life is like for people
              who actually live there — not what it looks like on a vacation.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Not checking for recent political instability.</strong> Countries change. A destination
              that was stable and peaceful several years ago may be dealing with new political tensions today.
              The US State Department travel advisories are updated regularly — check them before every trip
              home and back.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Choosing a location based on cost and ignoring the safety tradeoff.</strong>
              The cheapest countries are not always the safest. Vietnam and Argentina are affordable and
              score 4/5 and 3/5 respectively for safety — but conditions in major cities differ considerably.
              A meaningful cost premium may be worth it for meaningfully better safety.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Not registering with the US Embassy.</strong> The STEP program (Smart Traveler Enrollment
              Program) at step.state.gov is free and takes five minutes. It allows the US government to reach you
              in case of an emergency or evacuation and provides you with current security alerts for your country
              of residence.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24, fontSize: 16 }}>
              For a breakdown of estimated monthly costs by destination, see our{" "}
              <Link href="/best-countries-to-retire-abroad-on-a-budget" style={{ color: "#8b6914" }}>Best Countries to Retire Abroad on a Budget</Link> guide.
              For healthcare planning considerations, see our{" "}
              <Link href="/healthcare-abroad-for-american-retirees" style={{ color: "#8b6914" }}>Healthcare Abroad for American Retirees</Link> guide.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              <div style={{ background: "#f0f5e8", border: "1px solid #8aab5a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#3d6b1f", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Best For</div>
                {[
                  "Retirees for whom day-to-day calm and walkability are top priorities",
                  "Those comfortable with established-destination costs in exchange for higher editorial safety scores",
                  "Retirees willing to do neighborhood-level research before committing to a location",
                  "People who plan to visit for several weeks before relocating",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✓ {item}</div>
                ))}
              </div>
              <div style={{ background: "#faf0f0", border: "1px solid #c47a7a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#8b2020", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Not Best For</div>
                {[
                  "Retirees prioritizing the absolute lowest monthly cost — the highest-scoring safety destinations tend to carry higher price tags",
                  "Anyone making a location decision based solely on a national safety score — neighborhood variation can be significant",
                  "Those seeking a guarantee of safety — no destination can offer that",
                  "Retirees unwilling to monitor current conditions through official travel advisories",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✗ {item}</div>
                ))}
              </div>
            </div>

            <div style={{ background: "#1e1408", padding: "20px 24px", marginBottom: 28, textAlign: "center" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 15, fontWeight: 700, color: "#c9a84c", letterSpacing: "1px", marginBottom: 8 }}>
                Every morning, one story like this — free.
              </div>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#f5edd8", lineHeight: 1.6, marginBottom: 14 }}>
                Golden Horizons delivers calm, practical retirement-abroad guidance to your inbox each morning. No noise. No pressure.
              </p>
              <Link href="/#subscribe" className="mag-btn" style={{ display: "inline-block" }}>
                Start My Free Subscription →
              </Link>
            </div>

            <div className="section-hdr">Frequently Asked Questions</div>

            {faqs.map((faq) => (
              <div key={faq.q} style={{ marginBottom: 22, borderBottom: "1px solid #e0cc99", paddingBottom: 18 }}>
                <p style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 700, color: "#1a0f00", marginBottom: 8, lineHeight: 1.3 }}>
                  {faq.q}
                </p>
                <p style={{ fontFamily: "EB Garamond, serif", fontSize: 18, color: "#2b1a00", lineHeight: 1.75 }}>
                  {faq.a}
                </p>
              </div>
            ))}

            <div className="section-hdr">Related Guides</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                { href: "/best-countries-to-retire-abroad-on-a-budget", label: "Best Countries on a Budget" },
                { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad" },
                { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules for Americans" },
                { href: "/taxes-for-americans-retiring-overseas", label: "Taxes for Americans Overseas" },
                { href: "/retiring-abroad-checklist-for-americans", label: "Full Retiring Abroad Checklist" },
                { href: "/destinations", label: "Browse All Destinations" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", background: "#faf5e9", border: "1px solid #c9a84c", padding: "12px 14px", textDecoration: "none", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#8b6914", lineHeight: 1.4 }}>
                  → {link.label}
                </Link>
              ))}
            </div>

            <div className="disclaimer">
              Safety scores in this guide represent Golden Horizons&rsquo; editorial assessment of general conditions for
              expat retirees and are not official crime statistics. Safety conditions change and vary significantly within
              countries and cities. Always verify current safety conditions through the US State Department at
              travel.state.gov before making any relocation decisions. Register with the Smart Traveler Enrollment
              Program (STEP) at step.state.gov. Golden Horizons does not guarantee any particular level of safety
              in any destination.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;Safety abroad is rarely black and white. The question is not whether a country is safe — it is whether the specific life you plan to live is safe.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/#subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Highest Safety Score Countries</div>

            {[
              { href: "/destinations/portugal", slug: "portugal", flag: "🇵🇹", name: "Portugal", note: "Safety 5/5 · Rank #1" },
              { href: "/destinations/spain", slug: "spain", flag: "🇪🇸", name: "Spain", note: "Safety 5/5 · Rank #4" },
              { href: "/destinations/malta", slug: "malta", flag: "🇲🇹", name: "Malta", note: "Safety 5/5 · English-speaking EU" },
              { href: "/destinations/new-zealand", slug: "new-zealand", flag: "🇳🇿", name: "New Zealand", note: "Safety 5/5 · #2 globally" },
              { href: "/destinations/costa-rica", slug: "costa-rica", flag: "🇨🇷", name: "Costa Rica", note: "Safety 4/5 · Stable democracy" },
            ].map((dest) => {
              const img = getCountryById(dest.slug)?.image;
              return (
                <Link key={dest.href} href={dest.href} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid #e0cc99", textDecoration: "none", alignItems: "center" }}>
                  {img && <img src={img} alt={dest.name} style={{ width: 64, height: 48, objectFit: "cover", flexShrink: 0, borderRadius: 2, border: "1px solid #d4b896" }} />}
                  <div>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: 15, fontWeight: 700, color: "#1a0f00", lineHeight: 1.25 }}>{dest.flag} {dest.name}</div>
                    <div style={{ fontFamily: "EB Garamond, serif", fontSize: 13, color: "#8b6914", fontStyle: "italic" }}>{dest.note}</div>
                  </div>
                </Link>
              );
            })}

            <div className="related-label" style={{ marginTop: 22 }}>Other Planning Guides</div>

            {[
              { href: "/best-countries-to-retire-abroad-on-a-budget", label: "Budget Countries" },
              { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad" },
              { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules" },
              { href: "/taxes-for-americans-retiring-overseas", label: "Taxes Overseas" },
              { href: "/retiring-abroad-checklist-for-americans", label: "Full Checklist" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ display: "block", padding: "8px 0", borderBottom: "1px solid #e0cc99", textDecoration: "none", fontFamily: "EB Garamond, serif", fontSize: 15, color: "#8b6914" }}>
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>The retirement abroad magazine for Americans who aren&rsquo;t done yet.</p>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link><span>|</span>
            <Link href="/terms">Terms of Use</Link><span>|</span>
            <Link href="/disclaimer">Disclaimer</Link><span>|</span>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link><span>|</span>
            <Link href="/editorial-policy">Editorial Policy</Link><span>|</span>
            <Link href="/contact">Contact</Link>
          </div>
          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>© 2026 Golden Horizons — All rights reserved</p>
        </footer>
      </div>
    </main>
  );
}
