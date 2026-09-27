import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Your Golden Horizons subscription is confirmed.",
  alternates: {
    canonical: `${siteUrl}/welcome`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WelcomePage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Welcome</span>
        </div>

        <div className="masthead">
          <Link href="/" className="mastname">
            Golden Horizons
          </Link>
        </div>

        <article
          className="legal-article"
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "60px 24px 80px",
            textAlign: "center",
            background: "#f8f1df",
            borderLeft: "1px solid rgba(80, 57, 19, 0.18)",
            borderRight: "1px solid rgba(80, 57, 19, 0.18)",
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#7a5218",
              marginBottom: 16,
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
            }}
          >
            Welcome to Golden Horizons
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(34px, 6vw, 56px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              color: "#1e1408",
              margin: "0 0 20px",
            }}
          >
            You&rsquo;re in. Your next chapter starts here.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#1e1408",
              opacity: 0.82,
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            Your subscription is confirmed — and your free retirement-abroad
            guide is on its way to your inbox.
          </p>

          <p
            style={{
              fontSize: 17,
              color: "#1e1408",
              opacity: 0.78,
              lineHeight: 1.7,
              marginBottom: 20,
              textAlign: "left",
            }}
          >
            Golden Horizons helps you discover places where retirement could
            go further — with practical information on real living costs,
            healthcare, visas, neighborhoods, food, and everyday life.
          </p>

          <p
            style={{
              fontSize: 17,
              color: "#1e1408",
              opacity: 0.78,
              lineHeight: 1.7,
              marginBottom: 20,
              textAlign: "left",
            }}
          >
            Over the next few days, we&rsquo;ll ask you two quick questions
            so we can make your emails more useful to you.
          </p>

          <p
            style={{
              fontSize: 17,
              color: "#1e1408",
              opacity: 0.78,
              lineHeight: 1.7,
              marginBottom: 40,
              textAlign: "left",
            }}
          >
            Add{" "}
            <a
              href="mailto:hello@golden-horizons.org"
              style={{ color: "#7a5218" }}
            >
              hello@golden-horizons.org
            </a>{" "}
            to your contacts so you don&rsquo;t miss the next edition.
          </p>

          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#1e1408",
              color: "#c9a84c",
              textDecoration: "none",
              fontSize: 15,
              letterSpacing: "0.02em",
              marginBottom: 20,
            }}
          >
            Explore Golden Horizons →
          </Link>

          <p
            style={{
              fontSize: 13,
              color: "#1e1408",
              opacity: 0.55,
              margin: 0,
            }}
          >
            Check your inbox for your free guide.
          </p>
        </article>

        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>
          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 8 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
