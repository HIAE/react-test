import api from "../api"

// Types
export const Types = {
  LOAD_SYMBOLS: 'alphavantage/LOAD_SYMBOLS',
}

// Reducer

const INITIAL_STATE = {
  bestMatches: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SYMBOLS:
      return { ...state, bestMatches: action.payload };
    default:
      return state;
  }
};

// Actions
export const actionCreators = {

  loadSymbols: (params) => {
    const newParams = {
      function: 'SYMBOL_SEARCH',
      keywords: 'microsoft'
    }; 
    return dispatch => {
      api.get("/", { params: newParams })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: Types.LOAD_SYMBOLS,
          payload: res.data.bestMatches
        })
      }).catch(err => {
        console.error(`Erro ao carregar indicadores: ${err}`);
      })
    }
  },

};
