import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/healthcare-abroad-for-american-retirees`;

export const metadata: Metadata = {
  title: "Healthcare Abroad for American Retirees (2026 Guide) | Golden Horizons",
  description:
    "What American retirees need to know about healthcare abroad: Medicare overseas, private insurance options, top healthcare countries, and how to find English-speaking doctors.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Healthcare Abroad for American Retirees (2026 Guide)",
    description:
      "Medicare abroad, private insurance, top healthcare countries, and practical guidance for American retirees planning healthcare overseas.",
    images: [
      {
        url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Healthcare abroad for American retirees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Abroad for American Retirees (2026 Guide)",
    description:
      "Medicare overseas, private insurance options, and the best countries for healthcare quality — a practical guide for American retirees.",
    images: [
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const faqs = [
  {
    q: "Does Medicare cover healthcare outside the United States?",
    a: "In almost all cases, no. Original Medicare (Parts A and B) does not pay for care received outside the US, its territories, or its possessions. There are a few narrow exceptions — for example, if you are on a ship within US territorial waters or in a US hospital — but these rarely apply to daily retiree life abroad. Some Medicare Advantage plans offer limited emergency coverage internationally. Read your specific plan documents and call your insurer to confirm. Do not assume any Medicare plan covers routine care abroad.",
  },
  {
    q: "What health insurance options do American retirees have when living abroad?",
    a: "Most American retirees abroad use one or more of these options: (1) International health insurance — plans designed specifically for expats, such as those from Cigna Global, Aetna International, or similar providers. (2) Local private health insurance in the country where you live — often far cheaper than US plans. (3) Enrollment in the host country's public health system, where residency allows it. Many retirees combine options: a local private plan for routine care, and an international plan for serious illness or emergency evacuation. Costs and coverage vary widely. Get quotes before you move.",
  },
  {
    q: "Which countries have the best healthcare for US retirees?",
    a: "In Golden Horizons' destination rankings, Portugal, Costa Rica, Spain, France, Italy, and New Zealand all score 5/5 for healthcare. Thailand, Malaysia, Panama, Mexico, Greece, and Colombia score 4/5. High-scoring countries generally offer both a functional public system and high-quality, affordable private hospitals. The specific city matters too — private hospital quality in Medellín, Colombia is meaningfully better than rural areas of the same country.",
  },
  {
    q: "How much does private health insurance cost abroad?",
    a: "It depends heavily on your age, health history, coverage level, and the country. International expat plans for someone aged 65–75 commonly run between $200 and $600 per month for comprehensive coverage. Local private insurance in places like Thailand, Ecuador, or Panama can be significantly cheaper. Compare quotes directly from insurers. Premiums rise with age, and some plans exclude pre-existing conditions or impose waiting periods.",
  },
  {
    q: "How do I find an English-speaking doctor in my new country?",
    a: "Start with the US Embassy or consulate in your destination country — they often maintain lists of locally recommended English-speaking doctors. Expat Facebook groups for your specific city are frequently the best real-world resource. International hospitals in major cities typically have multilingual staff. Private clinics in tourist areas often have English-speaking doctors. Build your healthcare network before you need it urgently.",
  },
];

export default function HealthcarePage() {
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
    name: "Healthcare Abroad for American Retirees (2026 Guide)",
    description: "What American retirees need to know about healthcare abroad, Medicare coverage overseas, insurance options, and top healthcare countries.",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Abroad for American Retirees", item: canonicalUrl },
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
            <span className="issue-tag"><strong>Planning Guide:</strong> Healthcare Abroad</span>
            <span className="issue-tag"><strong>Section:</strong> The Health File</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Healthcare Abroad for American Retirees</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Health File · Planning Guide</div>

            <h1 className="art-headline">Healthcare Abroad for American Retirees</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Healthcare Guide</span>
            </div>

            <p className="art-intro">
              Healthcare is the question most Americans ask first when they consider retiring abroad — and for good reason.
              The US Medicare system largely does not follow you overseas. Understanding your options before you move
              is not optional. This guide covers what Medicare actually covers abroad, what insurance alternatives exist,
              and which countries score highest for healthcare quality among Golden Horizons&rsquo; ranked destinations.
            </p>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Original Medicare does not cover routine care outside the United States. Most American retirees abroad
                  combine a local private health insurance plan with international emergency coverage. In countries like
                  Thailand, Portugal, and Costa Rica, private insurance runs $100–$400/month — far less than comparable
                  US coverage. Healthcare quality in private hospitals in many retirement destinations is genuinely excellent.
                </div>
              </div>
            </div>

            <div className="section-hdr">The Medicare Reality</div>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              Original Medicare — Parts A and B — does not cover medical care received outside the United States, with
              very limited exceptions. This is the single most important fact for any American planning to retire abroad.
              If you are enrolled in Medicare and you see a doctor in Lisbon or Medellín, Medicare will not pay for it.
            </p>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              Some Medicare Advantage (Part C) plans offer limited emergency coverage for care received while temporarily
              traveling abroad. This is typically for emergencies only — not routine care, specialist visits, or ongoing
              treatment. Coverage limits vary by plan. If international coverage is important to you, read your specific
              Advantage plan&rsquo;s Summary of Benefits carefully.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              Many Americans who retire abroad keep their Medicare enrollment active, even though it does not cover them
              where they live. This allows them to use Medicare when they return to the US for visits, major procedures,
              or if they ever move back. Dropping Medicare coverage has implications for future re-enrollment premiums.
              Discuss this with a Medicare counselor or benefits advisor before making any changes.
            </p>

            <div className="section-hdr">Healthcare Scores by Destination</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              The table below shows healthcare scores from Golden Horizons&rsquo; destination rankings alongside the estimated
              monthly healthcare cost from each country&rsquo;s cost-of-living data. Scores are 1–5; 5 is best. The monthly
              cost figure covers routine private healthcare access — not insurance premiums.
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 28, fontFamily: "EB Garamond, serif" }}>
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Country</th>
                  <th style={{ textAlign: "center", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Healthcare Score</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Est. Monthly Healthcare Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Portugal", slug: "portugal", flag: "🇵🇹", score: "5/5 — Excellent", cost: 150 },
                  { name: "Costa Rica", slug: "costa-rica", flag: "🇨🇷", score: "5/5 — Excellent", cost: 120 },
                  { name: "Spain", slug: "spain", flag: "🇪🇸", score: "5/5 — Excellent", cost: 100 },
                  { name: "Italy", slug: "italy", flag: "🇮🇹", score: "5/5 — Excellent", cost: 100 },
                  { name: "France", slug: "france", flag: "🇫🇷", score: "5/5 — Excellent", cost: 120 },
                  { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿", score: "5/5 — Excellent", cost: 100 },
                  { name: "Thailand", slug: "thailand", flag: "🇹🇭", score: "4/5 — Very Good", cost: 80 },
                  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", score: "4/5 — Very Good", cost: 70 },
                  { name: "Panama", slug: "panama", flag: "🇵🇦", score: "4/5 — Very Good", cost: 100 },
                  { name: "Mexico", slug: "mexico", flag: "🇲🇽", score: "4/5 — Very Good", cost: 100 },
                  { name: "Colombia", slug: "colombia", flag: "🇨🇴", score: "4/5 — Very Good", cost: 80 },
                  { name: "Greece", slug: "greece", flag: "🇬🇷", score: "4/5 — Very Good", cost: 100 },
                ].map((row, i) => (
                  <tr key={row.slug} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8", borderBottom: "1px solid #e0cc99" }}>
                    <td style={{ padding: "10px 12px", fontSize: 17, color: "#2b1a00" }}>
                      <Link href={`/destinations/${row.slug}`} style={{ color: "#8b6914", textDecoration: "underline" }}>
                        {row.flag} {row.name}
                      </Link>
                    </td>
                    <td style={{ padding: "10px 12px", fontSize: 15, textAlign: "center", color: "#5a4010" }}>{row.score}</td>
                    <td style={{ padding: "10px 12px", fontSize: 17, textAlign: "right", fontWeight: "bold", color: "#1e1408" }}>${row.cost}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="section-hdr">Your Healthcare Checklist Abroad</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Confirm what your Medicare plan covers internationally",
                "Research local private insurance in your target country",
                "Get quotes from international expat health insurers",
                "Locate the nearest English-speaking hospital to where you&apos;ll live",
                "Find an English-speaking general practitioner before moving",
                "Get a full health checkup and copy all records before you go",
                "Bring a 90-day supply of any prescription medications",
                "Know which medications may be restricted in your new country",
                "Ask your US doctor to write international prescription letters",
                "Learn how the local emergency number system works",
                "Consider medical evacuation insurance for remote locations",
                "Keep a list of all medications, allergies, and conditions translated",
              ].map((item) => (
                <div
                  key={item}
                  style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}
                  dangerouslySetInnerHTML={{ __html: `✓ ${item}` }}
                />
              ))}
            </div>

            <div className="section-hdr">Common Healthcare Mistakes Abroad</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Assuming healthcare quality matches the ranking.</strong> Country-level scores are averages.
              A city with a top-tier private hospital may be in a country with a moderate overall score. Conversely,
              a high-scoring country may have excellent care in the capital but limited options in rural areas.
              Research your specific city, not just the country.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Delaying insurance until after arrival.</strong> Some pre-existing conditions may make
              coverage unavailable or very expensive once you are in poor health. Apply for international health
              coverage before you leave, while you are still in good shape and have more options.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Not getting copies of your medical records.</strong> Seeing a new doctor abroad is much
              easier when you bring a complete medical history — current medications, diagnoses, surgical history,
              immunization records, and recent lab work. Ask your US providers for printed and digital copies before departure.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Underestimating dental costs.</strong> Dental care is often not included in health insurance
              plans and can be a significant expense. Research dental costs in your destination. Many popular
              retirement countries offer significantly cheaper dental care than the US — sometimes 50–70% less.
            </p>

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
                { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules for Americans" },
                { href: "/taxes-for-americans-retiring-overseas", label: "Taxes for Americans Overseas" },
                { href: "/safest-countries-to-retire-abroad", label: "Safest Countries to Retire" },
                { href: "/retiring-abroad-checklist-for-americans", label: "Full Retiring Abroad Checklist" },
                { href: "/articles", label: "Browse All Articles" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", background: "#faf5e9", border: "1px solid #c9a84c", padding: "12px 14px", textDecoration: "none", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#8b6914", lineHeight: 1.4 }}>
                  → {link.label}
                </Link>
              ))}
            </div>

            <div className="disclaimer">
              This guide is for general informational purposes only and does not constitute medical, insurance, or legal advice.
              Medicare rules, insurance products, healthcare quality, and local conditions change frequently. Always verify
              current Medicare coverage details directly with Medicare (medicare.gov). Consult a licensed insurance professional
              before purchasing any health plan. Golden Horizons does not endorse any specific insurance provider.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;The countries where retirement is most affordable often have genuinely good healthcare. The two do not have to be in conflict.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/?scrollTo=subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Top Healthcare Destinations</div>

            {[
              { href: "/destinations/portugal", flag: "🇵🇹", name: "Portugal", note: "Score: 5/5 · ~$150/mo healthcare" },
              { href: "/destinations/costa-rica", flag: "🇨🇷", name: "Costa Rica", note: "Score: 5/5 · ~$120/mo healthcare" },
              { href: "/destinations/spain", flag: "🇪🇸", name: "Spain", note: "Score: 5/5 · ~$100/mo healthcare" },
              { href: "/destinations/thailand", flag: "🇹🇭", name: "Thailand", note: "Score: 4/5 · ~$80/mo healthcare" },
              { href: "/destinations/malaysia", flag: "🇲🇾", name: "Malaysia", note: "Score: 4/5 · ~$70/mo healthcare" },
            ].map((dest) => (
              <Link key={dest.href} href={dest.href} style={{ display: "block", padding: "10px 0", borderBottom: "1px solid #e0cc99", textDecoration: "none" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 16, fontWeight: 700, color: "#1a0f00" }}>{dest.flag} {dest.name}</div>
                <div style={{ fontFamily: "EB Garamond, serif", fontSize: 14, color: "#8b6914", fontStyle: "italic" }}>{dest.note}</div>
              </Link>
            ))}

            <div className="related-label" style={{ marginTop: 22 }}>Other Planning Guides</div>

            {[
              { href: "/best-countries-to-retire-abroad-on-a-budget", label: "Budget Countries" },
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
