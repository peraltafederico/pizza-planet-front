import React, { FC, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData, Item, TotalPrices } from '../../interfaces'
import { Order } from '../../components/Order'
import shopStore from '../../store/shopStore'

interface ConfirmPageState {
  items?: Item[]
  totalPrices?: TotalPrices
}

export const ConfirmPage: FC = observer(() => {
  const [clientData, setClientData] = useState({} as ClientData)
  const history = useHistory<ConfirmPageState>()
  const { totalOrders, orders } = useContext(shopStore)

  const handleOnChangeForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setClientData({
      ...clientData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleClickConfirm = (): void => console.log(orders)

  return (
    <>
      {history.location.state?.items && history.location.state?.totalPrices ? (
        <>
          <Header title="PIZZA PLANET!" counter={totalOrders} />
          <ConfirmForm
            onChange={handleOnChangeForm}
            data={clientData}
            onClickAccept={handleClickConfirm}
          />
          <Order
            title="YOUR ORDER"
            items={history.location.state?.items}
            totalPrices={history.location.state?.totalPrices}
            hideButton={true}
          />
        </>
      ) : (
        history.push('/')
      )}
    </>
  )
})
