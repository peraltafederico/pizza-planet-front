import React, { FC } from 'react'
import * as Styled from './Order.styles'
import { OrderItem, TotalPrices } from '../../interfaces'
import { Section } from '../Section'
import { Button } from '../Button'

interface Order {
  title: string
  items: OrderItem[]
  totalPrices: TotalPrices
}

export const Order: FC<Order> = ({ title, items, totalPrices }: Order) => (
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
            <Styled.Price>
              ${item.prices.usd} / €{item.prices.eur}
            </Styled.Price>
          </Styled.PriceContainer>
        </Styled.ItemsContainer>
      </>
    ))}
    <Styled.TotalContainer>
      <Styled.Total>
        TOTAL PRICE: ${totalPrices.totalUsd} / €{totalPrices.totalEur}
      </Styled.Total>
    </Styled.TotalContainer>
    <Styled.ButtonContainer>
      <Button text="ACCEPT" />
    </Styled.ButtonContainer>
  </Section>
)
