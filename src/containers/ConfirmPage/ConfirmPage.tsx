import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge } from 'lodash'
import axios from 'axios'
import { ConfirmForm } from '../../components/ConfirmForm'
import shopStore from '../../store/shopStore'
import { ClientData, Order } from '../../types'
import { ClientOrder } from '../../components/ClientOrder'
import { getDefaultOrder, getClientOrder } from '../../utils'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner/Spinner.styles'
import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'
import * as Styled from './ConfirmPage.styles'
import 'mobx-react-lite/batchingForReactDom'

export const ConfirmPage: FC = observer(() => {
  const [clientData, setClientData] = useState({ currency: 'eur' } as ClientData)
  const [clientOrder, setClientOrder] = useState({} as Partial<Order>)
  const history = useHistory()
  const { totalOrders, orders, removeOrder } = useContext(shopStore)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [done, setDone] = useState(false)

  const handleOnChangeForm = (
    event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setClientData({
      ...clientData,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  useEffect(() => {
    const clientOrder = orders[id - 1]
    const source = axios.CancelToken.source()

    const fetchProducts = async (): Promise<void> => {
      const { data } = await ApiService.getProductsByIds(Object.keys(clientOrder), source.token)

      if (clientOrder) {
        const updatedDefaultOrder = merge(getDefaultOrder(data), clientOrder)

        setClientOrder(getClientOrder(updatedDefaultOrder))
      } else {
        history.push('/order')
      }

      setLoading(false)
    }

    fetchProducts()

    return (): void => source.cancel()
  }, [id, orders, history])

  useEffect(() => {
    const source = axios.CancelToken.source()

    const sendOrder = async (): Promise<void> => {
      const products = Object.keys(orders[id - 1]).map((productId) => ({
        id: parseInt(productId, 10),
        amount: clientOrder[productId]!.amount,
        buyingPrice:
          clientData.currency === 'usd'
            ? clientOrder[productId]!.usdPrice
            : clientOrder[productId]!.eurPrice,
      }))

      const data = {
        ...clientData,
        products,
      }

      await ApiService.sendOrder(data, source.token)
    }

    if (done) {
      sendOrder()

      setTimeout(() => {
        history.replace('/order')
        removeOrder(id - 1)
      }, 2000)
    }

    return (): void => source.cancel()
  }, [id, removeOrder, done, clientOrder, clientData, history, orders])

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    setDone(true)
  }

  return (
    <>
      {!done ? (
        <>
          <Layout totalOrders={totalOrders}>
            <Styled.ConfirmFormContainer>
              <ConfirmForm
                onChange={handleOnChangeForm}
                data={clientData}
                onSubmit={handleSubmitForm}
                currencies={[
                  { name: 'Euro', value: 'eur' },
                  { name: 'Dolares', value: 'usd' },
                ]}
              />
            </Styled.ConfirmFormContainer>
            <Styled.ClientOrderContainer>
              {!loading ? <ClientOrder order={clientOrder} /> : <Spinner />}
            </Styled.ClientOrderContainer>
            <Styled.ButtonContainer>
              <Button text="I WANT TO ORDER" formId="confirmForm" />
            </Styled.ButtonContainer>
          </Layout>
        </>
      ) : (
        <Layout totalOrders={totalOrders}>
          <Styled.NotificationContainer>
            <h1>YOUR ORDER HAS BEEN RECEIVED.</h1>
            <h3>REDIRECTING...</h3>
          </Styled.NotificationContainer>
        </Layout>
      )}
    </>
  )
})
