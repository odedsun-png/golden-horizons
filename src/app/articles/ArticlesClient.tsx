"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  category?: string;
  heroImage?: string;
  image?: string;
};

type Props = {
  articles: Article[];
  categoryGroups: Record<string, Article[]>;
  categories: string[];
  editorPick: Article | null;
};

const CATEGORY_IMAGES: Record<string, string> = {
  "All Stories":
    "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
  Beach:
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Best Cities":
    "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
  Climate:
    "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
  Comparison:
    "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=600",
  Cost:
    "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=600",
  Finance:
    "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
  Tax:
    "https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=600",
  Visa:
    "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Real Estate":
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
  Safety:
    "https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=600",
  Solo:
    "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=600",
  Culture:
    "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600",
  Expat:
    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600",
  Healthcare:
    "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Hidden Gems":
    "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600",
  LGBTQ:
    "https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=600",
  Logistics:
    "https://images.pexels.com/photos/736830/pexels-photo-736830.jpeg?auto=compress&cs=tinysrgb&w=600",
  Explore:
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600",
  Countries:
    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
  Lifestyle:
    "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=600",
  Strategy:
    "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
  Uncategorized:
    "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600",
  LEGIT:
    "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600";

const FEATURED_CATEGORIES = [
  "Cost",
  "Healthcare",
  "Visa",
  "Best Cities",
  "Beach",
  "Safety",
  "Real Estate",
  "Expat",
];

function normalizeCategory(category?: string) {
  return category?.trim() || "Uncategorized";
}

function getCategoryImage(category?: string) {
  const normalized = normalizeCategory(category);
  return CATEGORY_IMAGES[normalized] || DEFAULT_IMAGE;
}

function getArticleImage(article: Article) {
  if (article.heroImage?.trim()) return article.heroImage;
  if (article.image?.trim()) return article.image;
  return getCategoryImage(article.category);
}

function getSearchText(article: Article) {
  return [
    article.title,
    article.description,
    article.excerpt,
    article.category,
    article.slug,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function ArticlesClient({
  articles,
  categoryGroups,
  categories,
  editorPick,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    let baseArticles = selectedCategory
      ? categoryGroups[selectedCategory] || []
      : articles;

    if (query) {
      baseArticles = baseArticles.filter((article) =>
        getSearchText(article).includes(query)
      );
    }

    return baseArticles;
  }, [articles, categoryGroups, selectedCategory, searchQuery]);

  const articlesForGrid = useMemo(() => {
    if (!selectedCategory && !searchQuery.trim() && editorPick) {
      return filteredArticles.filter(
        (article) => article.slug !== editorPick.slug
      );
    }

    return filteredArticles;
  }, [filteredArticles, selectedCategory, searchQuery, editorPick]);

  const displayedArticles = articlesForGrid.slice(0, visibleCount);
  const hasMore = displayedArticles.length < articlesForGrid.length;

  function selectCategory(category: string | null) {
    setSelectedCategory(category);
    setVisibleCount(18);
  }

  function handleSearch(value: string) {
  setSearchQuery(value);
  setSelectedCategory(null);
  setVisibleCount(18);
}

  function clearFilters() {
    setSelectedCategory(null);
    setSearchQuery("");
    setVisibleCount(18);
  }

  return (
    <>
      <div
        style={{
          padding: "30px 36px 24px",
          borderTop: "1px solid #c9a84c",
          borderBottom: "1px solid #c9a84c",
          background: "#faf5e9",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#8b6914",
            marginBottom: 10,
          }}
        >
          Search the Archive
        </div>

        <h2
          style={{
            margin: "0 0 10px",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 30,
            lineHeight: 1.1,
            color: "#1a0f00",
          }}
        >
          Find retirement abroad stories by country, cost, visa, healthcare, or
          lifestyle.
        </h2>

        <p
          style={{
            maxWidth: 760,
            margin: "0 0 20px",
            fontSize: 17,
            lineHeight: 1.55,
            color: "#4c3922",
          }}
        >
          Browse practical guides for Americans comparing where to retire abroad
          — including real costs, safety, housing, healthcare, visas, and daily
          life.
        </p>

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search articles, countries, healthcare, visas, cost of living..."
          aria-label="Search Golden Horizons articles"
          style={{
            width: "100%",
            border: "2px solid #2d2416",
            background: "#fffaf0",
            color: "#1a0f00",
            padding: "15px 18px",
            fontSize: 17,
            fontFamily: "var(--font-garamond), Georgia, serif",
            outline: "none",
            marginBottom: 14,
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={() => selectCategory(null)}
            style={{
              cursor: "pointer",
              border: "1px solid #8b6914",
              background: !selectedCategory ? "#2d2416" : "#faf5e9",
              color: !selectedCategory ? "#f5d06f" : "#2d2416",
              padding: "8px 12px",
              fontSize: 12,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "var(--font-garamond), Georgia, serif",
            }}
          >
            All
          </button>

          {FEATURED_CATEGORIES.filter((cat) => categories.includes(cat)).map(
            (category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                style={{
                  cursor: "pointer",
                  border: "1px solid #8b6914",
                  background:
                    selectedCategory === category ? "#2d2416" : "#faf5e9",
                  color:
                    selectedCategory === category ? "#f5d06f" : "#2d2416",
                  padding: "8px 12px",
                  fontSize: 12,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-garamond), Georgia, serif",
                }}
              >
                {category}
              </button>
            )
          )}

          {(selectedCategory || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              style={{
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: "#8b6914",
                padding: "8px 4px",
                fontSize: 13,
                textDecoration: "underline",
                fontFamily: "var(--font-garamond), Georgia, serif",
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="section-banner">Browse by Section</div>

      <div className="cat-index">
        <button
          type="button"
          onClick={() => selectCategory(null)}
          className={`cat-cell ${!selectedCategory ? "active" : ""}`}
          style={{
            cursor: "pointer",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          <img
            src={getCategoryImage("All Stories")}
            alt="All Stories"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_IMAGE;
            }}
            style={{
              width: "100%",
              height: 68,
              objectFit: "cover",
              borderBottom: "1px solid #c9b896",
              marginBottom: 10,
              display: "block",
            }}
          />
          <div className="cat-name">All Stories</div>
          <div className="cat-count">{articles.length} articles</div>
          <div className="cat-desc">Every destination we&rsquo;ve covered</div>
        </button>

        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => selectCategory(category)}
            className={`cat-cell ${
              selectedCategory === category ? "active" : ""
            }`}
            style={{
              cursor: "pointer",
              textAlign: "left",
              overflow: "hidden",
            }}
          >
            <img
              src={getCategoryImage(category)}
              alt={category}
              onError={(e) => {
                e.currentTarget.src = DEFAULT_IMAGE;
              }}
              style={{
                width: "100%",
                height: 68,
                objectFit: "cover",
                borderBottom: "1px solid #c9b896",
                marginBottom: 10,
                display: "block",
              }}
            />

            <div className="cat-name">{category}</div>
            <div className="cat-count">
              {categoryGroups[category]?.length || 0} articles
            </div>
            <div className="cat-desc">
              Browse {category.toLowerCase()} stories
            </div>
          </button>
        ))}
      </div>

      {editorPick && !selectedCategory && !searchQuery.trim() && (
        <>
          <div className="section-banner">
            Editor&rsquo;s Pick · This Week&rsquo;s Must-Read
          </div>

          <div className="editor-pick">
            <div className="ep-img-wrap">
              <img
                className="ep-img"
                src={getArticleImage(editorPick)}
                alt={editorPick.title}
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGE;
                }}
              />
              <div className="ep-caption">
                <p>{editorPick.excerpt || editorPick.description}</p>
              </div>
            </div>

            <div className="ep-content">
              <div className="ep-kicker">
                {editorPick.category || "Featured"}
              </div>

              <Link
                href={`/articles/${editorPick.slug}`}
                className="ep-headline"
              >
                {editorPick.title}
              </Link>

              <p className="ep-body">
                {editorPick.description || editorPick.excerpt}
              </p>

              <Link href={`/articles/${editorPick.slug}`} className="ep-read">
                Read the full story →
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="section-banner">
        {searchQuery.trim()
          ? `Search Results · ${articlesForGrid.length} Found`
          : selectedCategory
          ? `${selectedCategory} Stories`
          : "Latest Stories"}
      </div>

      {displayedArticles.length > 0 ? (
        <div className="articles-grid">
          {displayedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="art-card"
            >
              <img
                className="art-thumb"
                src={getArticleImage(article)}
                alt={article.title}
                onError={(e) => {
                  e.currentTarget.src = getCategoryImage(article.category);
                }}
              />
              <div className="art-cat">{article.category || "Article"}</div>
              <div className="art-title">{article.title}</div>
              <span className="art-read">Read →</span>
            </Link>
          ))}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #2d2416",
            background: "#faf5e9",
            padding: "34px 28px",
            textAlign: "center",
            color: "#6b5d47",
            fontStyle: "italic",
          }}
        >
          No stories found. Try a different keyword or section.
        </div>
      )}

      <div className="load-more">
        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + 9)}
            className="load-btn"
            style={{ cursor: "pointer" }}
          >
            Load More Stories
          </button>
        ) : (
          articlesForGrid.length > 0 && (
            <span className="load-btn" style={{ cursor: "default" }}>
              All Stories Loaded
            </span>
          )
        )}

        <p className="load-count">
          Showing {displayedArticles.length} of {articlesForGrid.length}{" "}
          {selectedCategory ? `${selectedCategory} stories` : "stories"}
        </p>
      </div>
    </>
  );
}
