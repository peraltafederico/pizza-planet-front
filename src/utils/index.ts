import { pick, cloneDeep } from 'lodash'
import { Product, Order } from '../types'

export const getDefaultOrder = (products: Product[]): Order => {
  const orderProducts: Order = {}

  products.map((product) => {
    orderProducts[product.name] = {
      amount: 0,
      prices: product.prices,
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
    clientOrder[product]!.prices.usd =
      clientOrder[product]!.prices.usd * clientOrder[product]!.amount

    clientOrder[product]!.prices.eur =
      clientOrder[product]!.prices.eur * clientOrder[product]!.amount
  })

  return clientOrder
}
