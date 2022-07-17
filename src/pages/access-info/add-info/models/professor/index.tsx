import {useEffect, useState} from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import { Form, Main } from '../styles/styles';
import {professorControllerView} from "./professorControllerView";
import {CourseController} from "../../../../../api/controller/CourseController";
import {CourseModel} from "../../../../../api/model/CourseModel";

import {errorMessage} from '../../../../../components/libs/Toastr';

const courseController = CourseController.getInstance()
export const Professor = () => {
    const [name, setName] = useState<string>();
    const [area, setArea] = useState<string>()

    function getDataObject(): any{
        return {
            name,
            area
        }
    }


    const validate = () => {
        const errors = [];

        if (!name) {
            errors.push('Nome é obrigatório');
        }
        if (!area) {
            errors.push('Área é obrigatória');
        }
        return errors;
    }

    const onSubmit = async () => {
        const errors = validate();

        if(errors.length > 0) {
            errors.forEach((message) => {
                errorMessage(message);
            })
        } else {
            const data = getDataObject();
            await professorControllerView(data);
        }
    }

    return (
        <Main>
            <Form>
                <InputContent labelText='Nome:' htmlFor="nome">

                    <InputArea placeholder="Nome do professor" id="nome" change={(event:any) => {
                        setName(event.target.value);
                    }}></InputArea>

                </InputContent>

                <InputContent labelText='Área:' htmlFor="area">

                    <InputArea placeholder="Área" id="area" change={(event:any) => {
                        setArea(event.target.value);
                    }}></InputArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar professor" onClickFunction={onSubmit}/>
        </ Main>
    );
}