import React, { FC } from 'react'
import * as Styled from './Input.styles'

interface InputProps extends Partial<HTMLInputElement> {
  name: string
  placeholder: string
}

interface Input {
  label: string
  inputProps: InputProps
}

export const Input: FC<Input> = ({ label, inputProps }: Input) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Input name={inputProps.name} placeholder={inputProps.placeholder} />
  </Styled.Container>
)
