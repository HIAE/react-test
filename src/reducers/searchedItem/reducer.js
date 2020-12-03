import { SET_SEARCH_ITEM_NAME } from "./constants";

const INITIAL_STATE = {
  name: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_ITEM_NAME:
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
