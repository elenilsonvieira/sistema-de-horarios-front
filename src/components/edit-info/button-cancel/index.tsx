import React from "react";

import {Main} from './styles'

interface ButtonEditProps {
    onClickFunction?: () => void;
}

export const ButtonCancel: React.FC<ButtonEditProps> = ({onClickFunction}:ButtonEditProps) => {
    return (
        <Main onClick={onClickFunction}>
            cancelar
        </Main>
    )
}