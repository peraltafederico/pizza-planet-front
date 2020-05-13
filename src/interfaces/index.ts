export interface OrderItem {
  name: string
  price: number
  amount: number
}

export interface PizzasOption {
  name: string
  amount: number
  prices: {
    usd: number
    eur: number
  }
}
