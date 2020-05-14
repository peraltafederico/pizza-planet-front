import React from 'react'
import * as Styled from './ConfirmForm.styles'
import { Section } from '../Section'
import { Input } from './Input'

export const ConfirmForm = () => (
  <Section variant="lightGreen" title="CONFIRM FORM">
    <Styled.InputContainer>
      <Input label="Name" inputProps={{ name: 'name', placeholder: 'My Name' }} />
      <Input label="Phone" inputProps={{ name: 'phone', placeholder: '01160040960' }} />
      <Input label="Address" inputProps={{ name: 'address', placeholder: 'Address 1225' }} />
    </Styled.InputContainer>
  </Section>
)
