import { all, takeLatest, call, put } from 'redux-saga/effects'

import {
  getDataSuccess,
  getDataFailure,
} from './actions'

function* getData() {
  try {
    // const response = yield call()
    yield put(getDataSuccess('response comes here'))
  } catch (err) {
    yield put(getDataFailure())
  }
}

export default all([takeLatest('@example/GET_DATA_REQUEST', getData)])
