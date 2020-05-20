import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { REACT_APP_PIZZA_PLANET_BACK_BASE_URL } = process.env

const instance = axios.create({
  baseURL: REACT_APP_PIZZA_PLANET_BACK_BASE_URL,
})

export default instance
