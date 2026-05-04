import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Terms of Use | Golden Horizons",
  description:
    "Terms of Use for Golden Horizons, including no professional advice, no reliance, limitation of liability, arbitration, class action waiver, affiliate disclosures, and newsletter terms.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Terms of Use</span>
          <span>Updated May 4, 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>Legal Terms</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Terms:</strong> Your use of Golden Horizons
            </span>
            <span className="issue-tag">
              <strong>Important:</strong> General information only — no
              professional advice
            </span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/?scrollTo=subscribe">Subscribe Free</Link>
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
          <p className="kicker">Legal Terms</p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Terms of Use
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
            <strong>Important:</strong> These Terms of Use govern your use of
            Golden Horizons. Our content is general editorial information only
            and is not legal, financial, tax, medical, immigration, real estate,
            insurance, investment, or retirement advice. Always verify important
            information with official sources and qualified professionals before
            making decisions.
          </div>

          <section>
            <h2>1. Acceptance of These Terms</h2>
            <p>
              By accessing, browsing, subscribing to, downloading from, or using
              golden-horizons.org, the Golden Horizons newsletter, any free
              guides, calculators, comparison tools, rankings, articles,
              destination profiles, email communications, advertisements, or
              related content, you agree to be bound by these Terms of Use.
            </p>
            <p>
              If you do not agree to these Terms, you should stop using the
              Website and Services immediately. These Terms incorporate by
              reference our Privacy Policy, Disclaimer, Affiliate Disclosure, and
              Editorial Policy.
            </p>
          </section>

          <section>
            <h2>2. About Golden Horizons</h2>
            <p>
              Golden Horizons is an editorial publication focused on retirement
              abroad, relocation, cost of living, healthcare access, lifestyle,
              visas, housing, travel, and destination research for Americans
              considering life overseas.
            </p>
            <p>
              Golden Horizons does not provide personalized professional advice,
              consulting, representation, financial planning, immigration
              services, healthcare services, legal services, tax services,
              insurance services, or real estate services.
            </p>
          </section>

          <section>
            <h2>3. General Informational Purpose Only</h2>
            <p>
              The content on Golden Horizons is provided for general
              informational, educational, editorial, and entertainment purposes
              only. Our articles, guides, destination profiles, calculators,
              rankings, newsletters, and tools are intended to educate and
              inspire, not to serve as professional advice or instructions.
            </p>
            <p>
              The information is not customized to your personal finances,
              health, citizenship, immigration status, tax position, family
              circumstances, housing needs, retirement goals, or risk tolerance.
            </p>
          </section>

          <section>
            <h2>
              4. No Legal, Financial, Tax, Medical, Immigration, or Professional
              Advice
            </h2>
            <p>
              Nothing on this Website or in our newsletter constitutes legal,
              financial, tax, accounting, medical, healthcare, mental health,
              immigration, insurance, investment, securities, real estate,
              retirement planning, estate planning, or other professional
              advice.
            </p>
            <p>
              You should consult qualified, licensed professionals in the
              relevant jurisdiction before making decisions involving
              relocation, visas, residency, retirement, taxes, healthcare,
              insurance, investments, housing, banking, estate planning, or
              finances.
            </p>
          </section>

          <section>
            <h2>5. No Reliance; Independent Verification Required</h2>
            <p>
              You agree that you will not rely on Golden Horizons as the sole or
              primary basis for any relocation, retirement, immigration,
              healthcare, financial, tax, insurance, housing, banking,
              investment, real estate, legal, or lifestyle decision.
            </p>
            <p>
              You are solely responsible for independently verifying all
              information with official government sources, licensed
              professionals, local authorities, healthcare providers, financial
              institutions, immigration counsel, tax professionals, insurance
              professionals, real estate experts, and other qualified advisors
              before taking action.
            </p>
          </section>

          <section>
            <h2>6. No Guarantee of Outcome</h2>
            <p>
              Golden Horizons does not guarantee that any destination, country,
              city, neighborhood, visa path, residency option, healthcare system,
              insurance plan, housing market, banking option, tax strategy,
              lifestyle choice, relocation plan, or retirement plan will be
              available, affordable, safe, suitable, lawful, or successful for
              you.
            </p>
            <p>
              Individual outcomes vary based on personal circumstances, changing
              laws, government discretion, documentation, health conditions,
              finances, exchange rates, housing availability, political
              conditions, inflation, safety conditions, and other factors outside
              our control.
            </p>
          </section>

          <section>
            <h2>7. Assumption of Risk</h2>
            <p>
              Relocation, retirement abroad, international healthcare,
              immigration applications, foreign real estate, currency exchange,
              banking, insurance, taxes, travel, and cross-border financial
              planning involve significant personal risk.
            </p>
            <p>
              You understand and agree that any decisions, actions, or inactions
              you take after reading or using Golden Horizons are made entirely
              at your own risk. Golden Horizons is not responsible for visa
              denials, medical outcomes, financial losses, tax consequences,
              housing disputes, safety issues, currency losses, relocation
              problems, insurance denials, legal issues, or other adverse
              outcomes.
            </p>
          </section>

          <section>
            <h2>8. Cost Estimates, Rankings, Calculators, and Tools</h2>
            <p>
              Any cost-of-living estimates, rent estimates, healthcare cost
              summaries, budget projections, calculators, checklists, rankings,
              destination scores, comparison tools, or editorial ratings are
              general planning tools only. They are based on assumptions,
              publicly available information, third-party sources, editorial
              judgment, and information that may be incomplete, outdated, or
              inaccurate.
            </p>
            <p>
              Prices, laws, visa rules, taxes, exchange rates, medical access,
              housing availability, safety conditions, and government policies
              can change frequently and without notice. You should verify all
              information before making decisions.
            </p>
          </section>

          <section>
            <h2>9. Newsletter Terms</h2>
            <p>
              By subscribing to the Golden Horizons newsletter, you agree to
              receive emails from Golden Horizons. These emails may include
              articles, destination ideas, cost estimates, guides, sponsor
              messages, affiliate links, advertisements, promotions, and partner
              content.
            </p>
            <p>
              You may unsubscribe at any time using the unsubscribe link included
              in our emails. We may modify, pause, or discontinue the newsletter
              at any time. Commercial emails should include accurate sender
              information, a clear unsubscribe mechanism, and a valid physical
              postal address where required by law.
            </p>
          </section>

          <section>
            <h2>10. Affiliate, Advertising, and Sponsor Relationships</h2>
            <p>
              Golden Horizons may earn revenue from advertising, sponsorships,
              affiliate links, partnerships, lead generation, paid placements,
              native advertising, referral arrangements, and other commercial
              relationships.
            </p>
            <p>
              If you click certain links or purchase products or services
              through links on the Website or in the newsletter, Golden Horizons
              may receive compensation at no additional cost to you.
              Compensation may be received from certain partners, but sponsored
              relationships do not determine our editorial conclusions.
            </p>
            <p>
              Sponsored content, partner features, affiliate links, paid
              placements, and native advertisements may appear on the Website or
              in the newsletter. Where appropriate, they should be labeled as
              “Sponsored,” “Advertisement,” “Partner Message,” “Affiliate
              Disclosure,” or similar wording.
            </p>
          </section>

          <section>
            <h2>11. Third-Party Links and Services</h2>
            <p>
              The Website and newsletter may contain links to third-party
              websites, advertisers, sponsors, affiliate partners, government
              pages, travel resources, relocation services, insurance providers,
              real estate services, financial services, and other external
              resources.
            </p>
            <p>
              Golden Horizons does not control, verify, endorse, or assume
              responsibility for the accuracy, content, policies, availability,
              claims, products, services, pricing, or practices of any third
              party. Your interactions with third parties are solely between you
              and the third party.
            </p>
          </section>

          <section>
            <h2>12. AI-Assisted Editorial Content</h2>
            <p>
              Golden Horizons may use artificial intelligence tools to assist
              with research organization, drafting, editing, formatting,
              headline development, image selection, summaries, article
              production, newsletter production, and other editorial workflows.
            </p>
            <p>
              AI-assisted content may contain errors, omissions, outdated
              information, incomplete context, or inaccurate summaries. Readers
              must independently verify important information with official
              sources and qualified professionals before making decisions.
            </p>
          </section>

          <section>
            <h2>13. Intellectual Property</h2>
            <p>
              All content on the Website and in the newsletter, including text,
              articles, graphics, logos, images, photographs, rankings,
              calculators, downloads, guides, audio, video, design, layout, code,
              and the Golden Horizons name and brand, is owned by Golden
              Horizons or its licensors and is protected by copyright, trademark,
              and other intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, scrape, distribute, republish,
              modify, sell, license, or create derivative works from our content
              without prior written permission. Brief quotations with proper
              attribution and a link back to the original article are permitted
              under fair use principles.
            </p>
          </section>

          <section>
            <h2>14. Permitted Use</h2>
            <p>
              You may use the Website and Services for lawful, personal,
              non-commercial purposes. You agree not to misuse the Website,
              interfere with its operation, attempt unauthorized access, scrape
              content without permission, introduce malware, impersonate others,
              violate third-party rights, or use the Website in any way that
              could harm Golden Horizons or another person.
            </p>
          </section>

          <section>
            <h2>15. User Submissions and Communications</h2>
            <p>
              If you submit comments, questions, feedback, story ideas, emails,
              testimonials, or other communications to Golden Horizons, you grant
              us the right to review, edit, respond to, store, and use those
              communications for business, editorial, operational, and legal
              purposes, subject to our Privacy Policy.
            </p>
            <p>
              You are responsible for ensuring that anything you submit does not
              violate the rights of any third party, contain unlawful material,
              or include confidential information you do not want shared.
            </p>
          </section>

          <section>
            <h2>16. Privacy</h2>
            <p>
              Your use of Golden Horizons is also governed by our Privacy Policy,
              which explains how we collect, use, store, and protect personal
              information. Please review the Privacy Policy before using the
              Website or subscribing to the newsletter.
            </p>
          </section>

          <section>
            <h2>17. “As Is” Basis; No Warranties</h2>
            <p>
              The Website, newsletter, downloads, articles, guides, rankings,
              calculators, advertisements, links, and related content are
              provided “as is” and “as available,” with all faults and without
              warranties of any kind, whether express, implied, or statutory.
            </p>
            <p>
              To the maximum extent permitted by law, Golden Horizons disclaims
              all warranties, including warranties of accuracy, completeness,
              reliability, merchantability, fitness for a particular purpose,
              title, non-infringement, security, availability, and error-free
              operation.
            </p>
          </section>

          <section>
            <h2>18. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Golden Horizons,
              its owners, operators, editors, writers, contributors, partners,
              affiliates, advertisers, sponsors, service providers, and licensors
              shall not be liable for any direct, indirect, incidental, special,
              consequential, exemplary, punitive, or enhanced damages arising out
              of or relating to your use of the Website, newsletter, Services, or
              content.
            </p>
            <p>
              This includes, without limitation, damages related to relocation
              decisions, visa denials, tax consequences, healthcare outcomes,
              medical issues, financial losses, currency fluctuations, real
              estate transactions, housing disputes, safety issues, insurance
              disputes, business interruption, lost profits, lost data, emotional
              distress, property damage, third-party services, external links,
              cyber incidents, or reliance on any content.
            </p>
            <p>
              In all cases, the total aggregate liability of Golden Horizons for
              any claim arising out of or relating to the Website, newsletter, or
              Services shall not exceed the greater of one hundred U.S. dollars
              ($100.00 USD) or the amount you paid directly to Golden Horizons in
              the twelve months preceding the event giving rise to the claim.
            </p>
          </section>

          <section>
            <h2>19. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Golden Horizons,
              its owners, operators, editors, writers, contributors, affiliates,
              partners, advertisers, sponsors, licensors, and service providers
              from and against any claims, damages, losses, liabilities,
              judgments, settlements, costs, and expenses, including reasonable
              attorneys&rsquo; fees, arising out of or related to your use of the
              Website, your reliance on content, your violation of these Terms,
              your violation of law, your dealings with third parties, or your
              decisions involving relocation, retirement, healthcare,
              immigration, housing, taxes, insurance, finances, or travel.
            </p>
          </section>

          <section>
            <h2>20. Individual Responsibility; No Common Reliance</h2>
            <p>
              Golden Horizons provides general editorial content to a broad
              audience and does not provide individualized advice,
              recommendations, instructions, or professional services. Any
              decision you make is based on your own independent judgment,
              personal circumstances, verification, and consultation with your
              own professionals.
            </p>
            <p>
              You acknowledge that reliance, suitability, damages, causation,
              decision-making, and outcomes are inherently individualized issues
              that vary from person to person.
            </p>
          </section>

          <section>
            <h2>21. Changes to the Website and Terms</h2>
            <p>
              Golden Horizons may update, revise, suspend, remove, or discontinue
              any content, feature, newsletter, guide, calculator, tool, or
              Service at any time without notice. We may also modify these Terms
              by posting a revised version on the Website.
            </p>
            <p>
              Your continued use of the Website or Services after changes are
              posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>22. Age Requirement</h2>
            <p>
              The Website and Services are intended for adults 18 years of age or
              older. The Website is not directed to children under 13, and Golden
              Horizons does not knowingly collect personal information from
              children under 13.
            </p>
          </section>

          <section>
            <h2>23. Governing Law</h2>
            <p>
              These Terms and any dispute arising out of or relating to the
              Website, newsletter, Services, or content shall be governed by the
              laws of the State of New Jersey and the United States, without
              regard to conflict-of-laws principles.
            </p>
            <p>
              Any legal action, claim, or dispute not subject to arbitration
              shall be brought exclusively in the state or federal courts located
              in Bergen County, New Jersey, and you consent to personal
              jurisdiction and venue in those courts.
            </p>
          </section>

          <section>
            <h2>
              24. Binding Arbitration, Class Action Waiver, and Jury Trial
              Waiver
            </h2>
            <p>
              To the fullest extent permitted by applicable law, you and Golden
              Horizons agree that any dispute, claim, or controversy arising out
              of or relating to the Website, newsletter, Services, content,
              downloads, calculators, rankings, recommendations, affiliate
              links, advertisements, or these Terms shall be resolved exclusively
              through final and binding individual arbitration, rather than in
              court.
            </p>
            <p>
              The arbitration shall be administered by the American Arbitration
              Association under its applicable Consumer Arbitration Rules, unless
              another arbitration provider is mutually agreed upon.
            </p>
            <p>
              <strong>No Class Actions.</strong> You and Golden Horizons agree
              that each party may bring claims against the other only in an
              individual capacity and not as a plaintiff, class member,
              representative, or participant in any class action, collective
              action, consolidated action, private attorney general action, or
              representative proceeding.
            </p>
            <p>
              <strong>No Jury Trial.</strong> You and Golden Horizons knowingly
              and voluntarily waive any right to a trial by jury.
            </p>
            <p>
              Nothing in this section limits any non-waivable rights you may have
              under applicable law. Either party may seek injunctive or equitable
              relief in court for intellectual property misuse, unauthorized
              scraping, misuse of content, security threats, or to enforce an
              arbitration award.
            </p>
          </section>

          <section>
            <h2>25. Severability</h2>
            <p>
              If any provision of these Terms is held invalid, illegal, or
              unenforceable, that provision shall be severed and the remaining
              provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2>26. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy, Disclaimer,
              Affiliate Disclosure, and Editorial Policy, constitute the entire
              agreement between you and Golden Horizons regarding the Website and
              Services.
            </p>
          </section>

          <section>
            <h2>27. Contact</h2>
            <p>
              Questions about these Terms may be sent to:
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
