import React, { FC } from 'react'
import { Order } from '../Order'
import { Order as OrderInterface } from '../../interfaces'
import * as Styled from './ShopCart.styles'

interface ShopCart {
  orders: OrderInterface[]
}

export const ShopCart: FC<ShopCart> = ({ orders }: ShopCart) => (
  <>
    {orders.map((order, index) => (
      <Styled.OrderContainer key={`order${index}`}>
        <Order items={order.items} totalPrices={order.totalPrices} hideButton={true} />
      </Styled.OrderContainer>
    ))}
  </>
)
