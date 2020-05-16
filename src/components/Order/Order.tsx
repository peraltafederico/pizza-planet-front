import React, { FC } from 'react'
import * as Styled from './Order.styles'
import { Item, TotalPrices } from '../../interfaces'
import { Section } from '../Section'
import { Button } from '../Button'

interface Order {
  items: Item[]
  totalPrices: TotalPrices
  onClickAccept?: () => void
  hideButton?: boolean
}

export const Order: FC<Order> = ({
  items,
  totalPrices,
  onClickAccept = (): void => {},
  hideButton,
}: Order) => (
  <>
    {(items.length > 0 ? items : []).map((item) => (
      <Styled.ItemsContainer key={item.name}>
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
    ))}
    <Styled.TotalContainer>
      <Styled.Total>
        TOTAL PRICE: ${totalPrices.totalUsd} / €{totalPrices.totalEur}
      </Styled.Total>
    </Styled.TotalContainer>
    {!hideButton && (
      <Styled.ButtonContainer>
        <Button text="ACCEPT" onClick={onClickAccept} />
      </Styled.ButtonContainer>
    )}
  </>
)

Order.defaultProps = {
  hideButton: false,
}
