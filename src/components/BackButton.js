import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {
    WrapperBackBtn
} from '../assets/styles/backbutton'

import { useHistory } from "react-router-dom"

function BackButton() {

    const history = useHistory()

    return(
        <WrapperBackBtn onClick={() => history.push('/')}>
            <ArrowBackIosIcon />
            <span style={{ margin: '1px' }}>Back</span>
        </WrapperBackBtn>
    )
}

export default BackButton