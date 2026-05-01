import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "#1e1408",
        borderBottom: "3px solid #c9a84c",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "18px 28px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "block",
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "32px",
              fontWeight: 900,
              color: "#c9a84c",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            Golden Horizons
          </div>

          <div
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "10px",
              letterSpacing: "2.6px",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginTop: "5px",
              opacity: 0.9,
            }}
          >
            The Retirement Abroad Magazine
          </div>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#faf5e9",
              textDecoration: "none",
              fontFamily: "EB Garamond, serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Home
          </Link>

          <Link
            href="/articles"
            style={{
              color: "#faf5e9",
              textDecoration: "none",
              fontFamily: "EB Garamond, serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Articles
          </Link>

          <Link
            href="/destinations"
            style={{
              color: "#faf5e9",
              textDecoration: "none",
              fontFamily: "EB Garamond, serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Destinations
          </Link>

          <Link
            href="/#free-guide"
            style={{
              background: "#c9a84c",
              color: "#1e1408",
              textDecoration: "none",
              fontFamily: "EB Garamond, serif",
              fontSize: "15px",
              fontWeight: 700,
              padding: "12px 18px",
              borderRadius: "4px",
            }}
          >
            Get Free Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}
