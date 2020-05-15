import React, { FC } from 'react'
import * as Styled from './Button.styles'

interface Button {
  text: string
  onClick: () => void
}

export const Button: FC<Button> = ({ text, onClick }: Button) => (
  <Styled.Button onClick={onClick}>
    <Styled.Text>{text}</Styled.Text>
  </Styled.Button>
)
