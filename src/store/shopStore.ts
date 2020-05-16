import { observable, action, computed, toJS } from 'mobx'
import { createContext } from 'react'
import { Item, Order, TotalPrices } from '../interfaces'

class ShopStore {
  @observable shopCart: Order[] = JSON.parse(localStorage.getItem('orders') || '[]')

  @action addOrder = ({ items, totalPrices }: Order): void => {
    this.shopCart.push({ items, totalPrices })

    localStorage.setItem('orders', JSON.stringify(this.orders))
  }

  @computed get orders(): { items: Item[]; totalPrices: TotalPrices }[] {
    return toJS(this.shopCart)
  }

  @computed get totalOrders(): number {
    return this.orders.length
  }
}

export default createContext(new ShopStore())
