"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { faqItems, taxGuideCountries, type TaxCategory } from "./taxGuideData";

const CATEGORY_COUNTS = {
  all: taxGuideCountries.length,
  territorial: taxGuideCountries.filter((country) => country.category === "territorial").length,
  "flat-rate": taxGuideCountries.filter((country) => country.category === "flat-rate").length,
  treaty: taxGuideCountries.filter((country) => country.category === "treaty").length,
};

export default function TaxGuideClient() {
  const [activeTab, setActiveTab] = useState<TaxCategory>("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeTab === "all") {
      return taxGuideCountries;
    }

    return taxGuideCountries.filter((country) => country.category === activeTab);
  }, [activeTab]);

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <div className="tg-hero">
        <div className="tg-hero-kicker">The Money File · Tax Strategies for Retirees Abroad</div>

        <h1 className="tg-hero-title">
          35 Countries Where Retirees Can Legally Stretch Their Retirement Income Abroad
        </h1>

        <div className="tg-hero-body">
          <p>Retiring abroad is not just about where life costs less.</p>

          <p>
            It is about where your retirement income may go further — after taxes, residency rules,
            healthcare costs, and visa requirements are considered.
          </p>

          <p>
            This guide compares 35 countries with territorial tax systems, flat-rate retiree
            programs, U.S. treaty advantages, and retirement visa pathways — so you can see where
            Social Security, pension income, and savings may stretch further before you choose your
            next chapter.
          </p>
        </div>

        <div className="tg-hero-byline">
          <strong>Educational Guide Only</strong> · Not tax or legal advice ·{" "}
          <strong>Consult a qualified international tax advisor before making any decisions</strong>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link href="/">Golden Horizons</Link> › Tax Guide
      </div>

      {/* SECTION 2 — U.S. VS. THE WORLD */}
      <div className="tg-compare">
        <div className="tg-compare-header">
          The Benchmark: U.S. Retirement Costs vs. The 35 Destinations
        </div>

        <div className="tg-compare-grid">
          <div className="tg-compare-col">
            <div className="tg-compare-col-title">🇺🇸 The High-Tax U.S. Retirement Baseline</div>

            <div className="tg-compare-col-stat">Federal tax + possible state tax exposure</div>
            <div className="tg-compare-col-stat">High property taxes in many states</div>
            <div className="tg-compare-col-stat">Higher healthcare and insurance costs</div>
            <div className="tg-compare-col-stat">Higher monthly cost of living</div>
            <div className="tg-compare-col-stat">
              Retirement income can shrink quickly before lifestyle spending
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#8b6914",
                marginTop: 12,
                fontStyle: "italic",
                fontFamily: "EB Garamond, serif",
              }}
            >
              This is a general U.S. retirement-cost baseline. Actual taxes and expenses vary by
              state, income level, healthcare coverage, and housing situation.
            </div>
          </div>

          <div className="tg-compare-vs">vs.</div>

          <div className="tg-compare-col">
            <div className="tg-compare-col-title">🌍 The 35 Countries Compared</div>

            <div className="tg-compare-col-stat">
              <strong>Territorial systems:</strong> foreign-source income may not be taxed locally
            </div>
            <div className="tg-compare-col-stat">
              <strong>Flat-rate programs:</strong> special rates of 7–20% for qualifying retirees
            </div>
            <div className="tg-compare-col-stat">
              <strong>Treaty advantages:</strong> IRS-approved mechanisms to reduce double taxation
            </div>
            <div className="tg-compare-col-stat">
              <strong>Retiree visa programs:</strong> structured pathways with defined requirements
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#8b6914",
                marginTop: 12,
                fontStyle: "italic",
                fontFamily: "EB Garamond, serif",
              }}
            >
              All claims are subject to your residency status, income type, and current law. Verify
              official rules before making any tax or residency decisions.
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 — FILTER TABS */}
      <div className="tg-tabs-wrap">
        <div className="tg-tabs-header">Filter by tax strategy</div>

        <div className="tg-tabs" role="tablist">
          {[
            {
              key: "all" as TaxCategory,
              name: "All Countries",
              count: CATEGORY_COUNTS.all,
              desc: "All 35 retirement destinations",
            },
            {
              key: "territorial" as TaxCategory,
              name: "Territorial Tax",
              count: CATEGORY_COUNTS.territorial,
              desc: "Countries that may not tax foreign-source income",
            },
            {
              key: "flat-rate" as TaxCategory,
              name: "Flat-Rate Programs",
              count: CATEGORY_COUNTS["flat-rate"],
              desc: "Special rates and programs for qualifying retirees",
            },
            {
              key: "treaty" as TaxCategory,
              name: "Treaty Advantages",
              count: CATEGORY_COUNTS.treaty,
              desc: "Countries with active US bilateral tax treaties",
            },
          ].map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tg-tab${activeTab === tab.key ? " active" : ""}`}
            >
              <div className="tg-tab-name">{tab.name}</div>
              <div className="tg-tab-count">{tab.count} countries</div>
              <div className="tg-tab-desc">{tab.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 4 — COUNTRY CARDS */}
      <div className="section-banner">Retirement Tax Destinations · {filtered.length} Countries</div>

      <div className="tg-grid" role="tabpanel" aria-label={`${activeTab} countries`}>
        {filtered.map((country) => {
          const isExpanded = expandedCard === country.slug;
          const shortHook = country.cardHook.split(". ")[0] + ".";

          return (
            <div key={country.slug} className={`tg-card${isExpanded ? " tg-card--open" : ""}`}>
              <div
                className="tg-card-img"
                style={{
                  backgroundImage: `url(${
                    country.imageUrl ||
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                  })`,
                }}
                role="img"
                aria-label={country.imageAlt || country.country}
              />

              <div className="tg-flag" role="img" aria-label={`${country.country} flag`}>
                {country.flag}
              </div>

              <div className="tg-card-header">
                <div>
                  <div className="tg-name">{country.country}</div>
                  <div className="tg-region">{country.region}</div>
                </div>

                <span className={`tg-cat-label ${country.category}`}>{country.categoryLabel}</span>
              </div>

              <div className="tg-tax-badge">
                <span className="tg-tax-number">{country.taxDisplay}</span>
                <span className="tg-tax-sub">{country.taxDisplaySubtext}</span>
              </div>

              <div className="tg-hook-preview">{shortHook}</div>

              <button
                className="tg-card-toggle"
                onClick={() => setExpandedCard(isExpanded ? null : country.slug)}
                aria-expanded={isExpanded}
                aria-controls={`card-details-${country.slug}`}
              >
                {isExpanded ? "▲ Close details" : "▼ View details"}
              </button>

              {isExpanded && (
                <div id={`card-details-${country.slug}`} className="tg-card-details">
                  <div className="tg-angle">{country.taxAngle}</div>
                  <div className="tg-program">{country.program}</div>
                  <div className="tg-hook">{country.cardHook}</div>

                  <div className="tg-best-for">
                    <strong>Best For</strong>
                    {country.bestFor}
                  </div>

                  <div className="tg-verify">
                    Verify official rules before making tax or residency decisions.
                  </div>

                  {country.officialLink !== "#" ? (
                    <a
                      href={country.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tg-link"
                    >
                      {country.officialLinkLabel} {"↗"}
                    </a>
                  ) : (
                    <span className="tg-link-pending">
                      {country.officialLinkLabel}
                      <span className="tg-link-pending-label">Official Source Pending</span>
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SECTION 6 — EVIDENCE VAULT */}
      <div className="tg-evidence">
        <div className="tg-evidence-kicker">Preparation Guide</div>

        <h2 className="tg-evidence-title">Document Guide: Your Evidence Vault</h2>

        <p className="tg-evidence-sub">
          Most countries require a substantial documentation package for retirement residency
          applications. Here&rsquo;s what you typically need — though requirements vary by country.
          Always verify with official immigration and tax authorities in your destination country.
        </p>

        <div className="tg-evidence-grid">
          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">💰</span>
            <div className="tg-evidence-card-title">Proof of Income</div>
            <ul className="tg-evidence-list">
              <li>Social Security award letter</li>
              <li>Pension statements (last 3–6 months)</li>
              <li>Investment account statements</li>
              <li>IRS tax transcripts or returns</li>
              <li>Bank statements showing regular deposits</li>
            </ul>
          </div>

          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">🏠</span>
            <div className="tg-evidence-card-title">Housing Documentation</div>
            <ul className="tg-evidence-list">
              <li>Signed lease agreement (apostilled)</li>
              <li>Property purchase deed (if buying)</li>
              <li>Utility bills in your name</li>
              <li>Landlord contact information</li>
              <li>Proof of local address registration</li>
            </ul>
          </div>

          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">🪪</span>
            <div className="tg-evidence-card-title">Identity Documents</div>
            <ul className="tg-evidence-list">
              <li>Valid US passport (6+ months remaining)</li>
              <li>Certified birth certificate (apostilled)</li>
              <li>Marriage certificate (if applicable)</li>
              <li>Passport photos (check country specs)</li>
              <li>Consular notarization where required</li>
            </ul>
          </div>

          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">🏦</span>
            <div className="tg-evidence-card-title">Financial Records</div>
            <ul className="tg-evidence-list">
              <li>Bank statements (6–12 months)</li>
              <li>Proof of sufficient liquid assets</li>
              <li>Brokerage / investment account letters</li>
              <li>Wire transfer documentation</li>
              <li>Foreign bank account opening confirmation</li>
            </ul>
          </div>

          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">🔒</span>
            <div className="tg-evidence-card-title">Background &amp; Health</div>
            <ul className="tg-evidence-list">
              <li>FBI criminal background check (apostilled)</li>
              <li>State police clearance (some countries)</li>
              <li>Medical fitness certificate</li>
              <li>International health insurance proof</li>
              <li>Vaccination records where required</li>
            </ul>
          </div>

          <div className="tg-evidence-card">
            <span className="tg-evidence-icon">📋</span>
            <div className="tg-evidence-card-title">Tax &amp; Compliance Docs</div>
            <ul className="tg-evidence-list">
              <li>Last 2–3 years US tax returns</li>
              <li>FBAR filings (FinCEN 114) if applicable</li>
              <li>US tax compliance certification</li>
              <li>Foreign account disclosure documents</li>
              <li>Local tax registration (once established)</li>
            </ul>
          </div>
        </div>

        <div className="tg-disclaimer" style={{ marginTop: 24, marginBottom: 0 }}>
          <strong>Disclaimer:</strong> Document requirements vary widely by country, visa type, and
          individual circumstances. This checklist is a general educational guide only. Always verify
          specific requirements with the official immigration authority, embassy, or consulate of your
          destination country, and consult a qualified immigration attorney.
        </div>
      </div>

      {/* SECTION 7 — FAQ */}
      <div className="tg-faq">
        <div className="tg-ref-kicker">Common Questions</div>

        <h2 className="tg-faq-title">
          Frequently Asked Questions About Retiring Abroad &amp; Taxes
        </h2>

        {faqItems.map((item, index) => {
          const isOpen = expandedFaq === index;

          return (
            <div key={item.question} className={`tg-faq-item${isOpen ? " tg-faq-item--open" : ""}`}>
              <button
                type="button"
                className="tg-faq-q"
                onClick={() => setExpandedFaq(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className="tg-faq-arrow" aria-hidden="true">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div id={`faq-answer-${index}`} className="tg-faq-a">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SECTION 8 — NEWSLETTER CTA */}
      <div className="tg-free-guide-cta">
        <div className="tg-free-guide-eyebrow">Free Retirement Abroad Guide</div>

        <h2 className="tg-free-guide-title">
          Get the free guide before choosing where to retire.
        </h2>

        <p className="tg-free-guide-body">
          Compare costs, healthcare, visas, taxes, and lifestyle across top retirement countries.
        </p>

        <Link href="/?scrollTo=subscribe" className="tg-free-guide-button">
          Get the Free Guide →
        </Link>
      </div>

      {/* SECTION 9 — LEGAL DISCLAIMER */}
      <div className="tg-legal-notice">
        <div className="tg-legal-notice-eyebrow">Important Legal Disclaimer</div>

        <p className="tg-legal-notice-body">
          This guide is for general educational and informational purposes only. It does not
          constitute tax, legal, or financial advice and should not be relied upon as such. Tax laws,
          residency rules, and treaty provisions change frequently and vary significantly by
          individual circumstance. Golden Horizons is a retirement-abroad lifestyle publication — we
          are not tax advisors, attorneys, or CPAs. Before making any tax, financial, or residency
          decision, consult a qualified international tax attorney, a CPA experienced in US expat
          taxation, and/or a licensed immigration attorney in your destination country. All
          &ldquo;may qualify,&rdquo; &ldquo;may not be taxed,&rdquo; and similar language reflects
          general educational descriptions of how these systems work — not guarantees of any specific
          outcome for your situation.
        </p>
      </div>
    </div>
  );
}
