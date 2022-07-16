import {useEffect, useState} from 'react';
import {InputArea, Row, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons} from '../styles/styles';
import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {classroomReadControllerView} from "./classroomReadControllerView";
import {classroomDeleteControllerView} from "./classroomDeleteControllerView";
import {ModelProps} from '../interfaces';

export const Classroom: React.FC<ModelProps> = ({editMode}: ModelProps) => {

    const [name, setName] = useState<string>();
    const [block, setBlock] = useState<string>();
    const [capacity, setCapacity] = useState<number>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();

    function getDataObject(){
        return{
            name,
            block,
            capacity
        }
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
                        <Row key={classroom.uuid} propertyName={`${classroom.classNameDTO} - ${classroom.classBlockDTO}`}>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={classroom.classNameDTO} id={'a'+index}change={(event) => {
                                            setName(event.target.value);
                                        }}></InputArea>
                                        :
                                        <span className='info'>{classroom.classNameDTO}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Bloco:</span>
                                    {editMode ?
                                        <InputArea placeholder={classroom.classNameDTO} id={'b'+index} change={(event) => {
                                            setBlock(event.target.value)
                                        }}></InputArea>
                                        :
                                        <span className='info'>{classroom.classNameDTO}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Capacidade:</span>
                                    {editMode ?
                                        <InputArea type='number' placeholder={classroom.capacity.toString()} id={'c'+index} change={(event) => {
                                            setCapacity(event.target.value)
                                        }}></InputArea>
                                        :
                                        <span className='info'>{classroom.capacity}</span>
                                    }
                                </div>
                                <ActionContainer>
                                    {editMode &&
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await classroomDeleteControllerView(classroom.uuid);
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
            )
            }
        </ Main>
    );
}