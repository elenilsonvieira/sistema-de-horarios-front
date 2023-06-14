import { useState } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
} from '../../../../../components';
import { Form, Main } from '../styles/styles';
import { profileControllerView } from './profileControllerView';

import { errorMessage } from '../../../../../components/libs/Toastr';

export const Profile = () => {
  const [field, setField] = useState<string>();
  const [standard, setStandard] = useState<number>(0);

  const validate = () => {
    const errors = [];

    if (!field) {
      errors.push('Área é obrigatório');
    }
    if (!standard) {
      errors.push('Padrão é obrigatória');
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
      await profileControllerView({
        field,
        standard,
      });
      setField('');
      setStandard(0);
    }
  };

  return (
    <Main>
      <Form>
        <InputContent labelText="Área:" htmlFor="area">
          <InputArea
            placeholder="Área de formação"
            id="nome"
            change={(event) => {
              setField(event.target.value);
            }}
            value={field}
          ></InputArea>
        </InputContent>

        <InputContent labelText="Padrão" htmlFor="padrão">
          <InputArea
            placeholder="Ex: 1"
            id="padrão"
            change={(event) => {
              setStandard(event.target.value);
            }}
            value={standard}
          ></InputArea>
        </InputContent>
      </Form>

      <ButtonAction textButton="adicionar Perfil" onClickFunction={onSubmit} />
    </Main>
  );
};
