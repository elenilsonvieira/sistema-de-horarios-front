import React, {useState} from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../styles/styles';
import {classroomControllerView} from "./classroomControllerView";
import {errorMessage} from '../../../../../components/libs/Toastr';

export const Classroom = () => {

    const [name, setName] = useState<string>();
    const [block, setBlock] = useState<string>();
    const [capacity, setCapacity] = useState<number>();

    function getDataObject(){
        return{
            name,
            block,
            capacity
        }
    }

    const validate = () => {
        const errors = [];

        if (!name) {
            errors.push('Nome é obrigatório');
        }
        if (!block) {
            errors.push('Bloco é obrigatório');
        }
        if (!capacity) {
            errors.push('Capacidade é obrigatória');
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
            await classroomControllerView(data);
        }
    }

    return (
        <Main>
            <Form>
                <InputContent labelText="Nome*:" htmlFor="nome">
                    <InputArea placeholder="Ex: Sala 1" id="nome" change={(event) => {
                        setName(event.target.value);
                    }}></InputArea>
                </InputContent>

                <InputContent labelText="Bloco*:" htmlFor="bloco">
                    <InputArea placeholder="Bloco" id="bloco" change={(event) => {
                        setBlock(event.target.value)
                    }}></InputArea>
                </InputContent>

                <InputContent labelText="Capacidade*:" htmlFor="capacidade">
                    <InputArea placeholder="Capacidade" id="capacidade" type="number" change={(event) => {
                        setCapacity(event.target.value)
                    }}></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar sala de aula" onClickFunction={onSubmit}/>
        </ Main>
    );
}