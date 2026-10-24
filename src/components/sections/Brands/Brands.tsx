import brandsData from '@/data/brands.json'
import type { Brand } from '@/types/content'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { SectionTitle } from '@/components/ui/SectionTitle'
import styles from './Brands.module.scss'

const brands = brandsData as Brand[]

export function Brands() {
  return (
    <section className={styles.brands} aria-labelledby="brands-title">
      <Container>
        <SectionTitle id="brands-title">Navegue por marcas</SectionTitle>

        <ul className={styles.list}>
          {brands.map((brand) => (
            <li key={brand.id}>
              <a href={brand.href} className={styles.brand} aria-label={brand.name}>
                <Logo size="sm" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
