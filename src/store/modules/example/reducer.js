const INITIAL_STATE = {
  data: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@example/GET_DATA_SUCCESS':
      return {
        ...state,
      }
      case '@example/GET_DATA_FAILURE':
      return {
        ...state,
      }
    default:
      return state
  }
}
