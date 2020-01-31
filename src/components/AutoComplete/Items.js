import React from 'react'

import {
    WrapperAutoCompleteItems,
    Item
} from '../../assets/styles/autocomplete'

import { useHistory } from "react-router-dom";

function Items(props) {

    const history = useHistory()
    const { items } = props
    
    return (
        <WrapperAutoCompleteItems>
            {items.map((item, i) => {
                return (
                    <Item key={i} onClick={() => history.push(`/${item['1. symbol']}/details`)}>
                        {item['1. symbol']}, {item['2. name']}
                    </Item>
                )
            })}
        </WrapperAutoCompleteItems>
    )
}

export default Items