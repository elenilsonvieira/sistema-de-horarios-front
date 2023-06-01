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

export const CurricularComponent: React.FC<ModelProps> = ({
  editMode,
}: ModelProps) => {
  const [, setName] = useState<string>();
  const [, setWorkload] = useState<number>();
  const [, setCourseUuid] = useState<string>();
  const [courseModelList, setCourseModelList] = useState<CourseModel[]>();

  const [curricularComponentList, setCurricularComponentList] =
    useState<CurricularComponentModel[]>();

  const load = async () => {
    try {
      const result = await curricularComponentReadView();
      setCurricularComponentList(result);

      setCourseUuid(result[0].uuid);
      setCourseModelList(result);
    } catch (error) {
      console.log(error);
    }
  };

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
                      change={(event) => {
                        const select = event.target;
                        if (courseModelList) {
                          const courseUuid =
                            courseModelList[select.selectedIndex].uuid;
                          setCourseUuid(courseUuid);
                        }
                      }}
                    >
                      {courseModelList?.map((item) => (
                        <option key={item.uuid}>{item.name}</option>
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

                      <ButtonConcluir />
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
