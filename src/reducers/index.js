import { combineReducers } from "redux";

// import reducers
import searchedItem from "./searchedItem/reducer";
import searchData from "./searchData/reducer";

const rootReducer = combineReducers({
  stockSymbol: searchedItem,
  results: searchData,
});

export default rootReducer;
