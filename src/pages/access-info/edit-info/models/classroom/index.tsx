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
import { ClassroomModel } from '../../../../../api/model/ClassroomModel';
import { classroomReadControllerView } from './classroomReadControllerView';
import { ClassroomController } from '../../../../../api/controller/ClassroomController';
import { classroomDeleteControllerView } from './classroomDeleteControllerView';
import { ModelProps } from '../interfaces';
import { classroomControllerView } from '../../../add-info/models/classroom/classroomControllerView';
import { ClassBlockModel } from '../../../../../api/model/ClassBlockModel';
import ClassBlockController from '../../../../../api/controller/ClassBlockController';

export const Classroom: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [name, setName] = useState<string>('');
  const [capacity, setCapacity] = useState<string>('');
  const [classroomList, setClassroomList] = useState<ClassroomModel[]>();
  const [classBlockList, setClassBlockList] = useState<ClassBlockModel[]>([]);
  const [classBlock, setClassBlock] = useState<ClassBlockModel>();

  const load = async () => {
    try {
      const result = await classroomReadControllerView();
      const resultBlock = await ClassBlockController.getInstance().list();
      setClassroomList(result);
      setClassBlockList(resultBlock);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  async function update(uuid: string) {
    await ClassroomController.getInstance().update({
      uuid,
      capacity,
      name,
      classBlockModel: classBlock,
    });
    location.reload();
  }

  function setValues(classroom: ClassroomModel) {
    setName(classroom.name);
    setCapacity(classroom.capacity);
    setClassBlock(classroom.classBlockDTO);
  }

  return (
    <Main>
      {classroomList != null ? (
        classroomList.map((classroom, index) => {
          return (
            <Row
              key={classroom.uuid}
              propertyName={`${classroom.name} - ${classroom.classBlockDTO.block}`}
              onClick={() => setValues(classroom)}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={classroom.name}
                      id={'a' + index}
                      change={(event) => {
                        setName(event.target.value);
                      }}
                      value={name}
                    ></InputArea>
                  ) : (
                    <span className="info">{classroom.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={classBlock?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (classBlockList) {
                          const blockSelected: ClassBlockModel =
                            classBlockList[select.selectedIndex];
                          setClassBlock(blockSelected);
                        }
                      }}
                    >
                      {classBlockList?.map((item) => (
                        <option key={item.uuid} value={item.uuid}>
                          {item.block}
                        </option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {classroom.classBlockDTO.block}
                    </span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Capacidade:</span>
                  {editMode ? (
                    <InputArea
                      type="number"
                      placeholder={classroom.capacity.toString()}
                      id={'c' + index}
                      change={(event) => {
                        setCapacity(event.target.value);
                      }}
                      value={capacity}
                    ></InputArea>
                  ) : (
                    <span className="info">{classroom.capacity}</span>
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
                            await classroomDeleteControllerView(classroom.uuid);
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir
                        onClickFunction={() => update(classroom.uuid)}
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
