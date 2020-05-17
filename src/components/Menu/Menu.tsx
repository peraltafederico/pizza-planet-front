import React, { FC } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Menu.styles'
import { Order } from '../../types'

interface Menu {
  handleClickMinus: (name: string) => void
  handleClickPlus: (name: string) => void
  productsToOrder: Order
}

export const Menu: FC<Menu> = ({ handleClickMinus, handleClickPlus, productsToOrder }: Menu) => (
  <>
    {/* // TODO: create grid component */}
    <Styled.OptionsContainer>
      {Object.keys(productsToOrder).map((product) => (
        <Styled.Container key={product}>
          <Styled.NameContainer>
            <Styled.Name>{product}</Styled.Name>
          </Styled.NameContainer>
          <Styled.NameContainer>
            <Styled.Name>
              ${productsToOrder[product].prices.usd} / €{productsToOrder[product].prices.eur}{' '}
            </Styled.Name>
          </Styled.NameContainer>
          <Styled.AmountContainer>
            <Styled.LessIcon onClick={(): void => handleClickMinus(product)} icon={faMinus} />
            <Styled.Amount>{productsToOrder[product].amount}</Styled.Amount>
            <Styled.PlusIcon onClick={(): void => handleClickPlus(product)} icon={faPlus} />
          </Styled.AmountContainer>
        </Styled.Container>
      ))}
    </Styled.OptionsContainer>
  </>
)
