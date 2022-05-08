import React from "react";

import {Link} from "react-router-dom";

import {Main, StyledButton, TextButton} from './styles';

export const ButtonMenu = (props) => {
    return (
        <Main>
            <StyledButton>
                <Link to={props.to}>
                    <img src={props.icon} alt={props.tittle} />
                    <TextButton>
                        <b>{props.tittle}</b>
                        <span>{props.discription}</span>
                    </TextButton>
                </Link>
            </StyledButton>
        </ Main>
    )
}