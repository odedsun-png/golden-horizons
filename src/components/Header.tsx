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
        {/* ✅ REAL LOGO (FROM FOOTER) */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 260 52" width="150" height="42">
            <g transform="translate(24, 26)">
              <line x1="0" y1="-16" x2="0" y2="-12" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="7.5" y1="-14" x2="5.7" y2="-10.8" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="14" y1="-7.5" x2="10.8" y2="-5.7" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-7.5" y1="-14" x2="-5.7" y2="-10.8" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-14" y1="-7.5" x2="-10.8" y2="-5.7" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="16" y1="0" x2="12" y2="0" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-16" y1="0" x2="-12" y2="0" stroke="#D4A84B" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="-16" y1="4" x2="16" y2="4" stroke="#D4A84B" strokeWidth="1.2"/>
              <path d="M -9 4 A 9 9 0 0 1 9 4" fill="#D4A84B" stroke="#C8923A" strokeWidth="0.8"/>
            </g>
            <text x="48" y="24" fontFamily="Georgia, serif" fontSize="15" fontWeight="bold" letterSpacing="2.5" fill="#D4A84B">
              GOLDEN HORIZONS
            </text>
            <text x="49" y="37" fontFamily="Georgia, serif" fontSize="6.5" letterSpacing="2" fill="#8B7355">
              YOUR GUIDE TO RETIREMENT ABROAD
            </text>
          </svg>
        </Link>

        {/* RIGHT SIDE NAV */}
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

          {/* ✅ CTA SCROLL */}
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
  padding: "10px 16px",
  borderRadius: "6px",
  fontWeight: 700,
  fontSize: "13px",
  textDecoration: "none",
};
