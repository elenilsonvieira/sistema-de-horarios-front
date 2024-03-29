import { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { Main, Filters } from './styles';
import { LessonModel } from '../../../api/model/LessonModel';
import { lessonReadControllerView } from './lessonReadControllerView';
import { IntervalModel } from '../../../api/model/IntervalModel';
import { intervalReadControllerView } from './intervalReadControllerView';
import { BoardContainer } from '../../../components/dnd-elements/board-container';
import { BoardList } from '../../../components/dnd-elements/board-list';
import { TurmaModel } from '../../../api/model/TurmaModel';
import useRefreshContext from '../../../hooks/useRefreshContext';
import { turmaReadControllerView } from '../edit-info/models/turma/turmaReadControllerView';
import { CourseModel } from '../../../api/model/CourseModel';
import { courseReadControllerView } from '../edit-info/models/course/courseReadControllerView';

export const SetSchedules = () => {
  const [lessonList, setLessonList] = useState<LessonModel[]>();
  const [backupLessonList, setBackupLessonList] = useState<LessonModel[]>();

  const [intervalList, setListInterval] = useState<IntervalModel[]>();
  const [classList, setClassList] = useState<TurmaModel[]>();
  const [courseList, setCourseList] = useState<CourseModel[]>();
  const [defaultListLesson, setDefaultListLesson] = useState<LessonModel[]>();
  const [defaultListClass, setDefaultListClass] = useState<TurmaModel[]>();

  const [teacherOptions, setTeacherOptions] = useState<string[]>([]);
  // const [classOptions, setClassOptions] = useState<string[]>(["Todos"])

  const { bool } = useRefreshContext();

  const load = async () => {
    let lessons = await lessonReadControllerView();
    const intervals = await intervalReadControllerView();
    let classList = await turmaReadControllerView();
    const courses = await courseReadControllerView();
    classList = classList.filter((c) => c.uuid !== 'default');
    setDefaultListClass(classList);

    classList = classList.filter((classs) => classs.course_uuid === courses[0].uuid);

    setClassList(classList);
    setDefaultListLesson(lessons);
    lessons = lessons.filter((lesson) => lesson.course.name === courses[0].name)
    setLessonList(lessons)
    setBackupLessonList(lessons);
    setListInterval(intervals);
    setCourseList(courses);

    prepareDefaultOptions(lessons);
  };

  function prepareDefaultOptions(arr: LessonModel[]) {
    const optsTeacher = arr.map((lesson: LessonModel) => lesson.professor.name);
    // const optsClass = arr.map((lesson: LessonModel) => lesson.turma.name)

    setTeacherOptions(filterNames(optsTeacher));
    // setClassOptions(filterNames(optsClass))
  }

  function filterNames(arr: string[]): string[] {
    arr = arr.filter((e, i) => {
      return arr.indexOf(e) === i;
    });
    return arr;
  }

  useEffect(() => {
    load();
  }, [bool]);

  function handleChangeFilter(value: string, type: string) {
    if (type === 'course') {
      const uuid: string | undefined = courseList?.filter(
        (course) => course.name === value,
      )[0]?.uuid;
      setClassList(
        defaultListClass?.filter((classs) => classs.course_uuid === uuid),
      );
      const listLesson = defaultListLesson?.filter((lesson) => lesson.course.name === value)
      setLessonList(listLesson);

      prepareDefaultOptions(listLesson)
    }
    if (type === 'teacher') {
      if (value === 'Todos') {
        setLessonList(defaultListLesson);
        return;
      } else {
        setLessonList(
          defaultListLesson?.filter(
            (lesson) => lesson.professor.name === value,
          ),
        );
      }
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Filters>
        <h2>Filtros</h2>
        <div className='filters-group'>
          <div>
            <label>
              <p>Professor</p>
              <select
                onChange={(e) => handleChangeFilter(e.target.value, 'teacher')}
              >
                <option value={'Todos'}>Todos</option>
                {teacherOptions.map((teacher, k) => (
                  <option key={k} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              <p>Curso</p>
              <select
                onChange={(e) => handleChangeFilter(e.target.value, 'course')}
              >
                {courseList?.map((course, k) => (
                  <option key={k} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
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
                <BoardContainer
                  key={k}
                  label={classs.name}
                  idClass={classs.uuid as string}
                  listLesson={lessonList}
                  defaultListLesson={backupLessonList}
                  intervalList={intervalList}
                />
              ))}
            </div>
          </>
        ) : (
          <p>Não há itens</p>
        )}

        {classList?.length === 0 && <p>Não há itens</p>}
      </Main>
    </DndProvider>
  );
};
