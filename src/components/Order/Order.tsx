import React, { FC } from 'react'
import * as Styled from './Order.styles'
import { OrderItem } from '../../interfaces'

interface Order {
  title: string
  items: OrderItem[]
}

export const Order: FC<Order> = ({ title, items }: Order) => (
  <Styled.Container>
    <Styled.Title>{title}</Styled.Title>
    {(items.length > 0 ? items : []).map((item) => (
      <>
        <Styled.ItemsContainer>
          <Styled.TextContainer>
            <Styled.Text>{item.text}</Styled.Text>
          </Styled.TextContainer>
          <Styled.PriceContainer>
            <Styled.Price>${item.price}</Styled.Price>
          </Styled.PriceContainer>
        </Styled.ItemsContainer>
      </>
    ))}
  </Styled.Container>
)
