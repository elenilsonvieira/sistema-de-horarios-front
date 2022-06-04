import React from "react";

import {Main} from './styles';

interface InputAreaProps {
    id: string;
    children: React.ReactNode;
    change?: (event:any) => void;
}

export const SelectArea: React.FC<InputAreaProps> = ({id, children, change}: InputAreaProps) => {
    return (
        <Main id={id} onChange={change} >
            {children}
        </ Main>
    )
}