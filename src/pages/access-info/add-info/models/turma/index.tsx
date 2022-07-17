import React, { useState} from "react";
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components';
import {Main, Form} from '../styles/styles';
import {turmaControllerView} from "./turmaControllerView";
import {TurmaModel} from "../../../../../api/model/TurmaModel";

export const Turma = () => {
    const [name, setName] = useState<string>();

    function getDataObject(){
        return{
            name
        } as TurmaModel
    }

    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="turma">
                    <InputArea placeholder="Ex: 1º período" id="turma" change={(event) => {
                        setName(event.target.value);
                    }}></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar calendário" onClickFunction={ async () => {
                const data = getDataObject();
                await turmaControllerView(data);
            }}/>
        </ Main>
    );
}