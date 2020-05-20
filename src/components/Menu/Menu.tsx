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
    <Styled.Table>
      <Styled.TableHeadGroup>
        <Styled.TableRow>
          <Styled.TableHead>Pizzas</Styled.TableHead>
          <Styled.TableHead>Prices</Styled.TableHead>
          <Styled.TableHead>Amount</Styled.TableHead>
          <Styled.TableHead>Change amount</Styled.TableHead>
        </Styled.TableRow>
      </Styled.TableHeadGroup>
      <Styled.TableBody>
        {Object.keys(order).map((product) => (
          <Styled.TableRow key={product}>
            <Styled.TableData>{order[product].name.toUpperCase()}</Styled.TableData>
            <Styled.TableData>
              ${order[product].usdPrice} / €{order[product].eurPrice}
            </Styled.TableData>
            <Styled.TableData>{order[product].amount}</Styled.TableData>
            <Styled.TableData>
              <Styled.LessIcon onClick={(): void => handleClickMinus(product)} icon={faMinus} />
              <Styled.PlusIcon onClick={(): void => handleClickPlus(product)} icon={faPlus} />
            </Styled.TableData>
          </Styled.TableRow>
        ))}
      </Styled.TableBody>
    </Styled.Table>
  </>
)
