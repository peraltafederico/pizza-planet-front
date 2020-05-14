import React, { FC } from 'react'
import * as Styled from './Input.styles'

interface InputProps extends Partial<HTMLInputElement> {
  name: string
  placeholder: string
  value: string
}

interface Input {
  label: string
  inputProps: InputProps
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export const Input: FC<Input> = ({ label, inputProps, onChange }: Input) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Input onChange={onChange} name={inputProps.name} placeholder={inputProps.placeholder} />
  </Styled.Container>
)
