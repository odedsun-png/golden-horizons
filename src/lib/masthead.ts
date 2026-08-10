// Single source of truth for the magazine masthead (Month/Year, Volume, Issue).
// This is the recurring publication date shown in the topbar/masthead banner —
// NOT an individual article's publish date, which comes from that article's own
// frontmatter and must never be derived from this file.

const MASTHEAD_TIMEZONE = "America/New_York";

export const PUBLICATION_NAME = "Golden Horizons";
export const MAGAZINE_TITLE = "The Retirement Abroad Magazine";
export const MAGAZINE_TAGLINE = "For Americans Who Are Ready for What’s Next";

// Epoch: April 2026 was set as Issue 58 on 2026-05-03 (commit 5cbb96e), and the
// issue number has advanced by exactly 1 per calendar month since (Issue 60 in
// June 2026, Issue 61 in July 2026 — commits 8dbe278 and eb1a21f). Volume number
// has always been kept equal to the issue number in that same history.
const EPOCH_YEAR = 2026;
const EPOCH_MONTH = 4; // April
const EPOCH_ISSUE = 58;

export interface MagazineMasthead {
  publicationName: string;
  magazineTitle: string;
  tagline: string;
  month: string;
  year: number;
  monthYear: string;
  issueNumber: number;
  volumeNumber: number;
  volumeLabel: string;
  issueLine: string;
}

function getCurrentYearMonth(timeZone: string): { year: number; month: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
  }).formatToParts(new Date());
  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  return { year, month };
}

export function getMagazineMasthead(): MagazineMasthead {
  const { year, month } = getCurrentYearMonth(MASTHEAD_TIMEZONE);
  const monthsSinceEpoch = (year - EPOCH_YEAR) * 12 + (month - EPOCH_MONTH);
  const issueNumber = EPOCH_ISSUE + monthsSinceEpoch;
  const volumeNumber = issueNumber;
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));

  return {
    publicationName: PUBLICATION_NAME,
    magazineTitle: MAGAZINE_TITLE,
    tagline: MAGAZINE_TAGLINE,
    month: monthName,
    year,
    monthYear: `${monthName} ${year}`,
    issueNumber,
    volumeNumber,
    volumeLabel: `Vol. ${volumeNumber}, No. 1`,
    issueLine: `${monthName} ${year} · Issue ${issueNumber}`,
  };
}
