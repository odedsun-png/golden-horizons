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
// Parse a single Markdown file
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

function parseArticleBody(body: string): { items: ArticleItem[]; closing: string } {
  const items: ArticleItem[] = [];
  let closing = "";

  // Split on H2 headings (## Heading)
  // Each item block starts with ## and contains image, paragraph, and optional closing
  const sections = body.split(/^## /m).filter(Boolean);

  // Check for a closing block (starts with "---closing---" or is the last non-item section)
  let closingRaw = "";

  for (const section of sections) {
    const lines = section.split("\n");
    const heading = lines[0].trim();

    // Skip if this is a closing marker
    if (heading.toLowerCase() === "closing" || heading.toLowerCase() === "summary") {
      closingRaw = lines.slice(1).join("\n").trim();
      continue;
    }

    // Parse image line: ![alt](url) or with credit comment
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
        // Check next line for credit
        if (i + 1 < lines.length && lines[i + 1].startsWith("*Photo credit:")) {
          imageCredit = lines[i + 1].replace(/^\*Photo credit:\s*/i, "").replace(/\*$/, "").trim();
          i++; // skip credit line
        }
        continue;
      }

      // Item number comment: <!-- item: 1 -->
      const numMatch = line.match(/<!--\s*item:\s*(\d+)\s*-->/i);
      if (numMatch) {
        itemNumber = parseInt(numMatch[1], 10);
        continue;
      }

      // Paragraph text (skip empty lines)
      if (line.trim()) {
        paragraphLines.push(line.trim());
      }
    }

    if (heading) {
      items.push({
        number: itemNumber,
        heading,
        image,
        imageAlt: imageAlt || heading,
        imageCredit,
        paragraph: paragraphLines.join(" "),
      });
    }
  }

  // Look for closing block after the last ## section
  const closingMatch = body.match(/^---closing---\s*\n([\s\S]+?)(?:^---|\s*$)/m);
  if (closingMatch) {
    closing = closingMatch[1].trim();
  } else if (closingRaw) {
    closing = closingRaw;
  }

  return { items, closing };
}

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
    date: meta.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    items,
    closing,
  };
}

// ─────────────────────────────────────────────
// Get all article slugs from the content directory
// ─────────────────────────────────────────────

export function getAllMarkdownSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
