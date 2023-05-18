import { useState, useEffect } from "react"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { Main, Filters } from './styles';
import { LessonModel } from '../../../api/model/LessonModel';
import { lessonReadControllerView } from "./lessonReadControllerView";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { intervalReadControllerView } from "./intervalReadControllerView";
import { BoardContainer } from "../../../components/dnd-elements/board-container";
import { BoardList } from '../../../components/dnd-elements/board-list';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import useRefreshContext from "../../../hooks/useRefreshContext";
import { turmaReadControllerView } from "../edit-info/models/turma/turmaReadControllerView";

export const SetSchedules = () => {

    const [lessonList, setLessonList] = useState<LessonModel[]>();
    const [intervalList, setListInterval] = useState<IntervalModel[]>();
    const [classList, setClassList] = useState<TurmaModel[]>();
    const [defaultListLesson, setDefaultListLesson] = useState<LessonModel[]>();

    const [teacherOptions, setTeacherOptions] = useState<string[]>(["Todos"])
    // const [classOptions, setClassOptions] = useState<string[]>(["Todos"])

    const { bool } = useRefreshContext()

    const load = async () => {
        const lessons = await lessonReadControllerView();
        const intervals = await intervalReadControllerView();
        const classListts = await turmaReadControllerView();

        setClassList(classListts)
        setDefaultListLesson(lessons);
        setLessonList(lessons)
        setListInterval(intervals);

        prepareDefaultOptions(lessons)
    }

    function prepareDefaultOptions(arr: []) {

        const optsTeacher = arr.map((lesson: LessonModel) => lesson.professor.name)
        // const optsClass = arr.map((lesson: LessonModel) => lesson.turma.name)

        setTeacherOptions(filterNames(optsTeacher))
        // setClassOptions(filterNames(optsClass))
    }

    function filterNames(arr: string[]): string[] {
        arr = arr.filter((element, index) => {
            return arr.indexOf(element) === index;
        });
        return arr
    }

    function getIdClass(name: string) {
        return classList?.filter((c) => c.name === name)[0].uuid
    }

    useEffect(() => {
        load();

    }, [bool])

    function handleChangeFilter(value: String) {
        if (value === "Todos") {
            setLessonList(defaultListLesson)
            return
        }
        setLessonList(defaultListLesson?.filter((lesson) => lesson.professor.name === value))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Filters>
                <div>
                    <h2>Filtros</h2>
                    <label>
                        <p>Professores</p>
                        <select onChange={(e) => handleChangeFilter(e.target.value)}>
                            <option value={"Todos"}>Todos</option>
                            {teacherOptions.map((teacher, k) => (
                                <option key={k} value={teacher} >{teacher}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </Filters>
            <Main>
                {lessonList && intervalList && classList ? (
                    <>
                        <div>
                            <BoardList label={'Aulas Livres'} listLesson={lessonList} />
                        </div>
                        <div>
                            <BoardContainer key={"ADS1ºPeriodo"} label={'1º Período'} idClass={getIdClass('1 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS2ºPeriodo"} label={'2º Período'} idClass={getIdClass('2 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS3ºPeriodo"} label={'3º Período'} idClass={getIdClass('3 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS4ºPeriodo"} label={'4º Período'} idClass={getIdClass('4 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS5ºPeriodo"} label={'5º Período'} idClass={getIdClass('5 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS6ºPeriodo"} label={'6º Período'} idClass={getIdClass('6 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS7ºPeriodo"} label={'7º Período'} idClass={getIdClass('7 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                        </div>
                    </>
                ) : (
                    <p>Não há itens</p>
                )}
            </Main>
        </DndProvider>
    )
}