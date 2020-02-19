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
          newObj[key.replace(/^\d.\s/g,'')] = data[item][key];
        })
        newData.push(newObj);
        newObj = {};
      })
    yield put(getStocksDataSuccess(newData))
  }  else {
    yield put(getStocksDataFailure())
  }
}

function* getStockDataDaily({symbol}) {
  const response = yield call(api.get, `/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
  if (response.data['Meta Data']) {

  // yield put(getStockDailySuccess())
  } else {
    yield put(getStockDailyFailure())
  }
}

export default all([
  takeLatest('@stocks/GET_DATA_REQUEST', getStocksData),
  takeLatest('@stocks/GET_DATA_DAILY_REQUEST', getStockDataDaily),
])
