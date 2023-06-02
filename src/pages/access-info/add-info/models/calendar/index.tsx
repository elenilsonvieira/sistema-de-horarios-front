import React, { useState } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
} from '../../../../../components';
import { Main, Form } from '../styles/styles';
import { calendarControllerView } from './calendarControllerView';
import { errorMessage } from '../../../../../components/libs/Toastr';

export const Calendar = () => {
  const [semester, setSemester] = useState<string>();

  function getDataObject() {
    return {
      semester,
    };
  }
  const validate = () => {
    const errors = [];

    if (!semester) {
      errors.push('Nome é obrigatório');
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
      await calendarControllerView(data);
    }
  };

  return (
    <Main>
      <Form>
        <InputContent labelText="Semestre:" htmlFor="semestre">
          <InputArea
            placeholder="Ex: 2020.1"
            id="semestre"
            change={(event) => {
              setSemester(event.target.value);
            }}
          ></InputArea>
        </InputContent>
      </Form>

      <ButtonAction
        textButton="adicionar calendário"
        onClickFunction={onSubmit}
      />
    </Main>
  );
};
