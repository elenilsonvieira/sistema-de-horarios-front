/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  InputArea,
  ButtonAction,
  InputContent,
  SelectArea,
} from '../../../../../components';
import { Main, Form } from '../styles/styles';
import { turmaControllerView } from './turmaControllerView';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { CourseModel } from '../../../../../api/model/CourseModel';
import { CourseController } from '../../../../../api/controller/CourseController';

export const Turma = () => {
  const courseController = CourseController.getInstance();
  const [name, setName] = useState<string>();
  const [courseList, setCourseList] = useState<CourseModel[]>();
  const [courseUuid, setCourseUuid] = useState<string>();

  function getDataObject() {
    return {
      name,
      course_uuid: courseUuid,
    } as TurmaModel;
  }

  const load = async () => {
    const courses = await courseController.list();
    setCourseList(courses);
    setCourseUuid(courses[0].uuid);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Main>
      <Form>
        <InputContent labelText="Nome:" htmlFor="turma">
          <InputArea
            placeholder="Ex: 1º período"
            id="turma"
            change={(event) => {
              setName(event.target.value);
            }}
          ></InputArea>
        </InputContent>
        <InputContent labelText="Curso:" htmlFor="Curso-s">
          <SelectArea
            id="Curso-s"
            change={(event) => {
              const select = event.target;
              if (courseList) {
                const uuid = courseList[select.selectedIndex].uuid;
                setCourseUuid(uuid);
              }
            }}
          >
            {courseList?.map((item) => (
              <option key={item.uuid}>{item.name}</option>
            ))}
          </SelectArea>
        </InputContent>
      </Form>

      <ButtonAction
        textButton="adicionar turma"
        onClickFunction={async () => {
          const data = getDataObject();
          await turmaControllerView(data);
        }}
      />
    </Main>
  );
};
