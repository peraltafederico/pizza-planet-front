import React, { FC, useState } from 'react'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData } from '../../interfaces'

export const ConfirmPage: FC = () => {
  const [clientData, setClientData] = useState({} as ClientData)

  const handleOnChangeForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setClientData({
      ...clientData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  return (
    <>
      <Header title="PIZZA PLANET!" counter="5" />
      <ConfirmForm onChange={handleOnChangeForm} data={clientData} />
      {/* <Order
        title="YOUR ORDER"
        items={orderItems}
        totalPrices={totalPrices}
        onClickAccept={handleClickAccept}
      /> */}
    </>
  )
}
