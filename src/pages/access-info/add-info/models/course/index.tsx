import React, {useState} from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../components';
import {Main, Form} from '../form-styles/styles';
import {courseControllerView} from "./courseControllerView";

const Course: React.FC = () => {

    const [name, setName] = useState<string>();

    function getDataObject(){
        return{
            name
        }
    }
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="nome">
                    <InputArea placeholder="Nome do curso" id="nome" change={(event: any) => {
    setName(event.target.value);
}}/>
                </InputContent>

            </Form>

            <ButtonAction textButton="adicionar curso" onClickFunction={async () => {
                const data = getDataObject();
                await courseControllerView(data);
            }}/>
        </ Main>
    )
}

export {Course};