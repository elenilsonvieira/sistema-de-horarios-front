import { useEffect, useState } from 'react';
import {
  InputArea,
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
import { ProfessorModel } from '../../../../../api/model/ProfessorModel';
import { ProfessorController } from '../../../../../api/controller/ProfessorController';
import { professorReadControllerView } from './professorReadControllerView';
import { professorDeleteControllerView } from './professorDeleteControllerView';
import { ProfileModel } from '../../../../../api/model/ProfileModel';
import { ProfileController } from '../../../../../api/controller/ProfileController';
import { ModelProps } from '../interfaces';

const profileController = ProfileController.getInstance();
export const Professor: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [name, setName] = useState<string>('');
  const [profileModel, setProfileModel] = useState<ProfileModel>();
  const [profileModelList, setProfileModelList] = useState<ProfileModel[]>();

  const [professorList, setProfessorList] = useState<ProfessorModel[]>();

  const load = async () => {
    try {
      const result = await professorReadControllerView();
      setProfessorList(result);

      const resultProfile = await profileController.list();
      setProfileModel(resultProfile[0]);
      setProfileModelList(resultProfile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  function setValues(teacher: ProfessorModel) {
    setName(teacher.name);
    setProfileModel(teacher.profile);
  }

  async function update(uuid: string | undefined) {
    await ProfessorController.getInstance().update({
      name: name,
      profile: profileModel,
      uuid,
    });
    location.reload();
  }

  return (
    <Main>
      {professorList != null ? (
        professorList.map((prof, index) => {
          return (
            <Row
              key={prof.uuid}
              propertyName={prof.name}
              onClick={() => setValues(prof)}
            >
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={prof.name}
                      id={'a' + index}
                      change={(event) => {
                        setName(event.target.value);
                      }}
                      value={name}
                    ></InputArea>
                  ) : (
                    <span className="info">{prof.name}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Área:</span>
                  {editMode ? (
                    <SelectArea
                      id={'c' + index}
                      value={profileModel?.uuid}
                      change={(event) => {
                        const select = event.target;
                        if (profileModelList) {
                          const profileSelect =
                            profileModelList[select.selectedIndex];
                          setProfileModel(profileSelect);
                        }
                      }}
                    >
                      {profileModelList?.map((item) => (
                        <option key={item.uuid} value={item.uuid}>
                          {item.field} - {item.standard}
                        </option>
                      ))}
                    </SelectArea>
                  ) : (
                    <span className="info">
                      {prof.profile.field} - {prof.profile.standard}
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
                            await professorDeleteControllerView(
                              prof.uuid ? prof.uuid : '',
                            );
                            await load();
                          }
                        }}
                      />

                      <ButtonConcluir
                        onClickFunction={() => update(prof.uuid)}
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
