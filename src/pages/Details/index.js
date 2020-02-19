import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getStockDailyRequest} from 'store/modules/stocks/actions'

import { Container } from './styles';


export default function Details({history}) {

  const dispatch = useDispatch();

  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(history.location.state.selectedItem);
    dispatch(getStockDailyRequest(history.location.state.selectedItem.symbol));
  }, [])
  
  return (
    <div>
    {item && 
      <>
        <p>Symbol: {item.symbol}</p>
        <p>Name: {item.name}</p>
        <p>Type: {item.type}</p>
      </>
    }
    </div>
  );
}
