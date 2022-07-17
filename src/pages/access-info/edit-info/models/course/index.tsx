import {useEffect, useState} from 'react';
import {InputArea, Row, ButtonDelete, ButtonConcluir, SelectArea} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons} from '../styles/styles';
import {CourseModel} from "../../../../../api/model/CourseModel";
import {courseReadControllerView} from "./courseReadControllerView";
import {courseDeleteControllerView} from "./courseDeleteControllerView";
import {ModelProps} from '../interfaces';

export const Course: React.FC<ModelProps> = ({editMode}: ModelProps) => {
    const [name, setName] = useState<string>();
    const [courseList, setCourseList] = useState<CourseModel[]>();

    function getDataObject(){
        return{
            name
        }
    }
    
    const load =  async () => {
        try {
            const result  = await courseReadControllerView();
            setCourseList(result);
        }catch (Error:any){

        }
    }
    useEffect(() => {
        load();
    },[])
    return (
        <Main>
            {courseList != null ? (
                courseList.map((course, index) => {
                    return (
                        <Row key={course.uuid} propertyName={course.name}>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={course.name} id={'a'+index} change={(event: any) => {
                                            setName(event.target.value);
                                            }}></InputArea>
                                        :
                                        <span className='info'>{course.name}</span>
                                    }
                                </div>
                                <ActionContainer>
                                    {editMode &&
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await courseDeleteControllerView(course.uuid);
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
            ) : (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}