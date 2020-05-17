import React, { FC } from 'react'
import * as Styled from './ClientOrder.styles'
import { Button } from '../Button'
import { Order } from '../../types'

interface ClientOrder {
  order: Partial<Order>
  onClickAccept?: () => void
  hideButton?: boolean
}

export const ClientOrder: FC<ClientOrder> = ({
  order,
  onClickAccept = (): void => {},
  hideButton,
}: ClientOrder) => {
  const totalPrices = {
    totalUsd: 0,
    totalEur: 0,
  }

  return (
    <>
      {Object.keys(order).map((product) => {
        totalPrices.totalEur += order[product]!.prices.eur
        totalPrices.totalUsd += order[product]!.prices.usd

        return (
          <Styled.ItemsContainer key={product}>
            <Styled.NameContainer>
              <Styled.Name>{product}</Styled.Name>
            </Styled.NameContainer>
            <Styled.AmountContainer>
              <Styled.Name>* {order[product]!.amount}</Styled.Name>
            </Styled.AmountContainer>
            <Styled.PriceContainer>
              <Styled.Price>
                ${order[product]!.prices.usd} / €{order[product]!.prices.eur}
              </Styled.Price>
            </Styled.PriceContainer>
          </Styled.ItemsContainer>
        )
      })}
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
}

ClientOrder.defaultProps = {
  hideButton: false,
}
