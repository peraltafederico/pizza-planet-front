import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge } from 'lodash'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { ClientOrder } from '../../components/ClientOrder'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'
import { getDefaultOrder, getClientOrder } from '../../utils'
import { Order } from '../../types'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner'
import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'
import * as Styled from './OrderPage.styles'

export const OrderPage: FC = observer(() => {
  const [defaultOrder, setDefaultOrder] = useState({} as Order)
  const history = useHistory()
  const { addOrder, editOrder, totalOrders, orders } = useContext(shopStore)
  const clientOrder = getClientOrder(defaultOrder)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const { data } = await ApiService.getProducts()

      if (id) {
        const clientOrder = orders[id - 1]

        if (clientOrder) {
          const updatedDefaultOrder = merge(getDefaultOrder(data), clientOrder)

          setDefaultOrder(updatedDefaultOrder)
        } else {
          history.push('/order')
        }
      } else {
        setDefaultOrder(getDefaultOrder(data))
      }

      setLoading(false)
    }

    fetchProducts()
  }, [id, orders, history])

  const handleClickPlus = (name: string): void => {
    setDefaultOrder({
      ...defaultOrder,
      [name]: {
        ...defaultOrder[name],
        amount: defaultOrder[name].amount + 1,
      },
    })
  }

  const handleClickMinus = (name: string): void => {
    setDefaultOrder({
      ...defaultOrder,
      [name]: {
        ...defaultOrder[name],
        amount: defaultOrder[name].amount - 1,
      },
    })
  }

  const handleClickAccept = (): void => {
    if (id) {
      editOrder(clientOrder, id - 1)
      history.push(`/order/${id}/confirm`)
    } else {
      addOrder(clientOrder)
      history.push(`order/${orders.length + 1}/confirm`)
    }
  }

  return (
    <Layout totalOrders={totalOrders}>
      {!loading ? (
        <>
          <div>
            <Menu
              order={defaultOrder}
              handleClickPlus={handleClickPlus}
              handleClickMinus={handleClickMinus}
            />
          </div>
          <Styled.OrderContainer>
            <ClientOrder order={clientOrder} onClickAccept={handleClickAccept} hideButton={true} />
          </Styled.OrderContainer>
          <Styled.ButtonContainer>
            <Button text="ACCEPT" onClick={handleClickAccept} />
          </Styled.ButtonContainer>
        </>
      ) : (
        <Spinner />
      )}
    </Layout>
  )
})
