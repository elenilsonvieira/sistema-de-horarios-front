import React from "react";

import {Main} from './styles'

interface ButtonActionProps {
    textButton: string;
    onClickFunction?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({textButton, onClickFunction, type}:ButtonActionProps) => {
    return (
        <Main type={type ? type : 'submit'} onClick={onClickFunction}>
            {textButton}
        </Main>
    )
}