import React, { FC, useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Choice } from '../../components/Choice'
import { mockPizzasOption } from '../../mocks'
import { Order } from '../../components/Order'
import { OrderItem } from '../../interfaces'

export const OrderPage: FC = () => {
  const [pizzasOption, setPizzasOption] = useState(mockPizzasOption)
  const [orderItems, setOrderItems] = useState({} as OrderItem[])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let totalPrice = 0

    const orderItems = pizzasOption
      .filter((option) => option.amount > 0)
      .map((option) => {
        const price = option.prices.eur * option.amount
        totalPrice += price

        return {
          name: option.name,
          price,
          amount: option.amount,
        }
      })

    setTotalPrice(totalPrice)
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

  return (
    <>
      <Header title="PIZZA PLANET!" counter="5" />
      <Choice
        options={mockPizzasOption}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
        title="CHOSE YOUR ORDER"
      />
      <Order title="YOUR ORDER" items={orderItems} totalPrice={totalPrice} />
    </>
  )
}
