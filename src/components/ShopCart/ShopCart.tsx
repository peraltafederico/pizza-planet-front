import React from 'react'
import { observer } from 'mobx-react-lite'
import { Order } from '../../interfaces'

interface ShopCart {
  title: string
  orders: Order[]
}

export const ShopCart = observer(({ title, orders }: ShopCart) => <div>ShopCart</div>)
