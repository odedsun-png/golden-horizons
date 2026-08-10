import type { Metadata } from "next";
import Link from "next/link";
import { getCountryById } from "@/lib/countries";
import { getMagazineMasthead } from "@/lib/masthead";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/best-countries-to-retire-abroad-on-a-budget`;

// Revalidate hourly so the masthead's Month/Issue advances automatically
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Best Countries to Retire Abroad on a Budget (2026)",
  description:
    "Compare the most affordable countries for American retirees in 2026. Real monthly cost breakdowns, visa notes, healthcare scores, and honest tradeoffs — from Golden Horizons.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Best Countries to Retire Abroad on a Budget (2026)",
    description:
      "Practical cost comparisons for Americans planning retirement abroad. Monthly budgets, healthcare scores, and visa notes for the most affordable destinations.",
    images: [
      {
        url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Affordable retirement abroad destinations for Americans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Countries to Retire Abroad on a Budget (2026)",
    description:
      "Monthly cost breakdowns for the most affordable retirement destinations for Americans.",
    images: [
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqs = [
  {
    q: "Which country is the cheapest for American retirees in 2026?",
    a: "Based on Golden Horizons cost data, Argentina and Vietnam currently offer the lowest all-in monthly budgets for American retirees — often under $1,000 a month for a single person including rent, food, and basic healthcare. That said, Argentina carries currency risk and Vietnam has visa limitations for long-term stays. Always verify current conditions before committing.",
  },
  {
    q: "Can an American retiree live abroad on $1,500 a month?",
    a: "Yes, in several countries. Thailand, Malaysia, Ecuador, Colombia, and parts of Mexico all have estimated monthly budgets well under $1,500 for a modest but comfortable lifestyle. The figure covers rent, food, utilities, local transport, and basic healthcare. Travel back to the US, entertainment, and unexpected costs are not included.",
  },
  {
    q: "Does Medicare pay for medical care outside the United States?",
    a: "In almost all cases, no. Original Medicare (Parts A and B) does not cover care received outside the United States. Some Medicare Advantage plans offer limited emergency coverage abroad, but routine care is not covered. American retirees living abroad typically purchase local private health insurance or international health plans. Verify your specific plan details with Medicare directly.",
  },
  {
    q: "Which affordable retirement countries use the US dollar?",
    a: "Panama and Ecuador officially use the US dollar as their currency. This eliminates exchange rate risk entirely. Belize pegs its dollar to the US dollar at a fixed 2:1 rate. Colombia, Vietnam, Thailand, and Malaysia use local currencies, which can be an advantage when the dollar is strong but carries risk if it weakens.",
  },
  {
    q: "What is the most affordable country in Europe for American retirees?",
    a: "Among the countries in Golden Horizons' ranking, Portugal's Azores region and mainland Portugal offer the most affordable European base. Estimated monthly costs in the Azores run around $1,260 — significantly lower than mainland Portugal's $1,750 estimate, while offering the same D7 visa and EU residency path. Albania (covered in Golden Horizons articles) offers even lower costs but with fewer amenities.",
  },
];

export default function BudgetRetirementPage() {
  const masthead = getMagazineMasthead();
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
    name: "Best Countries to Retire Abroad on a Budget (2026)",
    description:
      "Compare the most affordable countries for American retirees with real monthly cost breakdowns, visa notes, and healthcare scores.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "Golden Horizons Editorial Team",
      url: siteUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Golden Horizons", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Planning Guides", item: `${siteUrl}/#planning-guides` },
      { "@type": "ListItem", position: 3, name: "Best Countries to Retire Abroad on a Budget", item: canonicalUrl },
    ],
  };

  return (
    <main className="mag-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="site">
        <div className="topbar">
          <span>{masthead.volumeLabel}</span>
          <span className="hide-mob">golden-horizons.org · The Retirement Abroad Magazine</span>
          <span>{masthead.monthYear}</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">For Americans Who Are Ready for What&rsquo;s Next</span>
            <span>{masthead.issueLine}</span>
          </div>
          <Link href="/" className="mastname">Golden Horizons</Link>
          <div className="issue-line">
            <span className="issue-tag"><strong>Planning Guide:</strong> Budget Retirement Abroad</span>
            <span className="issue-tag"><strong>Section:</strong> The Money Page</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food">Food</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Best Countries to Retire Abroad on a Budget</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Money Page · Planning Guide</div>

            <h1 className="art-headline">Best Countries to Retire Abroad on a Budget</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Budget Guide</span>
            </div>

            <p className="art-intro">
              For Americans living on Social Security, a pension, or a modest retirement account, the math of retirement abroad
              can be surprisingly freeing. In the right countries, $1,500 to $2,000 a month covers a real apartment, fresh food,
              decent local healthcare, and enough left over for a life that feels like a reward — not a compromise.
              This guide uses Golden Horizons cost data to show you what is actually achievable and where.
            </p>

            <div style={{ background: "#f0e8d0", border: "2px solid #c9a84c", padding: "18px 22px", marginBottom: 24, borderRadius: 2 }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#8b6914", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>The Short Answer</div>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 17, color: "#1a0f00", lineHeight: 1.65, marginBottom: 8 }}>
                <strong>Which countries are best for retiring abroad on a budget?</strong> Based on Golden Horizons cost data, the top picks for American retirees in 2026 are:
              </p>
              <ul style={{ fontFamily: "EB Garamond, serif", fontSize: 17, color: "#2b1a00", lineHeight: 1.7, paddingLeft: 22, margin: "0 0 10px" }}>
                <li><strong>Thailand (~$940/mo)</strong> — low cost, strong private hospitals, flexible visa options</li>
                <li><strong>Malaysia (~$960/mo)</strong> — English widely spoken, MM2H retirement visa, modern healthcare</li>
                <li><strong>Ecuador (~$1,010/mo)</strong> — uses the US dollar, straightforward residency, popular expat city Cuenca</li>
                <li><strong>Colombia (~$1,070/mo)</strong> — improving safety, modern healthcare in Medellín, pension visa pathway</li>
                <li><strong>Mexico (~$1,160/mo)</strong> — close to the US, large expat communities, varied climate options</li>
              </ul>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 15, color: "#6b5d47", fontStyle: "italic", margin: 0 }}>
                Estimates cover rent, food, utilities, local transport, and basic healthcare for a single retiree. Costs vary by city and lifestyle. Always verify current conditions before making decisions.
              </p>
            </div>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Eight countries in the Golden Horizons index have estimated monthly budgets under $1,200 for a single retiree.
                  Thailand comes in around $940/month. Ecuador near $1,010. Colombia near $1,070. All three have English-speaking
                  expat communities, acceptable healthcare access, and visa options for Americans. None are perfect — but they
                  are genuinely affordable.
                </div>
              </div>
            </div>

            <div className="section-hdr">Monthly Cost Comparison</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              The figures below come from Golden Horizons destination data. They represent estimated all-in monthly budgets
              for a single retiree living modestly but comfortably — including rent for a one-bedroom apartment, groceries,
              utilities, local transport, basic healthcare, and modest entertainment. They do not include flights back to the US,
              alcohol, private school, or significant travel. Costs vary significantly by city, neighborhood, and lifestyle.
              Always verify current figures before making any decision.
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 28, fontFamily: "EB Garamond, serif" }}>
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Country</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Est. Monthly Budget</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Healthcare Score</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Safety Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Argentina", slug: "argentina", flag: "🇦🇷", cost: 750, healthcare: "4/5", safety: "3/5" },
                  { name: "Vietnam", slug: "vietnam", flag: "🇻🇳", cost: 805, healthcare: "3/5", safety: "4/5" },
                  { name: "Thailand", slug: "thailand", flag: "🇹🇭", cost: 940, healthcare: "4/5", safety: "4/5" },
                  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", cost: 960, healthcare: "4/5", safety: "4/5" },
                  { name: "Ecuador", slug: "ecuador", flag: "🇪🇨", cost: 1010, healthcare: "3/5", safety: "3/5" },
                  { name: "Colombia", slug: "colombia", flag: "🇨🇴", cost: 1070, healthcare: "4/5", safety: "3/5" },
                  { name: "Mexico", slug: "mexico", flag: "🇲🇽", cost: 1160, healthcare: "4/5", safety: "3/5" },
                  { name: "Panama", slug: "panama", flag: "🇵🇦", cost: 1340, healthcare: "4/5", safety: "3/5" },
                ].map((row, i) => (
                  <tr key={row.slug} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8", borderBottom: "1px solid #e0cc99" }}>
                    <td style={{ padding: "10px 12px", fontSize: 17, color: "#2b1a00" }}>
                      <Link href={`/destinations/${row.slug}`} style={{ color: "#8b6914", textDecoration: "underline" }}>
                        {row.flag} {row.name}
                      </Link>
                    </td>
                    <td style={{ padding: "10px 12px", fontSize: 17, textAlign: "right", fontWeight: "bold", color: "#1e1408" }}>
                      ~${row.cost.toLocaleString()}/mo
                    </td>
                    <td style={{ padding: "10px 12px", fontSize: 15, textAlign: "center", color: "#5a4010" }}>{row.healthcare}</td>
                    <td style={{ padding: "10px 12px", fontSize: 15, textAlign: "center", color: "#5a4010" }}>{row.safety}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="art-article-body" style={{ marginBottom: 20, fontSize: 14, fontStyle: "italic", color: "#6b5d47" }}>
              Scores are on a 1–5 scale from Golden Horizons destination rankings. Healthcare and safety scores reflect
              general conditions for expat retirees and should not be treated as guarantees. Verify current conditions
              with recent expat reports and official sources.
            </p>

            <div className="section-hdr">Best For — and Not Best For</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              <div style={{ background: "#f0f5e8", border: "1px solid #8aab5a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#3d6b1f", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Best For</div>
                {[
                  "Retirees living primarily on Social Security",
                  "Couples or singles open to a simpler lifestyle",
                  "Those comfortable using local healthcare for routine care",
                  "Americans who want to stretch a modest nest egg further",
                  "People willing to spend a month visiting before committing",
                  "Those open to learning the basics of a new culture",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✓ {item}</div>
                ))}
              </div>
              <div style={{ background: "#faf0f0", border: "1px solid #c47a7a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#8b2020", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Not Best For</div>
                {[
                  "Those who need specialist medical care close by",
                  "Retirees who plan to return to the US frequently",
                  "People unwilling to navigate foreign bureaucracy",
                  "Those with active caregiving responsibilities at home",
                  "Anyone relying on Medicare abroad without checking coverage limits",
                  "Retirees who prefer stability over affordability",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✗ {item}</div>
                ))}
              </div>
            </div>

            <div className="section-hdr">What $1,500 a Month Actually Gets You</div>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              In Thailand, $1,500 a month covers a furnished apartment in Chiang Mai, daily meals at local restaurants and
              markets, a motorbike or rideshare for transport, and access to{" "}
              <Link href="/healthcare-abroad-for-american-retirees" style={{ color: "#8b6914" }}>private hospitals</Link>{" "}
              that can be considerably cheaper than comparable care in the United States. You would have money left over.
            </p>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              In Ecuador, $1,500 covers a one-bedroom in Cuenca&rsquo;s historic center, groceries, utilities, and a gym membership.
              Ecuador uses the US dollar, so there is no exchange rate risk. Healthcare quality in major cities is decent,
              though rural areas are more limited. The <Link href="/visa-rules-for-americans-retiring-abroad" style={{ color: "#8b6914" }}>residency path</Link> is relatively straightforward.
            </p>

            <p className="art-article-body" style={{ marginBottom: 20 }}>
              In Colombia&rsquo;s Medellín, $1,500 buys a comfortable apartment in a good neighborhood, full-time internet,
              local transport, and regular dining out. Healthcare in Medellín is surprisingly modern.{" "}
              <Link href="/safest-countries-to-retire-abroad" style={{ color: "#8b6914" }}>Safety</Link> has improved
              significantly — though research neighborhoods carefully and stay in touch with current expat communities.
            </p>

            <div className="section-hdr">Budget Retirement Checklist</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Calculate your actual monthly spending now",
                "Get your Social Security benefit estimate",
                "Check if Medicare covers care abroad (it largely doesn&apos;t)",
                "Research at least 2–3 countries before narrowing down",
                "Visit your top choice for at least 4 weeks first",
                "Open a no-fee international bank account",
                "Meet with a CPA who specializes in <a href='/taxes-for-americans-retiring-overseas' style='color:#8b6914;text-decoration:underline'>US expat taxes</a>",
                "Budget for healthcare separately — don&apos;t guess",
                "Research visa options for your income level",
                "Find local expat forums for your target destination",
                "Get a complete health checkup before leaving",
                "Keep a US mailing address for banking and mail",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#f5edd8",
                    padding: "10px 14px",
                    borderLeft: "3px solid #c9a84c",
                    fontFamily: "EB Garamond, serif",
                    fontSize: 16,
                    color: "#2b1a00",
                    lineHeight: 1.5,
                  }}
                  dangerouslySetInnerHTML={{ __html: `✓ ${item}` }}
                />
              ))}
            </div>

            <div className="section-hdr">Common Mistakes to Avoid</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Picking based on cost alone.</strong> A country that costs $800 a month is not a good deal
              if the nearest hospital is two hours away and the visa requires leaving every 30 days.{" "}
              <Link href="/healthcare-abroad-for-american-retirees" style={{ color: "#8b6914" }}>Healthcare quality</Link>{" "}
              and <Link href="/visa-rules-for-americans-retiring-abroad" style={{ color: "#8b6914" }}>visa stability</Link>{" "}
              matter as much as price, especially as you get older.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Assuming Social Security will be enough.</strong> Even in cheap countries, unexpected costs happen.
              Medical emergencies, home repairs, flights back to the US, and family needs do not disappear because
              you moved abroad. Build a cash buffer of at least 3–6 months of expenses before you go.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Ignoring currency risk.</strong> When the US dollar weakens, your foreign cost of living goes up.
              Countries that use the dollar (Panama, Ecuador) eliminate this risk. Others do not. A 15% currency shift
              can erase the affordability you planned for.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Only visiting as a tourist.</strong> A two-week vacation gives you a tourist&rsquo;s view of a place.
              Living there means dealing with bureaucracy, bad days, healthcare appointments, and ordinary weeks.
              Stay for a full month or longer in any destination you&rsquo;re seriously considering.
            </p>

            <div style={{ background: "#1e1408", padding: "20px 24px", marginBottom: 28, textAlign: "center" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 15, fontWeight: 700, color: "#c9a84c", letterSpacing: "1px", marginBottom: 8 }}>
                Every morning, one story like this — free.
              </div>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#f5edd8", lineHeight: 1.6, marginBottom: 14 }}>
                Golden Horizons delivers calm, practical retirement-abroad guidance to your inbox each morning. No noise. No pressure.
              </p>
              <Link href="/subscribe" className="mag-btn" style={{ display: "inline-block" }}>
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
                { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad for American Retirees" },
                { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules for Americans Retiring Abroad" },
                { href: "/taxes-for-americans-retiring-overseas", label: "Taxes for Americans Retiring Overseas" },
                { href: "/safest-countries-to-retire-abroad", label: "Safest Countries to Retire Abroad" },
                { href: "/retiring-abroad-checklist-for-americans", label: "Retiring Abroad Checklist for Americans" },
                { href: "/destinations", label: "Browse All Destination Profiles" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    background: "#faf5e9",
                    border: "1px solid #c9a84c",
                    padding: "12px 14px",
                    textDecoration: "none",
                    fontFamily: "EB Garamond, serif",
                    fontSize: 16,
                    color: "#8b6914",
                    lineHeight: 1.4,
                  }}
                >
                  → {link.label}
                </Link>
              ))}
            </div>

            <div className="disclaimer">
              The cost estimates in this guide come from Golden Horizons destination data and represent general reference
              points only. Actual costs vary significantly based on city, neighborhood, lifestyle, and current exchange rates.
              Visa rules, healthcare policies, and tax laws change. Always verify current requirements with official government
              sources. Consult a licensed immigration attorney and a US-qualified CPA before making relocation decisions.
              Golden Horizons does not provide legal, financial, or medical advice.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;The question is never just what a place costs. It&rsquo;s what it costs you not to go.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Top Budget Destinations</div>

            {[
              { href: "/destinations/vietnam", slug: "vietnam", flag: "🇻🇳", name: "Vietnam", note: "From ~$805/mo" },
              { href: "/destinations/thailand", slug: "thailand", flag: "🇹🇭", name: "Thailand", note: "From ~$940/mo" },
              { href: "/destinations/malaysia", slug: "malaysia", flag: "🇲🇾", name: "Malaysia", note: "From ~$960/mo" },
              { href: "/destinations/ecuador", slug: "ecuador", flag: "🇪🇨", name: "Ecuador", note: "From ~$1,010/mo" },
              { href: "/destinations/colombia", slug: "colombia", flag: "🇨🇴", name: "Colombia", note: "From ~$1,070/mo" },
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
              { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad" },
              { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules" },
              { href: "/taxes-for-americans-retiring-overseas", label: "Taxes Overseas" },
              { href: "/safest-countries-to-retire-abroad", label: "Safest Countries" },
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
