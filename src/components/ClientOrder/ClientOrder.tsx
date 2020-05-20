import React, { FC } from 'react'
import * as Styled from './ClientOrder.styles'
import { Order } from '../../types'

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
            <Styled.TableHead>Pizza</Styled.TableHead>
            <Styled.TableHead>Prices</Styled.TableHead>
            <Styled.TableHead>Amount</Styled.TableHead>
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
                  ${order[product]!.usdPrice} / €{order[product]!.eurPrice}
                </Styled.TableData>
                <Styled.TableData>{order[product]!.amount}</Styled.TableData>
              </Styled.TableRow>
            )
          })}
        </Styled.TableBody>
        <Styled.TableFooter>
          <Styled.TableData colSpan={3}>
            TOTAL PRICE: ${totalPrices.totalUsd} / €{totalPrices.totalEur}
          </Styled.TableData>
        </Styled.TableFooter>
      </Styled.Table>
    </>
  )
}
