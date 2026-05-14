import type { Metadata } from "next";
import Link from "next/link";
import { getCountryById } from "@/lib/countries";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/visa-rules-for-americans-retiring-abroad`;

export const metadata: Metadata = {
  title: "Visa Rules for Americans Retiring Abroad (2026 Guide) | Golden Horizons",
  description:
    "A practical overview of retirement and residency visas for Americans, covering pensionado programs, income-based visas, and what to verify before you apply. Updated 2026.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Visa Rules for Americans Retiring Abroad (2026 Guide)",
    description:
      "Pensionado programs, income-based visas, and what Americans need to know before applying for retirement residency abroad.",
    images: [
      {
        url: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Visa rules for Americans retiring abroad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Rules for Americans Retiring Abroad (2026 Guide)",
    description: "Retirement and residency visa options for Americans — what they require, what they allow, and where to verify current rules.",
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
    q: "What is a pensionado visa and which countries offer them?",
    a: "A pensionado visa is a residency permit designed specifically for retirees who receive a regular pension or retirement income. Panama and Costa Rica are the most well-known examples. Panama's Pensionado program requires proof of at least $1,000 per month in lifetime pension income. Costa Rica's Pensionado visa has a similar income threshold. Both offer legal residency with certain local benefits. Income thresholds and requirements change — always verify with the official immigration authority or a licensed immigration attorney before applying.",
  },
  {
    q: "What is Portugal's D7 visa and who qualifies?",
    a: "Portugal's D7 Passive Income Visa allows non-EU citizens, including Americans, to live in Portugal if they can demonstrate sufficient passive income — from pensions, Social Security, rental income, investments, or savings. The minimum income requirement is set by Portuguese immigration authorities and changes periodically. The D7 leads to temporary then permanent residency and eventually the option to apply for Portuguese citizenship. Verify the current income threshold directly with the Portuguese consulate or a licensed immigration lawyer.",
  },
  {
    q: "Can I retire abroad on a tourist visa or visa-free entry?",
    a: "Many Americans enter popular retirement countries visa-free for 90 days under passport privileges. Some retirees try to extend this by crossing borders regularly ('visa runs'), but this approach is legally precarious in most countries, increasingly scrutinized, and does not give you the legal rights, banking access, or healthcare enrollment that residency provides. If you plan to live somewhere long-term, the right path is a proper residency permit — not visa runs.",
  },
  {
    q: "Does retiring abroad affect my US citizenship?",
    a: "No. Simply living abroad does not affect your US citizenship. You keep your US passport, your right to vote in federal elections, and your Social Security benefits. You remain subject to US taxes on worldwide income and must continue filing US federal tax returns annually. US citizenship is only lost through a formal renunciation process — which is voluntary, irreversible, and has significant tax implications.",
  },
  {
    q: "How long does it take to get a retirement visa abroad?",
    a: "Processing times vary widely by country and visa type. Some programs process applications in weeks; others take many months. Panama's Pensionado is often cited as one of the faster programs for qualifying retirees. Portugal's D7 can take longer, and demand has grown. It is advisable to start the application process at least 6–12 months before your planned move date. Work with a licensed immigration attorney in the destination country for the most accurate current timeline.",
  },
];

export default function VisaPage() {
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
    name: "Visa Rules for Americans Retiring Abroad (2026 Guide)",
    description: "A practical overview of retirement and residency visa options for Americans — pensionado programs, income-based visas, and what to verify before applying.",
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
      { "@type": "ListItem", position: 3, name: "Visa Rules for Americans Retiring Abroad", item: canonicalUrl },
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
            <span className="issue-tag"><strong>Planning Guide:</strong> Visa Rules Abroad</span>
            <span className="issue-tag"><strong>Section:</strong> The Visa File</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Visa Rules for Americans Retiring Abroad</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Visa File · Planning Guide</div>

            <h1 className="art-headline">Visa Rules for Americans Retiring Abroad</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Visa Guide</span>
            </div>

            <p className="art-intro">
              The visa question is usually the first thing that stops people from moving forward with retirement abroad —
              and it does not need to. Most popular retirement destinations have specific visa categories designed for
              retirees with pension income. This guide explains the main categories, what they generally require, and
              what you need to verify before you apply.
            </p>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Visa rules change. The income thresholds, required documents, processing times, and benefits
                  listed in this guide are general reference points only. Always verify current requirements
                  directly with the official immigration authority of your destination country, or with a
                  licensed immigration attorney. Do not rely on forum posts, blog articles, or social media for
                  official immigration requirements.
                </div>
              </div>
            </div>

            <div className="section-hdr">Common Visa Categories for American Retirees</div>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 28, fontFamily: "EB Garamond, serif" }}>
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Country</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Visa / Program Name</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>General Income Basis</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Panama", slug: "panama", flag: "🇵🇦", visa: "Pensionado", income: "Pension-based", notes: "Generous retiree discounts" },
                  { name: "Costa Rica", slug: "costa-rica", flag: "🇨🇷", visa: "Pensionado", income: "Pension-based", notes: "Stable democracy, well-established" },
                  { name: "Portugal", slug: "portugal", flag: "🇵🇹", visa: "D7 Passive Income", income: "Passive income or savings", notes: "EU residency path; NHR tax program" },
                  { name: "Mexico", slug: "mexico", flag: "🇲🇽", visa: "Temporary / Permanent Resident", income: "Income or savings threshold", notes: "Flexible; large expat infrastructure" },
                  { name: "Spain", slug: "spain", flag: "🇪🇸", visa: "Non-Lucrative Visa", income: "Income threshold per applicant", notes: "No work allowed; Spain residency" },
                  { name: "Thailand", slug: "thailand", flag: "🇹🇭", visa: "OA Retirement Visa", income: "Pension or bank deposit", notes: "Annual renewal; age 50+ required" },
                  { name: "Malaysia", slug: "malaysia", flag: "🇲🇾", visa: "MM2H", income: "Financial reserve + income", notes: "10-year renewable; English spoken" },
                  { name: "Ecuador", slug: "ecuador", flag: "🇪🇨", visa: "Retirement / Investment Visa", income: "Pension income threshold", notes: "USD economy; simple process" },
                  { name: "Colombia", slug: "colombia", flag: "🇨🇴", visa: "Retirement Visa (M)", income: "Monthly income threshold", notes: "Improving safety; growing expat scene" },
                  { name: "Italy", slug: "italy", flag: "🇮🇹", visa: "Elective Residency / Flat Tax", income: "Passive income + savings", notes: "7% flat tax in qualifying southern regions" },
                ].map((row, i) => (
                  <tr key={row.slug} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8", borderBottom: "1px solid #e0cc99" }}>
                    <td style={{ padding: "10px 12px", fontSize: 16, color: "#2b1a00" }}>
                      <Link href={`/destinations/${row.slug}`} style={{ color: "#8b6914", textDecoration: "underline" }}>
                        {row.flag} {row.name}
                      </Link>
                    </td>
                    <td style={{ padding: "10px 12px", fontSize: 15, color: "#2b1a00", fontWeight: "bold" }}>{row.visa}</td>
                    <td style={{ padding: "10px 12px", fontSize: 14, color: "#5a4010" }}>{row.income}</td>
                    <td style={{ padding: "10px 12px", fontSize: 14, color: "#5a4010", fontStyle: "italic" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="art-article-body" style={{ marginBottom: 20, fontSize: 14, fontStyle: "italic", color: "#6b5d47" }}>
              All income thresholds, eligibility rules, and application requirements in the table above are subject to change.
              Verify all current requirements with the official immigration authority of each country or a licensed attorney.
            </p>

            <div className="section-hdr">Visa Application Checklist</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Verify current income thresholds from the official source",
                "Check if your income type qualifies (Social Security, pension, investment)",
                "Gather proof of income documents — translated if required",
                "Obtain an apostille-certified copy of your US birth certificate",
                "Get an FBI criminal background check (apostilled)",
                "Confirm your passport has sufficient validity remaining",
                "Check whether you need to apply from the US consulate or in-country",
                "Prepare translated documents — hire a certified translator",
                "Budget for attorney fees — typically $500–$2,000 depending on country",
                "Understand the renewal timeline and cost",
                "Check whether the visa allows you to work, invest, or rent property",
                "Understand the path from temporary to permanent residency",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="section-hdr">Common Visa Mistakes</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Relying on outdated information.</strong> Visa rules change frequently. Income thresholds go up.
              Programs get paused or restructured. A blog post from 2022 may describe a program that has since changed
              significantly. Always verify with the official consulate or immigration authority before starting any application.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Trying to do it alone without local legal help.</strong> Immigration paperwork in a foreign country,
              in a foreign language, with document certification requirements you are not familiar with, is not the place
              to save money. A licensed immigration attorney in the destination country costs a fraction of the cost of
              a rejected application, an overstay fine, or deportation.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Assuming the visa covers your spouse automatically.</strong> Dependent family members typically
              need separate applications or must be specifically included in your application. Understand the requirements
              for your entire household before you apply.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Not checking if Social Security qualifies as pension income.</strong> Most pensionado-style visas
              accept US Social Security as qualifying pension income, but not all. Some require income from a government
              or employer pension specifically. Confirm your income type qualifies before you plan around a specific program.
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
                { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad" },
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
              This guide provides general information about common retirement visa categories and should not be treated
              as legal or immigration advice. Visa rules, income thresholds, document requirements, and processing
              procedures change frequently and vary by country. Always verify current requirements directly with the
              official immigration authority of the destination country, the US Embassy in that country, or a licensed
              immigration attorney. Golden Horizons does not provide legal or immigration advice.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;Most people are surprised to discover how straightforward residency can be when you have the right income and the right help.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/?scrollTo=subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Well-Known Visa Programs</div>

            {[
              { href: "/destinations/panama", slug: "panama", flag: "🇵🇦", name: "Panama Pensionado", note: "One of the most accessible programs" },
              { href: "/destinations/costa-rica", slug: "costa-rica", flag: "🇨🇷", name: "Costa Rica Pensionado", note: "Stable, established program" },
              { href: "/destinations/portugal", slug: "portugal", flag: "🇵🇹", name: "Portugal D7", note: "EU residency path" },
              { href: "/destinations/mexico", slug: "mexico", flag: "🇲🇽", name: "Mexico Residency", note: "Flexible income requirements" },
              { href: "/destinations/thailand", slug: "thailand", flag: "🇹🇭", name: "Thailand OA Visa", note: "Annual renewable; age 50+" },
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
