"use client";
import { useState, useMemo, useId } from "react";
import Link from "next/link";
import styles from "./FoodClient.module.css";

export type SlimArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  heroImage: string;
  image: string;
  date: string;
};

type Props = {
  foodArticles: SlimArticle[];
  featuredArticle: SlimArticle | null;
  gridArticles: SlimArticle[];
};

const FOOD_COUNTRIES = [
  "France",
  "Greece",
  "Italy",
  "Japan",
  "Mexico",
  "Portugal",
  "Spain",
  "Thailand",
];

const FOOD_FALLBACK_IMAGE =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";

function getArticleImage(article: SlimArticle): string {
  if (article.heroImage?.trim()) return article.heroImage;
  if (article.image?.trim()) return article.image;
  return FOOD_FALLBACK_IMAGE;
}

export default function FoodClient({
  foodArticles,
  featuredArticle,
  gridArticles,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputId = useId();

  const isSearchActive = searchQuery.trim().length > 0;

  // Filter all food articles (including the featured one) so it
  // appears in search results even when hidden from the default grid.
  // Articles follow the pattern "Country - subtitle" so startsWith on
  // the lowercased title or slug is precise and avoids false positives.
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return foodArticles.filter((article) => {
      const t = article.title.toLowerCase();
      const s = article.slug.replace(/-/g, " ").toLowerCase();
      return t.startsWith(q) || s.startsWith(q);
    });
  }, [searchQuery, foodArticles]);

  // Exact country match drives the quick-filter active state
  const activeCountry =
    FOOD_COUNTRIES.find(
      (c) => c.toLowerCase() === searchQuery.trim().toLowerCase()
    ) ?? null;

  const resultLabel = activeCountry ?? searchQuery.trim();

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          FOOD DIRECTORY — COUNTRY SEARCH
          ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="food-search-heading"
        className={styles.searchSection}
      >
        {/* Kicker */}
        <div
          style={{
            fontSize: 10,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#8b6914",
            marginBottom: 8,
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontWeight: 700,
          }}
        >
          Food Directory
        </div>

        {/* H2 — landmark heading for this section */}
        <h2
          id="food-search-heading"
          style={{
            margin: "0 0 8px",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 24,
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#1a0f00",
          }}
        >
          Find Food Stories by Country
        </h2>

        {/* AEO copy — natural language with key terms for AI discoverability */}
        <p
          style={{
            fontFamily: "var(--font-garamond), Georgia, serif",
            fontSize: 15,
            color: "#5a4010",
            fontStyle: "italic",
            margin: "0 0 14px",
            lineHeight: 1.6,
            maxWidth: 620,
          }}
        >
          Browse Golden Horizons food stories by country — from local markets
          and everyday meals to the cost and culture of eating abroad for
          retirees and slow travelers.
        </p>

        {/* Visible label + text input */}
        <div style={{ marginBottom: 12 }}>
          <label
            htmlFor={inputId}
            style={{
              display: "block",
              fontFamily: "var(--font-garamond), Georgia, serif",
              fontSize: 12,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#8b6914",
              marginBottom: 6,
              fontWeight: 700,
            }}
          >
            Search by country
          </label>
          <input
            id={inputId}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="France, Greece, Italy, Mexico…"
            autoComplete="off"
            className={styles.searchInput}
          />
          {/* Active search status line */}
          {isSearchActive && (
            <p className={styles.statusLine}>
              Showing food stories for <strong>{resultLabel}</strong>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search and return to all food stories"
                className={styles.clearBtn}
              >
                ← Clear search
              </button>
            </p>
          )}
        </div>

        {/* Country quick-filter links — vintage editorial style, not app pills */}
        <div
          role="group"
          aria-label="Filter by country"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px 0",
            alignItems: "center",
          }}
        >
          {FOOD_COUNTRIES.map((country, idx) => (
            <span
              key={country}
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <button
                type="button"
                onClick={() =>
                  setSearchQuery(activeCountry === country ? "" : country)
                }
                aria-pressed={activeCountry === country}
                className={`${styles.countryBtn}${activeCountry === country ? ` ${styles.countryBtnActive}` : ""}`}
              >
                {country}
              </button>
              {idx < FOOD_COUNTRIES.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ color: "#c9a84c", fontSize: 14, padding: "0 2px" }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DEFAULT VIEW — no search active
          Shows: rotating featured story + article grid
          ══════════════════════════════════════════════════════ */}
      {!isSearchActive && (
        <>
          {featuredArticle ? (
            <>
              {/* Featured Food Story */}
              <section aria-labelledby="featured-food-heading">
                <h2 id="featured-food-heading" className="section-banner">
                  Featured Food Story · Editor&rsquo;s Pick
                </h2>
                <article className="editor-pick">
                  <div className="ep-img-wrap">
                    <img
                      className="ep-img"
                      src={getArticleImage(featuredArticle)}
                      alt={`${featuredArticle.category} story: ${featuredArticle.title}`}
                    />
                  </div>
                  <div
                    className="ep-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="ep-kicker">{featuredArticle.category}</div>
                    <Link
                      href={`/articles/${featuredArticle.slug}`}
                      className="ep-headline"
                    >
                      {featuredArticle.title}
                    </Link>
                    {(featuredArticle.description ||
                      featuredArticle.excerpt) && (
                      <p className="ep-body">
                        {featuredArticle.description ||
                          featuredArticle.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/articles/${featuredArticle.slug}`}
                      className="ep-read"
                      aria-label={`Read the full story: ${featuredArticle.title}`}
                    >
                      Read the full story →
                    </Link>
                  </div>
                </article>
              </section>

              {/* More Food Stories grid */}
              {gridArticles.length > 0 && (
                <section aria-labelledby="more-food-heading">
                  <h2 id="more-food-heading" className="section-banner">
                    More Food Stories
                  </h2>
                  <div className="articles-grid">
                    {gridArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/articles/${article.slug}`}
                        className="art-card"
                      >
                        <img
                          className="art-thumb"
                          src={getArticleImage(article)}
                          alt={`${article.category} story: ${article.title}`}
                        />
                        <div className="art-cat">{article.category}</div>
                        <div className="art-title">{article.title}</div>
                        <span className="art-read" aria-hidden="true">
                          Read →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            /* No food articles yet */
            <div
              style={{
                border: "1px solid #2d2416",
                background: "#faf5e9",
                padding: "48px 28px",
                textAlign: "center",
                color: "#6b5d47",
                fontStyle: "italic",
                fontFamily: "var(--font-garamond), Georgia, serif",
                fontSize: 18,
              }}
            >
              Food guides are coming soon.
            </div>
          )}
        </>
      )}

      {/* ══════════════════════════════════════════════════════
          SEARCH RESULTS VIEW — search is active
          ══════════════════════════════════════════════════════ */}
      {isSearchActive && (
        <section aria-labelledby="search-results-heading">
          {searchResults.length > 0 ? (
            <>
              <h2 id="search-results-heading" className="section-banner">
                Food Stories: {resultLabel}
              </h2>
              <div className="articles-grid">
                {searchResults.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="art-card"
                  >
                    <img
                      className="art-thumb"
                      src={getArticleImage(article)}
                      alt={`${article.category} story: ${article.title}`}
                    />
                    <div className="art-cat">{article.category}</div>
                    <div className="art-title">{article.title}</div>
                    <span className="art-read" aria-hidden="true">
                      Read →
                    </span>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 id="search-results-heading" className="section-banner">
                Search Results
              </h2>
              <div
                style={{
                  border: "1px solid #2d2416",
                  background: "#faf5e9",
                  padding: "34px 28px",
                  textAlign: "center",
                  color: "#6b5d47",
                  fontStyle: "italic",
                  fontFamily: "var(--font-garamond), Georgia, serif",
                  fontSize: 17,
                }}
              >
                <p role="status" style={{ margin: 0 }}>
                  No food stories found for this country yet.
                </p>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
