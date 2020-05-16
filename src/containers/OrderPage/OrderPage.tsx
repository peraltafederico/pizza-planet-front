import React, { FC, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Header } from '../../components/Header'
import { Choice } from '../../components/Choice'
import { mockPizzasOption } from '../../mocks'
import { Order } from '../../components/Order'
import { Item, TotalPrices } from '../../interfaces'
import shopStore from '../../store/shopStore'
import { Section } from '../../components/Section'

export const OrderPage: FC = observer(() => {
  const [option, setOption] = useState(mockPizzasOption)
  const [items, setOrderItems] = useState({} as Item[])
  const [totalPrices, setTotalPrices] = useState({} as TotalPrices)
  const history = useHistory()
  const { addOrder, orders, totalOrders } = useContext(shopStore)

  useEffect(() => {
    const totalPrices = {
      totalUsd: 0,
      totalEur: 0,
    }

    const items = option
      .filter((option) => option.amount > 0)
      .map((option) => {
        const usdPrice = option.prices.usd * option.amount
        const eurPrice = option.prices.eur * option.amount

        totalPrices.totalEur += eurPrice
        totalPrices.totalUsd += usdPrice

        return {
          name: option.name,
          prices: {
            eur: option.prices.eur * option.amount,
            usd: option.prices.usd * option.amount,
          },
          amount: option.amount,
        }
      })

    setTotalPrices(totalPrices)
    setOrderItems(items)
  }, [option])

  const handleClickPlus = (index: number): void => {
    const newOption = [...option]
    newOption[index].amount += 1

    setOption(newOption)
  }

  const handleClickMinus = (index: number): void => {
    const newOption = [...option]

    if (newOption[index].amount - 1 >= 0) {
      newOption[index].amount -= 1
    }

    setOption(newOption)
  }

  const handleClickAccept = (): void => {
    addOrder({ items, totalPrices })
    history.push('/confirm', { items, totalPrices })
  }

  return (
    <>
      <Header title="PIZZA PLANET!" counter={totalOrders} />
      <Section variant="lightGreen" title="CHOSE YOUR ORDER">
        <Choice
          options={mockPizzasOption}
          handleClickPlus={handleClickPlus}
          handleClickMinus={handleClickMinus}
        />
      </Section>
      <Section variant="green" title="YOUR ORDER">
        <Order items={items} totalPrices={totalPrices} onClickAccept={handleClickAccept} />
      </Section>
    </>
  )
})
