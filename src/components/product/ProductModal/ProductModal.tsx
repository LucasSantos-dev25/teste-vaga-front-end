import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { Product } from '@/types/product'
import { formatCurrency } from '@/utils/currency'
import { useScrollLock } from '@/hooks/useScrollLock'
import { Icon } from '@/components/ui/Icon'
import { QuantitySelector } from '@/components/product/QuantitySelector'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
  /** Produto aberto. `null` = modal fechado. */
  product: Product | null
  onClose: () => void
  onBuy?: (product: Product, quantity: number) => void
}

/**
 * Modal com <dialog> nativo: foco preso, ESC e camada superior já vêm do navegador.
 * Abre/fecha de forma controlada a partir de `product`.
 */
export function ProductModal({ product, onClose, onBuy }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isOpen = product !== null

  useScrollLock(isOpen)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  // Clique no backdrop: o alvo é o próprio <dialog> (o conteúdo ocupa todo o resto)
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {product && (
        // `key` reinicia a quantidade quando outro produto é aberto
        <ProductModalContent key={product.id} product={product} onClose={onClose} onBuy={onBuy} />
      )}
    </dialog>
  )
}

interface ContentProps {
  product: Product
  onClose: () => void
  onBuy?: (product: Product, quantity: number) => void
}

function ProductModalContent({ product, onClose, onBuy }: ContentProps) {
  const [quantity, setQuantity] = useState(1)

  const handleBuy = () => {
    onBuy?.(product, quantity)
    onClose()
  }

  return (
    <div className={styles.content}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
        <Icon name="close" size={20} />
      </button>

      <div className={styles.media}>
        <img src={product.photo} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.info}>
        <h2 id="product-modal-title" className={styles.title}>
          {product.name}
        </h2>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
        <a href="#" className={styles.details}>
          Veja mais detalhes do produto &gt;
        </a>

        <div className={styles.actions}>
          <QuantitySelector value={quantity} onChange={setQuantity} />
          <button type="button" className={styles.buy} onClick={handleBuy}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
