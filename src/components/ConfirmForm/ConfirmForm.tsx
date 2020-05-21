import React, { FC } from 'react'
import * as Styled from './ConfirmForm.styles'
import { Input, Select } from './InputElement'
import { ClientData } from '../../types'

interface ConfirmForm {
  onChange: (
    event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void
  data: ClientData
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  currencies: { name: string; value: string }[]
}

export const ConfirmForm: FC<ConfirmForm> = ({
  onChange,
  data,
  onSubmit,
  currencies,
}: ConfirmForm) => (
  <Styled.Form id="confirmForm" onSubmit={onSubmit}>
    <Styled.InputContainer>
      <Input
        onChange={onChange}
        label="NAME"
        inputProps={{ name: 'name', placeholder: 'My Name', value: data.name, required: true }}
      />
      <Input
        onChange={onChange}
        label="PHONE"
        inputProps={{
          name: 'phone',
          placeholder: '01160040960',
          value: data.phone,
          required: true,
        }}
      />
      <Input
        onChange={onChange}
        label="ADDRESS"
        inputProps={{
          name: 'address',
          placeholder: 'Address 1225',
          value: data.address,
          required: true,
        }}
      />
      <Input
        onChange={onChange}
        label="EMAIL"
        inputProps={{
          name: 'email',
          placeholder: 'myemail@gmail.com',
          value: data.email,
          required: true,
          type: 'email',
        }}
      />
      <Select onChange={onChange} label="CURRENCY" options={currencies} name="currency" />
    </Styled.InputContainer>
  </Styled.Form>
)
