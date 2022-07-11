import React, {useEffect, useState} from "react";
import {InfoIcon, Expandir} from '../../../assets/img';
import {SelectArea, InputContent, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../components';
import {ActionContainer, ExpandDetails, RowVisualizer} from '../edit-info/models/styles/styles';
import {Main, SelectContainer, Info, Title, ContainerFilters, ContainerLessons, IntervalContainer} from './styles';
import {LessonModel} from "../../../api/model/LessonModel";
import {classroomReadControllerView, courseReadControllerView, lessonReadControllerView} from "./readControllerView"
import {CourseModel} from "../../../api/model/CourseModel";
import {ClassroomModel} from "../../../api/model/ClassroomModel";


const SetSchedules = () => {

    const [lessonList, setLessonList] = useState<LessonModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>()

    const [course, setCourse] = useState<string>();
    const [className, setClassName] = useState<string>();
    const [block, setBlock] = useState<string>();

    const load =  async () => {
        try {
            const resultLesson  = await lessonReadControllerView({});
            const resultCourse  = await courseReadControllerView();
            const resultClassroom = await classroomReadControllerView();

            setLessonList(resultLesson);
            setCourseList(resultCourse);
            setClassroomList(resultClassroom);

            setCourse(undefined);
            setClassName(undefined);
            setBlock(undefined)
        }catch (Error:any){

        }
    }

    const reload = async (data: any) => {
        const resultLesson  = await lessonReadControllerView(data);
        setLessonList(resultLesson);
    }


    useEffect(() => {
        load();
    },[])

    useEffect(() => {
        const filters: any = {}
        if(course !== undefined){
            filters.courseUuid = course;
        }
        if(className !== undefined){
            filters.className = className;
        }
        if(block !== undefined) {
            filters.block = block;
        }
        reload(filters);
    },[course, className, block])


    return (
        <Main>
            <Title>
                Montar horários
            </Title>
            <ContainerFilters>
                <Info>
                    <img src={InfoIcon} alt="" />
                    <span>
                        Filtre por curso, sala e bloco para montar horarios
                    </span>
                </Info>

                <SelectContainer>
                    <InputContent labelText="Selecione o curso:">
                        <SelectArea id={"course"} change={ async (event) => {

                            const select  = event.target;
                            if (courseList) {
                                const courseUuid = courseList[select.selectedIndex-1];
                                try {
                                    setCourse(courseUuid.uuid);
                                }catch (error) {
                                    setCourse(undefined);
                                }
                            }
                        }}>
                            <option value="undefined">Selecione um curso</option>
                            {
                                courseList?.map((turma) => (
                                    <option key={turma.uuid}>{turma.name}</option>))
                            }
                        </SelectArea>
                    </InputContent>
                    <InputContent labelText="Selecione a Sala:">
                        <SelectArea id={`turma-${course}`} change={(event) => {
                            const className = event.target.value;
                            if(className != "undefined"){
                                setClassName(event.target.value);
                            }else{
                                setClassName(undefined);
                            }
                        }}>
                            <option value="undefined">Selecione uma sala</option>
                            {
                                classroomList?.map((turma) => (
                                    <option key={turma.uuid} value={turma.name}>{turma.name}</option>))
                            }
                        </SelectArea>
                    </InputContent>
                    <InputContent labelText="Selecione o bloco:">
                        <SelectArea id={`turma-${course}`} change={(event) => {
                            const block = event.target.value;
                            if(block != "undefined"){
                                setBlock(event.target.value);
                            }else{
                                setBlock(undefined);
                            }
                        }}>
                            <option value="undefined">Selecione um bloco</option>
                            {
                                classroomList?.map((turma) => (
                                    <option key={turma.uuid} value={turma.block}>{turma.block}</option>))
                            }
                        </SelectArea>
                    </InputContent>
                </SelectContainer>
            </ContainerFilters>
            <ContainerLessons>
            {lessonList != null ? (
                lessonList.map((lesson, index) => {
                    return (
                        <RowVisualizer key={lesson.uuid}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>Aula {index+1} - {lesson.curricularComponent.name}</span>
                                <label htmlFor={'expand-radio'+index}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div>
                                    <span className='title'>Semestre:</span>
                                    <span className='info'>{lesson.calendar.semester}</span>
                                </div>
                                <div>
                                    <span className='title'>Sala de aula:</span>
                                    <span className='info'>{lesson.classroom.name} - {lesson.classroom.block}</span>
                                </div>
                                <div>
                                    <span className='title'>Disciplina:</span>
                                    <span className='info'>{lesson.curricularComponent.name}</span>
                                </div>
                                <div>
                                    {lesson.interval !== null ? 
                                    <>
                                        <span className='title'>Intervalo:</span>
                                        <span className='info'>{lesson.interval}</span>
                                    </>
                                        :
                                        <IntervalContainer>
                                            <div>
                                                <span className='title'>Dia da semana:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">segunda</option>
                                                    <option value="">terca</option>
                                                    <option value="">quarta</option>
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Turno:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">manhâ</option>
                                                    <option value="">tarde</option>
                                                    <option value="">noite</option>
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Horário:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">07:00</option>
                                                    <option value="">13:00</option>
                                                    <option value="">18:00</option>
                                                </SelectArea>
                                            </div>
                                        </IntervalContainer>
                                    }
                                </div>
                                <ActionContainer>
                                    {lesson.interval === null ?
                                        <ButtonConcluir />
                                        :
                                        <ButtonCancel /> //seta o intervalo da aula atual como null
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                        </RowVisualizer>
                    )
                })
            ) : (
                <p>Não há itens</p>
            )}
            </ContainerLessons>
        </Main>
    )
}

export {SetSchedules};