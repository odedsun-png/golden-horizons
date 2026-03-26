"use client";

import Link from "next/link";
import { recentArticles } from "@/lib/data";

export default function RecentStories() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70 mb-3">
            Recent Stories
          </h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {recentArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold font-serif text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: article.category.color }}
                />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  {article.category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-14">
          <button className="px-10 py-3.5 bg-foreground text-background font-semibold tracking-widest uppercase text-sm hover:bg-foreground/90 transition-colors">
            More Stories
          </button>
        </div>
      </div>
    </section>
  );
}
