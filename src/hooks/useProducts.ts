import { useCallback, useEffect, useState } from 'react'
import { fetchProducts } from '@/services/products.service'
import type { Product } from '@/types/product'

type ProductsState =
  | { status: 'loading'; products: Product[]; error: null }
  | { status: 'success'; products: Product[]; error: null }
  | { status: 'error'; products: Product[]; error: string }

const initialState: ProductsState = { status: 'loading', products: [], error: null }

export function useProducts() {
  const [state, setState] = useState<ProductsState>(initialState)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchProducts(controller.signal)
      .then((products) => setState({ status: 'success', products, error: null }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        const message = error instanceof Error ? error.message : 'Erro inesperado.'
        setState({ status: 'error', products: [], error: message })
      })

    // Cancela a requisição se o componente desmontar (ou no StrictMode)
    return () => controller.abort()
  }, [attempt])

  const retry = useCallback(() => {
    setState(initialState)
    setAttempt((n) => n + 1)
  }, [])

  return { ...state, retry }
}
