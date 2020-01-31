import React, { useEffect, useState } from 'react'

import {
    Container,
    Box,
    CircularProgress,
    Grid
} from '@material-ui/core'

import {
    GridContainerDetails
} from '../assets/styles/details'

import {
    getDaily
} from '../services/requests'

function Details(props) {

    const { match: { params: { symbol } } } = props
    const [isLoading, setIsLoading] = useState(true)
    const [daily, setDaily] = useState(null)

    useEffect(() => {
        const makeGetDaily = async() => {
            const response = await getDaily(symbol)
            setDaily(response)
            setIsLoading(false)
        }

        makeGetDaily()
    }, [symbol])

    return(
        <Container>
            <GridContainerDetails 
                alignItems="center"
                justify="center"
                container
            >
                {isLoading && 
                    <CircularProgress size='6rem' color={'primary'} />}

                {!isLoading &&
                    daily != null &&
                        <Grid 
                            xs={12}
                            item
                        >
                            <h1>
                                {symbol}
                            </h1>
                        </Grid>}
            </GridContainerDetails>
        </Container>
    )
}

export default Details