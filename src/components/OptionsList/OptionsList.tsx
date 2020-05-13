import React, { FC } from 'react'
import * as Styled from './OptionsList.styles'
import { Option } from '../Option'
import { Section } from '../Section'

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
  <Section title={title} variant="lightGreen">
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
  </Section>
)
