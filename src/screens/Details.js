import React, { useEffect, useState } from 'react'

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

import BackBtn from '../components/BackButton'

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
                        <>  
                            <Grid xs={12} sm={10} item>
                                <h1>
                                    {daily["Meta Data"]["2. Symbol"]}
                                </h1>
                                <p>
                                    <b>Last Refreshed: </b>
                                    {daily["Meta Data"]["3. Last Refreshed"].replace(/-/g, '/')}
                                </p>
                                <BackBtn />
                            </Grid>
                            <Grid xs={12} sm={11} item>
                                <Chart daily={daily["Time Series (Daily)"]} />
                            </Grid>
                        </>}
            </GridContainerDetails>
        </Container>
    )
}

export default Details