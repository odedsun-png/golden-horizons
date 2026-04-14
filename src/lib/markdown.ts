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
  image?: string;
  closing: string;
};

// ─────────────────────────────────────────────
// Paths
// ─────────────────────────────────────────────

const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

// ─────────────────────────────────────────────
// Detect format: proper Markdown vs Make.com raw
// ─────────────────────────────────────────────

function isProperMarkdown(raw: string): boolean {
  return raw.startsWith("---") || raw.includes("\n## ");
}

// ─────────────────────────────────────────────
// Parse frontmatter (for proper Markdown files)
// ─────────────────────────────────────────────
// FIXED: Handles both real newlines (\n) and literal escape sequences (\\n)
// This is needed because Make.com scenarios may write literal \n instead of real newlines

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
  let body = raw.slice(end + 3).trim();

  // CRITICAL FIX: Support both real newlines (\n) and literal escape sequences (\\n)
  // GitHub Actions/Make.com sometimes writes literal \n instead of real newlines
  const lines = frontmatter.includes("\\n")
    ? frontmatter.split("\\n")
    : frontmatter.split("\n");

  for (const line of lines) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, "");
    meta[key] = value;
  }

  // CRITICAL FIX: Strip leading \n sequences and H1 title line from body
  // Pattern: ^(\\n)*#[^\n]*(\n|\\n)?
  // This removes: literal \n at start + H1 heading + optional newline after
  body = body.replace(/^(\\n)*#[^\n]*(\n|\\n)?/, "").trim();

  return { meta, body };
}

// ─────────────────────────────────────────────
// Parse proper Markdown body (## headings format)
// ─────────────────────────────────────────────

function parseProperMarkdownBody(body: string): { items: ArticleItem[]; closing: string } {
  const items: ArticleItem[] = [];
  let closing = "";

  const closingMarkerIdx = body.indexOf("---closing---");
  let itemsBody = body;
  if (closingMarkerIdx !== -1) {
    itemsBody = body.slice(0, closingMarkerIdx).trim();
    closing = body.slice(closingMarkerIdx + "---closing---".length).trim();
  }

  const sections = itemsBody.split(/^## /m).filter(Boolean);
  for (const section of sections) {
    const lines = section.split("\n");
    const heading = lines[0].trim();
    if (!heading) continue;

    let image = "";
    let imageAlt = "";
    let imageCredit = "Pexels";
    const paragraphLines: string[] = [];
    let itemNumber = items.length + 1;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        imageAlt = imgMatch[1];
        image = imgMatch[2];
        if (i + 1 < lines.length && lines[i + 1].match(/^\*Photo credit:/i)) {
          imageCredit = lines[i + 1]
            .replace(/^\*Photo credit:\s*/i, "")
            .replace(/\*$/, "")
            .trim();
          i++;
        }
        continue;
      }
      const numMatch = line.match(/<!--\s*item:\s*(\d+)\s*-->/i);
      if (numMatch) {
        itemNumber = parseInt(numMatch[1], 10);
        continue;
      }
      if (!line.trim()) continue;
      paragraphLines.push(line.trim());
    }

    // NO fallback image — if no ![photo] tag exists, image stays empty
    // This prevents generic stock photos from appearing in sections
    // that intentionally have no image (e.g., "Why Retire Here")

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
// Parse Make.com raw format
// ─────────────────────────────────────────────

function parseMakeComRaw(raw: string): {
  title: string;
  intro: string;
  items: ArticleItem[];
  closing: string;
} {
  const rawParts = raw.split(/&\\n\\n\*?&/);

  const parts = rawParts
    .map((p) => p.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return { title: raw, intro: "", items: [], closing: "" };
  }

  const title = parts[0];
  const intro = parts[1] || "";
  const items: ArticleItem[] = [];
  const closing = "";

  let i = 2;
  while (i < parts.length) {
    const part = parts[i];

    const isHeading =
      !part.startsWith("*") &&
      (part.match(/^[A-Z0-9#]/) || part.match(/^Secret|^Tip|^Place|^Town|^City|^Way/i));

    if (isHeading) {
      const heading = part.replace(/^#+\s*/, "").trim();
      const paragraphParts: string[] = [];

      let j = i + 1;
      while (j < parts.length) {
        const next = parts[j];
        const nextIsHeading =
          !next.startsWith("*") &&
          (next.match(/^[A-Z0-9#]/) || next.match(/^Secret|^Tip|^Place|^Town|^City|^Way/i)) &&
          next !== intro;

        if (nextIsHeading && paragraphParts.length > 0) break;

        paragraphParts.push(next.replace(/^\*/, "").trim());
        j++;
      }

      items.push({
        number: items.length + 1,
        heading,
        image: "",
        imageAlt: heading,
        imageCredit: "Pexels",
        paragraph: paragraphParts.join(" "),
      });

      i = j;
    } else {
      if (items.length > 0) {
        items[items.length - 1].paragraph += " " + part.replace(/^\*/, "").trim();
      }
      i++;
    }
  }

  return { title, intro, items, closing };
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

  if (isProperMarkdown(raw)) {
    // ── Proper Markdown format ──
    const { meta, body } = parseFrontmatter(raw);
    const { items, closing } = parseProperMarkdownBody(body);
    return {
      slug,
      title: meta.title || slug.replace(/-/g, " "),
      category: meta.category || "Travel",
      intro: meta.intro || "",
      image: meta.image || "",
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
  } else {
    // ── Make.com raw format ──
    const { title, intro, items, closing } = parseMakeComRaw(raw);
    return {
      slug,
      title: title || slug.replace(/-/g, " "),
      category: "Travel",
      image: "",
      intro,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      items,
      closing,
    };
  }
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
