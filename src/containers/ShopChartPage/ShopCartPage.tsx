import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { merge, pick } from 'lodash'
import shopStore from '../../store/shopStore'
import { ShopCart } from '../../components/ShopCart'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { getDefaultOrder, getClientOrder } from '../../utils'
import { mockPizzasOption } from '../../mocks'
import { Order } from '../../types'

export const ShopCartPage = observer(() => {
  const { orders, totalOrders } = useContext(shopStore)
  const [clientOrders, setClientOrders] = useState([] as Partial<Order>[])

  useEffect(() => {
    const updatedClientOrders = orders.map((order) => {
      const updatedDefaultOrder = merge(getDefaultOrder(mockPizzasOption), order)

      return getClientOrder(pick(updatedDefaultOrder, Object.keys(order)))
    })

    setClientOrders(updatedClientOrders)
  }, [orders])

  return (
    <>
      <Header title="PIZZA PLANET!" counter={totalOrders} />
      <Section title="SHOP CART" variant="lightGreen">
        <ShopCart orders={clientOrders} linkTo="/order" />
      </Section>
    </>
  )
})
