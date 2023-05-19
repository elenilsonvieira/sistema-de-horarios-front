import React, {useEffect, useState} from 'react';
import {ButtonAction, InputContent, SelectArea} from '../../../../components'
import {Form, Main} from './styles';
import {CalendarModel} from "../../../../api/model/CalendarModel";
import {CalendarController} from "../../../../api/controller/CalendarController";
import {ClassroomModel} from "../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../api/controller/ClassroomController";
import {CurricularComponentModel} from "../../../../api/model/CurricularComponentModel";
import {CurricularComponentController} from "../../../../api/controller/CurricularComponentController";
import {CourseModel} from "../../../../api/model/CourseModel";
import {CourseController} from "../../../../api/controller/CourseController";
import {ProfessorModel} from "../../../../api/model/ProfessorModel";
import {ProfessorController} from "../../../../api/controller/ProfessorController";
import {LessonModel} from '../../../../api/model/LessonModel';
import {lessonUpdateControllerView} from "./lessonUpdateControllerView";
import {lessonDeleteControllerView} from './lessonDeleteControllerView';

interface IntfcModal {
    lessonModal: LessonModel;
}

const calendarController = CalendarController.getInstance();
const classroomController = ClassroomController.getInstance();
const curricularComponentController = CurricularComponentController.getInstance();
const courseController = CourseController.getInstance();
const professorController = ProfessorController.getInstance();

export const LessonModal: React.FC<IntfcModal> = ({lessonModal}: IntfcModal) => {
    const [lessonModel, setLessonModel] = useState<LessonModel>(lessonModal);

    const [calendarList, setCalendarList] = useState<CalendarModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    const [professorList, setProfessorList] = useState<ProfessorModel[]>();

    const [calendarValue, setCalendarValue] = useState(lessonModel.calendar.semester);
    const [classroomValue, setClassroomValue] =
    useState(lessonModel.classroom.name + "-" + lessonModel.classroom.classBlockDTO.block);
    const [curricularComponentValue, setCurricularComponentValue] = useState(lessonModel.curricularComponent.name);
    const [courseValue, setCourseValue] = useState(lessonModel.turma.name);
    const [professorValue, setProfessorValue] = useState(lessonModel.professor ? lessonModel.professor.name : "");

    function getDataObject(): any{
        return {
            lessonModel
        }
    }

    const onSubmit = async () => {
        const data = getDataObject();
        console.log(data);
        await lessonUpdateControllerView(data).then(() => { window.location.reload() })
    }

    const deleteSubmit = async () => {
        const data = getDataObject();
        console.log(data.lessonModel.uuid)
        await lessonDeleteControllerView(data.lessonModel.uuid).then(() => { window.location.reload() })
    }

    const load =  async () => {
        try {
            const calendar  = await calendarController.list();
            const classroom  = await classroomController.list();
            const curricularComponent  = await curricularComponentController.list();
            const course =  await courseController.list();
            const professor =  await professorController.list();

            setCalendarList(calendar);
            setClassroomList(classroom);
            setCurricularComponentList(curricularComponent);
            setCourseList(course);
            setProfessorList(professor);

        }catch (Error:any){
            console.log(Error);
        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            <Form>
                <InputContent labelText='Calendário:' htmlFor="calendario-s">
                    <SelectArea id="calendario-s" value={calendarValue} change={(event)=> {
                        const select  = event.target;
                        if (calendarList) {
                            lessonModel.calendar = calendarList[select.selectedIndex];
                            setCalendarValue(lessonModel.calendar.semester);
                        }}}>

                        {
                            calendarList?.map((item) =>(

                                <option key={item.uuid}>{item.semester}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Sala de aula:' htmlFor="classroom-s">
                    <SelectArea id="classroom-s" value={classroomValue} change={(event)=>{
                        const select  = event.target;
                        if (classroomList) {
                            lessonModel.classroom = classroomList[select.selectedIndex];
                            setClassroomValue(lessonModel.classroom.name +
                            "-" + lessonModel.classroom.classBlockDTO.block);
                        }}}>
                        {
                            classroomList?.map((item) =>(

                                <option key={item.uuid}>{item.name} - {item.classBlockDTO.block}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Disciplina:' htmlFor="disciplina-s">
                    <SelectArea id="disciplina-s" value={curricularComponentValue} change={(event)=>{
                        const select  = event.target;
                        if (curricularComponentList) {
                            lessonModel.curricularComponent = curricularComponentList[select.selectedIndex];
                            setCurricularComponentValue(lessonModel.curricularComponent.name);
                        }}}>
                        {
                            curricularComponentList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Curso:' htmlFor="Curso-s">
                    <SelectArea id="Curso-s" value={courseValue} change={(event)=>{
                        const select  = event.target;
                        if (courseList) {
                            lessonModel.course = courseList[select.selectedIndex];
                            setCourseValue(lessonModel.course.name);
                        }}}>
                        {
                            courseList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Professor:' htmlFor="professor-s">
                    <SelectArea id="professor-s" value={professorValue} change={(event)=>{
                        const select  = event.target;
                        if (professorList) {
                            lessonModel.professor = professorList[select.selectedIndex].uuid;
                            setProfessorValue(lessonModel.professor ? lessonModel.professor.name : "");
                        }}}>
                        {
                            professorList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="Editar aula" onClickFunction={onSubmit}/>
            <ButtonAction textButton="Deletar aula" onClickFunction={deleteSubmit}/>
        </ Main>
    );
}