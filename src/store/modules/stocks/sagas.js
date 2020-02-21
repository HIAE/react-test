import { all, takeLatest, call, put } from 'redux-saga/effects'

import api, {API_KEY} from 'services/api';
import {
  getStocksDataSuccess,
  getStocksDataFailure,
  getStockDailySuccess,
  getStockDailyFailure,
} from './actions'

function* getStocksData({searchText}) {
  const response = yield call(api.get, `/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=${API_KEY}`)

  if (response.data.bestMatches) {
    const data = response.data.bestMatches;
      const newData = [];
      let newObj = {};
      Object.keys(data).map(item => { 
        Object.keys(data[item]).map(key => {
          return newObj[key.replace(/^\d.\s/g,'')] = data[item][key];
        })
        newData.push(newObj);
        return newObj = {};
      })
    yield put(getStocksDataSuccess(newData))
  }  else {
    yield put(getStocksDataFailure())
  }
}

function* getStockDataDaily({symbol}) {
  const response = yield call(api.get, `/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
  if (response.data['Meta Data']) {
    let tempGraphArray = [];
    Object.keys(response.data["Time Series (Daily)"]).map(key => {
      let stock = {};
      stock.name = `${(new Date(key)).getMonth() + 1}-${(new Date(key)).getDate()}`;
      stock.day = new Date(key).getDate();
      stock.month = new Date(key).getMonth() + 1;
      stock.year = new Date(key).getFullYear();
      stock.open = response.data["Time Series (Daily)"][key]["1. open"];
      stock.low = response.data["Time Series (Daily)"][key]["3. low"];
      stock.high = response.data["Time Series (Daily)"][key]["2. high"];
      stock.close = response.data["Time Series (Daily)"][key]["4. close"];
      return tempGraphArray.push(stock);
    })

    yield put(getStockDailySuccess(tempGraphArray.reverse()))
  } else {
    yield put(getStockDailyFailure())
  }
}

export default all([
  takeLatest('@stocks/GET_DATA_REQUEST', getStocksData),
  takeLatest('@stocks/GET_DATA_DAILY_REQUEST', getStockDataDaily),
])
