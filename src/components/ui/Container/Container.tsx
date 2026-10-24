import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: ReactNode
}

/** Centraliza o conteúdo na largura máxima do layout (1280px). */
export function Container({ as: Tag = 'div', className, children, ...rest }: ContainerProps) {
  return (
    <Tag className={[styles.container, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  )
}
