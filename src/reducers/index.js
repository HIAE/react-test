import { combineReducers } from "redux";

import searchedItem from "./searchedItem/reducer";

const rootReducer = combineReducers({ stockSymbol: searchedItem });

export default rootReducer;
