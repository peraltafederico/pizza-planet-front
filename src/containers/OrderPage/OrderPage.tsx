import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Choice } from '../../components/Choice'
import { mockPizzasOption } from '../../mocks'
import { Order } from '../../components/Order'
import { OrderItem, TotalPrices } from '../../interfaces'

export const OrderPage: FC = () => {
  const [pizzasOption, setPizzasOption] = useState(mockPizzasOption)
  const [orderItems, setOrderItems] = useState({} as OrderItem[])
  const [totalPrices, setTotalPrices] = useState({} as TotalPrices)
  const history = useHistory()

  useEffect(() => {
    const totalPrices = {
      totalUsd: 0,
      totalEur: 0,
    }

    const orderItems = pizzasOption
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
    setOrderItems(orderItems)
  }, [pizzasOption])

  const handleClickPlus = (index: number): void => {
    const newPizzasOption = [...pizzasOption]
    newPizzasOption[index].amount += 1

    setPizzasOption(newPizzasOption)
  }

  const handleClickMinus = (index: number): void => {
    const newPizzasOption = [...pizzasOption]

    if (newPizzasOption[index].amount - 1 >= 0) {
      newPizzasOption[index].amount -= 1
    }

    setPizzasOption(newPizzasOption)
  }

  const handleClickAccept = (): void => history.push('/confirm', { orderItems, totalPrices })

  return (
    <>
      <Header title="PIZZA PLANET!" counter="5" />
      <Choice
        options={mockPizzasOption}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
        title="CHOSE YOUR ORDER"
      />
      <Order
        title="YOUR ORDER"
        items={orderItems}
        totalPrices={totalPrices}
        onClickAccept={handleClickAccept}
      />
    </>
  )
}
