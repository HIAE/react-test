import React, { useState, useCallback } from 'react';
import { ajustKeys } from '../../utils/ObjectBuilder';

import CompanyList from '../List';

import api from '../../services/api';

import SearchComponent from './Search.styled';

export default function Search() {
  const [company, setNewCompany] = useState('');
  const [companies, setCompanies] = useState([]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      const { data } = await api.get(
        `query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${process.env.API_KEY}`
      );

      setCompanies(ajustKeys(data.bestMatches));
    },
    [company]
  );

  return (
    <>
      <SearchComponent
        placeholder="Search by name or symbol"
        type="text"
        onChange={e => setNewCompany(e.target.value)}
        onInput={company && handleSubmit}
      />
      {companies && <CompanyList list={companies} />}
    </>
  );
}
