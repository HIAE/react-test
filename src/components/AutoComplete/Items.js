import React from 'react'

import {
    WrapperAutoCompleteItems,
    Item
} from '../../assets/styles/autocomplete'

function Items(props) {

    const { items } = props
    return (
        <WrapperAutoCompleteItems>
            {items.map((item, i) => {
                return (
                    <Item key={i}>
                        {item['1. symbol']}, {item['2. name']}
                    </Item>
                )
            })}
        </WrapperAutoCompleteItems>
    )
}

export default Items