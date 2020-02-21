const INITIAL_STATE = {
  searchData: null,
  stockDaily: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@stocks/GET_DATA_SUCCESS':
      return {
        ...state,
        searchData: action.searchResult,
      }
      case '@stocks/GET_DATA_FAILURE':
      return {
        ...state,
      }
      case '@stocks/GET_DATA_DAILY_SUCCESS':
      return {
        ...state,
        stockDaily: action.payload,
      }
      case '@stocks/GET_DATA_DAILY_FAILURE':
      return {
        ...state,
      }
    default:
      return state
  }
}
