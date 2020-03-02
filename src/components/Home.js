import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { actionCreators } from '../store/reducers/alphavantage';

const Home = (props) => {

  // componentDidMount
  useEffect( () => {
    props.loadSymbols();
  }, [] );

  const inputChange = (event, value) => {
    console.log('changeValue', value);
    // if (value.length > 0) {
      // props.loadSymbols(value);
    // }
  };

  const inputSelect = (event, value) => {
    console.log('selectValue', value);
  };

  return props.bestMatches ? (
    <div className="content-wrapper">
      <Autocomplete
        id="imputSymbol"
        options={props.bestMatches}
        getOptionLabel={option => option['1. symbol']}
        style={{ width: 300 }}
        renderInput={params => <TextField {...params} label="Symbol" variant="outlined" />}
        onInputChange={inputChange}
        onChange={inputSelect}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = state => state.alphavantage;
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
