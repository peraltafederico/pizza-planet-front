import styled from 'styled-components'
import { media } from '../../../theme/index'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

export const Input = styled.input`
  min-width: 420px;
  width: 80%;
  height: 50px;
  font-size: ${(props): string => props.theme.fonts.text};
  padding: 5px;
  box-sizing: border-box;

  ${media.large} {
    width: 100%;
    min-width: initial;
  }

  ${media.small} {
    margin-right: 0px;
    height: 35px;
    font-size: 12px;
  }
`

export const Select = styled.select`
  min-width: 420px;
  width: 80%;
  height: 50px;
  font-size: ${(props): string => props.theme.fonts.text};
  padding: 5px;
  box-sizing: border-box;
  background-color: #fff;

  ${media.large} {
    width: 100%;
    min-width: initial;
  }

  ${media.small} {
    margin-right: 0px;
    height: 35px;
    font-size: 12px;
  }
`

export const Option = styled.option`
  width: 40%;
`

export const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: ${(props): string => props.theme.fonts.text};

  ${media.small} {
    font-size: 12px;
  }
`
