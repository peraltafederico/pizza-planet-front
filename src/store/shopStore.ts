import { observable, action, computed, toJS } from 'mobx'
import { createContext } from 'react'
import { OrderItem } from '../interfaces'

class ShopStore {
  @observable shopCart: OrderItem[][] = []

  @action addOrder = (order: OrderItem[]): void => {
    this.shopCart.push(order)
  }

  @computed get orders(): OrderItem[][] {
    return toJS(this.shopCart)
  }

  @computed get totalOrders(): number {
    return this.orders.length
  }
}

export default createContext(new ShopStore())
