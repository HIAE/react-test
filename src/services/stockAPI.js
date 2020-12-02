import axios from 'axios';

const stockSearch = axios.create({
  baseURL: 'https://www.alphavantage.co/',
});

export default stockSearch;
