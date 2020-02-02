import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {
    WrapperBackBtn
} from '../assets/styles/backpagebtn'

import { useHistory } from "react-router-dom"

function BackPageBtn() {

    const history = useHistory()

    return(
        <WrapperBackBtn onClick={() => history.push('/')}>
            <ArrowBackIosIcon />
            <span style={{ margin: '1px' }}>Back</span>
        </WrapperBackBtn>
    )
}

export default BackPageBtn