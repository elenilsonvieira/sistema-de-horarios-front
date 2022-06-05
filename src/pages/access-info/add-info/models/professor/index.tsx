import {useEffect, useState} from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import { Form, Main } from '../styles/styles';
import {professorControllerView} from "./professorControllerView";
import {CourseController} from "../../../../../api/controller/CourseController";
import {CourseModel} from "../../../../../api/model/CourseModel";

const courseController = CourseController.getInstance()
export const Professor = () => {
    const [name, setName] = useState<string>();
    const [area, setArea] = useState<string>();
    const [courseUuid, setCourseUuid] = useState<string>();

    const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

    function getDataObject(): any{
        return {
            name,
            area,
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
                <InputContent labelText='Curso:' htmlFor="curso">

                    <SelectArea id="curso" change={(event)=>{
                        const select  = event.target;
                        if (courseModelList) {
                            const courseUuid = courseModelList[select.selectedIndex].uuid;
                            setCourseUuid(courseUuid);
                        }}}>

                        {
                            courseModelList?.map((item) =>(

                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>

                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar professor" onClickFunction={ async ()=>{
                const data = getDataObject();
                await professorControllerView(data);
            }}/>
        </ Main>
    );
}