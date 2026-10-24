import { useCallback, useState } from 'react'
import type { Product } from '@/types/product'
import { useProducts } from '@/hooks/useProducts'
import { Header } from '@/components/layout/Header'
import { Newsletter } from '@/components/layout/Newsletter'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Categories } from '@/components/sections/Categories'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { Partners } from '@/components/sections/Partners'
import { Brands } from '@/components/sections/Brands'
import { ProductModal } from '@/components/product/ProductModal'


export function Home() {
  const { products, status, error, retry } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openProduct = useCallback((product: Product) => setSelectedProduct(product), [])
  const closeProduct = useCallback(() => setSelectedProduct(null), [])

  const showcaseProps = {
    products,
    status,
    error,
    onRetry: retry,
    onSelectProduct: openProduct,
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <ProductShowcase id="vitrine" title="Produtos relacionados" variant="tabs" {...showcaseProps} />
        <Partners />
        <ProductShowcase title="Produtos relacionados" {...showcaseProps} />
        <Partners />
        <Brands />
        <ProductShowcase title="Produtos relacionados" {...showcaseProps} />
      </main>

      <Newsletter />
      <Footer />

      <ProductModal product={selectedProduct} onClose={closeProduct} />
    </>
  )
}
