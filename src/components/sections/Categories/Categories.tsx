import { useState } from 'react'
import categoriesData from '@/data/categories.json'
import type { Category } from '@/types/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import styles from './Categories.module.scss'

const categories = categoriesData as Category[]

export function Categories() {
  const [activeId, setActiveId] = useState(categories[0]?.id)

  return (
    <section className={styles.categories} aria-label="Categorias">
      <Container>
        <ul className={styles.list}>
          {categories.map((category) => {
            const isActive = category.id === activeId

            return (
              <li key={category.id}>
                <button
                  type="button"
                  className={[styles.item, isActive && styles.active].filter(Boolean).join(' ')}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(category.id)}
                >
                  <span className={styles.card}>
                    <Icon name={category.icon} size={64} strokeWidth={1.6} />
                  </span>
                  <span className={styles.label}>{category.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
