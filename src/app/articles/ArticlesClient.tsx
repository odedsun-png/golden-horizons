"use client";

import Link from "next/link";

type ArticleCategory =
  | string
  | {
      name?: string;
      color?: string;
    };

type ArticleCard = {
  slug: string;
  title: string;
  category?: ArticleCategory;
  excerpt?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  date?: string;
  readTime?: string;
};

type ArticlesClientProps = {
  articles: ArticleCard[];
};

const fallbackImage =
  "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800";

function getArticleImage(article: ArticleCard): string {
  return article.image || article.heroImage || fallbackImage;
}

function getArticleExcerpt(article: ArticleCard): string {
  return (
    article.excerpt ||
    article.description ||
    "A practical Golden Horizons guide for Americans exploring retirement abroad."
  );
}

function getCategoryName(category?: ArticleCategory): string {
  if (!category) return "Retirement Abroad";
  if (typeof category === "string") return category;
  return category.name || "Retirement Abroad";
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="archive-empty">
        <h2>No articles found</h2>
        <p>Articles will appear here once they are published.</p>
      </div>
    );
  }

  return (
    <div className="articles-mag-list">
      {articles.map((article) => (
        <article key={article.slug} className="article-row">
          <Link href={`/articles/${article.slug}`} className="article-thumb-link">
            <img
              src={getArticleImage(article)}
              alt={article.title}
              className="article-thumb"
            />
          </Link>

          <div className="article-row-content">
            <div className="article-category">
              {getCategoryName(article.category)}
            </div>

            <h2 className="article-row-title">
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>

            <p className="article-row-excerpt">{getArticleExcerpt(article)}</p>

            <div className="article-meta">
              <span>{article.date || "2026"}</span>
              <span>·</span>
              <span>{article.readTime || "3 min read"}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
