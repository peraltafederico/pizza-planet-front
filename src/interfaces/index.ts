export interface OrderItem {
  name: string
  prices: {
    usd: number
    eur: number
  }
  amount: number
}

export interface TotalPrices {
  totalUsd: number
  totalEur: number
}

export interface ClientData {
  name: string
  phone: string
  address: string
}
