"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useState } from "react";

type ArticleCategory =
  | string
  | {
      name?: string;
      color?: string;
    };

type Article = {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  category?: ArticleCategory;
  date?: string;
};

type ArticlesClientProps = {
  articles: Article[];
};

const PAGE_SIZE = 12;

function getCategoryName(category: ArticleCategory | undefined): string {
  if (!category) return "Story";
  if (typeof category === "string") return category;
  return category.name || "Story";
}

function getImage(article: Article): string {
  return (
    article.image ||
    article.heroImage ||
    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=900"
  );
}

function getExcerpt(article: Article): string {
  return (
    article.excerpt ||
    article.description ||
    "A Golden Horizons retirement-abroad guide for Americans comparing real costs, lifestyle, healthcare, and practical next steps."
  );
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleArticles = useMemo(() => {
    return articles.slice(0, visibleCount);
  }, [articles, visibleCount]);

  const hasMore = visibleCount < articles.length;

  return (
    <>
      <div className="articles-mag-grid">
        {visibleArticles.map((article, index) => {
          const category = getCategoryName(article.category);

          return (
            <Link
              key={article.id || article.slug}
              href={`/articles/${article.slug}`}
              className={index === 0 ? "article-mag-card featured" : "article-mag-card"}
            >
              <div className="article-mag-image-wrap">
                <img
                  src={getImage(article)}
                  alt={article.title}
                  className="article-mag-image"
                />
              </div>

              <div className="article-mag-body">
                <div className="article-mag-kicker">{category}</div>

                <h2>{article.title}</h2>

                <p>{getExcerpt(article)}</p>

                <span className="article-mag-read">Read this story →</span>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
            className="load-more-btn"
          >
            Load More Articles
          </button>

          <p className="load-more-text">
            {articles.length - visibleCount} more articles remaining
          </p>
        </div>
      )}
    </>
  );
}
