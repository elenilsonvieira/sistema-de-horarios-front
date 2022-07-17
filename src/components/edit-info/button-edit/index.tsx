import React from "react";

import {Main} from './styles'

interface ButtonEditProps {
    onClickFunction?: () => void;
}

export const ButtonEdit: React.FC<ButtonEditProps> = ({onClickFunction}:ButtonEditProps) => {
    return (
        <Main onClick={onClickFunction}>
            Editar
        </Main>
    )
}