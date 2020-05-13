import React, { FC } from 'react'
import * as Styled from './Order.styles'
import { OrderItem } from '../../interfaces'
import { Section } from '../Section'
import { Button } from '../Button'

interface Order {
  title: string
  items: OrderItem[]
  totalPrice: number
}

export const Order: FC<Order> = ({ title, items, totalPrice }: Order) => (
  <Section title={title} variant="green">
    {(items.length > 0 ? items : []).map((item) => (
      <>
        {/* // TODO: create grid component */}
        <Styled.ItemsContainer>
          <Styled.NameContainer>
            <Styled.Name>{item.name}</Styled.Name>
          </Styled.NameContainer>
          <Styled.AmountContainer>
            <Styled.Name>* {item.amount}</Styled.Name>
          </Styled.AmountContainer>
          <Styled.PriceContainer>
            <Styled.Price>${item.price}</Styled.Price>
          </Styled.PriceContainer>
        </Styled.ItemsContainer>
      </>
    ))}
    <Styled.TotalContainer>
      <Styled.Total> TOTAL PRICE: {totalPrice}</Styled.Total>
    </Styled.TotalContainer>
    <Styled.ButtonContainer>
      <Button text="ACCEPT" />
    </Styled.ButtonContainer>
  </Section>
)
