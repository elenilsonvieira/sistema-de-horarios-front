import {useEffect, useState} from 'react';
import {InputArea, Row, ButtonDelete, ButtonConcluir, SelectArea} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons} from '../styles/styles';
import {ProfessorModel} from "../../../../../api/model/ProfessorModel";
import {professorReadControllerView} from "../professor/professorReadControllerView";
import {turmaReadControllerView} from "./turmaReadControllerView";
import {TurmaModel} from "../../../../../api/model/TurmaModel";
import {turmaDeleteControllerView} from "./turmaDeleteControllerView";
import {ModelProps} from '../interfaces';

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

export const Turma: React.FC<ModelProps> = ({editMode}: ModelProps) => {

    const [turmaList, setTurmaList] = useState<TurmaModel[]>();

    const load =  async () => {
        try {
            const result  = await turmaReadControllerView();
            setTurmaList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])
    return (
        <Main>
            {turmaList != null ? (
                turmaList.map((turma, index) => {
                    return (
                        <Row key={turma.uuid} propertyName={`${turma.name} - ${turma.course.name}`}>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Nome:</span>
                                    {editMode ?
                                        <InputArea placeholder={turma.name} id={'a'+index}></InputArea>
                                        :
                                        <span className='info'>{turma.name}</span>
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
                                        <span className='info'>{turma.course.name}</span>
                                    }
                                </div>
                                <ActionContainer>

                                    {editMode &&
                                        <EditButtons>
                                        <ButtonDelete  onClickFunction={ async () => {
                                            const response  = confirm("Deseja confirmar a operação?");
                                            if(response){
                                                await turmaDeleteControllerView(turma.uuid);
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
            ) : (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}