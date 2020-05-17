import React, { FC, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData, Order } from '../../types'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'
import { ClientOrder } from '../../components/ClientOrder'

interface ConfirmPageState {
  order?: Order
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
      {history.location.state?.order ? (
        <>
          <Header title="PIZZA PLANET!" counter={totalOrders} />
          <Section variant="lightGreen" title="CONFIRM FORM">
            <ConfirmForm
              onChange={handleOnChangeForm}
              data={clientData}
              onClickAccept={handleClickConfirm}
            />
          </Section>
          <Section variant="green" title="YOUR ORDER">
            <ClientOrder order={history.location.state?.order} hideButton={true} />
          </Section>
        </>
      ) : (
        history.push('/')
      )}
    </>
  )
})
