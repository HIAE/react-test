import axios from 'axios';

export const API_KEY = '2H940AO91H0V3EKT';

export default axios.create({
  baseURL: 'https://www.alphavantage.co'
})