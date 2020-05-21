import { pick, cloneDeep } from 'lodash'
import { Product, Order } from '../types'

export const getDefaultOrder = (products: Product[]): Order => {
  const orderProducts: Order = {}

  products.forEach((product) => {
    orderProducts[product.id] = {
      name: product.name,
      amount: 0,
      eurPrice: parseFloat(product.eurPrice),
      usdPrice: parseFloat(product.usdPrice),
    }
  })

  return orderProducts
}

export const getClientOrder = (productsToOrder: Order): Partial<Order> => {
  const gtzProducts = Object.keys(productsToOrder).filter(
    (name) => productsToOrder[name].amount > 0
  )

  const clientOrder = pick<Order>(cloneDeep(productsToOrder), gtzProducts)

  Object.keys(clientOrder).forEach((product) => {
    clientOrder[product]!.usdPrice = decimal(
      clientOrder[product]!.usdPrice * clientOrder[product]!.amount
    )

    clientOrder[product]!.eurPrice = decimal(
      clientOrder[product]!.eurPrice * clientOrder[product]!.amount
    )
  })

  return clientOrder
}

export const getOrderWithoutPrices = (order: Partial<Order>): Partial<Order> => {
  Object.keys(order).forEach((product) => {
    order[product]!.eurPrice = undefined
    order[product]!.usdPrice = undefined
  })

  return order
}

export const decimal = (number: number): number => Math.round(number * 100) / 100
