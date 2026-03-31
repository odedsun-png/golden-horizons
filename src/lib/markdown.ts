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
// Unsplash image lookup by keyword
// ─────────────────────────────────────────────

const UNSPLASH_KEYWORDS: Record<string, string> = {
  bath: "photo-1534445867742-43195f401b6c",
  spa: "photo-1544161515-4ab6ce6db874",
  europe: "photo-1467269204594-9661b134dd2b",
  travel: "photo-1488646953014-85cb44e25828",
  vintage: "photo-1516483638261-f4dbaf036963",
  booking: "photo-1436491865332-7a61a109cc05",
  vacation: "photo-1507525428034-b723cf961d3e",
  city: "photo-1480714378408-67cf0d13bc1b",
  train: "photo-1474487548417-781cb6d646b3",
  map: "photo-1524661135-423995f22d0b",
  guidebook: "photo-1481627834876-b7833e8f5570",
  hotel: "photo-1566073771259-6a8506099945",
  food: "photo-1414235077428-338989a2e8c0",
  beach: "photo-1507525428034-b723cf961d3e",
  mountain: "photo-1464822759023-fed622ff2c3b",
  portugal: "photo-1555881400-74d7acaacd8b",
  france: "photo-1502602898657-3e91760cbb34",
  italy: "photo-1516483638261-f4dbaf036963",
  greece: "photo-1533105079780-92b9be482077",
  spain: "photo-1543783207-ec64e4d95325",
  retirement: "photo-1516483638261-f4dbaf036963",
  retiree: "photo-1488646953014-85cb44e25828",
};

function getUnsplashImage(heading: string): string {
  const lower = heading.toLowerCase();
  for (const [keyword, photoId] of Object.entries(UNSPLASH_KEYWORDS)) {
    if (lower.includes(keyword)) {
      return `https://images.unsplash.com/${photoId}?w=800&q=80`;
    }
  }
  // Default travel image
  return `https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80`;
}

// ─────────────────────────────────────────────
// Detect format: proper Markdown vs Make.com raw
// ─────────────────────────────────────────────

function isProperMarkdown(raw: string): boolean {
  return raw.startsWith("---") || raw.includes("\n## ");
}

// ─────────────────────────────────────────────
// Parse frontmatter (for proper Markdown files)
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
    let imageCredit = "Unsplash";
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

    // Auto-assign image if none found
    if (!image) {
      image = getUnsplashImage(heading);
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
// Parse Make.com raw format: "Title&\n\n&Intro&\n\n&Heading&\n\n*&Para1&\n\n&Para2"
// ─────────────────────────────────────────────

function parseMakeComRaw(raw: string): {
  title: string;
  intro: string;
  items: ArticleItem[];
  closing: string;
} {
  // The file contains literal backslash-n characters (\n as two chars, not newline)
  // Separator pattern is: &\n\n& (ampersand + backslash + n + backslash + n + ampersand)
  // We split on this literal 6-char sequence
  const SEP = "&\\n\\n&";
  const rawParts = raw.split(SEP);

  // Clean each part: remove leading/trailing & and *& markers
  const parts = rawParts
    .map((p) => p.replace(/^&|&$/g, "").replace(/^\*&|&\*$|^\*/, "").trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return { title: raw, intro: "", items: [], closing: "" };
  }

  const title = parts[0];
  const intro = parts[1] || "";
  const items: ArticleItem[] = [];
  const closing = "";

  // Remaining parts alternate between headings and paragraphs
  // Pattern: Heading, *paragraph, paragraph, Heading, *paragraph, paragraph...
  // A heading is typically Title Case or starts with a number/keyword
  // A paragraph starts with * or is plain text after a heading

  let i = 2;
  while (i < parts.length) {
    const part = parts[i];

    // Check if this looks like a section heading (not starting with * or lowercase)
    const isHeading =
      !part.startsWith("*") &&
      (part.match(/^[A-Z0-9#]/) || part.match(/^Secret|^Tip|^Place|^Town|^City|^Way/i));

    if (isHeading) {
      const heading = part.replace(/^#+\s*/, "").trim();
      const paragraphParts: string[] = [];

      // Collect following paragraphs until next heading
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
        image: getUnsplashImage(heading),
        imageAlt: heading,
        imageCredit: "Unsplash",
        paragraph: paragraphParts.join(" "),
      });

      i = j;
    } else {
      // Orphan paragraph — attach to last item or skip
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
