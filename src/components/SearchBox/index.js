import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import {getStocksDataRequest} from 'store/modules/stocks/actions'

import { 
  Container,
  Input,
  DisplayBox,
  DisplayItem,
} from './styles';

export default function SearchBox() {

  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');
  const data = useSelector(state => state.stocks.searchData);

  useEffect(() => {
    if (inputValue !== '') dispatch(getStocksDataRequest(inputValue));
  }, [inputValue])
  
  return (
    <Container>
      <Input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <DisplayBox>
        {data && data.map(item =>
          <Link to={{
            pathname: `/${item.symbol}/details`,
            state: {selectedItem: item}
          }} key={item.symbol + item.name}>
            <DisplayItem>
              <p>{item.symbol}</p>
              <p>{item.name}</p>
            </DisplayItem>  
          </Link>
        )}
      </DisplayBox>
    </Container>
  );
}
