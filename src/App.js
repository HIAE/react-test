import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <p>Faça algo bem legal aqui :D .</p>
      <Button variant="contained" color="primary">
        Material Button
      </Button>
      <Home></Home>
      <Details></Details>
    </div>
  );
}

export default App;
