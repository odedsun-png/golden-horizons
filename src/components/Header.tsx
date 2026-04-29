"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#1a1d21",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* ✅ ORIGINAL LOGO (unchanged) */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "2px solid #dcb770",
            }}
          />

          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              GOLDEN HORIZONS
            </div>

            <div
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Retirement Abroad
            </div>
          </div>
        </Link>

        {/* ✅ RIGHT SIDE NAV */}
        <nav
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link href="/articles" style={linkStyle}>
            Articles
          </Link>

          <Link href="/destinations" style={linkStyle}>
            Destinations
          </Link>

          {/* ✅ CTA (correct position + correct behavior) */}
          <a href="#subscribe" style={ctaStyle}>
            Get Free Guide
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "14px",
  textDecoration: "none",
};

const ctaStyle = {
  background: "#dcb770",
  color: "#1a1a1a",
  padding: "8px 14px",
  borderRadius: "6px",
  fontWeight: 700,
  fontSize: "12px",
  textDecoration: "none",
};
