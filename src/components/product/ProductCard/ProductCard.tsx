import type { Product } from '@/types/product'
import { formatCurrency, getInstallmentValue } from '@/utils/currency'
import { Button } from '@/components/ui/Button'
import styles from './ProductCard.module.scss'

/** Número de parcelas exibido no card (o JSON não traz essa informação). */
const INSTALLMENTS = 2

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const handleSelect = () => onSelect(product)

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={product.photo}
          alt=""
          className={styles.image}
          loading="lazy"
          decoding="async"
          width={210}
          height={210}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>
          {/* "Stretched button": torna o card inteiro clicável mantendo um único foco acessível */}
          <button type="button" className={styles.stretched} onClick={handleSelect}>
            {product.description}
          </button>
        </h3>

        <div className={styles.prices}>
          {product.listPrice && (
            <s className={styles.listPrice}>
              <span className="sr-only">De </span>
              {formatCurrency(product.listPrice)}
            </s>
          )}
          <strong className={styles.price}>
            <span className="sr-only">Por </span>
            {formatCurrency(product.price)}
          </strong>
          <span className={styles.installments}>
            ou {INSTALLMENTS}x de {formatCurrency(getInstallmentValue(product.price, INSTALLMENTS))} sem
            juros
          </span>
        </div>

        <span className={styles.shipping}>Frete grátis</span>

        <Button variant="primary" fullWidth className={styles.buy} onClick={handleSelect} tabIndex={-1}>
          Comprar
        </Button>
      </div>
    </article>
  )
}
