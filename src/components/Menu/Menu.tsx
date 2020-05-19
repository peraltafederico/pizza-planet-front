import React, { FC } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Menu.styles'
import { Order } from '../../types'

interface Menu {
  handleClickMinus: (name: string) => void
  handleClickPlus: (name: string) => void
  order: Order
}

export const Menu: FC<Menu> = ({ handleClickMinus, handleClickPlus, order }: Menu) => (
  <>
    {/* // TODO: create grid component */}
    <Styled.OptionsContainer>
      {Object.keys(order).map((product) => (
        <Styled.Container key={product}>
          <Styled.NameContainer>
            <Styled.Name>{product}</Styled.Name>
          </Styled.NameContainer>
          <Styled.NameContainer>
            <Styled.Name>
              ${order[product].usdPrice} / €{order[product].eurPrice}{' '}
            </Styled.Name>
          </Styled.NameContainer>
          <Styled.AmountContainer>
            <Styled.LessIcon onClick={(): void => handleClickMinus(product)} icon={faMinus} />
            <Styled.Amount>{order[product].amount}</Styled.Amount>
            <Styled.PlusIcon onClick={(): void => handleClickPlus(product)} icon={faPlus} />
          </Styled.AmountContainer>
        </Styled.Container>
      ))}
    </Styled.OptionsContainer>
  </>
)
