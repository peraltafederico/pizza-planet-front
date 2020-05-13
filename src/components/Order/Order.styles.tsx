import styled from 'styled-components'

export const Title = styled.h2`
  color: ${(props): string => props.theme.colors.black};
  align-self: flex-start;
  margin-bottom: 8px;
`

export const ItemsContainer = styled.div`
  width: 300px;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75px;
`

export const Text = styled.span`
  font-size: 18px;
`

export const Price = styled.span`
  font-size: 18px;
`
