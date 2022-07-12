import {useEffect, useState} from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir, SelectArea} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {CourseModel} from "../../../../../api/model/CourseModel";
import {courseReadControllerView} from "./courseReadControllerView";
import {courseDeleteControllerView} from "./courseDeleteControllerView";

export const Course = () => {
    const [name, setName] = useState<string>();
    const [editMode, setEditMode] = useState<boolean>(true);
    const [courseList, setCourseList] = useState<CourseModel[]>();

    function getDataObject(){
        return{
            name
        }
    }

    const handleEditMode = () => {
        setEditMode(false);
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
                        <RowVisualizer key={course.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{course.name}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
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
                                    {!editMode ?
                                        <ButtonEdit onClickFunction={() => setEditMode(true)}/>
                                        :
                                        <ButtonCancel onClickFunction={() => setEditMode(false)}/>
                                    }
                                    {!editMode ?
                                        <ButtonDelete  onClickFunction={ async () => {
                                            const response  = confirm("Deseja confirmar a operação?");
                                            if(response){
                                                await courseDeleteControllerView(course.uuid);
                                                await load();
                                            }
                                        }}/>
                                        :
                                        <ButtonConcluir />
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                        </RowVisualizer>
                    )
                })
            ) : (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}