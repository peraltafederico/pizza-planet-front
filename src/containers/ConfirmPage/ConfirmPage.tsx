import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData, OrderItem, TotalPrices } from '../../interfaces'
import { Order } from '../../components/Order'

interface ConfirmPageState {
  orderItems?: OrderItem[]
  totalPrices?: TotalPrices
}

export const ConfirmPage: FC = () => {
  const [clientData, setClientData] = useState({} as ClientData)
  const history = useHistory<ConfirmPageState>()

  const handleOnChangeForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setClientData({
      ...clientData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleClickConfirm = (): void => console.log(clientData)

  return (
    <>
      {history.location.state?.orderItems && history.location.state?.totalPrices ? (
        <>
          <Header title="PIZZA PLANET!" counter="5" />
          <ConfirmForm
            onChange={handleOnChangeForm}
            data={clientData}
            onClickAccept={handleClickConfirm}
          />
          <Order
            title="YOUR ORDER"
            items={history.location.state?.orderItems}
            totalPrices={history.location.state?.totalPrices}
            hideButton={true}
          />
        </>
      ) : (
        history.push('/')
      )}
    </>
  )
}
