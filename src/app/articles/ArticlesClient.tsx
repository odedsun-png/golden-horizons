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
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&q=80",
  Beach:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80",
  Cost:
    "https://images.unsplash.com/photo-1554224311-beee4119872e?w=500&q=80",
  Finance:
    "https://images.unsplash.com/photo-1554224311-beee4119872e?w=500&q=80",
  Tax:
    "https://images.unsplash.com/photo-1554224311-beee4119872e?w=500&q=80",
  Visa:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80",
  "Real Estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
  Safety:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80",
  Solo:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80",
  Culture:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
  "Best Cities":
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&q=80",
  Explore:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80",
  Countries:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  Lifestyle:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80",
  Strategy:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
  Uncategorized:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&q=80",
  LEGIT:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80",
};

const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=500";

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

export default function ArticlesClient({
  articles,
  categoryGroups,
  categories,
  editorPick,
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredArticles = useMemo(() => {
    if (!selectedCategory) {
      return articles;
    }

    return categoryGroups[selectedCategory] || [];
  }, [articles, categoryGroups, selectedCategory]);

  const articlesForGrid = useMemo(() => {
    if (!selectedCategory && editorPick) {
      return filteredArticles.filter(
        (article) => article.slug !== editorPick.slug
      );
    }

    return filteredArticles;
  }, [filteredArticles, selectedCategory, editorPick]);

  const displayedArticles = articlesForGrid.slice(0, visibleCount);
  const hasMore = displayedArticles.length < articlesForGrid.length;

  function selectCategory(category: string | null) {
    setSelectedCategory(category);
    setVisibleCount(18);
  }

  return (
    <>
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
            style={{
              width: "100%",
              height: 82,
              objectFit: "cover",
              borderBottom: "1px solid #c9b896",
              marginBottom: 12,
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
              style={{
                width: "100%",
                height: 82,
                objectFit: "cover",
                borderBottom: "1px solid #c9b896",
                marginBottom: 12,
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

      {editorPick && !selectedCategory && (
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
        {selectedCategory ? `${selectedCategory} Stories` : "Latest Stories"}
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
            padding: "28px",
            textAlign: "center",
            color: "#6b5d47",
            fontStyle: "italic",
          }}
        >
          No stories found in this section yet.
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
