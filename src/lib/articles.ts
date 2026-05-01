import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

interface ArticleData {
  title?: string;
  description?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  heroImage?: string;
  image?: string;
  heroCaption?: string;
  heroAlt?: string;
  intro?: string;
  readTime?: string;
  relatedArticles?: Array<{
    slug: string;
    title: string;
    excerpt?: string;
  }>;
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
  relatedArticles: Array<{
    slug: string;
    title: string;
    excerpt?: string;
  }>;
  disclaimer: boolean;
  content: string;
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
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

    return {
      slug,
      title: articleData.title || 'Untitled',
      description: articleData.description || '',
      excerpt: articleData.excerpt || '',
      author: articleData.author || 'Golden Horizons Editorial Team',
      date: articleData.date || new Date().toISOString().split('T')[0],
      datePublished: articleData.datePublished || articleData.date || new Date().toISOString().split('T')[0],
      dateModified: articleData.dateModified || articleData.date || new Date().toISOString().split('T')[0],
      category: articleData.category || 'Uncategorized',
      heroImage: articleData.heroImage || '',
      image: articleData.image || '',
      heroCaption: articleData.heroCaption || '',
      heroAlt: articleData.heroAlt || '',
      intro: articleData.intro || '',
      readTime: articleData.readTime || '3 min read',
      relatedArticles: articleData.relatedArticles || [],
      disclaimer: articleData.disclaimer !== false,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}
