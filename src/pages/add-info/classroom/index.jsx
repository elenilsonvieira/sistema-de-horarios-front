import React from "react";

import {InputArea, ButtonAction} from '../../../components';

import {Main, InputContent} from './styles';

export const Classroom = () => {
    return (
        <Main>
            <h1>sala de aula</h1>
            <InputContent>
                <label htmlFor="nome">Nome:</label>
                <InputArea placeholder="Nome" id="nome"></InputArea>
            </InputContent>

            <InputContent>
                <label htmlFor="bloco">Bloco:</label>
                <InputArea placeholder="Bloco" id="bloco"></InputArea>
            </InputContent>

            <InputContent>
                <label htmlFor="capacidade">Capacidade:</label>
                <InputArea placeholder="Capacidade" id="capacidade" type="number"></InputArea>
            </InputContent>

            <ButtonAction text="adicionar sala de aula"/>
        </ Main>
    );
}