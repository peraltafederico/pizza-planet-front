import React, { FC, useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { OptionsList } from '../../components/OptionsList'
import { mockPizzasOption } from '../../mocks'
import { Order } from '../../components/Order'
import { OrderItem } from '../../interfaces'

export const OrderPage: FC = () => {
  const [pizzasOption, setPizzasOption] = useState(mockPizzasOption)
  const [orderItems, setOrderItems] = useState({} as OrderItem[])

  useEffect(() => {
    const orderItems = pizzasOption
      .filter((option) => option.amount > 0)
      .map((option) => ({ text: option.name, price: '100' }))

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
      <OptionsList
        options={mockPizzasOption}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
        title="CHOSE YOUR ORDER"
      />
      <Order title="YOUR ORDER" items={orderItems} />
    </>
  )
}
