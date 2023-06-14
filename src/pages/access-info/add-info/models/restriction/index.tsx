import { useEffect, useState } from 'react';
import {
  ButtonAction,
  InputContent,
  SelectArea,
} from '../../../../../components';
import { Form, Main } from '../styles/styles';
import { restrictionControllerView } from './restrictionControllerView';
import { ProfessorController } from '../../../../../api/controller/ProfessorController';
import { ProfessorModel } from '../../../../../api/model/ProfessorModel';
import { WeekDayController } from '../../../../../api/controller/WeekDayController';
import { WeekDayModel } from '../../../../../api/model/WeekDayModel';
import { ShiftController } from '../../../../../api/controller/ShiftController';
import { ShiftModel } from '../../../../../api/model/ShiftModel';

import { errorMessage } from '../../../../../components/libs/Toastr';

const professorController = ProfessorController.getInstance();
const weekDayController = WeekDayController.getInstance();
const shiftController = ShiftController.getInstance();
export const Restriction = () => {
  const [professorList, setProfessorList] = useState<ProfessorModel[]>();
  const [professorModel, setProfessorModel] = useState<ProfessorModel>();
  const [weekDayList, setWeekDayList] = useState<WeekDayModel[]>();
  const [weekDayModel, setWeekDayModel] = useState<WeekDayModel>();
  const [shiftList, setShiftList] = useState<ShiftModel[]>();
  const [shiftModel, setShiftModel] = useState<ShiftModel>();

  function getDataObject(): any {
    return {
      professorModel,
      weekDayModel,
      shiftModel,
    };
  }

  const validate = () => {
    const errors = [];

    if (!professorModel) {
      errors.push('Professor é obrigatório');
    }
    if (!weekDayModel) {
      errors.push('Dia da semana é obrigatória');
    }
    if (!shiftModel) {
      errors.push('Turno é obrigatória');
    }
    return errors;
  };

  const onSubmit = async () => {
    const errors = validate();

    if (errors.length > 0) {
      errors.forEach((message) => {
        errorMessage(message);
      });
    } else {
      const data = getDataObject();
      await restrictionControllerView(data);
    }
  };

  const load = async () => {
    const professor = await professorController.list();
    const weekDay = await weekDayController.list();
    const shift = await shiftController.list();

    setProfessorList(professor);
    setWeekDayList(weekDay);
    setShiftList(shift);

    setProfessorModel(professor[0]);
    setWeekDayModel(weekDay[0]);
    setShiftModel(shift[0]);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      <Form>
        <InputContent labelText="Professor*:" htmlFor="professor-s">
          <SelectArea
            id="professor-s"
            change={(event) => {
              const select = event.target;
              if (professorList) {
                const Model = professorList[select.selectedIndex];
                setProfessorModel(Model);
              }
            }}
          >
            {professorList?.map((item) => (
              <option key={item.uuid}>{item.name}</option>
            ))}
          </SelectArea>
        </InputContent>

        <InputContent labelText="Dia da Semana*:" htmlFor="semana-s">
          <SelectArea
            id="semana-s"
            change={(event) => {
              const select = event.target;
              if (weekDayList) {
                const Model = weekDayList[select.selectedIndex];
                setWeekDayModel(Model);
              }
            }}
          >
            {weekDayList?.map((item) => (
              <option key={item.uuid}>{item.displayName}</option>
            ))}
          </SelectArea>
        </InputContent>

        <InputContent labelText="Turno*:" htmlFor="turno-s">
          <SelectArea
            id="turno-s"
            change={(event) => {
              const select = event.target;
              if (shiftList) {
                const Model = shiftList[select.selectedIndex];
                setShiftModel(Model);
              }
            }}
          >
            {shiftList?.map((item) => (
              <option key={item.uuid}>{item.displayName}</option>
            ))}
          </SelectArea>
        </InputContent>
      </Form>

      <ButtonAction
        textButton="adicionar restrição"
        onClickFunction={onSubmit}
      />
    </Main>
  );
};
