import React from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../form-styles/styles';

const Course: React.FC = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="nome">
                    <InputArea placeholder="Ex: Construção de Edifícios" id="nome"></InputArea>
                </InputContent>

            </Form>

            <ButtonAction textButton="adicionar curso"/>
        </ Main>
    )
}

export {Course};