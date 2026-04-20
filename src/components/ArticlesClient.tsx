"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

const CATEGORIES = [
  "All",
  "Beach",
  "Best Cities",
  "Cost",
  "Culture",
  "Expat",
  "Healthcare",
  "Hidden Gems",
  "Real Estate",
  "Safety",
  "Visa",
];

const PAGE_SIZE = 12;

const CAT_COLORS: Record<string, string> = {
  "Beach":        "#0ea5e9",
  "Best Cities":  "#8b5cf6",
  "Cost":         "#f59e0b",
  "Culture":      "#ec4899",
  "Expat":        "#10b981",
  "Healthcare":   "#ef4444",
  "Hidden Gems":  "#6366f1",
  "Real Estate":  "#f97316",
  "Safety":       "#14b8a6",
  "Visa":         "#84cc16",
};

type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: { name: string; color: string };
};

export default function ArticlesClient({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter(
      (a) => a.category.name.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory, articles]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      {/* Category filter bar */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat === "All" ? "#c8a84e" : CAT_COLORS[cat] || "#888";
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(PAGE_SIZE);
                }}
                style={{
                  backgroundColor: isActive ? color : "transparent",
                  borderColor: isActive ? color : "#e2e8f0",
                  color: isActive ? "#ffffff" : "#64748b",
                }}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-8">
        {filtered.length === 0
          ? "No articles found."
          : `Showing ${Math.min(visibleCount, filtered.length)} of ${filtered.length} article${filtered.length !== 1 ? "s" : ""}${activeCategory !== "All" ? ` in ${activeCategory}` : ""}`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-lg">No articles in this category yet.</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {visible.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: CAT_COLORS[article.category.name] || article.category.color }}
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {article.category.name}
                  </span>
                </div>
                <h2 className="font-bold font-serif text-xl leading-snug mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-14">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="px-10 py-3.5 border-2 border-foreground/20 rounded text-sm font-semibold tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Load More Articles
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                {filtered.length - visibleCount} more article{filtered.length - visibleCount !== 1 ? "s" : ""} remaining
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
