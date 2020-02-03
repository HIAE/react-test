import React, { useEffect, useState, useRef } from 'react'

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

function Details(props) {

    const { match: { params: { symbol } } } = props
    const [isLoading, setIsLoading] = useState(true)
    const [daily, setDaily] = useState(null)
    const [modalInfo, setModalInfo] = useState({
        open: false,
    })
    const history = useHistory()
    const isFirstRun = useRef(true)

    useEffect(() => {
        document.title = `${symbol} - Details`
        const makeGetDaily = async() => {

            try {
                const response = await getDaily(symbol)

                if (response.Note || response["Error Message"]) {
                    makeSetModalInfo(response.Note || response["Error Message"])
                    setIsLoading(false)
                } else {
                    setDaily(response)
                    setIsLoading(false)
                }
            } catch (error) {
                makeSetModalInfo('Something unexpected happened, try again later!')
                setIsLoading(false)
                console.error(error)
            }
        }

        const makeSetModalInfo = msg => {
            setModalInfo({
                modal: {
                  title: 'Ops...',
                  description: msg,
                  txtBtn: 'Ok!'
                }
            })
        }

        makeGetDaily()
    }, [symbol])

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return
        } else if(!modalInfo.open) {
            setModalInfo({
                ...modalInfo,
                open: true,
                handleClose: () => history.push('/'),
            })
        }
    }, [modalInfo, history])

    return(
        <Container>
            <GridContainerDetails 
                alignItems="center"
                justify="center"
                container
            >
                {isLoading && 
                    <CircularProgress size='5rem' color={'primary'} />}

                {!isLoading &&
                    daily != null &&
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
                        </>}
            </GridContainerDetails>
            {modalInfo.open && 
                <ModalMessage 
                    open={modalInfo.open}
                    handleClose={modalInfo.handleClose}
                    modal={modalInfo.modal}
                />}
        </Container>
    )
}

export default Details