import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = createSagaMiddleware()

let enhancer = null
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        )
      : applyMiddleware(sagaMiddleware)
} else {
  enhancer = applyMiddleware(sagaMiddleware)
}

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
