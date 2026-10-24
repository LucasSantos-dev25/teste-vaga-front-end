import { useEffect } from 'react'

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    document.body.classList.add('is-scroll-locked')
    return () => document.body.classList.remove('is-scroll-locked')
  }, [locked])
}
