import React from "react";

import {InputArea, ButtonAction} from '../../../components'

import {Main, InputContent} from './styles';

export const Professor = () => {
    return (
        <Main>
            <h1>professor</h1>
            <InputContent>
                <label htmlFor="nome">Nome:</label>
                <InputArea placeholder="Nome" id="nome"></InputArea>
            </InputContent>

            <InputContent>
                <label htmlFor="area">Área:</label>
                <InputArea placeholder="Área" id="area"></InputArea>
            </InputContent>

            <ButtonAction text="adicionar professor"/>
        </ Main>
    );
}