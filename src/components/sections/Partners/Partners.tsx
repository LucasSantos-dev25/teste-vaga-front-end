import type { CSSProperties } from 'react'
import partnersData from '@/data/partners.json'
import type { Partner } from '@/types/content'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import styles from './Partners.module.scss'

const partners = partnersData as Partner[]

export function Partners() {
  return (
    <section className={styles.partners} aria-label="Parceiros">
      <Container className={styles.grid}>
        {partners.map((partner) => (
          <article
            key={partner.id}
            className={styles.card}
            style={{ '--partner-image': `url(${partner.image})` } as CSSProperties}
          >
            <h3 className={styles.title}>{partner.title}</h3>
            <p className={styles.description}>{partner.description}</p>
            <Button href={partner.cta.href} variant="yellow" size="md" className={styles.cta}>
              {partner.cta.label}
            </Button>
          </article>
        ))}
      </Container>
    </section>
  )
}
