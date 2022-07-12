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
import { CalendarModel } from '../../../../../api/model/CalendarModel';
import { CurricularComponentModel } from '../../../../../api/model/CurricularComponentModel';
import { ProfessorModel } from '../../../../../api/model/ProfessorModel';
import { ClassroomModel } from '../../../../../api/model/ClassroomModel';
import { CourseModel } from '../../../../../api/model/CourseModel';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { CalendarController } from '../../../../../api/controller/CalendarController';
import { ClassroomController } from '../../../../../api/controller/ClassroomController';
import { CurricularComponentController } from '../../../../../api/controller/CurricularComponentController';
import { ProfessorController } from '../../../../../api/controller/ProfessorController';
import { TurmaController } from '../../../../../api/controller/TurmaController';
import { CourseController } from '../../../../../api/controller/CourseController';

const calendarController = CalendarController.getInstance();
const classroomController = ClassroomController.getInstance();
const curricularComponentController = CurricularComponentController.getInstance();
const professorController = ProfessorController.getInstance();
const turmaController =  TurmaController.getInstance();
const courseController = CourseController.getInstance();

export const Lesson = () => {

    const [calendarUuid, setCalendarUuid] = useState<string>();
    const [classroomUuid, setClassroomUuid] = useState<string>();
    const [curricularComponentUuid, setCurricularComponentUuid] = useState<string>();
    const [professorUuid, setProfessorUuid] = useState<string>();
    const [turmaUuid, setTurmaUuid] = useState<string>();
    const [courseUuid, setCourseUuid] = useState<string>();

    const [calendarList, setCalendarList] = useState<CalendarModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();
    const [professorList, setProfessorList] = useState<ProfessorModel[]>();
    const [turmaList, setTurmaList] = useState<TurmaModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    
    const [editMode, setEditMode] = useState<boolean>(true);
    const [lessonList, setLessonList] = useState<LessonModel[]>();

    const handleEditMode = () => {
        setEditMode(false);
    }
    const load =  async () => {
        try {
            const result  = await lessonReadControllerView();
            setLessonList(result);

            const calendar  = await calendarController.list();
            const classroom  = await classroomController.list();
            const curricularComponent  = await curricularComponentController.list();
            const professor = await professorController.list();
            const turma  = await turmaController.list();
            const course =  await courseController.list();

            setCalendarList(calendar);
            setClassroomList(classroom);
            setCurricularComponentList(curricularComponent);
            setProfessorList(professor);
            setTurmaList(turma);
            setCourseList(course);
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
                                    <span className='title'>Calendário:</span>
                                    {editMode ?
                                        <SelectArea id={'calendar'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (calendarList) {
                                                const uuid = calendarList[select.selectedIndex].uuid;
                                                setCalendarUuid(uuid);
                                            }}}>
                                            {
                                                calendarList?.map((item) =>(

                                                    <option key={item.uuid}>{item.semester}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.calendar.semester}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Sala de aula:</span>
                                    {editMode ?
                                        <SelectArea id={'classroom'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (classroomList) {
                                                const uuid = classroomList[select.selectedIndex].uuid;
                                                setClassroomUuid(uuid);
                                            }}}>
                                            {
                                                classroomList?.map((item) =>(

                                                    <option key={item.uuid}>{item.name} - {item.block}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.classroom.name} - {lesson.classroom.block}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Disciplina:</span>
                                    {editMode ?
                                        <SelectArea id={'curricularComponent'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (curricularComponentList) {
                                                const uuid = curricularComponentList[select.selectedIndex].uuid;
                                                setCurricularComponentUuid(uuid);
                                            }}}>
                                            {
                                                curricularComponentList?.map((item) =>(
                                                    <option key={item.uuid}>{item.name}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.curricularComponent.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Professor:</span>
                                    {editMode ?
                                        <SelectArea id={'professor'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (professorList) {
                                                const uuid = professorList[select.selectedIndex].uuid;
                                                setProfessorUuid(uuid);
                                            }}}>
                                            {
                                                professorList?.map((item) =>(
                                                    <option key={item.uuid}>{item.name}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.professor.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Turma:</span>
                                    {editMode ?
                                        <SelectArea id={'turm'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (turmaList) {
                                                const uuid = turmaList[select.selectedIndex].uuid;
                                                setTurmaUuid(uuid);
                                            }}}>
                                            {
                                                turmaList?.map((item) =>(
                                                    <option key={item.uuid}>{item.name} - {item.course.name}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.turma.name}</span>
                                    }
                                </div>
                                <div className={editMode? 'edit-mode' : ''}>
                                    <span className='title'>Curso:</span>
                                    {editMode ?
                                        <SelectArea id={'course'+index} change={(event)=>{
                                            const select  = event.target;
                                            if (courseList) {
                                                const uuid = courseList[select.selectedIndex].uuid;
                                                setCourseUuid(uuid);
                                            }}}>
                                            {
                                                courseList?.map((item) =>(
                                                    <option key={item.uuid}>{item.name}</option>
                                                ))
                                            }
                                        </SelectArea>
                                        :
                                        <span className='info'>{lesson.curricularComponent.course.name}</span>
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
