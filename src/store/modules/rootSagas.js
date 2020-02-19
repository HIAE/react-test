import { all } from 'redux-saga/effects'

import stocks from './stocks/sagas'

export default function* rootSaga() {
  return yield all([
    stocks,
  ])
}
