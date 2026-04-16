import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { parseMarkdownArticle, getAllMarkdownSlugs } from "@/lib/markdown";
import { getArticleBySlug, getAllArticles } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ———————————————————————————————————————————
// Static params
// ———————————————————————————————————————————

export function generateStaticParams() {
  const mdSlugs = getAllMarkdownSlugs().map((slug) => ({ slug }));
  const dataSlugs = getAllArticles().map((a) => ({ slug: a.slug }));
  const seen = new Set(mdSlugs.map((s) => s.slug));
  const combined = [...mdSlugs, ...dataSlugs.filter((s) => !seen.has(s.slug))];
  return combined;
}

// ———————————————————————————————————————————
// Ad Slot Component
// ———————————————————————————————————————————

function AdSlot({ slot }: { slot: number }) {
  return (
    <div
      style={{
        background: "#faf8f4",
        border: "1px solid #e8e0d0",
        borderRadius: "4px",
        padding: "16px 20px",
        margin: "32px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "0.6rem",
          color: "#b8860b",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        Advertisement
      </div>
      <div
        style={{
          background: "#f5f0e8",
          borderRadius: "4px",
          height: "90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "0.78rem",
          color: "#92600a",
        }}
      >
        <span>Ad Slot {slot}</span>
        <span style={{ fontSize: "0.68rem", color: "#b8860b" }}>728x90 or Responsive Display</span>
      </div>
    </div>
  );
}

// ———————————————————————————————————————————
// Page Component
// ———————————————————————————————————————————

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdArticle = parseMarkdownArticle(slug);

  if (mdArticle) {

    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <div style={{ minHeight: "100vh", background: "#ffffff", color: "#1a1a1a" }}>
          <Header />

          <main
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "0 24px 80px",
            }}
          >
            {/* —— Category + Title Block —— */}
            <div style={{ padding: "48px 0 0" }}>
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#c8a84e",
                  }}
                >
                  {mdArticle.category}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontSize: "2.6rem",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "#1a1a1a",
                  marginBottom: "20px",
                  letterSpacing: "-0.5px",
                }}
              >
                {mdArticle.title}
              </h1>

              <div
                style={{
                  fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "0.82rem",
                  color: "#888",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px 12px",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <span>
                  By <strong style={{ color: "#1a1a1a", fontWeight: 600 }}>Golden Horizons Team</strong>
                </span>
                <span style={{ color: "#ddd" }}>&#8226;</span>
                <span>Read time: 2-3 minutes</span>
                <span style={{ color: "#ddd" }}>&#8226;</span>
                <span>{mdArticle.date}</span>
              </div>
            </div>

            {/* —— Hero Banner Image —— */}
            {mdArticle.image && (
              <div style={{ margin: "0 -24px 40px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mdArticle.image}
                  alt={mdArticle.title}
                  style={{
                    width: "100%",
                    height: "480px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            )}

            {/* —— Intro —— */}
            {mdArticle.intro && (
              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "1.12rem",
                    lineHeight: 1.8,
                    color: "#333",
                  }}
                >
                  {mdArticle.intro}
                </p>
              </div>
            )}

            {/* —— Sections —— */}
            {mdArticle.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "48px",
                }}
              >
                {/* Section heading */}
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    lineHeight: 1.3,
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: "2px solid #c8a84e",
                  }}
                >
                  {item.heading}
                </h2>

                {/* Section image — skip first item (Why Retire Here) */}
                {item.image && idx > 0 && (
                  <div style={{ margin: "0 -24px 24px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "440px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Section body text */}
                <div
                  style={{
                    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    color: "#333",
                  }}
                >
                  {item.paragraph.split(". ").reduce((acc: string[][], sentence, i, arr) => {
                    const lastGroup = acc[acc.length - 1];
                    if (!lastGroup || lastGroup.length >= 4) {
                      acc.push([sentence + (i < arr.length - 1 ? "." : "")]);
                    } else {
                      lastGroup.push(sentence + (i < arr.length - 1 ? "." : ""));
                    }
                    return acc;
                  }, []).map((group, gIdx) => (
                    <p
                      key={gIdx}
                      style={{
                        marginBottom: "18px",
                      }}
                    >
                      {group.join(" ")}
                    </p>
                  ))}
                </div>

                {/* Ad slot after each section */}
                <AdSlot slot={idx + 1} />
              </div>
            ))}

            {/* —— Closing block —— */}
            {mdArticle.closing && (
              <div
                style={{
                  background: "#1a3a2a",
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "32px 36px",
                  margin: "48px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#c8a84e",
                    marginBottom: "12px",
                  }}
                >
                  Golden Horizons
                </div>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    color: "#e0ddd5",
                  }}
                >
                  {mdArticle.closing}
                </p>
              </div>
            )}

            {/* —— Back link —— */}
            <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e8e0d0" }}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#1a3a2a",
                  textDecoration: "none",
                  fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                <ArrowLeft style={{ width: "16px", height: "16px" }} />
                Back to all stories
              </Link>
            </div>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  // —— Fall back to hardcoded data.ts articles ——
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="bg-white rounded-sm shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: article.category.color }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {article.category.name}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
              {article.intro}
            </p>

            <div className="w-16 h-1 bg-primary mb-8" />

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

        <div className="h-20" />
      </main>

      <Footer />
    </div>
  );
}
