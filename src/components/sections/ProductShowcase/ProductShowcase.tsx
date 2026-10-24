import { useId, useState } from 'react'
import tabsData from '@/data/showcase-tabs.json'
import type { ShowcaseTab } from '@/types/content'
import type { Product } from '@/types/product'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCarousel } from '@/components/product/ProductCarousel'
import styles from './ProductShowcase.module.scss'

const tabs = tabsData as ShowcaseTab[]

interface ProductShowcaseProps {
  title: string
  /** `tabs`: abas de categoria (1ª vitrine). `link`: "Ver todos" abaixo do título. */
  variant?: 'tabs' | 'link'
  products: Product[]
  status: 'loading' | 'success' | 'error'
  error?: string | null
  onRetry: () => void
  onSelectProduct: (product: Product) => void
  id?: string
}

export function ProductShowcase({
  title,
  variant = 'link',
  products,
  status,
  error,
  onRetry,
  onSelectProduct,
  id,
}: ProductShowcaseProps) {
  const titleId = useId()
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  return (
    <section id={id} className={styles.showcase} aria-labelledby={titleId}>
      <Container>
        <SectionTitle id={titleId} withLines>
          {title}
        </SectionTitle>

        {variant === 'tabs' ? (
          <ul className={styles.tabs}>
            {tabs.map((tab) => (
              <li key={tab.id} className={styles.tabItem}>
                <button
                  type="button"
                  className={[styles.tab, tab.id === activeTab && styles.tabActive].filter(Boolean).join(' ')}
                  aria-pressed={tab.id === activeTab}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <a href="#" className={styles.viewAll}>
            Ver todos
          </a>
        )}

        <div className={styles.content}>
          {status === 'loading' && <ShowcaseSkeleton />}

          {status === 'error' && (
            <div className={styles.feedback} role="alert">
              <p>{error ?? 'Não foi possível carregar os produtos.'}</p>
              <button type="button" className={styles.retry} onClick={onRetry}>
                Tentar novamente
              </button>
            </div>
          )}

          {status === 'success' &&
            (products.length > 0 ? (
              <ProductCarousel products={products} onSelectProduct={onSelectProduct} label={title} />
            ) : (
              <p className={styles.feedback}>Nenhum produto encontrado.</p>
            ))}
        </div>
      </Container>
    </section>
  )
}

function ShowcaseSkeleton() {
  return (
    <ul className={styles.skeleton} aria-busy="true" aria-label="Carregando produtos">
      {Array.from({ length: 4 }, (_, index) => (
        <li key={index} className={styles.skeletonCard} />
      ))}
    </ul>
  )
}
