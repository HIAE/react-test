import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { lightBlue } from '@material-ui/core/colors';
import { ajustKeys } from '../../utils/ObjectBuilder';

import api from '../../services/api';

export default function Search() {
  const [company, setNewCompany] = useState('');
  const [companies, setCompanies] = useState([]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      const { data } = await api.get(
        `query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${process.env.API_KEY}`
      );

      setNewCompany('');
      setCompanies(ajustKeys(data.bestMatches));
    },
    [company]
  );

  return (
    <>
      <Autocomplete
        id="combo-box-companies-and-symbols"
        options={companies}
        freeSolo
        style={{ width: 300 }}
        color={lightBlue[500]}
        onBlur={handleSubmit}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
            onChange={e => setNewCompany(e.target.value)}
          />
        )}
      />
    </>
  );
}
