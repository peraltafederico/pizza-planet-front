import { observable, action, computed, toJS, autorun } from 'mobx'
import { createContext } from 'react'
import { Order } from '../types'
import { getOrderWithoutPrices } from '../utils'

class ShopStore {
  constructor() {
    autorun(() =>
      localStorage.setItem(
        'orders',
        JSON.stringify(this.orders, (key, value) => {
          if (key === 'eurPrice' || key === 'usdPrice') {
            return undefined
          }

          return value
        })
      )
    )
  }

  @observable shopCart: Partial<Order>[] = JSON.parse(localStorage.getItem('orders') || '[]')

  @action addOrder = (order: Partial<Order>): void => {
    this.shopCart.push(getOrderWithoutPrices(order))
  }

  @action editOrder = (order: Partial<Order>, id: number): void => {
    this.shopCart[id] = getOrderWithoutPrices(order)
  }

  @action removeOrder = (id: number): void => {
    this.shopCart.splice(id, 1)
  }

  @computed get orders(): Partial<Order>[] {
    return toJS(this.shopCart)
  }

  @computed get totalOrders(): number {
    return this.orders.length
  }
}

export default createContext(new ShopStore())
