import { useEffect, useState } from 'react';
import {
  InputArea,
  SelectArea,
  Row,
  ButtonDelete,
  ButtonConcluir,
} from '../../../../../components';
import {
  Main,
  ExpandDetails,
  ActionContainer,
  EditButtons,
} from '../styles/styles';
import { CurricularComponentModel } from '../../../../../api/model/CurricularComponentModel';
import { curricularComponentReadView } from './curricularComponentReadView';
import { curricularComponentDeleteControllerView } from './curricularComponentDeleteControllerView';
import { CourseModel } from '../../../../../api/model/CourseModel';
import { ModelProps } from '../interfaces';
import { courseControllerView } from '../../../add-info/models/course/courseControllerView';
import { CourseController } from '../../../../../api/controller/CourseController';
import { CurricularComponentController } from '../../../../../api/controller/CurricularComponentController';

export const CurricularComponent: React.FC<ModelProps> = ({
  editMode,
}: ModelProps) => {
  const [name, setName] = useState<string>('');
  const [workload, setWorkload] = useState<number>(0);
  const [course, setCourse] = useState<CourseModel>();
  const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

  const [curricularComponentList, setCurricularComponentList] =
    useState<CurricularComponentModel[]>();

  const load = async () => {
    try {
      const result = await curricularComponentReadView();
      const resultCourse = await CourseController.getInstance().list();
      setCurricularComponentList(result);

      setCourse(result[0]);
      setCourseModelList(resultCourse);
    } catch (error) {
      console.log(error);
    }
  };

  function setValues(curricularComponent: CurricularComponentModel) {
    setName(curricularComponent.name);
    setWorkload(curricularComponent.workload);
    setCourse(curricularComponent.course);
  }

  async function update(uuid: string) {
    await CurricularComponentController.getInstance().update({
      name,
      uuid,
      workload,
      course: course,
    });
    location.reload();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      {curricularComponentList != null ? (
        curricularComponentList.map((curricularComponent, index) => {
          return (
            <Row
              key={curricularComponent.uuid}
              propertyName={curricularComponent.name}
              onClick={() => setValues(curricularComponent)}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={curricularComponent.name}
                      id={'a' + index}
                      change={(event) => {
                        setName(event.target.value);
                      }}
                      value={name}
                    ></InputArea>
                  ) : (
                    <span className="info">{curricularComponent.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Carga horária:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={curricularComponent.workload.toString()}
                      id={'a' + index}
                      change={(event) => {
                        setWorkload(event.target.value);
                      }}
                      value={workload}
                    ></InputArea>
                  ) : (
                    <span className="info">{curricularComponent.workload}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Curso:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={course?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (courseModelList) {
                          const course = courseModelList[select.selectedIndex];
                          setCourse(course);
                        }
                      }}
                    >
                      {courseModelList?.map((item: CourseModel) => (
                        <option key={item.uuid} value={item.uuid}>
                          {item.name}
                        </option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {curricularComponent.course.name}
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
                            await curricularComponentDeleteControllerView(
                              curricularComponent.uuid,
                            );
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir
                        onClickFunction={() => update(curricularComponent.uuid)}
                      />
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
