import styled from 'styled-components'

export const Title = styled.h2`
  color: ${(props): string => props.theme.colors.black};
  align-self: flex-start;
  margin-bottom: 8px;
`

export const ItemsContainer = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 10px;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const PriceContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 75px;
`

export const Name = styled.span`
  font-size: 18px;
`

export const Price = styled.span`
  font-size: 18px;
`

export const TotalContainer = styled.div`
  margin-top: 25px;
`

export const Total = styled.span`
  font-weight: bold;
`
