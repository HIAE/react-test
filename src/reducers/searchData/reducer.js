import { FETCH_STARTED, FETCH_SUCCESS, FETCH_ERROR } from "./constants";

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };

    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };

    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };

    default:
      return state;
  }
};
