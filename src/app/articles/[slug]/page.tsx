import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { parseMarkdownArticle, getAllMarkdownSlugs } from "@/lib/markdown";
import { getArticleBySlug, getAllArticles } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const mdSlugs = getAllMarkdownSlugs().map((slug) => ({ slug }));
  const dataSlugs = getAllArticles().map((a) => ({ slug: a.slug }));
  const seen = new Set(mdSlugs.map((s) => s.slug));
  const combined = [...mdSlugs, ...dataSlugs.filter((s) => !seen.has(s.slug))];
  return combined;
}

const FACTS = [
  "The average American can live comfortably in Portugal for $2,200/month — including rent, food, and healthcare.",
  "In Mexico's Lake Chapala region, a couple can live well on $2,500/month — with year-round spring-like weather.",
  "Croatia offers EU-quality healthcare at a fraction of U.S. costs, with many expats paying under $200/month.",
  "Panama's Pensionado visa gives retirees discounts on everything from flights to restaurant bills.",
  "In Malaysia, a modern 2-bedroom apartment in Penang rents for as little as $600/month.",
  "Over 700,000 Americans currently receive their Social Security checks abroad every month.",
  "Colombia's Medellín was named one of the world's most innovative cities — and a 2BR apartment costs ~$800/month.",
  "Vietnam offers some of the world's best street food, a low cost of living, and a growing expat community.",
];

function NewsletterSlot() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a3a2a 0%, #0f2419 100%)",
      borderRadius: "8px",
      padding: "32px 36px",
      margin: "40px 0",
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
        fontSize: "0.62rem",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: "#c8a84e",
        marginBottom: "12px",
        fontWeight: 700,
      }}>Free Weekly Newsletter</div>
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "1.45rem",
        fontWeight: 700,
        color: "#ffffff",
        lineHeight: 1.3,
        marginBottom: "12px",
      }}>Your next chapter is waiting.</h3>
      <p style={{
        fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
        fontSize: "0.95rem",
        color: "rgba(255,255,255,0.70)",
        lineHeight: 1.65,
        marginBottom: "24px",
        maxWidth: "420px",
        margin: "0 auto 24px",
      }}>
        Every week we share the best retirement destinations, cost breakdowns, and expat tips — straight to your inbox.
      </p>
      <a
        href="https://golden-horizons.org/#subscribe"
        style={{
          display: "inline-block",
          background: "#c8a84e",
          color: "#1a1a1a",
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "13px 32px",
          borderRadius: "4px",
        }}
      >
        Subscribe Free →
      </a>
      <p style={{
        fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
        fontSize: "0.72rem",
        color: "rgba(255,255,255,0.35)",
        marginTop: "12px",
      }}>No spam. Unsubscribe anytime.</p>
    </div>
  );
}

function FactSlot({ slot }: { slot: number }) {
  const fact = FACTS[(slot - 1) % FACTS.length];
  return (
    <div style={{
      background: "#faf8f2",
      border: "1px solid #e8dfc8",
      borderLeft: "4px solid #c8a84e",
      borderRadius: "4px",
      padding: "24px 28px",
      margin: "40px 0",
      display: "flex",
      gap: "16px",
      alignItems: "flex-start",
    }}>
      <div style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>💡</div>
      <div>
        <div style={{
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#c8a84e",
          fontWeight: 700,
          marginBottom: "8px",
        }}>Did You Know?</div>
        <p style={{
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "1rem",
          lineHeight: 1.7,
          color: "#2a2a2a",
          margin: 0,
        }}>{fact}</p>
      </div>
    </div>
  );
}

function AdSlot({ slot }: { slot: number }) {
  if (slot % 2 === 1) return <NewsletterSlot />;
  return <FactSlot slot={slot} />;
}

/* Splits intro into short readable paragraphs of max 2 sentences each */
function IntroText({ text }: { text: string }) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const chunks: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    chunks.push(sentences.slice(i, i + 2).join(" ").trim());
  }
  return (
    <div style={{ marginBottom: "40px" }}>
      {chunks.map((chunk, i) => (
        <p key={i} style={{
          fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
          fontSize: i === 0 ? "1.22rem" : "1.1rem",
          fontWeight: i === 0 ? 500 : 400,
          lineHeight: 1.85,
          color: i === 0 ? "#1a1a1a" : "#444",
          marginBottom: "20px",
          letterSpacing: i === 0 ? "-0.01em" : "normal",
        }}>{chunk}</p>
      ))}
    </div>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mdArticle = parseMarkdownArticle(slug);

  if (mdArticle) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div style={{ minHeight: "100vh", background: "#ffffff", color: "#1a1a1a" }}>
          <Header />
          <main style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 80px" }}>
            <div style={{ padding: "48px 0 0" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8a84e" }}>{mdArticle.category}</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.12, color: "#1a1a1a", marginBottom: "20px", letterSpacing: "-0.5px" }}>{mdArticle.title}</h1>
              <div style={{ fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontSize: "0.82rem", color: "#888", display: "flex", flexWrap: "wrap", gap: "4px 12px", alignItems: "center", marginBottom: "32px" }}>
                <span>By <strong style={{ color: "#1a1a1a", fontWeight: 600 }}>Golden Horizons Team</strong></span>
                <span style={{ color: "#ddd" }}>&#8226;</span>
                <span>Read time: 2-3 minutes</span>
                <span style={{ color: "#ddd" }}>&#8226;</span>
                <span>{mdArticle.date}</span>
              </div>
            </div>

            {mdArticle.image && (
              <div style={{ margin: "0 -24px 40px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mdArticle.image} alt={mdArticle.title} style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }} />
              </div>
            )}

            {/* ── INTRO — split into short paragraphs, first line larger/medium weight ── */}
            {mdArticle.intro && <IntroText text={mdArticle.intro} />}

            {mdArticle.items.map((item, idx) => (
              <div key={idx} style={{ marginBottom: "48px" }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontSize: "1.85rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, marginBottom: "20px", paddingBottom: "12px", borderBottom: "2px solid #c8a84e" }}>{item.heading}</h2>
                {item.image && idx > 0 && (
                  <div style={{ margin: "0 -24px 24px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.imageAlt} loading="lazy" style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }} />
                  </div>
                )}
                <div style={{ fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontSize: "1.15rem", lineHeight: 1.9, color: "#333" }}>
                  {item.paragraph.split(". ").reduce((acc: string[][], sentence, i, arr) => {
                    const lastGroup = acc[acc.length - 1];
                    if (!lastGroup || lastGroup.length >= 3) { acc.push([sentence + (i < arr.length - 1 ? "." : "")]); }
                    else { lastGroup.push(sentence + (i < arr.length - 1 ? "." : "")); }
                    return acc;
                  }, []).map((group, gIdx) => (
                    <p key={gIdx} style={{ marginBottom: "22px" }}>{group.join(" ")}</p>
                  ))}
                </div>
                <AdSlot slot={idx + 1} />
              </div>
            ))}

            {mdArticle.closing && (
              <div style={{ background: "#1a3a2a", color: "#fff", borderRadius: "4px", padding: "32px 36px", margin: "48px 0" }}>
                <div style={{ fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "2.5px", textTransform: "uppercase", color: "#c8a84e", marginBottom: "12px" }}>Golden Horizons</div>
                <p style={{ fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#e0ddd5" }}>{mdArticle.closing}</p>
              </div>
            )}

            <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #e8e0d0" }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#1a3a2a", textDecoration: "none", fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif", fontWeight: 600, fontSize: "0.88rem" }}>
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

  const article = getArticleBySlug(slug);
  if (!article) { notFound(); }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="bg-white rounded-sm shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: article.category.color }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{article.category.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">{article.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">{article.intro}</p>
            <div className="w-16 h-1 bg-primary mb-8" />
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.includes("**")) {
                  const headingMatch = paragraph.match(/^\*\*(.+?)\*\*/);
                  if (headingMatch) {
                    const heading = headingMatch[1];
                    const rest = paragraph.replace(/^\*\*.+?\*\*\n?/, "");
                    return (<div key={index} className="mb-6"><h3 className="text-xl font-bold font-serif mb-2">{heading}</h3>{rest && <p className="text-foreground/80 leading-relaxed">{rest}</p>}</div>);
                  }
                }
                if (paragraph.includes("\n- ")) {
                  const lines = paragraph.split("\n");
                  const items = lines.filter((line) => line.startsWith("- "));
                  const nonItems = lines.filter((line) => !line.startsWith("- ")).join(" ");
                  return (<div key={index} className="mb-6">{nonItems && <p className="text-foreground/80 leading-relaxed mb-2">{nonItems}</p>}<ul className="list-disc list-inside space-y-1">{items.map((item, i) => <li key={i} className="text-foreground/80">{item.replace("- ", "")}</li>)}</ul></div>);
                }
                return <p key={index} className="text-foreground/80 leading-relaxed mb-6">{paragraph}</p>;
              })}
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
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
