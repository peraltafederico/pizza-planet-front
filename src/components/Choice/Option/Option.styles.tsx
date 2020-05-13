import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  height: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

export const LessIcon = styled(FontAwesomeIcon)`
  color: ${(props): string => props.theme.colors.blue};
  margin: 0 8px;
  cursor: pointer;
`

export const PlusIcon = styled(FontAwesomeIcon)`
  color: ${(props): string => props.theme.colors.red};
  margin: 0 8px;
  cursor: pointer;
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 18px;
`

export const Text = styled.span`
  color: ${(props): string => props.theme.colors.black};
`

export const Amount = styled.span`
  color: ${(props): string => props.theme.colors.black};
  font-size: 18px;
`

export const AmountContainer = styled.div`
  width: 75px;
`
