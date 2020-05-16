import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Order } from '../Order'
import { Order as OrderInterface } from '../../interfaces'
import * as Styled from './ShopCart.styles'

interface ShopCart {
  orders: OrderInterface[]
  linkTo: string
}

export const ShopCart: FC<ShopCart> = ({ orders, linkTo }: ShopCart) => (
  <>
    {orders.map((order, index) => (
      <Link to={`${linkTo}/${index}`} key={`order${index}`}>
        <Styled.OrderContainer>
          <Order items={order.items} totalPrices={order.totalPrices} hideButton={true} />
        </Styled.OrderContainer>
      </Link>
    ))}
  </>
)
