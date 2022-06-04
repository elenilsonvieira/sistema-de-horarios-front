import React from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../form-styles/styles';

export const Calendar = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText="Semestre:" htmlFor="semestre">
                    <InputArea placeholder="Ex: 2020.1" id="semestre"></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar calendário"/>
        </ Main>
    );
}