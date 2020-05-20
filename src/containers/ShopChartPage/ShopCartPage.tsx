import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { merge, pick } from 'lodash'
import shopStore from '../../store/shopStore'
import { ShopCart } from '../../components/ShopCart'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { getDefaultOrder, getClientOrder } from '../../utils'
import { Order } from '../../types'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner/Spinner.styles'
import { Layout } from '../../components/Layout'

export const ShopCartPage = observer(() => {
  const { orders, totalOrders } = useContext(shopStore)
  const [clientOrders, setClientOrders] = useState([] as Partial<Order>[])
  const [defaultOrder, setDefaultOrder] = useState({} as Order)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const { data } = await ApiService.getProducts()

      setDefaultOrder(getDefaultOrder(data))
      setLoading(false)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const updatedClientOrders = orders.map((order) => {
      const updatedDefaultOrder = merge(defaultOrder, order)

      return getClientOrder(pick(updatedDefaultOrder, Object.keys(order)))
    })

    setClientOrders(updatedClientOrders)
  }, [orders, defaultOrder])

  return (
    <>
      <Layout totalOrders={totalOrders}>
        <div>
          {!loading ? (
            <ShopCart orders={clientOrders} linkTo="/order" />
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </Layout>
    </>
  )
})
