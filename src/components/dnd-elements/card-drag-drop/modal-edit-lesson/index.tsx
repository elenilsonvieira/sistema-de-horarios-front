import {useEffect, useState} from 'react';
import React from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../components'
import {Main, Form} from './styles';
import {CalendarModel} from "../../../../api/model/CalendarModel";
import {CalendarController} from "../../../../api/controller/CalendarController";
import {ClassroomModel} from "../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../api/controller/ClassroomController";
import {CurricularComponentModel} from "../../../../api/model/CurricularComponentModel";
import {CurricularComponentController} from "../../../../api/controller/CurricularComponentController";
import {TurmaModel} from "../../../../api/model/TurmaModel";
import {TurmaController} from "../../../../api/controller/TurmaController";
import {CourseModel} from "../../../../api/model/CourseModel";
import {CourseController} from "../../../../api/controller/CourseController";
import {ProfessorModel} from "../../../../api/model/ProfessorModel";
import {ProfessorController} from "../../../../api/controller/ProfessorController";
import { LessonModel } from '../../../../api/model/LessonModel';
import {lessonUpdateControllerView} from "./lessonUpdateControllerView";
import { lessonDeleteControllerView } from './lessonDeleteControllerView';
import {errorMessage} from '../../../../components/libs/Toastr';

interface IntfcModal {
    lessonModal: LessonModel;
}

const calendarController = CalendarController.getInstance();
const classroomController = ClassroomController.getInstance();
const curricularComponentController = CurricularComponentController.getInstance();
const turmaController =  TurmaController.getInstance();
const courseController = CourseController.getInstance();
const professorController = ProfessorController.getInstance();

export const LessonModal: React.FC<IntfcModal> = ({lessonModal}: IntfcModal) => {
    const [lessonModel, setLessonModel] = useState<LessonModel>(lessonModal);

    const [calendarList, setCalendarList] = useState<CalendarModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();
    const [turmaList, setTurmaList] = useState<TurmaModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    const [professorList, setProfessorList] = useState<ProfessorModel[]>();

    function getDataObject(): any{
        return {
            lessonModel
        }
    }

    const onSubmit = async () => {
        const data = getDataObject();
        await lessonUpdateControllerView(data).then(() => {window.location.reload()})
    }

    const deleteSubmit = async () => {
        const data = getDataObject();
        await lessonDeleteControllerView(data.uuid);
    }

    const load =  async () => {
        try {
            const calendar  = await calendarController.list();
            const classroom  = await classroomController.list();
            const curricularComponent  = await curricularComponentController.list();
            const turma  = await turmaController.list();
            const course =  await courseController.list();
            const professor =  await professorController.list();

            setCalendarList(calendar);
            setClassroomList(classroom);
            setCurricularComponentList(curricularComponent);
            setTurmaList(turma);
            setCourseList(course);
            setProfessorList(professor);

        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            <Form>
                <InputContent labelText='Calendário:' htmlFor="calendario-s">
                    <SelectArea id="calendario-s" value={lessonModel.calendar.semester} change={(event)=>{
                        const select  = event.target;
                        if (calendarList) {
                            const calendar = calendarList[select.selectedIndex];
                            lessonModel.calendar = calendar;
                        }}}>

                        {
                            calendarList?.map((item) =>(

                                <option key={item.uuid}>{item.semester}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Sala de aula:' htmlFor="classroom-s">
                    <SelectArea id="classroom-s" value={lessonModel.classroom.name+"-"+lessonModel.classroom.classBlockDTO.block} change={(event)=>{
                        const select  = event.target;
                        if (classroomList) {
                            const classroom = classroomList[select.selectedIndex];
                            lessonModel.classroom = classroom;
                        }}}>
                        {
                            classroomList?.map((item) =>(

                                <option key={item.uuid}>{item.name} - {item.classBlockDTO.block}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Disciplina:' htmlFor="disciplina-s">
                    <SelectArea id="disciplina-s" value={lessonModel.curricularComponent.name} change={(event)=>{
                        const select  = event.target;
                        if (curricularComponentList) {
                            const curricularComponent = curricularComponentList[select.selectedIndex];
                            lessonModel.curricularComponent = curricularComponent;
                        }}}>
                        {
                            curricularComponentList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Curso:' htmlFor="Curso-s">
                    <SelectArea id="Curso-s" value={lessonModel.course.name} change={(event)=>{
                        const select  = event.target;
                        if (courseList) {
                            const course = courseList[select.selectedIndex];
                            lessonModel.course = course;
                        }}}>
                        {
                            courseList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Turma:' htmlFor="turma-s">
                    <SelectArea id="turma-s" value={lessonModel.turma.name} change={(event)=>{
                        const select  = event.target;
                        if (turmaList) {
                            const turma = turmaList[select.selectedIndex];
                            lessonModel.turma = turma;
                        }}}>
                        {
                            turmaList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Professor:' htmlFor="professor-s">
                    <SelectArea id="professor-s" value={lessonModel.professor ? lessonModel.professor.name : ""} change={(event)=>{
                        const select  = event.target;
                        if (professorList) {
                            const professor = professorList[select.selectedIndex].uuid;
                            lessonModel.professor = professor;
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