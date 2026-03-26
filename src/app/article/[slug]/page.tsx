import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, getAllArticles } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Article Card */}
          <div className="bg-white rounded-sm shadow-lg p-8 md:p-12">
            {/* Category */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: article.category.color }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                {article.category.name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">
              {article.title}
            </h1>

            {/* Intro */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
              {article.intro}
            </p>

            {/* Divider */}
            <div className="w-16 h-1 bg-primary mb-8" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => {
                // Check if paragraph is a heading (starts with **)
                if (paragraph.startsWith("**") && paragraph.includes("**")) {
                  const headingMatch = paragraph.match(/^\*\*(.+?)\*\*/);
                  if (headingMatch) {
                    const heading = headingMatch[1];
                    const rest = paragraph.replace(/^\*\*.+?\*\*\n?/, "");
                    return (
                      <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold font-serif mb-2">{heading}</h3>
                        {rest && <p className="text-foreground/80 leading-relaxed">{rest}</p>}
                      </div>
                    );
                  }
                }

                // Check if paragraph contains bullet points
                if (paragraph.includes("\n- ")) {
                  const lines = paragraph.split("\n");
                  const items = lines.filter(line => line.startsWith("- "));
                  const nonItems = lines.filter(line => !line.startsWith("- ")).join(" ");

                  return (
                    <div key={index} className="mb-6">
                      {nonItems && <p className="text-foreground/80 leading-relaxed mb-2">{nonItems}</p>}
                      <ul className="list-disc list-inside space-y-1">
                        {items.map((item, i) => (
                          <li key={i} className="text-foreground/80">{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Back Button Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">Back to all stories</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Spacer */}
        <div className="h-20" />
      </main>

      <Footer />
    </div>
  );
}
