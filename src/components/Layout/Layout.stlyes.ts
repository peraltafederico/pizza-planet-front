import styled from 'styled-components'
import { media } from '../../theme/index'

export const Content = styled.div`
  display: flex;
  padding: 50px 40px;
  flex-wrap: wrap;
  height: calc(100% - 65px);
  box-sizing: border-box;


  ${media.large} {
    padding: 20px 20px;
    flex-direction: column;
  }
`
