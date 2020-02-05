import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'

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
    useDispatch 
} from 'react-redux'

import {
    SET_MODAL
} from '../../redux/actions/actionTypes'

function AutoComplete() {

    const dispatch = useDispatch()
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [autoCompleteValue, setAutoCompleteValue] = useState('')
    const isFirstRun = useRef(true)


    const sendError = useCallback(message => {
        dispatch({ 
            type: SET_MODAL,
            modal: {
              open: true,
              handleClose: () => {
                dispatch({
                  type: SET_MODAL,
                  modal: {
                    open: false
                  }
                })
              },
              title: 'Ops...',
              description: message,
              txtBtn: 'Ok!'
            }
        })
    }, [dispatch])

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
                    sendError(response.Note)
                    setIsLoading(false)
                } else {
                    setItems(response.bestMatches)
                    setIsLoading(false)
                }
            } catch (error) {
                sendError('Something unexpected happened, try again later!')
                setIsLoading(false)
                console.error(error)
            }
        }

        if (autoCompleteValue !== '') {
            makeGetItems()
        } else {
            setItems([])
        }
    }, [autoCompleteValue, sendError])

    const useItems = useMemo(() => {
        return items.length > 0 && 
            <Items items={items} />
    }, [items])

    const useLoading = useMemo(() => {
        return isLoading && 
            <CircularProgress size='2rem' color={'primary'} /> 
    }, [isLoading])


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
                        {useLoading}
                    </InputAdornment>
                }}
                fullWidth
            />
            {useItems}
        </ContainerAutoComplete>
    )
}

export default AutoComplete