import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import GlobalStyle from 'styles/GlobalStyle'
import Routes from 'routes'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
