import React, { FC } from 'react'
import * as Styled from './ConfirmForm.styles'
import { Input } from './Input'
import { ClientData } from '../../types'

interface ConfirmForm {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  data: ClientData
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const ConfirmForm: FC<ConfirmForm> = ({ onChange, data, onSubmit }: ConfirmForm) => (
  <form id="confirmForm" onSubmit={onSubmit}>
    <Styled.InputContainer>
      <Input
        onChange={onChange}
        label="Name"
        inputProps={{ name: 'name', placeholder: 'My Name', value: data.name, required: true }}
      />
      <Input
        onChange={onChange}
        label="Phone"
        inputProps={{
          name: 'phone',
          placeholder: '01160040960',
          value: data.phone,
          required: true,
        }}
      />
      <Input
        onChange={onChange}
        label="Address"
        inputProps={{
          name: 'address',
          placeholder: 'Address 1225',
          value: data.address,
          required: true,
        }}
      />
      <Input
        onChange={onChange}
        label="Email"
        inputProps={{
          name: 'email',
          placeholder: 'myemail@gmail.com',
          value: data.address,
          required: true,
        }}
      />
    </Styled.InputContainer>
  </form>
)
