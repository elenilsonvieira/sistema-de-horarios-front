import {useEffect, useState} from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {classroomReadControllerView} from "./classroomReadControllerView";
import {classroomDeleteControllerView} from "./classroomDeleteControllerView";

export const Classroom = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const handleEditMode = () => {
        setEditMode(false);
    }

    const load =  async () => {
        try {
            const result  = await classroomReadControllerView();
            setClassroomList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            {
            classroomList != null ? (
                classroomList.map((classroom, index) => {
                    return (
                        <RowVisualizer key={classroom.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{classroom.name} - {classroom.block}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={classroom.name} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{classroom.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Bloco:</span>
                                    {editMode ?
                                        <InputArea placeholder={classroom.block} id={'b'+index}></InputArea>
                                        :
                                        <span className='info'>{classroom.block}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Capacidade:</span>
                                    {editMode ?
                                        <InputArea type='number' placeholder={classroom.capacity.toString()} id={'c'+index}></InputArea>
                                        :
                                        <span className='info'>{classroom.capacity}</span>
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
                                                await classroomDeleteControllerView(classroom.uuid);
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
            )
            }
        </ Main>
    );
}