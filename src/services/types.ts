export interface BestMatches {
  "1. symbol": string,
  "2. name": string,
  "3. type": string,
  "4. region": string,
  "5. marketOpen": string,
  "6. marketClose": string,
  "7. timezone": string,
  "8. currency": string,
  "9. matchScore": string
}

export interface AlphaVantageGetSearchData {
  bestMatches: BestMatches[]
}

export interface MetaData {
  "1. Information": string
  "2. Symbol": string
  "3. Last Refreshed": string
  "4. Output Size": string
  "5. Time Zone": string
}

export interface TimeSeriesDaily {
  [index: string]: {
    "2. high": string
    "1. open": string
    "3. low": string
    "4. close": string
    "5. adjusted close": string
    "6. volume": string
    "7. dividend amount": string
    "8. split coefficient": string
  }
}

export interface TimeSeriesDailyAdjustedInterface {
  "Meta Data": MetaData
  "Time Series (Daily)": TimeSeriesDaily
}