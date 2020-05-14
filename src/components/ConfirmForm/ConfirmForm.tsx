import React, { FC } from 'react'
import * as Styled from './ConfirmForm.styles'
import { Section } from '../Section'
import { Input } from './Input'
import { ClientData } from '../../interfaces'

interface ConfirmForm {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  data: ClientData
}

export const ConfirmForm: FC<ConfirmForm> = ({ onChange, data }: ConfirmForm) => (
  <Section variant="lightGreen" title="CONFIRM FORM">
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
  </Section>
)
