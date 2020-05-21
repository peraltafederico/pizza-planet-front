import React, { FC } from 'react'
import * as Styled from './Button.styles'

interface Button {
  text: string
  onClick?: () => void
  formId?: string
}

export const Button: FC<Button> = ({ text, onClick, formId }: Button) => (
  <Styled.Button onClick={onClick} form={formId}>
    <Styled.Text>{text}</Styled.Text>
  </Styled.Button>
)
