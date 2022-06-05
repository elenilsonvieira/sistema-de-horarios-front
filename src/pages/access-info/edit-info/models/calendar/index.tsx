import { useState } from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';

const calendars = [
    {
        id: 'kaka',
        semestre: '2020.1',
    },
    {
        id: 'fsfs',
        semestre: '2020.2',
    },
    {
        id: 'tsts',
        semestre: '2021.1',
    },
    {
        id: 'dsds',
        semestre: '2021.2',
    },
]

export const Calendar = () => {
    const [editMode, setEditMode] = useState<boolean>(true);

    const handleEditMode = () => {
        setEditMode(false);
    }

    return (
        <Main>
            {calendars.map((calendar, index) => {
                return (
                    <RowVisualizer key={calendar.id}>
                        <input type="radio" name='view-info' id={'expand-radio'+index}/>
                        <div>
                            <span>{calendar.semestre}</span>
                            <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                <img src={Expandir} alt=""/>
                            </label>

                        </div>
                        <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                <span className='title'>Semestre:</span> 
                                {editMode ? 
                                    <InputArea placeholder={calendar.semestre} id={'a'+index}></InputArea>
                                :
                                <span className='info'>{calendar.semestre}</span> 
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