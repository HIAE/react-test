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

function AutoComplete(props) {

    const { onError } = props
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteValue, setAutoCompleteValue] = useState('')

    useEffect(() => {
        const makeGetItems = async () => {
            setIsLoading(true)
            try {
                const response = await getSymbolsAutoComplete(autoCompleteValue)

                if(response.Note) {
                    onError(response.Note)
                    setIsLoading(false)
                } else {
                    setItems(response.bestMatches)
                    setIsLoading(false)
                }
            } catch (error) {
                onError('Something unexpected happened, try again later!')
                setIsLoading(false)
                console.error(error)
            }
        }

        if (autoCompleteValue !== '') {
            makeGetItems()
        } else {
            setItems([])
        }
    }, [autoCompleteValue, onError])

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
                        { isLoading && <CircularProgress size='2rem' color={'primary'} /> }
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