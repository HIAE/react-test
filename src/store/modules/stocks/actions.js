export function getStocksDataRequest(searchText) {
  return {
    type: '@stocks/GET_DATA_REQUEST',
    searchText,

  }
}

export function getStocksDataSuccess(searchResult) {
  return {
    type: '@stocks/GET_DATA_SUCCESS',
    searchResult,
  }
}

export function getStocksDataFailure() {
  return {
    type: '@stocks/GET_DATA_FAILURE',
  }
}

export function getStockDailyRequest(symbol) {
  return {
    type: '@stocks/GET_DATA_DAILY_REQUEST',
    symbol,
  }
}

export function getStockDailySuccess() {
  return {
    type: '@stocks/GET_DATA_DAILY_SUCCESS',
  }
}

export function getStockDailyFailure() {
  return {
    type: '@stocks/GET_DATA_DAILY_FAILURE',
  }
}