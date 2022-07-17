import React from "react";

import {Main} from './styles';

interface InputContentProps {
    labelText: string;
    htmlFor?: string;
    className?: string;
    children: React.ReactNode;
}
const InputContent: React.FC<InputContentProps> = ({labelText, htmlFor, className, children}: InputContentProps) => {
    return (
        <Main className={className}>
            <label htmlFor={htmlFor}>{labelText}</label>
            {children}
        </Main>
    )
}

export {InputContent}