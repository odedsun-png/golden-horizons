"use client";
import { useState, useMemo, useId } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import styles from "./FoodClient.module.css";
import pageStyles from "./Food.module.css";

export type SlimArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  heroImage: string;
  image: string;
  date: string;
  readTime: string;
};

type Props = {
  foodArticles: SlimArticle[];
  featuredArticle: SlimArticle | null;
  gridArticles: SlimArticle[];
};

const FOOD_COUNTRIES = [
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Japan", flag: "🇯🇵" },
];

const FOOD_FALLBACK_IMAGE =
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";

function getArticleImage(article: SlimArticle): string {
  if (article.heroImage?.trim()) return article.heroImage;
  if (article.image?.trim()) return article.image;
  return FOOD_FALLBACK_IMAGE;
}

function getCountry(article: SlimArticle): string {
  const dash = article.title.indexOf(" - ");
  if (dash > -1) return article.title.slice(0, dash).trim();
  return article.category;
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
  // Matches anywhere in the title, slug, description, or excerpt so
  // dish names ("pizza", "tacos") and food costs work, not just
  // country names at the start of the title.
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return [];
    return foodArticles.filter((article) => {
      const haystack = [
        article.title,
        article.slug.replace(/-/g, " "),
        article.description,
        article.excerpt,
        article.category,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [searchQuery, foodArticles]);

  // Exact country match drives the quick-filter active state
  const activeCountry =
    FOOD_COUNTRIES.find(
      (c) => c.name.toLowerCase() === searchQuery.trim().toLowerCase()
    )?.name ?? null;

  const resultLabel = activeCountry ?? searchQuery.trim();

  const renderCard = (article: SlimArticle) => (
    <Link
      key={article.slug}
      href={`/articles/${article.slug}`}
      className={styles.card}
    >
      <img
        className={styles.cardImg}
        src={getArticleImage(article)}
        alt={`${article.category} story: ${article.title}`}
      />
      <div className={styles.cardBody}>
        <div className={styles.cardCountry}>{getCountry(article)}</div>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        {(article.description || article.excerpt) && (
          <p className={styles.cardSummary}>
            {article.description || article.excerpt}
          </p>
        )}
        <div className={styles.cardMeta}>{article.readTime}</div>
      </div>
    </Link>
  );

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SEARCH BAR + COUNTRY CHIPS
          ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="food-search-heading"
        className={styles.searchWrap}
      >
        <div className={styles.searchBarInner}>
          <h2 id="food-search-heading" className={styles.searchLabel}>
            Search food stories by country
          </h2>
          <span className={styles.searchIcon} aria-hidden="true">
            <Search size={20} />
          </span>
          <label htmlFor={inputId} className={styles.searchLabel}>
            Search by country, dish, or food cost
          </label>
          <input
            id={inputId}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by country, dish, or food cost..."
            autoComplete="off"
            className={styles.searchInput}
          />
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
      </section>

      <div
        role="group"
        aria-label="Filter by country"
        className={styles.chipsRow}
      >
        {FOOD_COUNTRIES.map((country) => (
          <button
            key={country.name}
            type="button"
            onClick={() =>
              setSearchQuery(activeCountry === country.name ? "" : country.name)
            }
            aria-pressed={activeCountry === country.name}
            className={`${styles.chip}${
              activeCountry === country.name ? ` ${styles.chipActive}` : ""
            }`}
          >
            <span aria-hidden="true">{country.flag}</span>
            {country.name}
          </button>
        ))}
        <Link href="/articles" className={styles.chipMore}>
          View all →
        </Link>
      </div>

      {/* ══════════════════════════════════════════════════════
          DEFAULT VIEW — no search active
          Shows: rotating featured story + article grid
          ══════════════════════════════════════════════════════ */}
      {!isSearchActive && (
        <>
          {featuredArticle ? (
            <section aria-labelledby="featured-food-heading">
              <h2 id="featured-food-heading" className={styles.searchLabel}>
                Featured Food Story — Editor&rsquo;s Pick
              </h2>
              <article className={styles.editorsPick}>
                <div className={styles.epImgWrap}>
                  <img
                    className={styles.epImg}
                    src={getArticleImage(featuredArticle)}
                    alt={`${featuredArticle.category} story: ${featuredArticle.title}`}
                  />
                </div>
                <div className={styles.epCard}>
                  <span className={styles.epWatermark} aria-hidden="true">
                    ✦
                  </span>
                  <div className={styles.epKicker}>Editor&rsquo;s Pick</div>
                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className={styles.epHeadline}
                  >
                    {featuredArticle.title}
                  </Link>
                  {(featuredArticle.description || featuredArticle.excerpt) && (
                    <p className={styles.epBody}>
                      {featuredArticle.description || featuredArticle.excerpt}
                    </p>
                  )}
                  <div className={styles.epBadges}>
                    <span className={styles.epBadge}>
                      {featuredArticle.readTime}
                    </span>
                    <span className={styles.epBadge}>Budget-Friendly</span>
                  </div>
                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className={styles.epButton}
                    aria-label={`Read the full story: ${featuredArticle.title}`}
                  >
                    Read the Full Story →
                  </Link>
                </div>
              </article>
            </section>
          ) : null}

          <section aria-labelledby="more-food-heading" id="food-stories">
            <div className={pageStyles.sectionTitleRow}>
              <span className={pageStyles.sectionRule} aria-hidden="true" />
              <h2 id="more-food-heading" className={pageStyles.sectionTitle}>
                More Food Stories
              </h2>
              <span className={pageStyles.sectionRule} aria-hidden="true" />
            </div>
            {gridArticles.length > 0 ? (
              <div className={styles.grid}>{gridArticles.map(renderCard)}</div>
            ) : (
              !featuredArticle && (
                <div className={styles.emptyState}>
                  Food guides are coming soon.
                </div>
              )
            )}
          </section>
        </>
      )}

      {/* ══════════════════════════════════════════════════════
          SEARCH RESULTS VIEW — search is active
          ══════════════════════════════════════════════════════ */}
      {isSearchActive && (
        <section aria-labelledby="search-results-heading" id="food-stories">
          {searchResults.length > 0 ? (
            <>
              <div className={pageStyles.sectionTitleRow}>
                <span className={pageStyles.sectionRule} aria-hidden="true" />
                <h2
                  id="search-results-heading"
                  className={pageStyles.sectionTitle}
                >
                  Food Stories: {resultLabel}
                </h2>
                <span className={pageStyles.sectionRule} aria-hidden="true" />
              </div>
              <div className={styles.grid}>{searchResults.map(renderCard)}</div>
            </>
          ) : (
            <>
              <h2 id="search-results-heading" className={styles.searchLabel}>
                Search Results
              </h2>
              <div className={styles.emptyState}>
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
