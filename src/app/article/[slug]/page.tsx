import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { parseMarkdownArticle, getAllMarkdownSlugs } from "@/lib/markdown";
import { getArticleBySlug, getAllArticles } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────────
// Static params: combine Markdown slugs + hardcoded data slugs
// ─────────────────────────────────────────────

export function generateStaticParams() {
  const mdSlugs = getAllMarkdownSlugs().map((slug) => ({ slug }));
  const dataSlugs = getAllArticles().map((a) => ({ slug: a.slug }));

  // Deduplicate: Markdown files take priority
  const seen = new Set(mdSlugs.map((s) => s.slug));
  const combined = [...mdSlugs, ...dataSlugs.filter((s) => !seen.has(s.slug))];

  return combined;
}

// ─────────────────────────────────────────────
// Ad Slot Component
// ─────────────────────────────────────────────

function AdSlot({ slot }: { slot: number }) {
  return (
    <div
      style={{
        background: "#fffbf0",
        border: "1.5px dashed #d4af37",
        borderRadius: "6px",
        padding: "14px 20px",
        marginTop: "4px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "0.65rem",
          color: "#b8860b",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        Advertisement
      </div>
      <div
        style={{
          background: "#fef3c7",
          borderRadius: "4px",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          fontFamily: "Arial, sans-serif",
          fontSize: "0.82rem",
          color: "#92600a",
        }}
      >
        <span>Ad Slot {slot} — Google AdSense / Mediavine</span>
        <span style={{ fontSize: "0.7rem", color: "#b8860b" }}>728×90 or Responsive Display</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // ── Try Markdown file first ──
  const mdArticle = parseMarkdownArticle(slug);

  if (mdArticle) {
    const totalItems = mdArticle.items.length;

    return (
      <div style={{ minHeight: "100vh", background: "#faf7f2", color: "#2c2c2c" }}>
        <Header />

        <main
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px 80px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: "1.75",
          }}
        >
          {/* ── Meta Block ── */}
          <div
            style={{
              padding: "44px 0 28px",
              borderBottom: "3px solid #d4af37",
              marginBottom: "32px",
            }}
          >
            {/* Back link */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#1a3a2a",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontSize: "0.78rem",
                marginBottom: "20px",
              }}
            >
              <ArrowLeft style={{ width: "14px", height: "14px" }} />
              Back to Home
            </Link>

            {/* Category tag */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  background: "#d4af37",
                  color: "#1a3a2a",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  marginBottom: "16px",
                }}
              >
                {mdArticle.category}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                lineHeight: 1.22,
                color: "#1a3a2a",
                marginBottom: "18px",
              }}
            >
              {mdArticle.title}
            </h1>

            {/* Byline */}
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "0.8rem",
                color: "#888",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px 16px",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <span>
                By <strong style={{ color: "#1a3a2a" }}>Golden Horizons Team</strong>
              </span>
              <span style={{ color: "#ccc" }}>·</span>
              <span>Read time: 2–3 minutes</span>
              <span style={{ color: "#ccc" }}>·</span>
              <span>Published: {mdArticle.date}</span>
            </div>

          </div>

          {/* ── Intro ── */}
          {mdArticle.intro && (
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "1.05rem", color: "#3a3a3a" }}>{mdArticle.intro}</p>
            </div>
          )}

          {/* ── List Items ── */}
          {mdArticle.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "48px",
                paddingBottom: "36px",
                borderBottom: idx < mdArticle.items.length - 1 ? "1px solid #e8e0d0" : "none",
              }}
            >
              {/* Item number */}
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#d4af37",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {String(item.number).padStart(2, "0")}{" "}
                <span style={{ color: "#bbb", fontWeight: 400 }}>of {totalItems}</span>
              </div>

              {/* Item heading */}
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1a3a2a",
                  lineHeight: 1.28,
                  marginBottom: "18px",
                  paddingLeft: "16px",
                  borderLeft: "4px solid #d4af37",
                }}
              >
                {item.heading}
              </h2>

              {/* Item image */}
              {item.image && (
                <div style={{ marginBottom: "18px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "380px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      display: "block",
                      background: "#c8d8c0",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "0.7rem",
                      color: "#aaa",
                      marginTop: "5px",
                      paddingLeft: "2px",
                    }}
                  >
                    Photo: {item.imageCredit}
                  </div>
                </div>
              )}

              {/* Item paragraph */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#3a3a3a",
                  marginBottom: "20px",
                  maxWidth: "720px",
                }}
              >
                {item.paragraph}
              </p>

              {/* Ad slot */}
              <AdSlot slot={idx + 1} />
            </div>
          ))}

          {/* ── Closing block ── */}
          {mdArticle.closing && (
            <div
              style={{
                background: "#1a3a2a",
                color: "#fff",
                borderRadius: "8px",
                padding: "28px 32px",
                margin: "44px 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  marginBottom: "10px",
                }}
              >
                Golden Horizons
              </div>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#e8e0d0" }}>
                {mdArticle.closing}
              </p>
            </div>
          )}

          {/* ── Back to all stories ── */}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e8e0d0" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#1a3a2a",
                textDecoration: "none",
                fontFamily: "Arial, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <ArrowLeft style={{ width: "16px", height: "16px" }} />
              Back to all stories
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ── Fall back to hardcoded data.ts articles ──
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Article Card */}
          <div className="bg-white rounded-sm shadow-lg p-8 md:p-12">
            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: article.category.color }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {article.category.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">
              {article.title}
            </h1>

            {/* Intro */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
              {article.intro}
            </p>

            {/* Divider */}
            <div className="w-16 h-1 bg-primary mb-8" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.includes("**")) {
                  const headingMatch = paragraph.match(/^\*\*(.+?)\*\*/);
                  if (headingMatch) {
                    const heading = headingMatch[1];
                    const rest = paragraph.replace(/^\*\*.+?\*\*\n?/, "");
                    return (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold font-serif mb-2">{heading}</h3>
                        {rest && <p className="text-foreground/80 leading-relaxed">{rest}</p>}
                      </div>
                    );
                  }
                }

                if (paragraph.includes("\n- ")) {
                  const lines = paragraph.split("\n");
                  const items = lines.filter((line) => line.startsWith("- "));
                  const nonItems = lines.filter((line) => !line.startsWith("- ")).join(" ");

                  return (
                    <div key={index} className="mb-6">
                      {nonItems && (
                        <p className="text-foreground/80 leading-relaxed mb-2">{nonItems}</p>
                      )}
                      <ul className="list-disc list-inside space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-foreground/80">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Back Button Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">Back to all stories</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Spacer */}
        <div className="h-20" />
      </main>

      <Footer />
    </div>
  );
}
