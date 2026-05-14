"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeBox from "@/components/SubscribeBox";
type ArticleCard = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
};
function getSectionLabel(category: string): string {
  return category.split("·")[0].trim() || "Retirement Abroad";
}
export default function HomeClient({ allArticles }: { allArticles: ArticleCard[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pickedArticles, setPickedArticles] = useState<ArticleCard[]>([]);
  const [articleGroupIndex, setArticleGroupIndex] = useState(0);
  const [articleGroupVisible, setArticleGroupVisible] = useState(true);
  const [articleGroups, setArticleGroups] = useState<ArticleCard[][]>([]);
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "Cover Story · The Destination Report",
      title: "Where $2,000 a month can still buy a beautiful life",
      sub:
        "Warm evenings, walkable towns, better healthcare access, and a slower rhythm — the retirement dream is moving overseas.",
    },
    {
      image:
        "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "The Expat File",
      title:
        "The old-town life people dream about — cafés, shade, and slow golden evenings",
      sub:
        "A real European street, real cafés, real texture — the kind of daily life retirement should make possible.",
    },
    {
      image:
        "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1400",
      kicker: "The Money Page",
      title: "Seaside towns where every morning feels like a postcard",
      sub:
        "Historic streets, sea views, walkable neighborhoods, and a softer rhythm — with the numbers checked before the dream begins.",
    },
  ];
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [slides.length]);
  useEffect(() => {
    if (allArticles.length === 0) return;
    const shuffled = [...allArticles].sort(() => Math.random() - 0.5);
    const groups: ArticleCard[][] = [];
    for (let g = 0; g < 4; g++) {
      const group: ArticleCard[] = [];
      for (let i = 0; i < 4; i++) {
        group.push(shuffled[(g * 4 + i) % shuffled.length]);
      }
      groups.push(group);
    }
    setArticleGroups(groups);
    setPickedArticles(groups[0]);
  }, [allArticles]);
  useEffect(() => {
    if (articleGroups.length === 0) return;
    const interval = window.setInterval(() => {
      setArticleGroupVisible(false);
      setTimeout(() => {
        setArticleGroupIndex((prev) => {
          const next = (prev + 1) % 4;
          setPickedArticles(articleGroups[next]);
          return next;
        });
        setArticleGroupVisible(true);
      }, 500);
    }, 9000);
    return () => window.clearInterval(interval);
  }, [articleGroups]);
  return (
    <main className="mag-page">
      <div className="site">
        <div className="topbar">
          <span>Vol. 58, No. 1</span>
          <span className="hide-mob">
            golden-horizons.org · The Retirement Abroad Magazine
          </span>
          <span>April 2026</span>
        </div>
        <div className="masthead">
          <div className="dateline">
            <span>The Retirement Abroad Magazine</span>
            <span className="hide-mob">
              For Americans Who Are Ready for What&rsquo;s Next
            </span>
            <span>April 2026 · Issue 58</span>
          </div>
          <Link href="/" className="mastname">
            Golden Horizons
          </Link>
          <div className="issue-line">
            <span className="issue-tag">
              <strong>This Issue:</strong> Where $2,000/month buys a life worth
              living
            </span>
            <span className="issue-tag">
              <strong>Inside:</strong> The Money Page · The Destination Report ·
              The Health File
            </span>
          </div>
        </div>
        <nav className="nav">
          <Link href="/" className="active">
            Cover
          </Link>
          <Link href="/articles">All Stories</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/tax-guide">TAX GUIDE</Link>
          <Link href="#subscribe">Subscribe Free</Link>
        </nav>
        <div className="hero-wrap">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="hero-slide"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            >
              <img src={slide.image} alt={slide.title} className="hero-img" />
              <div className="hero-overlay" />
              <div className="hero-text">
                <div className="hero-kicker">{slide.kicker}</div>
                {i === 0
                  ? <h1 className="hero-title">{slide.title}</h1>
                  : <h2 className="hero-title">{slide.title}</h2>}
                <p className="hero-sub">{slide.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-caption">
          <p>
            Three windows into the Golden Horizons promise: old-world charm, sea
            air, richer days, and a retirement lifestyle that still feels
            possible.
          </p>
        </div>
        <div className="cover-story">
          <div className="mag-label">Cover Story · The Destination Report</div>
          <h2 className="cover-headline">
            The places where your money sets you free — and why more Americans
            are finding them every day
          </h2>
          <div className="byline">
            By the Editors of Golden Horizons · Cover Story · April 2026
          </div>
          <p className="body-text">
            There are places in the world where $2,000 a month buys the kind of
            life most Americans spend their entire career chasing. A terrace
            overlooking the sea. Fresh food every morning. A doctor you can
            actually afford to see. These places are not secrets — they are
            simply overlooked.
          </p>
          <p className="body-text">
            Golden Horizons exists to change that. Every morning we find one of
            these places, dig into the real numbers, and bring it straight to
            you. No hype. No sales pitch. Just the truth about what is possible —
            and what it actually costs.
          </p>
          <Link href="/articles" className="read-more">
            Read all stories in this issue →
          </Link>
        </div>
        <div className="pullquote">
          <p>
            &ldquo;Most people plan carefully for retirement. Almost none plan{" "}
            <em>where</em> to live it. That decision changes everything.&rdquo;
          </p>
          <cite>— The Golden Horizons Editors</cite>
        </div>
        <div id="subscribe">
          <SubscribeBox variant="inline" />
        </div>
        {/* ===== PLANNING GUIDES HUB ===== */}
        <div id="planning-guides" className="section-banner">Start Here: Retirement Abroad Planning Guides</div>
        <div
          style={{
            padding: "28px 36px 32px",
            background: "#faf5e9",
            borderBottom: "2px solid #1e1408",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-garamond), Georgia, serif",
              fontSize: 18,
              color: "#5a4010",
              fontStyle: "italic",
              marginBottom: 22,
              lineHeight: 1.6,
            }}
          >
            Six essential guides for Americans planning retirement abroad — covering budget, healthcare, visas, taxes, safety, and the full planning checklist.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                href: "/best-countries-to-retire-abroad-on-a-budget",
                label: "Best Countries to Retire Abroad on a Budget",
                kicker: "The Money Page",
                desc: "Monthly cost breakdowns for the most affordable destinations — from ~$750 to ~$1,750/month.",
              },
              {
                href: "/healthcare-abroad-for-american-retirees",
                label: "Healthcare Abroad for American Retirees",
                kicker: "The Health File",
                desc: "Medicare overseas, insurance options, and countries with the strongest healthcare for retirees.",
              },
              {
                href: "/retiring-abroad-checklist-for-americans",
                label: "Retiring Abroad Checklist for Americans",
                kicker: "The Strategy Page",
                desc: "Everything to do 12 months out, 6 months out, and in your first 90 days abroad.",
              },
              {
                href: "/visa-rules-for-americans-retiring-abroad",
                label: "Visa Rules for Americans Retiring Abroad",
                kicker: "The Visa File",
                desc: "Pensionado programs, income-based visas, and what to verify before you apply.",
              },
              {
                href: "/taxes-for-americans-retiring-overseas",
                label: "Taxes for Americans Retiring Overseas",
                kicker: "The Money Page",
                desc: "FBAR, FATCA, the Foreign Tax Credit, Social Security taxes, and what never stops.",
              },
              {
                href: "/safest-countries-to-retire-abroad",
                label: "Safest Countries to Retire Abroad",
                kicker: "The Destination Report",
                desc: "Safety scores, what they mean day-to-day, and how to verify current conditions.",
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                style={{
                  display: "block",
                  background: "#f5edd8",
                  border: "1px solid #c9a84c",
                  borderTop: "3px solid #1e1408",
                  padding: "16px 18px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#8b6914",
                    marginBottom: 8,
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                >
                  {guide.kicker}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1a0f00",
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {guide.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-garamond), Georgia, serif",
                    fontSize: 14,
                    color: "#5a4010",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                  }}
                >
                  {guide.desc}
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: "#8b6914",
                    fontStyle: "italic",
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                >
                  Read the guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="section-banner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: 24 }}>
          <span>Inside This Issue</span>
          <span style={{ display: "flex", gap: 7 }}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i === articleGroupIndex ? "#c9a84c" : "rgba(201,168,76,0.3)",
                  display: "inline-block",
                  transition: "background 0.4s",
                }}
              />
            ))}
          </span>
        </div>
        <div
          className="below-fold"
          style={{
            opacity: articleGroupVisible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="bf-col">
            {pickedArticles.length >= 1 && (
              <>
                <div className="mag-section-label">
                  {getSectionLabel(pickedArticles[0].category)}
                </div>
                {pickedArticles.slice(0, 2).map((article) => (
                  <div key={article.slug} className="story-item">
                    <img
                      className="story-img"
                      src={article.image}
                      alt={article.title}
                    />
                    <div className="story-cat">{article.category}</div>
                    <Link
                      href={`/articles/${article.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="story-title">{article.title}</div>
                    </Link>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="story-read"
                    >
                      Read this story →
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="bf-col">
            {pickedArticles.length >= 3 && (
              <>
                <div className="mag-section-label">
                  {getSectionLabel(pickedArticles[2].category)}
                </div>
                {pickedArticles.slice(2, 4).map((article) => (
                  <div key={article.slug} className="story-item">
                    <img
                      className="story-img"
                      src={article.image}
                      alt={article.title}
                    />
                    <div className="story-cat">{article.category}</div>
                    <Link
                      href={`/articles/${article.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="story-title">{article.title}</div>
                    </Link>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="story-read"
                    >
                      Read this story →
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="bf-col">
            <div className="sb-pull">
              <p>
                &ldquo;I kept waiting for the right time. Then I realized — this{" "}
                <em>is</em> the right time.&rdquo;
              </p>
              <cite>— Barbara, 63 · Lisbon, $1,900/mo</cite>
            </div>
            <div
              style={{
                background: "#faf5e9",
                border: "2px solid #2d2416",
                padding: "24px 20px",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#8b6914",
                  marginBottom: 12,
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Editor&apos;s Note
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#1a0f00",
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                &ldquo;The best time to retire abroad was ten years ago. The
                second best time is today.&rdquo;
              </p>
              <div
                style={{
                  fontSize: 12,
                  color: "#6b5d47",
                  marginTop: 12,
                  fontFamily: "var(--font-garamond), Georgia, serif",
                }}
              >
                — The Editors
              </div>
            </div>
          </div>
        </div>
        <div className="ornament">— ✦ —</div>
        <footer className="mag-footer">
          <div className="footer-name">Golden Horizons</div>
          <p>
            The retirement abroad magazine for Americans who aren&rsquo;t done
            yet.
          </p>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Use</Link>
            <span>|</span>
            <Link href="/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <span>|</span>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <span>|</span>
            <Link href="/contact">Contact</Link>
          </div>
          <p style={{ marginTop: 12, fontSize: 11, opacity: 0.5 }}>
            © 2026 Golden Horizons — All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
