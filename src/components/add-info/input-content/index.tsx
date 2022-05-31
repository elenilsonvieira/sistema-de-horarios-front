import React from "react";

import {Main} from './styles';

interface InputContentProps {
    labelText: string;
    htmlFor?: string;
    children: React.ReactNode;
}
const InputContent: React.FC<InputContentProps> = ({labelText, htmlFor, children}: InputContentProps) => {
    return (
        <Main>
            <label htmlFor={htmlFor}>{labelText}</label>
            {children}
        </Main>
    )
}

export {InputContent}