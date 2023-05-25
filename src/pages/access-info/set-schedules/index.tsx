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
import {TurmaModel} from '../../../api/model/TurmaModel';
import useRefreshContext from "../../../hooks/useRefreshContext";
import { turmaReadControllerView } from "../edit-info/models/turma/turmaReadControllerView";
import { CourseModel } from "../../../api/model/CourseModel";
import { courseReadControllerView } from "../edit-info/models/course/courseReadControllerView";

export const SetSchedules = () => {

    const [lessonList, setLessonList] = useState<LessonModel[]>();
    const [intervalList, setListInterval] = useState<IntervalModel[]>();
    const [classList, setClassList] = useState<TurmaModel[]>();
    const [courseList, setCourseList] = useState<CourseModel[]>();
    const [defaultListLesson, setDefaultListLesson] = useState<LessonModel[]>();

    const [teacherOptions, setTeacherOptions] = useState<string[]>(["Todos"])
    // const [classOptions, setClassOptions] = useState<string[]>(["Todos"])

    const { bool } = useRefreshContext()

    const load = async () => {
        const lessons = await lessonReadControllerView();
        const intervals = await intervalReadControllerView();
        let classListts = await turmaReadControllerView();
        classListts = classListts.filter((c) => c.uuid !== 'default')
        const courses = await courseReadControllerView();

        setClassList(classListts)
        setDefaultListLesson(lessons);
        setLessonList(lessons)
        setListInterval(intervals);
        setCourseList(courses);

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
                    <h2>Filtros</h2>
                <div>
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
                <div>
                    <label>
                        <p>Curso</p>
                        <select onChange={(e) => handleChangeFilter(e.target.value)}>
                            {courseList?.map((course, k) => (
                                <option key={k} value={course.name} >{course.name}</option>
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
                            {classList.map((classs: TurmaModel, k) => (
                                <BoardContainer key={k} label={classs.name} idClass={classs.uuid as string} listLesson={lessonList} intervalList={intervalList}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Não há itens</p>
                )}
            </Main>
        </DndProvider>
    )
}