import React, { FC } from 'react'
import * as Styled from './ClientOrder.styles'
import { Order } from '../../types'
import { decimal } from '../../utils'

interface ClientOrder {
  order: Partial<Order>
}

export const ClientOrder: FC<ClientOrder> = ({ order }: ClientOrder) => {
  const totalPrices = {
    totalUsd: 0,
    totalEur: 0,
  }

  return (
    <>
      <Styled.Table>
        <Styled.TableHeadGroup>
          <Styled.TableRow>
            <Styled.TableHead>PIZZAS</Styled.TableHead>
            <Styled.TableHead>PRICES</Styled.TableHead>
            <Styled.TableHead>AMOUNT</Styled.TableHead>
          </Styled.TableRow>
        </Styled.TableHeadGroup>
        <Styled.TableBody>
          {Object.keys(order).map((product) => {
            totalPrices.totalEur += order[product]!.eurPrice
            totalPrices.totalUsd += order[product]!.usdPrice

            return (
              <Styled.TableRow key={product}>
                <Styled.TableData>{order[product]!.name.toUpperCase()}</Styled.TableData>
                <Styled.TableData>
                  ${order[product]!.usdPrice} <b>|</b> €{order[product]!.eurPrice}
                </Styled.TableData>
                <Styled.TableData>{order[product]!.amount}</Styled.TableData>
              </Styled.TableRow>
            )
          })}
        </Styled.TableBody>
        <Styled.TableFooter>
          <Styled.TableRow>
            <Styled.TableData colSpan={3}>
              TOTAL PRICE: ${decimal(totalPrices.totalUsd)} <b>|</b> €
              {decimal(totalPrices.totalEur)}
            </Styled.TableData>
          </Styled.TableRow>
        </Styled.TableFooter>
      </Styled.Table>
    </>
  )
}
