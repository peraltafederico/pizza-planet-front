import styled from 'styled-components'
import { media } from '../../theme/index'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  justify-content: center;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;

  ${media.large} {
    margin-top: 25px;
    margin-left: 0;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 100%;
  margin-top: 50px;

`

export const MenuContainer = styled.div`
  margin-right: 25px;
  display: flex;
  justify-content: center;
  flex: 2;
  align-items: center;
  flex-wrap: wrap;

  ${media.large} {
    margin-right: 0;
    margin-bottom: 25px;
  }
`
