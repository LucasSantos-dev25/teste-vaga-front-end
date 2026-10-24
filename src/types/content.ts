import type { IconName } from '@/components/ui/Icon'


export interface Link {
  label: string
  href: string
}

export interface Benefit {
  icon: IconName
  highlight: string
  before?: string
  after?: string
}

export interface NavItem extends Link {
  icon?: IconName
  highlighted?: boolean
}

export interface HeaderContent {
  benefits: Benefit[]
  navigation: NavItem[]
}

export interface HeroContent {
  title: string
  highlight: string
  subtitle: string
  cta: Link
  image: string
}

export interface Category {
  id: string
  label: string
  icon: IconName
}

export interface ShowcaseTab {
  id: string
  label: string
}

export interface Partner {
  id: string
  title: string
  description: string
  image: string
  cta: Link
}

export interface Brand {
  id: string
  name: string
  href: string
}

export interface FooterColumn {
  title: string
  links: Link[]
}

export interface SocialLink extends Link {
  icon: IconName
}

export interface FooterContent {
  newsletter: {
    title: string
    description: string
  }
  description: string
  socials: SocialLink[]
  columns: FooterColumn[]
  copyright: string
}
