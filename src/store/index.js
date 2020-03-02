import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default compose(applyMiddleware(thunk))(createStore)(reducers);

// export default createStore(reducers);
