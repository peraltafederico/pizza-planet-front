import styled from 'styled-components'
import { media } from '../../theme/index'

export const Button = styled.button`
  width: fit-content;
  padding: 20px 45px;
  background-color: ${(props): string => props.theme.colors.red};
  cursor: pointer;
  border-radius: 25px;
  box-shadow: ${(props): string => `0px 0px 8px 0.5px ${props.theme.colors.black}`};
  border-color: transparent;
  transition: all 200ms ease;

  &:hover {
    padding: 28px 60px;
  }

  ${media.small} {
    padding: 10px 15px;
  }
`

export const Text = styled.span`
  color: ${(props): string => props.theme.colors.black};
  font-weight: bold;
  font-size: ${(props): string => props.theme.fonts.title};

  ${media.small} {
    font-size: 12px;
  }
`
