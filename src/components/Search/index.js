import React, { useState, useCallback } from 'react';
import Input from '@material-ui/core/Input';
import { ajustKeys } from '../../utils/ObjectBuilder';

import CompanyList from '../List';

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
      <Input
        placeholder="Search by name or symbol"
        inputProps={{ 'aria-label': 'description' }}
        data-testid="form-input"
        type="text"
        onChange={e => setNewCompany(e.target.value)}
        onBlur={handleSubmit}
      />
      {companies && <CompanyList list={companies} />}
    </>
  );
}
