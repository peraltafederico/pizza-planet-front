import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { media } from '../../theme/index'

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

export const Table = styled.table`
  border: 1px solid grey;
  background-color: #fff;
  box-shadow: 0px 3px 9px 1px grey;
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`

export const TableHeadGroup = styled.thead`
  font-size: ${(props): string => props.theme.fonts.title};
  background-color: #dddddd;

  ${media.small} {
    font-size: 15px;
  }
`

export const TableHead = styled.th`
  padding: 15px 20px;

  ${media.small} {
    padding: 10px 5px;
  }
`

export const TableBody = styled.tbody``

export const TableData = styled.td`
  text-align: center;
  font-size: ${(props): string => props.theme.fonts.text};
  padding: 15px 0;

  ${media.small} {
    font-size: 12px;
    padding: 10px 5px;
  }
`
