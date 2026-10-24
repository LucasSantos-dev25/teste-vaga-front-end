import { useState, type FormEvent } from 'react'
import footerData from '@/data/footer.json'
import type { FooterContent } from '@/types/content'
import { Container } from '@/components/ui/Container'
import styles from './Newsletter.module.scss'

const { newsletter } = footerData as FooterContent

type Status = 'idle' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [form, setForm] = useState({ name: '', email: '', accepted: false })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = form.name.trim() !== '' && EMAIL_PATTERN.test(form.email) && form.accepted
    if (!isValid) {
      setStatus('error')
      return
    }

    // Integração futura: enviar `form` para a API de newsletter
    setStatus('success')
    setForm({ name: '', email: '', accepted: false })
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <Container className={styles.inner}>
        <div className={styles.text}>
          <h2 id="newsletter-title" className={styles.title}>
            {newsletter.title}
          </h2>
          <p className={styles.description}>{newsletter.description}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fields}>
            <label className="sr-only" htmlFor="newsletter-name">
              Nome
            </label>
            <input
              id="newsletter-name"
              className={styles.input}
              type="text"
              autoComplete="name"
              placeholder="Digite seu nome"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />

            <label className="sr-only" htmlFor="newsletter-email">
              E-mail
            </label>
            <input
              id="newsletter-email"
              className={styles.input}
              type="email"
              autoComplete="email"
              placeholder="Digite seu e-mail"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />

            <button type="submit" className={styles.submit}>
              Inscrever
            </button>
          </div>

          <label className={styles.terms}>
            <input
              type="checkbox"
              checked={form.accepted}
              onChange={(e) => setForm((f) => ({ ...f, accepted: e.target.checked }))}
            />
            Aceito os termos e condições
          </label>

          <p className={styles.feedback} role="status" aria-live="polite">
            {status === 'success' && 'Inscrição realizada com sucesso!'}
            {status === 'error' && 'Preencha nome, um e-mail válido e aceite os termos.'}
          </p>
        </form>
      </Container>
    </section>
  )
}
