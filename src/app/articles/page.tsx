import Link from "next/link";
import { getArticleCards } from "@/lib/markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Articles — Golden Horizons",
  description: "Retirement destination guides, cost breakdowns, healthcare tips, and expat stories for Americans planning life abroad.",
};

export default function ArticlesPage() {
  const articles = getArticleCards();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
              All Articles
            </h1>
            <div className="w-12 h-1 bg-primary" />
          </div>
          {articles.length === 0 ? (
            <p className="text-muted-foreground text-lg">No articles published yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((article) => (
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
                      style={{ backgroundColor: article.category.color }}
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
