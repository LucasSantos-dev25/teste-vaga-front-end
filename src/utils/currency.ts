const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrency(cents: number): string {
  return brlFormatter.format(cents / 100).replace(/ /g, ' ')
}

export function getInstallmentValue(cents: number, installments: number): number {
  return Math.round(cents / installments)
}
