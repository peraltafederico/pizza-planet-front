import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pizza-planet-back.herokuapp.com'
})

export default instance
