import styled from 'styled-components'

export const Button = styled.div`
  width: fit-content;
  padding: 10px 25px;
  background-color: ${(props): string => props.theme.colors.red};
  cursor: pointer;
  border-radius: 40px;
  box-shadow: ${(props): string => `0px 0px 8px 0.5px ${props.theme.colors.black}`};
`

export const Text = styled.span`
  color: ${(props): string => props.theme.colors.black};
  font-size: bold;
  font-size: 18px;
  &:hover {
    color: ${(props): string => props.theme.colors.white};
  }
`
