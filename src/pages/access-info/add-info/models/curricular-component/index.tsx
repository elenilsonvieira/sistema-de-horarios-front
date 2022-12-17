import React, {useEffect, useState} from "react";
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import {Main, Form} from '../styles/styles';
import {CourseModel} from "../../../../../api/model/CourseModel";
import {CourseController} from "../../../../../api/controller/CourseController";
import {curricularComponentControllerView} from "./curricularComponentControllerView";
import {errorMessage} from '../../../../../components/libs/Toastr';

const courseController = CourseController.getInstance();

export const CurricularComponent = () => {
    const [name, setName] = useState<string>();
    const [workload, setWorkload] = useState<number>();
    const [courseUuid, setCourseUuid] = useState<string>();
    const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

    function getDataObject(): any{
        return {
            name,
            workload,
            courseUuid
        }
    }

    const validate = () => {
        const errors = [];

        if (!name) {
            errors.push('Nome é obrigatório');
        }
        if (!workload) {
            errors.push('Carga horária é obrigatória');
        }
        if (!courseUuid) {
            errors.push('Curso é obrigatório');
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
            await curricularComponentControllerView(data);
        }
    }

    const load =  async () => {
        try {
            const result  = await courseController.list();
            setCourseUuid(result[0].uuid);
            setCourseModelList(result);
        }catch (error:any){

        }
    }

    useEffect(() => {
        load();
    },[])
    
    return (
        <Main>
            <Form>
                <InputContent labelText='Nome:' htmlFor="nome">
                    <InputArea placeholder="Nome da disciplina" id="nome" change={(event) => {
                        setName(event.target.value)
                    }}></InputArea>
                </InputContent>

                <InputContent labelText='Carga Horária' htmlFor="Carga Horária">
                    <InputArea placeholder="Carga Horária" id="carga-horária" change={(event) => {
                        setWorkload(event.target.value);
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
                                }}>{item.name}</option>
                            ))
                        }
                    </SelectArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar Disciplina" onClickFunction={onSubmit}/>
        </ Main>
    );
}