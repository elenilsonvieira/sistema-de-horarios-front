import {useEffect, useState} from 'react';
import {InputArea, Row, SelectArea, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons
    } from '../styles/styles';
import {ProfessorModel} from "../../../../../api/model/ProfessorModel";
import {professorReadControllerView} from "./professorReadControllerView";
import {professorDeleteControllerView} from "./professorDeleteControllerView";
import {ModelProps} from '../interfaces';

export const Professor: React.FC<ModelProps> = ({editMode}: ModelProps) => {

    const [professorList, setProfessorList] = useState<ProfessorModel[]>();

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
                    const idx = index + 1;
                    return (
                        <Row key={prof.uuid}
                        propertyName={prof.name}>
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
                                <ActionContainer>

                                    {editMode &&
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await professorDeleteControllerView(prof.uuid? prof.uuid : "");
                                                    await load();
                                                }
                                            }}/>
                                            
                                            <ButtonConcluir />
                                        </EditButtons>
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                            

                        </Row>
                    )
                })
            ):(
                <p>Não há itens</p>
            )}
        </ Main>
    );
}