import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import shopStore from '../../store/shopStore'
import { ShopCart } from '../../components/ShopCart'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export const ShopCartPage = observer(() => {
  const { orders, totalOrders } = useContext(shopStore)

  return (
    <>
      <Header title="PIZZA PLANET!" counter={totalOrders} />
      <Section title="SHOP CART" variant="lightGreen">
        <ShopCart orders={orders} linkTo="/orders" />
      </Section>
    </>
  )
})
