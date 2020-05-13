import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background-color: ${(props): string => props.theme.background};
  display: flex;
  align-items: center;
  position: relative;
`
export const ShoppingCartIcon = styled(FontAwesomeIcon)`
  color: ${(props): string => props.theme.textColor};
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  right: 15px;
`

export const TitleContainer = styled.div`
  justify-content: center;
  margin: auto;
`

export const Title = styled.h1`
  color: ${(props): string => props.theme.textColor};
  margin: 0;
`

export const CounterContainer = styled.div`
  background-color: rgb(245, 67, 54, 0.8);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Counter = styled.span`
  color: white;
  font-size: 12px;
`
