import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from './screens/Details';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'

const DOM_NODE = document.getElementById('root');

const ROUTER_RENDER =
    (<Provider store={store}>
        <Router>
            <Route exact path='/' component={App} />
            <Route path="/:symbol/details" component={Details} />
        </Router>
    </Provider>)

ReactDOM.render(ROUTER_RENDER, DOM_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
