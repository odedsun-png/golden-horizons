import Link from "next/link";
import { getArticleCards } from "@/lib/markdown";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default async function FeaturedStories() {
  const all = getArticleCards(100);
  if (all.length === 0) return null;

  const articles = shuffleArray(all).slice(0, 4);
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
            Featured Stories
          </h2>
          <div className="w-12 h-1 bg-primary" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Link href={`/articles/${mainArticle.slug}`} className="group block">
            <div className="relative h-[220px] sm:h-[280px] md:aspect-[4/3] md:h-auto overflow-hidden rounded-sm mb-5">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif leading-tight mb-3 group-hover:text-primary transition-colors">
              {mainArticle.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {mainArticle.excerpt}
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: mainArticle.category.color }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {mainArticle.category.name}
              </span>
            </div>
          </Link>
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group flex gap-5"
              >
                <div className="relative w-40 h-28 flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: article.category.color }}
                    />
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {article.category.name}
                    </span>
                  </div>
                  <h4 className="font-bold font-serif leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
