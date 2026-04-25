export type RevealVariant = 'fade-up' | 'slide-left' | 'slide-right'

export interface CTA {
  label: string
  href: string
}

export interface HeroStat {
  num: string
  label: string
}

export interface FloatCard {
  role: string
  title: string
  meta: string
  badge: string
}

export interface Hero {
  availabilityTag: string
  name: string
  lede: string
  stats: HeroStat[]
  primaryCta: CTA
  secondaryCta: CTA
  floatCard: FloatCard
}

export type MarqueeItem = string

export interface InfoRow {
  label: string
  value: string
}

export interface About {
  eyebrow: string
  heading: string
  sub: string
  paragraphs: string[]
  info: InfoRow[]
}

export type RichNode =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'code'; text: string }

export type RichText = RichNode[]

export interface ExperienceProject {
  name: string
  stack: string
  bullets: RichText[]
}

export interface ExperienceEntry {
  company: string
  when: string
  role: string
  reveal: RevealVariant
  projects: ExperienceProject[]
}

export interface Project {
  title: string
  stack: string
  paragraphs: string[]
  tags: string[]
}

export interface SkillBar {
  name: string
  pct: number
}

export type SkillGroup =
  | { title: string; reveal: RevealVariant; kind: 'bars'; bars: SkillBar[] }
  | { title: string; reveal: RevealVariant; kind: 'tags'; tags: string[] }

export type ContactIcon = 'mail' | 'phone' | 'linkedin' | 'github'

export interface ContactLink {
  label: string
  href: string
  icon: ContactIcon
  variant: 'primary' | 'default'
  external?: boolean
  ariaLabel?: string
}

export interface Contact {
  eyebrow: string
  heading: string
  sub: string
  links: ContactLink[]
}

export interface SectionMeta {
  eyebrow: string
  heading: string
  sub: string
}

export interface Resume {
  hero: Hero
  marquee: MarqueeItem[]
  about: About
  experienceMeta: SectionMeta
  experience: ExperienceEntry[]
  projectsMeta: SectionMeta
  projects: Project[]
  skillsMeta: SectionMeta
  skillGroups: SkillGroup[]
  contact: Contact
}
