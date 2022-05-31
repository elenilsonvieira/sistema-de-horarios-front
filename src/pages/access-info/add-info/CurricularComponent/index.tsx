import React from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../components'
import {Main, Form} from '../form-styles/styles';

export const CurricularComponent = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText='Nome:' htmlFor="nome">
                    <InputArea placeholder="Nome" id="nome"></InputArea>
                </InputContent>

                <InputContent labelText='Carga Horária' htmlFor="Carga Horária">
                    <InputArea placeholder="Carga Horária" id="carga-horária"></InputArea>
                </InputContent>

                <InputContent labelText='Curso:' htmlFor="curso">
                    <InputArea placeholder="Curso" id="curso"></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar professor"/>
        </ Main>
    );
}