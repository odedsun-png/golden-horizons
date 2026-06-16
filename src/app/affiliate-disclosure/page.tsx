import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Affiliate Disclosure for Golden Horizons, including advertising, sponsorships, partner links, paid placements, and compensation disclosures.",
  alternates: {
    canonical: `${siteUrl}/affiliate-disclosure`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Affiliate Disclosure</span>
          <span>Updated May 4, 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>Affiliate Disclosure</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Disclosure:</strong> Affiliate, sponsor, and advertising relationships
            </span>
            <span className="issue-tag">
              <strong>Important:</strong> Some links may earn compensation
            </span>
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

        <article
          className="legal-article"
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "44px 24px 70px",
            background: "#f8f1df",
            borderLeft: "1px solid rgba(80, 57, 19, 0.18)",
            borderRight: "1px solid rgba(80, 57, 19, 0.18)",
          }}
        >
          <p className="kicker">Affiliate Disclosure</p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Affiliate Disclosure
          </h1>

          <p style={{ fontSize: 16, opacity: 0.75, marginBottom: 28 }}>
            Last updated: May 4, 2026 · Effective date: May 4, 2026
          </p>

          <div
            style={{
              border: "1px solid rgba(120, 82, 24, 0.35)",
              background: "#fff8e6",
              padding: "18px 20px",
              marginBottom: 34,
              fontSize: 18,
              lineHeight: 1.6,
            }}
          >
            <strong>Important:</strong> Golden Horizons may earn compensation
            from affiliate links, advertisements, sponsorships, partner
            messages, lead-generation arrangements, paid placements, or other
            commercial relationships. This does not cost you extra.
          </div>

          <section>
            <h2>1. Overview</h2>
            <p>
              Golden Horizons is an editorial publication and newsletter focused
              on retirement abroad, relocation, cost of living, healthcare,
              visas, housing, lifestyle, travel, and related general-interest
              content.
            </p>
            <p>
              Some articles, newsletters, guides, emails, pages, tools, or
              resources may include affiliate links, sponsor messages,
              advertisements, partner content, or paid placements.
            </p>
          </section>

          <section>
            <h2>2. Affiliate Links</h2>
            <p>
              Some links on Golden Horizons may be affiliate links. If you click
              one of these links and make a purchase, submit a form, request
              information, sign up for a service, or complete another qualifying
              action, Golden Horizons may receive a commission or referral fee.
            </p>
            <p>
              This compensation is paid by the third party and does not increase
              the price you pay.
            </p>
          </section>

          <section>
            <h2>3. Sponsored Content and Advertisements</h2>
            <p>
              Golden Horizons may display sponsored content, advertisements,
              paid placements, partner messages, newsletter sponsor blocks,
              native advertisements, or promotional content.
            </p>
            <p>
              Where appropriate, sponsored or paid content may be labeled as
              “Sponsored,” “Advertisement,” “Partner Message,” “Paid Placement,”
              “Affiliate Disclosure,” or similar wording.
            </p>
          </section>

          <section>
            <h2>4. Editorial Independence</h2>
            <p>
              Affiliate relationships, sponsors, advertisers, and commercial
              partners may influence which offers, links, or services are shown,
              but Golden Horizons aims to keep editorial content useful,
              reader-focused, and clearly presented.
            </p>
            <p>
              Compensation does not guarantee a positive review, ranking,
              recommendation, placement, or article mention.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Products and Services</h2>
            <p>
              Golden Horizons may link to third-party websites, advertisers,
              sponsors, affiliate partners, relocation services, insurance
              providers, travel companies, financial services, healthcare
              resources, real estate services, visa resources, or other external
              resources.
            </p>
            <p>
              We do not control third-party websites, products, prices,
              services, claims, policies, availability, customer service,
              refunds, privacy practices, security, or results.
            </p>
          </section>

          <section>
            <h2>6. Reader Responsibility</h2>
            <p>
              You are responsible for independently evaluating any product,
              service, destination, provider, offer, link, sponsor, advertiser,
              or third-party website before taking action.
            </p>
            <p>
              Always review the third party’s own terms, privacy policy,
              pricing, refund policy, disclosures, and qualifications before
              purchasing, subscribing, applying, booking, or submitting personal
              information.
            </p>
          </section>

          <section>
            <h2>7. No Professional Advice</h2>
            <p>
              Affiliate links, sponsor content, advertisements, and partner
              messages are not legal, financial, tax, medical, immigration,
              insurance, investment, real estate, retirement, or professional
              advice.
            </p>
            <p>
              Always verify important information with official sources and
              qualified professionals before making decisions.
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              Questions about this Affiliate Disclosure may be sent to:
            </p>
            <p>
              <strong>Golden Horizons</strong>
              <br />
              21-14 Greenwood Dr
              <br />
              Fair Lawn, NJ 07410
              <br />
              United States
              <br />
              Email:{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>
              <br />
              Website:{" "}
              <a href="https://golden-horizons.org/">
                https://golden-horizons.org/
              </a>
            </p>
          </section>
        </article>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>

          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>

          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>

            <Link href="/terms">Terms of Use</Link>
            <span>|</span>

            <Link href="/disclaimer">Disclaimer</Link>
            <span>|</span>

            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <span>|</span>

            <Link href="/editorial-policy">Editorial Policy</Link>
            <span>|</span>

            <Link href="/contact">Contact</Link>
          </div>

          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 8 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
