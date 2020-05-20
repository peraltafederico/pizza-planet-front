import { AxiosResponse } from 'axios'
import axios from './api'
import { Product } from '../types'

export class ApiService {
  static async getProducts(): Promise<AxiosResponse<Product[]>> {
    return axios.get('/products')
  }

  static async getProductsByIds(ids: string[]): Promise<AxiosResponse<Product[]>> {
    console.log(ids)
    return axios.get(`/products?list=${ids.join(',')}`)
  }
}
