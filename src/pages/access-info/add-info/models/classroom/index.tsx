import React, { useEffect, useState } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
  SelectArea,
} from '../../../../../components';
import { Main, Form } from '../styles/styles';
import { classroomControllerView } from './classroomControllerView';
import { errorMessage } from '../../../../../components/libs/Toastr';
import ClassBlockController from '../../../../../api/controller/ClassBlockController';
import { ClassBlockModel } from '../../../../../api/model/ClassBlockModel';

const classBlockController = ClassBlockController.getInstance();
export const Classroom = () => {
  const [name, setName] = useState<string>();
  const [classBlockList, setClassBlockList] = useState<ClassBlockModel[]>();
  const [classBlockUuid, setClassBlockUuid] = useState<string>();
  const [capacity, setCapacity] = useState<number>();

  const validate = () => {
    const errors = [];

    if (!name) {
      errors.push('Nome é obrigatório');
    }
    if (!setClassBlockUuid) {
      errors.push('Bloco é obrigatório');
    }
    if (!capacity) {
      errors.push('Capacidade é obrigatória');
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
      await classroomControllerView({
        name,
        classBlockUuid,
        capacity,
      });

      setName('');
      setCapacity(0);
    }
  };

  const load = async () => {
    const result = await classBlockController.list();
    setClassBlockList(result);
    setClassBlockUuid(result[0].uuid);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      <Form>
        <InputContent labelText="Nome*:" htmlFor="nome">
          <InputArea
            placeholder="Ex: Sala 1"
            id="nome"
            change={(event) => {
              setName(event.target.value);
            }}
            value={name}
          ></InputArea>
        </InputContent>

        <InputContent labelText="Bloco*:" htmlFor="classroom-s">
          <SelectArea
            id="turma-s"
            change={(event) => {
              const select = event.target;
              if (classBlockList) {
                const uuid = classBlockList[select.selectedIndex].uuid;
                setClassBlockUuid(uuid);
              }
            }}
          >
            {classBlockList?.map((item) => (
              <option key={item.uuid}>{item.block}</option>
            ))}
          </SelectArea>
        </InputContent>

        <InputContent labelText="Capacidade*:" htmlFor="capacidade">
          <InputArea
            placeholder="Capacidade"
            id="capacidade"
            type="number"
            change={(event) => {
              setCapacity(event.target.value);
            }}
            value={capacity}
          ></InputArea>
        </InputContent>
      </Form>

      <ButtonAction
        textButton="adicionar sala de aula"
        onClickFunction={onSubmit}
      />
    </Main>
  );
};
