import {useEffect, useState} from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import { Form, Main } from '../styles/styles';
import {CalendarModel} from "../../../../../api/model/CalendarModel";
import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {TurmaModel} from "../../../../../api/model/TurmaModel";
import {CourseModel} from "../../../../../api/model/CourseModel";
import {CalendarController} from "../../../../../api/controller/CalendarController";
import {ClassroomController} from "../../../../../api/controller/ClassroomController";
import {CurricularComponentController} from "../../../../../api/controller/CurricularComponentController";
import {TurmaController} from "../../../../../api/controller/TurmaController";
import {lessonControllerView} from "./lessonControllerView";
import {CourseController} from "../../../../../api/controller/CourseController";
import {errorMessage} from '../../../../../components/libs/Toastr';

const calendarController = CalendarController.getInstance();
const classroomController = ClassroomController.getInstance();
const curricularComponentController = CurricularComponentController.getInstance();
const turmaController =  TurmaController.getInstance();
const courseController = CourseController.getInstance();

export const Lesson = () => {

    const [calendarUuid, setCalendarUuid] = useState<string>();
    const [classroomUuid, setClassroomUuid] = useState<string>();
    const [curricularComponentUuid, setCurricularComponentUuid] = useState<string>();
    const [turmaUuid, setTurmaUuid] = useState<string>();
    const [courseUuid, setCourseUuid] = useState<string>();

    const [calendarList, setCalendarList] = useState<CalendarModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();
    const [turmaList, setTurmaList] = useState<TurmaModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();

    function getDataObject(): any{
        return {
            calendarUuid,
            classroomUuid,
            curricularComponentUuid,
            turmaUuid,
            courseUuid
        }
    }

    const validate = () => {
        const errors = [];

        if (!calendarUuid) {
            errors.push('Calend??rio ?? obrigat??rio');
        }
        if (!classroomUuid) {
            errors.push('Sala de aula ?? obrigat??ria');
        }
        if (!curricularComponentUuid) {
            errors.push('Disciplina ?? obrigat??ria');
        }
        if (!turmaUuid) {
            errors.push('Turma ?? obrigat??ria');
        }
        if (!courseUuid) {
            errors.push('Curso ?? obrigat??rio');
        }
        return errors;
    }

    const onSubmit = async () => {
        const errors = validate();

        if(errors.length > 0) {
            errors.forEach((message) => {
                errorMessage(message);
            })
        } else {
            const data = getDataObject();
            await lessonControllerView(data);
        }
    }

    const load =  async () => {
        try {
            const calendar  = await calendarController.list();
            const classroom  = await classroomController.list();
            const curricularComponent  = await curricularComponentController.list();
            const turma  = await turmaController.list();
            const course =  await courseController.list();

            setCalendarList(calendar);
            setClassroomList(classroom);
            setCurricularComponentList(curricularComponent);
            setTurmaList(turma);
            setCourseList(course);

            setCalendarUuid(calendar[0].uuid);
            setClassroomUuid(classroom[0].uuid);
            setCurricularComponentUuid(curricularComponent[0].uuid);
            setTurmaUuid(turma[0].uuid);
            setCourseUuid(course[0].uuid);
        }catch (Error:any){

        }
    }

    useEffect(() => {
        load();
    },[])

    return (
        <Main>
            <Form>
                <InputContent labelText='Calend??rio:' htmlFor="calendario-s">
                    <SelectArea id="calendario-s" change={(event)=>{
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
                </InputContent>
                <InputContent labelText='Sala de aula:' htmlFor="classroom-s">
                    <SelectArea id="classroom-s" change={(event)=>{
                        const select  = event.target;
                        if (classroomList) {
                            const uuid = classroomList[select.selectedIndex].uuid;
                            setClassroomUuid(uuid);
                        }}}>
                        {
                            classroomList?.map((item) =>(

                                <option key={item.uuid}>{item.name} - {item.classBlockDTO.block}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Disciplina:' htmlFor="disciplina-s">
                    <SelectArea id="disciplina-s" change={(event)=>{
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
                </InputContent>
                <InputContent labelText='Curso:' htmlFor="Curso-s">
                    <SelectArea id="Curso-s" change={(event)=>{
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
                </InputContent>
                <InputContent labelText='Turma:' htmlFor="turma-s">
                    <SelectArea id="turma-s" change={(event)=>{
                        const select  = event.target;
                        if (turmaList) {
                            const uuid = turmaList[select.selectedIndex].uuid;
                            setTurmaUuid(uuid);
                        }}}>
                        {
                            turmaList?.map((item) =>(
                                <option key={item.uuid}>{item.name}</option>
                            ))
                        }
                    </SelectArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar aula" onClickFunction={onSubmit}/>
        </ Main>
    );
}