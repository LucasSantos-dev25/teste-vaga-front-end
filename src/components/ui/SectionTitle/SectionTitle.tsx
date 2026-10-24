import type { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  id?: string
  children: ReactNode
  /** Linhas horizontais dos dois lados (vitrine). */
  withLines?: boolean
}

export function SectionTitle({ id, children, withLines = false }: SectionTitleProps) {
  return (
    <h2 id={id} className={[styles.title, withLines && styles.withLines].filter(Boolean).join(' ')}>
      {children}
    </h2>
  )
}
