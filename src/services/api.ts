import axios from 'axios'

export const alphavantageApi = axios.create({
  baseURL: 'https://www.alphavantage.co/'
})
