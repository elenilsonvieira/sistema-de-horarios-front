import {useEffect, useState} from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir, SelectArea} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {ProfessorModel} from "../../../../../api/model/ProfessorModel";
import {professorReadControllerView} from "../professor/professorReadControllerView";
import {turmaReadControllerView} from "./turmaReadControllerView";
import {TurmaModel} from "../../../../../api/model/TurmaModel";
import {turmaDeleteControllerView} from "./turmaDeleteControllerView";

const turmas = [
    {
        id: 'kaka',
        nome: '2º Período',
    },
    {
        id: 'fsfs',
        nome: '3º Período',
    },
    {
        id: 'tsts',
        nome: '4º Período',
    },
    {
        id: 'dsds',
        nome: '5º Período',
    },
]

export const Turma = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [turmaList, setTurmaList] = useState<TurmaModel[]>();

    const handleEditMode = () => {
        setEditMode(false);
    }
    const load =  async () => {
        try {
            const result  = await turmaReadControllerView();
            setTurmaList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])
    return (
        <Main>
            {turmaList != null ? (
                turmaList.map((turma, index) => {
                    return (
                        <RowVisualizer key={turma.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{turma.name} - {turma.course.name}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={turma.name} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{turma.name}</span>
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
                                        <span className='info'>{turma.course.name}</span>
                                    }
                                </div>
                                <ActionContainer>
                                    {!editMode ?
                                        <ButtonEdit onClickFunction={() => setEditMode(true)}/>
                                        :
                                        <ButtonCancel onClickFunction={() => setEditMode(false)}/>
                                    }
                                    {!editMode ?
                                        <ButtonDelete onClickFunction={ async () => {
                                            const response  = confirm("Deseja confirmar a operação?");
                                            if(response){
                                                 await turmaDeleteControllerView(turma.uuid);
                                                 await load();
                                            }
                                        }
                                        }/>
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