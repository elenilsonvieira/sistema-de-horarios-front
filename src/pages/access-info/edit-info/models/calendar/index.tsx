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
import { CalendarModel } from '../../../../../api/model/CalendarModel';
import { calendarReadControllerView } from './calendarReadControllerView';
import { calendarDeleteControllerView } from './calendarDeleteControllerView';
import { ModelProps } from '../interfaces';

export const Calendar: React.FC<ModelProps> = ({ editMode }: ModelProps) => {
  const [, setSemester] = useState<string>();
  const [caledarList, setCaledarList] = useState<CalendarModel[]>();

  const load = async () => {
    try {
      const result = await calendarReadControllerView();
      setCaledarList(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      {caledarList != null ? (
        caledarList.map((calendar, index) => {
          return (
            <Row key={calendar.uuid} propertyName={calendar.semester}>
              <ExpandDetails className="expand">
                <div className={editMode ? 'edit-mode' : ''}>
                  <span className="title">Semestre:</span>
                  {editMode ? (
                    <InputArea
                      placeholder={calendar.semester}
                      id={'a' + index}
                      change={(event) => {
                        setSemester(event.target.value);
                      }}
                    />
                  ) : (
                    <span className="info">{calendar.semester}</span>
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
                            await calendarDeleteControllerView(calendar.uuid);
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
