import type { ReactNode } from 'react'


interface IconDefinition {
  viewBox: string
  content: ReactNode
}

const ui = {
  shield: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
        <path d="m8.8 12 2.2 2.2 4.2-4.4" />
      </>
    ),
  },
  truck: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M2.5 6.5h11v9h-11z" />
        <path d="M13.5 9.5h4l3 3.2v2.8h-7" />
        <circle cx="6.5" cy="17" r="1.7" />
        <circle cx="17" cy="17" r="1.7" />
      </>
    ),
  },
  card: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M2.5 9.5h19M6 15h4" />
      </>
    ),
  },
  search: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
  },
  box: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M3.5 9h17M10 12.5h4" />
        <path d="m12.5 14.5-2 1.5 2 1.5" />
      </>
    ),
  },
  heart: {
    viewBox: '0 0 24 24',
    content: (
      <path d="M12 20s-7.5-4.5-7.5-10.2A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 7.5 2.7C19.5 15.5 12 20 12 20Z" />
    ),
  },
  user: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.5 18.5c1.2-2 3.2-3 5.5-3s4.3 1 5.5 3" />
      </>
    ),
  },
  cart: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M2.5 3.5h2.6l2.4 11.5h11l2-8H6.2" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </>
    ),
  },
  crown: {
    viewBox: '0 0 24 24',
    content: <path d="m3.5 7.5 4.5 4 4-6 4 6 4.5-4-2 10h-13l-2-10Z" />,
  },
  chevronLeft: { viewBox: '0 0 24 24', content: <path d="m14.5 6-6 6 6 6" /> },
  chevronRight: { viewBox: '0 0 24 24', content: <path d="m9.5 6 6 6-6 6" /> },
  close: { viewBox: '0 0 24 24', content: <path d="M6 6l12 12M18 6 6 18" /> },
  plus: { viewBox: '0 0 24 24', content: <path d="M12 5v14M5 12h14" /> },
  minus: { viewBox: '0 0 24 24', content: <path d="M5 12h14" /> },
  instagram: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" />
      </>
    ),
  },
  facebook: {
    viewBox: '0 0 24 24',
    content: <path d="M14.5 3.5h-1.8c-2 0-3.2 1.3-3.2 3.4V9.5H7.5v3h2v8h3v-8h2.3l.5-3h-2.8V7.3c0-.6.3-.8.9-.8h1.1v-3Z" />,
  },
  linkedin: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path d="M5 9.5v10M5 5.2v.1" />
        <path d="M9.5 19.5v-10M9.5 13.5c0-2.4 1.4-4 3.5-4s3.5 1.4 3.5 4v6" />
      </>
    ),
  },
} satisfies Record<string, IconDefinition>

/** Ícones ilustrativos das categorias (traço mais fino, viewBox maior). */
const categories = {
  devices: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <rect x="5" y="9" width="30" height="21" rx="2" />
        <path d="M14 38h13M20 30v8" />
        <rect x="30" y="18" width="13" height="22" rx="2" />
        <path d="M35 36h3" />
      </>
    ),
  },
  store: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <path d="M6 18 9 8h30l3 10" />
        <path d="M6 18c0 2.5 2 4 4.5 4S15 20.5 15 18c0 2.5 2 4 4.5 4S24 20.5 24 18c0 2.5 2 4 4.5 4S33 20.5 33 18c0 2.5 2 4 4.5 4S42 20.5 42 18" />
        <path d="M9 22v18h30V22" />
        <path d="M14 40V29h9v11M27 29h8v6h-8z" />
        <path d="M15 8 13 18M24 8v10M33 8l2 10" />
      </>
    ),
  },
  drinks: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <path d="M17 5h6v8l3 4v25H14V17l3-4V5Z" />
        <path d="M14 23h12v10H14z" />
        <path d="M17 9h6" />
        <rect x="30" y="27" width="10" height="15" rx="1.5" />
        <path d="M30 31h10" />
      </>
    ),
  },
  tools: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <path d="M8 13 13 8l6 6-5 5-6-6Z" />
        <path d="m16 16 22 22a3 3 0 0 1-4 4L12 20" />
        <path d="M30 8a7 7 0 0 0 7 10l3 3-4 4-3-3a7 7 0 0 0-10-7l-7 7" />
        <path d="m18 30-8 8a3 3 0 0 0 4 4l8-8" />
      </>
    ),
  },
  health: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <path d="M24 26s-8-4.8-8-10.4A4.6 4.6 0 0 1 24 13a4.6 4.6 0 0 1 8 2.6C32 21.2 24 26 24 26Z" />
        <path d="M6 30h5l7 2h6a2 2 0 0 1 0 4h-7" />
        <path d="m24 36 12-5a2.5 2.5 0 0 1 2 4.5L25 42H11l-5-2" />
      </>
    ),
  },
  fitness: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <circle cx="28" cy="8" r="3" />
        <path d="m22 22 4-8 6 4 4-2M26 14l-2 10 5 4 1 8M24 24l-5 5-5-1" />
        <path d="M8 6v26h34l-2 4H8" />
        <path d="M8 6h6M10 42v-6M40 42v-6" />
      </>
    ),
  },
  fashion: {
    viewBox: '0 0 48 48',
    content: (
      <>
        <path d="M18 5v6l-3 8 4 2-6 21h22l-6-21 4-2-3-8V5" />
        <path d="M18 11c2 2 6 2 8 0" />
        <path d="m36 6 3 3-3 3-3-3 3-3ZM36 12v4" />
      </>
    ),
  },
} satisfies Record<string, IconDefinition>

export const icons = { ...ui, ...categories }

export type IconName = keyof typeof icons
