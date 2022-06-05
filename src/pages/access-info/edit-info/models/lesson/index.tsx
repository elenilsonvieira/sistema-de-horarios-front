import {useEffect, useState} from 'react';
import {SelectArea, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../../../components';
import {Expandir} from '../../../../../assets/img';
import {Main,
    RowVisualizer, 
    ExpandDetails,
    ActionContainer} from '../styles/styles';
import {lessonReadControllerView} from "./lessonReadControllerView";
import {LessonModel} from "../../../../../api/model/LessonModel";
import {lessonDeleteControllerView} from "./lessonDeleteControllerView";

export const Lesson = () => {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [lessonList, setLessonList] = useState<LessonModel[]>();

    const handleEditMode = () => {
        setEditMode(false);
    }
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
                        <RowVisualizer key={lesson.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>Aula {index+1} - {lesson.curricularComponent.name}</span>
                                <label htmlFor={'expand-radio'+index} onClick={handleEditMode}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Semestre:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="">2020.1</option>
                                            <option value="">2020.2</option>
                                            <option value="">2021.1</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.calendar.semester}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Sala de aula:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="">Sala 1</option>
                                            <option value="">Sala 2</option>
                                            <option value="">Sala 3</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.classroom.nome} - {lesson.classroom.block}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Disciplina:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="">DAC</option>
                                            <option value="">P1</option>
                                            <option value="">BD1</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.curricularComponent.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Professor:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="">Cleyton</option>
                                            <option value="">Elenilson</option>
                                            <option value="">Thiago</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.professor.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Turma:</span>
                                    {editMode ?
                                        <SelectArea id={'c'+index}>
                                            <option value="">Turma 1</option>
                                            <option value="">Turma 2</option>
                                            <option value="">Turma 3</option>
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.turma.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Curso:</span>
                                        <span className='info'>{lesson.curricularComponent.course.name}</span>

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
                                                await lessonDeleteControllerView(lesson.uuid);
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
            ) : (
                <p>Não há itens</p>
            )}
        </ Main>
    );
}
