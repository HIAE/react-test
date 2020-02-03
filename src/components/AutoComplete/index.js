import React, { useState, useEffect, useRef } from 'react'

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
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteValue, setAutoCompleteValue] = useState('')
    const isFirstRun = useRef(true)

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return
        }
        
        const makeGetItems = async () => {
            setIsLoading(true)
            try {
                const response = await getSymbolsAutoComplete(autoCompleteValue)

                if(response.Note) {
                    setError(response.Note)
                    setIsLoading(false)
                } else {
                    setItems(response.bestMatches)
                    setIsLoading(false)
                }
            } catch (error) {
                setError('Something unexpected happened, try again later!')
                setIsLoading(false)
                console.error(error)
            }
        }

        if (autoCompleteValue !== '') {
            makeGetItems()
        } else {
            setItems([])
        }
    }, [autoCompleteValue])

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return
        } else if(error) {
            onError(error, () => {
                setError(null)
            })
        }
    }, [error, onError])

    return (
        <ContainerAutoComplete>
            <TextField
                id="symbol-autocomplete-input"
                label="Symbol or name"
                autoComplete="false"
                type="text"
                variant="outlined"
                placeholder="Type a symbol or name..."
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