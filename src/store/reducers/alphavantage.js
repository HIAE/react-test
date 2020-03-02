import api from "../api"

// Types
export const Types = {
  LOAD_SYMBOLS: 'alphavantage/LOAD_SYMBOLS',
  SELECT_SYMBOL: 'alphavantage/SELECT_SYMBOL',
  LOAD_SERIES_DAILY: 'alphavantage/LOAD_SERIES_DAILY',
}

// Reducer

const INITIAL_STATE = {
  bestMatches: [],
  selectedSymbol: "",
  seriesDaily: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SYMBOLS:
      return { ...state, bestMatches: action.payload };
    case Types.SELECT_SYMBOL:
      return { ...state, selectedSymbol: action.payload };
    case Types.LOAD_SERIES_DAILY:
      return { ...state, seriesDaily: action.payload };
    default:
      return state;
  }
};

// Actions
export const actionCreators = {

  loadSymbols: (keywords) => {
    const params = {
      function: 'SYMBOL_SEARCH',
      keywords
    };
    return dispatch => {
      api.get("/", { params: params })
      .then(res => {
        dispatch({
          type: Types.LOAD_SYMBOLS,
          payload: res.data.bestMatches
        })
      }).catch(err => {
        console.error(`Erro ao carregar SYMBOLS: ${err}`);
      })
    }
  },

  loadSeriesDaily: (symbol) => {
    const params = {
      function: 'TIME_SERIES_DAILY',
      symbol
    };
    return dispatch => {
      api.get("/", { params: params })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: Types.LOAD_SERIES_DAILY,
          payload: res.data
        })
      }).catch(err => {
        console.error(`Erro ao carregar SERIES_DAILY: ${err}`);
      })
    }
  },

  selectSymbol: (symbol) => {
    const txtSymbol = (symbol !== null) ? symbol['1. symbol'] : "";
    return {
      type: Types.SELECT_SYMBOL,
      payload: txtSymbol
    };
  },

};
