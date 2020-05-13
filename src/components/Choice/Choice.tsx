import React, { FC } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Choice.styles'
import { Section } from '../Section'

interface Choice {
  title: string
  handleClickMinus: (index: number) => void
  handleClickPlus: (index: number) => void
  options: {
    amount: number
    name: string
  }[]
}

export const Choice: FC<Choice> = ({
  title,
  handleClickMinus,
  handleClickPlus,
  options,
}: Choice) => (
  <Section title={title} variant="lightGreen">
    <Styled.OptionsContainer>
      {options.map((option, index) => (
        <Styled.Container key={`${option.name}${index}`}>
          <Styled.NameContainer>
            <Styled.Name>{option.name}</Styled.Name>
          </Styled.NameContainer>
          <Styled.AmountContainer>
            <Styled.LessIcon onClick={(): void => handleClickMinus(index)} icon={faMinus} />
            <Styled.Amount>{option.amount}</Styled.Amount>
            <Styled.PlusIcon onClick={(): void => handleClickPlus(index)} icon={faPlus} />
          </Styled.AmountContainer>
        </Styled.Container>
      ))}
    </Styled.OptionsContainer>
  </Section>
)
