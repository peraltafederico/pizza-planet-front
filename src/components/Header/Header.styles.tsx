import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { media } from '../../theme/index'

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${(props): string => props.theme.colors.green};
  display: flex;
  align-items: center;
  position: relative;

  ${media.small} {
    height: 60px;
  }
`
export const ShoppingCartIcon = styled(FontAwesomeIcon)`
  color: ${(props): string => props.theme.colors.white};
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 20px;

  ${media.small} {
    font-size: 20px;
    bottom: 20px;
  }
`

export const TitleContainer = styled.div`
  justify-content: center;
  margin: auto;
  cursor: pointer;
`

export const Title = styled.h1`
  color: ${(props): string => props.theme.colors.white};
  font-size: 60px;
  margin: 0;

  ${media.small} {
    font-size: 28px;
  }
`

export const CounterContainer = styled.div`
  background-color: rgb(245, 67, 54, 0.8);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${media.small} {
    width: 18px;
    height: 18px;
    right: 9px;
    top: 10px;
  }
`

export const Counter = styled.span`
  color: white;
  font-size: ${(props): string => props.theme.fonts.text};

  ${media.small} {
    font-size: 14px;
  }
`
