import React, {useState} from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../../form-styles/styles';
import {classroomControllerView} from "./classroomControllerView";

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
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="nome">
                    <InputArea placeholder="Ex: Sala 1" id="nome" change={(event) => {
                        setName(event.target.value);
                    }}></InputArea>
                </InputContent>

                <InputContent labelText="Bloco:" htmlFor="bloco">
                    <InputArea placeholder="Bloco" id="bloco" change={(event) => {
                        setBlock(event.target.value)
                    }}></InputArea>
                </InputContent>

                <InputContent labelText="Capacidade:" htmlFor="capacidade">
                    <InputArea placeholder="Capacidade" id="capacidade" type="number" change={(event) => {
                        setCapacity(event.target.value)
                    }}></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar sala de aula" onClickFunction={ async () => {
                const data = getDataObject();
                await classroomControllerView(data)
            }}/>
        </ Main>
    );
}