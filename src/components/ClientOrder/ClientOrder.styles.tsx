import styled from 'styled-components'
import { media } from '../../theme/index'

export const TotalContainer = styled.div`
  margin-top: 25px;
`

export const Total = styled.span`
  font-weight: bold;
`

export const Table = styled.table`
  border: 1px solid grey;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 3px 9px 1px grey;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  background-color: white;
`

export const TableHeadGroup = styled.thead`
  font-size: ${(props): string => props.theme.fonts.title};
  background-color: #dddddd;

  ${media.small} {
    font-size: 15px;
  }
`

export const TableHead = styled.th`
  padding: 15px 25px;

  ${media.small} {
    padding: 10px 5px;
  }
`

export const TableBody = styled.tbody``

export const TableData = styled.td`
  text-align: center;
  font-size: ${(props): string => props.theme.fonts.text};
  padding: 10px 0;

  ${media.small} {
    font-size: 12px;
    padding: 10px 5px;
  }
`

export const TableFooter = styled.tfoot`
  text-align: center;

  & td {
    padding: 15px 0;
  }
`
