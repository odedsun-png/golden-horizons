import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Insurance for Retirement Scouting Trips",
  description:
    "Planning a scouting trip abroad before you retire overseas? Compare travel-insurance options for trip cancellation, emergency medical care, and evacuation before you book.",
  alternates: { canonical: "https://golden-horizons.org/travel-insurance" },
};

// Golden Horizons — Travel Insurance landing page
// Route: app/travel-insurance/page.tsx
// Purpose: the newsletter "Sponsored" banner points HERE (clean URL, no query string),
// and this page carries the real Squaremouth affiliate link + quote widget + disclosure.
// Affiliate link is a plain <a> so its ?aid=24136 is preserved (no ESP rewrite, no double-?).

const AFFILIATE_URL = "https://www.squaremouth.com/?aid=24136";

export default function TravelInsurancePage() {
  return (
    <main
      style={{
        background: "#E8E1D5",
        color: "#1F1A16",
        fontFamily: "var(--font-garamond), Georgia, 'Times New Roman', serif",
        padding: "32px 16px",
      }}
    >
      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "#F7F1E6",
          border: "1px solid #1F1A16",
          padding: "0 0 32px",
        }}
      >
        {/* Kicker + title */}
        <header
          style={{
            padding: "28px 28px 20px",
            borderBottom: "4px double #1F1A16",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, letterSpacing: 2, color: "#7B6A45", textTransform: "uppercase" }}>
            Before You Book
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 38,
              lineHeight: 1.15,
              margin: "10px 0 8px",
            }}
          >
            Travel Insurance for a Retirement Scouting Trip
          </h1>
          <p style={{ fontSize: 18, margin: 0, color: "#3A332A" }}>
            If you&#8217;re flying abroad to test-drive a country before you move, it&#8217;s worth a
            few minutes to compare travel-insurance options first.
          </p>
        </header>

        <div style={{ padding: "24px 28px 0" }}>
          {/* Intro */}
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: "0 0 16px" }}>
            The flights and the rental are the easy part to plan. The piece most people skip is what
            happens if something goes wrong far from home &#8212; a canceled trip, a fall, a medical
            emergency, or the cost of getting back. Your regular coverage may work differently once
            you leave the country.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: "0 0 24px" }}>
            Depending on the plan, travel insurance may address risks such as{" "}
            <strong>trip cancellation</strong>, <strong>emergency medical care</strong>, or{" "}
            <strong>emergency evacuation</strong>. Coverage varies by plan, destination, and
            circumstances, and the policy documents are what control what&#8217;s actually covered
            &#8212; so it&#8217;s worth comparing plans and reading the terms.
          </p>

          {/* Primary CTA */}
          <div
            style={{
              background: "#1F1A16",
              padding: "26px 22px",
              textAlign: "center",
              margin: "0 0 12px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#FFFFFF",
                fontSize: 22,
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              Compare travel-insurance plans side by side
            </div>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{
                background: "#CBB47B",
                color: "#111",
                padding: "14px 28px",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "bold",
                fontSize: 17,
                border: "1px solid #F7F1E6",
              }}
            >
              Compare Plans on Squaremouth &#8594;
            </a>
          </div>

          {/* Affiliate disclosure — directly with the link, per FTC */}
          <p style={{ fontSize: 14, lineHeight: 1.5, color: "#5E4B32", margin: "0 0 28px", textAlign: "center" }}>
            <strong>Affiliate disclosure:</strong> The link above is an affiliate link. If you buy a
            policy through it, we may earn a commission at no additional cost to you. Golden Horizons
            is not an insurer or insurance agent; Squaremouth is a comparison marketplace, and the
            policy documents control coverage.
          </p>

          {/* Optional quote widget slot */}
          <div
            style={{
              border: "1px dashed #7B6A45",
              padding: 20,
              margin: "0 0 28px",
              textAlign: "center",
              color: "#5E4B32",
              fontSize: 15,
            }}
          >
            {/*
              QUOTE WIDGET GOES HERE.
              In the Squaremouth Affiliate Portal → Additional Links & Banner Advertising,
              copy the quote/form widget embed code and paste it in place of this box.
              (Keep the affiliate disclosure above it.)
            */}
            Get an instant quote &#8212; comparison widget loads here.
          </div>

          {/* What to check */}
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 26,
              margin: "0 0 12px",
            }}
          >
            What to check before you buy
          </h2>
          <ul style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 28px", paddingLeft: 22 }}>
            <li>Whether the plan covers your destination and the full length of your stay</li>
            <li>Emergency medical limits and how pre-existing conditions are handled</li>
            <li>Whether emergency evacuation and repatriation are included</li>
            <li>Trip-cancellation terms &#8212; what reasons qualify, and for how much</li>
            <li>Exclusions, limits, and eligibility rules in the policy documents</li>
          </ul>

          {/* Important information notice */}
          <div style={{ borderTop: "3px double #1F1A16", paddingTop: 18 }}>
            <div
              style={{
                fontSize: 13,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              Important Information Notice
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "#3A332A", margin: "0 0 8px" }}>
              Golden Horizons provides general editorial and educational information only. We do not
              provide insurance, legal, tax, financial, immigration, medical, or retirement advice,
              and we do not recommend any specific policy for your circumstances.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "#3A332A", margin: 0 }}>
              Coverage, prices, and terms vary and can change. Always review the policy documents and
              verify details with the insurer or Squaremouth before purchasing.{" "}
              <a href="https://golden-horizons.org/disclaimer" style={{ color: "#7B6A45", fontWeight: "bold" }}>
                Full Disclaimer &amp; Disclosures &#8594;
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
