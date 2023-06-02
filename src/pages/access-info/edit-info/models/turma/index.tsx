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
import { turmaReadControllerView } from './turmaReadControllerView';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { turmaDeleteControllerView } from './turmaDeleteControllerView';
import { ModelProps } from '../interfaces';

export const Turma: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [turmaList, setTurmaList] = useState<TurmaModel[]>();

  const load = async () => {
    try {
      const result = await turmaReadControllerView();
      setTurmaList(result.filter((turma) => turma.uuid = 'default'));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Main>
      {turmaList != null ? (
        turmaList.map((turma, index) => {
          return (
            <Row key={turma.uuid} propertyName={`${turma.name}`}>
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Nome:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={turma.name}
                      id={'a' + index}
                    ></InputArea>
                  ) : (
                    <span className="info">{turma.name}</span>
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
                            await turmaDeleteControllerView(
                              turma.uuid ? turma.uuid : '',
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
