import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";

const appliedMiddlewares = applyMiddleware(thunk);

export const store = createStore(
  reducers,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(appliedMiddlewares)
    : appliedMiddlewares
);
