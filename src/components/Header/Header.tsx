import React, { FC } from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Header.styles'

export interface Header {
  title: string
  counter: number
}

export const Header: FC<Header> = ({ title, counter }: Header) => (
  <Styled.Container>
    <Styled.TitleContainer>
      <Styled.Title>{title}</Styled.Title>
    </Styled.TitleContainer>
    <Styled.ShoppingCartIcon icon={faShoppingCart} />
    <Styled.CounterContainer>
      <Styled.Counter>{counter}</Styled.Counter>
    </Styled.CounterContainer>
  </Styled.Container>
)
