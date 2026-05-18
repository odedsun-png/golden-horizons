import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Golden Horizons, including no professional advice, no reliance, limitation of liability, arbitration, class action waiver, affiliate disclosures, AI-assisted content, newsletter terms, and reader responsibility.",
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
          <Link href="/food">Food</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="/#subscribe">Subscribe Free</Link>
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
            insurance, investment, retirement, or professional advice. Always
            verify important information with official sources and qualified
            professionals before making decisions.
          </div>

          <section>
            <h2>1. Acceptance of These Terms</h2>
            <p>
              By accessing, browsing, reading, subscribing to, downloading from,
              clicking links on, submitting information through, or otherwise
              using golden-horizons.org, the Golden Horizons newsletter, free
              guides, tools, articles, rankings, destination profiles,
              advertisements, emails, downloads, or related services, you agree
              to be bound by these Terms of Use.
            </p>
            <p>
              If you do not agree to these Terms, you should not use the Website,
              newsletter, downloads, tools, forms, or related services. Your
              continued use of Golden Horizons means you accept these Terms and
              any future updates posted on this page.
            </p>
          </section>

          <section>
            <h2>2. Related Policies Incorporated Into These Terms</h2>
            <p>
              These Terms incorporate by reference our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
              <Link href="/disclaimer">Disclaimer</Link>,{" "}
              <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>,
              and <Link href="/editorial-policy">Editorial Policy</Link>. By
              using Golden Horizons, you also agree to those policies.
            </p>
            <p>
              If there is a conflict between these Terms and another Golden
              Horizons policy, these Terms control unless the other policy
              clearly states otherwise.
            </p>
          </section>

          <section>
            <h2>3. About Golden Horizons</h2>
            <p>
              Golden Horizons is an editorial publication focused on retirement
              abroad, relocation, cost of living, healthcare access, lifestyle,
              visas, housing, travel, safety, budgeting, and destination
              research for Americans considering life overseas.
            </p>
            <p>
              Golden Horizons is not a law firm, financial advisory firm, tax
              firm, medical provider, immigration service, insurance broker,
              real estate brokerage, investment adviser, fiduciary, relocation
              agency, travel agency, or government agency.
            </p>
          </section>

          <section>
            <h2>4. General Informational Purpose Only</h2>
            <p>
              The content on Golden Horizons is provided for general
              informational, educational, editorial, and entertainment purposes
              only. Our articles, guides, destination profiles, calculators,
              rankings, checklists, newsletters, and tools are intended to
              educate and inspire, not to serve as personalized advice,
              instructions, guarantees, or professional recommendations.
            </p>
            <p>
              The information is not customized to your finances, health,
              citizenship, immigration status, family situation, tax position,
              housing needs, insurance needs, retirement goals, estate plan,
              investment profile, risk tolerance, or personal circumstances.
            </p>
          </section>

          <section>
            <h2>
              5. No Legal, Financial, Tax, Medical, Immigration, or Professional
              Advice
            </h2>
            <p>
              Nothing on Golden Horizons constitutes legal, financial, tax,
              accounting, medical, healthcare, mental health, immigration,
              insurance, investment, securities, real estate, retirement
              planning, estate planning, travel safety, or other professional
              advice.
            </p>
            <p>
              You should consult qualified, licensed professionals in the
              relevant jurisdiction before making decisions involving relocation,
              visas, residency, citizenship, retirement, taxes, healthcare,
              insurance, investments, housing, banking, estate planning, travel,
              or finances.
            </p>
          </section>

          <section>
            <h2>6. No Attorney-Client, Doctor-Patient, Fiduciary, or Advisory Relationship</h2>
            <p>
              Your use of Golden Horizons does not create an attorney-client
              relationship, doctor-patient relationship, fiduciary relationship,
              financial advisor-client relationship, tax advisor-client
              relationship, broker-client relationship, immigration
              representative relationship, or any other professional
              relationship.
            </p>
            <p>
              We do not represent you, advocate for you, file documents for you,
              manage money for you, provide medical care, give legal opinions,
              provide tax advice, or act on your behalf.
            </p>
          </section>

          <section>
            <h2>7. No Reliance; Independent Verification Required</h2>
            <p>
              You agree that you will not rely on Golden Horizons as the sole,
              primary, or final basis for any relocation, retirement,
              immigration, healthcare, tax, insurance, housing, banking,
              investment, real estate, legal, travel, safety, or lifestyle
              decision.
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
            <h2>8. No Guarantee of Outcome</h2>
            <p>
              Golden Horizons does not guarantee that any destination, country,
              city, neighborhood, visa path, residency option, healthcare system,
              doctor, hospital, insurance plan, housing market, banking option,
              tax strategy, lifestyle choice, relocation plan, travel plan, or
              retirement plan will be available, affordable, safe, suitable,
              lawful, profitable, accessible, or successful for you.
            </p>
            <p>
              Individual outcomes vary based on personal circumstances, changing
              laws, government discretion, documentation, health conditions,
              finances, exchange rates, inflation, housing availability,
              political conditions, safety conditions, weather events, provider
              decisions, and other factors outside our control.
            </p>
          </section>

          <section>
            <h2>9. Assumption of Risk</h2>
            <p>
              Relocation, retirement abroad, international healthcare,
              immigration applications, foreign real estate, renting or buying
              property abroad, currency exchange, banking, insurance, taxes,
              investments, travel, and cross-border financial planning involve
              significant personal risk.
            </p>
            <p>
              You understand and agree that any decisions, actions, or inactions
              you take after reading or using Golden Horizons are made entirely
              at your own risk. Golden Horizons is not responsible for visa
              denials, medical outcomes, financial losses, tax consequences,
              housing disputes, safety issues, currency losses, relocation
              problems, insurance denials, legal issues, travel disruptions,
              provider disputes, or other adverse outcomes.
            </p>
          </section>

          <section>
            <h2>10. Cost Estimates, Rankings, Calculators, and Tools</h2>
            <p>
              Any cost-of-living estimates, rent estimates, healthcare cost
              summaries, budget projections, calculators, checklists, rankings,
              destination scores, comparison tools, maps, tables, or editorial
              ratings are general planning tools only.
            </p>
            <p>
              These materials may be based on assumptions, publicly available
              information, third-party sources, editorial judgment, AI-assisted
              drafting, and information that may be incomplete, outdated,
              inaccurate, or not applicable to your situation.
            </p>
            <p>
              Prices, laws, visa rules, taxes, exchange rates, medical access,
              safety conditions, housing availability, infrastructure, and
              government policies can change frequently and without notice.
            </p>
          </section>

          <section>
            <h2>11. Destination and Lifestyle Content</h2>
            <p>
              Articles about countries, cities, neighborhoods, retirement
              communities, healthcare systems, expat lifestyles, housing markets,
              safety, climate, culture, and cost of living are editorial
              summaries only. They may not reflect current conditions or your
              personal experience.
            </p>
            <p>
              A destination that appears attractive in an article may not be
              safe, affordable, legal, available, medically appropriate,
              financially appropriate, or personally suitable for you.
            </p>
          </section>

          <section>
            <h2>12. Newsletter Terms</h2>
            <p>
              By subscribing to the Golden Horizons newsletter, downloading a
              free guide, submitting a form, or otherwise providing your email
              address, you agree to receive emails from Golden Horizons. These
              emails may include articles, destination ideas, cost estimates,
              free guides, sponsor messages, affiliate links, advertisements,
              partner content, promotional offers, and editorial updates.
            </p>
            <p>
              You may unsubscribe at any time using the unsubscribe link included
              in our emails. We may modify, pause, or discontinue the newsletter
              at any time. Commercial emails should include accurate sender
              information, a clear unsubscribe method, and a valid physical
              postal address where required by law.
            </p>
          </section>

          <section>
            <h2>13. Free Guides, Downloads, and Email Forms</h2>
            <p>
              Golden Horizons may offer free guides, reports, checklists,
              calculators, downloads, quizzes, and other resources in exchange
              for an email address or other information. These materials are
              general educational resources only and are not personalized advice.
            </p>
            <p>
              Submitting a form does not create a professional relationship with
              Golden Horizons. You are responsible for verifying all information
              before making decisions.
            </p>
          </section>

          <section>
            <h2>14. Affiliate, Advertising, and Sponsor Relationships</h2>
            <p>
              Golden Horizons may earn revenue from advertising, sponsorships,
              affiliate links, partnerships, lead generation, paid placements,
              native advertising, referral arrangements, newsletter sponsors,
              and other commercial relationships.
            </p>
            <p>
              If you click certain links, submit forms, request information,
              purchase products, book services, or sign up for third-party
              services through links on the Website or in the newsletter, Golden
              Horizons may receive compensation at no additional cost to you.
            </p>
            <p>
              Sponsored content, partner features, affiliate links, paid
              placements, native advertisements, and sponsor messages may appear
              on the Website or in the newsletter. Where appropriate, they
              should be labeled as “Sponsored,” “Advertisement,” “Partner
              Message,” “Paid Placement,” “Affiliate Disclosure,” or similar
              wording.
            </p>
          </section>

          <section>
            <h2>15. Third-Party Links, Offers, and Services</h2>
            <p>
              The Website and newsletter may contain links to third-party
              websites, advertisers, sponsors, affiliate partners, government
              pages, travel resources, relocation services, insurance providers,
              real estate services, financial services, healthcare resources,
              visa resources, and other external resources.
            </p>
            <p>
              Golden Horizons does not control, verify, guarantee, endorse, or
              assume responsibility for the accuracy, content, policies,
              availability, claims, products, services, pricing, security,
              privacy practices, or conduct of any third party. Your interactions
              with third parties are solely between you and the third party.
            </p>
          </section>

          <section>
            <h2>16. Not a Marketplace or Transaction Party</h2>
            <p>
              Golden Horizons is not a party to any transaction between you and a
              third-party provider, advertiser, sponsor, affiliate partner,
              relocation service, insurance company, real estate provider,
              financial service, travel provider, healthcare provider, or other
              company.
            </p>
            <p>
              We are not responsible for third-party pricing, refunds,
              cancellations, warranties, representations, service quality,
              customer service, claims, losses, disputes, or results.
            </p>
          </section>

          <section>
            <h2>17. AI-Assisted Editorial Content</h2>
            <p>
              Golden Horizons may use artificial intelligence tools to assist
              with research organization, drafting, editing, formatting,
              headline development, summaries, image selection, article
              production, newsletter production, SEO workflows, and other
              editorial or operational processes.
            </p>
            <p>
              AI-assisted content may contain errors, omissions, outdated
              information, incomplete context, hallucinated details, inaccurate
              summaries, or incorrect assumptions. Readers must independently
              verify important information with official sources and qualified
              professionals before making decisions.
            </p>
          </section>

          <section>
            <h2>18. Images and Visual Content</h2>
            <p>
              Images, illustrations, maps, graphics, videos, and other visual
              materials may be stock images, licensed images, illustrative
              images, AI-assisted visuals, screenshots, partner-provided assets,
              or editorial graphics.
            </p>
            <p>
              Visual content may not show the exact destination, building,
              street, neighborhood, property, healthcare facility, service,
              product, or condition discussed in an article. Do not rely on
              images alone when evaluating a destination, provider, property, or
              service.
            </p>
          </section>

          <section>
            <h2>19. Intellectual Property</h2>
            <p>
              All content on the Website and in the newsletter, including text,
              articles, graphics, logos, images, photographs, rankings,
              calculators, downloads, guides, audio, video, design, layout, code,
              databases, and the Golden Horizons name and brand, is owned by
              Golden Horizons or its licensors and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, scrape, crawl, distribute, republish,
              modify, sell, license, reverse engineer, or create derivative works
              from our content without prior written permission. Brief quotations
              with proper attribution and a link back to the original article
              may be permitted under applicable law.
            </p>
          </section>

          <section>
            <h2>20. Permitted Use</h2>
            <p>
              You may use the Website and Services for lawful, personal,
              non-commercial purposes only. You agree not to misuse the Website,
              interfere with its operation, attempt unauthorized access, scrape
              content without permission, introduce malware, impersonate others,
              violate third-party rights, or use the Website in any way that
              could harm Golden Horizons, our users, our partners, or another
              person.
            </p>
          </section>

          <section>
            <h2>21. Prohibited Uses</h2>
            <p>
              You agree not to use Golden Horizons to violate any law, infringe
              intellectual property rights, harvest data, scrape content at
              scale, send spam, interfere with site security, attempt to bypass
              technical protections, misrepresent your identity, submit harmful
              code, copy content for competing commercial use, or use our content
              to train, fine-tune, or populate artificial intelligence systems
              without written permission.
            </p>
          </section>

          <section>
            <h2>22. User Submissions and Communications</h2>
            <p>
              If you submit comments, questions, feedback, story ideas, emails,
              testimonials, correction requests, or other communications to
              Golden Horizons, you grant us the right to review, edit, respond
              to, store, display, publish, summarize, and use those
              communications for business, editorial, operational, promotional,
              and legal purposes, subject to our Privacy Policy.
            </p>
            <p>
              You are responsible for ensuring that anything you submit does not
              violate the rights of any third party, contain unlawful material,
              or include confidential information you do not want reviewed,
              stored, or used.
            </p>
          </section>

          <section>
            <h2>23. Privacy</h2>
            <p>
              Your use of Golden Horizons is also governed by our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>, which explains
              how we may collect, use, store, share, and protect personal
              information. Please review the Privacy Policy before using the
              Website, submitting a form, downloading a guide, or subscribing to
              the newsletter.
            </p>
          </section>

          <section>
            <h2>24. Security and Availability</h2>
            <p>
              We aim to operate the Website responsibly, but we do not guarantee
              that the Website, newsletter, forms, downloads, links, tools, or
              services will be secure, uninterrupted, error-free, virus-free, or
              available at all times.
            </p>
            <p>
              You are responsible for using appropriate security tools,
              protecting your devices, and avoiding suspicious links,
              downloads, or third-party websites.
            </p>
          </section>

          <section>
            <h2>25. International Users</h2>
            <p>
              Golden Horizons is operated for a primarily United States audience.
              If you access the Website from outside the United States, you are
              responsible for compliance with local laws, regulations, and
              restrictions.
            </p>
            <p>
              Information about another country may not be accurate for every
              region, city, visa type, healthcare provider, tax situation, or
              personal circumstance.
            </p>
          </section>

          <section>
            <h2>26. “As Is” Basis; No Warranties</h2>
            <p>
              The Website, newsletter, downloads, articles, guides, rankings,
              calculators, advertisements, links, forms, and related content are
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
            <h2>27. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Golden Horizons,
              its owners, operators, editors, writers, contributors, partners,
              affiliates, advertisers, sponsors, service providers, and licensors
              shall not be liable for any direct, indirect, incidental, special,
              consequential, exemplary, punitive, or enhanced damages arising out
              of or relating to your use of the Website, newsletter, Services,
              content, downloads, advertisements, links, forms, tools, or third
              party resources.
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
              any claim arising out of or relating to the Website, newsletter,
              content, or Services shall not exceed the greater of one hundred
              U.S. dollars ($100.00 USD) or the amount you paid directly to
              Golden Horizons in the twelve months preceding the event giving
              rise to the claim.
            </p>
          </section>

          <section>
            <h2>28. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Golden Horizons,
              its owners, operators, editors, writers, contributors, affiliates,
              partners, advertisers, sponsors, licensors, and service providers
              from and against any claims, damages, losses, liabilities,
              judgments, settlements, costs, and expenses, including reasonable
              attorneys&rsquo; fees, arising out of or related to your use of the
              Website, your reliance on content, your violation of these Terms,
              your violation of law, your submissions, your dealings with third
              parties, or your decisions involving relocation, retirement,
              healthcare, immigration, housing, taxes, insurance, finances, real
              estate, travel, or lifestyle choices.
            </p>
          </section>

          <section>
            <h2>29. Individual Responsibility; No Common Reliance</h2>
            <p>
              Golden Horizons provides general editorial content to a broad
              audience and does not provide individualized advice,
              recommendations, instructions, guarantees, or professional
              services. Any decision you make is based on your own independent
              judgment, personal circumstances, verification, risk tolerance, and
              consultation with your own professionals.
            </p>
            <p>
              You acknowledge that reliance, suitability, damages, causation,
              decision-making, and outcomes are inherently individualized issues
              that vary from person to person.
            </p>
          </section>

          <section>
            <h2>30. Changes to the Website and Terms</h2>
            <p>
              Golden Horizons may update, revise, suspend, remove, or discontinue
              any content, feature, newsletter, guide, calculator, tool,
              download, advertisement, form, or Service at any time without
              notice.
            </p>
            <p>
              We may modify these Terms by posting a revised version on this
              page. Your continued use of the Website, newsletter, or Services
              after changes are posted constitutes acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2>31. Age Requirement</h2>
            <p>
              The Website and Services are intended for adults 18 years of age or
              older. The Website is not directed to children under 13, and Golden
              Horizons does not knowingly collect personal information from
              children under 13.
            </p>
          </section>

          <section>
            <h2>32. Governing Law</h2>
            <p>
              These Terms and any dispute arising out of or relating to the
              Website, newsletter, Services, content, downloads, advertisements,
              affiliate links, or third-party resources shall be governed by the
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
              33. Binding Arbitration, Class Action Waiver, and Jury Trial
              Waiver
            </h2>
            <p>
              To the fullest extent permitted by applicable law, you and Golden
              Horizons agree that any dispute, claim, or controversy arising out
              of or relating to the Website, newsletter, Services, content,
              downloads, calculators, rankings, recommendations, affiliate
              links, advertisements, third-party resources, or these Terms shall
              be resolved exclusively through final and binding individual
              arbitration, rather than in court.
            </p>
            <p>
              The arbitration shall be administered by the American Arbitration
              Association under its applicable Consumer Arbitration Rules, unless
              another arbitration provider is mutually agreed upon. The
              arbitration shall take place in Bergen County, New Jersey, unless
              the parties agree to another location or remote procedure.
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
              and voluntarily waive any right to a trial by jury for any dispute
              that is not subject to arbitration.
            </p>
            <p>
              <strong>Small Claims Exception.</strong> Either party may bring an
              individual claim in small claims court if the claim qualifies and
              remains only in that court.
            </p>
            <p>
              Nothing in this section limits any non-waivable rights you may have
              under applicable law. Either party may seek injunctive or
              equitable relief in court for intellectual property misuse,
              unauthorized scraping, misuse of content, security threats, or to
              enforce an arbitration award.
            </p>
          </section>

          <section>
            <h2>34. Severability</h2>
            <p>
              If any provision of these Terms is held invalid, illegal, or
              unenforceable, that provision shall be severed or limited to the
              minimum extent necessary, and the remaining provisions shall remain
              in full force and effect.
            </p>
          </section>

          <section>
            <h2>35. No Waiver</h2>
            <p>
              Our failure to enforce any provision of these Terms does not
              constitute a waiver of that provision or any other provision. Any
              waiver must be in writing to be effective.
            </p>
          </section>

          <section>
            <h2>36. Entire Agreement</h2>
            <p>
              These Terms, together with the Privacy Policy, Disclaimer,
              Affiliate Disclosure, and Editorial Policy, constitute the entire
              agreement between you and Golden Horizons regarding the Website,
              newsletter, content, downloads, tools, and Services.
            </p>
          </section>

          <section>
            <h2>37. Contact</h2>
            <p>Questions about these Terms may be sent to:</p>
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
