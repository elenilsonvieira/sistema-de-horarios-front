import { useEffect, useState } from 'react';
import {
  InputArea,
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
import { CourseModel } from '../../../../../api/model/CourseModel';
import { courseReadControllerView } from './courseReadControllerView';
import { courseDeleteControllerView } from './courseDeleteControllerView';
import { ModelProps } from '../interfaces';
import { CourseController } from '../../../../../api/controller/CourseController';

export const Course: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [name, setName] = useState<string>('');
  const [courseList, setCourseList] = useState<CourseModel[]>();

  const load = async () => {
    try {
      const result = await courseReadControllerView();
      setCourseList(result);
    } catch (error) {
      console.log(error);
    }
  };

  async function update(uuid: string) {
    await CourseController.getInstance().update({ name, uuid });
  }

  function setValues(course: CourseModel) {
    setName(course.name);
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <Main>
      {courseList != null ? (
        courseList.map((course, index) => {
          return (
            <Row
              key={course.uuid}
              propertyName={course.name}
              onClick={() => setValues(course)}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={course.name}
                      id={'a' + index}
                      change={(event) => {
                        setName(event.target.value);
                      }}
                      value={name}
                    ></InputArea>
                  ) : (
                    <span className="info">{course.name}</span>
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
                            await courseDeleteControllerView(course.uuid);
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir
                        onClickFunction={() => update(course.uuid)}
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
