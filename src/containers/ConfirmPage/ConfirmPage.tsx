import React, { FC } from 'react'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'

export const ConfirmPage: FC = () => {
  return (
    <>
      <Header title="PIZZA PLANET!" counter="5" />
      <ConfirmForm />
      {/* <Order
        title="YOUR ORDER"
        items={orderItems}
        totalPrices={totalPrices}
        onClickAccept={handleClickAccept}
      /> */}
    </>
  )
}
