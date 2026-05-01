import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

type RelatedArticle = {
  slug: string;
  title: string;
  excerpt?: string;
};

interface ArticleData {
  title?: string;
  description?: string;
  excerpt?: string;
  author?: string;
  date?: string | Date;
  datePublished?: string | Date;
  dateModified?: string | Date;
  category?: string;
  heroImage?: string;
  image?: string;
  heroCaption?: string;
  heroAlt?: string;
  intro?: string;
  readTime?: string;
  relatedArticles?: RelatedArticle[];
  disclaimer?: boolean;
  [key: string]: unknown;
}

interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  datePublished: string;
  dateModified: string;
  category: string;
  heroImage: string;
  image: string;
  heroCaption: string;
  heroAlt: string;
  intro: string;
  readTime: string;
  relatedArticles: RelatedArticle[];
  disclaimer: boolean;
  content: string;
}

function safeString(value: unknown, fallback = ''): string {
  if (value === null || value === undefined) return fallback;

  if (value instanceof Date) {
    return value.toISOString().split('T')[0];
  }

  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return String(value);

  return fallback;
}

function safeDate(value: unknown, fallback?: unknown): string {
  const picked = value ?? fallback ?? new Date();

  if (picked instanceof Date) {
    return picked.toISOString().split('T')[0];
  }

  if (typeof picked === 'string') {
    return picked;
  }

  return new Date().toISOString().split('T')[0];
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const articleData = data as ArticleData;

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    const cleanDate = safeDate(articleData.date);
    const cleanDatePublished = safeDate(articleData.datePublished, articleData.date);
    const cleanDateModified = safeDate(articleData.dateModified, articleData.date);

    return {
      slug,
      title: safeString(articleData.title, 'Untitled'),
      description: safeString(articleData.description),
      excerpt: safeString(articleData.excerpt),
      author: safeString(articleData.author, 'Golden Horizons Editorial Team'),
      date: cleanDate,
      datePublished: cleanDatePublished,
      dateModified: cleanDateModified,
      category: safeString(articleData.category, 'Uncategorized'),
      heroImage: safeString(articleData.heroImage),
      image: safeString(articleData.image),
      heroCaption: safeString(articleData.heroCaption),
      heroAlt: safeString(articleData.heroAlt),
      intro: safeString(articleData.intro),
      readTime: safeString(articleData.readTime, '3 min read'),
      relatedArticles: Array.isArray(articleData.relatedArticles)
        ? articleData.relatedArticles
        : [],
      disclaimer: articleData.disclaimer !== false,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}
