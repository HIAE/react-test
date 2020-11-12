import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { actionCreators } from '../store/reducers/alphavantage';

const Details = (props) => {

  // componentDidMount
  useEffect( () => {
    props.loadSeriesDaily(props.selectedSymbol);
  }, [] );

  const getChartData = () => {
    const series = props.seriesDaily["Time Series (Daily)"];
    var data = [];

    for (const key in series) {
      if (series.hasOwnProperty(key)) {
        const element = series[key];
        
        data.push({ name: key, close: element['4. close'] });
        // console.log(element);
      }
    }

    return data;
  }

  return props.selectedSymbol ? (
    <div >
      <div>Selecionado: {props.selectedSymbol}</div>

      <LineChart
        width={600}
        height={300}
        data={getChartData()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>

      <Button variant="contained" color="primary" href="home">
        Voltar
      </Button>
    </div>
  ) : (
    <Redirect to="home" />
  );
}

const mapStateToProps = state => state.alphavantage;
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
