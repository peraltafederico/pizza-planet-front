export interface Product {
  id: number
  name: string
  usdPrice: number
  eurPrice: number
}

export interface Order {
  [name: string]: {
    name: string
    amount: number
    usdPrice: number
    eurPrice: number
  }
}

export interface ClientData {
  name: string
  phone: string
  address: string
}

export type SectionVariant = 'green' | 'lightGreen'
