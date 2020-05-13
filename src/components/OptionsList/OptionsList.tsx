import React, { FC } from 'react'
import * as Styled from './OptionsList.styles'
import { Option } from '../Option'

interface OptionsList {
  title: string
  handleClickMinus: (index: number) => void
  handleClickPlus: (index: number) => void
  options: {
    amount: number
    name: string
  }[]
}

export const OptionsList: FC<OptionsList> = ({
  title,
  handleClickMinus,
  handleClickPlus,
  options,
}: OptionsList) => (
  <Styled.Container>
    <Styled.Title>{title}</Styled.Title>
    <Styled.OptionsContainer>
      {options.map((option, index) => (
        <Option
          key={`${option.name}${index}`}
          handleClickMinus={handleClickMinus}
          handleClickPlus={handleClickPlus}
          text={option.name}
          amount={option.amount}
          index={index}
        />
      ))}
    </Styled.OptionsContainer>
  </Styled.Container>
)
