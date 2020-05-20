import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge, pick } from 'lodash'
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

  const handleClickConfirm = (): void => removeOrder(id - 1)

  return (
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
  )
})
