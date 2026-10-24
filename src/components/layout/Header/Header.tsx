import type { FormEvent } from 'react'
import headerData from '@/data/header.json'
import type { HeaderContent } from '@/types/content'
import { Container } from '@/components/ui/Container'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Logo } from '@/components/ui/Logo'
import styles from './Header.module.scss'

const content = headerData as HeaderContent

const actions: { icon: IconName; label: string; href: string }[] = [
  { icon: 'box', label: 'Meus pedidos', href: '#' },
  { icon: 'heart', label: 'Favoritos', href: '#' },
  { icon: 'user', label: 'Minha conta', href: '#' },
  { icon: 'cart', label: 'Carrinho', href: '#' },
]

export function Header() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Ponto de integração futura com a busca
  }

  return (
    <header className={styles.header}>
      {/* Faixa de benefícios */}
      <Container className={styles.topbar}>
        <ul className={styles.benefits}>
          {content.benefits.map((benefit) => (
            <li key={benefit.highlight} className={styles.benefit}>
              <Icon name={benefit.icon} size={16} />
              <span>
                {benefit.before && `${benefit.before} `}
                <strong>{benefit.highlight}</strong>
                {benefit.after && ` ${benefit.after}`}
              </span>
            </li>
          ))}
        </ul>
      </Container>

      {/* Logo, busca e ações */}
      <Container className={styles.main}>
        <Logo href="/" />

        <form className={styles.search} role="search" onSubmit={handleSearch}>
          <label htmlFor="header-search" className="sr-only">
            Buscar produtos
          </label>
          <input
            id="header-search"
            type="search"
            className={styles.searchInput}
            placeholder="O que você está buscando?"
          />
          <button type="submit" className={styles.searchButton} aria-label="Buscar">
            <Icon name="search" size={22} />
          </button>
        </form>

        <nav aria-label="Conta">
          <ul className={styles.actions}>
            {actions.map((action) => (
              <li key={action.icon}>
                <a href={action.href} className={styles.action} aria-label={action.label}>
                  <Icon name={action.icon} size={26} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Menu de categorias */}
      <Container as="nav" className={styles.nav} aria-label="Categorias">
        <ul className={styles.navList}>
          {content.navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={[styles.navLink, item.highlighted && styles.navLinkHighlighted]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.icon && <Icon name={item.icon} size={18} />}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}
