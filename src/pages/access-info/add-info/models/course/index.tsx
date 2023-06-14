import React, { useState } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
} from '../../../../../components';
import { Main, Form } from '../styles/styles';
import { courseControllerView } from './courseControllerView';
import { errorMessage } from '../../../../../components/libs/Toastr';

const Course: React.FC = () => {
  const [name, setName] = useState<string>();

  const validate = () => {
    const errors = [];

    if (!name) {
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
      await courseControllerView({
        name,
      });

      setName('');
    }
  };

  return (
    <Main>
      <Form>
        <InputContent labelText="Nome:" htmlFor="nome">
          <InputArea
            placeholder="Nome do curso"
            id="nome"
            change={(event: any) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </InputContent>
      </Form>

      <ButtonAction textButton="adicionar curso" onClickFunction={onSubmit} />
    </Main>
  );
};

export { Course };
