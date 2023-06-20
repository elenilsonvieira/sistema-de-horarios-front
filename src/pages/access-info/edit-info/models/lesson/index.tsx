import { useEffect, useState } from 'react';
import { Row, ButtonDelete, ButtonConcluir, SelectArea } from '../../../../../components';
import {
  Main,
  ExpandDetails,
  ActionContainer,
  EditButtons,
} from '../styles/styles';
import { lessonReadControllerView } from './lessonReadControllerView';
import { LessonModel } from '../../../../../api/model/LessonModel';
import { lessonDeleteControllerView } from './lessonDeleteControllerView';
import { ModelProps } from '../interfaces';
import { CalendarModel } from '../../../../../api/model/CalendarModel';
import { ProfessorModel } from '../../../../../api/model/ProfessorModel';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { CourseModel } from '../../../../../api/model/CourseModel';
import { CurricularComponentModel } from '../../../../../api/model/CurricularComponentModel';
import { ClassroomModel } from '../../../../../api/model/ClassroomModel';
import { IntervalModel } from '../../../../../api/model/IntervalModel';
import { courseReadControllerView } from '../course/courseReadControllerView';
import { calendarReadControllerView } from '../calendar/calendarReadControllerView';
import { turmaReadControllerView } from '../turma/turmaReadControllerView';
import { curricularComponentReadView } from '../curricular-component/curricularComponentReadView';
import { professorReadControllerView } from '../professor/professorReadControllerView';
import { classroomReadControllerView } from '../classroom/classroomReadControllerView';
import { lessonUpdateControllerView } from '../../../../../components/dnd-elements/card-drag-drop/modal-edit-lesson/lessonUpdateControllerView';

export const Lesson: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [lessonList, setLessonList] = useState<LessonModel[]>();
  const [calendarList, setCalendarList] = useState<CalendarModel[]>();
  const [teacherList, setTeacherList] = useState<ProfessorModel[]>();
  const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
  const [courseList, setCourseList] = useState<CourseModel[]>();
  const [curricularComponentList, setCurricularComponentList] = useState<CurricularComponentModel[]>();
  const [classModelList, setClassModelList] = useState<TurmaModel[]>();

  const [course, setCourse] = useState<CourseModel>();
  const [calendar, setCalendar] = useState<CalendarModel>();
  const [classModel, setClassModel] = useState<TurmaModel>();
  const [curricularComponent, setCurricularComponent] = useState<CurricularComponentModel>();
  const [teacher, setTeacher] = useState<ProfessorModel>();
  const [classroom, setClassroom] = useState<ClassroomModel>();
  const [interval, setInterval] = useState<IntervalModel>();

  const load = async () => {
    try {
      const result = await lessonReadControllerView();
      const resultCourse = await courseReadControllerView();
      const resultCalendar = await calendarReadControllerView();
      const resultClassModel = await turmaReadControllerView();
      const resultCurricularComponent = await curricularComponentReadView();
      const resultTeacher = await professorReadControllerView();
      const resultClassroom = await classroomReadControllerView();

      setLessonList(result);
      setCalendarList(resultCalendar);
      setCourseList(resultCourse);
      setClassModelList(resultClassModel.filter((item: TurmaModel) => item.uuid !== 'default'));
      setCurricularComponentList(resultCurricularComponent);
      setTeacherList(resultTeacher);
      setClassroomList(resultClassroom);
    } catch (error) {
      console.log(error);
    }
  };

  async function update(uuid: string) {
    await lessonUpdateControllerView({ uuid, course, turma: classModel, calendar, classroom, curricularComponent, professor: teacher, interval })
    location.reload()
  }

  function setValues(lesson: LessonModel) {
    setCalendar(lesson.calendar)
    setTeacher(lesson.professor)
    setCourse(lesson.course)
    setClassModel(lesson.turma)
    setInterval(lesson.interval)
    setCurricularComponent(lesson.curricularComponent)
    setClassroom(lesson.classroom)
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      {lessonList != null ? (
        lessonList.map((lesson, index) => {
          return (
            <Row
              onClick={() => setValues(lesson)}
              key={lesson.uuid}
              propertyName={`Aula ${index + 1} - ${lesson.curricularComponent.name
                } - ${lesson.course.name}`}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Calendário:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={calendar?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (calendarList) {
                          const calendarSelected =
                            calendarList[select.selectedIndex];
                          setCalendar(calendarSelected);
                        }

                      }}
                    >
                      {calendarList?.map((item: CalendarModel) => (
                        <option value={item.uuid} key={item.uuid}>{item.semester}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">{lesson.calendar.semester}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Sala de aula:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={classroom?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (classroomList) {
                          const classroomSelected =
                            classroomList[select.selectedIndex];
                          setClassroom(classroomSelected);
                        }

                      }}
                    >
                      {classroomList?.map((item: ClassroomModel) => (
                        <option value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {lesson.classroom.name} -{' '}
                      {lesson.classroom.classBlockDTO.block}
                    </span>

                  )}

                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Disciplina:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={curricularComponent?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (curricularComponentList) {
                          const curricularSelected =
                            curricularComponentList[select.selectedIndex];
                          setCurricularComponent(curricularSelected);
                        }
                      }}
                    >
                      {curricularComponentList?.map((item: CurricularComponentModel) => (
                        <option value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {lesson.curricularComponent.name}
                    </span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Professor:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={teacher?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (teacherList) {
                          const teacherSelected =
                            teacherList[select.selectedIndex];
                          setTeacher(teacherSelected);
                        }
                      }}
                    >
                      {teacherList?.map((item: ProfessorModel) => (
                        <option value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">{lesson.professor.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Turma:</span>
                  <span className="info">{lesson.turma.uuid === 'default' ? 'Não definida' : lesson.turma.name}</span>
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Curso:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={course?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (courseList) {
                          const courseSelected =
                            courseList[select.selectedIndex];
                          setCourse(courseSelected);
                        }
                      }}
                    >
                      {courseList?.map((item: CourseModel) => (
                        item.uuid !== 'default' &&
                        <option value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">{lesson.course.name}</span>
                  )}
                </div>
                <ActionContainer>
                  {editMode &&
                    <EditButtons>
                      <ButtonDelete
                        onClickFunction={async () => {
                          const response = confirm(
                            'Deseja confirmar a operação?',
                          );
                          if (response) {
                            await lessonDeleteControllerView(lesson.uuid);
                            await load();
                          }
                        }}
                      />
                      <ButtonConcluir onClickFunction={() => update(lesson.uuid)} />
                    </EditButtons>
                  }
                </ActionContainer>
              </ExpandDetails>
            </Row>
          );
        })
      ) : (
        <p>Não há itens</p>
      )}
    </Main >
  );
};
