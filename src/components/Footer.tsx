import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#e8decc",
        padding: "0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          background: "#1e1408",
          padding: "42px 36px",
          borderTop: "4px solid #c9a84c",
          borderLeft: "1px solid #d4b896",
          borderRight: "1px solid #d4b896",
        }}
      >
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#faf5e9",
            marginBottom: "8px",
            letterSpacing: "-1px",
          }}
        >
          Golden Horizons
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#c9a84c",
            margin: "0 auto 20px",
            fontFamily: "EB Garamond, serif",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          The retirement abroad magazine for Americans who aren&rsquo;t done yet.
        </p>

        <nav
          aria-label="Footer legal navigation"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px 14px",
            fontSize: "13px",
            color: "#c9a84c",
            fontFamily: "EB Garamond, serif",
            marginBottom: "20px",
          }}
        >
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          <span style={separatorStyle}>|</span>

          <Link href="/terms" style={linkStyle}>
            Terms of Use
          </Link>
          <span style={separatorStyle}>|</span>

          <Link href="/disclaimer" style={linkStyle}>
            Disclaimer
          </Link>
          <span style={separatorStyle}>|</span>

          <Link href="/affiliate-disclosure" style={linkStyle}>
            Affiliate Disclosure
          </Link>
          <span style={separatorStyle}>|</span>

          <Link href="/editorial-policy" style={linkStyle}>
            Editorial Policy
          </Link>
          <span style={separatorStyle}>|</span>

          <Link href="/contact" style={linkStyle}>
            Contact
          </Link>
        </nav>

        <p
          style={{
            fontSize: "11px",
            color: "#8b6914",
            fontFamily: "EB Garamond, serif",
            opacity: 0.7,
            margin: 0,
          }}
        >
          © 2026 Golden Horizons — All rights reserved
        </p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#c9a84c",
  textDecoration: "none",
} as const;

const separatorStyle = {
  opacity: 0.35,
} as const;
