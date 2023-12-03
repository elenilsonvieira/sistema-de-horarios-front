import React, { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// Importe os estilos, modelos e controladores necessários
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
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [currentClassIndex, setCurrentClassIndex] = useState<number>(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);
  const { bool } = useRefreshContext();
  
  const load = async () => {
    try {
      let lessons = await lessonReadControllerView();
      const intervals = await intervalReadControllerView();
      let classList = await turmaReadControllerView();
      const courses = await courseReadControllerView();
  
      classList = classList.filter((c) => c.uuid !== 'default');
      setDefaultListClass(classList);
      setCourseList(courses);
  
      if (selectedCourse) {
        const selectedCourseObject = courseList?.find((course) => course.name === selectedCourse);
  
        if (selectedCourseObject) {
          classList = classList.filter((classs) => classs.course_uuid === selectedCourseObject.uuid);
          lessons = lessons.filter((lesson) => lesson.course.name === selectedCourseObject.name);
        } else {
          console.error('Selected course not found:', selectedCourse);
        }
      } else {
        classList = classList.filter((classs) => classs.course_uuid === courses[0].uuid);
        lessons = lessons.filter((lesson) => lesson.course.name === courses[0].name);
      }
  
      console.log('Filtered Course List:', classList);
      console.log('Filtered Lesson List:', lessons);
  
      setClassList(classList);
      setDefaultListLesson(lessons);
      setLessonList(lessons);
      setBackupLessonList(lessons);
      setListInterval(intervals);
  
      prepareDefaultOptions(lessons);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  

  function prepareDefaultOptions(arr: LessonModel[]) {
    const optsTeacher = arr.map((lesson: LessonModel) => lesson.professor.name);
    setTeacherOptions(filterNames(optsTeacher));
  }

  function filterNames(arr: string[]): string[] {
    arr = arr.filter((e, i) => {
      return arr.indexOf(e) === i;
    });
    return arr;
  }

  useEffect(() => {
    load();
  }, [bool, selectedCourse]);

  function handleChangeFilter(value: string, type: string) {
    if (type === 'course') {
      setSelectedCourse(value);

      const uuid: string | undefined = courseList?.find(
        (course) => course.name === value,
      )?.uuid;

      console.log('Selected Course:', value);
      console.log('UUID:', uuid);
    }

    if (type === 'teacher') {
      if (value === 'Todos') {
        setLessonList(defaultListLesson);
      } else {
        setLessonList(
          defaultListLesson?.filter(
            (lesson) => lesson.professor.name === value,
          ),
        );
      }
    }
  }
  const handleNextButtonClick = () => {
    if (classList && classList.length > 0) {
      setCurrentClassIndex((prevIndex) => (prevIndex + 1) % classList.length);
      setSelectedLessonIndex(0);
    }
  };



  return (
    <DndProvider backend={HTML5Backend}>
      <Filters>
        <h2>Filtro</h2>
      <img src="src/assets/img/filtro.png" alt="Ícone de Filtro" />
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
              <select onChange={(e) => handleChangeFilter(e.target.value, 'course')}>
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
              {classList.length > 0 && (
                <BoardContainer
                  label={classList[currentClassIndex].name}
                  idClass={classList[currentClassIndex].uuid as string}
                  listLesson={lessonList}
                  defaultListLesson={backupLessonList}
                  intervalList={intervalList}
                  selectedLessonIndex={selectedLessonIndex}
                />
              )}
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