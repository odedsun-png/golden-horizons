import { getArticleCards } from "@/lib/markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlesClient from "@/components/ArticlesClient";

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
          <div className="mb-10">
            <h1 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
              All Articles
            </h1>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <ArticlesClient articles={articles} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
