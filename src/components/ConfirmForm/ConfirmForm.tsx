import React, { FC } from 'react'
import * as Styled from './ConfirmForm.styles'
import { Section } from '../Section'
import { Input } from './Input'
import { ClientData } from '../../interfaces'
import { Button } from '../Button'

interface ConfirmForm {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  data: ClientData
  onClickAccept: () => void
}

export const ConfirmForm: FC<ConfirmForm> = ({ onChange, data, onClickAccept }: ConfirmForm) => (
  <>
    <Styled.InputContainer>
      <Input
        onChange={onChange}
        label="Name"
        inputProps={{ name: 'name', placeholder: 'My Name', value: data.name }}
      />
      <Input
        onChange={onChange}
        label="Phone"
        inputProps={{ name: 'phone', placeholder: '01160040960', value: data.phone }}
      />
      <Input
        onChange={onChange}
        label="Address"
        inputProps={{ name: 'address', placeholder: 'Address 1225', value: data.address }}
      />
    </Styled.InputContainer>
    <Styled.ButtonContainer>
      <Button text="ACCEPT" onClick={onClickAccept} />
    </Styled.ButtonContainer>
  </>
)
