import React, {useState} from "react";
import {InputArea, ButtonAction, InputContent} from '../../../../../components';
import {Main, Form} from '../styles/styles';
import {calendarControllerView} from "./calendarControllerView";

export const Calendar = () => {
    const [semester, setSemester] = useState<string>();

    function getDataObject(){
        return{
            semester
        }
    }
    return (
        <Main>
            <Form>
                <InputContent labelText="Semestre:" htmlFor="semestre">
                    <InputArea placeholder="Ex: 2020.1" id="semestre" change={(event) => {
                        setSemester(event.target.value);
                    }}></InputArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar calendário" onClickFunction={ async () => {
                const data = getDataObject();
                await calendarControllerView(data);
            }}/>
        </ Main>
    );
}