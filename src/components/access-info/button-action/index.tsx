import React from "react";

import {Main} from './styles'

interface ButtonActionProps {
    textButton: string;
    onClickFunction?: () => void;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({textButton, onClickFunction}:ButtonActionProps) => {
    return (
        <Main onClick={onClickFunction}>
            {textButton}
        </Main>
    )
}