import { useEffect, useState } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
  SelectArea,
} from '../../../../../components';
import { Form, Main } from '../styles/styles';
import { professorControllerView } from './professorControllerView';
import { ProfileController } from '../../../../../api/controller/ProfileController';
import { ProfileModel } from '../../../../../api/model/ProfileModel';

import { errorMessage } from '../../../../../components/libs/Toastr';

const profileController = ProfileController.getInstance();
export const Professor = () => {
  const [name, setName] = useState<string>();
  const [profileList, setProfileList] = useState<ProfileModel[]>();
  const [profileUuid, setProfileUuid] = useState<string>();

  const validate = () => {
    const errors = [];

    if (!name) {
      errors.push('Nome é obrigatório');
    }
    if (!profileUuid) {
      errors.push('Perfil é obrigatória');
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
      await professorControllerView({
        name,
        profileUuid,
      });
      setName('');
    }
  };

  const load = async () => {
    const result = await profileController.list();
    setProfileList(result);
    setProfileUuid(result[0].uuid);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      <Form>
        <InputContent labelText="Nome:" htmlFor="nome">
          <InputArea
            placeholder="Nome do professor"
            id="nome"
            change={(event: any) => {
              setName(event.target.value);
            }}
            value={name}
          ></InputArea>
        </InputContent>

        <InputContent labelText="Perfil*:" htmlFor="profile-s">
          <SelectArea
            id="perfil-s"
            change={(event) => {
              const select = event.target;
              if (profileList) {
                const uuid = profileList[select.selectedIndex].uuid;
                setProfileUuid(uuid);
              }
            }}
          >
            {profileList?.map((item) => (
              <option key={item.uuid}>
                {item.field} - {item.standard}
              </option>
            ))}
          </SelectArea>
        </InputContent>
      </Form>

      <ButtonAction
        textButton="adicionar professor"
        onClickFunction={onSubmit}
      />
    </Main>
  );
};
