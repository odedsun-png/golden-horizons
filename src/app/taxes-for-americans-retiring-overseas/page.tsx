import type { Metadata } from "next";
import Link from "next/link";
import { getCountryById } from "@/lib/countries";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/taxes-for-americans-retiring-overseas`;

export const metadata: Metadata = {
  title: "Taxes for Americans Retiring Overseas (2026 Guide)",
  description:
    "What American retirees need to know about US taxes overseas: filing requirements, FBAR, FATCA, Social Security taxes abroad, tax treaties, and the Foreign Tax Credit. Updated 2026.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Taxes for Americans Retiring Overseas (2026 Guide)",
    description:
      "US tax obligations for American retirees abroad — FBAR, FATCA, Social Security, foreign tax credits, and tax treaty basics.",
    images: [
      {
        url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Taxes for Americans retiring overseas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxes for Americans Retiring Overseas (2026 Guide)",
    description: "US tax filing requirements, FBAR, Social Security taxes, and tax treaties for American retirees living abroad.",
    images: ["https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const faqs = [
  {
    q: "Do Americans living abroad still have to file a US tax return?",
    a: "Yes. The United States taxes its citizens on worldwide income, regardless of where they live. If your income exceeds the filing threshold, you are required to file a US federal income tax return every year — even if you have lived abroad for decades and even if you pay taxes in your host country. The filing deadline is extended automatically to June 15 for Americans abroad (rather than April 15), with a further extension available. Consult a US-qualified CPA experienced in expat taxation.",
  },
  {
    q: "What is FBAR and do retirees living abroad need to file it?",
    a: "FBAR stands for the Foreign Bank Account Report (formally FinCEN Form 114). If you have financial accounts outside the US with a combined total value exceeding $10,000 at any point during the calendar year, you are required to file an FBAR with the US Treasury Department. This is a separate filing from your tax return and is due by April 15 with an automatic extension to October 15. Penalties for non-compliance can be severe. The FBAR is filed online through the FinCEN BSA E-Filing system, not with the IRS. Consult a tax professional.",
  },
  {
    q: "Does Social Security get taxed when I live abroad?",
    a: "It depends on two things: the country you live in, and your total income. Within the US tax system, Social Security benefits can be partially taxable if your total income (including half of your Social Security benefits) exceeds certain IRS thresholds. If your country of residence has a US tax treaty that covers Social Security, the treaty may affect how those benefits are taxed. Some countries do not tax Social Security benefits received by American expats. This is a complex area — consult a CPA who specializes in expat taxation and is familiar with the specific tax treaty, if any, between the US and your destination country.",
  },
  {
    q: "What is the Foreign Tax Credit and how does it help retirees abroad?",
    a: "The Foreign Tax Credit (IRS Form 1116) allows you to offset US taxes you owe with taxes you have already paid to a foreign government on the same income. This is one of the primary mechanisms that prevents true double taxation for Americans abroad. If you pay income tax in your host country, you may be able to use those taxes as a credit against your US tax liability. The rules are complex — they apply differently to different categories of income (passive, general, etc.) and depend on treaty status. Work with a qualified expat CPA to apply this correctly.",
  },
  {
    q: "What is FATCA and does it affect Americans retiring abroad?",
    a: "FATCA (Foreign Account Tax Compliance Act) requires US citizens with specified foreign financial assets above certain thresholds to report them on IRS Form 8938. Thresholds are higher than FBAR thresholds and vary based on filing status and whether you live inside or outside the US. FATCA also requires foreign financial institutions to report information on accounts held by US persons to the IRS. As a practical matter, foreign banks are more aware of FATCA than ever, and some have become reluctant to open accounts for Americans. Opening a bank account abroad before you move — while you still have a US address — can sometimes be easier.",
  },
];

export default function TaxesPage() {
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
    name: "Taxes for Americans Retiring Overseas (2026 Guide)",
    description: "US tax obligations for American retirees abroad — FBAR, FATCA, Social Security, foreign tax credits, and tax treaty basics.",
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
      { "@type": "ListItem", position: 3, name: "Taxes for Americans Retiring Overseas", item: canonicalUrl },
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
            <span className="issue-tag"><strong>Planning Guide:</strong> Taxes Overseas</span>
            <span className="issue-tag"><strong>Section:</strong> The Money Page</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/food">Food</Link>
          <Link href="/tax-guide">Tax Guide</Link>
          <Link href="/subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Taxes for Americans Retiring Overseas</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Money Page · Planning Guide</div>

            <h1 className="art-headline">Taxes for Americans Retiring Overseas</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Tax Guide</span>
            </div>

            <p className="art-intro">
              The United States is one of very few countries in the world that taxes its citizens on worldwide income,
              no matter where they live. Moving abroad does not end your US tax obligations. What it does is add a
              layer of complexity — new filing requirements, potential new taxes in your host country, and the need
              to understand how the two systems interact. This guide covers the core concepts every American retiree
              abroad needs to know — and why you need a{" "}
              <Link href="/retiring-abroad-checklist-for-americans" style={{ color: "#8b6914" }}>qualified expat CPA</Link>, not a general tax preparer.
            </p>

            <div style={{ background: "#fdf8ec", border: "1px solid #c9a84c", borderLeft: "4px solid #c9a84c", padding: "14px 18px", marginBottom: 20 }}>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 15, color: "#5a4010", fontStyle: "italic", margin: 0, lineHeight: 1.65 }}>
                <strong style={{ fontStyle: "normal" }}>General information only.</strong> US tax law, FBAR and FATCA requirements, tax treaty rules, and foreign tax obligations are complex, change over time, and vary by individual circumstance. Nothing in this guide constitutes tax, legal, or financial advice. Consult a US-licensed CPA who specializes in expat taxation before making any decisions.
              </p>
            </div>

            <div style={{ background: "#f0e8d0", border: "2px solid #c9a84c", padding: "18px 22px", marginBottom: 24, borderRadius: 2 }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#8b6914", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>The Short Answer</div>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 17, color: "#1a0f00", lineHeight: 1.65, marginBottom: 8 }}>
                <strong>What do Americans need to know about taxes when retiring overseas?</strong>
              </p>
              <ul style={{ fontFamily: "EB Garamond, serif", fontSize: 17, color: "#2b1a00", lineHeight: 1.7, paddingLeft: 22, margin: "0 0 10px" }}>
                <li><strong>Moving abroad does not end US tax obligations.</strong> The US taxes its citizens on worldwide income regardless of where they live. Americans abroad are generally still required to file a federal income tax return each year if their income exceeds the filing threshold.</li>
                <li><strong>Foreign bank accounts may trigger additional reporting.</strong> If you hold foreign financial accounts with a combined total above $10,000 at any point in the year, you may be required to file an FBAR (FinCEN Form 114) — separately from your tax return and with the Treasury, not the IRS.</li>
                <li><strong>The Foreign Tax Credit may help reduce double taxation.</strong> If you pay income taxes in your host country, you may be able to use those taxes as a credit against your US tax liability. Rules are complex and vary by income type and treaty status.</li>
                <li><strong>Tax treaties may affect how your income is treated.</strong> Some countries have tax treaties with the United States that can affect how Social Security, pensions, or other income is taxed. Not all countries have such treaties, and treaty terms vary. Verify current status with a qualified professional.</li>
                <li><strong>An expat-specialist CPA is strongly recommended.</strong> Expat tax returns may involve FBAR, FATCA, foreign tax credits, treaty provisions, and state tax issues. These are specialized areas that a general tax preparer may not handle correctly.</li>
              </ul>
              <p style={{ fontFamily: "EB Garamond, serif", fontSize: 15, color: "#6b5d47", fontStyle: "italic", margin: 0 }}>
                This is general guidance only. Tax rules change and vary by individual situation. Always verify with the IRS, official government sources, and a qualified tax professional before making decisions.
              </p>
            </div>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Moving abroad does not eliminate US taxes. You still file a federal return every year.
                  If you have foreign bank accounts over $10,000 combined, you also file an FBAR. If you
                  have significant foreign assets, you may file Form 8938 under FATCA. The Foreign Tax Credit
                  can reduce double taxation, but only if applied correctly. Tax treaties can help further —
                  but only if one exists between the US and your country of residence. Get a CPA who does
                  this work routinely, not one who does it occasionally.
                </div>
              </div>
            </div>

            <div className="section-hdr">Key US Tax Obligations Abroad</div>

            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 28, fontFamily: "EB Garamond, serif" }}>
              <thead>
                <tr style={{ background: "#1e1408", color: "#c9a84c" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Obligation</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Form / System</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Who It Applies To</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { obligation: "Annual US Tax Return", form: "Form 1040", who: "All Americans with income above filing threshold", notes: "Due June 15 for expats; extensions available" },
                  { obligation: "Foreign Bank Account Report (FBAR)", form: "FinCEN 114", who: "Foreign accounts total > $10,000 at any point", notes: "Filed online with Treasury, NOT the IRS" },
                  { obligation: "Foreign Asset Reporting (FATCA)", form: "IRS Form 8938", who: "Foreign assets above specified thresholds", notes: "Thresholds vary by filing status and residency" },
                  { obligation: "Foreign Tax Credit", form: "IRS Form 1116", who: "Americans who paid income tax abroad", notes: "Reduces US tax dollar-for-dollar" },
                  { obligation: "State Tax Return", form: "Varies by state", who: "Depends on state of last US domicile", notes: "Some states pursue taxes despite foreign residency" },
                ].map((row, i) => (
                  <tr key={row.obligation} style={{ background: i % 2 === 0 ? "#faf5e9" : "#f5edd8", borderBottom: "1px solid #e0cc99" }}>
                    <td style={{ padding: "10px 12px", fontSize: 16, fontWeight: "bold", color: "#1a0f00" }}>{row.obligation}</td>
                    <td style={{ padding: "10px 12px", fontSize: 15, color: "#2b1a00" }}>{row.form}</td>
                    <td style={{ padding: "10px 12px", fontSize: 14, color: "#5a4010" }}>{row.who}</td>
                    <td style={{ padding: "10px 12px", fontSize: 14, color: "#5a4010", fontStyle: "italic" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="section-hdr">What the Foreign Earned Income Exclusion Does (and Does Not) Do</div>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              The Foreign Earned Income Exclusion (FEIE, Form 2555) is often mentioned in articles about retiring abroad —
              but it is frequently misunderstood. The FEIE allows qualifying Americans to exclude a portion of their
              foreign earned income from US taxation. The key word is <em>earned</em>.
            </p>

            <p className="art-article-body" style={{ marginBottom: 18 }}>
              Retirement income — Social Security, pensions, IRA distributions, 401(k) withdrawals — is not earned income.
              The FEIE generally does not apply to most retirees&rsquo; primary income sources. If you have retirement income,
              the more relevant tools are the Foreign Tax Credit (to offset US taxes with taxes paid abroad) and any
              applicable US–host country tax treaty.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              If you do any part-time work or consulting abroad, the FEIE may apply to those specific earnings.
              But for most retirees, it is not the primary planning tool. This is another reason why working with an
              expat CPA — not a general preparer who occasionally helps people with foreign income — matters enormously.
            </p>

            <div className="section-hdr">Best For — and Not Best For</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div style={{ background: "#f0f5e8", border: "1px solid #8aab5a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#3d6b1f", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Best For</div>
                {[
                  "Those with straightforward income — Social Security or one pension",
                  "Retirees in countries with a US income tax treaty",
                  "Those who hire a specialist expat CPA before moving",
                  "People willing to file US returns annually from abroad",
                  "Those who understand FBAR and FATCA obligations in advance",
                  "Retirees with a plan for state tax residency before they leave",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✓ {item}</div>
                ))}
              </div>
              <div style={{ background: "#faf0f0", border: "1px solid #c47a7a", padding: "16px 18px" }}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 13, fontWeight: 700, color: "#8b2020", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Not Best For</div>
                {[
                  "Those hoping moving abroad eliminates US tax obligations",
                  "Anyone planning to use a general tax preparer for expat returns",
                  "Those with complex investment portfolios or multiple income types",
                  "Retirees in countries without a US tax treaty",
                  "Those who haven't addressed state tax residency before leaving",
                  "Anyone unfamiliar with FBAR or FATCA reporting requirements",
                ].map((item) => (
                  <div key={item} style={{ fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.55, marginBottom: 7 }}>✗ {item}</div>
                ))}
              </div>
            </div>

            <p style={{ fontFamily: "EB Garamond, serif", fontSize: 15, color: "#6b5d47", fontStyle: "italic", marginBottom: 28 }}>
              Healthcare costs and coverage abroad are a separate but related planning consideration. See our{" "}
              <Link href="/healthcare-abroad-for-american-retirees" style={{ color: "#8b6914" }}>Healthcare Abroad for American Retirees</Link> guide.
            </p>

            <div className="section-hdr">Tax Checklist for Retirees Moving Abroad</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Hire a US-licensed CPA who specializes in expat taxation",
                "Determine whether a US tax treaty exists with your destination",
                "Check if your destination taxes Social Security or US pension income",
                "Understand your state tax obligations — some states are aggressive",
                "Set up FBAR filing if you will have foreign accounts over $10,000",
                "Understand FATCA reporting thresholds for your situation",
                "Keep filing US taxes every year — this does not stop",
                "File on time or file for an extension — penalties for non-filing are serious",
                "Keep records of all foreign taxes paid for the Foreign Tax Credit",
                "Check if your host country requires you to file a local tax return",
                "Research estate and inheritance tax implications in your new country",
                "Review your IRA and 401(k) for any foreign distribution complications",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <p className="art-article-body" style={{ marginBottom: 24, fontSize: 16 }}>
              For estimated monthly living costs by destination — which affect how far your retirement income may stretch — see our{" "}
              <Link href="/best-countries-to-retire-abroad-on-a-budget" style={{ color: "#8b6914" }}>Budget Retirement Guide</Link>.
            </p>

            <div className="section-hdr">Common Tax Mistakes Abroad</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Stopping US tax filing after <Link href="/visa-rules-for-americans-retiring-abroad" style={{ color: "#8b6914" }}>moving abroad</Link>.</strong> This is illegal and can result in
              substantial penalties and interest. The obligation to file US taxes continues until you are no longer
              a US citizen — or until your income falls below the filing threshold. Moving does not change this.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Missing FBAR deadlines.</strong> FBAR is often overlooked because it is filed separately from
              the tax return, with a different agency. Non-willful violations can carry penalties of up to $10,000
              per violation. Willful violations can be far more severe. Set a calendar reminder every year.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Ignoring state taxes.</strong> Some US states — California, New York, Virginia, and South Carolina
              among the most aggressive — will attempt to tax you on worldwide income even after you have moved abroad,
              unless you have cleanly <Link href="/destinations" style={{ color: "#8b6914" }}>established domicile elsewhere</Link>. This is a separate issue from federal taxes.
              Properly severing your state tax residency before you move is important.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Using a general tax preparer for complex expat returns.</strong> The expat tax area — FBAR, FATCA,
              foreign tax credits, treaty provisions, state domicile issues — is specialized. A general CPA who does
              not routinely handle this work will miss things. Use someone who does expat returns as a significant
              part of their practice.
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
                { href: "/best-countries-to-retire-abroad-on-a-budget", label: "Best Countries on a Budget" },
                { href: "/healthcare-abroad-for-american-retirees", label: "Healthcare Abroad" },
                { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules for Americans" },
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
              This guide is for general informational purposes only and does not constitute tax, legal, or financial advice.
              US tax law, FBAR requirements, FATCA thresholds, and international tax treaties are complex and change over time.
              Tax obligations vary based on individual circumstances, income type, country of residence, and applicable treaties.
              Consult a US-licensed CPA or tax attorney who specializes in expat and international taxation before making any
              decisions. Golden Horizons does not provide tax, legal, or financial advice.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;The US taxes its citizens abroad. That is the reality. Plan for it honestly and it becomes manageable. Ignore it and it becomes expensive.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Notable Tax Considerations by Country</div>

            {[
              { href: "/destinations/italy", slug: "italy", flag: "🇮🇹", name: "Italy", note: "7% flat tax in qualifying southern regions" },
              { href: "/destinations/portugal", slug: "portugal", flag: "🇵🇹", name: "Portugal", note: "NHR 2.0 tax program available" },
              { href: "/destinations/panama", slug: "panama", flag: "🇵🇦", name: "Panama", note: "No tax on foreign-sourced income" },
              { href: "/destinations/belize", slug: "belize", flag: "🇧🇿", name: "Belize", note: "Zero tax on foreign income" },
              { href: "/destinations/ecuador", slug: "ecuador", flag: "🇪🇨", name: "Ecuador", note: "USD economy; consult on treaty" },
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
