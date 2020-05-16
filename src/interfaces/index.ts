export interface Item {
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

export interface Order {
  items: Item[]
  totalPrices: TotalPrices
}
