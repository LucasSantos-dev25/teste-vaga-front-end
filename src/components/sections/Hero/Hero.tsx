import type { CSSProperties } from 'react'
import heroData from '@/data/hero.json'
import type { HeroContent } from '@/types/content'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import styles from './Hero.module.scss'

const content = heroData as HeroContent

export function Hero() {
  // A imagem vem do JSON; passamos via CSS custom property para manter o estilo no Sass
  const style = { '--hero-image': `url(${content.image})` } as CSSProperties

  return (
    <section className={styles.hero} style={style} aria-labelledby="hero-title">
      <Container className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {content.title}
        </h1>
        <p className={styles.subtitle}>
          <strong>{content.highlight}</strong> {content.subtitle}
        </p>
        <Button href={content.cta.href} variant="yellow" size="lg" className={styles.cta}>
          {content.cta.label}
        </Button>
      </Container>
    </section>
  )
}
