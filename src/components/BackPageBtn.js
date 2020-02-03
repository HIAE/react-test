import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import {
    WrapperBackBtn
} from '../assets/styles/backpagebtn'

import {
    Link
} from 'react-router-dom'

function BackPageBtn(props) {

    const { backToPage } = props

    return(
        <Link to={backToPage || '/'}>
            <WrapperBackBtn>
                <ArrowBackIosIcon />
                <span style={{ margin: '1px' }}>Back</span>
            </WrapperBackBtn>
        </Link>
    )
}

export default BackPageBtn