import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge } from 'lodash'
import { Header } from '../../components/Header'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData, Order } from '../../types'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'
import { ClientOrder } from '../../components/ClientOrder'
import { getDefaultOrder } from '../../utils'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner/Spinner.styles'

export const ConfirmPage: FC = observer(() => {
  const [clientData, setClientData] = useState({} as ClientData)
  const [clientOrder, setClientOrder] = useState({} as Partial<Order>)
  const history = useHistory()
  const { totalOrders, orders, removeOrder } = useContext(shopStore)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [done, setDone] = useState(false)

  const handleOnChangeForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setClientData({
      ...clientData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  useEffect(() => {
    const clientOrder = orders[id - 1]

    const fetchProducts = async (): Promise<void> => {
      const { data } = await ApiService.getProductsByIds(Object.keys(clientOrder))

      if (clientOrder) {
        const updatedDefaultOrder = merge(getDefaultOrder(data), clientOrder)

        setClientOrder(updatedDefaultOrder)
      } else {
        history.push('/order')
      }

      setLoading(false)
    }

    fetchProducts()
  }, [id, orders, history])

  useEffect(() => {
    const sendOrder = async (): Promise<void> => {
      const data = {
        ...clientData,
        products: Object.keys(clientOrder),
      }

      await ApiService.sendOrder(data)
    }

    if (done) {
      sendOrder()

      setTimeout(() => {
        history.replace('/order')
        removeOrder(id - 1)
      }, 1600)
    }
  }, [id, removeOrder, done, clientOrder, clientData, history])

  const handleClickConfirm = (): void => {
    setDone(true)
  }

  return (
    <>
      {!done ? (
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
            {!loading ? <ClientOrder order={clientOrder} hideButton={true} /> : <Spinner />}
          </Section>
        </>
      ) : (
        <div>completado</div>
      )}
    </>
  )
})
