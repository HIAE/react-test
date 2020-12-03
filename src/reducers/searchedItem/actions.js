import { SET_SEARCH_ITEM_NAME } from "./constants";

export const setSearchedItemName = (name) => ({
  type: SET_SEARCH_ITEM_NAME,
  payload: name,
});
