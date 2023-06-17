import { useEffect, useState } from 'react';
import {
  InputArea,
  Row,
  ButtonDelete,
  ButtonConcluir,
  SelectArea,
} from '../../../../../components';
import {
  Main,
  ExpandDetails,
  ActionContainer,
  EditButtons,
} from '../styles/styles';
import { turmaReadControllerView } from './turmaReadControllerView';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { turmaDeleteControllerView } from './turmaDeleteControllerView';
import { ModelProps } from '../interfaces';
import { CourseModel } from '../../../../../api/model/CourseModel';
import { CourseController } from '../../../../../api/controller/CourseController';
import { TurmaController } from '../../../../../api/controller/TurmaController';

export const Turma: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [name, setName] = useState<string>('')
  const [courseUuid, setCourseUuid] = useState<string|undefined>('')
  const [turmaList, setTurmaList] = useState<TurmaModel[]>();
  const [courseModelList, setCourseModelList] = useState<CourseModel[]>()

  const load = async () => {
    try {
      const result = await turmaReadControllerView();
      const resultCourse = await CourseController.getInstance().list()
      setTurmaList(result.filter((turma) => turma.uuid !== 'default'));
      setCourseModelList(resultCourse)
    } catch (error) {
      console.log(error);
    }
  };

  function setValues(classModel: TurmaModel){
    setName(classModel.name)
    setCourseUuid(classModel.course_uuid)
  }

  async function update(uuid: string|undefined){
    await TurmaController.getInstance().update({name, uuid, courseModel: courseModelList?.filter((c) => c.uuid === courseUuid)[0]})
    // location.reload()
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <Main>
      {turmaList != null ? (
        turmaList.map((turma, index) => {
          return (
            <Row key={turma.uuid} propertyName={`${turma.name}`} onClick={() => setValues(turma)}>
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={turma.name}
                      id={'a' + index}
                      change={(event) => {
                        setName(event.target.value);
                      }}
                    ></InputArea>
                  ) : (
                    <span className="info">{turma.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Curso:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={courseUuid}
                      change={(event) => {
                        const select = event.target;
                        if (courseModelList) {
                          const courseSelectedUuid =
                            courseModelList[select.selectedIndex].uuid;
                          setCourseUuid(courseSelectedUuid);
                        }
                        
                      }}
                    >

                      {courseModelList?.map((item: CourseModel) => (
                          <option value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {courseModelList?.filter((course: CourseModel) => course.uuid === turma.course_uuid)[0].name}
                    </span>
                  )}
                </div>
                <ActionContainer>
                  {editMode && (
                    <EditButtons>
                      <ButtonDelete
                        onClickFunction={async () => {
                          const response = confirm(
                            'Deseja confirmar a operação?',
                          );
                          if (response) {
                            await turmaDeleteControllerView(
                              turma.uuid ? turma.uuid : '',
                            );
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir onClickFunction={() => update(turma.uuid)}/>
                    </EditButtons>
                  )}
                </ActionContainer>
              </ExpandDetails>
            </Row>
          );
        })
      ) : (
        <p>Não há itens</p>
      )}
    </Main>
  );
};
