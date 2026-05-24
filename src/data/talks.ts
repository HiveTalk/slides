// Each talk has a folder under public/talks/ with N sequentially-numbered SVGs
// (1.svg ... N.svg). The slug is the URL path used in the home deck links —
// matches the original https://slides.hivetalk.org/<slug> URLs.

export type Talk = {
  slug: string;
  title: string;
  subtitle: string;
  /** Folder name under public/talks/ */
  folder: string;
  /** Total number of slides (1.svg ... pageCount.svg) */
  pageCount: number;
};

export const talks: Talk[] = [
  {
    slug: 'ffprague26',
    title: 'FreedomFest Prague',
    subtitle: 'June 5-7, 2026 — Prague, Czech Republic',
    folder: 'Jun2026FFPrague',
    pageCount: 13,
  },
  {
    slug: 'bitfest25',
    title: 'Bitfest UK',
    subtitle: 'November 21, 2025 — Manchester, UK',
    folder: 'Nov2025Bitfest',
    pageCount: 21,
  },
  {
    slug: 'oct25',
    title: 'Presidio Bitcoin',
    subtitle: 'October 9, 2025 — Nostr Meetup, Presidio Bitcoin, SF',
    folder: 'Oct2025Presidio',
    pageCount: 14,
  },
  {
    slug: 'purple',
    title: 'Purple pill for groups',
    subtitle: 'January 22, 2026 — Nostr Meetup, Presidio Bitcoin, SF',
    folder: 'Jan2026PurplePill',
    pageCount: 31,
  },
];

export function getTalk(slug: string): Talk | undefined {
  return talks.find((t) => t.slug === slug);
}

export function svgUrl(talk: Talk, page: number): string {
  return `/talks/${talk.folder}/${page}.svg`;
}
