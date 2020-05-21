import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './ShopCart.styles'
import { ClientOrder } from '../ClientOrder'
import { Order } from '../../types'

interface ShopCart {
  orders: Partial<Order>[]
  linkTo: string
}

export const ShopCart: FC<ShopCart> = ({ orders, linkTo }: ShopCart) => (
  <>
    {orders.map((order, index) => (
      <Styled.ShopCartLink to={`${linkTo}/${index + 1}`} key={`order${index}`}>
        <Styled.OrderContainer>
          <ClientOrder order={order} />
        </Styled.OrderContainer>
      </Styled.ShopCartLink>
    ))}
  </>
)
