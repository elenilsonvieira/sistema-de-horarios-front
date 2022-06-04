import React from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../../form-styles/styles';

export const Turma = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="turma">
                    <InputArea placeholder="Ex: 1º período" id="turma"></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar calendário"/>
        </ Main>
    );
}