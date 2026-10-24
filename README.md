# Projeto Vitrine — Teste Econverse (Front-End)

Página de e-commerce com vitrine de produtos, carrossel e modal de detalhes, feita para o teste de Desenvolvedor Front-End da Econverse.

## Tecnologias

- React 19 + TypeScript
- Vite
- Sass (CSS Modules, sem bibliotecas de UI)
- ESLint

## Como rodar

**Pré-requisitos:** Node.js 20.19+ (ou 22.12+) e npm.

```bash
# 1. Instalar as dependências
npm install

# 2. (Opcional) Configurar a fonte dos produtos
cp .env.example .env

# 3. Subir o servidor de desenvolvimento
npm run dev
```

A aplicação abre em `http://localhost:5173`.

### Outros scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Checa os tipos (`tsc -b`) e gera o build em `dist/` |
| `npm run preview` | Serve o build gerado para conferência |
| `npm run lint` | Roda o ESLint |

## Fonte dos produtos

Os produtos vêm de um JSON com este formato:

```json
{
  "success": true,
  "products": [
    {
      "productName": "Iphone 11 PRO MAX BRANCO 1",
      "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
      "photo": "https://.../foto-iphone.png",
      "price": 15000,
      "listPrice": 16050
    }
  ]
}
```

A URL é definida pela variável `VITE_PRODUCTS_URL`. Sem ela, o projeto usa o mock local `public/data/produtos.json`.

Para usar a API oficial no desenvolvimento, coloque no `.env`:

```env
VITE_PRODUCTS_URL=/econverse-api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O prefixo `/econverse-api` é um proxy do Vite (`vite.config.ts`) que encaminha a chamada para `https://app.econverse.com.br` e evita CORS. **Ele só existe com `npm run dev`.** Em produção, use o mock local ou uma URL que aceite CORS.

> Os preços do JSON são tratados como **centavos** (`15000` → R$ 150,00). Veja `src/utils/currency.ts`.

## Como funciona

### Fluxo dos dados

```
Home
 └─ useProducts()                       hook: estado loading / success / error + retry
     └─ fetchProducts()                 service: busca o JSON, valida e converte DTO → Product
 └─ ProductShowcase                     seção da vitrine (título, abas, loading, erro)
     └─ ProductCarousel                 carrossel nativo (scroll-snap + setas)
         └─ ProductCard                 card do produto
 └─ ProductModal                        <dialog> nativo, abre ao clicar em um produto
```

1. A `Home` chama `useProducts()` uma única vez e passa produtos, status e erro para as vitrines.
2. O hook cancela a requisição com `AbortController` se o componente desmontar (inclusive no StrictMode) e expõe `retry` para tentar de novo.
3. O service converte o `ProductDTO` do JSON no modelo `Product`, gerando um `id` (o JSON não tem).
4. Ao clicar em um card, a `Home` guarda o produto selecionado e o `ProductModal` abre com as informações dele.

### Conteúdo estático

Textos, links e itens de menu ficam em `src/data/*.json` (`header`, `hero`, `categories`, `partners`, `brands`, `footer`, `showcase-tabs`). Para mudar um texto ou item, edite o JSON, sem mexer no componente.

### Estilos

- Cada componente tem seu `*.module.scss` (CSS Modules, classes em camelCase).
- Variáveis, breakpoints e mixins ficam em `src/styles/abstracts` e são importados com `@use '@/styles/abstracts' as *;`.
- Reset e estilos globais ficam em `src/styles/base`, carregados por `src/styles/main.scss`.
- Design mobile-first com os mixins `up('md')` e `down('md')`.

### Decisões

- **Modal com `<dialog>` nativo:** foco preso, tecla ESC e camada superior vêm do navegador.
- **Carrossel sem biblioteca:** `scroll-snap` no CSS e setas que rolam uma "página" por vez.
- **Acessibilidade e SEO:** HTML semântico, `aria-label`s, textos só para leitor de tela (`.sr-only`), `lang="pt-BR"` e meta description.
- **Alias `@`:** aponta para `src/` (`vite.config.ts` e `tsconfig.app.json`).

## Estrutura de pastas

```
src/
├── components/
│   ├── layout/      Header, Footer, Newsletter
│   ├── sections/    Hero, Categories, ProductShowcase, Partners, Brands
│   ├── product/     ProductCard, ProductCarousel, ProductModal, QuantitySelector
│   └── ui/          Button, Container, Icon, Logo, SectionTitle
├── data/            Conteúdo estático em JSON
├── hooks/           useProducts, useScrollLock
├── pages/Home/      Página principal
├── services/        http.ts, products.service.ts
├── styles/          abstracts/ (variáveis, mixins) e base/ (reset, global)
├── types/           product.ts, content.ts
└── utils/           currency.ts
public/
├── data/produtos.json   Mock local dos produtos
└── images/              Imagens do hero e dos parceiros
```

## Solução de problemas

- **Tela branca:** abra o console do navegador (F12). Erros de import e de módulo aparecem lá, não no terminal.
- **Produtos não carregam:** confira a URL em `VITE_PRODUCTS_URL`. Lembre que o proxy `/econverse-api` só funciona no `npm run dev`. Reinicie o servidor depois de alterar o `.env`.
- **Imagens do hero e dos parceiros sem aparecer:** confirme que os arquivos existem em `public/images/`.