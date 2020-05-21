import styled from 'styled-components'
import { media } from '../../theme/index'

export const ConfirmFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  align-items: center;
  flex-wrap: wrap;

  ${media.large} {
    margin-bottom: 50px;
  }
`

export const ClientOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 100%;
  margin-top: 50px;
`
