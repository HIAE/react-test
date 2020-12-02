import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

// import styles
import styles from './Home.module.css';

// import components
import TradingView from '../../components/TradingView/TradingView';

// import services
import stockSearch from '../../services/stockAPI';

export default function FormPropsTextFields() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

    // fetch data from api
    setLoading(true);
    const { data } = await stockSearch.get(
      `query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=QT0CFISDES7BDZGN`
    );

    // transform to array
    const response = data.bestMatches;

    setSearchData(response);
    setLoading(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TradingView />

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      >
        <div>
          <TextField
            onChange={handleInputChange}
            value={searchTerm}
            id="standard-search"
            label="Pesquisar aqui"
            type="search"
            className={styles.input_field}
          />
        </div>
      </form>

      {searchData && searchData.length ? (
        <ul className={styles.results}>
          {searchData.map((item) => (
            <li key={item['1. symbol']} className={styles.result_item}>
              <span className={styles.result_symbol}>{item['1. symbol']}</span>
              <span className={styles.result_name}>{item['2. name']}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
}
