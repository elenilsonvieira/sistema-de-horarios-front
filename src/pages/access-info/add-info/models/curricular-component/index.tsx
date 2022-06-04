import React from "react";
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import {Main, Form} from '../../form-styles/styles';

export const CurricularComponent = () => {

    return (
        <Main>
            <Form>
                <InputContent labelText='Nome:' htmlFor="nome">
                    <InputArea placeholder="Nome da disciplina" id="nome"></InputArea>
                </InputContent>

                <InputContent labelText='Carga Horária' htmlFor="Carga Horária">
                    <InputArea placeholder="Carga Horária" id="carga-horária"></InputArea>
                </InputContent>

                <InputContent labelText='Curso:' htmlFor="curso">

                    <SelectArea id="curso">
                        <option value="">ADS</option>
                        <option value="">Construção de Edifícios</option>
                    </SelectArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar professor"/>
        </ Main>
    );
}