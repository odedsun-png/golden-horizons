import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Privacy Policy | Golden Horizons",
  description:
    "Privacy Policy for Golden Horizons, including how we collect, use, store, share, and protect personal information for our website, newsletter, free guides, forms, affiliate links, analytics, and third-party services.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Privacy Policy</span>
          <span>Updated May 4, 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>Privacy Terms</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Privacy:</strong> How we handle your information
            </span>
            <span className="issue-tag">
              <strong>Important:</strong> We do not sell or rent personal
              information
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
          <p className="kicker">Privacy Terms</p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Privacy Policy
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
            <strong>Important:</strong> This Privacy Policy explains how Golden
            Horizons collects, uses, stores, shares, and protects personal
            information. Golden Horizons is an editorial publication and
            newsletter. We do not sell or rent personal information.
          </div>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Golden Horizons (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates golden-horizons.org and publishes a
              free email newsletter focused on retirement abroad, travel,
              lifestyle, cost-of-living information, healthcare considerations,
              visa topics, housing, relocation research, and related
              general-interest content.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we
              use it, how we protect it, and what rights you may have regarding
              your personal information.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <p>
              <strong>Email address</strong> — collected when you subscribe to
              our newsletter, request a free guide, download content, complete a
              quiz, or submit a form on our website.
            </p>
            <p>
              <strong>Voluntary information</strong> — if you contact us
              directly, we may receive information you choose to provide, such as
              your name, email address, message content, correction request,
              feedback, or other details included in your communication.
            </p>
            <p>
              <strong>Usage data</strong> — we may collect limited, anonymized,
              or aggregated information about how visitors interact with our
              website, including pages viewed, time spent on pages, referral
              source, browser type, device type, general location information,
              and site performance data.
            </p>
            <p>
              <strong>Cookies and similar technologies</strong> — our website may
              use cookies or similar tools to improve functionality, analyze
              traffic, understand reader engagement, and improve the user
              experience.
            </p>
            <p>
              We do not knowingly collect Social Security numbers, government
              identification numbers, payment information, detailed financial
              information, medical records, or sensitive personal information
              through this website.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <p>
              Send you the Golden Horizons newsletter, updates, guides, and
              related content.
            </p>
            <p>
              Deliver free downloads, resources, email sequences, checklists, or
              tools you requested.
            </p>
            <p>
              Improve our website, articles, newsletters, destination profiles,
              and reader experience.
            </p>
            <p>
              Understand which topics, destinations, tools, and resources are
              most useful to readers.
            </p>
            <p>
              Respond to questions, messages, correction requests, or inquiries
              sent to us.
            </p>
            <p>
              Monitor website performance, security, technical functionality, and
              analytics.
            </p>
            <p>
              Prevent abuse, spam, security issues, or misuse of our website and
              services.
            </p>
            <p>Comply with applicable legal obligations.</p>
            <p>We do not sell or rent your personal information.</p>
          </section>

          <section>
            <h2>4. Email Newsletter and Communications</h2>
            <p>
              By subscribing to Golden Horizons, downloading a free guide,
              submitting a form, or otherwise providing your email address, you
              agree to receive email communications from us.
            </p>
            <p>
              These emails may include newsletter content, retirement abroad
              articles, destination guides, cost-of-living information, free
              resources, website updates, sponsored messages, partner content,
              affiliate links, and promotional links.
            </p>
            <p>
              You can unsubscribe at any time by clicking the unsubscribe link
              included in every marketing email.
            </p>
          </section>

          <section>
            <h2>5. Email Service Provider</h2>
            <p>
              We use Brevo, formerly Sendinblue, to manage newsletter
              subscriptions and send emails.
            </p>
            <p>
              When you subscribe, your email address may be stored and processed
              by Brevo in accordance with its privacy and data protection
              practices. You can review Brevo&rsquo;s privacy policy on
              Brevo&rsquo;s official website.
            </p>
            <p>
              We rely on Brevo and similar service providers to help operate our
              newsletter, manage subscriber lists, send emails, process
              unsubscribe requests, and support email compliance.
            </p>
          </section>

          <section>
            <h2>6. Cookies and Analytics</h2>
            <p>
              Our website may use cookies, analytics tools, or similar
              technologies to understand how visitors use the site and to improve
              performance.
            </p>
            <p>Cookies may help us understand:</p>
            <p>Which pages are visited.</p>
            <p>How users navigate the site.</p>
            <p>What content performs best.</p>
            <p>General traffic and referral patterns.</p>
            <p>Technical performance issues.</p>
            <p>
              You can disable cookies through your browser settings. Some parts
              of the website may not function properly if cookies are disabled.
            </p>
            <p>
              We do not use cookies to knowingly collect sensitive personal
              information.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Links, Affiliate Links, and Sponsored Content</h2>
            <p>
              Golden Horizons may contain links to third-party websites,
              services, offers, affiliate partners, advertisers, sponsors,
              government resources, relocation services, travel resources,
              insurance providers, healthcare resources, financial services, real
              estate services, or other external resources.
            </p>
            <p>
              When you click a third-party link, you may be taken to a website
              that we do not control.
            </p>
            <p>
              We are not responsible for the privacy practices, security,
              accuracy, policies, availability, pricing, claims, products,
              services, or content of third-party websites.
            </p>
            <p>
              Some links may be affiliate links, meaning Golden Horizons may
              earn a commission if you click a link, submit information, sign up,
              purchase a product, or use a third-party service, at no additional
              cost to you.
            </p>
            <p>
              We encourage you to review the privacy policies and terms of any
              third-party websites you visit.
            </p>
          </section>

          <section>
            <h2>8. How We Share Information</h2>
            <p>We may share limited information only when necessary with:</p>
            <p>Email service providers.</p>
            <p>Website hosting providers.</p>
            <p>Analytics providers.</p>
            <p>Security and technical service providers.</p>
            <p>Form, download, quiz, or newsletter tools.</p>
            <p>
              Legal, regulatory, or compliance authorities if required by law.
            </p>
            <p>
              Service providers who help us operate the website, newsletter, or
              related tools.
            </p>
            <p>
              We do not sell, rent, or trade your email address to third parties
              for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2>9. Data Retention</h2>
            <p>
              We retain your email address and subscription information for as
              long as you remain subscribed to our newsletter.
            </p>
            <p>
              If you unsubscribe, request deletion, or ask us to remove your
              data, we will remove your information from active mailing lists
              within a reasonable period, generally within 30 days.
            </p>
            <p>
              Some limited information may be retained if required for legal,
              security, backup, audit, fraud prevention, unsubscribe compliance,
              or operational purposes.
            </p>
          </section>

          <section>
            <h2>10. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <p>Access the personal information we hold about you.</p>
            <p>Request correction of inaccurate information.</p>
            <p>Request deletion of your personal information.</p>
            <p>Unsubscribe from marketing emails.</p>
            <p>Object to or restrict certain types of processing.</p>
            <p>Request a copy of your data.</p>
            <p>Withdraw consent where processing is based on consent.</p>
            <p>
              To make a request, contact us at{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>
              .
            </p>
            <p>
              If you are located in the European Economic Area, United Kingdom,
              California, or another jurisdiction with privacy laws, you may have
              additional rights under applicable data protection laws.
            </p>
          </section>

          <section>
            <h2>11. California Privacy Rights</h2>
            <p>
              If you are a California resident, you may have rights under
              applicable California privacy laws, including the right to know
              what personal information is collected, the right to request
              deletion, the right to correct inaccurate information, and the
              right to opt out of certain data sharing where applicable.
            </p>
            <p>
              Golden Horizons does not sell personal information as commonly
              understood.
            </p>
            <p>
              To submit a privacy request, contact us at{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2>12. Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational
              measures to help protect personal information.
            </p>
            <p>
              However, no website, email system, database, online form,
              analytics tool, hosting provider, or internet transmission is
              completely secure.
            </p>
            <p>We cannot guarantee absolute security of your information.</p>
            <p>
              You are responsible for using secure devices, safe browsing
              practices, and caution when clicking third-party links.
            </p>
          </section>

          <section>
            <h2>13. Children&rsquo;s Privacy</h2>
            <p>Golden Horizons is intended for adults aged 18 and older.</p>
            <p>The website and newsletter are not directed to children under 13.</p>
            <p>
              We do not knowingly collect personal information from children
              under 13.
            </p>
            <p>
              If we become aware that we have collected personal information
              from a child under 13, we will take reasonable steps to delete it.
            </p>
          </section>

          <section>
            <h2>14. International Visitors</h2>
            <p>
              Golden Horizons is operated from the United States and is primarily
              intended for a United States audience.
            </p>
            <p>
              If you access the website from outside the United States, your
              information may be processed and stored in the United States or by
              service providers located in other jurisdictions.
            </p>
            <p>
              By using the website, submitting a form, downloading a guide, or
              subscribing to the newsletter, you understand that your information
              may be transferred to and processed in countries outside your place
              of residence.
            </p>
          </section>

          <section>
            <h2>15. Accuracy of Information You Provide</h2>
            <p>
              You are responsible for ensuring that any information you submit to
              Golden Horizons is accurate, current, and lawfully provided.
            </p>
            <p>
              Do not submit confidential, sensitive, medical, financial, legal,
              immigration, tax, or personal information that you do not want
              reviewed, stored, or processed.
            </p>
          </section>

          <section>
            <h2>16. User Communications and Submissions</h2>
            <p>
              If you contact Golden Horizons, send feedback, submit a correction
              request, provide a testimonial, respond to an email, or otherwise
              communicate with us, we may review, store, respond to, summarize,
              or use that communication for business, editorial, operational,
              legal, or support purposes, subject to this Privacy Policy.
            </p>
            <p>
              You should not submit confidential or sensitive information through
              general website forms or email.
            </p>
          </section>

          <section>
            <h2>17. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              When we make changes, we will update the &ldquo;Last
              updated&rdquo; date at the top of this page.
            </p>
            <p>
              Continued use of the website, newsletter, forms, downloads, or
              related services after updates means you accept the revised Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2>18. Contact</h2>
            <p>
              Questions about this Privacy Policy or privacy-related requests may
              be sent to:
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
