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
import { ProfileModel } from '../../../../../api/model/ProfileModel';
import {ProfileController} from "../../../../../api/controller/ProfileController";
import {ModelProps} from '../interfaces';

const profileController = ProfileController.getInstance();
export const Professor: React.FC<ModelProps> = ({editMode}: ModelProps) => {
    const [name, setName] = useState<string>();
    const [profileModel, setProfileModel] = useState<ProfileModel>();
    const [profileModelList, setProfileModelList] = useState<ProfileModel[]>();
    
    const [professorList, setProfessorList] = useState<ProfessorModel[]>();
    
    function getDataObject(): any{
        return {
            name,
            profileModel
        }
    }

    const load =  async () => {
        try {
            const result  = await professorReadControllerView();
            setProfessorList(result);

            const resultProfile  = await profileController.list();
            setProfileModel(resultProfile[0]);
            setProfileModelList(resultProfile);
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
                        <Row key={prof.uuid} propertyName={prof.name}>
                            <ExpandDetails className='expand'>
                            <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={prof.name} id={'a'+index} change={(event) => {
                                            setName(event.target.value)
                                        }}></InputArea>
                                        :
                                        <span className='info'>{prof.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Área:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (profileModelList) {
                                                const profileSelect = profileModelList[select.selectedIndex];
                                                setProfileModel(profileSelect);
                                            }}}>
                                            {
                                                profileModelList?.map((item) =>(

                                                    <option key={item.uuid} onChange={()=>{
                                                    }}>{item.field} - {item.standard}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{prof.profile.field} - {prof.profile.standard}</span>
                                    }
                                </div>
                                <ActionContainer>

                                    {editMode &&
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await professorDeleteControllerView(prof.uuid ? prof.uuid : "");
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