import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  LineChart,
  XAxis,
  YAxis, 
  ReferenceArea, 
  ReferenceDot, 
  ReferenceLine, 
  Brush,
  CartesianGrid, 
  Legend, 
  Tooltip, 
  Line,
  Customized,
} from 'recharts';

import {getStockDailyRequest} from 'store/modules/stocks/actions'

import { Container, Header } from './styles';


export default function Details({history}) {

  const dispatch = useDispatch();
  const pageHistory = useHistory();

  const [item, setItem] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [filterYear, setFilterYear] = useState(2020);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const stockDaily = useSelector(state => state.stocks.stockDaily);

  useEffect(() => {
    setItem(history.location.state.selectedItem);
    dispatch(getStockDailyRequest(history.location.state.selectedItem.symbol));
  }, [])

  useEffect(() => {
    if (!!stockDaily) setGraphData(stockDaily)
  }, [stockDaily])

  useEffect(() => {
    let filteredData = null;
    if (!!stockDaily){
      filteredData = stockDaily.filter(stock => {
        if ((+filterYear) !== stock.year && filterYear !== '') return false;
        if (fromValue !== "" && (+fromValue) > stock.month ) return false;
        if ( toValue !== "" && (+toValue) < stock.month ) return false;
        return true;
      });
    }
    setGraphData(filteredData);
  }, [filterYear, fromValue, toValue])
  
  return (
    <Container>
    <button onClick={() => pageHistory.push('/')}>GO BACK</button>
    {item && 
      <Header>
        <p>Symbol: {item.symbol}</p>
        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
      </Header>
    }
    <div>
      <input type="number" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}/>
      <input type="number" value={fromValue} onChange={(e) => setFromValue(e.target.value)}/>
      <input type="number" value={toValue} onChange={(e) => setToValue(e.target.value)} />
      {!!graphData && graphData.length > 0 ?
        <LineChart width={730} height={250} data={graphData}
          margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis interval="preserveStartEnd" dataKey="name" />
          <YAxis type="number" domain={['dataMin', 'dataMax']} interval="preserveStartEnd"/>
          <Tooltip />
          <Legend />
          <Line type="natural" dataKey="open" stroke="#8884d8" />
          <Line type="natural" dataKey="close" stroke="#82ca9d" />
          <Line type="natural" dataKey="low" stroke="#F01" />
          <Line type="natural" dataKey="high" stroke="#C1C" />
        </LineChart>
      : <p>No data available</p>}
    </div>
    </Container>
  );
}
