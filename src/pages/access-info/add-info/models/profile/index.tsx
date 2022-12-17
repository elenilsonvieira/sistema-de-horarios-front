import {useEffect, useState} from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import { Form, Main } from '../styles/styles';
import { profileControllerView } from "./profileControllerView";
import  { ProfileController }  from '../../../../../api/controller/ProfileController';
import { ProfileModel } from '../../../../../api/model/ProfileModel';

import {errorMessage} from '../../../../../components/libs/Toastr';

export const Profile = () => {

    const [field, setField] = useState<string>();
    const [standard, setStandard] = useState<number>();

    function getDataObject(): any{
        return {
            field,
            standard
        }
    }

    const validate = () => {
        const errors = [];

        if (!field) {
            errors.push('Campo é obrigatório');
        }
        if (!standard) {
            errors.push('Padrão é obrigatória');
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
            await profileControllerView(data);
        }
    }

    return (
        <Main>
            <Form>
                <InputContent labelText='Campo:' htmlFor="campo">
                    <InputArea placeholder="Campo de formação" id="nome" change={(event) => {
                        setField(event.target.value)
                    }}></InputArea>
                </InputContent>

                <InputContent labelText='Padrão' htmlFor="padrão">
                    <InputArea placeholder="Ex: 1" id="padrão" change={(event) => {
                        setStandard(event.target.value);
                    }}></InputArea>
                </InputContent>
                </Form>

            <ButtonAction textButton="adicionar Disciplina" onClickFunction={onSubmit}/>
        </ Main>
    );
}

