import styled from 'styled-components'

export const Button = styled.div`
  width: fit-content;
  padding: 20px 45px;
  background-color: ${(props): string => props.theme.colors.red};
  cursor: pointer;
  border-radius: 25px;
  box-shadow: ${(props): string => `0px 0px 8px 0.5px ${props.theme.colors.black}`};
`

export const Text = styled.span`
  color: ${(props): string => props.theme.colors.black};
  font-size: bold;
  font-size: 35px;
  &:hover {
    color: ${(props): string => props.theme.colors.white};
  }
`
