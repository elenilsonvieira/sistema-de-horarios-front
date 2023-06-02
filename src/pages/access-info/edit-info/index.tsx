import React, { useState } from 'react';
import { Main, TabsBar, Tab, TabLabel, SelectContainer, Title } from './styles';

import {
  Calendar,
  Classroom,
  Course,
  CurricularComponent,
  Professor,
  Turma,
  Lesson,
  Profile,
  Restriction,
} from './models';
import { InputContent, SelectArea } from '../../../components';

enum TypeLabeEnuml {
  classroom = 'Sala de Aula',
  professor = 'Professor',
  profile = 'Perfil do Professor',
  restriction = 'Restrição de Professor',
  calendar = 'Calendário',
  course = 'Curso',
  turma = 'Turma',
  curricularComponent = 'Disciplina',
  lesson = 'Aula',
}

const models = [
  {
    id: 'aaa',
    type: 'professor',
    title: 'Professor',
    checked: true,
  },
  {
    id: 'hhh',
    type: 'profile',
    title: 'Perfil',
    checked: true,
  },
  {
    id: 'iii',
    type: 'restriction',
    title: 'Restrição',
    checked: true,
  },
  {
    id: 'bbb',
    type: 'classroom',
    title: 'Sala de aula',
  },
  {
    id: 'ccc',
    type: 'curricular_component',
    title: 'Disciplina',
  },
  {
    id: 'ddd',
    type: 'calendar',
    title: 'Calendário',
  },
  {
    id: 'eee',
    type: 'turma',
    title: 'Turma',
  },
  {
    id: 'fff',
    type: 'course',
    title: 'Curso',
  },
  {
    id: 'ggg',
    type: 'lesson',
    title: 'Aula',
  },
];

export const EditInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [type, setType] = useState('professor');

  function handleChangeType(event: any) {
    setType(event.target.value);
  }

  const handleSelectEdit = (value: string) => {
    if (value === 'edit') {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  };

  return (
    <Main>
      <TabsBar>
        {models.map((model) => {
          return (
            <Tab key={model.id}>
              <input
                type="radio"
                defaultChecked={model.checked}
                value={model.type}
                id={model.type}
                name="type-select"
                onClick={(e) => handleChangeType(e)}
              />
              <TabLabel htmlFor={model.type}>
                <span>{model.title}</span>
              </TabLabel>
            </Tab>
          );
        })}
      </TabsBar>
      <Title>Editar informações</Title>
      <SelectContainer>
        <InputContent labelText="Selecione o modo:">
          <SelectArea
            id={'mode'}
            change={async (event) => {
              const select = event.target.value;
              handleSelectEdit(select);
            }}
          >
            <option value="read">Visualização</option>
            <option value="edit">Edição</option>
          </SelectArea>
        </InputContent>
      </SelectContainer>

      <div className="list-items">
        {type === 'classroom' && <Classroom editMode={editMode} />}
        {type === 'professor' && <Professor editMode={editMode} />}
        {type === 'profile' && <Profile editMode={editMode} />}
        {type === 'restriction' && <Restriction editMode={editMode} />}
        {type === 'course' && <Course editMode={editMode} />}
        {type === 'curricular_component' && (
          <CurricularComponent editMode={editMode} />
        )}
        {type === 'calendar' && <Calendar editMode={editMode} />}
        {type === 'turma' && <Turma editMode={editMode} />}
        {type === 'lesson' && <Lesson editMode={editMode} />}
      </div>
    </Main>
  );
};
