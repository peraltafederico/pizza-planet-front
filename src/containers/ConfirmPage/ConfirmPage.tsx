import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge } from 'lodash'
import { ConfirmForm } from '../../components/ConfirmForm'
import { ClientData, Order } from '../../types'
import shopStore from '../../store/shopStore'
import { ClientOrder } from '../../components/ClientOrder'
import { getDefaultOrder } from '../../utils'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner/Spinner.styles'
import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'
import * as Styled from './ConfirmPage.styles'

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

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setDone(true)
  }

  return (
    <>
      {!done ? (
        <>
          <Layout totalOrders={totalOrders}>
            <div>
              <ConfirmForm
                onChange={handleOnChangeForm}
                data={clientData}
                onSubmit={handleSubmitForm}
              />
            </div>
            <div>{!loading ? <ClientOrder order={clientOrder} /> : <Spinner />}</div>
            <Styled.ButtonContainer>
              <Button text="I WANT TO ORDER" formId="confirmForm" />
            </Styled.ButtonContainer>
          </Layout>
        </>
      ) : (
        <div>completado</div>
      )}
    </>
  )
})
