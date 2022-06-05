import { useState } from 'react';
import {InputArea, SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

const disciplinas = [
    {
        id: 'kaka',
        nome: 'Programação 1',
        cargaHoraria: '120 horas',
        curso: 'ADS'
    },
    {
        id: 'fsfs',
        nome: 'Programação 2',
        cargaHoraria: '120 horas',
        curso: 'ADS'
    },
    {
        id: 'tsts',
        nome: 'Técnicas de testes',
        cargaHoraria: '120 horas',
        curso: 'ADS'
    },
    {
        id: 'dsds',
        nome: 'Desenvolvimento de aplicações corporativas',
        cargaHoraria: '120 horas',
        curso: 'ADS'
    },
]

export const CurricularComponent = () => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {disciplinas.map((disciplina, index) => {
                return (
                    <RowVisualizer key={disciplina.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>{disciplina.nome}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Nome:</span> 
                                {editMode ? 
                                    <InputArea placeholder={disciplina.nome} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{disciplina.nome}</span> 
                                }
                            </div>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Carga horária:</span> 
                                {editMode ? 
                                    <InputArea placeholder={disciplina.cargaHoraria} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{disciplina.cargaHoraria}</span> 
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
                                <span className='info'>{disciplina.curso}</span> 
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