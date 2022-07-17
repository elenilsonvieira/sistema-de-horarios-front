import React from "react";

import {Main} from './styles';

interface InputAreaProps {
    id: string;
    value?: string;
    children: React.ReactNode;
    change?: (event:any) => void;
}

export const SelectArea: React.FC<InputAreaProps> = ({id, children, change, value}: InputAreaProps) => {
    return (
        <Main value={value} id={id} onChange={change} >
            {children}
        </ Main>
    )
}