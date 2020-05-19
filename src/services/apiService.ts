import { AxiosResponse } from 'axios'
import axios from './api'
import { Product } from '../types'

export class ApiService {
  static async getProducts(): Promise<AxiosResponse<Product[]>> {
    return axios.get('/products')
  }
}
