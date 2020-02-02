const BASE_URL = 'https://www.alphavantage.co'
const API_KEY = 'ARC0GWHHE94HM4ZE'

const GET_SYMBOLS_AUTOCOMPLETE = symbol => {
    return `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`
}

const GET_DAILY = symbol => {
    return `${BASE_URL}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`
}

export {
    GET_SYMBOLS_AUTOCOMPLETE,
    GET_DAILY
}