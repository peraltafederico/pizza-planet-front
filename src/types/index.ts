export interface Product {
  id: number
  name: string
  usdPrice: string
  eurPrice: string
}

export interface Order {
  [name: string]: {
    name: string
    amount: number
    usdPrice: any
    eurPrice: any
  }
}

export interface ClientData {
  name: string
  phone: string
  address: string
  email: string
  currency: CurrencyEnum
}

export enum CurrencyEnum {
  usd = 'usd',
  eur = 'eur',
}
