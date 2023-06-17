import { useEffect, useState } from 'react';
import {
  Row,
  SelectArea,
  ButtonDelete,
  ButtonConcluir,
} from '../../../../../components';
import {
  Main,
  ExpandDetails,
  ActionContainer,
  EditButtons,
} from '../styles/styles';
import { RestrictionModel } from '../../../../../api/model/RestrictionModel';
import { restrictionReadControllerView } from './restrictionReadControllerView';
import { restrictionDeleteControllerView } from './restrictionDeleteControllerView';
import { ModelProps } from '../interfaces';
import { ProfessorModel } from '../../../../../api/model/ProfessorModel';
import { ProfessorController } from '../../../../../api/controller/ProfessorController';
import { WeekDayModel } from '../../../../../api/model/WeekDayModel';
import { WeekDayController } from '../../../../../api/controller/WeekDayController';
import { ShiftModel } from '../../../../../api/model/ShiftModel';
import { ShiftController } from '../../../../../api/controller/ShiftController';
import { professorReadControllerView } from '../professor/professorReadControllerView';
import { RestrictionController } from '../../../../../api/controller/RestrictionController';

const professorController = ProfessorController.getInstance();
const weekDayController = WeekDayController.getInstance();
const shiftController = ShiftController.getInstance();
export const Restriction: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [professorModel, setProfessorModel] = useState<ProfessorModel>();
  const [weekDayModel, setWeekDayModel] = useState<WeekDayModel>();
  const [shiftModel, setShiftModel] = useState<ShiftModel>();

  const [weekDayModelList, setWeekDayModelList] = useState<WeekDayModel[]>();
  const [shiftModelList, setShiftModelList] = useState<ShiftModel[]>();
  const [professorModelList, setProfessorModelList] = useState<ProfessorModel[]>();
  const [restrictionList, setRestrictionList] = useState<RestrictionModel[]>();

  const load = async () => {
    try {
      const result = await restrictionReadControllerView();
      setRestrictionList(result);
      const professor = await professorReadControllerView();
      setProfessorModel(professor[0]);
      setProfessorModelList(professor);
      const weekDay = await weekDayController.list();
      setWeekDayModel(weekDay[0]);
      setWeekDayModelList(weekDay);
      const shift = await shiftController.list();
      setShiftModel(shift[0]);
      setShiftModelList(shift);
    } catch (error) {
      console.log(error);
    }
  };

  function setValues(restriction: RestrictionModel) {
    setProfessorModel(restriction.professorDTO)
    setWeekDayModel(restriction.weekDayDTO)
    setShiftModel(restriction.shiftDTO)
  }

  async function update(uuid: string|undefined) {
    await RestrictionController.getInstance().update({professor: professorModel, shiftDTO: shiftModel, weekDayDTO: weekDayModel, uuid})
    // location.reload()
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      {restrictionList != null ? (
        restrictionList.map((restriction: RestrictionModel, index) => {
          return (
            <Row
              onClick={() => setValues(restriction)}
              key={restriction.uuid}
              propertyName={restriction.professorDTO.name}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Professor:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={professorModel?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (professorModelList) {
                          const professorSelect =
                            professorModelList[select.selectedIndex];
                          setProfessorModel(professorSelect);
                        }
                      }}
                    >
                      {professorModelList?.map((item) => (
                        <option  value={item.uuid} key={item.uuid}>{item.name}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">{restriction.professorDTO.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Dia da Semana:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={weekDayModel?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (weekDayModelList) {
                          const weekDaySelect =
                            weekDayModelList[select.selectedIndex];
                          setWeekDayModel(weekDaySelect);
                        }
                      }}
                    >
                      {weekDayModelList?.map((item) => (
                        <option  value={item.uuid} key={item.uuid}>{item.displayName}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {restriction.weekDayDTO.displayName}
                    </span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Turno:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={shiftModel?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (shiftModelList) {
                          const shiftSelect =
                            shiftModelList[select.selectedIndex];
                          setShiftModel(shiftSelect);
                        }
                      }}
                    >
                      {shiftModelList?.map((item) => (
                        <option  value={item.uuid} key={item.uuid}>{item.displayName}</option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {restriction.shiftDTO.displayName}
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
                            await restrictionDeleteControllerView(
                              restriction.uuid ? restriction.uuid : '',
                            );
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir onClickFunction={() => update(restriction.uuid)} />
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
