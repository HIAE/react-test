import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api, {API_KEY} from 'services/api'

import { 
  Container,
  Input,
  DisplayBox,
  DisplayItem,
} from './styles';

export default function SearchBox() {

  /** ARRAY OF: 
    1. symbol: "BA"
    2. name: "The Boeing Company"
    3. type: "Equity"
    4. region: "United States"
    5. marketOpen: "09:30"
    6. marketClose: "16:00"
    7. timezone: "UTC-05"
    8. currency: "USD"
    9. matchScore: "1.0000"
   */

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=${API_KEY}`)
    .then(res => {
      const data = res.data.bestMatches;
      const newData = [];
      let newObj = {};
      Object.keys(data).map(item => { 
        Object.keys(data[item]).map(key => {
          newObj[key.replace(/^\d.\s/g,'')] = data[item][key];
        })
        newData.push(newObj);
        newObj = {};
      })
      setData(newData)
    })
    .catch(err => console.log(err))
  }, [inputValue])
  
  
  return (
    <Container>
      <Input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <DisplayBox>
        {data && data.map(item =>
          <Link to={`/${item.symbol}/details`} key={item.symbol + item.name}>
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
