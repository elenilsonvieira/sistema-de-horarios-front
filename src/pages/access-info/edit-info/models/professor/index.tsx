import { useState } from 'react';
import {InputArea, SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

const profs = [
    {
        id: 'kaka',
        nome: 'Elenilson Vieira',
        area: 'Programação e engenharia',
        curso: 'ADS'
    },
    {
        id: 'fsfs',
        nome: 'Thiago Brasileiro',
        area: 'Testes e matemática',
        curso: 'ADS'
    },
    {
        id: 'tsts',
        nome: 'Larissa Vasconcelos',
        area: 'Programação e algorítmos',
        curso: 'ADS'
    },
]

export const Professor = () => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {profs.map((prof, index) => {
                return (
                    <RowVisualizer key={prof.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>{prof.nome}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Nome:</span> 
                                {editMode ? 
                                    <InputArea placeholder={prof.nome} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{prof.nome}</span> 
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
                                <span className='info'>{prof.curso}</span> 
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