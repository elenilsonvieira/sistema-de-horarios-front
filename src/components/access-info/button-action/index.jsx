import React from "react";

import {Main} from './styles'

export const ButtonAction = (props) => {
    return (
        <Main onClick={() => props.function}>
            {props.text}
        </Main>
    )
}