import { pick, cloneDeep } from 'lodash'
import { Product, Order } from '../types'

export const getDefaultOrder = (products: Product[]): Order => {
  const orderProducts: Order = {}

  products.forEach((product) => {
    orderProducts[product.name] = {
      amount: 0,
      eurPrice: product.eurPrice,
      usdPrice: product.usdPrice,
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
    clientOrder[product]!.usdPrice = clientOrder[product]!.usdPrice * clientOrder[product]!.amount

    clientOrder[product]!.eurPrice = clientOrder[product]!.eurPrice * clientOrder[product]!.amount
  })

  return clientOrder
}
