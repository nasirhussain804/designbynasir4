/** Shared shapes for the Design by Nasir studio site. */

export interface NavLink {
  label: string
  href: string
}

export interface Project {
  /** Stable slug - used as the React key. */
  id: string
  /** Two-digit index shown in the tile corner. */
  index: string
  title: string
  category: string
  year: string
  /** Local image path under public/. */
  image: string
  alt: string
  /** Feature tile - spans two columns in the bento grid. */
  wide?: boolean
}

export interface Service {
  index: string
  title: string
  /** Price range, e.g. "$800-$3,500". */
  range: string
  /** Lead sentence shown in the preview rows. */
  summary: string
  /** What the client receives. */
  deliverables: readonly string[]
  /** Typical turnaround. */
  timeline: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface ToolGroup {
  label: string
  items: readonly string[]
}

export interface LegalSection {
  heading: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
}

export interface Stat {
  value: string
  label: string
}
