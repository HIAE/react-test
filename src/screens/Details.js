import React, { useEffect, useState, useCallback, useMemo } from 'react'

import {
    Container,
    CircularProgress,
    Grid
} from '@material-ui/core'

import {
    GridContainerDetails
} from '../assets/styles/details'

import {
    getDaily
} from '../services/requests'

import Chart from '../components/ChartDaily'

import BackBtn from '../components/BackPageBtn'

import { useHistory } from "react-router-dom"

import ModalMessage from '../components/ModalMessage'

import {
    SET_MODAL
} from '../redux/actions/actionTypes'

import { 
    useDispatch 
} from 'react-redux'

function Details(props) {

    const dispatch = useDispatch()
    const { match: { params: { symbol } } } = props
    const [isLoading, setIsLoading] = useState(true)
    const [daily, setDaily] = useState(null)
    const history = useHistory()


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
                    history.push('/')
                },
                title: 'Ops...',
                description: message,
                txtBtn: 'Ok!'
            }
        })
    }, [dispatch, history])

    useEffect(() => {
        document.title = `${symbol} - Details`
        const makeGetDaily = async() => {
            try {
                const response = await getDaily(symbol)

                if (response.Note || response["Error Message"]) {
                    sendError(response.Note || response["Error Message"])
                    setIsLoading(false)
                } else {
                    setDaily(response)
                    setIsLoading(false)
                }
            } catch (error) {
                sendError('Something unexpected happened, try again later!')
                setIsLoading(false)
                console.error(error)
            }
        }

        makeGetDaily()
    }, [symbol, sendError])

    const useLoading = useMemo(() => {
        return isLoading && 
        <CircularProgress size='5rem' color={'primary'} />
    }, [isLoading])

    const useDaily = useMemo(() => {
        return daily != null &&
        <>  
            <Grid xs={12} item>
                <h1>
                    {daily["Meta Data"]["2. Symbol"]}
                </h1>
                <p>
                    <b>Last Refreshed: </b>
                    {daily["Meta Data"]["3. Last Refreshed"].replace(/-/g, '/')}
                </p>
                <BackBtn />
            </Grid>
            <Grid xs={12} item>
                <Chart daily={daily["Time Series (Daily)"]} />
            </Grid>
        </>
    }, [daily])

    return(
        <Container>
            <GridContainerDetails 
                alignItems="center"
                justify="center"
                container
            >
                {useLoading}
                {useDaily}
            </GridContainerDetails>
            <ModalMessage />
        </Container>
    )
}

export default Details