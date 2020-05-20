import { AxiosResponse } from 'axios'
import axios from './api'
import { Product, ClientData } from '../types'

export class ApiService {
  static async getProducts(): Promise<AxiosResponse<Product[]>> {
    return axios.get('/products')
  }

  static async getProductsByIds(ids: string[]): Promise<AxiosResponse<Product[]>> {
    return axios.get(`/products?list=${ids.join(',')}`)
  }

  static async sendOrder(
    data: ClientData & { products: string[] }
  ): Promise<AxiosResponse<Product[]>> {
    return axios.post('/orders', data)
  }
}
