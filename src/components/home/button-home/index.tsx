import React from "react";
import {Link} from "react-router-dom";
import {Main} from './styles';

const ButtonHome = () => {
    return (
        <Main >
            <Link to={'/view'}>
                    visualizar horários
            </Link>
        </Main>
    )
}

export {ButtonHome};