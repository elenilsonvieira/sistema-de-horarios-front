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
import { TurmaModel } from '../../../api/model/TurmaModel';
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
    const [defaultListClass, setDefaultListClass] = useState<TurmaModel[]>();

    const [teacherOptions, setTeacherOptions] = useState<string[]>(["Todos"])
    // const [classOptions, setClassOptions] = useState<string[]>(["Todos"])

    const { bool } = useRefreshContext()

    const load = async () => {
        const lessons = await lessonReadControllerView();
        const intervals = await intervalReadControllerView();
        let classList = await turmaReadControllerView();
        const courses = await courseReadControllerView();
        classList = classList.filter((c) => c.uuid !== 'default')
        setDefaultListClass(classList)
        const uuid: String = courses.filter((course) => course.uuid === classList[0].course_uuid)[0].uuid
        classList = classList.filter((classs) => classs.course_uuid === uuid)
        
        
        setClassList(classList)
        setDefaultListLesson(lessons);
        setLessonList(lessons.filter((lesson) => lesson.course.name === courses[0].name))
        setListInterval(intervals);
        setCourseList(courses);

        prepareDefaultOptions(lessons)
        
        // handleChangeFilter(courses[0].name, 'course')
    }

    function prepareDefaultOptions(arr: []) {

        const optsTeacher = arr.map((lesson: LessonModel) => lesson.professor.name)
        // const optsClass = arr.map((lesson: LessonModel) => lesson.turma.name)

        setTeacherOptions(filterNames(optsTeacher))
        // setClassOptions(filterNames(optsClass))
    }

    function filterNames(arr: string[]): string[] {
        arr = arr.filter((e, i) => {
            return arr.indexOf(e) === i;
        });
        return arr
    }

    useEffect(() => {
        load();

    }, [bool])

    function handleChangeFilter(value: String, type: String) {
        if (type === "course") {
            const uuid: String | undefined = courseList?.filter(course => course.name === value)[0]?.uuid
            setClassList(defaultListClass?.filter(classs => classs.course_uuid === uuid))
            setLessonList(defaultListLesson?.filter(lesson => lesson.course.name === value))
        }
        if (type === "teacher") {
            if (value === "Todos") {
                setLessonList(defaultListLesson)
                return
            } else {
                setLessonList(defaultListLesson?.filter((lesson) => lesson.professor.name === value))

            }
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Filters>
                <h2>Filtros</h2>
                <div>
                    <label>
                        <p>Professores</p>
                        <select onChange={(e) => handleChangeFilter(e.target.value, "teacher")}>
                            <option value={"Todos"}>Todos</option>
                            {teacherOptions.map((teacher, k) => (
                                <option key={k} value={teacher} >{teacher}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <p>Cursos</p>
                        <select onChange={(e) => handleChangeFilter(e.target.value, "course")}>
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
                                <BoardContainer key={k} label={classs.name} idClass={classs.uuid as string} listLesson={lessonList} intervalList={intervalList} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Não há itens</p>
                )}

                {classList?.length === 0 && <p>Não há itens</p>}
            </Main>
        </DndProvider>
    )
}