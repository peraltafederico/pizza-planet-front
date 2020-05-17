import React, { FC, useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { mockPizzasOption } from '../../mocks'
import { ClientOrder } from '../../components/ClientOrder'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'
import { getProductsToOrder, getClientOrder } from '../../utils'

export const OrderPage: FC = observer(() => {
  const [productsToOrder, setProductsToOrder] = useState(getProductsToOrder(mockPizzasOption))
  const history = useHistory()
  const { addOrder, totalOrders } = useContext(shopStore)
  const clientOrder = getClientOrder(productsToOrder)
  const { id } = useParams()

  const handleClickPlus = (name: string): void => {
    setProductsToOrder({
      ...productsToOrder,
      [name]: {
        ...productsToOrder[name],
        amount: productsToOrder[name].amount + 1,
      },
    })
  }

  const handleClickMinus = (name: string): void => {
    setProductsToOrder({
      ...productsToOrder,
      [name]: {
        ...productsToOrder[name],
        amount: productsToOrder[name].amount - 1,
      },
    })
  }

  const handleClickAccept = (): void => {
    addOrder(clientOrder)
    history.push('/confirm', { order: clientOrder })
  }

  return (
    <>
      <Header title="PIZZA PLANET!" counter={totalOrders} />
      <Section variant="lightGreen" title="MENU">
        <Menu
          productsToOrder={productsToOrder}
          handleClickPlus={handleClickPlus}
          handleClickMinus={handleClickMinus}
        />
      </Section>
      <Section variant="green" title="YOUR ORDER">
        <ClientOrder order={clientOrder} onClickAccept={handleClickAccept} />
      </Section>
    </>
  )
})
