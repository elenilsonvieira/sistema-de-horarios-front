import {useEffect, useState} from 'react';
import {InputArea, SelectArea, Row, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons} from '../styles/styles';
import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {curricularComponentReadView} from "./curricularComponentReadView";
import {lessonDeleteControllerView} from "../lesson/lessonDeleteControllerView";
import {curricularComponentDeleteControllerView} from "./curricularComponentDeleteControllerView";
import { CourseModel } from '../../../../../api/model/CourseModel';
import {CourseController} from "../../../../../api/controller/CourseController";
import {ModelProps} from '../interfaces';
const courseController = CourseController.getInstance();

export const CurricularComponent: React.FC<ModelProps> = ({editMode}: ModelProps) => {
    const [name, setName] = useState<string>();
    const [workload, setWorkload] = useState<number>();
    const [courseUuid, setCourseUuid] = useState<string>();
    const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();

    function getDataObject(): any{
        return {
            name,
            workload,
            courseUuid
        }
    }

    const load =  async () => {
        try {
            const result  = await curricularComponentReadView();
            setCurricularComponentList(result);

            const resultCourse  = await courseController.list();
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
            {curricularComponentList != null ? (
                curricularComponentList.map((curricularComponent, index) => {
                    return (
                        <Row key={curricularComponent.uuid} propertyName={curricularComponent.name}>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={curricularComponent.name} id={'a'+index} change={(event) => {
                                            setName(event.target.value)
                                        }}></InputArea>
                                        :
                                        <span className='info'>{curricularComponent.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Carga horária:</span>
                                    {editMode ?
                                        <InputArea placeholder={curricularComponent.workload.toString()} id={'a'+index} change={(event) => {
                                            setWorkload(event.target.value);
                                        }}></InputArea>
                                        :
                                        <span className='info'>{curricularComponent.workload}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Curso:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index} change={(event)=>{
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
                                        :
                                        <span className='info'>{curricularComponent.course.name}</span>
                                    }
                                </div>
                                <ActionContainer>
                                    {editMode &&
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await curricularComponentDeleteControllerView(curricularComponent.uuid);
                                                    await load();
                                                }
                                            }}/>
                                            
                                            <ButtonConcluir />
                                        </EditButtons>
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                        </Row>
                    )
                })
            ): (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}