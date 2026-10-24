import footerData from '@/data/footer.json'
import type { FooterContent } from '@/types/content'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import styles from './Footer.module.scss'

const content = footerData as FooterContent

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Container className={styles.inner}>
          <div className={styles.brand}>
            <Logo size="lg" />
            <p className={styles.description}>{content.description}</p>

            <ul className={styles.socials}>
              {content.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} className={styles.social} aria-label={social.label}>
                    <Icon name={social.icon} size={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.columns} aria-label="Rodapé">
            {content.columns.map((column) => (
              <div key={column.title}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.links}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </Container>
      </div>

      <p className={styles.copyright}>{content.copyright}</p>
    </footer>
  )
}
