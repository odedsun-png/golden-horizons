"use client";

import Link from "next/link";
import { featuredArticles } from "@/lib/data";

export default function FeaturedStories() {
  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
            Featured Stories
          </h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Article */}
          <Link
            href={`/article/${mainArticle.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5">
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

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
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
                  <h4 className="font-bold text-lg font-serif leading-snug mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: article.category.color }}
                    />
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {article.category.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
