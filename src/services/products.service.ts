import type { Product, ProductDTO, ProductsResponseDTO } from '@/types/product'
import { getJson } from './http'

const DEFAULT_PRODUCTS_URL = '/data/produtos.json'

export const PRODUCTS_URL = import.meta.env.VITE_PRODUCTS_URL || DEFAULT_PRODUCTS_URL

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Converte o DTO da API no modelo da interface. O JSON não tem id, então geramos um estável. */
function toProduct(dto: ProductDTO, index: number): Product {
  return {
    id: `${slugify(dto.productName)}-${index}`,
    name: dto.productName,
    description: dto.descriptionShort,
    photo: dto.photo,
    price: dto.price,
    listPrice: dto.listPrice && dto.listPrice > dto.price ? dto.listPrice : undefined,
  }
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const data = await getJson<ProductsResponseDTO>(PRODUCTS_URL, { signal })

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inválida do serviço de produtos.')
  }

  return data.products.map(toProduct)
}
