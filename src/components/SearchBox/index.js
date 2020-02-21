import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import {getStocksDataRequest} from 'store/modules/stocks/actions'
import Text from 'components/Text'

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
  }, [inputValue, dispatch])
  
  return (
    <Container>
      <Input
        noMargin
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {data && inputValue !== '' && <DisplayBox>
        {data.map(item =>
          <Link to={{
            pathname: `/${item.symbol}/details`,
            state: {selectedItem: item}
          }} key={item.symbol + item.name}>
            <DisplayItem>
              <Text type="Content">{item.symbol}</Text>
              <Text type="Content">{item.name}</Text>
            </DisplayItem>  
          </Link>
        )}
      </DisplayBox>
      }
    </Container>
  );
}
