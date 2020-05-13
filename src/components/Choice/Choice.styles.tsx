import styled from 'styled-components'

export const Title = styled.h2`
  color: ${(props): string => props.theme.colors.black};
  align-self: flex-start;
  margin-bottom: 8px;
`

export const OptionsContainer = styled.div`
  position: relative;
  width: 300px;
`
