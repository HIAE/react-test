import axios from 'axios'

import {
    GET_SYMBOLS_AUTOCOMPLETE
} from './constants'

const getSymbolsAutoComplete = symbol => {
    return new Promise ((resolve, reject)=> { 
        axios.get(GET_SYMBOLS_AUTOCOMPLETE(symbol))
        .then((response) => {
            console.log(response.data)
            resolve(response.data)
        })
        .catch((error) => {
            reject(error)
            console.log(error);
        })
    })
}

export {
    getSymbolsAutoComplete
}