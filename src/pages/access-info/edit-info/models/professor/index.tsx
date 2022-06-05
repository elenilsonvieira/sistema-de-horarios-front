import {useEffect, useState} from 'react';
import {InputArea, SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {ProfessorModel} from "../../../../../api/model/ProfessorModel";
import {professorReadControllerView} from "./professorReadControllerView";
import {turmaDeleteControllerView} from "../turma/turmaDeleteControllerView";
import {professorDeleteControllerView} from "./professorDeleteControllerView";

export const Professor = () => {

    const [editMode, setEditMode] = useState<boolean>(true);
    const [professorList, setProfessorList] = useState<ProfessorModel[]>();

    const handleEditMode = () => {
        setEditMode(false);
    }
    const load =  async () => {
        try {
            const result  = await professorReadControllerView();
            setProfessorList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            {professorList != null ? (

                professorList.map((prof, index) => {
                    return (
                        <RowVisualizer key={prof.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{prof.name}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={prof.name} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{prof.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Área:</span>
                                    {editMode ?
                                        <InputArea placeholder={prof.area} id={'b'+index}></InputArea>
                                        :
                                        <span className='info'>{prof.area}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Curso:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="ads">ADS</option>
                                            <option value="tce">TCE</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{prof.course.name}</span>
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
                                                await professorDeleteControllerView(prof.uuid);
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
            ):(
                <p>Não há itens</p>
            )}
        </ Main>
    );
}