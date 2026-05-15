import type { Metadata } from "next";
import Link from "next/link";
import { getCountryById } from "@/lib/countries";

const siteUrl = "https://golden-horizons.org";
const canonicalUrl = `${siteUrl}/retiring-abroad-checklist-for-americans`;

export const metadata: Metadata = {
  title: "Retiring Abroad Checklist for Americans (2026)",
  description:
    "A practical step-by-step checklist for Americans retiring abroad. What to do before you leave, what to set up when you arrive, and what most people forget. Updated 2026.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    siteName: "Golden Horizons",
    title: "Retiring Abroad Checklist for Americans (2026)",
    description:
      "Step-by-step checklist for American retirees moving abroad. Financial, legal, healthcare, and logistics — all in one place.",
    images: [
      {
        url: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Retiring abroad checklist for Americans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retiring Abroad Checklist for Americans (2026)",
    description: "Everything you need to do before, during, and after your move abroad. A practical checklist for American retirees.",
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
    q: "How far in advance should I start planning to retire abroad?",
    a: "Most experienced expats recommend starting serious planning 12–24 months before your intended move date. That gives you time to research countries, visit your top choices, apply for a visa, organize your finances, sort out healthcare coverage, handle property decisions in the US, and build a financial buffer. Rushing a move abroad almost always leads to expensive mistakes.",
  },
  {
    q: "Do I need to give up my US citizenship or renounce residency to retire abroad?",
    a: "No. Most Americans retire abroad while keeping their US citizenship and Social Security benefits. You remain a US citizen and are still required to file US tax returns annually, regardless of where you live. Some retirees choose to become permanent residents or eventually citizens of their new country, but that is optional — not required.",
  },
  {
    q: "What happens to my Social Security payments if I move abroad?",
    a: "In most countries, Social Security payments continue without interruption when you live abroad. The Social Security Administration can direct-deposit payments to a foreign bank account in many countries, or you can use a US bank account and access funds via international transfer. A small number of countries have Social Security payment restrictions — verify your destination at ssa.gov. Separately, some Social Security benefits may be subject to tax treaties with your host country.",
  },
  {
    q: "What documents should I bring when retiring abroad?",
    a: "At minimum: a valid US passport (with at least 1–2 years remaining), your Social Security card or benefits statement, US birth certificate, marriage certificate if applicable, divorce decree if applicable, complete medical records and medication list, copies of financial account information, and any legal documents (will, power of attorney, property deeds). Bring certified originals and multiple copies. Some countries require apostille-certified documents — check early.",
  },
  {
    q: "Should I sell my US home before retiring abroad?",
    a: "This depends on your financial situation and how certain you are about staying abroad long-term. Many retirees rent their US home for income during an initial trial period rather than selling immediately. Renting abroad first, before selling your US property, gives you a reversible path if things do not work out as planned. Consult a US tax advisor before selling, as capital gains rules and the $250,000 / $500,000 exclusion for primary residences have specific requirements.",
  },
];

export default function ChecklistPage() {
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
    name: "Retiring Abroad Checklist for Americans (2026)",
    description: "A practical step-by-step checklist for Americans retiring abroad — financial, legal, healthcare, and logistics.",
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
      { "@type": "ListItem", position: 3, name: "Retiring Abroad Checklist for Americans", item: canonicalUrl },
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
            <span className="issue-tag"><strong>Planning Guide:</strong> Retiring Abroad Checklist</span>
            <span className="issue-tag"><strong>Section:</strong> The Strategy Page</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
        </nav>

        <div className="breadcrumb">
          <Link href="/">Cover</Link>
          <span> › </span>
          <Link href="/#planning-guides">Planning Guides</Link>
          <span> › </span>
          <span style={{ color: "#1e1408" }}>Retiring Abroad Checklist for Americans</span>
        </div>

        <div className="article-layout">
          <div className="article-main">
            <div className="art-kicker">The Strategy Page · Planning Guide</div>

            <h1 className="art-headline">Retiring Abroad Checklist for Americans</h1>

            <div className="art-meta">
              <span>By the Golden Horizons Editorial Team</span>
              <span>Updated: April 2026</span>
              <span>2026 Planning Guide</span>
            </div>

            <p className="art-intro">
              Moving abroad in retirement is not complicated — but it requires doing things in the right order.
              Miss a step, and you might arrive without healthcare coverage, discover your bank has closed your account,
              or find out your visa category does not actually permit you to stay as long as you planned.
              This checklist covers what most experienced expats wish they had known before they left.
            </p>

            <div className="dyk">
              <div className="dyk-icon">◆</div>
              <div>
                <div className="dyk-label">Quick Take</div>
                <div className="dyk-text">
                  Start at least 12 months out. The two biggest mistakes American retirees make: moving before they
                  have healthcare coverage sorted, and selling their US home before they are certain about staying.
                  Both are reversible in theory — and very expensive in practice. Give yourself a trial period before
                  making anything permanent.
                </div>
              </div>
            </div>

            <div className="section-hdr">12 Months Before You Leave</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Research 3–5 countries seriously, not just one",
                "Visit your top choice for at least 4 weeks",
                "Calculate your actual monthly budget needs",
                "Get your full Social Security benefit estimate",
                "Meet with a US CPA who specializes in expat taxes",
                "Research visa options for your income level",
                "Check whether your target country has a Social Security treaty with the US",
                "Decide whether to rent or sell your US home",
                "Research healthcare options for your destination",
                "Check if your destination country allows Medicare supplement plans to continue",
                "Join expat forums for your target destination",
                "List all assets, accounts, and obligations you will need to manage remotely",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="section-hdr">6 Months Before You Leave</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Renew your US passport — aim for at least 2 years remaining",
                "Apply for your visa or residency if required",
                "Open a no-foreign-transaction-fee bank account (Charles Schwab, Wise, etc.)",
                "Set up a US mailing address for bills, banking, and legal mail",
                "Get international health insurance quotes and purchase coverage",
                "Request complete medical records from all US providers",
                "Get a 90-day supply of all prescription medications",
                "Check if your medications are legal and available in your destination",
                "Get letters from doctors describing your diagnoses and prescriptions",
                "Prepare a legal will valid in the US — ideally also in your new country",
                "Set up a durable power of attorney for someone in the US",
                "Notify the Social Security Administration of your planned address change",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="section-hdr">1 Month Before You Leave</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Notify US banks and credit cards of your move",
                "Set up automatic bill payments for US obligations",
                "File an IRS Form 8822 to update your address with the IRS",
                "Arrange mail forwarding or a virtual mailbox service",
                "Contact Medicare to understand your coverage status abroad",
                "Register with the US Embassy in your destination country (optional but useful)",
                "Arrange temporary housing for your first 1–3 months",
                "Confirm your international health insurance is active",
                "Pack certified copies of critical documents — not just originals",
                "Take photos of all important documents and store in cloud",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="section-hdr">First 90 Days Abroad</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                "Rent before buying — give yourself at least 6–12 months to learn the area",
                "Open a local bank account if your visa permits",
                "Register with local authorities as required by your visa",
                "Find a local general practitioner and dentist",
                "Locate your nearest English-speaking hospital or clinic",
                "File your annual US tax return (required regardless of where you live)",
                "Check FBAR filing requirements if you have foreign bank accounts over $10,000",
                "Connect with local expat community groups",
                "Start learning basics of the local language",
                "Do not make any permanent property decisions for at least 6 months",
              ].map((item) => (
                <div key={item} style={{ background: "#f5edd8", padding: "10px 14px", borderLeft: "3px solid #c9a84c", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#2b1a00", lineHeight: 1.5 }}>
                  ✓ {item}
                </div>
              ))}
            </div>

            <div className="section-hdr">Things Most People Forget</div>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Annual FBAR filing.</strong> If you have foreign bank accounts with combined balances over $10,000
              at any point during the year, you are required to file a FinCEN 114 (FBAR) with the US Treasury Department.
              This is separate from your tax return. Missing this filing carries serious penalties. Consult your expat CPA.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>US tax filing never stops.</strong> The US taxes its citizens on worldwide income, regardless of
              where they live. You will continue filing a US federal tax return every year. You may also owe taxes in
              your new country. The Foreign Tax Credit and any applicable tax treaty can reduce double taxation, but
              the compliance obligation does not disappear. See our guide on{" "}
              <Link href="/taxes-for-americans-retiring-overseas" style={{ color: "#8b6914" }}>taxes for Americans retiring overseas</Link>.
            </p>

            <p className="art-article-body" style={{ marginBottom: 16 }}>
              <strong>Driver&rsquo;s license validity.</strong> Your US license may work for a limited time abroad
              (typically 6–12 months), depending on the country. After that, you may need to obtain a local license
              or an International Driving Permit. Requirements vary by country — check early.
            </p>

            <p className="art-article-body" style={{ marginBottom: 24 }}>
              <strong>Voting rights.</strong> US citizens abroad retain the right to vote in federal elections via
              absentee ballot. Register through your last state of US residence using FVAP.gov (Federal Voting
              Assistance Program) to maintain this right.
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
                { href: "/visa-rules-for-americans-retiring-abroad", label: "Visa Rules for Americans" },
                { href: "/taxes-for-americans-retiring-overseas", label: "Taxes for Americans Overseas" },
                { href: "/safest-countries-to-retire-abroad", label: "Safest Countries to Retire" },
                { href: "/destinations", label: "Browse All Destinations" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "block", background: "#faf5e9", border: "1px solid #c9a84c", padding: "12px 14px", textDecoration: "none", fontFamily: "EB Garamond, serif", fontSize: 16, color: "#8b6914", lineHeight: 1.4 }}>
                  → {link.label}
                </Link>
              ))}
            </div>

            <div className="disclaimer">
              This checklist is for general informational purposes only. Immigration rules, tax obligations, Medicare
              policies, and local requirements vary by country and change over time. Always verify current requirements
              with official sources — including the US Embassy in your destination, the IRS, the Social Security
              Administration, and local immigration authorities. Consult a licensed immigration attorney and a US-qualified
              CPA before making any relocation decisions. Golden Horizons does not provide legal, financial, or immigration advice.
            </div>

            <Link href="/destinations" className="back-link">← Browse all destination profiles</Link>
          </div>

          <div className="sidebar">
            <div className="sb-pull">
              <p>&ldquo;The best time to retire abroad was ten years ago. The second best time is today — if you plan it properly.&rdquo;</p>
              <cite>— The Golden Horizons Editors</cite>
            </div>

            <div className="mag-sub">
              <div className="mag-sub-eyebrow">Free Subscription</div>
              <div className="mag-sub-headline">Start reading Golden Horizons every morning</div>
              <div className="mag-sub-body">Real costs. Real places. One story, every morning.</div>
              <Link href="/#subscribe" className="mag-btn">Start My Free Subscription →</Link>
              <div className="mag-trust">◆ Join 5,000+ readers ◆</div>
            </div>

            <div className="related-label" style={{ marginTop: 22 }}>Top Destinations to Research</div>

            {[
              { href: "/destinations/portugal", slug: "portugal", flag: "🇵🇹", name: "Portugal", note: "Ranked #1 · D7 Visa" },
              { href: "/destinations/mexico", slug: "mexico", flag: "🇲🇽", name: "Mexico", note: "Ranked #2 · Easy residency" },
              { href: "/destinations/costa-rica", slug: "costa-rica", flag: "🇨🇷", name: "Costa Rica", note: "Ranked #3 · Pensionado visa" },
              { href: "/destinations/panama", slug: "panama", flag: "🇵🇦", name: "Panama", note: "Ranked #5 · Pensionado program" },
              { href: "/destinations/thailand", slug: "thailand", flag: "🇹🇭", name: "Thailand", note: "Ranked #6 · OA retirement visa" },
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
              { href: "/safest-countries-to-retire-abroad", label: "Safest Countries" },
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
