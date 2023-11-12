import React, { useEffect, useState } from 'react';
import { ButtonAction, InputContent, SelectArea } from '../../../../components';
import Modal from 'react-modal'; 
import { Form, Main, ConfirmationButton, ConfirmationMessage, ConfirmationModalWrapper, CancelButton } from './styles';
import { CalendarModel } from '../../../../api/model/CalendarModel';
import { CalendarController } from '../../../../api/controller/CalendarController';
import { ClassroomModel } from '../../../../api/model/ClassroomModel';
import { ClassroomController } from '../../../../api/controller/ClassroomController';
import { CurricularComponentModel } from '../../../../api/model/CurricularComponentModel';
import { CurricularComponentController } from '../../../../api/controller/CurricularComponentController';
import { CourseModel } from '../../../../api/model/CourseModel';
import { CourseController } from '../../../../api/controller/CourseController';
import { ProfessorModel } from '../../../../api/model/ProfessorModel';
import { ProfessorController } from '../../../../api/controller/ProfessorController';
import { LessonModel } from '../../../../api/model/LessonModel';
import { lessonUpdateControllerView } from './lessonUpdateControllerView';
import { lessonDeleteControllerView } from './lessonDeleteControllerView';

interface IntfcModal {
  lessonModal: LessonModel;
}

const calendarController = CalendarController.getInstance();
const classroomController = ClassroomController.getInstance();
const curricularComponentController =
  CurricularComponentController.getInstance();
const courseController = CourseController.getInstance();
const professorController = ProfessorController.getInstance();

Modal.setAppElement('#root'); 

export const LessonModal: React.FC<IntfcModal> = ({
  lessonModal,
}: IntfcModal) => {
  const [lessonModel, setLessonModel] = useState<LessonModel>(lessonModal);
  const [tempLessonModel, setTempLessonModel] = useState<LessonModel>(lessonModal);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [calendarList, setCalendarList] = useState<CalendarModel[]>();
  const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
  const [curricularComponentList, setCurricularComponentList] =
    useState<CurricularComponentModel[]>();
  const [courseList, setCourseList] = useState<CourseModel[]>();
  const [professorList, setProfessorList] = useState<ProfessorModel[]>();
  const [calendarValue, setCalendarValue] = useState(
    lessonModel.calendar.semester,
  );
  const [classroomValue, setClassroomValue] = useState(
    lessonModel.classroom.name +
      ' - ' +
      lessonModel.classroom.classBlockDTO.block,
  );
  const [curricularComponentValue, setCurricularComponentValue] = useState(
    lessonModel.curricularComponent.name,
  );
  const [courseValue, setCourseValue] = useState(lessonModel.course.name);
  const [professorValue, setProfessorValue] = useState(
    lessonModel.professor.name,
  );
  const [action, setAction] = useState('');

  const onSubmit = () => {
    setAction('editar');
    setIsConfirmationModalOpen(true);
  };
  
  const deleteSubmit = () => {
    setAction('deletar');
    setIsConfirmationModalOpen(true);
  };

  const handleEditConfirmation = async () => {
    await lessonUpdateControllerView(lessonModel).then(() => {
      setIsConfirmationModalOpen(false); 
    });
  };

  const handleDeleteConfirmation = async () => {
    await lessonDeleteControllerView(lessonModel.uuid).then(() => {
      setIsConfirmationModalOpen(false);
      window.location.reload();
    });
  };

  const handleConfirmation = () => {
    if (action === 'editar') {
      setLessonModel(tempLessonModel);
      handleEditConfirmation();
    } else if (action === 'deletar') {
      handleDeleteConfirmation();
    }
    setIsConfirmationModalOpen(false);
  };

  const loadingLessonValues = async () => {
    const calendar = await calendarController.list();
    const classroom = await classroomController.list();
    const curricularComponent = await curricularComponentController.list();
    const course = await courseController.list();
    const professor = await professorController.list();

    setCalendarList(calendar);
    setClassroomList(classroom);
    setCurricularComponentList(curricularComponent);
    setCourseList(course);
    setProfessorList(professor);
  };

  useEffect(() => {
    loadingLessonValues()
      .then(() => console.log(lessonModal))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Main>
      <Form>
        <InputContent labelText="Calendário:" htmlFor="calendario-s">
          <SelectArea
            id="calendario-s"
            value={calendarValue}
            change={(event) => {
              const select = event.target;
              if (calendarList) {
                const updatedTempLessonModel = { ...tempLessonModel };
                updatedTempLessonModel.calendar = calendarList[select.selectedIndex];
                setTempLessonModel(updatedTempLessonModel);
                setCalendarValue(updatedTempLessonModel.calendar.semester);
              }
            }}
          >
            {calendarList?.map((item) => (
              <option key={item.uuid}>{item.semester}</option>
            ))}
          </SelectArea>
        </InputContent>
        <InputContent labelText="Sala de aula:" htmlFor="classroom-s">
          <SelectArea
            id="classroom-s"
            value={classroomValue}
            change={(event) => {
              const select = event.target;
              if (classroomList) {
                const updatedTempLessonModel = { ...tempLessonModel };
                updatedTempLessonModel.classroom = classroomList[select.selectedIndex];
                setTempLessonModel(updatedTempLessonModel);
                setClassroomValue(
                  updatedTempLessonModel.classroom.name +
                    ' - ' +
                    updatedTempLessonModel.classroom.classBlockDTO.block,
                );
              }
            }}
          >
            {classroomList?.map((item) => (
              <option key={item.uuid}>
                {item.name} - {item.classBlockDTO.block}
              </option>
            ))}
          </SelectArea>
        </InputContent>
        <InputContent labelText="Disciplina:" htmlFor="disciplina-s">
          <SelectArea
            id="disciplina-s"
            value={curricularComponentValue}
            change={(event) => {
              const select = event.target;
              if (curricularComponentList) {
                const updatedTempLessonModel = { ...tempLessonModel };
                updatedTempLessonModel.curricularComponent =
                  curricularComponentList[select.selectedIndex];
                setTempLessonModel(updatedTempLessonModel);
                setCurricularComponentValue(
                  updatedTempLessonModel.curricularComponent.name,
                );
              }
            }}
          >
            {curricularComponentList?.map((item) => (
              <option key={item.uuid}>{item.name}</option>
            ))}
          </SelectArea>
        </InputContent>
        <InputContent labelText="Curso:" htmlFor="Curso-s">
          <SelectArea
            id="Curso-s"
            value={courseValue}
            change={(event) => {
              const select = event.target;
              if (courseList) {
                const updatedTempLessonModel = { ...tempLessonModel };
                updatedTempLessonModel.course = courseList[select.selectedIndex];
                setTempLessonModel(updatedTempLessonModel);
                setCourseValue(updatedTempLessonModel.course.name);
              }
            }}
          >
            {courseList?.map((item) => (
              <option key={item.uuid}>{item.name}</option>
            ))}
          </SelectArea>
        </InputContent>
        <InputContent labelText="Professor:" htmlFor="professor-s">
          <SelectArea
            id="professor-s"
            value={professorValue}
            change={(event) => {
              const select = event.target;
              if (professorList) {
                const updatedTempLessonModel = { ...tempLessonModel };
                updatedTempLessonModel.professor = professorList[select.selectedIndex];
                setTempLessonModel(updatedTempLessonModel);
                setProfessorValue(updatedTempLessonModel.professor.name);
              }
            }}
          >
            {professorList?.map((item) => (
              <option key={item.uuid}>{item.name}</option>
            ))}
          </SelectArea>
        </InputContent>
      </Form>

      <ButtonAction textButton="Editar aula" onClickFunction={onSubmit} />
      <ButtonAction textButton="Deletar aula" onClickFunction={deleteSubmit} />

      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={() => setIsConfirmationModalOpen(false)}
        contentLabel="Confirmação"
        style={{
          content: {
            width: '300px',
            height: '90px',
            margin: 'auto',
          },
        }}
      >
        <ConfirmationModalWrapper>
          <ConfirmationMessage>
            {action === 'editar'
              ? 'Deseja realmente editar a aula?'
              : 'Deseja realmente deletar a aula?'}
          </ConfirmationMessage>
          <ConfirmationButton onClick={handleConfirmation}>Confirmar</ConfirmationButton>
          <CancelButton onClick={() => setIsConfirmationModalOpen(false)}>Cancelar</CancelButton>
        </ConfirmationModalWrapper>
      </Modal>
    </Main>
  );
};

export default LessonModal;
