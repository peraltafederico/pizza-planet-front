import React, { FC } from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import * as Styled from './Header.styles'

export interface Header {
  title: string
  counter: number
}

export const Header: FC<Header> = ({ title, counter }: Header) => (
  <Styled.Container>
    <Styled.TitleContainer>
      <Link to="/">
        <Styled.Title>{title}</Styled.Title>
      </Link>
    </Styled.TitleContainer>
    <Link to="/shop-cart">
      <Styled.ShoppingCartIcon icon={faShoppingCart} />
      <Styled.CounterContainer>
        <Styled.Counter>{counter}</Styled.Counter>
      </Styled.CounterContainer>
    </Link>
  </Styled.Container>
)
