import React, { FC, InputHTMLAttributes } from 'react'
import * as Styled from './InputElement.styles'

interface Element {
  onChange: (
    event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void
  label: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  value: string
  required: boolean
}

interface Input extends Element {
  inputProps: InputProps
}

export const Input: FC<Input> = ({ label, inputProps, onChange }: Input) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Input
      onChange={onChange}
      name={inputProps.name}
      placeholder={inputProps.placeholder}
      required={inputProps.required}
      type="text"
      {...inputProps}
    />
  </Styled.Container>
)

interface Select extends Element {
  options: { name: string; value: string }[]
  name: string
}

export const Select: FC<Select> = ({ label, options, onChange, name }: Select) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Select onChange={onChange} name={name}>
      {options.map((option) => (
        <Styled.Option key={option.name} value={option.value}>
          {option.name}
        </Styled.Option>
      ))}
    </Styled.Select>
  </Styled.Container>
)
