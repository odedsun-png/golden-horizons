import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://golden-horizons.org";

export const metadata: Metadata = {
  title: "Thanks",
  description: "We've got your retirement-stage answer.",
  alternates: {
    canonical: `${siteUrl}/preferences/dreaming`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DreamingPreferencePage() {
  return (
    <main className="mag-page legal-page">
      <div className="site">
        <div className="topbar">
          <span>Golden Horizons</span>
          <span className="hide-mob">Preferences</span>
        </div>

        <div className="masthead">
          <Link href="/" className="mastname">
            Golden Horizons
          </Link>
        </div>

        <article
          className="legal-article"
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            padding: "60px 24px 80px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(32px, 6vw, 48px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Thanks — we&rsquo;ve got your answer.
          </h1>

          <p style={{ fontSize: 17, opacity: 0.78, marginBottom: 36, lineHeight: 1.6 }}>
            You let us know you&rsquo;re still just dreaming for now, and
            we&rsquo;ll use that to make Golden Horizons more relevant to
            where you are in your retirement journey.
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
            }}
          >
            Explore Golden Horizons →
          </Link>
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
