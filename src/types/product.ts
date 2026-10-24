export interface ProductDTO {
  productName: string
  descriptionShort: string
  photo: string
  price: number
  listPrice?: number
}

export interface ProductsResponseDTO {
  success: boolean
  products: ProductDTO[]
}

export interface Product {
  id: string
  name: string
  description: string
  photo: string
  price: number
  listPrice?: number
}
