import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

// import styles
import styles from "./Home.module.css";

// import components
import TradingView from "../../components/TradingView/TradingView";

// import services
import stockSearch from "../../services/stockAPI";

// import actions
import { setSearchedItemName } from "../../reducers/searchedItem/actions";
import {
  setFetchStarted,
  setFetchSuccess,
  setFetchError,
} from "../../reducers/searchData/actions";

export default function FormPropsTextFields() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);

    // fetch data from api
    const { data } = await stockSearch.get(
      `query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=QT0CFISDES7BDZGN`
    );

    // transform to array
    const response = data.bestMatches;

    setSearchData(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleItemClick = (symbol) => async () => {
    // // dispatch the action to save the name
    dispatch(setSearchedItemName(symbol));

    // dispatch the action to save the data related to the symbol
    try {
      dispatch(setFetchStarted());
      const { data } = await stockSearch.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`
      );

      const response = data["Time Series (Daily)"];
      return dispatch(setFetchSuccess(response));
    } catch (error) {
      return dispatch(setFetchError(error.message));
    }
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
            <Link
              to={`${item["1. symbol"]}/details`}
              key={item["1. symbol"]}
              className={styles.result_item}
              onClick={handleItemClick(item["1. symbol"])}
            >
              <span className={styles.result_symbol}>{item["1. symbol"]}</span>
              <span className={styles.result_name}>{item["2. name"]}</span>
            </Link>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
}
