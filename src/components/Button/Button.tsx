import React, { FC } from 'react'
import * as Styled from './Button.styles'

interface Button {
  text: string
}

export const Button: FC<Button> = ({ text }: Button) => (
  <Styled.Button>
    <Styled.Text>{text}</Styled.Text>
  </Styled.Button>
)
