import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// App Routes
import Routes from './Routes';

class App extends Component {
  render() {
    // TODO: usar process.env.NODE_ENV para resolver a basename
    const basename = '/';

    return (
      <Fragment>
        <BrowserRouter basename={basename}>
          <Routes />        
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
