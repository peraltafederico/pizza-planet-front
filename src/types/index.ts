export interface Product {
  name: string
  prices: {
    usd: number
    eur: number
  }
}

export interface Order {
  [name: string]: {
    amount: number
    prices: {
      usd: number
      eur: number
    }
  }
}

export interface ClientData {
  name: string
  phone: string
  address: string
}

export type SectionVariant = 'green' | 'lightGreen'
