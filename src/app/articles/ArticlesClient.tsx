"use client";
import { useState } from "react";
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

const CATEGORY_IMAGES: Record<string, string> = {
  Beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  Healthcare: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80",
  Cost: "https://images.unsplash.com/photo-1554224311-beee4119872e?w=400&q=80",
  Finance: "https://images.unsplash.com/photo-1554224311-beee4119872e?w=400&q=80",
  Tax: "https://images.unsplash.com/photo-1554224311-beee4119872e?w=400&q=80",
  Visa: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
  "Real Estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  Safety: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80",
  Solo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
  Culture: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  "Best Cities": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80",
  Explore: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80",
  Countries: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  Lifestyle: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
  Strategy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
};

const DEFAULT_IMAGE = "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400";

type Props = {
  articles: Article[];
  categoryGroups: Record<string, Article[]>;
  categories: string[];
  editorPick: Article | null;
};

export default function ArticlesClient({ articles, categoryGroups, categories, editorPick }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredArticles = selectedCategory
    ? categoryGroups[selectedCategory] || []
    : articles;

  const displayedArticles = filteredArticles.slice(1, visibleCount + 1);
  const hasMore = filteredArticles.length > visibleCount + 1;

  function getArticleImage(article: Article): string {
    if (article.heroImage) return article.heroImage;
    if (article.image) return article.image;
    if (article.category && CATEGORY_IMAGES[article.category]) {
      return CATEGORY_IMAGES[article.category];
    }
    return DEFAULT_IMAGE;
  }

  return (
    <>
      <div className="section-banner">Browse by Section</div>
      <div className="cat-index">
        <button
          onClick={() => {
            setSelectedCategory(null);
            setVisibleCount(18);
          }}
          className={`cat-cell ${!selectedCategory ? "active" : ""}`}
          style={{ cursor: "pointer", textAlign: "left" }}
        >
          <div className="cat-name">All Stories</div>
          <div className="cat-count">{articles.length} articles</div>
          <div className="cat-desc">Every destination we&rsquo;ve covered</div>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(18);
            }}
            className={`cat-cell ${selectedCategory === cat ? "active" : ""}`}
            style={{ cursor: "pointer", textAlign: "left" }}
          >
            <div className="cat-name">{cat}</div>
            <div className="cat-count">{categoryGroups[cat].length} articles</div>
            <div className="cat-desc">Browse {cat.toLowerCase()} stories</div>
          </button>
        ))}
      </div>

      {editorPick && !selectedCategory && (
        <>
          <div className="section-banner">Editor&rsquo;s Pick · This Week&rsquo;s Must-Read</div>
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
              <div className="ep-kicker">{editorPick.category || 'Featured'}</div>
              <Link href={`/articles/${editorPick.slug}`} className="ep-headline">
                {editorPick.title}
              </Link>
              <p className="ep-body">{editorPick.description || editorPick.excerpt}</p>
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
            <div className="art-cat">{article.category || 'Article'}</div>
            <div className="art-title">{article.title}</div>
            <span className="art-read">Read →</span>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="load-more">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="load-btn"
            style={{ cursor: "pointer" }}
          >
            Load More Stories
          </button>
          <p className="load-count">
            Showing {displayedArticles.length} of {filteredArticles.length - 1} articles
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      )}
    </>
  );
}
