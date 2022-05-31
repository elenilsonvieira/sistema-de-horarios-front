import { useState } from 'react';
import {InputArea, ButtonAction, InputContent} from '../../../../components'
import { Form, Main } from '../form-styles/styles';
import {ProfessorController} from "../../../../api/controller/ProfessorController";
import {ProfessorModel} from "../../../../api/model/ProfessorModel";

export const Professor = () => {
    const [name, setName] = useState<string>();
    const [area, setArea] = useState<string>();
    const [courseUuid, setcourseUuid] = useState<string>();

    function getDataObject(): any{
        return {
            name,
            area,
            courseUuid
        }
    }

    return (
        <Main>
            <Form>
                <InputContent labelText='Nome:' htmlFor="nome">

                    <InputArea placeholder="Nome" id="nome" change={(event:any) => {
                        setName(event.target.value);
                    }}></InputArea>

                </InputContent>

                <InputContent labelText='Área:' htmlFor="area">

                    <InputArea placeholder="Área" id="area" change={(event:any) => {
                        setArea(event.target.value);
                    }}></InputArea>

                </InputContent>

                <InputContent labelText='Curso:' htmlFor="curso">

                    <InputArea placeholder="Curso" id="curso" change={(event:any) => {
                        setcourseUuid(event.target.value);
                    }}></InputArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar professor" onClickFunction={ async ()=>{
            }}/>
        </ Main>
    );
}