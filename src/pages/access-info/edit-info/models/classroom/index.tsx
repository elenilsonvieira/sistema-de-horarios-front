import { useState } from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

const classrooms = [
    {
        id: 'kaka',
        nome: 'Sala 1',
        bloco: 'Bloco A',
        capacidade: '40'
    },
    {
        id: 'fsfs',
        nome: 'Sala 1',
        bloco: 'Bloco B',
        capacidade: '35'
    },
    {
        id: 'tsts',
        nome: 'Sala 2',
        bloco: 'Bloco A',
        capacidade: '30'
    },
    {
        id: 'dsds',
        nome: 'Sala 3',
        bloco: 'Bloco A',
        capacidade: '40'
    },
]

export const Classroom = () => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {classrooms.map((classroom, index) => {
                return (
                    <RowVisualizer key={classroom.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>{classroom.nome}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Nome:</span> 
                                {editMode ? 
                                    <InputArea placeholder={classroom.nome} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{classroom.nome}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Bloco:</span> 
                                {editMode ? 
                                    <InputArea placeholder={classroom.bloco} id={'b'+index}></InputArea>
                                :
                                <span className='info'>{classroom.bloco}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Capacidade:</span> 
                                {editMode ? 
                                    <InputArea type='number' placeholder={classroom.capacidade} id={'c'+index}></InputArea>
                                :
                                <span className='info'>{classroom.capacidade}</span> 
                                }
                            </div>
                            <ActionContainer>
                                {!editMode ? 
                                    <ButtonEdit onClickFunction={() => setEditMode(true)}/>
                                :
                                    <ButtonCancel onClickFunction={() => setEditMode(false)}/>
                                }
                                {!editMode ? 
                                    <ButtonDelete />
                                :
                                    <ButtonConcluir />
                                }
                            </ActionContainer>
                        </ExpandDetails>
                    </RowVisualizer>
                )
            })}
        </ Main>
    );
}