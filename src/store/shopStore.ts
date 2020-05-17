import { observable, action, computed, toJS } from 'mobx'
import { createContext } from 'react'
import { Order } from '../types'

class ShopStore {
  @observable shopCart: Partial<Order>[] = JSON.parse(localStorage.getItem('orders') || '[]')

  @action addOrder = (order: Partial<Order>): void => {
    this.shopCart.push(order)

    localStorage.setItem('orders', JSON.stringify(this.orders))
  }

  @computed get orders(): Partial<Order>[] {
    return toJS(this.shopCart)
  }

  @computed get totalOrders(): number {
    return this.orders.length
  }
}

export default createContext(new ShopStore())
