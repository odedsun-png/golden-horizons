import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Golden Horizons for newsletter questions, story ideas, advertising inquiries, privacy requests, legal notices, partnerships, and reader feedback.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Contact</span>
          <span>Updated May 4, 2026</span>
        </div>

        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>Contact Desk</span>
          </div>

          <Link href="/" className="mastname">
            Golden Horizons
          </Link>

          <div className="issue-line">
            <span className="issue-tag">
              <strong>Contact:</strong> Questions, feedback, partnerships, and
              support
            </span>
            <span className="issue-tag">
              <strong>Response:</strong> We typically reply within 1–2 business
              days
            </span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/">Cover</Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
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
          <p className="kicker">Contact Golden Horizons</p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Get in Touch
          </h1>

          <p style={{ fontSize: 18, opacity: 0.78, marginBottom: 28 }}>
            We&rsquo;d love to hear from you. We read every email and typically
            respond within 1–2 business days.
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
            <strong>Email us:</strong>{" "}
            <a href="mailto:hello@golden-horizons.org">
              hello@golden-horizons.org
            </a>
            <br />
            For questions, story ideas, advertising inquiries, partnership
            opportunities, privacy requests, legal notices, corrections, or
            general feedback.
          </div>

          <section>
            <h2>1. Newsletter Questions</h2>
            <p>
              Contact us if you need help subscribing, unsubscribing, updating
              your email preferences, receiving the newsletter, or accessing a
              free guide or download.
            </p>
            <p>
              For newsletter delivery issues, please also check your spam folder
              and add{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>{" "}
              to your contacts.
            </p>
          </section>

          <section>
            <h2>2. Story Suggestions</h2>
            <p>
              Have a destination you&rsquo;d like us to cover? Send us your
              story idea, retirement-abroad question, relocation topic, cost of
              living concern, healthcare question, visa topic, or reader request.
            </p>
            <p>
              We welcome thoughtful suggestions that help Americans research
              retirement abroad, relocation, travel, housing, healthcare,
              budgeting, safety, and lifestyle planning.
            </p>
          </section>

          <section>
            <h2>3. Corrections and Updates</h2>
            <p>
              If you believe an article contains outdated, incomplete, or
              inaccurate information, please contact us with the article title,
              page URL, the specific information you believe should be reviewed,
              and any relevant source or correction.
            </p>
            <p>
              Golden Horizons publishes general editorial information only.
              Readers should independently verify important information with
              official sources and qualified professionals before making
              decisions.
            </p>
          </section>

          <section>
            <h2>4. Advertising and Partnerships</h2>
            <p>
              Contact us if you are interested in advertising, sponsorships,
              affiliate partnerships, newsletter placements, partner messages,
              paid placements, content collaborations, or reaching an audience
              of Americans researching retirement abroad and relocation.
            </p>
            <p>
              Sponsored content, partner features, affiliate links, paid
              placements, native advertisements, and sponsor messages may appear
              on the Website or in the newsletter where appropriate.
            </p>
          </section>

          <section>
            <h2>5. Privacy and Legal Requests</h2>
            <p>
              For privacy requests, data deletion requests, disclosure questions,
              legal notices, or policy-related questions, contact us at{" "}
              <a href="mailto:hello@golden-horizons.org">
                hello@golden-horizons.org
              </a>
              .
            </p>
            <p>
              Please include enough detail for us to understand and review your
              request. Do not send sensitive personal, medical, financial, tax,
              immigration, or legal information through general email unless
              necessary.
            </p>
          </section>

          <section>
            <h2>6. Reader Feedback</h2>
            <p>
              Something we got right? Something we missed? Something we should
              update, explain better, or cover next? We welcome reader feedback
              and use it to improve future articles, newsletters, destination
              guides, and resources.
            </p>
          </section>

          <section>
            <h2>7. Response Time</h2>
            <p>
              We typically reply within 1–2 business days, although response
              times may vary based on volume, weekends, holidays, travel,
              technical issues, or the nature of the request.
            </p>
            <p>
              Sending a message does not create a professional, legal, medical,
              financial, tax, immigration, real estate, insurance, investment, or
              advisory relationship with Golden Horizons.
            </p>
          </section>

          <section>
            <h2>8. Contact Information</h2>
            <p>
              Questions, feedback, advertising inquiries, partnership requests,
              privacy requests, correction requests, and general messages may be
              sent to:
            </p>

            <p>
              <strong>Golden Horizons</strong>
              <br />
              Greenwood Dr
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
