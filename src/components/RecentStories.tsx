import Link from "next/link";

import { getArticleCards } from "@/lib/markdown";

export default async function RecentStories() {

  const articles = getArticleCards(6);

  if (articles.length === 0) return null;

  return (

    <section className="py-16 md:py-20 bg-muted/30">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">

          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">

            Recent Stories

          </h2>

          <div className="w-12 h-1 bg-primary" />

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (

            <Link

              key={article.id}

              href={`/articles/${article.slug}`}

              className="group block"

            >

              <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-4">

                <img

                  src={article.image}

                  alt={article.title}

                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"

                />

              </div>

              <div className="flex items-center gap-2 mb-2">

                <span

                  className="w-2 h-2 rounded-full"

                  style={{ backgroundColor: article.category.color }}

                />

                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">

                  {article.category.name}

                </span>

              </div>

              <h3 className="font-bold font-serif leading-tight mb-2 group-hover:text-primary transition-colors">

                {article.title}

              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">

                {article.excerpt}

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );

}
