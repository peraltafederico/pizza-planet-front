import { AxiosResponse, CancelToken } from 'axios'
import axios from './api'
import { Product, ClientData } from '../types'

export class ApiService {
  static async getProducts(token: CancelToken): Promise<AxiosResponse<Product[]>> {
    return axios.get('/products', { cancelToken: token })
  }

  static async getProductsByIds(
    ids: string[],
    token: CancelToken
  ): Promise<AxiosResponse<Product[]>> {
    return axios.get(`/products?list=${ids.join(',')}`)
  }

  static async sendOrder(
    data: ClientData & {
      products: { id: number; amount: number; buyingPrice: number }[]
    },
    token: CancelToken
  ): Promise<AxiosResponse<Product[]>> {
    return axios.post('/orders', data)
  }
}
