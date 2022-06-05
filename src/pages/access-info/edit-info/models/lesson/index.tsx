import { useState } from 'react';
import {SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

const lessons = [
    {
        id: 'kaka',
        calendario: '2021.1',
        sala: 'Sala 3',
        disciplina: 'DAC',
        professor: 'Elenilson Vieira',
        turma: '5º Período'
    },
    {
        id: 'fsfs',
        calendario: '2021.1',
        sala: 'Sala 1',
        disciplina: 'MAC',
        professor: 'Thiago Brasileiro',
        turma: '4º Período'
    },
    {
        id: 'tsts',
        calendario: '2020.1',
        sala: 'Sala 1',
        disciplina: 'Programação 1',
        professor: 'Natacha Targino',
        turma: '1º Período'
    },
    {
        id: 'dsds',
        calendario: '2020.2',
        sala: 'Sala 2',
        disciplina: 'Programação 2',
        professor: 'Cleyton Araújo',
        turma: '2º Período'
    },
]

export const Lesson = () => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {lessons.map((lesson, index) => {
                return (
                    <RowVisualizer key={lesson.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>Aula {index+1}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Calendário:</span> 
                                {editMode ? 
                                    <SelectArea id={'c'+index}>
                                        <option value="">2020.1</option>
                                        <option value="">2020.2</option>
                                        <option value="">2021.1</option>
                                    </SelectArea>
                                :
                                <span className='info'>{lesson.calendario}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Sala de aula:</span> 
                                {editMode ? 
                                    <SelectArea id={'c'+index}>
                                        <option value="">Sala 1</option>
                                        <option value="">Sala 2</option>
                                        <option value="">Sala 3</option>
                                    </SelectArea>
                                :
                                <span className='info'>{lesson.sala}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Disciplina:</span> 
                                {editMode ? 
                                    <SelectArea id={'c'+index}>
                                        <option value="">DAC</option>
                                        <option value="">P1</option>
                                        <option value="">BD1</option>
                                    </SelectArea>
                                :
                                <span className='info'>{lesson.disciplina}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Professor:</span> 
                                {editMode ? 
                                    <SelectArea id={'c'+index}>
                                        <option value="">Cleyton</option>
                                        <option value="">Elenilson</option>
                                        <option value="">Thiago</option>
                                    </SelectArea>
                                :
                                <span className='info'>{lesson.professor}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Turma:</span> 
                                {editMode ? 
                                    <SelectArea id={'c'+index}>
                                        <option value="">Turma 1</option>
                                        <option value="">Turma 2</option>
                                        <option value="">Turma 3</option>
                                    </SelectArea>
                                :
                                <span className='info'>{lesson.turma}</span> 
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