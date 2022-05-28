import React from "react";

import {Main} from './styles';

interface InputAreaProps {
    type: string;
    placeholder: string;
    id: string;
    // onClick: () => void;
}

export const InputArea: React.FC<InputAreaProps> = ({type, placeholder, id}: InputAreaProps) => {
    return (
        <Main type={type} placeholder={placeholder} id={id} >
        </ Main>
    )
}