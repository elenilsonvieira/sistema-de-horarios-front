import React from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../form-styles/styles';

export const Classroom = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="nome">
                    <InputArea placeholder="Ex: Sala 1" id="nome"></InputArea>
                </InputContent>

                <InputContent labelText="Bloco:" htmlFor="bloco">
                    <InputArea placeholder="Bloco" id="bloco"></InputArea>
                </InputContent>

                <InputContent labelText="Capacidade:" htmlFor="capacidade">
                    <InputArea placeholder="Capacidade" id="capacidade" type="number"></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar sala de aula"/>
        </ Main>
    );
}