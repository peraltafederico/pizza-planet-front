import styled, { DefaultTheme } from 'styled-components'
import { SectionVariant } from '../../types'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props: { theme: DefaultTheme; color: SectionVariant }): string =>
    props.theme.colors[props.color]};
  padding: 15px 40px;
  align-items: flex-start;
  overflow-x: auto;
`

export const Title = styled.h2`
  color: ${(props): string => props.theme.colors.black};
  align-self: flex-start;
  margin-bottom: 8px;
`
