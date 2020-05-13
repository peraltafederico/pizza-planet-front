import React, { FC } from 'react'
import * as Styled from './Order.styles'
import { OrderItem } from '../../interfaces'
import { Section } from '../Section'

interface Order {
  title: string
  items: OrderItem[]
  totalPrice: number
}

export const Order: FC<Order> = ({ title, items, totalPrice }: Order) => (
  <Section title={title} variant="green">
    {(items.length > 0 ? items : []).map((item) => (
      <>
        <Styled.ItemsContainer>
          <Styled.TextContainer>
            <Styled.Text>{item.text}</Styled.Text>
          </Styled.TextContainer>
          <Styled.AmountContainer>
            <Styled.Text>* {item.amount}</Styled.Text>
          </Styled.AmountContainer>
          <Styled.PriceContainer>
            <Styled.Price>${item.price}</Styled.Price>
          </Styled.PriceContainer>
        </Styled.ItemsContainer>
      </>
    ))}
    <Styled.TotalContainer>
      <Styled.Total>
        <span>TOTAL PRICE:{'   '}</span>
        {totalPrice}
      </Styled.Total>
    </Styled.TotalContainer>
  </Section>
)
