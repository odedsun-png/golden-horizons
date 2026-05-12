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
  date?: string;
  displayCategory: string;
};
type Props = {
  articles: Article[];
  categoryGroups: Record<string, Article[]>;
  categories: string[];
  editorPick: Article | null;
};
const CATEGORY_IMAGES: Record<string, string> = {
  "All Stories":
    "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800",
  Beach:
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Best Cities":
    "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
  Climate:
    "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
  Comparison:
    "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=800",
  Cost:
    "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800",
  Finance:
    "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
  Tax:
    "https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=800",
  Visa:
    "https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Real Estate":
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
  Safety:
    "https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=800",
  Solo:
    "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=800",
  Culture:
    "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
  Expat:
    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800",
  Healthcare:
    "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Hidden Gems":
    "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=800",
  LGBTQ:
    "https://images.pexels.com/photos/3810832/pexels-photo-3810832.jpeg?auto=compress&cs=tinysrgb&w=800",
  Logistics:
    "https://images.pexels.com/photos/736830/pexels-photo-736830.jpeg?auto=compress&cs=tinysrgb&w=800",
  Explore:
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
  Countries:
    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
  Lifestyle:
    "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800",
  Strategy:
    "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
  Uncategorized:
    "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800",
  LEGIT:
    "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Food Culture":
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Expat Life":
    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800",
};
const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800";
const MAX_ARTICLES = 9; // 3 columns × 3 rows
function slugHash(slug: string): number {
  let h = 5381;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) + h) ^ slug.charCodeAt(i);
  }
  return Math.abs(h);
}
function buildMixedArticles(
  allArticles: Article[],
  groups: Record<string, Article[]>,
  maxCount: number
): Article[] {
  const cats = Object.keys(groups).sort();
  if (cats.length === 0) {
    return [...allArticles]
      .sort((a, b) => slugHash(a.slug) - slugHash(b.slug))
      .slice(0, maxCount);
  }
  const sortedGroups: Record<string, Article[]> = {};
  for (const cat of cats) {
    sortedGroups[cat] = [...groups[cat]].sort(
      (a, b) => slugHash(a.slug) - slugHash(b.slug)
    );
  }
  const indices: Record<string, number> = {};
  for (const cat of cats) indices[cat] = 0;
  const result: Article[] = [];
  while (result.length < maxCount) {
    let added = false;
    for (const cat of cats) {
      if (result.length >= maxCount) break;
      const idx = indices[cat];
      if (idx < sortedGroups[cat].length) {
        result.push(sortedGroups[cat][idx]);
        indices[cat]++;
        added = true;
      }
    }
    if (!added) break;
  }
  return result;
}
function normalizeCategory(category?: string) {
  return category?.trim() || "Uncategorized";
}
function getCategoryImage(category?: string) {
  const normalized = normalizeCategory(category);
  return CATEGORY_IMAGES[normalized] || DEFAULT_IMAGE;
}
function getNewestArticleImage(categoryArticles: Article[]): string {
  const sorted = [...categoryArticles].sort((a, b) =>
    (b.date || "").localeCompare(a.date || "")
  );
  const newest = sorted[0];
  if (!newest) return DEFAULT_IMAGE;
  return (
    newest.heroImage?.trim() ||
    newest.image?.trim() ||
    CATEGORY_IMAGES[newest.displayCategory] ||
    DEFAULT_IMAGE
  );
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
  const articlesForGrid = useMemo(() => {
    if (selectedCategory) {
      return [...(categoryGroups[selectedCategory] || [])]
        .sort((a, b) => slugHash(a.slug) - slugHash(b.slug))
        .slice(0, MAX_ARTICLES);
    }
    return buildMixedArticles(articles, categoryGroups, MAX_ARTICLES);
  }, [articles, categoryGroups, selectedCategory]);
  const categoryCards = [
    {
      label: "All Stories",
      count: articles.length,
      desc: "Every destination we’ve covered",
      category: null as string | null,
      image: getCategoryImage("All Stories"),
    },
    ...categories.map((category) => ({
      label: category,
      count: categoryGroups[category]?.length || 0,
      desc: `Browse ${category.toLowerCase()} stories`,
      category,
      image: getNewestArticleImage(categoryGroups[category] || []),
    })),
  ];
  function scrollToResults() {
    window.setTimeout(() => {
      const resultsSection = document.getElementById("article-results");
      if (!resultsSection) return;
      const y = resultsSection.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 150);
  }
  function selectCategory(category: string | null) {
    setSelectedCategory(category);
    scrollToResults();
  }
  function clearFilters() {
    setSelectedCategory(null);
    scrollToResults();
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
          Explore the Archive
        </div>
        <h2
          style={{
            margin: "0 0 18px",
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 30,
            lineHeight: 1.1,
            color: "#1a0f00",
          }}
        >
          Browse retirement abroad stories by topic.
        </h2>
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
          {categories.map((category) => (
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
            ))}
          {selectedCategory && (
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
      <div
        className="cat-index grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        style={{
          gap: 0,
          borderLeft: "1px solid #c9a84c",
          borderTop: "1px solid #c9a84c",
        }}
      >
        {categoryCards.map((item) => {
          const isActive =
            item.category === null
              ? !selectedCategory
              : selectedCategory === item.category;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => selectCategory(item.category)}
              className={`cat-cell ${isActive ? "active" : ""}`}
              style={{
                cursor: "pointer",
                textAlign: "left",
                padding: 0,
                border: "none",
                borderRight: "1px solid #c9a84c",
                borderBottom: "1px solid #c9a84c",
                background: "#1a0f00",
                overflow: "hidden",
                minHeight: 210,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  transition: "transform 0.25s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive
                    ? "linear-gradient(to top, rgba(17,10,2,0.94), rgba(17,10,2,0.64), rgba(17,10,2,0.22))"
                    : "linear-gradient(to top, rgba(25,15,3,0.88), rgba(25,15,3,0.55), rgba(25,15,3,0.18))",
                  boxShadow: isActive ? "inset 0 0 0 3px #c9a84c" : "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  minHeight: 210,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px 14px 14px",
                }}
              >
                <div
                  className="cat-name"
                  style={{
                    color: "#fff8e8",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: 28,
                    lineHeight: 1.05,
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="cat-count"
                  style={{
                    color: "#f5d06f",
                    fontSize: 13,
                    fontStyle: "italic",
                    marginBottom: 6,
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                >
                  {item.count} articles
                </div>
                <div
                  className="cat-desc"
                  style={{
                    color: "#f6ead0",
                    fontSize: 13,
                    lineHeight: 1.35,
                    fontFamily: "var(--font-garamond), Georgia, serif",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </button>
          );
        })}
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
                {editorPick.displayCategory || "Featured"}
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
      <div id="article-results" className="section-banner">
        {selectedCategory ? `${selectedCategory} Stories` : "Latest Stories"}
      </div>
      {articlesForGrid.length > 0 ? (
        <div className="articles-grid">
          {articlesForGrid.map((article) => (
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
                  e.currentTarget.src = getCategoryImage(article.displayCategory);
                }}
              />
              <div className="art-cat">{article.displayCategory}</div>
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
          No stories found in this section yet.
        </div>
      )}
      <div className="load-more">
        <p className="load-count">
          Showing {articlesForGrid.length}{" "}
          {selectedCategory ? `${selectedCategory} stories` : "stories"}
        </p>
      </div>
    </>
  );
}
