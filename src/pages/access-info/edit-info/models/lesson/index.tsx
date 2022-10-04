import {useEffect, useState} from 'react';
import {Row, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Main,
    ExpandDetails,
    ActionContainer,
    EditButtons} from '../styles/styles';
import {lessonReadControllerView} from "./lessonReadControllerView";
import {LessonModel} from "../../../../../api/model/LessonModel";
import {lessonDeleteControllerView} from "./lessonDeleteControllerView";
import {ModelProps} from '../interfaces';

export const Lesson: React.FC<ModelProps> = ({editMode}: ModelProps) => {

    const [lessonList, setLessonList] = useState<LessonModel[]>();

    const load =  async () => {
        try {
            const result  = await lessonReadControllerView();
            setLessonList(result);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            {lessonList != null ? (
                lessonList.map((lesson, index) => {
                    return (
                        <Row propertyName={`Aula ${index+1} - ${lesson.curricularComponent.name} - ${lesson.course.name}`}>
                            <ExpandDetails className='expand'>
                                <div className={''}>
                                    <span className='title'>Calendário:</span>
                                    {
                                        <span className='info'>{lesson.calendar.semester}</span>
                                    }
                                </div>
                                <div className={''}>
                                    <span className='title'>Sala de aula:</span>
                                    {
                                        <span className='info'>{lesson.classroom.classNameDTO.name} - {lesson.classroom.classBlockDTO.block}</span>
                                    }
                                </div>
                                <div className={''}>
                                    <span className='title'>Disciplina:</span>
                                    {
                                        <span className='info'>{lesson.curricularComponent.name}</span>
                                    }
                                </div>
                                <div className={''}>
                                    <span className='title'>Professor:</span>
                                    {
                                        <span className='info'>{lesson.professor.name}</span>
                                    }
                                </div>
                                <div className={''}>
                                    <span className='title'>Turma:</span>
                                    {
                                        <span className='info'>{lesson.turma.name}</span>
                                    }
                                </div>
                                <div className={''}>
                                    <span className='title'>Curso:</span>
                                    {
                                        <span className='info'>{lesson.course.name}</span>
                                    }

                                </div>
                                <ActionContainer>
                                    {
                                        <EditButtons>
                                            <ButtonDelete  onClickFunction={ async () => {
                                                const response  = confirm("Deseja confirmar a operação?");
                                                if(response){
                                                    await lessonDeleteControllerView(lesson.uuid);
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
