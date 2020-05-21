import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { merge, pick } from 'lodash'
import Axios from 'axios'
import shopStore from '../../store/shopStore'
import { ShopCart } from '../../components/ShopCart'
import { getDefaultOrder, getClientOrder } from '../../utils'
import { Order } from '../../types'
import { ApiService } from '../../services/apiService'
import { Spinner } from '../../components/Spinner/Spinner.styles'
import { Layout } from '../../components/Layout'
import * as Styled from './ShopCartPage.styles'
import 'mobx-react-lite/batchingForReactDom'

export const ShopCartPage = observer(() => {
  const { orders, totalOrders } = useContext(shopStore)
  const [clientOrders, setClientOrders] = useState([] as Partial<Order>[])
  const [defaultOrder, setDefaultOrder] = useState({} as Order)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const source = Axios.CancelToken.source()

    const fetchProducts = async (): Promise<void> => {
      const { data } = await ApiService.getProducts(source.token)

      setDefaultOrder(getDefaultOrder(data))
      setLoading(false)
    }

    fetchProducts()

    return (): void => source.cancel()
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
        <Styled.ShopCartContainer>
          {!loading ? (
            <ShopCart orders={clientOrders} linkTo="/order" />
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </Styled.ShopCartContainer>
      </Layout>
    </>
  )
})
