import { useState } from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

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

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {turmas.map((turma, index) => {
                return (
                    <RowVisualizer key={turma.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>{turma.nome}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Nome:</span> 
                                {editMode ? 
                                    <InputArea placeholder={turma.nome} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{turma.nome}</span> 
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