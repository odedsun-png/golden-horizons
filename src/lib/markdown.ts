import fs from "fs";
import path from "path";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type ArticleItem = {
  number: number;
  heading: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  paragraph: string;
};

export type MarkdownArticle = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  date: string;
  items: ArticleItem[];
  closing: string;
};

// ─────────────────────────────────────────────
// Paths
// ─────────────────────────────────────────────

const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

// ─────────────────────────────────────────────
// Parse frontmatter
// ─────────────────────────────────────────────

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const meta: Record<string, string> = {};

  if (!raw.startsWith("---")) {
    return { meta, body: raw };
  }

  const end = raw.indexOf("---", 3);
  if (end === -1) {
    return { meta, body: raw };
  }

  const frontmatter = raw.slice(3, end).trim();
  const body = raw.slice(end + 3).trim();

  for (const line of frontmatter.split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, "");
    meta[key] = value;
  }

  return { meta, body };
}

// ─────────────────────────────────────────────
// Parse article body
// ─────────────────────────────────────────────

function parseArticleBody(body: string): { items: ArticleItem[]; closing: string } {
  const items: ArticleItem[] = [];
  let closing = "";

  // Split body into: item sections (before ---closing---) and closing (after)
  const closingMarkerIdx = body.indexOf("---closing---");
  let itemsBody = body;

  if (closingMarkerIdx !== -1) {
    itemsBody = body.slice(0, closingMarkerIdx).trim();
    closing = body.slice(closingMarkerIdx + "---closing---".length).trim();
  }

  // Split on H2 headings (## Heading)
  const sections = itemsBody.split(/^## /m).filter(Boolean);

  for (const section of sections) {
    const lines = section.split("\n");
    const heading = lines[0].trim();

    if (!heading) continue;

    let image = "";
    let imageAlt = "";
    let imageCredit = "Unsplash";
    const paragraphLines: string[] = [];
    let itemNumber = items.length + 1;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];

      // Image line: ![alt text](url)
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        imageAlt = imgMatch[1];
        image = imgMatch[2];
        // Check next line for credit: *Photo credit: ...*
        if (i + 1 < lines.length && lines[i + 1].match(/^\*Photo credit:/i)) {
          imageCredit = lines[i + 1]
            .replace(/^\*Photo credit:\s*/i, "")
            .replace(/\*$/, "")
            .trim();
          i++;
        }
        continue;
      }

      // Item number comment: <!-- item: 1 -->
      const numMatch = line.match(/<!--\s*item:\s*(\d+)\s*-->/i);
      if (numMatch) {
        itemNumber = parseInt(numMatch[1], 10);
        continue;
      }

      // Skip empty lines
      if (!line.trim()) continue;

      paragraphLines.push(line.trim());
    }

    items.push({
      number: itemNumber,
      heading,
      image,
      imageAlt: imageAlt || heading,
      imageCredit,
      paragraph: paragraphLines.join(" "),
    });
  }

  return { items, closing };
}

// ─────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────

export function parseMarkdownArticle(slug: string): MarkdownArticle | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, body } = parseFrontmatter(raw);
  const { items, closing } = parseArticleBody(body);

  return {
    slug,
    title: meta.title || slug.replace(/-/g, " "),
    category: meta.category || "Travel",
    intro: meta.intro || "",
    date:
      meta.date ||
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    items,
    closing,
  };
}

export function getAllMarkdownSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
