import React, { useState } from 'react';
import { InputContent, SelectArea } from '../../components';
import {
  Main,
  Container,
  SelectContainer,
  Title,
  Table,
  THead,
  TBody,
  TitleLesson,
  TdContent,
  TitleTurma,
} from './styles';
import { InfoLesson } from '../../assets/img';

const ViewSchedules: React.FC = () => {
  const [course, setCourse] = useState<string>('ADS');
  const [calendar, setCalendar] = useState<string>('2022.1');

  return (
    <Main>
      <Container>
        <SelectContainer>
          <InputContent labelText="Curso:">
            <SelectArea
              id={'mode'}
              change={async (event) => {
                const select = event.target.value;
                setCourse(select);
              }}
            >
              <option value="ADS">ADS</option>
              <option value="TCE">TCE</option>
            </SelectArea>
          </InputContent>
          <InputContent labelText="Calendário:">
            <SelectArea
              id={'mode'}
              change={async (event) => {
                const select = event.target.value;
                setCalendar(select);
              }}
            >
              <option value="2022.1">2022.1</option>
              <option value="2022.2">2022.2</option>
              <option value="2023.1">2023.1</option>
            </SelectArea>
          </InputContent>
        </SelectContainer>
        <Title>
          Horários {course} - {calendar}
        </Title>

        <div>
          <TitleTurma>1° Período</TitleTurma>
          <Table>
            <THead>
              <tr>
                <th></th>
                <th>segunda</th>
                <th>terça</th>
                <th>quarta</th>
                <th>quinta</th>
                <th>sexta</th>
              </tr>
            </THead>
            <TBody>
              <tr>
                <th>18:00</th>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>19:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>20:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>21:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
            </TBody>
          </Table>
          <TitleTurma>2° Período</TitleTurma>
          <Table>
            <THead>
              <tr>
                <th></th>
                <th>segunda</th>
                <th>terça</th>
                <th>quarta</th>
                <th>quinta</th>
                <th>sexta</th>
              </tr>
            </THead>
            <TBody>
              <tr>
                <th>18:00</th>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>19:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>20:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>21:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
            </TBody>
          </Table>
          <TitleTurma>3° Período</TitleTurma>
          <Table>
            <THead>
              <tr>
                <th></th>
                <th>segunda</th>
                <th>terça</th>
                <th>quarta</th>
                <th>quinta</th>
                <th>sexta</th>
              </tr>
            </THead>
            <TBody>
              <tr>
                <th>18:00</th>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    {' '}
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>19:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>20:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
              <tr>
                <th>21:00</th>
                <td>
                  <TdContent>
                    <TitleLesson>dac</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>testes</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson>aa</TitleLesson>{' '}
                    <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
                <td>
                  <TdContent>
                    <TitleLesson></TitleLesson> <img src={InfoLesson} alt="" />
                  </TdContent>
                </td>
              </tr>
            </TBody>
          </Table>
        </div>
      </Container>
    </Main>
  );
};

export { ViewSchedules };
