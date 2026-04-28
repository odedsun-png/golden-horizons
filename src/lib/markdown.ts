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
// Fallback images — keyed by country slug prefix
// Applied in getArticleCards() when image is empty/missing
// ─────────────────────────────────────────────

const FALLBACK_IMAGES: Record<string, string> = {
  "portugal":       "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
  "mexico":         "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80",
  "costa-rica":     "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
  "spain":          "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
  "panama":         "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "thailand":       "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
  "ecuador":        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&q=80",
  "malaysia":       "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
  "greece":         "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
  "colombia":       "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
  "vietnam":        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
  "italy":          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
  "france":         "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  "new-zealand":    "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
  "azores":         "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80",
  "malta":          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "belize":         "https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?w=800&q=80",
  "argentina":      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80",
  "bolivia":        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&q=80",
  "cambodia":       "https://images.unsplash.com/photo-1568733126608-7cd9b0a753c6?w=800&q=80",
  "cyprus":         "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=800&q=80",
  "philippines":    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80",
  "paraguay":       "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
  "indonesia":      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  "albania":        "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80",
  "montenegro":     "https://images.unsplash.com/photo-1555990538-c01c6462f8e2?w=800&q=80",
  "croatia":        "https://images.unsplash.com/photo-1555990538-c01c6462f8e2?w=800&q=80",
  "georgia":        "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800&q=80",
  "armenia":        "https://images.unsplash.com/photo-1589182337358-2cb63099350c?w=800&q=80",
  "peru":           "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
  "morocco":        "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800&q=80",
  "turkey":         "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
};

/**
 * Match slug prefix to a fallback image.
 * Tries longest key first so "costa-rica" beats "costa".
 */
function getFallbackImage(slug: string): string {
  const lower = slug.toLowerCase();
  const keys = Object.keys(FALLBACK_IMAGES).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (lower.startsWith(key)) return FALLBACK_IMAGES[key];
  }
  // Generic travel photo as last resort
  return "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80";
}

// ─────────────────────────────────────────────
// Detect format
// ─────────────────────────────────────────────

function isProperMarkdown(raw: string): boolean {
  return raw.startsWith("---") || raw.includes("\n## ");
}

// ─────────────────────────────────────────────
// Parse frontmatter
// ─────────────────────────────────────────────

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const meta: Record<string, string> = {};
  if (!raw.startsWith("---")) return { meta, body: raw };
  const end = raw.indexOf("---", 3);
  if (end === -1) return { meta, body: raw };
  const frontmatter = raw.slice(3, end).trim();
  let body = raw.slice(end + 3).trim();

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

  body = body.replace(/^(\\n)*#[^\n]*(\n|\\n)?/, "").trim();
  return { meta, body };
}

// ─────────────────────────────────────────────
// Parse proper Markdown body
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
  title: string; intro: string; items: ArticleItem[]; closing: string;
} {
  const rawParts = raw.split(/&\\n\\n\*?&/);
  const parts = rawParts.map((p) => p.trim()).filter(Boolean);

  if (parts.length === 0) return { title: raw, intro: "", items: [], closing: "" };

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
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");

  if (isProperMarkdown(raw)) {
    const { meta, body } = parseFrontmatter(raw);
    const { items, closing } = parseProperMarkdownBody(body);
    return {
      slug,
      title: meta.title || slug.replace(/-/g, " "),
      category: meta.category || "Travel",
      intro: meta.intro || "",
      image: meta.image || "",
      date: meta.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      items,
      closing,
    };
  } else {
    const { title, intro, items, closing } = parseMakeComRaw(raw);
    return {
      slug,
      title: title || slug.replace(/-/g, " "),
      category: "Travel",
      image: "",
      intro,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      items,
      closing,
    };
  }
}

export function getAllMarkdownSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

const CATEGORY_COLORS: Record<string, string> = {
  Beach: "#0ea5e9", Ocean: "#0ea5e9", Healthcare: "#10b981",
  Health: "#10b981", Finance: "#8b5cf6", Money: "#8b5cf6",
  Community: "#ec4899", Food: "#f97316", Culture: "#f59e0b",
  Travel: "#06b6d4", Lifestyle: "#84cc16",
};

function getCategoryColor(n: string) { return CATEGORY_COLORS[n] ?? "#6b7280"; }

export type ArticleCard = {
  id: string; slug: string; title: string; image: string;
  excerpt: string; category: { name: string; color: string };
};

export function getAllArticles(): MarkdownArticle[] {
  return getAllMarkdownSlugs()
    .map((s) => parseMarkdownArticle(s))
    .filter((a): a is MarkdownArticle => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleCards(limit?: number): ArticleCard[] {
  const arts = limit ? getAllArticles().slice(0, limit) : getAllArticles();
  return arts.map((a) => ({
    id: a.slug,
    slug: a.slug,
    title: a.title,
    // Use frontmatter image if valid, otherwise fall back to country image map
    image: a.image && a.image.trim() !== "" ? a.image : getFallbackImage(a.slug),
    excerpt: a.intro ?? "",
    category: {
      name: a.category ?? "Travel",
      color: getCategoryColor(a.category ?? ""),
    },
  }));
}
