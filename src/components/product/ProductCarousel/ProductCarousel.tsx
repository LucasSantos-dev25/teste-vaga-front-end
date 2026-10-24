import { useCallback, useEffect, useRef, useState } from 'react'
import type { Product } from '@/types/product'
import { Icon } from '@/components/ui/Icon'
import { ProductCard } from '@/components/product/ProductCard'
import styles from './ProductCarousel.module.scss'

interface ProductCarouselProps {
  products: Product[]
  onSelectProduct: (product: Product) => void
  /** Rótulo acessível do carrossel. */
  label: string
}

/** Carrossel nativo: scroll-snap no CSS + setas que rolam uma "página" por vez. */
export function ProductCarousel({ products, onSelectProduct, label }: ProductCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScroll, setCanScroll] = useState({ prev: false, next: false })

  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScroll({
      prev: track.scrollLeft > 1,
      next: track.scrollLeft < maxScroll - 1,
    })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    updateArrows()
    track.addEventListener('scroll', updateArrows, { passive: true })
    const observer = new ResizeObserver(updateArrows)
    observer.observe(track)

    return () => {
      track.removeEventListener('scroll', updateArrows)
      observer.disconnect()
    }
  }, [updateArrows, products.length])

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} role="region" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => scrollByPage(-1)}
        disabled={!canScroll.prev}
        aria-label="Produtos anteriores"
      >
        <Icon name="chevronLeft" size={18} strokeWidth={2} />
      </button>

      <ul ref={trackRef} className={styles.track}>
        {products.map((product) => (
          <li key={product.id} className={styles.slide}>
            <ProductCard product={product} onSelect={onSelectProduct} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => scrollByPage(1)}
        disabled={!canScroll.next}
        aria-label="Próximos produtos"
      >
        <Icon name="chevronRight" size={18} strokeWidth={2} />
      </button>
    </div>
  )
}
