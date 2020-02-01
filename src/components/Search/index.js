import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lightBlue } from '@material-ui/core/colors';

import api from '../../services/api';

export default function Search() {
  const [symbols, setSymbols] = useState([]);
  const [symbol, setSymbol] = useState([]);

  function handleAdd() {
    setSymbols([...symbols, { title: symbol }]);
  }

  useEffect(() => {
    async function getSymbol() {
      const response = await api.get(
        `query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${process.env.API_KEY}`
      );
      setSymbols([response.data.bestMatches]);
      console.log(response.data.bestMatches);
    }
    getSymbol();
  }, [symbol]);

  return (
    <>
      <Autocomplete
        id="combo-box-companies-and-symbols"
        options={symbols}
        freeSolo
        style={{ width: 300 }}
        color={lightBlue[500]}
        onChange={handleAdd}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            vaule={symbol}
            onChange={e => setSymbol(e.target.value)}
          />
        )}
      />
    </>
  );
}
