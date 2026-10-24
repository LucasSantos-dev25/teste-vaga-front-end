import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'yellow'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  children: ReactNode
  className?: string
}

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = AsButton | AsLink

/** Botão do design system. Com `href` vira <a>, sem `href` é <button>. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth = false, className, children } = props

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (props.href !== undefined) {
    const { variant: _v, size: _s, fullWidth: _f, className: _c, ...anchorProps } = props
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, fullWidth: _f, className: _c, type = 'button', ...buttonProps } = props
  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  )
}
