import styled from 'styled-components'
import { media } from '../../theme/index'

export const Content = styled.div`
  display: flex;
  margin: 120px 40px 20px 40px;
  flex-wrap: wrap;
  height: calc(100% - 65px);
  box-sizing: border-box;
  justify-content: center;

  ${media.large} {
    margin: 120px 20px;
    flex-direction: column;
  }

  ${media.small} {
    margin: 85px 20px;
  }
`
