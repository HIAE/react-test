import styled from 'styled-components'

import {
    grayPri,
    graySec,
    grayTer
} from './colors'

const WrapperAutoCompleteItems = styled.div`
    width: 100%;
    padding: 10px 0px;
    border-radius: 10px;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    background-image: ${() => `linear-gradient(rgba(112, 112, 112, 0) 2%, ${grayPri} 10%);`}
`

const ContainerAutoComplete = styled.div`
    position: relative;
    width: 100%
`

const Item = styled.div`
    color: #fff;
    border-bottom: 1px solid ${graySec};
    padding: 10px 10px;
    cursor: pointer;

    &:hover {
        transition: 0.6s;
        background-color: ${grayTer};
    }
`

export {
    WrapperAutoCompleteItems,
    ContainerAutoComplete,
    Item
}