import {useEffect, useState} from 'react';
import {InputArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {CalendarModel} from "../../../../../api/model/CalendarModel";
import {calendarReadControllerView} from "./calendarReadControllerView";
import {calendarDeleteControllerView} from "./calendarDeleteControllerView";

export const Calendar = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [caledarList, setCaledarList] = useState<CalendarModel[]>();
    const handleEditMode = () => {
        setEditMode(false);
    }
    const load =  async () => {
        try {
            const result  = await calendarReadControllerView();
            setCaledarList(result);
        }catch (Error:any){

        }
    }
    useEffect(() => {
        load();
    },[])
    
    return (
        <Main>
            {caledarList != null ? (
                caledarList.map((calendar, index) => {
                    return (
                        <RowVisualizer key={calendar.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{calendar.semester} </span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Semestre:</span>
                                    {editMode ?
                                        <InputArea placeholder={calendar.semester} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{calendar.semester}</span>
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
                                                await calendarDeleteControllerView(calendar.uuid);
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
            ): (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}