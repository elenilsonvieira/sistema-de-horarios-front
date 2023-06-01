import { useEffect, useState } from 'react';
import {
  InputArea,
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
import { ProfileModel } from '../../../../../api/model/ProfileModel';
import { profileReadView } from './profileReadView';
import { profileDeleteControllerView } from './profileDeleteControllerView';
import { ModelProps } from '../interfaces';

export const Profile: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [, setField] = useState<string>();
  const [, setStandard] = useState<number>();

  const [profileList, setProfileList] = useState<ProfileModel[]>();

  const load = async () => {
    try {
      const result = await profileReadView();
      setProfileList(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      {profileList != null ? (
        profileList.map((profile, index) => {
          return (
            <Row key={profile.uuid} propertyName={profile.field}>
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Campo:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={profile.field}
                      id={'a' + index}
                      change={(event) => {
                        setField(event.target.value);
                      }}
                    ></InputArea>
                  ) : (
                    <span className="info">{profile.field}</span>
                  )}
                </div>
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Padrão:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={profile.standard.toString()}
                      id={'a' + index}
                      change={(event) => {
                        setStandard(event.target.value);
                      }}
                    ></InputArea>
                  ) : (
                    <span className="info">{profile.standard}</span>
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
                            await profileDeleteControllerView(
                              profile.uuid ? profile.uuid : '',
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
