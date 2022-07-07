import {useEffect, useState} from 'react';
import {InputArea, SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {curricularComponentReadView} from "./curricularComponentReadView";
import {lessonDeleteControllerView} from "../lesson/lessonDeleteControllerView";
import {curricularComponentDeleteControllerView} from "./curricularComponentDeleteControllerView";

export const CurricularComponent = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();

    const handleEditMode = () => {
        setEditMode(false);
    }
    const load =  async () => {
        try {
            const result  = await curricularComponentReadView();
            setCurricularComponentList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])
    return (
        <Main>
            {curricularComponentList != null ? (
                curricularComponentList.map((curricularComponent, index) => {
                    return (
                        <RowVisualizer key={curricularComponent.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>{curricularComponent.name}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={curricularComponent.name} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{curricularComponent.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Carga horária:</span>
                                    {editMode ?
                                        <InputArea placeholder={curricularComponent.workload.toString()} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{curricularComponent.workload}</span>
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
                                        <span className='info'>{curricularComponent.course.name}</span>
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
                                                await curricularComponentDeleteControllerView(curricularComponent.uuid);
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