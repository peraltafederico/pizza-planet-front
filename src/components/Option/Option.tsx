import React, { FC } from 'react'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Option.styles'

interface Option {
  text: string
  amount: number
  index: number
  handleClickMinus: (index: number) => void
  handleClickPlus: (index: number) => void
}

export const Option: FC<Option> = ({
  text,
  amount,
  handleClickMinus,
  handleClickPlus,
  index,
}: Option) => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Text>{text}</Styled.Text>
      </Styled.TextContainer>
      <Styled.AmountContainer>
        <Styled.LessIcon onClick={(): void => handleClickMinus(index)} icon={faMinus} />
        <Styled.Amount>{amount}</Styled.Amount>
        <Styled.PlusIcon onClick={(): void => handleClickPlus(index)} icon={faPlus} />
      </Styled.AmountContainer>
    </Styled.Container>
  )
}
