import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import shopStore from '../../store/shopStore'
import { Order } from '../../components/Order'

export const ShopCart = observer(() => {
  const { orders } = useContext(shopStore)

  return <div>shopcart</div>
})
