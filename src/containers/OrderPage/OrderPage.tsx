import React, { FC, useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { merge } from 'lodash'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { mockPizzasOption } from '../../mocks'
import { ClientOrder } from '../../components/ClientOrder'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'
import { getDefaultOrder, getClientOrder } from '../../utils'

export const OrderPage: FC = observer(() => {
  const [defaultOrder, setDefaultOorder] = useState(getDefaultOrder(mockPizzasOption))
  const history = useHistory()
  const { addOrder, totalOrders, orders } = useContext(shopStore)
  const clientOrder = getClientOrder(defaultOrder)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const clientOrder = orders[id - 1]

      const updatedDefaultOrder = merge(getDefaultOrder(mockPizzasOption), clientOrder)

      setDefaultOorder(updatedDefaultOrder)
    } else {
      setDefaultOorder(getDefaultOrder(mockPizzasOption))
    }
  }, [id, orders])

  const handleClickPlus = (name: string): void => {
    setDefaultOorder({
      ...defaultOrder,
      [name]: {
        ...defaultOrder[name],
        amount: defaultOrder[name].amount + 1,
      },
    })
  }

  const handleClickMinus = (name: string): void => {
    setDefaultOorder({
      ...defaultOrder,
      [name]: {
        ...defaultOrder[name],
        amount: defaultOrder[name].amount - 1,
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
          order={defaultOrder}
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
