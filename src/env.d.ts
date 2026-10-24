/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do JSON de produtos. Padrão: mock local em /data/produtos.json */
  readonly VITE_PRODUCTS_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
