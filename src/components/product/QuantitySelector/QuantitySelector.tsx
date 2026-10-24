import { Icon } from '@/components/ui/Icon'
import styles from './QuantitySelector.module.scss'

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export function QuantitySelector({ value, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  const update = (next: number) => onChange(Math.min(max, Math.max(min, next)))

  return (
    <div className={styles.selector} role="group" aria-label="Quantidade">
      <button
        type="button"
        className={styles.control}
        onClick={() => update(value - 1)}
        disabled={value <= min}
        aria-label="Diminuir quantidade"
      >
        <Icon name="minus" size={16} />
      </button>

      <output className={styles.value} aria-live="polite">
        {String(value).padStart(2, '0')}
      </output>

      <button
        type="button"
        className={styles.control}
        onClick={() => update(value + 1)}
        disabled={value >= max}
        aria-label="Aumentar quantidade"
      >
        <Icon name="plus" size={16} />
      </button>
    </div>
  )
}
