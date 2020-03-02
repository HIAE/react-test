import axios from 'axios';

// TODO: Use '.env'
const baseURL = 'https://www.alphavantage.co/query';
const apikey = 'XRB9MA5QCL87X6U1';

const api = axios.create({ baseURL: baseURL });

// Do something with request config
api.interceptors.request.use(async (config) => {
  // Inject apikey
  config.params['apikey'] = apikey;
  return config;
});

api.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  	// Do something with response error
  return Promise.reject(error);
});

export default api;
