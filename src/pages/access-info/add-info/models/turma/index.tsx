import React, {useEffect, useState} from "react";
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components';
import {Main, Form} from '../styles/styles';
import {turmaControllerView} from "./turmaControllerView";
import {CourseController} from "../../../../../api/controller/CourseController";
import {CourseModel} from "../../../../../api/model/CourseModel";

const courseController = CourseController.getInstance();

export const Turma = () => {
    const [name, setName] = useState<string>();
    const [courseUuid, setCourseUuid] = useState<string>();

    const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

    function getDataObject(){
        return{
            name,
            courseUuid
        }
    }
    const load =  async () => {
        try {
            const result  = await courseController.list();
            setCourseUuid(result[0].uuid);
            setCourseModelList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])
    return (
        <Main>
            <Form>
                <InputContent labelText="Nome:" htmlFor="turma">
                    <InputArea placeholder="Ex: 1º período" id="turma" change={(event) => {
                        setName(event.target.value);
                    }}></InputArea>
                </InputContent>
                <InputContent labelText='Curso:' htmlFor="curso">

                    <SelectArea id="curso" change={(event)=>{
                        const select  = event.target;
                        if (courseModelList) {
                            const courseUuid = courseModelList[select.selectedIndex].uuid;
                            setCourseUuid(courseUuid);
                        }}}>

                        {
                            courseModelList?.map((item) =>(

                                <option key={item.uuid} onChange={()=>{
                                    console.log(item.name)
                                }}>{item.name}</option>
                            ))
                        }
                    </SelectArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar calendário" onClickFunction={ async () => {
                const data = getDataObject();
                console.log(data)
                await turmaControllerView(data);
            }}/>
        </ Main>
    );
}