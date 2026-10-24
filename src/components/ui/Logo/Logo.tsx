import styles from './Logo.module.scss'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export function Logo({ size = 'md', href }: LogoProps) {
  const content = (
    <span className={`${styles.logo} ${styles[size]}`} aria-hidden={href ? true : undefined}>
      <span className={styles.badge}>ec</span>
      <span className={styles.word}>onverse</span>
    </span>
  )

  if (href) {
    return (
      <a href={href} className={styles.link} aria-label="Econverse — página inicial">
        {content}
      </a>
    )
  }

  return (
    <span role="img" aria-label="Econverse">
      {content}
    </span>
  )
}
