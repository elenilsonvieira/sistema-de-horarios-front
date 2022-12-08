import React, {useEffect, useState} from "react";
import {InfoIcon} from '../../../assets/img';
import {ButtonCancel, ButtonConcluir, InputContent, Row, SelectArea} from '../../../components';
import {ActionContainer, ExpandDetails} from '../edit-info/models/styles/styles';
import {ContainerFilters, ContainerLessons, Info, IntervalContainer, Main, SelectContainer, Title} from './styles';
import {LessonModel} from "../../../api/model/LessonModel";
import {
    classBlockReadControllerView,
    classroomReadControllerView,
    courseReadControllerView,
    gapReadControllerView,
    lessonReadControllerView,
    shiftReadControllerView,
    weekDayReadControllerView
} from "./readControllerView"
import {CourseModel} from "../../../api/model/CourseModel";
import {ClassroomModel} from "../../../api/model/ClassroomModel";
import {ClassBlockModel} from "../../../api/model/ClassBlockModel";
import {GapModel} from "../../../api/model/GapModel";
import {ShiftModel} from "../../../api/model/ShiftModel";
import {WeekDayModel} from "../../../api/model/WeekDayModel";
import {intervalCreateControllerView} from "./createControllerView";
import {deleteControllerView} from "./deleteControllerView";


const SetSchedules = () => {

    const [lessonList, setLessonList] = useState<LessonModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
    const [classBlockList, setClassBlockList] = useState<ClassBlockModel[]>()
    const [gapList, setGapList] = useState<GapModel[]>();
    const [shiftList, setShiftList] = useState<ShiftModel[]>();
    const [weekDayList, setWeekDayList] = useState<WeekDayModel[]>();

    const [course, setCourse] = useState<string>();
    const [classroom, setClassroom] = useState<string>();
    const [block, setBlock] = useState<string>();
    const [gap, setGap] = useState<string>();
    const [shift, setShift] = useState<string>();
    const [weekDay, setWeekDay] = useState<string>();

    const buildIntervalModel = (lessonUuid:string) => {
        return {
            lessonUuid,
            gapUuid:gap,
            weekDayUuid:weekDay,
            shiftUuid:shift
        };
    }
    const load =  async () => {
        try {
            const resultCourse  = await courseReadControllerView();
            const resultClassroom = await classroomReadControllerView();
            const resultClassBlock = await classBlockReadControllerView();

            const resultGap  = await gapReadControllerView();
            const resultShift = await shiftReadControllerView();
            const resultWeekDay = await weekDayReadControllerView();

            setCourseList(resultCourse);
            setClassroomList(resultClassroom);
            setClassBlockList(resultClassBlock);
            setGapList(resultGap);
            setShiftList(resultShift);
            setWeekDayList(resultWeekDay);

            setCourse(undefined);
            setClassroom(undefined);
            setBlock(undefined);

            setGap(resultGap[0].uuid);
            setShift(resultShift[0].uuid);
            setWeekDay(resultWeekDay[0].uuid);
        }catch (Error:any){

        }
    }

    const reload = async () => {
        const filters: any = {}
        if(course !== undefined){
            filters.courseUuid = course;
        }
        if(classroom !== undefined){
            filters.classroom = classroom;
        }
        if(block !== undefined) {
            filters.block = block;
        }
        const resultLesson  = await lessonReadControllerView(filters);
        setLessonList(resultLesson);
    }


    useEffect(() => {
        load();
    },[])

    useEffect(() => {
        reload();
    },[course, classroom, block])


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
                            const classroom = event.target.value;
                            if(classroom != "undefined"){
                                setClassroom(event.target.value);
                            }else{
                                setClassroom(undefined);
                            }
                        }}>
                            <option value="undefined">Selecione uma sala</option>
                            {
                                classroomList?.map((classroom) => (
                                    <option key={classroom.uuid} value={classroom.name}>{classroom.name}</option>))
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
                                classBlockList?.map((classBlock) => (
                                    <option key={classBlock.uuid} value={classBlock.block}>{classBlock.block}</option>))
                            }
                        </SelectArea>
                    </InputContent>
                </SelectContainer>
            </ContainerFilters>
            <ContainerLessons>
            {lessonList != null ? (
                lessonList.map((lesson, index) => {
                    return (
                        <Row key={lesson.uuid} propertyName={`Aula ${index+1} - ${lesson.curricularComponent.name}`}>
                            <ExpandDetails className='expand'>
                                <div>
                                    <span className='title'>Semestre:</span>
                                    <span className='info'>{lesson.calendar.semester}</span>
                                </div>
                                <div>
                                    <span className='title'>Sala de aula:</span>
                                    <span className='info'>{lesson.classroom.name} - {lesson.classroom.classBlockDTO.block}</span>
                                </div>
                                <div>
                                    <span className='title'>Disciplina:</span>
                                    <span className='info'>{lesson.curricularComponent.name}</span>
                                </div>
                                <div>
                                    {lesson.interval !== null ? 
                                    <>
                                        <span className='title'>Programação:</span>
                                        <span className='info'>{lesson.interval.weekDayDTO.weekDay}, {lesson.interval.shiftDTO.shift} - {lesson.interval.gapDTO.gap}</span>
                                    </>
                                        :
                                        <IntervalContainer>
                                            <div>
                                                <span className='title'>Dia da semana:</span>
                                                <SelectArea id={'c'+index} change={(event) => {
                                                    const select  = event.target;
                                                    if (weekDayList) {
                                                        const weekDay = weekDayList[select.selectedIndex];
                                                        try {
                                                            setWeekDay(weekDay.uuid);
                                                        }catch (error) {
                                                            setWeekDay(undefined);
                                                        }
                                                    }
                                                }}>
                                                    {
                                                        weekDayList?.map((turma) => (
                                                            <option key={turma.uuid}>{turma.weekDay}</option>))
                                                    }
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Turno:</span>
                                                <SelectArea id={'c'+index} change={(event) => {
                                                    const select  = event.target;
                                                    if (shiftList) {
                                                        const shift = shiftList[select.selectedIndex];
                                                        try {
                                                            setShift(shift.uuid);
                                                        }catch (error) {
                                                            setShift(undefined);
                                                        }
                                                    }
                                                }}>
                                                    {
                                                        shiftList?.map((turma) => (
                                                            <option key={turma.uuid}>{turma.shift}</option>))
                                                    }
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Horário:</span>
                                                <SelectArea id={'c'+index} change={(event) => {
                                                    const select  = event.target;
                                                    if (gapList) {
                                                        const gap = gapList[select.selectedIndex];
                                                        try {
                                                            setGap(gap.uuid);
                                                        }catch (error) {
                                                            setGap(undefined);
                                                        }
                                                    }
                                                }}>
                                                    {
                                                        gapList?.map((turma) => (
                                                            <option key={turma.uuid}>{turma.gap}</option>))
                                                    }
                                                </SelectArea>
                                            </div>
                                        </IntervalContainer>
                                    }
                                </div>
                                <ActionContainer>
                                    {lesson.interval === null ?
                                        <ButtonConcluir onClickFunction={ async () => {
                                            const data  = buildIntervalModel(lesson.uuid);
                                            await intervalCreateControllerView(data);
                                            setGap(gapList? gapList[0].uuid : "");
                                            setShift(shiftList? shiftList[0].uuid : "");
                                            setWeekDay(weekDayList? weekDayList[0].uuid : "");
                                            await reload();
                                        }} />
                                        :
                                        <ButtonCancel onClickFunction={ async () => {
                                            await deleteControllerView(lesson.interval.uuid,lesson.uuid);
                                            setGap(gapList? gapList[0].uuid : "");
                                            setShift(shiftList? shiftList[0].uuid : "");
                                            setWeekDay(weekDayList? weekDayList[0].uuid : "");
                                            await reload();
                                        }}/> //seta o intervalo da aula atual como null
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                        </Row>
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