// Slide deck definitions.
//
// The background SVG (public/Home.svg) is a single file containing 3 slides
// stacked vertically. Each slide is 1024.5 × 768 in the SVG's coordinate
// system, giving a total viewBox of 1024.5 × 2304.
//
// Hotspot coordinates below are expressed as PERCENTAGES of one slide
// (so they stay correct at any rendered size). Adjust as needed if Canva
// re-exports the deck at different positions.

export type Hotspot = {
  /** Accessible label / tooltip */
  label: string;
  /** Destination URL */
  href: string;
  /** Position as % of slide width/height */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Open in new tab */
  external?: boolean;
};

export type Slide = {
  id: string;
  title: string;
  hotspots: Hotspot[];
};

export const SVG_PATH = '/Home.svg';
// Each Canva slide is 1024.5 × 576 in the SVG (16:9). Total viewBox is
// 1024.5 × 2304 → 4 slides stacked vertically.
export const SLIDE_ASPECT = 1024.5 / 576; // ≈ 1.778 (16:9)
export const SLIDE_COUNT = 4;

export const slides: Slide[] = [
  {
    id: 'home',
    title: 'Home — Slides.HiveTalk.org',
    hotspots: [
      {
        label: 'hivetalk.org',
        href: 'https://hivetalk.org',
        external: true,
        // hivetalk.org banner — covering logo and text
        x: 2.0, y: 12.0, w: 32.0, h: 12.0,
      },
    ],
  },
  {
    id: 'talks',
    title: 'Talks',
    // Coordinates measured from the SVG glyph positions:
    //   Slide 2 occupies SVG y 576–1152 (height 576).
    //   Pink text x range starts at 566.5 / 1024.5 ≈ 55.3% from the left.
    //   Title baselines at SVG y ≈ 755.4, 873.0, 986.4 (top→bottom).
    hotspots: [
      {
        label: 'FreedomFest Prague — Jun 5-7 2026, Prague',
        href: '/ffprague26',
        // Top title — "FREEDOMFEST PRAGUE"
        x: 55.0, y: 23.5, w: 22.0, h: 8.5,
      },
      {
        label: 'Purple pill for groups — Jan 22 2026, SF',
        href: '/purple',
        // Second title — widest text ("PURPLE PILL FOR GROUPS")
        x: 55.0, y: 44.0, w: 28.0, h: 8.5,
      },
      {
        label: 'Bitfest UK — Nov 21 2025, Manchester',
        href: '/bitfest25',
        // Third title — shortest ("BITFEST UK")
        x: 55.0, y: 63.5, w: 12.0, h: 8.5,
      },
      {
        label: 'Presidio Bitcoin — Oct 9 2025, SF',
        href: '/oct25',
        // Bottom title ("PRESIDIO BITCOIN")
        x: 55.0, y: 82.5, w: 19.0, h: 8.5,
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    hotspots: [
      {
        label: 'Vanilla — vanilla.hivetalk.org',
        href: 'https://vanilla.hivetalk.org',
        external: true,
        x: 5.0, y: 32.0, w: 17.0, h: 56.0,
      },
      {
        label: 'Honey — honey.hivetalk.org',
        href: 'https://honey.hivetalk.org/dashboard',
        external: true,
        x: 23.0, y: 32.0, w: 17.0, h: 56.0,
      },
      {
        label: 'Lookup — lookup.hivetalk.org',
        href: 'https://lookup.hivetalk.org',
        external: true,
        x: 41.0, y: 32.0, w: 17.0, h: 56.0,
      },
      {
        label: 'Relays — oneshot.hivetalk.org',
        href: 'https://oneshot.hivetalk.org',
        external: true,
        x: 59.0, y: 32.0, w: 17.0, h: 56.0,
      },
      {
        label: 'Zaplytics — zaplytics.hivetalk.org',
        href: 'https://zaplytics.hivetalk.org',
        external: true,
        x: 77.0, y: 32.0, w: 17.0, h: 56.0,
      },
    ],
  },
  {
    id: 'projects-2',
    title: 'More projects',
    // 4th slide content — populate hotspots once you confirm what links live here.
    hotspots: [
      {
        label: 'Nostr Profile',
        href: 'https://primal.net/p/nprofile1qqsp8luyzs4x2f3y2yjvrq8m2dpvagfs64v0a3753qqe68dw02k2rzscqypm5',
        external: true,
        // Positioned all the way to the right
        x: 50.0, y: 44.0, w: 50.0, h: 12.0,
      },
    ],
  },
];
