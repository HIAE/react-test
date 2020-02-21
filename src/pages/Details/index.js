import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

import { Container } from './styles';


export default function Details({history}) {

  const dispatch = useDispatch();

  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(history.location.state.selectedItem);
    dispatch(getStockDailyRequest(history.location.state.selectedItem.symbol));
  }, [])

  const data = [
    {
      "name": "20-02-2020",
      "open": 86,
      "low": 181,
      "high": 187,
      "close": 182,
    },
    {
      "name": "21-02-2020",
      "open": 182,
      "low": 179,
      "high": 185,
      "close": 184,
    },
    {
      "name": "22-02-2020",
      "open": 14,
      "low": 183,
      "high": 197,
      "close": 191,
    },
  ]
  
  return (
    <Container>
    {item && 
      <>
        <p>Symbol: {item.symbol}</p>
        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
      </>
    }
    <br/>
    <br/>
    <br/>
    <div style={{padding: '30px'}}>
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#8884d8" />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
        <Line type="monotone" dataKey="low" stroke="#F01" />
        <Line type="monotone" dataKey="high" stroke="#C1C" />
      </LineChart>
    </div>
    </Container>
  );
}
