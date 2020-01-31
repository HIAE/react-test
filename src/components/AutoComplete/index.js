import React, { useState, useEffect } from 'react'

import { 
    TextField,
    InputAdornment,
    CircularProgress
} from '@material-ui/core'

import {
    getSymbolsAutoComplete
} from '../../services/requests'

import {
    ContainerAutoComplete,
} from '../../assets/styles/autocomplete'

import Items from './Items'

import {
    grayPri
} from '../../assets/styles/colors'

function AutoComplete() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteValue, setAutoCompleteValue] = useState('')

    useEffect(() => {
        const getItems = async () => {
            setIsLoading(true)
            const response = await getSymbolsAutoComplete(autoCompleteValue)
            setItems(response.bestMatches)
            setIsLoading(false)
        }

        if (autoCompleteValue !== '') {
            getItems()
        } else {
            setItems([])
        }
    }, [autoCompleteValue])

    return (
        <ContainerAutoComplete>
            <TextField
                id="symbol-autocomplete-input"
                label="Symbol"
                autoComplete="false"
                type="text"
                variant="outlined"
                placeholder="Type a symbol..."
                onChange={(e) => setAutoCompleteValue(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        { isLoading && <CircularProgress size='2rem' color={grayPri} /> }
                    </InputAdornment>
                }}
                fullWidth
            />
            {items.length > 0 && 
                <Items items={items} />}
        </ContainerAutoComplete>
    )
}

export default AutoComplete