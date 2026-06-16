import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Golden Horizons editorial policy covering editorial standards, AI-assisted content, affiliate independence, corrections, sponsored content, source practices, and no professional advice.",
  alternates: {
    canonical: `${siteUrl}/editorial-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Editorial Policy</span>
          <span>Updated May 4, 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>Editorial Standards</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Editorial:</strong> Independent, useful, reader-first
              guidance
            </span>
            <span className="issue-tag">
              <strong>Important:</strong> General information only — no
              personalized advice
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
          <p className="kicker">Editorial Policy</p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Editorial Policy
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
            <strong>Important:</strong> Golden Horizons publishes general
            editorial information about retirement abroad, relocation, cost of
            living, healthcare access, visas, housing, travel, and lifestyle.
            Our content is not legal, financial, tax, medical, immigration, real
            estate, insurance, investment, or retirement advice. Readers must
            verify important information with official sources and qualified
            professionals before making decisions.
          </div>

          <section>
            <h2>1. Purpose of This Editorial Policy</h2>
            <p>
              This Editorial Policy explains how Golden Horizons approaches
              article creation, topic selection, source review, corrections,
              affiliate relationships, sponsored content, AI-assisted editorial
              workflows, and reader trust.
            </p>
            <p>
              Our goal is to provide useful, accessible, and transparent
              editorial content for Americans researching retirement abroad,
              relocation, cost of living, healthcare access, visa options,
              housing, travel, and lifestyle abroad.
            </p>
          </section>

          <section>
            <h2>2. Editorial Mission</h2>
            <p>
              Golden Horizons exists to help readers explore international
              retirement and relocation ideas with more context, clearer
              comparisons, and better questions to ask before making major life
              decisions.
            </p>
            <p>
              We aim to make complex topics easier to understand, but we do not
              replace official sources, licensed professionals, local
              authorities, government agencies, doctors, attorneys, tax
              professionals, immigration experts, financial advisors, insurance
              professionals, or real estate professionals.
            </p>
          </section>

          <section>
            <h2>3. General Information Only</h2>
            <p>
              All Golden Horizons content is for general informational,
              educational, editorial, and entertainment purposes only. Articles,
              guides, newsletters, rankings, cost estimates, destination
              comparisons, calculators, checklists, and downloadable materials
              are not personalized to any reader&rsquo;s financial situation,
              medical needs, immigration status, citizenship, family structure,
              tax position, housing needs, risk tolerance, or retirement goals.
            </p>
            <p>
              Readers should not treat any content as a recommendation,
              instruction, guarantee, or professional opinion. Important
              decisions should be reviewed with qualified professionals and
              verified through official sources.
            </p>
          </section>

          <section>
            <h2>4. Topic Selection</h2>
            <p>
              We select topics based on reader usefulness, search interest,
              editorial relevance, retirement-abroad trends, cost-of-living
              questions, healthcare and visa concerns, lifestyle considerations,
              safety questions, housing questions, and destination research
              needs.
            </p>
            <p>
              Topic selection may also be influenced by seasonal interest,
              newsletter themes, site analytics, reader questions, editorial
              planning, affiliate opportunities, sponsor categories, or business
              priorities. However, paid relationships should not determine our
              editorial conclusions.
            </p>
          </section>

          <section>
            <h2>5. Source Practices</h2>
            <p>
              Golden Horizons may use publicly available sources, official
              government websites, embassy or consulate information, tourism
              boards, healthcare resources, cost-of-living databases, local
              publications, reputable media outlets, provider websites, reader
              questions, expert commentary, and other third-party resources.
            </p>
            <p>
              Because rules, costs, availability, healthcare access, visa
              requirements, tax rules, and local conditions can change quickly,
              readers must verify important information directly with official
              sources and qualified professionals before acting.
            </p>
          </section>

          <section>
            <h2>6. Accuracy and Updates</h2>
            <p>
              We aim to publish useful and reasonably accurate information, but
              Golden Horizons does not guarantee that any article, guide,
              estimate, ranking, tool, newsletter, or downloadable resource is
              complete, current, error-free, or suitable for your circumstances.
            </p>
            <p>
              We may update, revise, correct, remove, or expand content at any
              time. Older articles may contain outdated information even if they
              remain available on the Website.
            </p>
          </section>

          <section>
            <h2>7. Corrections Policy</h2>
            <p>
              If we identify a material error, outdated statement, misleading
              passage, broken link, or important omission, we may correct,
              update, clarify, or remove the affected content.
            </p>
            <p>
              Readers who believe an article contains inaccurate, outdated, or
              misleading information may contact us at{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>
              . Please include the article title, URL, the issue you found, and
              any supporting source that helps us review the concern.
            </p>
          </section>

          <section>
            <h2>8. AI-Assisted Editorial Workflow</h2>
            <p>
              Golden Horizons may use artificial intelligence tools to assist
              with research organization, drafting, editing, formatting,
              headline development, image selection, summarization, newsletter
              production, article production, categorization, SEO planning, and
              other editorial workflows.
            </p>
            <p>
              AI-assisted content may contain errors, omissions, outdated
              information, hallucinated details, incomplete context, or
              inaccurate summaries. AI tools do not replace human judgment,
              official sources, or qualified professional advice. Readers must
              independently verify important information before making decisions.
            </p>
          </section>

          <section>
            <h2>9. Editorial Independence and Commercial Relationships</h2>
            <p>
              Golden Horizons may earn revenue through advertising,
              sponsorships, affiliate links, partner links, lead-generation
              arrangements, paid placements, referral relationships, native
              advertising, newsletter sponsors, and other commercial
              relationships.
            </p>
            <p>
              Compensation may be received from certain partners, but sponsored
              relationships do not determine our editorial conclusions. We aim to
              provide useful editorial content and to disclose commercial
              relationships where appropriate.
            </p>
            <p>
              Commercial relationships may influence which products, services,
              offers, companies, resources, destinations, links, or sponsor
              messages are mentioned, displayed, prioritized, or made available
              on the Website or in the newsletter.
            </p>
          </section>

          <section>
            <h2>10. Affiliate Links and Material Connections</h2>
            <p>
              Some links on Golden Horizons may be affiliate or partner links. If
              a reader clicks a link, submits a form, signs up for a service,
              requests information, purchases a product, or completes another
              qualifying action, Golden Horizons may receive compensation at no
              additional cost to the reader.
            </p>
            <p>
              Material connections should be disclosed in a way readers can
              notice and understand. Please review our{" "}
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> for
              more information.
            </p>
          </section>

          <section>
            <h2>11. Sponsored Content and Native Advertising</h2>
            <p>
              Sponsored content, partner messages, advertisements, paid
              placements, and native advertising may appear on Golden Horizons or
              in our newsletter. Where appropriate, promotional content should be
              labeled using terms such as “Sponsored,” “Advertisement,” “Partner
              Message,” “Paid Placement,” or similar language.
            </p>
            <p>
              We aim to avoid confusing readers about whether content is
              editorial or commercial. Promotional content should be clearly
              labeled so readers can distinguish editorial content from paid,
              sponsored, affiliate, or partner content.
            </p>
          </section>

          <section>
            <h2>12. Destination Rankings and Comparisons</h2>
            <p>
              Destination rankings, comparisons, scores, lists, and editorial
              ratings are based on editorial judgment, assumptions, available
              information, and selected criteria that may include cost of living,
              healthcare access, visa options, lifestyle, safety, housing,
              climate, travel convenience, community, taxes, infrastructure, and
              reader interest.
            </p>
            <p>
              Rankings and comparisons are not guarantees and are not
              personalized recommendations. A destination that appears favorable
              in an article may not be appropriate, safe, affordable, lawful, or
              suitable for your personal circumstances.
            </p>
          </section>

          <section>
            <h2>13. Images, Illustrations, and Visual Content</h2>
            <p>
              Images used on Golden Horizons may include licensed stock photos,
              public-domain images, editorial images, partner-provided assets,
              screenshots, AI-assisted visuals, or other visual resources.
              Images may be illustrative and may not show the exact property,
              street, business, healthcare facility, neighborhood, or destination
              discussed in an article.
            </p>
            <p>
              Readers should not rely on images alone to evaluate a destination,
              safety condition, housing option, healthcare provider, product, or
              service.
            </p>
          </section>

          <section>
            <h2>14. Healthcare, Visa, Tax, and Financial Topics</h2>
            <p>
              Articles that discuss healthcare, insurance, visas, residency,
              taxes, banking, investments, real estate, retirement planning, or
              financial decisions are intended only as general editorial
              information. These topics are highly personal and may be governed
              by changing laws, local regulations, professional standards, and
              individual circumstances.
            </p>
            <p>
              Always consult licensed professionals and official sources before
              acting on healthcare, immigration, tax, financial, insurance, real
              estate, or legal information.
            </p>
          </section>

          <section>
            <h2>15. Reader Comments, Feedback, and Story Ideas</h2>
            <p>
              Readers may submit feedback, questions, corrections, comments,
              story ideas, or other communications to Golden Horizons. We may
              review, edit, store, respond to, or use those communications for
              editorial, operational, legal, or business purposes, subject to our
              Privacy Policy.
            </p>
            <p>
              Please do not submit confidential, sensitive, private, medical,
              legal, financial, tax, immigration, or personally identifying
              information that you do not want reviewed or stored.
            </p>
          </section>

          <section>
            <h2>16. Conflicts of Interest</h2>
            <p>
              Golden Horizons may have commercial relationships with advertisers,
              sponsors, affiliates, partners, vendors, or service providers.
              Where relevant, we aim to disclose relationships that may affect
              how readers evaluate the content.
            </p>
            <p>
              Readers should assume that some content may be monetized through
              advertising, sponsorships, affiliate links, or other commercial
              relationships.
            </p>
          </section>

          <section>
            <h2>17. No Guaranteed Publication or Coverage</h2>
            <p>
              Golden Horizons is not obligated to publish, update, remove,
              promote, review, endorse, or respond to any submitted topic,
              correction request, company, destination, product, service,
              sponsor, or reader communication.
            </p>
            <p>
              We reserve editorial discretion over what we publish, revise,
              remove, feature, link to, promote, or decline.
            </p>
          </section>

          <section>
            <h2>18. Related Policies</h2>
            <p>
              Please also review our{" "}
              <Link href="/terms">Terms of Use</Link>,{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
              <Link href="/disclaimer">Disclaimer</Link>, and{" "}
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>.
            </p>
          </section>

          <section>
            <h2>19. Contact</h2>
            <p>
              Questions, corrections, or editorial concerns may be sent to:
            </p>
            <p>
              <strong>Golden Horizons</strong>
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
