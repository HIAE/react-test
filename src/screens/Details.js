import React, { useEffect, useState } from 'react'

import {
    Container,
    Box,
    CircularProgress
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
                    <Box>

                    </Box>}
            </GridContainerDetails>
        </Container>
    )
}

export default Details